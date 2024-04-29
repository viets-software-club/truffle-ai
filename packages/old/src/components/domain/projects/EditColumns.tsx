import Button from '@/components/pure/Button'
import { Project } from '@/graphql/generated/gql'
import { Menu } from '@headlessui/react'
import { Column } from '@tanstack/react-table'
import { useState } from 'react'
import { RiCheckboxBlankLine, RiCheckboxFill } from 'react-icons/ri'
import { TbColumns2 } from 'react-icons/tb'
import MenuItemsTransition from '../../shared/MenuItemsTransition'

type EditColumnsProps = {
	columns: Column<Project, unknown>[]
}

const EditColumns = ({ columns }: EditColumnsProps) => {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<Menu as="div" className="relative hidden md:block">
			<Menu.Button as="div">
				<Button onClick={() => setOpen(!open)}>
					<TbColumns2 />
					Edit columns
				</Button>
			</Menu.Button>

			<MenuItemsTransition>
				<Menu.Items className="absolute right-0 z-30 mt-2 origin-top-right rounded-md border border-white/5 bg-white/5 p-1 backdrop-blur-xl focus:outline-none">
					{columns.map((column) => (
						<Menu.Item
							as="button"
							key={column.id}
							onClick={column.getToggleVisibilityHandler()}
							className="flex min-w-[150px] items-center gap-2 rounded-md p-2 text-left text-sm text-white/90 transition-colors duration-75 hover:bg-white/5"
						>
							{column.getIsVisible() ? (
								<RiCheckboxFill className="text-indigo-600" />
							) : (
								<RiCheckboxBlankLine />
							)}

							<p
								className={
									column.getIsVisible()
										? 'text-sm text-white/90'
										: 'text-sm text-white/50'
								}
							>
								{typeof column.columnDef.header === 'string'
									? column.columnDef.header
									: ''}
							</p>
						</Menu.Item>
					))}
				</Menu.Items>
			</MenuItemsTransition>
		</Menu>
	)
}

export default EditColumns
