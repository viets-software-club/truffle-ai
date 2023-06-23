import { OrderByDirection, PageInfo } from '@/graphql/generated/gql'

export type FilterOption = {
  key: 'name' | 'starCount' | 'forkCount' | 'issueCount' | 'contributorCount' | 'pullRequestCount'
  column: string
  type: 'string' | 'number'
}

export const filterOptions: FilterOption[] = [
  { key: 'name', column: 'Name', type: 'string' },
  { key: 'starCount', column: 'Stars', type: 'number' },
  { key: 'forkCount', column: 'Forks', type: 'number' },
  { key: 'issueCount', column: 'Issues', type: 'number' },
  { key: 'contributorCount', column: 'Contributors', type: 'number' },
  { key: 'pullRequestCount', column: 'Pull Requests', type: 'number' }
]

export enum TimeFilterOption {
  'Today' = 'isTrendingDaily',
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

export const defaultSort = {
  name: OrderByDirection.AscNullsLast
}

export type paginationParameters = {
  first: number | null
  after: PageInfo['endCursor']
  last: number | null
  before: PageInfo['startCursor']
}
