import { AiOutlineNumber } from 'react-icons/ai'
import { IoTextOutline } from 'react-icons/io5'
import { ChevronDownIcon } from '@primer/octicons-react'
import clsx from 'clsx'

type TriggerProps = {
  value: string | number
  type?: string | number
  column?: string
  open: boolean
}

const Trigger = ({ value, type, column, open }: TriggerProps) => (
  <div
    className={clsx(
      'flex h-[30px] flex-row  items-center space-x-2 rounded-md border border-gray-800 px-2 py-1.5 text-sm outline-none transition-colors duration-100 hover:bg-gray-700',
      {
        'bg-gray-850 ': value !== ''
      }
    )}>
    <div className='flex flex-row items-center space-x-1'>
      {/* Show number or text icon depending on type */}
      {type === 'string' ? (
        <IoTextOutline className='text-gray-500' />
      ) : (
        <AiOutlineNumber className='text-gray-500' />
      )}

      <p
        className={clsx('text-sm', {
          'text-gray-500': value === ''
        })}>
        {column}
      </p>

      <ChevronDownIcon
        className={clsx('text-gray-500 transition-transform duration-200', {
          'rotate-180': open
        })}
      />
    </div>
  </div>
)

export default Trigger
