import { Fragment } from 'react'
import { nanoid } from 'nanoid'
import { Column } from '@tanstack/react-table'
import { Menu, Transition } from '@headlessui/react'
import { VscSettings } from 'react-icons/vsc'
import { TbColumns2 } from 'react-icons/tb'
import { AiOutlinePlus, AiOutlineCalendar } from 'react-icons/ai'
import { RiCheckboxBlankLine, RiCheckboxFill } from 'react-icons/ri'
import Button from '@/components/pure/Button'
import { Repository } from './columns'

type TopBarProps = {
  columns: Column<Repository, unknown>[]
  nullFunc: () => void
}

const TopBar = ({ columns, nullFunc }: TopBarProps) => (
  <div className="flex flex-row justify-between border-b border-gray-800 px-6 pb-3.5">
    {/* Filter, Sort, Edit Columns buttons */}
    <div className="flex flex-row gap-3">
      <div className="inline-block">
        <Button
          onClick={nullFunc}
          variant="normal"
          text="This week"
          Icon={AiOutlineCalendar}
          order="ltr"
          iconColor="white"
          textColor="white"
        />
      </div>

      <div className="inline-block">
        <Button
          onClick={nullFunc}
          variant="filter"
          text="Add Filter"
          Icon={AiOutlinePlus}
          order="ltr"
          iconColor="white"
          textColor="white"
        />
      </div>
    </div>

    <div className="flex flex-row gap-3">
      <div className="inline-block">
        <Button
          onClick={nullFunc}
          variant="normal"
          text="Sort"
          Icon={VscSettings}
          order="ltr"
          iconColor="white"
          textColor="white"
        />
      </div>

      <div className="mb-8 flex flex-row space-x-2">{/* Dropdown */}</div>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex flex-row items-center space-x-2 rounded-[5px] border border-gray-800 bg-gray-850 px-3 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
            <TbColumns2 />

            <p>Edit Columns</p>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 focus:outline-none">
            <div className="py-1">
              {columns.map((column) => (
                <Menu.Item key={nanoid()}>
                  <button
                    type="button"
                    onClick={() => column.toggleVisibility()}
                    className="flex w-44 flex-row items-center space-x-2 px-4 py-2 hover:bg-gray-600"
                  >
                    {column.getIsVisible() ? (
                      <RiCheckboxFill className="text-indigo-600" />
                    ) : (
                      <RiCheckboxBlankLine />
                    )}

                    <p
                      className={
                        column.getIsVisible() ? 'text-14 text-gray-100' : 'text-14 text-gray-400'
                      }
                    >
                      {typeof column.columnDef.header === 'string' ? column.columnDef.header : ''}
                    </p>
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <div className="inline-block">
        <Button
          onClick={nullFunc}
          variant="highlighted"
          text="Add Project"
          Icon={AiOutlinePlus}
          order="ltr"
          iconColor="white"
          textColor="white"
        />
      </div>
    </div>
  </div>
)

export default TopBar
