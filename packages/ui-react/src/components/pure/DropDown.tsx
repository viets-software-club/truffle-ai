import Button from '@/components/pure/Button'
import { Menu } from '@headlessui/react'
import { IconType } from 'react-icons'
import { TimeFilterOption } from '../domain/projects/types'
import MenuItemsTransition from '../shared/MenuItemsTransition'

type Item = {
	id: number | string
	title: string
	onClick: () => void
}
type Props = {
	Icon: IconType
	title: string
	handleChange: (timeFrame: TimeFilterOption) => void
	items: Item[]
}

const DropDown = (props: Props) => (
	<Menu as="div" className="relative">
		<Menu.Button as="div">
			<Button variant={Button.Variant.Unstyled}>
				<props.Icon />
				{props.title}
			</Button>
		</Menu.Button>
		<MenuItemsTransition>
			<Menu.Items className="absolute left-0 z-30 mt-2 origin-top-right rounded-md border border-white/5 bg-white/5 p-1 backdrop-blur-xl focus:outline-none">
				{props.items.map((item) => (
					<Menu.Item
						key={item.id}
						as="button"
						onClick={item.onClick}
						className="min-w-[150px] rounded-md p-2 text-left text-sm text-white/90 transition-colors duration-75 hover:bg-white/5"
					>
						{item.title}
					</Menu.Item>
				))}
			</Menu.Items>
		</MenuItemsTransition>
	</Menu>
)

export default DropDown
