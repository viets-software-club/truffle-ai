import { useRouter } from 'next/router'
import React, { FormEvent, RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { MdArrowForward } from 'react-icons/md'
import { Project, useTrendingProjectsQuery } from '@/graphql/generated/gql'
import emailTemplate from '@/util/emailTemplate'
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
  const [selectedLine, setSelectedLine] = useState<number>(0)
  const [isProjectListOn, setIsProjectListOn] = useState<boolean>(false)
  const [recommendationList, setRecommendationList] = useState<RecommendationRowType[]>([])
  const [prevProjectRecommendationList, setPrevProjectRecommendationList] = useState<
    RecommendationRowType[]
  >([])

  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const commandInterfaceWrapperRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const listRef: RefObject<HTMLDivElement> = useRef(null)

  const router = useRouter()
  const { id } = router.query

  const [{ data }] = useTrendingProjectsQuery()

  const projects = data?.projectCollection?.edges?.map((edge) => edge.node) as Project[]

  const toggleModal = () => {
    setOpen(!open)
  }

  const scrollToNextItem = () => {
    const currentList = listRef.current
    if (currentList) {
      const currentItem = currentList.querySelector('#active')
      if (currentItem) {
        currentItem.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const scrollToPrevItem = () => {
    const currentList = listRef.current
    if (currentList) {
      const currentItem = currentList.querySelector('#prevActive')
      if (currentItem) {
        currentItem.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const keyDownEvent = (event: KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      if (event.key === 'k') {
        event.preventDefault()
        toggleModal()
        return
      }

      const shortcutItem = defaultList.find(
        (item) => item.shortcutKey?.toLowerCase() === event.key.toLowerCase()
      )

      if (shortcutItem) {
        event.preventDefault()
        void router.push(shortcutItem.commandInterfaceOptions)
      }
    } else if (event.key === 'Escape') {
      toggleModal()
    } else if (event.key === 'ArrowUp') {
      const newLine =
        selectedLine !== 0
          ? (selectedLine - 1) % (recommendationList.length || defaultList.length)
          : defaultList.length - 1
      setSelectedLine(newLine)
      scrollToPrevItem()
    } else if (event.key === 'ArrowDown') {
      const newLine = (selectedLine + 1) % (recommendationList.length || defaultList.length)
      setSelectedLine(newLine)
      scrollToNextItem()
    }
  }

  const clickOutside = (event: MouseEvent) => {
    if (
      commandInterfaceWrapperRef.current &&
      !commandInterfaceWrapperRef.current.contains(event.target as Node)
    ) {
      toggleModal()
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keyDownEvent(event)
    }

    const handleClickOutside = (event: MouseEvent) => {
      clickOutside(event)
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
  }, [selectedLine])

  const isMailRefEmpty = (): boolean =>
    recommendationList.filter((item) => item.commandInterfaceOptions === 'mailto:').length !== 0

  useEffect(() => {
    if (projects && isMailRefEmpty()) {
      setRecommendationList(
        defaultList.map((item) => {
          const newItem = { ...item }
          if (newItem.commandInterfaceOptions.includes('mailto:')) {
            const project = projects.filter((projectItem) => projectItem.id === id)[0]
            newItem.commandInterfaceOptions = emailTemplate(
              project?.associatedPerson?.email ?? '',
              project?.associatedPerson?.name ?? '',
              project?.name ?? ''
            )
          }
          return newItem
        })
      )
    }
  }, [projects])

  useLayoutEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [])

  const isCommandExistInList = (command: RecommendationRowType, word: string): boolean =>
    command.menuText.toLocaleLowerCase().includes(word.trim().toLocaleLowerCase()) ||
    word.trim().toLocaleLowerCase().includes(command.menuText.toLocaleLowerCase())

  const isCommandExactlyExistInList = (command: RecommendationRowType, word: string): boolean =>
    command.menuText.toLocaleLowerCase() === word.trim().toLocaleLowerCase()

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
            pageRestriction: null,
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

  // eslint-disable-next-line sonarjs/cognitive-complexity
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchWord(event.target.value)
    const search = event.target.value.trim()
    const filteredDefaultList = defaultList.filter((index) => isCommandExistInList(index, search))
    const isSearchNotEmpty = search !== ''
    const isSearchContainingSymbol = search.includes('>') || search.includes('<')
    const isSingleFilteredResult = filteredDefaultList.length === 1
    const isMultipleSearchTerms = search.split(' ').length > 2

    if (isSearchNotEmpty) {
      if (!isSearchContainingSymbol) {
        if (isProjectListOn && isSingleFilteredResult) {
          if (isMultipleSearchTerms) {
            const lastSearchTerm = search.split(' ').pop()!
            setRecommendationList(
              prevProjectRecommendationList.filter((rowItem) =>
                isCommandExistInList(rowItem, lastSearchTerm)
              )
            )
          } else if (!defaultList.some((index) => isCommandExactlyExistInList(index, search))) {
            setIsProjectListOn(false)
            setRecommendationList(
              defaultList.filter((rowItem) => isCommandExistInList(rowItem, search))
            )
          } else {
            setProjectNamesAsRow(filteredDefaultList[0]?.commandInterfaceOptions ?? [])
          }
        } else if (!defaultList.some((index) => isCommandExactlyExistInList(index, search))) {
          setIsProjectListOn(false)
          setRecommendationList(
            defaultList.filter((rowItem) => isCommandExistInList(rowItem, search))
          )
        } else {
          setProjectNamesAsRow(filteredDefaultList[0]?.commandInterfaceOptions ?? [])
        }
      } else if (filteredDefaultList[0].isIdPrimary) {
        setProjectNamesAsRow(filteredDefaultList[0].commandInterfaceOptions)
        setIsProjectListOn(true)
      }
    } else {
      setIsProjectListOn(false)
      setRecommendationList(defaultList)
    }
  }

  const navigateTo = (path: string) => {
    void router.push(path)
  }

  const showConfirmationLines = () => {
    setSearchWord('Are you sure?')

    const yesLine: RecommendationRowType = {
      Icon: MdArrowForward,
      menuText: 'Yes',
      commandInterfaceOptions: CommandInterfaceOptions.Logout,
      isIdPrimary: false,
      shortcutKey: 'Yes',
      pageRestriction: null
    }

    const noLine: RecommendationRowType = {
      Icon: MdArrowForward,
      menuText: 'No',
      commandInterfaceOptions: CommandInterfaceOptions.GoHome,
      isIdPrimary: false,
      shortcutKey: 'No',
      pageRestriction: null
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

    let command = recommendationList.filter((row) =>
      row.menuText.toLocaleLowerCase().includes(commandName.toLocaleLowerCase())
    )[0]

    if (searchWord === '') {
      command = recommendationList[selectedLine]
    }

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
      selectedLine={selectedLine}
      searchWord={searchWord}
      isProjectListOn={isProjectListOn}
      recommendationList={recommendationList}
      wrapperRef={commandInterfaceWrapperRef}
      listRef={listRef}
      inputRef={inputRef}
      toggleModal={toggleModal}
      handleClick={handleClick}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default CommandInterface
