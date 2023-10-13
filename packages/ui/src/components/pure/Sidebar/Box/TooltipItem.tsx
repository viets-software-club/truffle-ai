import { Tooltip } from 'react-tooltip'

type TooltipItemProps = {
  id?: string
}

const TooltipItem = ({ id }: TooltipItemProps) => (
  <Tooltip
    id={id}
    place="bottom"
    className="!text-12 !z-20 !rounded-[5px] !border !border-gray-300/10 !bg-gray-700 !p-2"
  >
    {id}
  </Tooltip>
)

TooltipItem.defaultProps = {
  id: null
}

export default TooltipItem
