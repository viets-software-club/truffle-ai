import React, { FocusEvent, RefObject, useEffect, useRef } from 'react'

type CommandInterfaceProps = {
  action: (event: FocusEvent<HTMLInputElement>) => void
}
const CommandInterface: React.FC<CommandInterfaceProps> = ({ action }) => {
  const [searchWord, setSearchWord] = React.useState<string>('')
  const [recommendationIsOpen, setRecommendationIsOpen] = React.useState<boolean>(false)
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  useEffect(() => {
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
      <div className="w-1/2">
        <input
          className="mt-28 block h-14 w-full appearance-none rounded-2xl border border-gray-500 bg-neutral-600 bg-left-bottom
            bg-no-repeat px-10 py-5 text-white shadow-lg outline-none"
          onChange={(event) => searchHandler(event)}
          value={searchWord}
          type="text"
          id="spotlight"
          onBlur={(e) => action(e)}
          ref={inputRef}
          placeholder="Search"
        />
        {recommendationIsOpen && (
          <ul
            className="-mt-3 max-h-48 w-full overflow-y-auto rounded-b-xl border border-gray-500 bg-neutral-600
       bg-left-bottom bg-no-repeat shadow"
          >
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-900">Result 1</li>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-900">Result 2</li>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-900">Result 3</li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default CommandInterface
