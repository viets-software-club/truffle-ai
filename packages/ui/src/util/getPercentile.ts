import { Project } from '@/graphql/generated/gql'

const NUMERIC_FIELDS = [
  'contributorCount',
  'forkCount',
  'issueCount',
  'pullRequestCount',
  'starCount'
] as const

type NumericField = (typeof NUMERIC_FIELDS)[number]
type NumericFieldStats = Record<NumericField, number | null>

const getPercentile = (projects: Project[], percentile: number, sortDescending = true) => {
  const result: NumericFieldStats = {
    contributorCount: null,
    forkCount: null,
    issueCount: null,
    pullRequestCount: null,
    starCount: null
  }

  NUMERIC_FIELDS.forEach((field) => {
    const sortedData = projects
      .map((item) => item[field] ?? null)
      .filter((item: number | null): item is number => item !== null)
      .sort((a, b) => (sortDescending ? b - a : a - b))

    const percentileIndex = Math.floor(sortedData.length * percentile)

    result[field] =
      percentileIndex < sortedData.length && sortedData.length > 0
        ? sortedData[percentileIndex]
        : null
  })

  return result
}

export default getPercentile
