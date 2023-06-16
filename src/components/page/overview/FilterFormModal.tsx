import { Fragment, useState } from 'react'
import {
  NumberTableFilterOperator,
  StringTableFilterOperator,
  TableFilter
} from '@/components/page/overview/TableFilter'
import { IoTextOutline } from 'react-icons/io5'
import { AiOutlineNumber } from 'react-icons/ai'
import { ChevronDownIcon } from '@primer/octicons-react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { TransitionMenuItems } from '@/components/page/overview/TopBar'
import Button from '@/components/pure/Button'
import { TbTrash } from 'react-icons/tb'
import { Column } from '@tanstack/react-table'
import { Project } from '@/graphql/generated/gql'

type FilterFormModalProps = {
  filter: TableFilter
  removeFilter: (filter: TableFilter) => void
  updateFilter(filter: { column: Column<Project>; value?: number | string; operator: string }): void
}

const FilterFormModal = ({ filter, removeFilter, updateFilter }: FilterFormModalProps) => {
  const [value, setValue] = useState('')
  const [selectedOperator, setSelectedOperator] = useState(filter.operator || 'Select')
  const numericFilterOptions = Object.values(NumberTableFilterOperator).map((op) => (
    <Menu.Item key={op}>
      <button
        type="button"
        className="flex w-44 flex-row items-center space-x-2 px-4 py-2 hover:bg-gray-600"
        onClick={() => {
          setSelectedOperator(op)
          updateFilter({ ...filter, operator: op })
        }}
      >
        <p className="text-14 text-gray-100">{op}</p>
      </button>
    </Menu.Item>
  ))

  const stringFilterOptions = Object.values(StringTableFilterOperator).map((op) => (
    <Menu.Item key={op}>
      <button
        type="button"
        className="flex w-44 flex-row items-center space-x-2 px-4 py-2 hover:bg-gray-600"
        onClick={() => {
          setSelectedOperator(op)
          updateFilter({ ...filter, operator: op })
        }}
      >
        <p className="text-14 text-gray-100">{op}</p>
      </button>
    </Menu.Item>
  ))

  const filterAppliedClassNames = `flex flex-row h-[30px]  items-center space-x-2 rounded-[5px] border border-gray-800 px-2 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700 ${
    value.length > 0 ? 'bg-gray-850 ' : ''
  }`

  return (
    <div>
      <Popover as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Popover.Button className={filterAppliedClassNames}>
              <div className="flex flex-row items-center space-x-1">
                {filter.column.columnDef.header === 'Name' ? (
                  <IoTextOutline className="text-gray-500" />
                ) : (
                  <AiOutlineNumber className="text-gray-500" />
                )}
                <p className={`text-14 ${value.length > 0 ? '' : 'text-gray-500'}`}>
                  {typeof filter.column.columnDef.header === 'string'
                    ? filter.column.columnDef.header
                    : ''}
                </p>
                <ChevronDownIcon
                  className={`text-gray-500 transition-transform duration-200 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </Popover.Button>

            <TransitionMenuItems>
              <Popover.Panel
                className={`absolute right-0 z-40 mt-2 w-44 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 focus:outline-none ${
                  open ? 'block' : 'hidden'
                }`}
              >
                {/* Whole expanded dropdown */}
                <div className="p-1">
                  {/* Top bar */}
                  <div className="flex flex-row justify-between">
                    {/* Column + Operator */}
                    <div className="flex flex-row space-x-2">
                      <p className="text-14 text-gray-500">
                        {typeof filter.column.columnDef.header === 'string'
                          ? filter.column.columnDef.header
                          : ''}
                      </p>
                      <Menu as="div">
                        <Menu.Button className="flex flex-row items-center space-x-1 text-14 text-gray-500">
                          <p className="text-14 font-medium text-gray-300">{selectedOperator}</p>
                          <ChevronDownIcon className="text-gray-500" />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-40 mt-2 w-48 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 focus:outline-none">
                            <div className="py-1">
                              {filter.column.columnDef.header === 'Name'
                                ? stringFilterOptions
                                : numericFilterOptions}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    <Button
                      onClick={() => removeFilter(filter)}
                      variant="onlyIconNoBorderNoBG"
                      Icon={TbTrash}
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Type a value..."
                      type={filter.operator in NumberTableFilterOperator ? 'number' : 'text'}
                      className="w-full rounded border px-2 py-1 text-14 text-gray-500"
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value)
                        updateFilter({ ...filter, value: e.target.value })
                      }}
                    />
                  </div>
                </div>
              </Popover.Panel>
            </TransitionMenuItems>
          </>
        )}
      </Popover>
    </div>
  )
}

export default FilterFormModal
