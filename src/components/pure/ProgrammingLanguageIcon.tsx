import { createElement, FC } from 'react'
import { DiJava } from 'react-icons/di'
import { TbBrandGolang, TbBrandJavascript, TbBrandPython, TbBrandTypescript } from 'react-icons/tb'

import ProgrammingLanguage from '@/constants/programmingLanguages'

type Props = {
  programmingLang: ProgrammingLanguage
  [rest: string]: unknown
}

const programmingLangToComp = new Map([
  [ProgrammingLanguage.JAVA, DiJava],
  [ProgrammingLanguage.GO, TbBrandGolang],
  [ProgrammingLanguage.JAVASCRIPT, TbBrandJavascript],
  [ProgrammingLanguage.PYTHON, TbBrandPython],
  [ProgrammingLanguage.TYPESCRIPT, TbBrandTypescript]
])

/**
 * A functional component that renders an icon corresponding to a given programming language.
 * @param {Props} props - The properties passed to this component.
 * @returns {React.Element|null} The icon component for the given programming language, or null if no matching icon is found.
 */
const ProgrammingLanguageIcon = ({ programmingLang, ...rest }: Props) => {
  const Component = programmingLangToComp.get(programmingLang)
  if (!Component) return null
  return createElement(Component as FC, rest)
}

export default ProgrammingLanguageIcon
