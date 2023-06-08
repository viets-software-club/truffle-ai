import RecommendationRow from '@/components/side-effects/CommandInterface/RecommendationRow'
import React, { FocusEvent, FormEvent, RefObject, useEffect, useLayoutEffect, useRef } from 'react'
import { IoMdGrid } from 'react-icons/io'
import { MdArrowForward, MdEmail } from 'react-icons/md'
import { useRouter } from 'next/router'
import TruffleAiCommand from './truffle_ai_command'

type RecommendationRowType = {
  Icon?: IconComponentType | null
  MenuText: string
  IsIdPrimary?: boolean | false
  EnableDivider?: boolean | false
  Subtitle?: string | null
  TruffleAiCommand: TruffleAiCommand
}

type CommandInterfaceProps = {
  action: (event: FocusEvent<HTMLInputElement> | null) => void
}
const CommandInterface: React.FC<CommandInterfaceProps> = ({ action }) => {
  const [searchWord, setSearchWord] = React.useState<string>('')
  const [recommendationList, setRecommendationList] = React.useState<RecommendationRowType[]>([])
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const commandInterfaceWrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const defaultList: RecommendationRowType[] = [
    {
      Icon: MdEmail,
      MenuText: 'Send Mail',
      EnableDivider: true,
      TruffleAiCommand: TruffleAiCommand.SendMail
    },
    {
      Icon: IoMdGrid,
      MenuText: 'Home',
      Subtitle: 'View',
      TruffleAiCommand: TruffleAiCommand.GoHome
    },
    {
      Icon: MdArrowForward,
      MenuText: 'Settings',
      TruffleAiCommand: TruffleAiCommand.Settings
    },
    {
      Icon: MdArrowForward,
      MenuText: 'Bookmarks',
      TruffleAiCommand: TruffleAiCommand.Bookmarks
    },
    {
      Icon: MdArrowForward,
      MenuText: 'Documentation',
      TruffleAiCommand: TruffleAiCommand.Documentation
    },
    {
      Icon: MdArrowForward,
      MenuText: 'Compare Projects',
      TruffleAiCommand: TruffleAiCommand.CompareProjects,
      IsIdPrimary: true
    },
    {
      Icon: MdArrowForward,
      MenuText: 'Project Details',
      TruffleAiCommand: TruffleAiCommand.ProjectDetails,
      IsIdPrimary: true
    },
    {
      Icon: MdArrowForward,
      MenuText: 'Logout',
      TruffleAiCommand: TruffleAiCommand.Logout
    }
  ]

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
          rowItem.MenuText.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
        )
      )
    } else {
      setRecommendationList(defaultList)
    }
  }

  const navigateTo = (path: string) => {
    router.push(path).catch((exception) => {
      // @TODO show a message to user
      console.log(exception)
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
            row.MenuText.toLocaleLowerCase().includes(commandName.toLocaleLowerCase())
          )[0]
          .TruffleAiCommand.replace(':id', id)
      )
    } else {
      navigateTo(
        defaultList.filter((row) =>
          row.MenuText.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
        )[0].TruffleAiCommand
      )
    }
  }

  const rowClicked = (command: TruffleAiCommand, searchText: string, isIdPrimary: boolean) => {
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
      <div ref={commandInterfaceWrapperRef} className="w-1/2 pr-40">
        <form onSubmit={handleSubmit}>
          <input
            className="bg-blue-950 mt-28 block h-14 w-full appearance-none rounded-t-xl bg-gray-900 bg-left-bottom bg-no-repeat px-6
            py-10 shadow-lg outline-none placeholder:text-gray-600"
            onChange={(event) => searchHandler(event)}
            value={searchWord}
            type="text"
            id="spotlight"
            ref={inputRef}
            placeholder="Type a command or search..."
          />
        </form>
        <div className="h-0.5 bg-gray-600" />
        <ul className=" max-h-48 w-full overflow-y-auto rounded-b-xl bg-gray-900 bg-left-bottom bg-no-repeat shadow">
          {recommendationList.map((commandInterfaceRecommendationRowType) => (
            <RecommendationRow
              key={commandInterfaceRecommendationRowType.MenuText}
              Icon={commandInterfaceRecommendationRowType.Icon}
              MenuText={commandInterfaceRecommendationRowType.MenuText}
              EnableDivider={commandInterfaceRecommendationRowType.EnableDivider}
              Subtitle={commandInterfaceRecommendationRowType.Subtitle}
              rowClicked={() =>
                rowClicked(
                  commandInterfaceRecommendationRowType.TruffleAiCommand,
                  commandInterfaceRecommendationRowType.MenuText,
                  commandInterfaceRecommendationRowType.IsIdPrimary ?? false
                )
              }
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CommandInterface
