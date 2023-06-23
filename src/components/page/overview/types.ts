import { OrderByDirection } from '@/graphql/generated/gql'

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

type filterCountProps = {
  gt: number
}

type trendingFilterProps = {
  eq: boolean
}

type defaultFiltersProps = {
  starCount?: filterCountProps
  forkCount?: filterCountProps
  issueCount?: filterCountProps
  contributorCount?: filterCountProps
  isTrendingDaily: trendingFilterProps
}

let savedStarsDefaultFilter = 0
let savedForksDefaultFilter = 0
let savedIssuesDefaultFilter = 0
let savedContributorsDefaultFilter = 0

if (typeof window !== 'undefined') {
  savedStarsDefaultFilter = Number(localStorage.getItem('starsDefaultFilter'))
  savedForksDefaultFilter = Number(localStorage.getItem('forksDefaultFilter'))
  savedIssuesDefaultFilter = Number(localStorage.getItem('issuesDefaultFilter'))
  savedContributorsDefaultFilter = Number(localStorage.getItem('contributorsDefaultFilter'))
}

const defaultFilters: defaultFiltersProps = {
  isTrendingDaily: {
    eq: true
  }
}

if (savedStarsDefaultFilter > 0) {
  defaultFilters.starCount = {
    gt: savedStarsDefaultFilter
  }
}

if (savedForksDefaultFilter > 0) {
  defaultFilters.forkCount = {
    gt: savedForksDefaultFilter
  }
}

if (savedIssuesDefaultFilter > 0) {
  defaultFilters.issueCount = {
    gt: savedIssuesDefaultFilter
  }
}

if (savedContributorsDefaultFilter > 0) {
  defaultFilters.contributorCount = {
    gt: savedContributorsDefaultFilter
  }
}

export default defaultFilters

export const defaultSort = {
  name: OrderByDirection.AscNullsLast
}
