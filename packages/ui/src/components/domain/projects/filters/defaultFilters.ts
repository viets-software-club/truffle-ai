import { GthbTrendingFilter } from '@/graphql/generated/gql'

// @TODO reenable default filters
// type filterCountProps = {
//   gt: number
// }

// type trendingFilterProps = {
//   eq: boolean
// }

// type defaultFiltersProps = {
//   starCount?: filterCountProps
//   forkCount?: filterCountProps
//   issueCount?: filterCountProps
//   contributorCount?: filterCountProps
//   isTrendingDaily: trendingFilterProps
// }

// let savedStarsDefaultFilter = 0
// let savedForksDefaultFilter = 0
// let savedIssuesDefaultFilter = 0
// let savedContributorsDefaultFilter = 0

// if (typeof window !== 'undefined') {
//   savedStarsDefaultFilter = Number(localStorage.getItem('starsDefaultFilter'))
//   savedForksDefaultFilter = Number(localStorage.getItem('forksDefaultFilter'))
//   savedIssuesDefaultFilter = Number(localStorage.getItem('issuesDefaultFilter'))
//   savedContributorsDefaultFilter = Number(localStorage.getItem('contributorsDefaultFilter'))
// }

const defaultFilters: GthbTrendingFilter = {
  dateRange: {
    eq: 'daily'
  }
}

// if (savedStarsDefaultFilter > 0) {
//   defaultFilters.starCount = {
//     gt: savedStarsDefaultFilter
//   }
// }

// if (savedForksDefaultFilter > 0) {
//   defaultFilters.forkCount = {
//     gt: savedForksDefaultFilter
//   }
// }

// if (savedIssuesDefaultFilter > 0) {
//   defaultFilters.issueCount = {
//     gt: savedIssuesDefaultFilter
//   }
// }

// if (savedContributorsDefaultFilter > 0) {
//   defaultFilters.contributorCount = {
//     gt: savedContributorsDefaultFilter
//   }
// }

export default defaultFilters
