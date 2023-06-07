import RecommendationRow, {
  RecommendationRowType
} from '@/components/side-effects/CommandInterface/RecommendationRow'
import React, { FocusEvent, RefObject, useEffect, useLayoutEffect, useRef } from 'react'
import { FaCalendar } from 'react-icons/fa'
import { IoMdGrid } from 'react-icons/io'
import { MdArrowForward } from 'react-icons/md'

type CommandInterfaceProps = {
  action: (event: FocusEvent<HTMLInputElement> | null) => void
}
const CommandInterface: React.FC<CommandInterfaceProps> = ({ action }) => {
  const [searchWord, setSearchWord] = React.useState<string>('')
  const [recommendationList, setRecommendationList] = React.useState<RecommendationRowType[]>([])
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const commandInterfaceWrapperRef = useRef<HTMLDivElement>(null)

  const defaultList: RecommendationRowType[] = [
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

  return (
    <div
      className="fixed flex h-screen w-full items-start justify-center bg-black bg-opacity-50 shadow-lg"
      id="spotlight_wrapper"
    >
      <div ref={commandInterfaceWrapperRef} className="w-1/2 pr-40">
        <input
          className="bg-blue-950 mt-28 block h-14 w-full appearance-none rounded-t-xl bg-gray-900 bg-left-bottom bg-no-repeat px-4
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
