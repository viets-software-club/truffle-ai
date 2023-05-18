import React, { FocusEvent, RefObject, useEffect, useRef } from 'react'

type CommandInterfaceProps = {
  action: (event: FocusEvent<HTMLInputElement>) => void
}
const CommandInterface: React.FC<CommandInterfaceProps> = ({ action }) => {
  const [searchWord, setSearchWord] = React.useState('')
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchWord(event.target.value)
    // TODO Run search
  }

  return (
    <div id="spotlight_wrapper">
      <input
        onChange={(event) => searchHandler(event)}
        value={searchWord}
        type="text"
        id="spotlight"
        onBlur={(e) => action(e)}
        ref={inputRef}
        placeholder="Search"
      />
    </div>
  )
}

export default CommandInterface
