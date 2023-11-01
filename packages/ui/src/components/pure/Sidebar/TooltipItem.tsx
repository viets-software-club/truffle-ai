import { Tooltip } from 'react-tooltip'

type TooltipItemProps = {
  id?: string
}

const TooltipItem = ({ id }: TooltipItemProps) => (
  <Tooltip
    id={id}
    place='bottom'
    className='!z-20 !rounded-md !border !border-gray-300/10 !bg-gray-700 !p-2 !text-xs'>
    {id}
  </Tooltip>
)

export default TooltipItem
