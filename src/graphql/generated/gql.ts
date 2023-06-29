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

export type AllowedUsers = Node & {
  __typename?: 'AllowedUsers'
  createdAt?: Maybe<Scalars['Datetime']>
  email?: Maybe<Scalars['String']>
  id: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type AllowedUsersConnection = {
  __typename?: 'AllowedUsersConnection'
  edges: Array<AllowedUsersEdge>
  pageInfo: PageInfo
}

export type AllowedUsersDeleteResponse = {
  __typename?: 'AllowedUsersDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AllowedUsers>
}

export type AllowedUsersEdge = {
  __typename?: 'AllowedUsersEdge'
  cursor: Scalars['String']
  node: AllowedUsers
}

export type AllowedUsersFilter = {
  createdAt?: InputMaybe<DatetimeFilter>
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
}

export type AllowedUsersInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
}

export type AllowedUsersInsertResponse = {
  __typename?: 'AllowedUsersInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AllowedUsers>
}

export type AllowedUsersOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  email?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
}

export type AllowedUsersUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
}

export type AllowedUsersUpdateResponse = {
  __typename?: 'AllowedUsersUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AllowedUsers>
}

export type AssociatedPerson = Node & {
  __typename?: 'AssociatedPerson'
  avatarUrl?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  email?: Maybe<Scalars['String']>
  foundedByCollection?: Maybe<FoundedByConnection>
  githubUrl?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  login?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projectCollection?: Maybe<ProjectConnection>
  repositoryCount?: Maybe<Scalars['Int']>
  twitterUsername?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
}

export type AssociatedPersonFoundedByCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<FoundedByFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FoundedByOrderBy>>
}

export type AssociatedPersonProjectCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjectFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjectOrderBy>>
}

export type AssociatedPersonConnection = {
  __typename?: 'AssociatedPersonConnection'
  edges: Array<AssociatedPersonEdge>
  pageInfo: PageInfo
}

export type AssociatedPersonDeleteResponse = {
  __typename?: 'AssociatedPersonDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AssociatedPerson>
}

export type AssociatedPersonEdge = {
  __typename?: 'AssociatedPersonEdge'
  cursor: Scalars['String']
  node: AssociatedPerson
}

export type AssociatedPersonFilter = {
  avatarUrl?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  email?: InputMaybe<StringFilter>
  githubUrl?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  login?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  repositoryCount?: InputMaybe<IntFilter>
  twitterUsername?: InputMaybe<StringFilter>
  websiteUrl?: InputMaybe<StringFilter>
}

export type AssociatedPersonInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  githubUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  login?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  repositoryCount?: InputMaybe<Scalars['Int']>
  twitterUsername?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type AssociatedPersonInsertResponse = {
  __typename?: 'AssociatedPersonInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AssociatedPerson>
}

export type AssociatedPersonOrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  email?: InputMaybe<OrderByDirection>
  githubUrl?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  login?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  repositoryCount?: InputMaybe<OrderByDirection>
  twitterUsername?: InputMaybe<OrderByDirection>
  websiteUrl?: InputMaybe<OrderByDirection>
}

export type AssociatedPersonUpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  githubUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  login?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  repositoryCount?: InputMaybe<Scalars['Int']>
  twitterUsername?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type AssociatedPersonUpdateResponse = {
  __typename?: 'AssociatedPersonUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AssociatedPerson>
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

export type Bookmark = Node & {
  __typename?: 'Bookmark'
  category?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  id: Scalars['UUID']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  project?: Maybe<Project>
  projectId: Scalars['UUID']
  userId: Scalars['UUID']
}

export type Bookmark2 = Node & {
  __typename?: 'Bookmark2'
  createdAt?: Maybe<Scalars['Datetime']>
  id: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  repo2Collection?: Maybe<Repo2Connection>
  repoId?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['UUID']>
}

export type Bookmark2Repo2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<Repo2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<Repo2OrderBy>>
}

export type Bookmark2Connection = {
  __typename?: 'Bookmark2Connection'
  edges: Array<Bookmark2Edge>
  pageInfo: PageInfo
}

export type Bookmark2DeleteResponse = {
  __typename?: 'Bookmark2DeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Bookmark2>
}

export type Bookmark2Edge = {
  __typename?: 'Bookmark2Edge'
  cursor: Scalars['String']
  node: Bookmark2
}

export type Bookmark2Filter = {
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  repoId?: InputMaybe<StringFilter>
  userId?: InputMaybe<UuidFilter>
}

export type Bookmark2InsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  repoId?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['UUID']>
}

export type Bookmark2InsertResponse = {
  __typename?: 'Bookmark2InsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Bookmark2>
}

export type Bookmark2OrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  repoId?: InputMaybe<OrderByDirection>
  userId?: InputMaybe<OrderByDirection>
}

export type Bookmark2UpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  repoId?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['UUID']>
}

export type Bookmark2UpdateResponse = {
  __typename?: 'Bookmark2UpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Bookmark2>
}

export type BookmarkConnection = {
  __typename?: 'BookmarkConnection'
  edges: Array<BookmarkEdge>
  pageInfo: PageInfo
}

export type BookmarkDeleteResponse = {
  __typename?: 'BookmarkDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Bookmark>
}

export type BookmarkEdge = {
  __typename?: 'BookmarkEdge'
  cursor: Scalars['String']
  node: Bookmark
}

export type BookmarkFilter = {
  category?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  projectId?: InputMaybe<UuidFilter>
  userId?: InputMaybe<UuidFilter>
}

export type BookmarkInsertInput = {
  category?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['UUID']>
  projectId?: InputMaybe<Scalars['UUID']>
  userId?: InputMaybe<Scalars['UUID']>
}

export type BookmarkInsertResponse = {
  __typename?: 'BookmarkInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Bookmark>
}

export type BookmarkOrderBy = {
  category?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  projectId?: InputMaybe<OrderByDirection>
  userId?: InputMaybe<OrderByDirection>
}

export type BookmarkUpdateInput = {
  category?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['UUID']>
  projectId?: InputMaybe<Scalars['UUID']>
  userId?: InputMaybe<Scalars['UUID']>
}

export type BookmarkUpdateResponse = {
  __typename?: 'BookmarkUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Bookmark>
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

export type FoundedBy = Node & {
  __typename?: 'FoundedBy'
  createdAt?: Maybe<Scalars['Datetime']>
  founder?: Maybe<AssociatedPerson>
  founderId: Scalars['UUID']
  id: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  project?: Maybe<Project>
  projectId: Scalars['UUID']
}

export type FoundedByConnection = {
  __typename?: 'FoundedByConnection'
  edges: Array<FoundedByEdge>
  pageInfo: PageInfo
}

export type FoundedByDeleteResponse = {
  __typename?: 'FoundedByDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<FoundedBy>
}

export type FoundedByEdge = {
  __typename?: 'FoundedByEdge'
  cursor: Scalars['String']
  node: FoundedBy
}

export type FoundedByFilter = {
  createdAt?: InputMaybe<DatetimeFilter>
  founderId?: InputMaybe<UuidFilter>
  id?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  projectId?: InputMaybe<UuidFilter>
}

export type FoundedByInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  founderId?: InputMaybe<Scalars['UUID']>
  projectId?: InputMaybe<Scalars['UUID']>
}

export type FoundedByInsertResponse = {
  __typename?: 'FoundedByInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<FoundedBy>
}

export type FoundedByOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  founderId?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  projectId?: InputMaybe<OrderByDirection>
}

export type FoundedByUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  founderId?: InputMaybe<Scalars['UUID']>
  projectId?: InputMaybe<Scalars['UUID']>
}

export type FoundedByUpdateResponse = {
  __typename?: 'FoundedByUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<FoundedBy>
}

export type GithubOrganization2 = Node & {
  __typename?: 'GithubOrganization2'
  avatarUrl?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  email?: Maybe<Scalars['String']>
  entryCreatedAt?: Maybe<Scalars['Datetime']>
  githubUrl?: Maybe<Scalars['String']>
  id: Scalars['BigInt']
  linkedinUrl?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  repo2Collection?: Maybe<Repo2Connection>
  twitterUsername?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
}

export type GithubOrganization2Repo2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<Repo2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<Repo2OrderBy>>
}

export type GithubOrganization2Connection = {
  __typename?: 'GithubOrganization2Connection'
  edges: Array<GithubOrganization2Edge>
  pageInfo: PageInfo
}

export type GithubOrganization2DeleteResponse = {
  __typename?: 'GithubOrganization2DeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubOrganization2>
}

