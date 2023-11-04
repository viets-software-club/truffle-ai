import { Tooltip } from 'react-tooltip'

type TooltipItemProps = {
  id?: string
}

const TooltipItem = ({ id }: TooltipItemProps) => (
  <Tooltip
    id={id}
    place='bottom'
    className='!z-20 !rounded-md !border !border-white/5 !bg-white/5 !p-2 !text-xs !backdrop-blur-xl'>
    {id}
  </Tooltip>
)

export default TooltipItem
