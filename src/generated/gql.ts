import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigFloat: any
  BigInt: any
  Cursor: any
  Date: any
  Datetime: any
  JSON: any
  Opaque: any
  Time: any
  UUID: any
}

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']>
  gt?: InputMaybe<Scalars['BigFloat']>
  gte?: InputMaybe<Scalars['BigFloat']>
  in?: InputMaybe<Array<Scalars['BigFloat']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['BigFloat']>
  lte?: InputMaybe<Scalars['BigFloat']>
  neq?: InputMaybe<Scalars['BigFloat']>
}

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>
  gt?: InputMaybe<Scalars['BigInt']>
  gte?: InputMaybe<Scalars['BigInt']>
  in?: InputMaybe<Array<Scalars['BigInt']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['BigInt']>
  lte?: InputMaybe<Scalars['BigInt']>
  neq?: InputMaybe<Scalars['BigInt']>
}

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>
  is?: InputMaybe<FilterIs>
}

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>
  gt?: InputMaybe<Scalars['Date']>
  gte?: InputMaybe<Scalars['Date']>
  in?: InputMaybe<Array<Scalars['Date']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Date']>
  lte?: InputMaybe<Scalars['Date']>
  neq?: InputMaybe<Scalars['Date']>
}

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>
  gt?: InputMaybe<Scalars['Datetime']>
  gte?: InputMaybe<Scalars['Datetime']>
  in?: InputMaybe<Array<Scalars['Datetime']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Datetime']>
  lte?: InputMaybe<Scalars['Datetime']>
  neq?: InputMaybe<Scalars['Datetime']>
}

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<Scalars['Float']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  neq?: InputMaybe<Scalars['Float']>
}

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>
}

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  neq?: InputMaybe<Scalars['Int']>
}

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation'
  /** Deletes zero or more records from the `associated_person` collection */
  deleteFromassociated_personCollection: Associated_PersonDeleteResponse
  /** Deletes zero or more records from the `organization` collection */
  deleteFromorganizationCollection: OrganizationDeleteResponse
  /** Deletes zero or more records from the `project` collection */
  deleteFromprojectCollection: ProjectDeleteResponse
  /** Adds one or more `associated_person` records to the collection */
  insertIntoassociated_personCollection?: Maybe<Associated_PersonInsertResponse>
  /** Adds one or more `organization` records to the collection */
  insertIntoorganizationCollection?: Maybe<OrganizationInsertResponse>
  /** Adds one or more `project` records to the collection */
  insertIntoprojectCollection?: Maybe<ProjectInsertResponse>
  /** Updates zero or more records in the `associated_person` collection */
  updateassociated_personCollection: Associated_PersonUpdateResponse
  /** Updates zero or more records in the `organization` collection */
  updateorganizationCollection: OrganizationUpdateResponse
  /** Updates zero or more records in the `project` collection */
  updateprojectCollection: ProjectUpdateResponse
}

/** The root type for creating and mutating data */
export type MutationDeleteFromassociated_PersonCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Associated_PersonFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromorganizationCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<OrganizationFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromprojectCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjectFilter>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoassociated_PersonCollectionArgs = {
  objects: Array<Associated_PersonInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoorganizationCollectionArgs = {
  objects: Array<OrganizationInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoprojectCollectionArgs = {
  objects: Array<ProjectInsertInput>
}

/** The root type for creating and mutating data */
export type MutationUpdateassociated_PersonCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Associated_PersonFilter>
  set: Associated_PersonUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateorganizationCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<OrganizationFilter>
  set: OrganizationUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateprojectCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjectFilter>
  set: ProjectUpdateInput
}

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']
}

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']>
  is?: InputMaybe<FilterIs>
}

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']>
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
}

/** The root type for querying data */
export type Query = {
  __typename?: 'Query'
  /** A pagable collection of type `associated_person` */
  associated_personCollection?: Maybe<Associated_PersonConnection>
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>
  /** A pagable collection of type `organization` */
  organizationCollection?: Maybe<OrganizationConnection>
  /** A pagable collection of type `project` */
  projectCollection?: Maybe<ProjectConnection>
  test: Array<Test>
}

/** The root type for querying data */
export type QueryAssociated_PersonCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<Associated_PersonFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<Associated_PersonOrderBy>>
}

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
}

