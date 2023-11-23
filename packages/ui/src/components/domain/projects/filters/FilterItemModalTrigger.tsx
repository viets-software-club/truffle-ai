import { AiOutlineNumber } from 'react-icons/ai'
import { IoTextOutline } from 'react-icons/io5'
import { ChevronDownIcon } from '@primer/octicons-react'
import clsx from 'clsx'
import Button from '@/components/shared/Button'

type TriggerProps = {
  value: string | number
  type?: string | number
  column?: string
  open: boolean
}

const Trigger = ({ value, type, column, open }: TriggerProps) => (
  <Button>
    {/* Show number or text icon depending on type */}
    {type === 'string' ? (
      <IoTextOutline className='text-white/50' />
    ) : (
      <AiOutlineNumber className='text-white/50' />
    )}

    <p
      className={clsx('text-sm leading-none', {
        'text-white/50': value === ''
      })}>
      {column}
    </p>

    <ChevronDownIcon
      className={clsx('text-white/50 transition-transform duration-200', {
        'rotate-180': open
      })}
    />
  </Button>
)

export default Trigger
