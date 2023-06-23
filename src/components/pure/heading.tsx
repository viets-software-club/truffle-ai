import React from 'react'

type HeaderProps = {
  text: string
}
const generateHeaderId = (text: string) => text.toLowerCase().replace('/[^a-zA-Z0-9]+/g', '')

export const HeaderOne: React.FC<HeaderProps> = ({ text }) => (
  <h1 id={generateHeaderId(text)} className="pb-4 text-20 font-semibold text-gray-200">
    {text}
  </h1>
)

export const HeaderTwo: React.FC<HeaderProps> = ({ text }) => (
  <h2 id={generateHeaderId(text)} className="pb-1 text-16 font-semibold text-gray-300">
    {text}
  </h2>
)

export const HeaderThree: React.FC<HeaderProps> = ({ text }) => (
  <h3 id={generateHeaderId(text)} className="pb-1 text-14 font-semibold text-gray-300">
    {text}
  </h3>
)

export const HeaderFour: React.FC<HeaderProps> = ({ text }) => (
  <h4 id={generateHeaderId(text)} className="text-14 font-normal">
    {text}
  </h4>
)
