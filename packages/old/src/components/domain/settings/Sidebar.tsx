import Link from 'next/link'
import { FiChevronLeft, FiHash, FiSettings, FiUser } from 'react-icons/fi'

type SidebarProps = {
	sections: Record<string, string[]>
	onClick: (id: string) => void
}

const Sidebar = ({ sections, onClick }: SidebarProps) => {
	const icons: Record<string, JSX.Element> = {
		General: <FiSettings />,
		Account: <FiUser />,
		Integrations: <FiHash />
	}

	return (
		<div className="overflow-auto border-white/5 px-4 lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-56 lg:border-r">
			<Link href="/">
				<div className="flex flex-row items-center py-4 text-xl text-white/50">
					<FiChevronLeft className="mr-2" />
					<h2 className="font-medium text-white">Settings</h2>
				</div>
			</Link>

			<div className="hidden lg:block">
				{Object.entries(sections).map(([heading, subSections]) => (
					<div key={heading}>
						<div className="flex flex-row items-center py-4 text-xs text-white/50">
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
									className="w-full rounded-md px-6 py-2.5 text-left text-xs text-white/90 transition-colors duration-75 hover:bg-white/5"
									onClick={() => onClick(id)}
								>
									{subSection}
								</button>
							)
						})}
					</div>
				))}
			</div>
		</div>
	)
}

export default Sidebar
