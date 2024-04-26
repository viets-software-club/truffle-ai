import { ReactNode } from 'react'

type Props = {
	title: string
	children: ReactNode
}

const SidebarBox = ({ title, children }: Props) => (
	<div className="border-b border-solid border-white/5 px-4 py-3 text-sm font-normal leading-4 lg:px-7">
		<h3 className="py-2 text-xs font-medium uppercase text-white/50">
			{title}
		</h3>
		{children}
	</div>
)

export default SidebarBox
