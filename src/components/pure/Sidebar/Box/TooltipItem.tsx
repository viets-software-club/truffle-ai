import { Tooltip } from 'react-tooltip'

type TooltipItemProps = {
  id?: string
}

const TooltipItem = ({ id }: TooltipItemProps) => (
  <div>
    <Tooltip
      id={id}
      place="bottom"
      style={{
        borderRadius: '5px',
        border: '1px solid #2D3748',
        borderColor: '#2D3748',
        backgroundColor: '#1A202C',
        padding: '0.5rem',
        fontSize: '0.75rem',
        color: '#FFFFFF'
      }}
    >
      {id}
    </Tooltip>
  </div>
)

TooltipItem.defaultProps = {
  id: null
}

export default TooltipItem
