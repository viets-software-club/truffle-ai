import { ComponentType, ReactNode } from 'react'

type GitHubStatisticProps = {
  Icon?: ComponentType<{ className?: string }>
  IconMetric?: ReactNode
  value: string
  growth?: string
  paddingOn: boolean
  outerPaddingOn?: boolean
  hoverOn?: boolean
}

const GitHubStatisticItem = ({
  Icon,
  value,
  growth,
  IconMetric,
  paddingOn,
  outerPaddingOn,
  hoverOn
}: GitHubStatisticProps) => (
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

GitHubStatisticItem.defaultProps = {
  Icon: undefined,
  IconMetric: undefined,
  growth: undefined,
  outerPaddingOn: true,
  hoverOn: true
}

export default GitHubStatisticItem