export type GithubOrganization2Edge = {
  __typename?: 'GithubOrganization2Edge'
  cursor: Scalars['String']
  node: GithubOrganization2
}

export type GithubOrganization2Filter = {
  avatarUrl?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  email?: InputMaybe<StringFilter>
  entryCreatedAt?: InputMaybe<DatetimeFilter>
  githubUrl?: InputMaybe<StringFilter>
  id?: InputMaybe<BigIntFilter>
  linkedinUrl?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  twitterUsername?: InputMaybe<StringFilter>
  websiteUrl?: InputMaybe<StringFilter>
}

export type GithubOrganization2InsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  entryCreatedAt?: InputMaybe<Scalars['Datetime']>
  githubUrl?: InputMaybe<Scalars['String']>
  linkedinUrl?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  twitterUsername?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type GithubOrganization2InsertResponse = {
  __typename?: 'GithubOrganization2InsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubOrganization2>
}

export type GithubOrganization2OrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  email?: InputMaybe<OrderByDirection>
  entryCreatedAt?: InputMaybe<OrderByDirection>
  githubUrl?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  linkedinUrl?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  twitterUsername?: InputMaybe<OrderByDirection>
  websiteUrl?: InputMaybe<OrderByDirection>
}

export type GithubOrganization2UpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  entryCreatedAt?: InputMaybe<Scalars['Datetime']>
  githubUrl?: InputMaybe<Scalars['String']>
  linkedinUrl?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  twitterUsername?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type GithubOrganization2UpdateResponse = {
  __typename?: 'GithubOrganization2UpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubOrganization2>
}

export type GithubProgrammingLanguage2 = Node & {
  __typename?: 'GithubProgrammingLanguage2'
  color?: Maybe<Scalars['String']>
  entryCreatedAt?: Maybe<Scalars['Datetime']>
  language: Scalars['String']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  numberId: Scalars['BigInt']
}

export type GithubProgrammingLanguage2Connection = {
  __typename?: 'GithubProgrammingLanguage2Connection'
  edges: Array<GithubProgrammingLanguage2Edge>
  pageInfo: PageInfo
}

export type GithubProgrammingLanguage2DeleteResponse = {
  __typename?: 'GithubProgrammingLanguage2DeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubProgrammingLanguage2>
}

export type GithubProgrammingLanguage2Edge = {
  __typename?: 'GithubProgrammingLanguage2Edge'
  cursor: Scalars['String']
  node: GithubProgrammingLanguage2
}

export type GithubProgrammingLanguage2Filter = {
  color?: InputMaybe<StringFilter>
  entryCreatedAt?: InputMaybe<DatetimeFilter>
  language?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  numberId?: InputMaybe<BigIntFilter>
}

export type GithubProgrammingLanguage2InsertInput = {
  color?: InputMaybe<Scalars['String']>
  entryCreatedAt?: InputMaybe<Scalars['Datetime']>
  language?: InputMaybe<Scalars['String']>
}

export type GithubProgrammingLanguage2InsertResponse = {
  __typename?: 'GithubProgrammingLanguage2InsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubProgrammingLanguage2>
}

export type GithubProgrammingLanguage2OrderBy = {
  color?: InputMaybe<OrderByDirection>
  entryCreatedAt?: InputMaybe<OrderByDirection>
  language?: InputMaybe<OrderByDirection>
  numberId?: InputMaybe<OrderByDirection>
}

export type GithubProgrammingLanguage2UpdateInput = {
  color?: InputMaybe<Scalars['String']>
  entryCreatedAt?: InputMaybe<Scalars['Datetime']>
  language?: InputMaybe<Scalars['String']>
}

export type GithubProgrammingLanguage2UpdateResponse = {
  __typename?: 'GithubProgrammingLanguage2UpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubProgrammingLanguage2>
}

export type GithubStar2 = Node & {
  __typename?: 'GithubStar2'
  count?: Maybe<Scalars['BigInt']>
  createdAt?: Maybe<Scalars['Datetime']>
  date?: Maybe<Scalars['Datetime']>
  id: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  repo?: Maybe<Repo2>
  repoId?: Maybe<Scalars['String']>
}

export type GithubStar2Connection = {
  __typename?: 'GithubStar2Connection'
  edges: Array<GithubStar2Edge>
  pageInfo: PageInfo
}

export type GithubStar2DeleteResponse = {
  __typename?: 'GithubStar2DeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubStar2>
}

export type GithubStar2Edge = {
  __typename?: 'GithubStar2Edge'
  cursor: Scalars['String']
  node: GithubStar2
}

export type GithubStar2Filter = {
  count?: InputMaybe<BigIntFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  date?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  repoId?: InputMaybe<StringFilter>
}

export type GithubStar2InsertInput = {
  count?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  date?: InputMaybe<Scalars['Datetime']>
  repoId?: InputMaybe<Scalars['String']>
}

export type GithubStar2InsertResponse = {
  __typename?: 'GithubStar2InsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubStar2>
}

export type GithubStar2OrderBy = {
  count?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  date?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  repoId?: InputMaybe<OrderByDirection>
}

export type GithubStar2UpdateInput = {
  count?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  date?: InputMaybe<Scalars['Datetime']>
  repoId?: InputMaybe<Scalars['String']>
}

export type GithubStar2UpdateResponse = {
  __typename?: 'GithubStar2UpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubStar2>
}

export type GithubUser2 = Node & {
  __typename?: 'GithubUser2'
  avatarUrl?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  entryCreatedAt?: Maybe<Scalars['Datetime']>
  id: Scalars['BigInt']
  login?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  repositoryCount?: Maybe<Scalars['BigInt']>
  twitterUsername?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
}

export type GithubUser2Connection = {
  __typename?: 'GithubUser2Connection'
  edges: Array<GithubUser2Edge>
  pageInfo: PageInfo
}

export type GithubUser2DeleteResponse = {
  __typename?: 'GithubUser2DeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubUser2>
}

export type GithubUser2Edge = {
  __typename?: 'GithubUser2Edge'
  cursor: Scalars['String']
  node: GithubUser2
}

export type GithubUser2Filter = {
  avatarUrl?: InputMaybe<StringFilter>
  email?: InputMaybe<StringFilter>
  entryCreatedAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<BigIntFilter>
  login?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  repositoryCount?: InputMaybe<BigIntFilter>
  twitterUsername?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
  websiteUrl?: InputMaybe<StringFilter>
}

export type GithubUser2InsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  entryCreatedAt?: InputMaybe<Scalars['Datetime']>
  login?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  repositoryCount?: InputMaybe<Scalars['BigInt']>
  twitterUsername?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type GithubUser2InsertResponse = {
  __typename?: 'GithubUser2InsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubUser2>
}

export type GithubUser2OrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>
  email?: InputMaybe<OrderByDirection>
  entryCreatedAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  login?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  repositoryCount?: InputMaybe<OrderByDirection>
  twitterUsername?: InputMaybe<OrderByDirection>
  url?: InputMaybe<OrderByDirection>
  websiteUrl?: InputMaybe<OrderByDirection>
}

