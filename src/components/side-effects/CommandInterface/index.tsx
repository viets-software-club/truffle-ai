import { useRouter } from 'next/router'
import React, { FormEvent, RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Project, useTrendingProjectsQuery } from '@/graphql/generated/gql'
import { defaultSort } from '@/components/page/overview/types'
import emailTemplate from '@/util/emailTemplate'
import defaultFilters from '@/components/page/overview/defaultFilters'
import defaultList from './DefaultRecommendationList'
import CommandInterfaceOptions from './CommandInterfaceOptions'
import CommandInterfaceModal from './CommandInterfaceModal'
import { RecommendationRowType } from './types'

/**
 * Comand interface logic/ event listeners
 */
const CommandInterface: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [searchWord, setSearchWord] = useState<string>('')
  const [isProjectListOn, setIsProjectListOn] = useState<boolean>(false)
  const [recommendationList, setRecommendationList] = useState<RecommendationRowType[]>([])
  const [prevProjectRecommendationList, setPrevProjectRecommendationList] = useState<
    RecommendationRowType[]
  >([])

  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const commandInterfaceWrapperRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  const router = useRouter()

  const [{ data }] = useTrendingProjectsQuery({
    variables: {
      orderBy: defaultSort,
      filter: defaultFilters
    }
  })

  const projects = data?.projectCollection?.edges?.map((edge) => edge.node) as Project[]

  const toggleModal = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        if (event.key === 'k') {
          event.preventDefault()
          toggleModal()
        }

        const shortcutsForPages = defaultList.filter(
          (item) => item.shortcutKey?.toLocaleLowerCase() === event.key.toLocaleLowerCase()
        )

        if (shortcutsForPages.length > 0) {
          event.preventDefault()

          void router.push(shortcutsForPages[0].commandInterfaceOptions)
        }
      } else if (event.key === 'Escape') {
        toggleModal()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        commandInterfaceWrapperRef.current &&
        !commandInterfaceWrapperRef.current.contains(event.target as Node)
      ) {
        toggleModal()
      }
    }

    if (recommendationList.length === 0) {
      setRecommendationList(defaultList)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useLayoutEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [])

  const isCommandExistInList = (command: RecommendationRowType, word: string): boolean =>
    command.menuText.toLocaleLowerCase().includes(word.trim().toLocaleLowerCase())

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let search = event.target.value

    setSearchWord(search)

    if (search.trim() !== '' && !search.includes('>') && !search.includes('<')) {
      if (isProjectListOn) {
        search = defaultList
          .map((item) => item.menuText.toLocaleLowerCase())
          .includes(search.toLocaleLowerCase())
          ? ''
          : search.split(' ')[search.split(' ').length - 1]

        if (
          prevProjectRecommendationList.filter((rowItem) => isCommandExistInList(rowItem, search))
            .length === 0
        ) {
          setRecommendationList(defaultList)
          setIsProjectListOn(false)
          return
        }
        setRecommendationList(
          prevProjectRecommendationList.filter((rowItem) => isCommandExistInList(rowItem, search))
        )
      } else {
        setRecommendationList(
          defaultList.filter((rowItem) => isCommandExistInList(rowItem, search))
        )
      }
    } else if (search.trim() === '') {
      setIsProjectListOn(false)
      setRecommendationList(defaultList)
    }
  }

  const navigateTo = (path: string) => {
    void router.push(path)
  }

  const setCommandInterface = (commandInterfaceOption: string, item: Project): string => {
    if (commandInterfaceOption.includes(':id')) {
      return commandInterfaceOption.replace(':id', item.id as string)
    }

    if (commandInterfaceOption.includes('mailto:')) {
      return emailTemplate(
        item.associatedPerson?.email ?? '',
        item.associatedPerson?.name ?? '',
        item.name ?? ''
      )
    }

    return '/' as string
  }

  const setProjectNamesAsRow = (commandInterfaceOption: string) => {
    if (projects !== undefined) {
      const newRecommendationList: RecommendationRowType[] = projects.map(
        (item: Project, index: number) => {
          const recommendationRow: RecommendationRowType = {
            Icon: MdArrowForward,
            menuText: (item.name as string) ?? (item.id as string),
            commandInterfaceOptions: setCommandInterface(commandInterfaceOption, item),
            shortcutKey: index.toString()
          }
          return recommendationRow
        }
      )

      setIsProjectListOn(true)
      setRecommendationList(newRecommendationList)
      setPrevProjectRecommendationList(newRecommendationList)
    }
  }

  const showConfirmationLines = () => {
    setSearchWord('Are you sure?')

    const yesLine: RecommendationRowType = {
      Icon: MdArrowForward,
      menuText: 'Yes',
      commandInterfaceOptions: CommandInterfaceOptions.Logout,
      isIdPrimary: false,
      shortcutKey: 'Yes'
    }

    const noLine: RecommendationRowType = {
      Icon: MdArrowForward,
      menuText: 'No',
      commandInterfaceOptions: CommandInterfaceOptions.GoHome,
      isIdPrimary: false,
      shortcutKey: 'No'
    }

    setRecommendationList([yesLine, noLine])
  }

  const handleNavigation = (
    command: string,
    searchText: string,
    isIdPrimary: boolean,
    needConfirmation: boolean
  ) => {
    if (needConfirmation) {
      showConfirmationLines()
    } else if (!isIdPrimary) {
      navigateTo(command)
      setIsProjectListOn(false)
      toggleModal()
    } else if (isIdPrimary) {
      setSearchWord(`${searchText} <project name>`)
      setProjectNamesAsRow(command)
    } else {
      setSearchWord('Please choose a project first.')
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const searchWordAsArray = searchWord.split(' ')
    let commandName = ''.concat(searchWord)

    if (searchWordAsArray.length > 1) {
      commandName = isProjectListOn
        ? searchWordAsArray[searchWordAsArray.length - 1]
        : searchWordAsArray.slice(0, 2).join(' ')
    }

    const command = recommendationList.filter((row) =>
      row.menuText.toLocaleLowerCase().includes(commandName.toLocaleLowerCase())
    )[0]

    handleNavigation(
      command.commandInterfaceOptions,
      command.menuText,
      command.isIdPrimary ?? false,
      command.needConfirmation ?? false
    )
  }

  const handleClick = (
    command: string,
    searchText: string,
    isIdPrimary: boolean,
    needConfirmation: boolean
  ) => {
    setSearchWord(searchText)
    handleNavigation(command, searchText, isIdPrimary, needConfirmation)
  }

  return (
    <CommandInterfaceModal
      open={open}
      searchWord={searchWord}
      isProjectListOn={isProjectListOn}
      recommendationList={recommendationList}
      wrapperRef={commandInterfaceWrapperRef}
      inputRef={inputRef}
      toggleModal={toggleModal}
      handleClick={handleClick}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default CommandInterface
