export type TrendingState = 'is_trending_daily' | 'is_trending_weekly' | 'is_trending_monthly'

export type UpdateSpecification = {
  githubData: boolean
  trendingState: boolean
  owner: boolean
}
