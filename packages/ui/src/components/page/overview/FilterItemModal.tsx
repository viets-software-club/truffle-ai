import { ChangeEvent, useState } from 'react'
import { TbRefresh, TbTrash } from 'react-icons/tb'
import { IoTextOutline } from 'react-icons/io5'
import { AiOutlineNumber } from 'react-icons/ai'
import { ChevronDownIcon } from '@primer/octicons-react'
import { Menu, Popover } from '@headlessui/react'
import Button from '@/components/pure/Button'
import { IntFilter, ProjectFilter, StringFilter } from '@/graphql/generated/gql'
import { FilterOption, IntFilterOperator, StringFilterOperator, filterOptions } from './types'
import MenuItemsTransition from './MenuItemsTransition'
import FilterMenuItem from './FilterMenuItem'

type FilterItemModalProps = {
  currentKey: FilterOption['key']
  filters: ProjectFilter
  updateFilters: (filter: ProjectFilter) => void
}

function isIntFilter(filter: StringFilter | IntFilter): filter is IntFilter {
  return (filter as IntFilter).gt !== undefined
}

const FilterItemModal = ({ filters, currentKey, updateFilters }: FilterItemModalProps) => {
  const type = filterOptions.find((option) => option.key === currentKey)?.type
  const column = filterOptions.find((option) => option.key === currentKey)?.column
  const currentOperator = Object.keys(filters[currentKey] || {})[0] as
    | StringFilterOperator
    | IntFilterOperator

  let defFilterNumber
  const filter = filters?.[currentKey]
  let val
  if (filter && isIntFilter(filter)) {
    val = filter[currentOperator as IntFilterOperator]
  }

  if (typeof val === 'number' && val !== -1) {
    defFilterNumber = val
  }

  const [value, setValue] = useState<string | number>(defFilterNumber || '')

  const [operator, setOperator] = useState<IntFilterOperator | StringFilterOperator>(
    currentOperator
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newFilters = { ...filters }
    newFilters[currentKey] = {
      [operator]: type === 'string' ? value : parseFloat(value as string)
    }
    updateFilters(newFilters)
  }

  const removeFilter = () => {
    const newFilters = { ...filters }
    delete newFilters[currentKey]
    updateFilters(newFilters)
  }

  const intFilterOperators: JSX.Element[] = Object.entries(IntFilterOperator).map(([label, op]) => (
    <FilterMenuItem key={op} label={label} handleClick={() => setOperator(op)} />
  ))

  const stringFilterOperators = Object.entries(StringFilterOperator).map(([label, op]) => (
    <FilterMenuItem key={op} label={label} handleClick={() => setOperator(op)} />
  ))

  return (
    <Popover as="div" className="relative inline-block text-left">
      {({ open, close }) => (
        <>
          {/* Filterbar button - greyed out when no filter value has been selected */}
          <Popover.Button
            className={`flex h-[30px] flex-row  items-center space-x-2 rounded-[5px] border border-gray-800 px-2 py-1.5 text-sm outline-none transition-colors duration-100 hover:bg-gray-700 ${
              value !== '' ? 'bg-gray-850 ' : ''
            }`}
          >
            <div className="flex flex-row items-center space-x-1">
              {/* Show number or text icon depending on type */}
              {type === 'string' ? (
                <IoTextOutline className="text-gray-500" />
              ) : (
                <AiOutlineNumber className="text-gray-500" />
              )}

              <p className={`text-sm ${value !== '' ? '' : 'text-gray-500'}`}>{column}</p>

              <ChevronDownIcon
                className={`text-gray-500 transition-transform duration-200 ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </div>
          </Popover.Button>

          {/* Filterbar dropdown */}
          <MenuItemsTransition>
            <Popover.Panel
              className={`absolute left-0 z-40 mt-2 w-44 rounded-[5px] bg-gray-700 shadow-lg outline-none ${
                open ? 'block' : 'hidden'
              }`}
            >
              {/* Whole expanded dropdown */}
              <div className="p-2">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row space-x-2">
                    {/* Filter/ column title */}
                    <p className="text-sm text-white">{column}</p>

                    {/* Operator selector */}
                    <Menu as="div">
                      <Menu.Button className="flex flex-row items-center space-x-1 text-sm text-gray-500 outline-none">
                        <p className="text-sm font-medium text-gray-300">{operator}</p>
                        <ChevronDownIcon className="text-gray-500" />
                      </Menu.Button>

                      <MenuItemsTransition>
                        <Menu.Items className="absolute right-0 z-40 mt-2 w-44 origin-top-right rounded-[5px] bg-gray-700 shadow-lg focus:outline-none">
                          <div className="py-1">
                            {type === 'string' ? stringFilterOperators : intFilterOperators}
                          </div>
                        </Menu.Items>
                      </MenuItemsTransition>
                    </Menu>
                  </div>

                  {/* Remove icon */}
                  <Button onClick={removeFilter} variant="onlyIconNoBorderNoBG" Icon={TbTrash} />
                </div>

                {/* Input */}
                <form
                  className="mt-2 flex gap-1"
                  onSubmit={(e) => {
                    handleSubmit(e)
                    close()
                  }}
                >
                  <input
                    placeholder="Type a value..."
                    type={type === 'string' ? 'text' : 'number'}
                    className="w-full rounded bg-gray-850 px-2 py-1 text-sm text-gray-300 outline-none"
                    value={value}
                    onChange={handleChange}
                  />
                  <Button variant="onlyIcon" type="submit" Icon={TbRefresh} />
                </form>
              </div>
            </Popover.Panel>
          </MenuItemsTransition>
        </>
      )}
    </Popover>
  )
}

export default FilterItemModal