/** The root type for querying data */
export type QueryOrganizationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<OrganizationFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<OrganizationOrderBy>>
}

/** The root type for querying data */
export type QueryProjectCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjectFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjectOrderBy>>
}

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  ilike?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  is?: InputMaybe<FilterIs>
  like?: InputMaybe<Scalars['String']>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  neq?: InputMaybe<Scalars['String']>
  startsWith?: InputMaybe<Scalars['String']>
}

export type Test = {
  __typename?: 'Test'
  id: Scalars['ID']
}

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>
  gt?: InputMaybe<Scalars['Time']>
  gte?: InputMaybe<Scalars['Time']>
  in?: InputMaybe<Array<Scalars['Time']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Time']>
  lte?: InputMaybe<Scalars['Time']>
  neq?: InputMaybe<Scalars['Time']>
}

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>
  in?: InputMaybe<Array<Scalars['UUID']>>
  is?: InputMaybe<FilterIs>
  neq?: InputMaybe<Scalars['UUID']>
}

export type Associated_Person = Node & {
  __typename?: 'associated_person'
  associated_with?: Maybe<Scalars['UUID']>
  avatar_url?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['Datetime']>
  email?: Maybe<Scalars['String']>
  github_url?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  login?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  project?: Maybe<Project>
  repository_count?: Maybe<Scalars['Int']>
  twitter_username?: Maybe<Scalars['String']>
  website_url?: Maybe<Scalars['String']>
}

export type Associated_PersonConnection = {
  __typename?: 'associated_personConnection'
  edges: Array<Associated_PersonEdge>
  pageInfo: PageInfo
}

export type Associated_PersonDeleteResponse = {
  __typename?: 'associated_personDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Associated_Person>
}

export type Associated_PersonEdge = {
  __typename?: 'associated_personEdge'
  cursor: Scalars['String']
  node: Associated_Person
}

export type Associated_PersonFilter = {
  associated_with?: InputMaybe<UuidFilter>
  avatar_url?: InputMaybe<StringFilter>
  created_at?: InputMaybe<DatetimeFilter>
  email?: InputMaybe<StringFilter>
  github_url?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  login?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  repository_count?: InputMaybe<IntFilter>
  twitter_username?: InputMaybe<StringFilter>
  website_url?: InputMaybe<StringFilter>
}

export type Associated_PersonInsertInput = {
  associated_with?: InputMaybe<Scalars['UUID']>
  avatar_url?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  github_url?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  login?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  repository_count?: InputMaybe<Scalars['Int']>
  twitter_username?: InputMaybe<Scalars['String']>
  website_url?: InputMaybe<Scalars['String']>
}

export type Associated_PersonInsertResponse = {
  __typename?: 'associated_personInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Associated_Person>
}

export type Associated_PersonOrderBy = {
  associated_with?: InputMaybe<OrderByDirection>
  avatar_url?: InputMaybe<OrderByDirection>
  created_at?: InputMaybe<OrderByDirection>
  email?: InputMaybe<OrderByDirection>
  github_url?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  login?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  repository_count?: InputMaybe<OrderByDirection>
  twitter_username?: InputMaybe<OrderByDirection>
  website_url?: InputMaybe<OrderByDirection>
}

export type Associated_PersonUpdateInput = {
  associated_with?: InputMaybe<Scalars['UUID']>
  avatar_url?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  github_url?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  login?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  repository_count?: InputMaybe<Scalars['Int']>
  twitter_username?: InputMaybe<Scalars['String']>
  website_url?: InputMaybe<Scalars['String']>
}

export type Associated_PersonUpdateResponse = {
  __typename?: 'associated_personUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Associated_Person>
}

export type Organization = Node & {
  __typename?: 'organization'
  avatar_url?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['Datetime']>
  email?: Maybe<Scalars['String']>
  github_url?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  login?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projectCollection?: Maybe<ProjectConnection>
  repository_count?: Maybe<Scalars['Int']>
  twitter_username?: Maybe<Scalars['String']>
  website_url?: Maybe<Scalars['String']>
}

export type OrganizationProjectCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjectFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjectOrderBy>>
}

export type OrganizationConnection = {
  __typename?: 'organizationConnection'
  edges: Array<OrganizationEdge>
  pageInfo: PageInfo
}

export type OrganizationDeleteResponse = {
  __typename?: 'organizationDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Organization>
}

