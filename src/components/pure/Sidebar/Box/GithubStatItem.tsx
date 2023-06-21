import { ReactNode } from 'react'
import formatNumber from '@/util/formatNumber'

enum Color {
  DEFAULT = 'text-gray-100',
  GREEN = 'text-green',
  RED = 'text-red'
}

type GithubStatItemProps = {
  Icon?: IconComponentType
  IconMetric?: ReactNode
  value?: number
  growth?: string
  paddingOn?: boolean
  outerPaddingOn?: boolean
  greenValue?: number
  redValue?: number
  largeGap?: boolean
  link?: string
}

const GithubStatItem = ({
  Icon,
  value,
  growth,
  IconMetric,
  paddingOn,
  outerPaddingOn,
  greenValue,
  redValue,
  largeGap,
  link
}: GithubStatItemProps) => {
  let color = Color.DEFAULT
  if (greenValue !== undefined && value !== undefined && value > greenValue) {
    color = Color.GREEN
  } else if (redValue !== undefined && value !== undefined && value < redValue) {
    color = Color.RED
  }

  const gap = largeGap ? 'gap-[10px]' : 'gap-[5px]'

  return (
    <div className="flex flex-col justify-between">
      <div className={`inline-flex ${outerPaddingOn ? 'px-7' : ''} py-2.5`}>
        <div className={`flex flex-row items-center justify-center text-xs ${gap}`}>
          {Icon && <Icon className={`h-[14px] w-[14px] ${color}`} />}
          {IconMetric}
          {value && (
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
        </div>
      </div>
    </div>
  )
}

GithubStatItem.defaultProps = {
  Icon: undefined,
  value: undefined,
  IconMetric: undefined,
  growth: undefined,
  outerPaddingOn: true,
  paddingOn: true,
  greenValue: 100,
  redValue: 0,
  largeGap: false,
  link: undefined
}

export default GithubStatItem
