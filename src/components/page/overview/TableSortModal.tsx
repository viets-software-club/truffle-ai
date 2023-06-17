import { TableSort } from '@/components/page/overview/TableSort'
import Button from '@/components/pure/Button'
import { RxCross2 } from 'react-icons/rx'
import {
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
  BsSortNumericDownAlt,
  BsSortNumericUp
} from 'react-icons/bs'

type TableSortModalProps = {
  tableSort: TableSort
  setTableSort: (sort: TableSort | null) => void
}

const TableSortModal = ({ tableSort, setTableSort }: TableSortModalProps) => {
  const textGray100 = 'text-gray-100'
  const textGray500 = 'text-gray-500'
  return (
    <div className="flex flex-col space-y-3 p-2">
      <div className="flex flex-row space-x-1">
        <Button onClick={() => setTableSort(null)} variant="onlyIconNoBorderNoBG" Icon={RxCross2} />
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
  )
}

export default TableSortModal