export type OrganizationEdge = {
  __typename?: 'organizationEdge'
  cursor: Scalars['String']
  node: Organization
}

export type OrganizationFilter = {
  avatar_url?: InputMaybe<StringFilter>
  created_at?: InputMaybe<DatetimeFilter>
  email?: InputMaybe<StringFilter>
  github_url?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  login?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  repository_count?: InputMaybe<IntFilter>
  twitter_username?: InputMaybe<StringFilter>
  website_url?: InputMaybe<StringFilter>
}

export type OrganizationInsertInput = {
  avatar_url?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  github_url?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  login?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  repository_count?: InputMaybe<Scalars['Int']>
  twitter_username?: InputMaybe<Scalars['String']>
  website_url?: InputMaybe<Scalars['String']>
}

export type OrganizationInsertResponse = {
  __typename?: 'organizationInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Organization>
}

export type OrganizationOrderBy = {
  avatar_url?: InputMaybe<OrderByDirection>
  created_at?: InputMaybe<OrderByDirection>
  email?: InputMaybe<OrderByDirection>
  github_url?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  login?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  repository_count?: InputMaybe<OrderByDirection>
  twitter_username?: InputMaybe<OrderByDirection>
  website_url?: InputMaybe<OrderByDirection>
}

export type OrganizationUpdateInput = {
  avatar_url?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  github_url?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  login?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  repository_count?: InputMaybe<Scalars['Int']>
  twitter_username?: InputMaybe<Scalars['String']>
  website_url?: InputMaybe<Scalars['String']>
}

export type OrganizationUpdateResponse = {
  __typename?: 'organizationUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Organization>
}

export type Project = Node & {
  __typename?: 'project'
  about?: Maybe<Scalars['String']>
  associated_personCollection?: Maybe<Associated_PersonConnection>
  contributor_count?: Maybe<Scalars['Int']>
  created_at?: Maybe<Scalars['Datetime']>
  eli5?: Maybe<Scalars['String']>
  fork_count?: Maybe<Scalars['Int']>
  github_url?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  is_bookmarked?: Maybe<Scalars['Boolean']>
  issue_count?: Maybe<Scalars['Int']>
  name: Scalars['String']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  organization?: Maybe<Organization>
  owned_by: Scalars['UUID']
  pull_request_count?: Maybe<Scalars['Int']>
  star_count?: Maybe<Scalars['Int']>
  star_history?: Maybe<Array<Maybe<Scalars['Int']>>>
  website_url?: Maybe<Scalars['String']>
}

export type ProjectAssociated_PersonCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<Associated_PersonFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<Associated_PersonOrderBy>>
}

export type ProjectConnection = {
  __typename?: 'projectConnection'
  edges: Array<ProjectEdge>
  pageInfo: PageInfo
}

export type ProjectDeleteResponse = {
  __typename?: 'projectDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Project>
}

export type ProjectEdge = {
  __typename?: 'projectEdge'
  cursor: Scalars['String']
  node: Project
}

export type ProjectFilter = {
  about?: InputMaybe<StringFilter>
  contributor_count?: InputMaybe<IntFilter>
  created_at?: InputMaybe<DatetimeFilter>
  eli5?: InputMaybe<StringFilter>
  fork_count?: InputMaybe<IntFilter>
  github_url?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  is_bookmarked?: InputMaybe<BooleanFilter>
  issue_count?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  owned_by?: InputMaybe<UuidFilter>
  pull_request_count?: InputMaybe<IntFilter>
  star_count?: InputMaybe<IntFilter>
  website_url?: InputMaybe<StringFilter>
}

export type ProjectInsertInput = {
  about?: InputMaybe<Scalars['String']>
  contributor_count?: InputMaybe<Scalars['Int']>
  created_at?: InputMaybe<Scalars['Datetime']>
  eli5?: InputMaybe<Scalars['String']>
  fork_count?: InputMaybe<Scalars['Int']>
  github_url?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  is_bookmarked?: InputMaybe<Scalars['Boolean']>
  issue_count?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  owned_by?: InputMaybe<Scalars['UUID']>
  pull_request_count?: InputMaybe<Scalars['Int']>
  star_count?: InputMaybe<Scalars['Int']>
  star_history?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  website_url?: InputMaybe<Scalars['String']>
}

export type ProjectInsertResponse = {
  __typename?: 'projectInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Project>
}