export type GithubUser2UpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  entryCreatedAt?: InputMaybe<Scalars['Datetime']>
  login?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  repositoryCount?: InputMaybe<Scalars['BigInt']>
  twitterUsername?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type GithubUser2UpdateResponse = {
  __typename?: 'GithubUser2UpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GithubUser2>
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

export type Mutation = {
  __typename?: 'Mutation'
  addBookmark: Response
  addProjectByName: Response
  addProjectByUrl: Response
  deleteBookmark: Response
  /** Deletes zero or more records from the `AllowedUsers` collection */
  deleteFromAllowedUsersCollection: AllowedUsersDeleteResponse
  /** Deletes zero or more records from the `AssociatedPerson` collection */
  deleteFromAssociatedPersonCollection: AssociatedPersonDeleteResponse
  /** Deletes zero or more records from the `Bookmark2` collection */
  deleteFromBookmark2Collection: Bookmark2DeleteResponse
  /** Deletes zero or more records from the `Bookmark` collection */
  deleteFromBookmarkCollection: BookmarkDeleteResponse
  /** Deletes zero or more records from the `FoundedBy` collection */
  deleteFromFoundedByCollection: FoundedByDeleteResponse
  /** Deletes zero or more records from the `GithubOrganization2` collection */
  deleteFromGithubOrganization2Collection: GithubOrganization2DeleteResponse
  /** Deletes zero or more records from the `GithubProgrammingLanguage2` collection */
  deleteFromGithubProgrammingLanguage2Collection: GithubProgrammingLanguage2DeleteResponse
  /** Deletes zero or more records from the `GithubStar2` collection */
  deleteFromGithubStar2Collection: GithubStar2DeleteResponse
  /** Deletes zero or more records from the `GithubUser2` collection */
  deleteFromGithubUser2Collection: GithubUser2DeleteResponse
  /** Deletes zero or more records from the `Organization` collection */
  deleteFromOrganizationCollection: OrganizationDeleteResponse
  /** Deletes zero or more records from the `Project` collection */
  deleteFromProjectCollection: ProjectDeleteResponse
  /** Deletes zero or more records from the `ProjectGithub` collection */
  deleteFromProjectGithubCollection: ProjectGithubDeleteResponse
  /** Deletes zero or more records from the `Repo2` collection */
  deleteFromRepo2Collection: Repo2DeleteResponse
  /** Deletes zero or more records from the `RepoUser2` collection */
  deleteFromRepoUser2Collection: RepoUser2DeleteResponse
  /** Deletes zero or more records from the `TestTable` collection */
  deleteFromTestTableCollection: TestTableDeleteResponse
  /** Deletes zero or more records from the `Trending2` collection */
  deleteFromTrending2Collection: Trending2DeleteResponse
  editBookmarkCategory: Response
  /** Adds one or more `AllowedUsers` records to the collection */
  insertIntoAllowedUsersCollection?: Maybe<AllowedUsersInsertResponse>
  /** Adds one or more `AssociatedPerson` records to the collection */
  insertIntoAssociatedPersonCollection?: Maybe<AssociatedPersonInsertResponse>
  /** Adds one or more `Bookmark2` records to the collection */
  insertIntoBookmark2Collection?: Maybe<Bookmark2InsertResponse>
  /** Adds one or more `Bookmark` records to the collection */
  insertIntoBookmarkCollection?: Maybe<BookmarkInsertResponse>
  /** Adds one or more `FoundedBy` records to the collection */
  insertIntoFoundedByCollection?: Maybe<FoundedByInsertResponse>
  /** Adds one or more `GithubOrganization2` records to the collection */
  insertIntoGithubOrganization2Collection?: Maybe<GithubOrganization2InsertResponse>
  /** Adds one or more `GithubProgrammingLanguage2` records to the collection */
  insertIntoGithubProgrammingLanguage2Collection?: Maybe<GithubProgrammingLanguage2InsertResponse>
  /** Adds one or more `GithubStar2` records to the collection */
  insertIntoGithubStar2Collection?: Maybe<GithubStar2InsertResponse>
  /** Adds one or more `GithubUser2` records to the collection */
  insertIntoGithubUser2Collection?: Maybe<GithubUser2InsertResponse>
  /** Adds one or more `Organization` records to the collection */
  insertIntoOrganizationCollection?: Maybe<OrganizationInsertResponse>
  /** Adds one or more `Project` records to the collection */
  insertIntoProjectCollection?: Maybe<ProjectInsertResponse>
  /** Adds one or more `ProjectGithub` records to the collection */
  insertIntoProjectGithubCollection?: Maybe<ProjectGithubInsertResponse>
  /** Adds one or more `Repo2` records to the collection */
  insertIntoRepo2Collection?: Maybe<Repo2InsertResponse>
  /** Adds one or more `RepoUser2` records to the collection */
  insertIntoRepoUser2Collection?: Maybe<RepoUser2InsertResponse>
  /** Adds one or more `TestTable` records to the collection */
  insertIntoTestTableCollection?: Maybe<TestTableInsertResponse>
  /** Adds one or more `Trending2` records to the collection */
  insertIntoTrending2Collection?: Maybe<Trending2InsertResponse>
  renameBookmarkCategory: Response
  /** Updates zero or more records in the `AllowedUsers` collection */
  updateAllowedUsersCollection: AllowedUsersUpdateResponse
  /** Updates zero or more records in the `AssociatedPerson` collection */
  updateAssociatedPersonCollection: AssociatedPersonUpdateResponse
  /** Updates zero or more records in the `Bookmark2` collection */
  updateBookmark2Collection: Bookmark2UpdateResponse
  /** Updates zero or more records in the `Bookmark` collection */
  updateBookmarkCollection: BookmarkUpdateResponse
  /** Updates zero or more records in the `FoundedBy` collection */
  updateFoundedByCollection: FoundedByUpdateResponse
  /** Updates zero or more records in the `GithubOrganization2` collection */
  updateGithubOrganization2Collection: GithubOrganization2UpdateResponse
  /** Updates zero or more records in the `GithubProgrammingLanguage2` collection */
  updateGithubProgrammingLanguage2Collection: GithubProgrammingLanguage2UpdateResponse
  /** Updates zero or more records in the `GithubStar2` collection */
  updateGithubStar2Collection: GithubStar2UpdateResponse
  /** Updates zero or more records in the `GithubUser2` collection */
  updateGithubUser2Collection: GithubUser2UpdateResponse
  /** Updates zero or more records in the `Organization` collection */
  updateOrganizationCollection: OrganizationUpdateResponse
  /** Updates zero or more records in the `Project` collection */
  updateProjectCollection: ProjectUpdateResponse
  /** Updates zero or more records in the `ProjectGithub` collection */
  updateProjectGithubCollection: ProjectGithubUpdateResponse
  /** Updates zero or more records in the `Repo2` collection */
  updateRepo2Collection: Repo2UpdateResponse
  /** Updates zero or more records in the `RepoUser2` collection */
  updateRepoUser2Collection: RepoUser2UpdateResponse
  /** Updates zero or more records in the `TestTable` collection */
  updateTestTableCollection: TestTableUpdateResponse
  /** Updates zero or more records in the `Trending2` collection */
  updateTrending2Collection: Trending2UpdateResponse
}

export type MutationAddBookmarkArgs = {
  category: Scalars['String']
  projectID: Scalars['String']
}

export type MutationAddProjectByNameArgs = {
  bookmarkCategory: Scalars['String']
  name: Scalars['String']
  owner: Scalars['String']
}

export type MutationAddProjectByUrlArgs = {
  bookmarkCategory: Scalars['String']
  url: Scalars['String']
}

export type MutationDeleteBookmarkArgs = {
  projectID: Scalars['String']
}

export type MutationDeleteFromAllowedUsersCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AllowedUsersFilter>
}

export type MutationDeleteFromAssociatedPersonCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AssociatedPersonFilter>
}

export type MutationDeleteFromBookmark2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Bookmark2Filter>
}

export type MutationDeleteFromBookmarkCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<BookmarkFilter>
}

export type MutationDeleteFromFoundedByCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<FoundedByFilter>
}

export type MutationDeleteFromGithubOrganization2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GithubOrganization2Filter>
}

export type MutationDeleteFromGithubProgrammingLanguage2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GithubProgrammingLanguage2Filter>
}

export type MutationDeleteFromGithubStar2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GithubStar2Filter>
}

export type MutationDeleteFromGithubUser2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GithubUser2Filter>
}

export type MutationDeleteFromOrganizationCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<OrganizationFilter>
}

export type MutationDeleteFromProjectCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjectFilter>
}

export type MutationDeleteFromProjectGithubCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjectGithubFilter>
}

export type MutationDeleteFromRepo2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Repo2Filter>
}

export type MutationDeleteFromRepoUser2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<RepoUser2Filter>
}

export type MutationDeleteFromTestTableCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<TestTableFilter>
}

export type MutationDeleteFromTrending2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Trending2Filter>
}

export type MutationEditBookmarkCategoryArgs = {
  newCategory: Scalars['String']
  projectID: Scalars['String']
}

export type MutationInsertIntoAllowedUsersCollectionArgs = {
  objects: Array<AllowedUsersInsertInput>
}

export type MutationInsertIntoAssociatedPersonCollectionArgs = {
  objects: Array<AssociatedPersonInsertInput>
}

export type MutationInsertIntoBookmark2CollectionArgs = {
  objects: Array<Bookmark2InsertInput>
}

export type MutationInsertIntoBookmarkCollectionArgs = {
  objects: Array<BookmarkInsertInput>
}

export type MutationInsertIntoFoundedByCollectionArgs = {
  objects: Array<FoundedByInsertInput>
}

export type MutationInsertIntoGithubOrganization2CollectionArgs = {
  objects: Array<GithubOrganization2InsertInput>
}

export type MutationInsertIntoGithubProgrammingLanguage2CollectionArgs = {
  objects: Array<GithubProgrammingLanguage2InsertInput>
}

export type MutationInsertIntoGithubStar2CollectionArgs = {
  objects: Array<GithubStar2InsertInput>
}

