import { ReactNode } from 'react'
import formatNumber from '@/util/formatNumber'
import { Tooltip } from 'react-tooltip'

enum Color {
  DEFAULT = 'text-gray-100',
  GREEN = 'text-green-500',
  LIGHT_GREEN = 'text-green-300',
  RED = 'text-red-500',
  LIGHT_RED = 'text-red-300'
}

type GithubStatItemProps = {
  id?: string
  Icon?: IconComponentType
  IconMetric?: ReactNode
  value?: number
  growth?: string
  paddingOn?: boolean
  outerPaddingOn?: boolean
  greenValue?: number
  lightGreenValue?: number
  redValue?: number
  lightRedValue?: number
  largeGap?: boolean
  link?: string
}

const GithubStatItem = ({
  id,
  Icon,
  value,
  growth,
  IconMetric,
  paddingOn,
  outerPaddingOn,
  greenValue,
  lightGreenValue,
  redValue,
  lightRedValue,
  largeGap,
  link
}: GithubStatItemProps) => {
  let color = Color.DEFAULT
  if (greenValue !== undefined && value !== undefined && value >= greenValue) {
    color = Color.GREEN
  } else if (lightGreenValue !== undefined && value !== undefined && value >= lightGreenValue) {
    color = Color.LIGHT_GREEN
  } else if (redValue !== undefined && value !== undefined && value <= redValue) {
    color = Color.RED
  } else if (lightRedValue !== undefined && value !== undefined && value <= lightRedValue) {
    color = Color.LIGHT_RED
  }

  const gap = largeGap ? 'gap-[10px]' : 'gap-[5px]'

  return (
    <div className="flex flex-col justify-between">
      <div className={`inline-flex ${outerPaddingOn ? 'px-7' : ''} py-2.5`}>
        <div
          className={`flex flex-row items-center justify-center text-xs ${gap}`}
          data-tooltip-id={id}
        >
          {Icon && <Icon className={`h-[14px] w-[14px] ${color}`} />}
          {IconMetric}
          {value !== undefined && (
            <span className={`text-xs not-italic leading-3 ${paddingOn ? 'w-6' : ''} ${color}`}>
              {formatNumber(value)}
            </span>
          )}
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {growth && <span className="text-xs not-italic leading-3 text-gray-500">{growth}</span>}
          <Tooltip id={id} />
        </div>
      </div>
    </div>
  )
}

GithubStatItem.defaultProps = {
  id: undefined,
  Icon: undefined,
  value: undefined,
  IconMetric: undefined,
  growth: undefined,
  outerPaddingOn: true,
  paddingOn: true,
  greenValue: undefined,
  lightGreenValue: undefined,
  redValue: undefined,
  lightRedValue: undefined,
  largeGap: false,
  link: undefined
}

export default GithubStatItem
