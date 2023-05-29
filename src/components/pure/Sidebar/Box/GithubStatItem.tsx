import { ReactNode } from 'react'

type GithubStatItemProps = {
  Icon?: IconComponentType
  IconMetric?: ReactNode
  value: string
  growth?: string
  paddingOn?: boolean
  outerPaddingOn?: boolean
  hoverOn?: boolean
}

const GithubStatItem = ({
  Icon,
  value,
  growth,
  IconMetric,
  paddingOn,
  outerPaddingOn,
  hoverOn
}: GithubStatItemProps) => (
  <div className="flex flex-col justify-between">
    <div
      className={`inline-flex ${outerPaddingOn ? 'px-7' : ''} py-2.5 ${
        hoverOn ? 'transition-colors duration-100 hover:bg-gray-850' : ''
      }`}
    >
      <div className="flex flex-row items-center justify-center gap-[10px]">
        {Icon && <Icon className="h-[14px] w-[14px] text-gray-500" />}
        {IconMetric}
        <span className={`text-xs not-italic leading-3 text-gray-100 ${paddingOn ? 'w-6' : ''}`}>
          {value}
        </span>
        {growth && <span className="text-xs not-italic leading-3 text-gray-500">{growth}</span>}
      </div>
    </div>
  </div>
)

GithubStatItem.defaultProps = {
  Icon: undefined,
  IconMetric: undefined,
  growth: undefined,
  outerPaddingOn: true,
  paddingOn: true,
  hoverOn: false
}

export default GithubStatItem
