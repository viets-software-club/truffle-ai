import { Project } from '@/graphql/generated/gql'
import { Column } from '@tanstack/react-table'

export enum NumberTableFilterOperator {
  EQUALS = '=',
  NOT_EQUALS = '≠',
  GREATER_THAN = '>',
  LESS_THAN = '<',
  GREATER_THAN_OR_EQUAL = '≥',
  LESS_THAN_OR_EQUAL = '≤'
}

export enum StringTableFilterOperator {
  IS = 'is',
  IS_NOT = 'is not',
  CONTAINS = 'contains',
  DOES_NOT_CONTAIN = 'does not contain',
  STARTS_WITH = 'starts with',
  ENDS_WITH = 'ends with'
}

export type NumberTableFilter = {
  column: Column<Project>
  operator: NumberTableFilterOperator
  value?: number
}

export type StringTableFilter = {
  column: Column<Project>
  operator: StringTableFilterOperator
  value?: string
}

export type TableFilter = NumberTableFilter | StringTableFilter
