import { FC, useState } from 'react'
import { RiCheckboxFill, RiCheckboxBlankLine } from 'react-icons/ri'
import { TbColumns2 } from 'react-icons/tb'
import { Menu } from '@headlessui/react'
import { Column } from '@tanstack/react-table'
import Button from '@/components/pure/Button'
import { Project } from '@/graphql/generated/gql'
import MenuItemsTransition from './MenuItemsTransition'

type EditColumnsProps = {
  columns: Column<Project, unknown>[]
}

const EditColumns: FC<EditColumnsProps> = ({ columns }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Menu as='div' className='relative'>
      <Menu.Button as='div'>
        <Button onClick={() => setOpen(!open)}>
          <TbColumns2 />
          Edit columns
        </Button>
      </Menu.Button>

      <MenuItemsTransition>
        <Menu.Items className='absolute right-0 z-30 mt-2 origin-top-right rounded-md bg-gray-700 p-1 shadow-lg focus:outline-none'>
          {columns.map(column => (
            <Menu.Item
              as='button'
              key={column.id}
              onClick={column.getToggleVisibilityHandler()}
              className='flex min-w-[150px] items-center gap-2 rounded-md p-2 text-left text-sm text-gray-100 hover:bg-gray-600'>
              {column.getIsVisible() ? (
                <RiCheckboxFill className='text-indigo-600' />
              ) : (
                <RiCheckboxBlankLine />
              )}

              <p
                className={
                  column.getIsVisible() ? 'text-sm text-gray-100' : 'text-sm text-gray-500'
                }>
                {typeof column.columnDef.header === 'string' ? column.columnDef.header : ''}
              </p>
            </Menu.Item>
          ))}
        </Menu.Items>
      </MenuItemsTransition>
    </Menu>
  )
}

export default EditColumns