export type ProjectOrderBy = {
  about?: InputMaybe<OrderByDirection>
  contributor_count?: InputMaybe<OrderByDirection>
  created_at?: InputMaybe<OrderByDirection>
  eli5?: InputMaybe<OrderByDirection>
  fork_count?: InputMaybe<OrderByDirection>
  github_url?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  is_bookmarked?: InputMaybe<OrderByDirection>
  issue_count?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  owned_by?: InputMaybe<OrderByDirection>
  pull_request_count?: InputMaybe<OrderByDirection>
  star_count?: InputMaybe<OrderByDirection>
  website_url?: InputMaybe<OrderByDirection>
}

export type ProjectUpdateInput = {
  about?: InputMaybe<Scalars['String']>
  contributor_count?: InputMaybe<Scalars['Int']>
  created_at?: InputMaybe<Scalars['Datetime']>
  eli5?: InputMaybe<Scalars['String']>
  fork_count?: InputMaybe<Scalars['Int']>
  github_url?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  is_bookmarked?: InputMaybe<Scalars['Boolean']>
  issue_count?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  owned_by?: InputMaybe<Scalars['UUID']>
  pull_request_count?: InputMaybe<Scalars['Int']>
  star_count?: InputMaybe<Scalars['Int']>
  star_history?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  website_url?: InputMaybe<Scalars['String']>
}

export type ProjectUpdateResponse = {
  __typename?: 'projectUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Project>
}

export type ProjectDetailsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']>
}>

export type ProjectDetailsQuery = {
  __typename?: 'Query'
  projectCollection?: {
    __typename?: 'projectConnection'
    edges: Array<{
      __typename?: 'projectEdge'
      node: {
        __typename?: 'project'
        id: any
        nodeId: string
        eli5?: string | null
        about?: string | null
        name: string
        star_count?: number | null
        issue_count?: number | null
        fork_count?: number | null
        pull_request_count?: number | null
        contributor_count?: number | null
        github_url?: string | null
        website_url?: string | null
        star_history?: Array<number | null> | null
        owned_by: any
        organization?: {
          __typename?: 'organization'
          id: any
          nodeId: string
          login?: string | null
          avatar_url?: string | null
        } | null
      }
    }>
  } | null
}

export type TrendingProjectsQueryVariables = Exact<{ [key: string]: never }>

export type TrendingProjectsQuery = {
  __typename?: 'Query'
  projectCollection?: {
    __typename?: 'projectConnection'
    edges: Array<{
      __typename?: 'projectEdge'
      node: {
        __typename?: 'project'
        id: any
        nodeId: string
        name: string
        star_count?: number | null
        issue_count?: number | null
        fork_count?: number | null
        pull_request_count?: number | null
        contributor_count?: number | null
        website_url?: string | null
        owned_by: any
        organization?: {
          __typename?: 'organization'
          id: any
          nodeId: string
          login?: string | null
          avatar_url?: string | null
        } | null
      }
    }>
  } | null
}

export const ProjectDetailsDocument = gql`
  query ProjectDetails($id: UUID) {
    projectCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          nodeId
          eli5
          about
          name
          star_count
          issue_count
          fork_count
          pull_request_count
          contributor_count
          github_url
          website_url
          star_history
          owned_by
          organization {
            id
            nodeId
            login
            avatar_url
          }
        }
      }
    }
  }
`

export function useProjectDetailsQuery(
  options?: Omit<Urql.UseQueryArgs<ProjectDetailsQueryVariables>, 'query'>
) {
  return Urql.useQuery<ProjectDetailsQuery, ProjectDetailsQueryVariables>({
    query: ProjectDetailsDocument,
    ...options
  })
}
export const TrendingProjectsDocument = gql`
  query TrendingProjects {
    projectCollection {
      edges {
        node {
          id
          nodeId
          name
          star_count
          issue_count
          fork_count
          pull_request_count
          contributor_count
          website_url
          owned_by
          organization {
            id
            nodeId
            login
            avatar_url
          }
        }
      }
    }
  }
`

export function useTrendingProjectsQuery(
  options?: Omit<Urql.UseQueryArgs<TrendingProjectsQueryVariables>, 'query'>
) {
  return Urql.useQuery<TrendingProjectsQuery, TrendingProjectsQueryVariables>({
    query: TrendingProjectsDocument,
    ...options
  })
}