export type MutationInsertIntoGithubUser2CollectionArgs = {
  objects: Array<GithubUser2InsertInput>
}

export type MutationInsertIntoOrganizationCollectionArgs = {
  objects: Array<OrganizationInsertInput>
}

export type MutationInsertIntoProjectCollectionArgs = {
  objects: Array<ProjectInsertInput>
}

export type MutationInsertIntoProjectGithubCollectionArgs = {
  objects: Array<ProjectGithubInsertInput>
}

export type MutationInsertIntoRepo2CollectionArgs = {
  objects: Array<Repo2InsertInput>
}

export type MutationInsertIntoRepoUser2CollectionArgs = {
  objects: Array<RepoUser2InsertInput>
}

export type MutationInsertIntoTestTableCollectionArgs = {
  objects: Array<TestTableInsertInput>
}

export type MutationInsertIntoTrending2CollectionArgs = {
  objects: Array<Trending2InsertInput>
}

export type MutationRenameBookmarkCategoryArgs = {
  newCategory: Scalars['String']
  oldCategory: Scalars['String']
}

export type MutationUpdateAllowedUsersCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AllowedUsersFilter>
  set: AllowedUsersUpdateInput
}

export type MutationUpdateAssociatedPersonCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AssociatedPersonFilter>
  set: AssociatedPersonUpdateInput
}

export type MutationUpdateBookmark2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Bookmark2Filter>
  set: Bookmark2UpdateInput
}

export type MutationUpdateBookmarkCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<BookmarkFilter>
  set: BookmarkUpdateInput
}

export type MutationUpdateFoundedByCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<FoundedByFilter>
  set: FoundedByUpdateInput
}

export type MutationUpdateGithubOrganization2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GithubOrganization2Filter>
  set: GithubOrganization2UpdateInput
}

export type MutationUpdateGithubProgrammingLanguage2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GithubProgrammingLanguage2Filter>
  set: GithubProgrammingLanguage2UpdateInput
}

export type MutationUpdateGithubStar2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GithubStar2Filter>
  set: GithubStar2UpdateInput
}

export type MutationUpdateGithubUser2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GithubUser2Filter>
  set: GithubUser2UpdateInput
}

export type MutationUpdateOrganizationCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<OrganizationFilter>
  set: OrganizationUpdateInput
}

export type MutationUpdateProjectCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjectFilter>
  set: ProjectUpdateInput
}

export type MutationUpdateProjectGithubCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjectGithubFilter>
  set: ProjectGithubUpdateInput
}

export type MutationUpdateRepo2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Repo2Filter>
  set: Repo2UpdateInput
}

export type MutationUpdateRepoUser2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<RepoUser2Filter>
  set: RepoUser2UpdateInput
}

export type MutationUpdateTestTableCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<TestTableFilter>
  set: TestTableUpdateInput
}

export type MutationUpdateTrending2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Trending2Filter>
  set: Trending2UpdateInput
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

export type Organization = Node & {
  __typename?: 'Organization'
  avatarUrl?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  crunchbase?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  founded?: Maybe<Scalars['Int']>
  githubUrl?: Maybe<Scalars['String']>
  hqLocation?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  industries?: Maybe<Scalars['String']>
  linkedinAbout?: Maybe<Scalars['String']>
  linkedinFollowers?: Maybe<Scalars['Int']>
  linkedinUpdates?: Maybe<Array<Maybe<Scalars['JSON']>>>
  linkedinUrl?: Maybe<Scalars['String']>
  linkedinWebsiteUrl?: Maybe<Scalars['String']>
  login?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  numberOfEmployees?: Maybe<Scalars['Int']>
  projectCollection?: Maybe<ProjectConnection>
  repositoryCount?: Maybe<Scalars['Int']>
  specialties?: Maybe<Scalars['String']>
  twitterUsername?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
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
  __typename?: 'OrganizationConnection'
  edges: Array<OrganizationEdge>
  pageInfo: PageInfo
}

export type OrganizationDeleteResponse = {
  __typename?: 'OrganizationDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Organization>
}

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge'
  cursor: Scalars['String']
  node: Organization
}

export type OrganizationFilter = {
  avatarUrl?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  crunchbase?: InputMaybe<StringFilter>
  email?: InputMaybe<StringFilter>
  founded?: InputMaybe<IntFilter>
  githubUrl?: InputMaybe<StringFilter>
  hqLocation?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  industries?: InputMaybe<StringFilter>
  linkedinAbout?: InputMaybe<StringFilter>
  linkedinFollowers?: InputMaybe<IntFilter>
  linkedinUrl?: InputMaybe<StringFilter>
  linkedinWebsiteUrl?: InputMaybe<StringFilter>
  login?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  numberOfEmployees?: InputMaybe<IntFilter>
  repositoryCount?: InputMaybe<IntFilter>
  specialties?: InputMaybe<StringFilter>
  twitterUsername?: InputMaybe<StringFilter>
  websiteUrl?: InputMaybe<StringFilter>
}

export type OrganizationInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  crunchbase?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  founded?: InputMaybe<Scalars['Int']>
  githubUrl?: InputMaybe<Scalars['String']>
  hqLocation?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  industries?: InputMaybe<Scalars['String']>
  linkedinAbout?: InputMaybe<Scalars['String']>
  linkedinFollowers?: InputMaybe<Scalars['Int']>
  linkedinUpdates?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  linkedinUrl?: InputMaybe<Scalars['String']>
  linkedinWebsiteUrl?: InputMaybe<Scalars['String']>
  login?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  numberOfEmployees?: InputMaybe<Scalars['Int']>
  repositoryCount?: InputMaybe<Scalars['Int']>
  specialties?: InputMaybe<Scalars['String']>
  twitterUsername?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type OrganizationInsertResponse = {
  __typename?: 'OrganizationInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Organization>
}

export type OrganizationOrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  crunchbase?: InputMaybe<OrderByDirection>
  email?: InputMaybe<OrderByDirection>
  founded?: InputMaybe<OrderByDirection>
  githubUrl?: InputMaybe<OrderByDirection>
  hqLocation?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  industries?: InputMaybe<OrderByDirection>
  linkedinAbout?: InputMaybe<OrderByDirection>
  linkedinFollowers?: InputMaybe<OrderByDirection>
  linkedinUrl?: InputMaybe<OrderByDirection>
  linkedinWebsiteUrl?: InputMaybe<OrderByDirection>
  login?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  numberOfEmployees?: InputMaybe<OrderByDirection>
  repositoryCount?: InputMaybe<OrderByDirection>
  specialties?: InputMaybe<OrderByDirection>
  twitterUsername?: InputMaybe<OrderByDirection>
  websiteUrl?: InputMaybe<OrderByDirection>
}

export type OrganizationUpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  crunchbase?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  founded?: InputMaybe<Scalars['Int']>
  githubUrl?: InputMaybe<Scalars['String']>
  hqLocation?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  industries?: InputMaybe<Scalars['String']>
  linkedinAbout?: InputMaybe<Scalars['String']>
  linkedinFollowers?: InputMaybe<Scalars['Int']>
  linkedinUpdates?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  linkedinUrl?: InputMaybe<Scalars['String']>
  linkedinWebsiteUrl?: InputMaybe<Scalars['String']>
  login?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  numberOfEmployees?: InputMaybe<Scalars['Int']>
  repositoryCount?: InputMaybe<Scalars['Int']>
  specialties?: InputMaybe<Scalars['String']>
  twitterUsername?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type OrganizationUpdateResponse = {
  __typename?: 'OrganizationUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Organization>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']>
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
}

export type Project = Node & {
  __typename?: 'Project'
  about?: Maybe<Scalars['String']>
  associatedPerson?: Maybe<AssociatedPerson>
  bookmarkCollection?: Maybe<BookmarkConnection>
  categories?: Maybe<Array<Maybe<Scalars['String']>>>
  contributorCount?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['Datetime']>
  eli5?: Maybe<Scalars['String']>
  forkCount?: Maybe<Scalars['Int']>
  forkHistory?: Maybe<Array<Maybe<Scalars['JSON']>>>
  forksPerContributor?: Maybe<Scalars['Float']>
  foundedByCollection?: Maybe<FoundedByConnection>
  githubUrl?: Maybe<Scalars['String']>
  hackernewsSentiment?: Maybe<Scalars['String']>
  hackernewsStories?: Maybe<Array<Maybe<Scalars['String']>>>
  id: Scalars['UUID']
  isBookmarked?: Maybe<Scalars['Boolean']>
  isTrendingDaily?: Maybe<Scalars['Boolean']>
  isTrendingMonthly?: Maybe<Scalars['Boolean']>
  isTrendingWeekly?: Maybe<Scalars['Boolean']>
  issueCount?: Maybe<Scalars['Int']>
  issuesPerContributor?: Maybe<Scalars['Float']>
  languages?: Maybe<Array<Maybe<Scalars['JSON']>>>
  languages2?: Maybe<Array<Maybe<Scalars['JSON']>>>
  name?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  organization?: Maybe<Organization>
  owningOrganization?: Maybe<Scalars['UUID']>
  owningPerson?: Maybe<Scalars['UUID']>
  pullRequestCount?: Maybe<Scalars['Int']>
  relatedTwitterPosts?: Maybe<Array<Maybe<Scalars['JSON']>>>
  starCount?: Maybe<Scalars['Int']>
  starHistory?: Maybe<Array<Maybe<Scalars['JSON']>>>
  websiteUrl?: Maybe<Scalars['String']>
}

