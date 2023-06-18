import {
  FiBookOpen as BookOpen,
  FiCompass as Compass,
  FiBookmark as Bookmark,
  FiSettings as Settings
} from 'react-icons/fi'
import { MdEmail, MdArrowForward } from 'react-icons/md'
import {
  TbSquareRoundedLetterB,
  TbSquareRoundedLetterD,
  TbSquareRoundedLetterH,
  TbSquareRoundedLetterL,
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
    shortcutKey: null,
    shortcutKeyIcon: null
  },
  {
    Icon: Compass,
    menuText: 'Trending Projects',
    subtitle: 'View',
    commandInterfaceOptions: CommandInterfaceOptions.GoHome,
    shortcutKey: 'H',
    shortcutKeyIcon: TbSquareRoundedLetterH
  },
  {
    Icon: Settings,
    menuText: 'Settings',
    commandInterfaceOptions: CommandInterfaceOptions.Settings,
    shortcutKey: 'S',
    shortcutKeyIcon: TbSquareRoundedLetterS
  },
  {
    Icon: Bookmark,
    menuText: 'Bookmarks',
    commandInterfaceOptions: CommandInterfaceOptions.Bookmarks,
    shortcutKey: 'B',
    shortcutKeyIcon: TbSquareRoundedLetterB
  },
  {
    Icon: BookOpen,
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
    shortcutKey: null,
    shortcutKeyIcon: null
  },
  {
    Icon: MdArrowForward,
    menuText: 'Project Details',
    commandInterfaceOptions: CommandInterfaceOptions.ProjectDetails,
    isIdPrimary: true,
    isProjectPrimary: true,
    shortcutKey: null,
    shortcutKeyIcon: null
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
