import RecommendationRow from '@/components/side-effects/CommandInterface/RecommendationRow'
import React, { FocusEvent, RefObject, useEffect, useLayoutEffect, useRef } from 'react'
import { IoMdGrid } from 'react-icons/io'
import { MdArrowForward, MdEmail } from 'react-icons/md'
import { useRouter } from 'next/router'
import TruffleAiCommand from './truffle_ai_command'

type RecommendationRowType = {
  Icon?: IconComponentType | null
  MenuText: string
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
      Icon: MdArrowForward,
      MenuText: 'Navigate Details',
      Subtitle: 'View',
      TruffleAiCommand: TruffleAiCommand.GoDetails
    },
    {
      Icon: IoMdGrid,
      MenuText: 'Home',
      TruffleAiCommand: TruffleAiCommand.GoHome
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
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (recommendationList.length === 0) {
      setRecommendationList(defaultList)
    }
  }, [recommendationList])

  useLayoutEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [])

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchWord(event.target.value)
    // @TODO Run search
  }

  const rowClicked = (command: TruffleAiCommand, searchText: string) => {
    setSearchWord(searchText)
    router.push(command).catch((exception) => {
      // @TODO show a message to user
      console.log(exception)
    })
  }

  return (
    <div
      className="fixed flex h-screen w-full items-start justify-center bg-black/50 shadow-lg"
      id="spotlight_wrapper"
    >
      <div ref={commandInterfaceWrapperRef} className="w-1/2 pr-40">
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
        <div className="h-0.5 bg-gray-600" />
        <ul className=" max-h-48 w-full overflow-y-auto rounded-b-xl bg-gray-900 bg-left-bottom bg-no-repeat shadow">
          {defaultList.map((commandInterfaceRecommendationRowType) => (
            <RecommendationRow
              rowClicked={() =>
                rowClicked(
                  commandInterfaceRecommendationRowType.TruffleAiCommand,
                  commandInterfaceRecommendationRowType.MenuText
                )
              }
              key={commandInterfaceRecommendationRowType.MenuText}
              Icon={commandInterfaceRecommendationRowType.Icon}
              MenuText={commandInterfaceRecommendationRowType.MenuText}
              EnableDivider={commandInterfaceRecommendationRowType.EnableDivider}
              Subtitle={commandInterfaceRecommendationRowType.Subtitle}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CommandInterface
