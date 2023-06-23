import React from 'react'

type HeaderProps = {
  text: string
}
const generateHeaderId = (text: string) => text.toLowerCase().replace('/[^a-zA-Z0-9]+/g', '')

const Header: React.FC<HeaderProps> = ({ text }) => {
  const headerId = generateHeaderId(text)
  return (
    <h1 id={headerId} className="py-1 pb-4 text-20 font-medium">
      {text}
    </h1>
  )
}

export const HeaderOne: React.FC<HeaderProps> = ({ text }) => <Header text={text} />

export const HeaderTwo: React.FC<HeaderProps> = ({ text }) => {
  const headerId = generateHeaderId(text)
  return (
    <h2 id={headerId} className="py-1 text-18">
      {text}
    </h2>
  )
}

export const HeaderThree: React.FC<HeaderProps> = ({ text }) => {
  const headerId = generateHeaderId(text)
  return (
    <h3 id={headerId} className="py-1 pt-2 text-16">
      {text}
    </h3>
  )
}

export const HeaderFour: React.FC<HeaderProps> = ({ text }) => {
  const headerId = generateHeaderId(text)
  return (
    <h4 id={headerId} className="text-base font-normal">
      {text}
    </h4>
  )
}
