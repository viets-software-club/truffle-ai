import { TableSort } from '@/components/page/overview/TableSort'
import Button from '@/components/pure/Button'
import { RxCross2 } from 'react-icons/rx'
import {
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
  BsSortNumericDownAlt,
  BsSortNumericUp
} from 'react-icons/bs'
import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@primer/octicons-react'
import { TransitionMenuItems } from '@/components/page/overview/TopBar'

type TableSortModalProps = {
  tableSort: TableSort
  setTableSort: (sort: TableSort | null) => void
}

const TableSortModal = ({ tableSort, setTableSort }: TableSortModalProps) => {
  const textGray100 = 'text-gray-100'
  const textGray500 = 'text-gray-500'
  return (
    <div>
      <Popover as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Popover.Button className="flex h-[30px] flex-row  items-center space-x-2 rounded-[5px] border border-gray-800 bg-gray-850 px-2 py-1.5 text-14 transition-colors duration-100 hover:bg-gray-700">
              <div className="flex flex-row items-center space-x-1">
                {tableSort.column === 'Name' && tableSort.direction === 'asc' && (
                  <BsSortAlphaUpAlt className={textGray500} />
                )}
                {tableSort.column === 'Name' && tableSort.direction === 'desc' && (
                  <BsSortAlphaDown className={textGray500} />
                )}
                {tableSort.column !== 'Name' && tableSort.direction === 'asc' && (
                  <BsSortNumericUp className={textGray500} />
                )}
                {tableSort.column !== 'Name' && tableSort.direction === 'desc' && (
                  <BsSortNumericDownAlt className={textGray500} />
                )}
                <p className="text-14 text-gray-100">{tableSort.column}</p>
                <ChevronDownIcon
                  className={`text-gray-500 transition-transform duration-200 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </Popover.Button>

            <TransitionMenuItems>
              <Popover.Panel
                className={`absolute right-0 z-40 mt-2 w-44 origin-top-right rounded-md bg-gray-700 shadow-lg focus:outline-none ${
                  open ? 'block' : 'hidden'
                }`}
              >
                <div className="flex flex-col space-y-3 p-2">
                  <div className="flex flex-row space-x-1">
                    <Button
                      onClick={() => setTableSort(null)}
                      variant="onlyIconNoBorderNoBG"
                      Icon={RxCross2}
                    />
                    <p className="text-14 text-gray-100">{tableSort.column}</p>
                  </div>
                  <div className="flex flex-row space-x-1">
                    <Button
                      onClick={() => setTableSort({ ...tableSort, direction: 'asc' })}
                      variant={tableSort.direction === 'asc' ? 'highlighted' : 'normal'}
                      text="Asc."
                      Icon={tableSort.column === 'Name' ? BsSortAlphaUpAlt : BsSortNumericUp}
                      order="ltr"
                      iconColor={tableSort.direction === 'asc' ? textGray100 : textGray500}
                      textColor={tableSort.direction === 'asc' ? textGray100 : textGray500}
                    />
                    <Button
                      onClick={() => setTableSort({ ...tableSort, direction: 'desc' })}
                      variant={tableSort.direction === 'desc' ? 'highlighted' : 'normal'}
                      text="Desc."
                      Icon={tableSort.column === 'Name' ? BsSortAlphaDown : BsSortNumericDownAlt}
                      order="ltr"
                      iconColor={tableSort.direction === 'desc' ? textGray100 : textGray500}
                      textColor={tableSort.direction === 'desc' ? textGray100 : textGray500}
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

export default TableSortModal
