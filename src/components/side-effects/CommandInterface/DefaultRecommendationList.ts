import {
  FiBookOpen as BookOpen,
  FiBookmark as Bookmark,
  FiCompass as Compass,
  FiLogOut as Logout,
  FiMail as Mail,
  FiSettings as Settings
} from 'react-icons/fi'
import { MdArrowForward } from 'react-icons/md'
import CommandInterfaceOptions from './CommandInterfaceOptions'
import { RecommendationRowType } from './types'

const defaultList: RecommendationRowType[] = [
  {
    Icon: Mail,
    menuText: 'Send Mail',
    subtitle: 'Actions',
    commandInterfaceOptions: CommandInterfaceOptions.SendMail,
    isProjectPrimary: true,
    isIdPrimary: true,
    shortcutKey: null,
    pageRestriction: 'details'
  },
  {
    Icon: Compass,
    menuText: 'Trending Projects',
    subtitle: 'Projects',
    commandInterfaceOptions: CommandInterfaceOptions.GoHome,
    shortcutKey: 'H',
    pageRestriction: null
  },
  {
    Icon: Bookmark,
    menuText: 'Bookmarks',
    commandInterfaceOptions: CommandInterfaceOptions.Bookmarks,
    shortcutKey: 'B',
    pageRestriction: null
  },
  {
    Icon: MdArrowForward,
    menuText: 'Compare Projects',
    commandInterfaceOptions: CommandInterfaceOptions.CompareProjects,
    isIdPrimary: true,
    isProjectPrimary: true,
    shortcutKey: null,
    pageRestriction: null
  },
  {
    Icon: MdArrowForward,
    menuText: 'Project Details',
    commandInterfaceOptions: CommandInterfaceOptions.ProjectDetails,
    isIdPrimary: true,
    isProjectPrimary: true,
    shortcutKey: null,
    pageRestriction: null
  },
  {
    Icon: Settings,
    menuText: 'Settings',
    subtitle: 'Account',
    commandInterfaceOptions: CommandInterfaceOptions.Settings,
    shortcutKey: 'S',
    pageRestriction: null
  },
  {
    Icon: Logout,
    menuText: 'Logout',
    commandInterfaceOptions: CommandInterfaceOptions.Logout,
    shortcutKey: 'L',
    needConfirmation: true,
    pageRestriction: null
  },
  {
    Icon: BookOpen,
    menuText: 'Documentation',
    subtitle: 'Help',
    commandInterfaceOptions: CommandInterfaceOptions.Documentation,
    shortcutKey: 'D',
    pageRestriction: null
  }
]

export default defaultList
