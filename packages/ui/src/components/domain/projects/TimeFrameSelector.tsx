import { FC } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { Menu } from '@headlessui/react'
import Button from '@/components/shared/Button'
import MenuItemsTransition from '../../shared/MenuItemsTransition'
import { TimeFilterOption } from './types'

type TimeFrameSelectorProps = {
  currentTimeFilterLabel: string
  handleChange: (timeFrame: TimeFilterOption) => void
}

/**
 * Time frame filter for trending projects (button + dropdown)
 */
const TimeFrameSelector: FC<TimeFrameSelectorProps> = ({
  currentTimeFilterLabel,
  handleChange
}) => (
  <Menu as='div' className='relative'>
    <Menu.Button as='div'>
      <Button>
        <AiOutlineCalendar />
        {currentTimeFilterLabel}
      </Button>
    </Menu.Button>

    <MenuItemsTransition>
      <Menu.Items className='absolute left-0 z-30 mt-2 origin-top-right rounded-md bg-gray-700 p-1 shadow-lg focus:outline-none'>
        {Object.entries(TimeFilterOption).map(([label, timeFrame]) => (
          <Menu.Item
            as='button'
            key={timeFrame}
            onClick={() => handleChange(timeFrame)}
            className='min-w-[150px] rounded-md p-2 text-left text-sm text-gray-100 hover:bg-gray-600'>
            {label}
          </Menu.Item>
        ))}
      </Menu.Items>
    </MenuItemsTransition>
  </Menu>
)

export default TimeFrameSelector
