import { PropsWithChildren } from 'react'
import { Command } from 'cmdk'

type ItemProps = PropsWithChildren & {
  Icon?: IconComponentType
  text: string
  onSelect?: () => void
}

// eslint-disable-next-line react/prop-types
const Item: React.FC<ItemProps> = ({ Icon, text, ...props }) => (
  <Command.Item
    className='mx-2 flex h-12 cursor-pointer items-center justify-between rounded-md p-4 text-sm transition-all hover:bg-white/5 data-[selected=true]:bg-white/5'
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}>
    {Icon && <Icon className='mr-4 h-4 w-4 text-white/50' />}
    <span className='w-full text-left text-white/90'>{text}</span>
  </Command.Item>
)

export default Item
