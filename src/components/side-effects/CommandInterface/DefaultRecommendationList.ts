import { IoMdGrid } from 'react-icons/io'
import { MdEmail, MdArrowForward } from 'react-icons/md'
import CommandInterfaceOptions from './CommandInterfaceOptions'
import RecommendationRowType from './RecommendationRowType'

const defaultList: RecommendationRowType[] = [
  {
    Icon: MdEmail,
    menuText: 'Send Mail',
    enableDivider: true,
    commandInterfaceOptions: CommandInterfaceOptions.SendMail,
    isProjectPrimary: true
  },
  {
    Icon: IoMdGrid,
    menuText: 'Home',
    subtitle: 'View',
    commandInterfaceOptions: CommandInterfaceOptions.GoHome
  },
  {
    Icon: MdArrowForward,
    menuText: 'Settings',
    commandInterfaceOptions: CommandInterfaceOptions.Settings
  },
  {
    Icon: MdArrowForward,
    menuText: 'Bookmarks',
    commandInterfaceOptions: CommandInterfaceOptions.Bookmarks
  },
  {
    Icon: MdArrowForward,
    menuText: 'Documentation',
    commandInterfaceOptions: CommandInterfaceOptions.Documentation
  },
  {
    Icon: MdArrowForward,
    menuText: 'Compare Projects',
    commandInterfaceOptions: CommandInterfaceOptions.CompareProjects,
    isIdPrimary: true
  },
  {
    Icon: MdArrowForward,
    menuText: 'Project Details',
    commandInterfaceOptions: CommandInterfaceOptions.ProjectDetails,
    isIdPrimary: true
  },
  {
    Icon: MdArrowForward,
    menuText: 'Logout',
    commandInterfaceOptions: CommandInterfaceOptions.Logout
  }
]

export default defaultList
