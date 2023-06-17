import { TableSort } from '@/components/page/overview/TableSort'
import Button from '@/components/pure/Button'
import { ArrowDownIcon, ArrowUpIcon } from '@primer/octicons-react'
import { RxCross2 } from 'react-icons/rx'

type TableSortModalProps = {
  sort: TableSort
  setSort: (sort: TableSort | null) => void
}

const TableSortModal = ({ sort, setSort }: TableSortModalProps) => {
  const textGray100 = 'text-gray-100'
  const textGray500 = 'text-gray-500'
  return (
    <div className="flex flex-col space-y-3 p-2">
      <div className="flex flex-row space-x-1">
        <Button onClick={() => setSort(null)} variant="onlyIconNoBorderNoBG" Icon={RxCross2} />
        <p className="text-14 text-gray-100">{sort.column}</p>
      </div>
      <div className="flex flex-row space-x-1">
        <Button
          onClick={() => setSort({ ...sort, direction: 'asc' })}
          variant={sort.direction === 'asc' ? 'highlighted' : 'normal'}
          text="Asc."
          Icon={ArrowUpIcon}
          order="ltr"
          iconColor={sort.direction === 'asc' ? textGray100 : textGray500}
          textColor={sort.direction === 'asc' ? textGray100 : textGray500}
        />
        <Button
          onClick={() => setSort({ ...sort, direction: 'desc' })}
          variant={sort.direction === 'desc' ? 'highlighted' : 'normal'}
          text="Desc."
          Icon={ArrowDownIcon}
          order="ltr"
          iconColor={sort.direction === 'desc' ? textGray100 : textGray500}
          textColor={sort.direction === 'desc' ? textGray100 : textGray500}
        />
      </div>
    </div>
  )
}

export default TableSortModal
