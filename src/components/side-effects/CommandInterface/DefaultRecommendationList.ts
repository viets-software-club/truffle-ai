import { IoMdGrid } from 'react-icons/io'
import { MdEmail, MdArrowForward } from 'react-icons/md'
import {
  TbSquareRoundedLetterB,
  TbSquareRoundedLetterC,
  TbSquareRoundedLetterD,
  TbSquareRoundedLetterH,
  TbSquareRoundedLetterL,
  TbSquareRoundedLetterM,
  TbSquareRoundedLetterP,
  TbSquareRoundedLetterS
} from 'react-icons/tb'
import CommandInterfaceOptions from './CommandInterfaceOptions'
import RecommendationRowType from './RecommendationRowType'

const defaultList: RecommendationRowType[] = [
  {
    Icon: MdEmail,
    menuText: 'Send Mail',
    enableDivider: true,
    commandInterfaceOptions: CommandInterfaceOptions.SendMail,
    isProjectPrimary: true,
    isIdPrimary: true,
    shortcutKey: 'M',
    shortcutKeyIcon: TbSquareRoundedLetterM
  },
  {
    Icon: IoMdGrid,
    menuText: 'Home',
    subtitle: 'View',
    commandInterfaceOptions: CommandInterfaceOptions.GoHome,
    shortcutKey: 'H',
    shortcutKeyIcon: TbSquareRoundedLetterH
  },
  {
    Icon: MdArrowForward,
    menuText: 'Settings',
    commandInterfaceOptions: CommandInterfaceOptions.Settings,
    shortcutKey: 'S',
    shortcutKeyIcon: TbSquareRoundedLetterS
  },
  {
    Icon: MdArrowForward,
    menuText: 'Bookmarks',
    commandInterfaceOptions: CommandInterfaceOptions.Bookmarks,
    shortcutKey: 'B',
    shortcutKeyIcon: TbSquareRoundedLetterB
  },
  {
    Icon: MdArrowForward,
    menuText: 'Documentation',
    commandInterfaceOptions: CommandInterfaceOptions.Documentation,
    shortcutKey: 'D',
    shortcutKeyIcon: TbSquareRoundedLetterD
  },
  {
    Icon: MdArrowForward,
    menuText: 'Compare Projects',
    commandInterfaceOptions: CommandInterfaceOptions.CompareProjects,
    isIdPrimary: true,
    isProjectPrimary: true,
    shortcutKey: 'C',
    shortcutKeyIcon: TbSquareRoundedLetterC
  },
  {
    Icon: MdArrowForward,
    menuText: 'Project Details',
    commandInterfaceOptions: CommandInterfaceOptions.ProjectDetails,
    isIdPrimary: true,
    isProjectPrimary: true,
    shortcutKey: 'P',
    shortcutKeyIcon: TbSquareRoundedLetterP
  },
  {
    Icon: MdArrowForward,
    menuText: 'Logout',
    commandInterfaceOptions: CommandInterfaceOptions.Logout,
    shortcutKey: 'L',
    shortcutKeyIcon: TbSquareRoundedLetterL,
    needConfirmation: true
  }
]

export default defaultList
