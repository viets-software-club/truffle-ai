import React, {
  FocusEvent,
  FormEvent,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import { useRouter } from 'next/router'
import RecommendationRow from '@/components/side-effects/CommandInterface/RecommendationRow'
import CommandInterfaceOptions from './CommandInterfaceOptions'
import defaultList from './DefaultRecommendationList'
import RecommendationRowType from './RecommendationRowType'

type CommandInterfaceProps = {
  action: (event: FocusEvent<HTMLInputElement> | null) => void
}

const CommandInterface: React.FC<CommandInterfaceProps> = ({ action }) => {
  const [searchWord, setSearchWord] = useState<string>('')
  const [recommendationList, setRecommendationList] = useState<RecommendationRowType[]>([])
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const commandInterfaceWrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        commandInterfaceWrapperRef.current &&
        !commandInterfaceWrapperRef.current.contains(event.target as Node)
      ) {
        action(null)
      }
    }
    setRecommendationList(defaultList)
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useLayoutEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [])

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const search = event.target.value
    setSearchWord(search)
    if (search.trim() !== '') {
      setRecommendationList(
        defaultList.filter((rowItem) =>
          rowItem.menuText.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
        )
      )
    } else {
      setRecommendationList(defaultList)
    }
  }

  const navigateTo = (path: string) => {
    router.push(path).catch(() => {
      // @TODO show a message to user
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchWordAsArray = searchWord.split(' ')
    if (searchWordAsArray.length > 1) {
      const id = searchWord.split(' ')[searchWordAsArray.length - 1]
      const commandName = searchWordAsArray.slice(0, 2).join(' ')
      navigateTo(
        defaultList
          .filter((row) =>
            row.menuText.toLocaleLowerCase().includes(commandName.toLocaleLowerCase())
          )[0]
          .commandInterfaceOptions?.replace(':id', id)
      )
    } else {
      navigateTo(
        defaultList.filter((row) =>
          row.menuText.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
        )[0].commandInterfaceOptions
      )
    }
  }

  const rowClicked = (
    command: CommandInterfaceOptions,
    searchText: string,
    isIdPrimary: boolean
  ) => {
    setSearchWord(searchText)
    if (!isIdPrimary) {
      navigateTo(command)
    } else {
      setSearchWord(`${searchText} <project id>`)
    }
  }

  return (
    <div
      className="fixed flex h-screen w-full items-start justify-center bg-black/50 shadow-lg"
      id="spotlight_wrapper"
    >
      <div ref={commandInterfaceWrapperRef} className="h-96 w-1/2">
        <form onSubmit={handleSubmit}>
          <input
            className="mt-28 block h-14 w-full appearance-none rounded-t-xl bg-gray-900 bg-left-bottom bg-no-repeat px-6
            py-10 shadow-lg outline-none placeholder:text-gray-600"
            onChange={(event) => searchHandler(event)}
            value={searchWord}
            autoComplete="off"
            spellCheck="false"
            type="text"
            id="spotlight"
            ref={inputRef}
            placeholder="Type a command or search..."
          />
        </form>
        <div className="h-0.5 bg-gray-600" />
        <ul className="h-full w-full overflow-y-auto rounded-b-xl bg-gray-900 bg-left-bottom bg-no-repeat shadow">
          {recommendationList.map((item, index) => (
            <RecommendationRow
              key={item.menuText}
              Icon={item.Icon}
              isHighlighted={index === 0 && searchWord !== ''}
              menuText={item.menuText}
              enableDivider={item.enableDivider}
              subtitle={item.subtitle}
              rowClicked={() =>
                rowClicked(item.commandInterfaceOptions, item.menuText, item.isIdPrimary ?? false)
              }
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CommandInterface
