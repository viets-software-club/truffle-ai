import { createElement, FC } from 'react'
import { DiJava } from 'react-icons/di'
import { TbBrandGolang, TbBrandJavascript, TbBrandPython, TbBrandTypescript } from 'react-icons/tb'

import ProgrammingLanguage from '../constants/programmingLanguages'

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

const ProgrammingLanguageIcon = ({ programmingLang, ...rest }: Props) => {
  const Component = programmingLangToComp.get(programmingLang)
  if (!Component) return null
  return createElement(Component as FC, rest)
}

export default ProgrammingLanguageIcon