export type ProjectBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<BookmarkFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BookmarkOrderBy>>
}

export type ProjectFoundedByCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<FoundedByFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FoundedByOrderBy>>
}

export type ProjectConnection = {
  __typename?: 'ProjectConnection'
  edges: Array<ProjectEdge>
  pageInfo: PageInfo
}

export type ProjectDeleteResponse = {
  __typename?: 'ProjectDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Project>
}

export type ProjectEdge = {
  __typename?: 'ProjectEdge'
  cursor: Scalars['String']
  node: Project
}

export type ProjectFilter = {
  about?: InputMaybe<StringFilter>
  contributorCount?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  eli5?: InputMaybe<StringFilter>
  forkCount?: InputMaybe<IntFilter>
  forksPerContributor?: InputMaybe<FloatFilter>
  githubUrl?: InputMaybe<StringFilter>
  hackernewsSentiment?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  isBookmarked?: InputMaybe<BooleanFilter>
  isTrendingDaily?: InputMaybe<BooleanFilter>
  isTrendingMonthly?: InputMaybe<BooleanFilter>
  isTrendingWeekly?: InputMaybe<BooleanFilter>
  issueCount?: InputMaybe<IntFilter>
  issuesPerContributor?: InputMaybe<FloatFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  owningOrganization?: InputMaybe<UuidFilter>
  owningPerson?: InputMaybe<UuidFilter>
  pullRequestCount?: InputMaybe<IntFilter>
  starCount?: InputMaybe<IntFilter>
  websiteUrl?: InputMaybe<StringFilter>
}

export type ProjectGithub = Node & {
  __typename?: 'ProjectGithub'
  contributorCount?: Maybe<Scalars['BigInt']>
  createdAt?: Maybe<Scalars['Datetime']>
  description?: Maybe<Scalars['String']>
  forkCount?: Maybe<Scalars['BigInt']>
  id: Scalars['BigInt']
  issueCount?: Maybe<Scalars['BigInt']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  prCount?: Maybe<Scalars['BigInt']>
  starCount?: Maybe<Scalars['BigInt']>
  url?: Maybe<Scalars['String']>
}

export type ProjectGithubConnection = {
  __typename?: 'ProjectGithubConnection'
  edges: Array<ProjectGithubEdge>
  pageInfo: PageInfo
}

export type ProjectGithubDeleteResponse = {
  __typename?: 'ProjectGithubDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjectGithub>
}

export type ProjectGithubEdge = {
  __typename?: 'ProjectGithubEdge'
  cursor: Scalars['String']
  node: ProjectGithub
}

export type ProjectGithubFilter = {
  contributorCount?: InputMaybe<BigIntFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  description?: InputMaybe<StringFilter>
  forkCount?: InputMaybe<BigIntFilter>
  id?: InputMaybe<BigIntFilter>
  issueCount?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  prCount?: InputMaybe<BigIntFilter>
  starCount?: InputMaybe<BigIntFilter>
  url?: InputMaybe<StringFilter>
}

export type ProjectGithubInsertInput = {
  contributorCount?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  description?: InputMaybe<Scalars['String']>
  forkCount?: InputMaybe<Scalars['BigInt']>
  issueCount?: InputMaybe<Scalars['BigInt']>
  prCount?: InputMaybe<Scalars['BigInt']>
  starCount?: InputMaybe<Scalars['BigInt']>
  url?: InputMaybe<Scalars['String']>
}

export type ProjectGithubInsertResponse = {
  __typename?: 'ProjectGithubInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjectGithub>
}

export type ProjectGithubOrderBy = {
  contributorCount?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  description?: InputMaybe<OrderByDirection>
  forkCount?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  issueCount?: InputMaybe<OrderByDirection>
  prCount?: InputMaybe<OrderByDirection>
  starCount?: InputMaybe<OrderByDirection>
  url?: InputMaybe<OrderByDirection>
}

export type ProjectGithubUpdateInput = {
  contributorCount?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  description?: InputMaybe<Scalars['String']>
  forkCount?: InputMaybe<Scalars['BigInt']>
  issueCount?: InputMaybe<Scalars['BigInt']>
  prCount?: InputMaybe<Scalars['BigInt']>
  starCount?: InputMaybe<Scalars['BigInt']>
  url?: InputMaybe<Scalars['String']>
}

export type ProjectGithubUpdateResponse = {
  __typename?: 'ProjectGithubUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjectGithub>
}

export type ProjectInsertInput = {
  about?: InputMaybe<Scalars['String']>
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contributorCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  eli5?: InputMaybe<Scalars['String']>
  forkCount?: InputMaybe<Scalars['Int']>
  forkHistory?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  forksPerContributor?: InputMaybe<Scalars['Float']>
  githubUrl?: InputMaybe<Scalars['String']>
  hackernewsSentiment?: InputMaybe<Scalars['String']>
  hackernewsStories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id?: InputMaybe<Scalars['UUID']>
  isBookmarked?: InputMaybe<Scalars['Boolean']>
  isTrendingDaily?: InputMaybe<Scalars['Boolean']>
  isTrendingMonthly?: InputMaybe<Scalars['Boolean']>
  isTrendingWeekly?: InputMaybe<Scalars['Boolean']>
  issueCount?: InputMaybe<Scalars['Int']>
  issuesPerContributor?: InputMaybe<Scalars['Float']>
  languages?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  languages2?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  name?: InputMaybe<Scalars['String']>
  owningOrganization?: InputMaybe<Scalars['UUID']>
  owningPerson?: InputMaybe<Scalars['UUID']>
  pullRequestCount?: InputMaybe<Scalars['Int']>
  relatedTwitterPosts?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  starCount?: InputMaybe<Scalars['Int']>
  starHistory?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type ProjectInsertResponse = {
  __typename?: 'ProjectInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Project>
}

export type ProjectOrderBy = {
  about?: InputMaybe<OrderByDirection>
  contributorCount?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  eli5?: InputMaybe<OrderByDirection>
  forkCount?: InputMaybe<OrderByDirection>
  forksPerContributor?: InputMaybe<OrderByDirection>
  githubUrl?: InputMaybe<OrderByDirection>
  hackernewsSentiment?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  isBookmarked?: InputMaybe<OrderByDirection>
  isTrendingDaily?: InputMaybe<OrderByDirection>
  isTrendingMonthly?: InputMaybe<OrderByDirection>
  isTrendingWeekly?: InputMaybe<OrderByDirection>
  issueCount?: InputMaybe<OrderByDirection>
  issuesPerContributor?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  owningOrganization?: InputMaybe<OrderByDirection>
  owningPerson?: InputMaybe<OrderByDirection>
  pullRequestCount?: InputMaybe<OrderByDirection>
  starCount?: InputMaybe<OrderByDirection>
  websiteUrl?: InputMaybe<OrderByDirection>
}

export type ProjectUpdateInput = {
  about?: InputMaybe<Scalars['String']>
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contributorCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  eli5?: InputMaybe<Scalars['String']>
  forkCount?: InputMaybe<Scalars['Int']>
  forkHistory?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  forksPerContributor?: InputMaybe<Scalars['Float']>
  githubUrl?: InputMaybe<Scalars['String']>
  hackernewsSentiment?: InputMaybe<Scalars['String']>
  hackernewsStories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id?: InputMaybe<Scalars['UUID']>
  isBookmarked?: InputMaybe<Scalars['Boolean']>
  isTrendingDaily?: InputMaybe<Scalars['Boolean']>
  isTrendingMonthly?: InputMaybe<Scalars['Boolean']>
  isTrendingWeekly?: InputMaybe<Scalars['Boolean']>
  issueCount?: InputMaybe<Scalars['Int']>
  issuesPerContributor?: InputMaybe<Scalars['Float']>
  languages?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  languages2?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  name?: InputMaybe<Scalars['String']>
  owningOrganization?: InputMaybe<Scalars['UUID']>
  owningPerson?: InputMaybe<Scalars['UUID']>
  pullRequestCount?: InputMaybe<Scalars['Int']>
  relatedTwitterPosts?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  starCount?: InputMaybe<Scalars['Int']>
  starHistory?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type ProjectUpdateResponse = {
  __typename?: 'ProjectUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Project>
}

export type Query = {
  __typename?: 'Query'
  /** A pagable collection of type `AllowedUsers` */
  allowedUsersCollection?: Maybe<AllowedUsersConnection>
  /** A pagable collection of type `AssociatedPerson` */
  associatedPersonCollection?: Maybe<AssociatedPersonConnection>
  /** A pagable collection of type `Bookmark2` */
  bookmark2Collection?: Maybe<Bookmark2Connection>
  /** A pagable collection of type `Bookmark` */
  bookmarkCollection?: Maybe<BookmarkConnection>
  /** A pagable collection of type `FoundedBy` */
  foundedByCollection?: Maybe<FoundedByConnection>
  /** A pagable collection of type `GithubOrganization2` */
  githubOrganization2Collection?: Maybe<GithubOrganization2Connection>
  /** A pagable collection of type `GithubProgrammingLanguage2` */
  githubProgrammingLanguage2Collection?: Maybe<GithubProgrammingLanguage2Connection>
  /** A pagable collection of type `GithubStar2` */
  githubStar2Collection?: Maybe<GithubStar2Connection>
  /** A pagable collection of type `GithubUser2` */
  githubUser2Collection?: Maybe<GithubUser2Connection>
  helloWorld: Scalars['String']
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>
  /** A pagable collection of type `Organization` */
  organizationCollection?: Maybe<OrganizationConnection>
  /** A pagable collection of type `Project` */
  projectCollection?: Maybe<ProjectConnection>
  /** A pagable collection of type `ProjectGithub` */
  projectGithubCollection?: Maybe<ProjectGithubConnection>
  /** A pagable collection of type `Repo2` */
  repo2Collection?: Maybe<Repo2Connection>
  /** A pagable collection of type `RepoUser2` */
  repoUser2Collection?: Maybe<RepoUser2Connection>
  /** A pagable collection of type `TestTable` */
  testTableCollection?: Maybe<TestTableConnection>
  /** A pagable collection of type `Trending2` */
  trending2Collection?: Maybe<Trending2Connection>
}

export type QueryAllowedUsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AllowedUsersFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AllowedUsersOrderBy>>
}

export type QueryAssociatedPersonCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AssociatedPersonFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociatedPersonOrderBy>>
}

