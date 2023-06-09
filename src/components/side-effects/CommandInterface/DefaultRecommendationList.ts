import { IoMdGrid } from 'react-icons/io'
import { MdEmail, MdArrowForward } from 'react-icons/md'
import CommandInterfaceOptions from './CommandInterfaceOptions'
import RecommendationRowType from './RecommendationRowType'

const defaultList: RecommendationRowType[] = [
  {
    Icon: MdEmail,
    menuText: 'Send Mail',
    enableDivider: true,
    truffleAiCommand: CommandInterfaceOptions.SendMail
  },
  {
    Icon: IoMdGrid,
    menuText: 'Home',
    subtitle: 'View',
    truffleAiCommand: CommandInterfaceOptions.GoHome
  },
  {
    Icon: MdArrowForward,
    menuText: 'Settings',
    truffleAiCommand: CommandInterfaceOptions.Settings
  },
  {
    Icon: MdArrowForward,
    menuText: 'Bookmarks',
    truffleAiCommand: CommandInterfaceOptions.Bookmarks
  },
  {
    Icon: MdArrowForward,
    menuText: 'Documentation',
    truffleAiCommand: CommandInterfaceOptions.Documentation
  },
  {
    Icon: MdArrowForward,
    menuText: 'Compare Projects',
    truffleAiCommand: CommandInterfaceOptions.CompareProjects,
    isIdPrimary: true
  },
  {
    Icon: MdArrowForward,
    menuText: 'Project Details',
    truffleAiCommand: CommandInterfaceOptions.ProjectDetails,
    isIdPrimary: true
  },
  {
    Icon: MdArrowForward,
    menuText: 'Logout',
    truffleAiCommand: CommandInterfaceOptions.Logout
  }
]

export default defaultList
