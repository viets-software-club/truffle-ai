import Button from '@/components/pure/Button'
import { AiOutlineCalendar } from 'react-icons/ai'

const nullFunc = () => null

const FilterBar = () => (
  <div className="flex flex-row justify-between border-b border-gray-800 px-6 py-2.5">
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
    </div>
    <div className="flex flex-row items-center">
      <p className="text-14">10</p>
      <p className="text-14 text-gray-500">/25</p>
    </div>
  </div>
)

export default FilterBar