export type QueryBookmark2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<Bookmark2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<Bookmark2OrderBy>>
}

export type QueryBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<BookmarkFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BookmarkOrderBy>>
}

export type QueryFoundedByCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<FoundedByFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FoundedByOrderBy>>
}

export type QueryGithubOrganization2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GithubOrganization2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubOrganization2OrderBy>>
}

export type QueryGithubProgrammingLanguage2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GithubProgrammingLanguage2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubProgrammingLanguage2OrderBy>>
}

export type QueryGithubStar2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GithubStar2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubStar2OrderBy>>
}

export type QueryGithubUser2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GithubUser2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubUser2OrderBy>>
}

export type QueryNodeArgs = {
  nodeId: Scalars['ID']
}

export type QueryOrganizationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<OrganizationFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<OrganizationOrderBy>>
}

export type QueryProjectCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjectFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjectOrderBy>>
}

export type QueryProjectGithubCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjectGithubFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjectGithubOrderBy>>
}

export type QueryRepo2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<Repo2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<Repo2OrderBy>>
}

export type QueryRepoUser2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<RepoUser2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoUser2OrderBy>>
}

export type QueryTestTableCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<TestTableFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TestTableOrderBy>>
}

export type QueryTrending2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<Trending2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<Trending2OrderBy>>
}

export type Repo2 = Node & {
  __typename?: 'Repo2'
  about: Scalars['String']
  bookmark?: Maybe<Bookmark2>
  bookmarkId?: Maybe<Scalars['BigInt']>
  contributorCount: Scalars['BigInt']
  createdAt: Scalars['Datetime']
  eli5: Scalars['String']
  entryCreatedAt: Scalars['Datetime']
  forkCount: Scalars['BigInt']
  githubStar2Collection?: Maybe<GithubStar2Connection>
  hackernewsSentiment?: Maybe<Scalars['String']>
  id: Scalars['String']
  issueCount: Scalars['BigInt']
  name: Scalars['String']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  numberId: Scalars['BigInt']
  organization?: Maybe<GithubOrganization2>
  organizationId?: Maybe<Scalars['BigInt']>
  owner: Scalars['String']
  prCount: Scalars['BigInt']
  starCount: Scalars['BigInt']
  trending?: Maybe<Trending2>
  trendingId?: Maybe<Scalars['BigInt']>
  url: Scalars['String']
  websiteUrl: Scalars['String']
}

export type Repo2GithubStar2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GithubStar2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubStar2OrderBy>>
}

export type Repo2Connection = {
  __typename?: 'Repo2Connection'
  edges: Array<Repo2Edge>
  pageInfo: PageInfo
}

export type Repo2DeleteResponse = {
  __typename?: 'Repo2DeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Repo2>
}

export type Repo2Edge = {
  __typename?: 'Repo2Edge'
  cursor: Scalars['String']
  node: Repo2
}

export type Repo2Filter = {
  about?: InputMaybe<StringFilter>
  bookmarkId?: InputMaybe<BigIntFilter>
  contributorCount?: InputMaybe<BigIntFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  eli5?: InputMaybe<StringFilter>
  entryCreatedAt?: InputMaybe<DatetimeFilter>
  forkCount?: InputMaybe<BigIntFilter>
  hackernewsSentiment?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  issueCount?: InputMaybe<BigIntFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  numberId?: InputMaybe<BigIntFilter>
  organizationId?: InputMaybe<BigIntFilter>
  owner?: InputMaybe<StringFilter>
  prCount?: InputMaybe<BigIntFilter>
  starCount?: InputMaybe<BigIntFilter>
  trendingId?: InputMaybe<BigIntFilter>
  url?: InputMaybe<StringFilter>
  websiteUrl?: InputMaybe<StringFilter>
}

export type Repo2InsertInput = {
  about?: InputMaybe<Scalars['String']>
  bookmarkId?: InputMaybe<Scalars['BigInt']>
  contributorCount?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  eli5?: InputMaybe<Scalars['String']>
  entryCreatedAt?: InputMaybe<Scalars['Datetime']>
  forkCount?: InputMaybe<Scalars['BigInt']>
  hackernewsSentiment?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  issueCount?: InputMaybe<Scalars['BigInt']>
  name?: InputMaybe<Scalars['String']>
  organizationId?: InputMaybe<Scalars['BigInt']>
  owner?: InputMaybe<Scalars['String']>
  prCount?: InputMaybe<Scalars['BigInt']>
  starCount?: InputMaybe<Scalars['BigInt']>
  trendingId?: InputMaybe<Scalars['BigInt']>
  url?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type Repo2InsertResponse = {
  __typename?: 'Repo2InsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Repo2>
}

export type Repo2OrderBy = {
  about?: InputMaybe<OrderByDirection>
  bookmarkId?: InputMaybe<OrderByDirection>
  contributorCount?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  eli5?: InputMaybe<OrderByDirection>
  entryCreatedAt?: InputMaybe<OrderByDirection>
  forkCount?: InputMaybe<OrderByDirection>
  hackernewsSentiment?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  issueCount?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  numberId?: InputMaybe<OrderByDirection>
  organizationId?: InputMaybe<OrderByDirection>
  owner?: InputMaybe<OrderByDirection>
  prCount?: InputMaybe<OrderByDirection>
  starCount?: InputMaybe<OrderByDirection>
  trendingId?: InputMaybe<OrderByDirection>
  url?: InputMaybe<OrderByDirection>
  websiteUrl?: InputMaybe<OrderByDirection>
}

export type Repo2UpdateInput = {
  about?: InputMaybe<Scalars['String']>
  bookmarkId?: InputMaybe<Scalars['BigInt']>
  contributorCount?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  eli5?: InputMaybe<Scalars['String']>
  entryCreatedAt?: InputMaybe<Scalars['Datetime']>
  forkCount?: InputMaybe<Scalars['BigInt']>
  hackernewsSentiment?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  issueCount?: InputMaybe<Scalars['BigInt']>
  name?: InputMaybe<Scalars['String']>
  organizationId?: InputMaybe<Scalars['BigInt']>
  owner?: InputMaybe<Scalars['String']>
  prCount?: InputMaybe<Scalars['BigInt']>
  starCount?: InputMaybe<Scalars['BigInt']>
  trendingId?: InputMaybe<Scalars['BigInt']>
  url?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type Repo2UpdateResponse = {
  __typename?: 'Repo2UpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Repo2>
}

export type RepoUser2 = Node & {
  __typename?: 'RepoUser2'
  avatarUrl?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  email?: Maybe<Scalars['String']>
  entryCreatedAt?: Maybe<Scalars['Datetime']>
  id: Scalars['BigInt']
  name?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type RepoUser2Connection = {
  __typename?: 'RepoUser2Connection'
  edges: Array<RepoUser2Edge>
  pageInfo: PageInfo
}

export type RepoUser2DeleteResponse = {
  __typename?: 'RepoUser2DeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<RepoUser2>
}

export type RepoUser2Edge = {
  __typename?: 'RepoUser2Edge'
  cursor: Scalars['String']
  node: RepoUser2
}

export type RepoUser2Filter = {
  avatarUrl?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  email?: InputMaybe<StringFilter>
  entryCreatedAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<BigIntFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
}

export type RepoUser2InsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  entryCreatedAt?: InputMaybe<Scalars['Datetime']>
  name?: InputMaybe<Scalars['String']>
}

export type RepoUser2InsertResponse = {
  __typename?: 'RepoUser2InsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<RepoUser2>
}

export type RepoUser2OrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  email?: InputMaybe<OrderByDirection>
  entryCreatedAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
}

export type RepoUser2UpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  entryCreatedAt?: InputMaybe<Scalars['Datetime']>
  name?: InputMaybe<Scalars['String']>
}

