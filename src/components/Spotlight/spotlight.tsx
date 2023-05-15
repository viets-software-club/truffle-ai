import React from 'react'

const Spotlight = () => {
  const [searchWord, setSearchWord] = React.useState('')

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
        placeholder="Spotlight-Search"
      />
    </div>
  )
}

export default Spotlight
