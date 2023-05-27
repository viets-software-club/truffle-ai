import { ReactNode } from 'react'

type GithubStatItemProps = {
  Icon?: IconComponentType
  IconMetric?: ReactNode
  value: string
  growth?: string
  paddingOn?: boolean
  outerPaddingOn?: boolean
  hoverOn?: boolean
  greenValue?: number
  redValue?: number
  largeGap?: boolean
}
const GithubStatItem = ({
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
  let textColor = 'text-gray-100'
  let iconColor = 'text-gray-500'
  const valueAsNumber = Number(value)
  if (greenValue !== undefined && valueAsNumber > greenValue) {
    textColor = 'text-green'
    iconColor = 'text-green'
  } else if (redValue !== undefined && valueAsNumber < redValue) {
    textColor = 'text-red'
    iconColor = 'text-red'
  }
  const gap = largeGap ? 'gap-[10px]' : 'gap-[5px]'

  return (
    <div className="flex flex-col justify-between">
      <div
        className={`inline-flex ${outerPaddingOn ? 'px-7' : ''} py-2.5 ${
          hoverOn ? 'transition-colors duration-100 hover:bg-gray-850' : ''
        }`}
      >
        <div className={`flex flex-row items-center justify-center ${gap}`}>
          {Icon && <Icon className={`h-[14px] w-[14px] ${iconColor}`} />}
          {IconMetric}
          <span className={`text-xs not-italic leading-3 ${paddingOn ? 'w-6' : ''} ${textColor}`}>
            {value}
          </span>
          {growth && <span className="text-xs not-italic leading-3 text-gray-500">{growth}</span>}
        </div>
      </div>
    </div>
  )
}

GithubStatItem.defaultProps = {
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