export type RepoUser2UpdateResponse = {
  __typename?: 'RepoUser2UpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<RepoUser2>
}

export type Response = {
  __typename?: 'Response'
  code: Scalars['String']
  details?: Maybe<Scalars['String']>
  hint?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
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

export type TestTable = Node & {
  __typename?: 'TestTable'
  createdAt?: Maybe<Scalars['Datetime']>
  id: Scalars['UUID']
  name?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  testColumn?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['UUID']>
}

export type TestTableConnection = {
  __typename?: 'TestTableConnection'
  edges: Array<TestTableEdge>
  pageInfo: PageInfo
}

export type TestTableDeleteResponse = {
  __typename?: 'TestTableDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<TestTable>
}

export type TestTableEdge = {
  __typename?: 'TestTableEdge'
  cursor: Scalars['String']
  node: TestTable
}

export type TestTableFilter = {
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  testColumn?: InputMaybe<StringFilter>
  userId?: InputMaybe<UuidFilter>
}

export type TestTableInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['UUID']>
  name?: InputMaybe<Scalars['String']>
  testColumn?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['UUID']>
}

export type TestTableInsertResponse = {
  __typename?: 'TestTableInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<TestTable>
}

export type TestTableOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  testColumn?: InputMaybe<OrderByDirection>
  userId?: InputMaybe<OrderByDirection>
}

export type TestTableUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['UUID']>
  name?: InputMaybe<Scalars['String']>
  testColumn?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['UUID']>
}

export type TestTableUpdateResponse = {
  __typename?: 'TestTableUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<TestTable>
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

export type Trending2 = Node & {
  __typename?: 'Trending2'
  createdAt?: Maybe<Scalars['Datetime']>
  id: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  repo2Collection?: Maybe<Repo2Connection>
  repoId?: Maybe<Scalars['String']>
}

export type Trending2Repo2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<Repo2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<Repo2OrderBy>>
}

export type Trending2Connection = {
  __typename?: 'Trending2Connection'
  edges: Array<Trending2Edge>
  pageInfo: PageInfo
}

export type Trending2DeleteResponse = {
  __typename?: 'Trending2DeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Trending2>
}

export type Trending2Edge = {
  __typename?: 'Trending2Edge'
  cursor: Scalars['String']
  node: Trending2
}

export type Trending2Filter = {
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  repoId?: InputMaybe<StringFilter>
}

export type Trending2InsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  repoId?: InputMaybe<Scalars['String']>
}

export type Trending2InsertResponse = {
  __typename?: 'Trending2InsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Trending2>
}

export type Trending2OrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  repoId?: InputMaybe<OrderByDirection>
}

export type Trending2UpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  repoId?: InputMaybe<Scalars['String']>
}

export type Trending2UpdateResponse = {
  __typename?: 'Trending2UpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Trending2>
}

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>
  in?: InputMaybe<Array<Scalars['UUID']>>
  is?: InputMaybe<FilterIs>
  neq?: InputMaybe<Scalars['UUID']>
}

export type AddBookmarkMutationVariables = Exact<{
  projectID: Scalars['String']
  category: Scalars['String']
}>

export type AddBookmarkMutation = {
  __typename?: 'Mutation'
  addBookmark: { __typename?: 'Response'; code: string; message?: string | null }
}

export type AddProjectByUrlMutationVariables = Exact<{
  url: Scalars['String']
  category: Scalars['String']
}>

export type AddProjectByUrlMutation = {
  __typename?: 'Mutation'
  addProjectByUrl: { __typename?: 'Response'; code: string; message?: string | null }
}

export type DeleteBookmarkMutationVariables = Exact<{
  projectID: Scalars['String']
}>

export type DeleteBookmarkMutation = {
  __typename?: 'Mutation'
  deleteBookmark: { __typename?: 'Response'; code: string; message?: string | null }
}

export type EditBookmarkCategoryMutationVariables = Exact<{
  projectID: Scalars['String']
  newCategory: Scalars['String']
}>

export type EditBookmarkCategoryMutation = {
  __typename?: 'Mutation'
  editBookmarkCategory: { __typename?: 'Response'; code: string; message?: string | null }
}

export type RenameBookmarkCategoryMutationVariables = Exact<{
  oldCategory: Scalars['String']
  newCategory: Scalars['String']
}>

export type RenameBookmarkCategoryMutation = {
  __typename?: 'Mutation'
  renameBookmarkCategory: { __typename?: 'Response'; code: string; message?: string | null }
}

export type BookmarkIdsQueryVariables = Exact<{
  userId: Scalars['UUID']
  category?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['UUID']>
}>

export type BookmarkIdsQuery = {
  __typename?: 'Query'
  bookmarkCollection?: {
    __typename?: 'BookmarkConnection'
    edges: Array<{
      __typename?: 'BookmarkEdge'
      node: {
        __typename?: 'Bookmark'
        id: any
        category?: string | null
        project?: { __typename?: 'Project'; id: any } | null
      }
    }>
  } | null
}

export type FilteredBookmarksQueryVariables = Exact<{
  userId: Scalars['UUID']
  category?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['UUID']>
}>

export type FilteredBookmarksQuery = {
  __typename?: 'Query'
  bookmarkCollection?: {
    __typename?: 'BookmarkConnection'
    edges: Array<{
      __typename?: 'BookmarkEdge'
      node: {
        __typename?: 'Bookmark'
        id: any
        category?: string | null
        project?: {
          __typename?: 'Project'
          id: any
          name?: string | null
          owningPerson?: any | null
          owningOrganization?: any | null
          associatedPerson?: { __typename?: 'AssociatedPerson'; avatarUrl?: string | null } | null
          organization?: { __typename?: 'Organization'; avatarUrl?: string | null } | null
        } | null
      }
    }>
  } | null
}

export type ProjectDetailsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']>
}>

export type ProjectDetailsQuery = {
  __typename?: 'Query'
  projectCollection?: {
    __typename?: 'ProjectConnection'
    edges: Array<{
      __typename?: 'ProjectEdge'
      node: {
        __typename?: 'Project'
        id: any
        name?: string | null
        about?: string | null
        eli5?: string | null
        starCount?: number | null
        issueCount?: number | null
        forkCount?: number | null
        pullRequestCount?: number | null
        contributorCount?: number | null
        languages?: Array<any | null> | null
        githubUrl?: string | null
        websiteUrl?: string | null
        starHistory?: Array<any | null> | null
        owningPerson?: any | null
        owningOrganization?: any | null
        hackernewsSentiment?: string | null
        hackernewsStories?: Array<string | null> | null
        relatedTwitterPosts?: Array<any | null> | null
        forkHistory?: Array<any | null> | null
        categories?: Array<string | null> | null
        issuesPerContributor?: number | null
        forksPerContributor?: number | null
        associatedPerson?: {
          __typename?: 'AssociatedPerson'
          id: any
          name?: string | null
          login?: string | null
          avatarUrl?: string | null
          email?: string | null
          githubUrl?: string | null
          twitterUsername?: string | null
          repositoryCount?: number | null
          websiteUrl?: string | null
        } | null
        organization?: {
          __typename?: 'Organization'
          id: any
          login?: string | null
          avatarUrl?: string | null
          email?: string | null
          githubUrl?: string | null
          twitterUsername?: string | null
          repositoryCount?: number | null
          websiteUrl?: string | null
        } | null
      }
    }>
  } | null
}

