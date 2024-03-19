import { GthbTrendingOrderBy, OrderByDirection, PageInfo } from '@/graphql/generated/gql'

// @TODO update
export type FilterOption = {
  key:
    | 'name'
    | 'starCount'
    | 'forkCount'
    | 'issueCount'
    | 'contributorCount'
    | 'pullRequestCount'
    | 'issuesPerContributor'
    | 'forksPerContributor'
  column: string
  type: 'string' | 'number'
}

export const filterOptions: FilterOption[] = [
  { key: 'name', column: 'Name', type: 'string' },
  { key: 'starCount', column: 'Stars', type: 'number' },
  { key: 'forkCount', column: 'Forks', type: 'number' },
  { key: 'issueCount', column: 'Issues', type: 'number' },
  { key: 'contributorCount', column: 'Contributors', type: 'number' },
  { key: 'pullRequestCount', column: 'Pull Requests', type: 'number' },
  { key: 'issuesPerContributor', column: 'Issues/ Contr.', type: 'number' },
  { key: 'forksPerContributor', column: 'Forks/ Contr.', type: 'number' }
]

export enum TimeFilterOption {
  'Today' = 'week',
  'This Week' = 'isTrendingWeekly',
  'This Month' = 'isTrendingMonthly'
}

export type FilterType = 'string' | 'number'

export enum IntFilterOperator {
  '=' = 'eq',
  '>' = 'gt',
  '<' = 'lt',
  '!=' = 'neq'
}

export enum StringFilterOperator {
  'equals' = 'eq',
  'like' = 'like',
  'not equals' = 'neq',
  'starts with' = 'startsWith'
}

// @TODO change back to name
export const defaultSort: GthbTrendingOrderBy = {
  // name: OrderByDirection.AscNullsLast
  createdAt: OrderByDirection.DescNullsLast
}

export type PaginationParameters = {
  first: number | null
  after: PageInfo['endCursor']
  last: number | null
  before: PageInfo['startCursor']
}
