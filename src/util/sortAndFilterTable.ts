import { Cell, Row } from '@tanstack/react-table'
import { Project } from '@/graphql/generated/gql'
import {
  NumberTableFilterOperator,
  StringTableFilterOperator,
  TableFilter
} from '@/components/page/overview/TableFilter'
import { TableSort } from '@/components/page/overview/TableSort'

export const matchesFilter = (cell: Cell<Project, unknown>, filter: TableFilter) => {
  const cellValue = cell.getValue()
  const { operator, value } = filter
  if (
    value !== undefined &&
    Object.values(StringTableFilterOperator).includes(operator as StringTableFilterOperator)
  ) {
    const cellValueStr = cellValue as string
    switch (operator) {
      case StringTableFilterOperator.IS:
        return cellValueStr === value
      case StringTableFilterOperator.IS_NOT:
        return cellValueStr !== value
      case StringTableFilterOperator.CONTAINS:
        return cellValueStr.includes(value)
      case StringTableFilterOperator.DOES_NOT_CONTAIN:
        return !cellValueStr.includes(value)
      case StringTableFilterOperator.STARTS_WITH:
        return cellValueStr.startsWith(value)
      case StringTableFilterOperator.ENDS_WITH:
        return cellValueStr.endsWith(value)
      default:
        return true
    }
  } else if (value !== undefined && value !== '') {
    const cellValueNum = cellValue as number
    switch (operator) {
      case NumberTableFilterOperator.EQUALS:
        return cellValueNum === Number(value)
      case NumberTableFilterOperator.GREATER_THAN:
        return cellValueNum > value
      case NumberTableFilterOperator.LESS_THAN:
        return cellValueNum < value
      default:
        return true
    }
  } else return true
}

export const getSortComparator =
  // eslint-disable-next-line sonarjs/cognitive-complexity
  (sort: TableSort | null) => (r1: Row<Project>, r2: Row<Project>) => {
    if (!sort) {
      return Number(r2.getValue('Stars')) - Number(r1.getValue('Stars'))
    }

    switch (sort.column) {
      case 'Name': {
        const v1 = r1.original.name
        const v2 = r2.original.name
        if (typeof v1 === 'string' && typeof v2 === 'string') {
          return sort.direction === 'asc' ? v2.localeCompare(v1) : v1.localeCompare(v2)
        }
        break
      }
      case 'Contrib.': {
        const v1 = r1.original.contributorCount
        const v2 = r2.original.contributorCount
        if (typeof v1 === 'number' && typeof v2 === 'number') {
          return sort.direction === 'desc' ? v2 - v1 : v1 - v2
        }
        break
      }
      case 'Forks/Contrib.': {
        const v1forks = r1.original.forkCount
        const v1contrib = r1.original.contributorCount
        const v2forks = r2.original.forkCount
        const v2contrib = r2.original.contributorCount
        if (
          typeof v1forks === 'number' &&
          typeof v1contrib === 'number' &&
          typeof v2forks === 'number' &&
          typeof v2contrib === 'number'
        ) {
          const v1 = v1forks / v1contrib
          const v2 = v2forks / v2contrib
          return sort.direction === 'desc' ? v2 - v1 : v1 - v2
        }
        break
      }
      case 'Issues/Contrib.': {
        const v1issues = r1.original.issueCount
        const v1contrib = r1.original.contributorCount
        const v2issues = r2.original.issueCount
        const v2contrib = r2.original.contributorCount
        if (
          typeof v1issues === 'number' &&
          typeof v1contrib === 'number' &&
          typeof v2issues === 'number' &&
          typeof v2contrib === 'number'
        ) {
          const v1 = v1issues / v1contrib
          const v2 = v2issues / v2contrib
          return sort.direction === 'desc' ? v2 - v1 : v1 - v2
        }
        break
      }
      default: {
        const value1 = r1.getValue(sort.column)
        const value2 = r2.getValue(sort.column)

        if (typeof value1 === 'number' && typeof value2 === 'number') {
          return sort.direction === 'desc' ? value2 - value1 : value1 - value2
        }
      }
    }
    return 0
  }
