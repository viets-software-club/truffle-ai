import { ReactNode } from 'react'
import formatNumber from '@/util/formatNumber'
import { Tooltip } from 'react-tooltip'

enum Color {
  DEFAULT = 'text-gray-100',
  GREEN = 'text-green',
  RED = 'text-red'
}
type GithubStatItemProps = {
  id?: string
  Icon?: IconComponentType
  IconMetric?: ReactNode
  value: number
  growth?: string
  paddingOn?: boolean
  outerPaddingOn?: boolean
  hoverOn?: boolean
  greenValue?: number
  redValue?: number
  largeGap?: boolean
}

const GithubStatItem = ({
  id,
  Icon,
  value,
  growth,
  IconMetric,
  paddingOn,
  outerPaddingOn,
  hoverOn,
  greenValue,
  redValue,
  largeGap
}: GithubStatItemProps) => {
  let color = Color.DEFAULT
  if (greenValue !== undefined && value > greenValue) {
    color = Color.GREEN
  } else if (redValue !== undefined && value < redValue) {
    color = Color.RED
  }

  const gap = largeGap ? 'gap-[10px]' : 'gap-[5px]'

  return (
    <div className="flex flex-col justify-between">
      <div
        className={`inline-flex ${outerPaddingOn ? 'px-7' : ''} py-2.5 ${
          hoverOn ? 'transition-colors duration-100 hover:bg-gray-850' : ''
        }`}
      >
        <div className={`flex flex-row items-center justify-center ${gap}`} data-tooltip-id={id}>
          {Icon && <Icon className={`h-[14px] w-[14px] ${color}`} />}
          {IconMetric}
          <span className={`text-xs not-italic leading-3 ${paddingOn ? 'w-6' : ''} ${color}`}>
            {formatNumber(value)}
          </span>
          {growth && <span className="text-xs not-italic leading-3 text-gray-500">{growth}</span>}
        </div>
        <Tooltip id={id} place="bottom">
          {id}
        </Tooltip>
      </div>
    </div>
  )
}

GithubStatItem.defaultProps = {
  id: undefined,
  Icon: undefined,
  IconMetric: undefined,
  growth: undefined,
  outerPaddingOn: true,
  paddingOn: true,
  hoverOn: true,
  greenValue: 100,
  redValue: 0,
  largeGap: false
}

export default GithubStatItem