export type ProjectIdsQueryVariables = Exact<{
  orderBy: ProjectOrderBy
  filter: ProjectFilter
}>

export type ProjectIdsQuery = {
  __typename?: 'Query'
  projectCollection?: {
    __typename?: 'ProjectConnection'
    edges: Array<{ __typename?: 'ProjectEdge'; node: { __typename?: 'Project'; id: any } }>
  } | null
}

export type TrendingProjectsQueryVariables = Exact<{
  orderBy: ProjectOrderBy
  filter: ProjectFilter
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
}>

export type TrendingProjectsQuery = {
  __typename?: 'Query'
  projectCollection?: {
    __typename?: 'ProjectConnection'
    edges: Array<{
      __typename?: 'ProjectEdge'
      node: {
        __typename?: 'Project'
        id: any
        name?: string | null
        starCount?: number | null
        issueCount?: number | null
        forkCount?: number | null
        pullRequestCount?: number | null
        contributorCount?: number | null
        githubUrl?: string | null
        websiteUrl?: string | null
        starHistory?: Array<any | null> | null
        forkHistory?: Array<any | null> | null
        owningPerson?: any | null
        owningOrganization?: any | null
        isTrendingDaily?: boolean | null
        isTrendingWeekly?: boolean | null
        isTrendingMonthly?: boolean | null
        issuesPerContributor?: number | null
        forksPerContributor?: number | null
        associatedPerson?: {
          __typename?: 'AssociatedPerson'
          id: any
          name?: string | null
          login?: string | null
          email?: string | null
          avatarUrl?: string | null
        } | null
        organization?: {
          __typename?: 'Organization'
          id: any
          login?: string | null
          avatarUrl?: string | null
        } | null
      }
    }>
    pageInfo: {
      __typename?: 'PageInfo'
      hasNextPage: boolean
      endCursor?: string | null
      hasPreviousPage: boolean
      startCursor?: string | null
    }
  } | null
}

export const AddBookmarkDocument = gql`
  mutation AddBookmark($projectID: String!, $category: String!) {
    addBookmark(projectID: $projectID, category: $category) {
      code
      message
    }
  }
`

export function useAddBookmarkMutation() {
  return Urql.useMutation<AddBookmarkMutation, AddBookmarkMutationVariables>(AddBookmarkDocument)
}
export const AddProjectByUrlDocument = gql`
  mutation AddProjectByUrl($url: String!, $category: String!) {
    addProjectByUrl(url: $url, bookmarkCategory: $category) {
      code
      message
    }
  }
`

export function useAddProjectByUrlMutation() {
  return Urql.useMutation<AddProjectByUrlMutation, AddProjectByUrlMutationVariables>(
    AddProjectByUrlDocument
  )
}
export const DeleteBookmarkDocument = gql`
  mutation DeleteBookmark($projectID: String!) {
    deleteBookmark(projectID: $projectID) {
      code
      message
    }
  }
`

export function useDeleteBookmarkMutation() {
  return Urql.useMutation<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>(
    DeleteBookmarkDocument
  )
}
export const EditBookmarkCategoryDocument = gql`
  mutation EditBookmarkCategory($projectID: String!, $newCategory: String!) {
    editBookmarkCategory(projectID: $projectID, newCategory: $newCategory) {
      code
      message
    }
  }
`

export function useEditBookmarkCategoryMutation() {
  return Urql.useMutation<EditBookmarkCategoryMutation, EditBookmarkCategoryMutationVariables>(
    EditBookmarkCategoryDocument
  )
}
export const RenameBookmarkCategoryDocument = gql`
  mutation RenameBookmarkCategory($oldCategory: String!, $newCategory: String!) {
    renameBookmarkCategory(oldCategory: $oldCategory, newCategory: $newCategory) {
      code
      message
    }
  }
`

export function useRenameBookmarkCategoryMutation() {
  return Urql.useMutation<RenameBookmarkCategoryMutation, RenameBookmarkCategoryMutationVariables>(
    RenameBookmarkCategoryDocument
  )
}
export const BookmarkIdsDocument = gql`
  query BookmarkIds($userId: UUID!, $category: String, $projectId: UUID) {
    bookmarkCollection(
      filter: {
        userId: { eq: $userId }
        category: { eq: $category }
        projectId: { eq: $projectId }
      }
    ) {
      edges {
        node {
          id
          category
          project {
            id
          }
        }
      }
    }
  }
`

export function useBookmarkIdsQuery(
  options: Omit<Urql.UseQueryArgs<BookmarkIdsQueryVariables>, 'query'>
) {
  return Urql.useQuery<BookmarkIdsQuery, BookmarkIdsQueryVariables>({
    query: BookmarkIdsDocument,
    ...options
  })
}
export const FilteredBookmarksDocument = gql`
  query FilteredBookmarks($userId: UUID!, $category: String, $projectId: UUID) {
    bookmarkCollection(
      filter: {
        userId: { eq: $userId }
        category: { eq: $category }
        projectId: { eq: $projectId }
      }
    ) {
      edges {
        node {
          id
          category
          project {
            id
            name
            owningPerson
            owningOrganization
            associatedPerson {
              avatarUrl
            }
            organization {
              avatarUrl
            }
          }
        }
      }
    }
  }
`

export function useFilteredBookmarksQuery(
  options: Omit<Urql.UseQueryArgs<FilteredBookmarksQueryVariables>, 'query'>
) {
  return Urql.useQuery<FilteredBookmarksQuery, FilteredBookmarksQueryVariables>({
    query: FilteredBookmarksDocument,
    ...options
  })
}
export const ProjectDetailsDocument = gql`
  query ProjectDetails($id: UUID) {
    projectCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          name
          about
          eli5
          starCount
          issueCount
          forkCount
          pullRequestCount
          contributorCount
          languages
          githubUrl
          websiteUrl
          starHistory
          owningPerson
          owningOrganization
          hackernewsSentiment
          hackernewsStories
          relatedTwitterPosts
          forkHistory
          categories
          associatedPerson {
            id
            name
            login
            avatarUrl
            email
            githubUrl
            twitterUsername
            repositoryCount
            websiteUrl
          }
          organization {
            id
            login
            avatarUrl
            email
            githubUrl
            twitterUsername
            repositoryCount
            websiteUrl
          }
          issuesPerContributor
          forksPerContributor
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
export const ProjectIdsDocument = gql`
  query ProjectIds($orderBy: ProjectOrderBy!, $filter: ProjectFilter!) {
    projectCollection(filter: $filter, orderBy: [$orderBy]) {
      edges {
        node {
          id
        }
      }
    }
  }
`

export function useProjectIdsQuery(
  options: Omit<Urql.UseQueryArgs<ProjectIdsQueryVariables>, 'query'>
) {
  return Urql.useQuery<ProjectIdsQuery, ProjectIdsQueryVariables>({
    query: ProjectIdsDocument,
    ...options
  })
}
export const TrendingProjectsDocument = gql`
  query TrendingProjects(
    $orderBy: ProjectOrderBy!
    $filter: ProjectFilter!
    $first: Int
    $last: Int
    $after: Cursor
    $before: Cursor
  ) {
    projectCollection(
      filter: $filter
      orderBy: [$orderBy]
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      edges {
        node {
          id
          name
          starCount
          issueCount
          forkCount
          pullRequestCount
          contributorCount
          githubUrl
          websiteUrl
          starHistory
          forkHistory
          owningPerson
          owningOrganization
          associatedPerson {
            id
            name
            login
            email
            avatarUrl
          }
          organization {
            id
            login
            avatarUrl
          }
          isTrendingDaily
          isTrendingWeekly
          isTrendingMonthly
          issuesPerContributor
          forksPerContributor
        }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }
`

export function useTrendingProjectsQuery(
  options: Omit<Urql.UseQueryArgs<TrendingProjectsQueryVariables>, 'query'>
) {
  return Urql.useQuery<TrendingProjectsQuery, TrendingProjectsQueryVariables>({
    query: TrendingProjectsDocument,
    ...options
  })
}
