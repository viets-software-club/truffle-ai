import { FiFolder as Folder } from 'react-icons/fi'
import { RxDotFilled as Dot } from 'react-icons/rx'

const sidebarCategories = [
  {
    id: 3,
    path: '/compare',
    Icon: Folder,
    text: 'Infrastructure',
    showIcon: true,
    highlighted: true,
    editable: true
  },
  {
    id: 4,
    path: '/compare',
    Icon: Folder,
    text: 'Dev Tools',
    showIcon: true,
    editable: true
  },
  {
    id: 5,
    path: '/details',
    text: 'vercel/next.js',
    Icon: Dot,
    showIcon: true,
    secondaryItem: true,
    editable: true
  },
  {
    id: 6,
    path: '/details',
    Icon: Dot,
    text: 'microsoft/playwright',
    showIcon: true,
    secondaryItem: true,
    editable: true
  },
  {
    id: 7,
    path: '/compare',
    Icon: Folder,
    text: 'Machine Learning',
    showIcon: true,
    editable: true
  },
  {
    id: 8,
    path: '/compare',
    Icon: Folder,
    text: 'Artificial Intelligence',
    showIcon: true,
    editable: true
  }
]

export default sidebarCategories
