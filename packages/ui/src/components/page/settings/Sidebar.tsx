import Link from 'next/link'
import { FiUser, FiHash, FiChevronLeft, FiSettings } from 'react-icons/fi'

type SidebarProps = {
  sections: Record<string, string[]>
  activeSection: string
  onClick: (id: string) => void
}

const Sidebar = ({ sections, activeSection, onClick }: SidebarProps) => {
  const icons: Record<string, JSX.Element> = {
    General: <FiSettings />,
    Account: <FiUser />,
    Integrations: <FiHash />
  }

  return (
    <div className="fixed left-0 top-0 h-full w-56 overflow-auto border-r border-gray-800 px-4">
      <Link href="/">
        <div className="text-20 flex flex-row items-center py-4 text-gray-500">
          <FiChevronLeft className="mr-2" />
          <h2 className="font-medium text-white">Settings</h2>
        </div>
      </Link>

      {Object.entries(sections).map(([heading, subSections]) => (
        <div key={heading}>
          <div className="text-12 flex flex-row items-center py-4 text-gray-500">
            <div className="mr-2">{icons[heading]}</div>
            <h2 className="font-medium uppercase">{heading}</h2>
          </div>

          {subSections.map((subSection) => {
            const id = `${heading} - ${subSection}`

            return (
              <button
                type="button"
                key={id}
                id={id}
                className={`w-full cursor-pointer rounded-[5px] px-6 py-2.5 text-left text-xs not-italic leading-3 text-gray-100 hover:bg-gray-800 ${
                  activeSection === id ? 'bg-gray-600 ' : ''
                }`}
                onClick={() => onClick(id)}
              >
                {subSection}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Sidebar
