import { Menu } from '@headlessui/react'

type FilterMenuItemProps = { label: string; handleClick: () => void }

const FilterMenuItem = ({ label, handleClick }: FilterMenuItemProps) => (
	<Menu.Item key={label}>
		<button
			type="button"
			className="w-full rounded-md px-4 py-2 text-left text-white/90 transition-colors duration-75 hover:bg-white/5"
			onClick={handleClick}
		>
			{label}
		</button>
	</Menu.Item>
)

export default FilterMenuItem
