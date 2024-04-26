import { PropsWithChildren } from 'react'
import clsx from 'clsx'

type SectionProps = PropsWithChildren<{ title: string }>

/**
 * Section for main sidebar (includes header and items)
 */
const SidebarSection = ({ children, title }: SectionProps) => (
	<div
		className={clsx(
			'border-t border-solid border-white/5 py-2.5 text-sm font-normal leading-4 text-white/90',
			title === 'Categories' &&
				'no-scrollbar h-[calc(100vh_-_270px)] overflow-y-scroll'
		)}
	>
		<p className="px-7 py-2.5 text-xs font-medium uppercase text-white/50">
			{title}
		</p>
		<div className="px-2">{children}</div>
	</div>
)

export default SidebarSection
