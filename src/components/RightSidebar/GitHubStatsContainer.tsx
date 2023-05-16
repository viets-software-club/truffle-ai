import { ComponentType, ReactNode } from 'react'

import GitHubStatisticItem from '@/components/RightSidebar/GitHubStatisticItem'

type StatisticItemData = {
  id: string
  Icon?: ComponentType<{ className?: string }>
  IconMetric?: ReactNode
  value: string
  growth: string
}

type GitHubStatisticsContainerProps = {
  statisticsData: StatisticItemData[]
}

const GitHubStatisticsContainer = ({ statisticsData }: GitHubStatisticsContainerProps) => (
  <div className="border-y border-solid border-gray-800 py-2.5 text-14 font-normal leading-4">
    <h1 className="px-7 py-2.5 text-12 uppercase text-gray-300">Github Stats</h1>
    {statisticsData.map((data) => (
      <GitHubStatisticItem
        key={data.id}
        Icon={data.Icon}
        IconMetric={data.IconMetric}
        value={data.value}
        growth={data.growth}
        paddingOn
      />
    ))}
  </div>
)

export default GitHubStatisticsContainer
