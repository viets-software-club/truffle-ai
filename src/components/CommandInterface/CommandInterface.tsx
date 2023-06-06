import React, { FocusEvent, RefObject, useLayoutEffect, useRef } from 'react'
import CommandInterfaceRecommendationRow, {
  CommandInterfaceRecommendationRowType
} from '@/components/commandinterface/CommandInterfaceRecommendationRow'
import { FaCalendar } from 'react-icons/fa'
import { IoMdGrid } from 'react-icons/io'
import { MdArrowForward } from 'react-icons/md'
import CommandIntefaceDivider from '@/components/commandinterface/CommandInterfaceDivider'

type CommandInterfaceProps = {
  action: (event: FocusEvent<HTMLInputElement>) => void
}
const CommandInterface: React.FC<CommandInterfaceProps> = ({ action }) => {
  const [searchWord, setSearchWord] = React.useState<string>('')
  const [recommendationIsOpen, setRecommendationIsOpen] = React.useState<boolean>(true)
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

  const defaultList: CommandInterfaceRecommendationRowType[] = [
    {
      Icon: FaCalendar,
      MenuText: 'Calendar',
      EnableDivider: true
    },
    {
      Icon: IoMdGrid,
      MenuText: 'Home'
    },
    {
      Icon: MdArrowForward,
      MenuText: 'Navigate',
      Subtitle: 'View'
    }
  ]

  useLayoutEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [])
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchWord(event.target.value)
    setRecommendationIsOpen(true)
    // TODO Run search
  }

  return (
    <div className="fixed flex h-screen w-full items-start justify-center" id="spotlight_wrapper">
      <div className="w-1/2 pr-40">
        <input
          className="text-gray bg-blue-950 mt-28 block h-14 w-full appearance-none rounded-t-xl bg-gray-900 bg-left-bottom bg-no-repeat
            px-4 py-10 shadow-lg outline-none"
          onChange={(event) => searchHandler(event)}
          value={searchWord}
          type="text"
          id="spotlight"
          ref={inputRef}
          onBlur={action}
          placeholder="Type a command or search..."
        />
        <CommandIntefaceDivider />
        {recommendationIsOpen && (
          <ul className=" max-h-48 w-full overflow-y-auto rounded-b-xl bg-gray-900 bg-left-bottom bg-no-repeat shadow">
            {defaultList.map((commandInterfaceRecommendationRowType) => (
              <CommandInterfaceRecommendationRow
                key={commandInterfaceRecommendationRowType.MenuText}
                Icon={commandInterfaceRecommendationRowType.Icon}
                MenuText={commandInterfaceRecommendationRowType.MenuText}
                EnableDivider={commandInterfaceRecommendationRowType.EnableDivider}
                Subtitle={commandInterfaceRecommendationRowType.Subtitle}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default CommandInterface
