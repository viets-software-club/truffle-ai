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

export type AlgoHnComment = Node & {
  __typename?: 'AlgoHnComment'
  algoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagConnection
  algoHnCommentId: Scalars['BigInt']
  algoHnCommentObjectId: Scalars['BigInt']
  algoHnQuery: AlgoHnQuery
  algoHnQueryId: Scalars['BigInt']
  author: Scalars['String']
  commentText: Scalars['String']
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  storyId: Scalars['BigInt']
  storyTitle: Scalars['String']
  storyUrl?: Maybe<Scalars['String']>
  updatedAt: Scalars['Datetime']
}

export type AlgoHnCommentAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>
}

export type AlgoHnCommentAndAlgoHnTag = Node & {
  __typename?: 'AlgoHnCommentAndAlgoHnTag'
  algoHnComment: AlgoHnComment
  algoHnCommentId: Scalars['BigInt']
  algoHnTag: AlgoHnTag
  algoHnTagId: Scalars['BigInt']
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type AlgoHnCommentAndAlgoHnTagConnection = {
  __typename?: 'AlgoHnCommentAndAlgoHnTagConnection'
  edges: Array<AlgoHnCommentAndAlgoHnTagEdge>
  pageInfo: PageInfo
}

export type AlgoHnCommentAndAlgoHnTagDeleteResponse = {
  __typename?: 'AlgoHnCommentAndAlgoHnTagDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnCommentAndAlgoHnTag>
}

export type AlgoHnCommentAndAlgoHnTagEdge = {
  __typename?: 'AlgoHnCommentAndAlgoHnTagEdge'
  cursor: Scalars['String']
  node: AlgoHnCommentAndAlgoHnTag
}

export type AlgoHnCommentAndAlgoHnTagFilter = {
  algoHnCommentId?: InputMaybe<BigIntFilter>
  algoHnTagId?: InputMaybe<BigIntFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagFilter>>
}

export type AlgoHnCommentAndAlgoHnTagInsertInput = {
  algoHnCommentId?: InputMaybe<Scalars['BigInt']>
  algoHnTagId?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
}

export type AlgoHnCommentAndAlgoHnTagInsertResponse = {
  __typename?: 'AlgoHnCommentAndAlgoHnTagInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnCommentAndAlgoHnTag>
}

export type AlgoHnCommentAndAlgoHnTagOrderBy = {
  algoHnCommentId?: InputMaybe<OrderByDirection>
  algoHnTagId?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnCommentAndAlgoHnTagUpdateInput = {
  algoHnCommentId?: InputMaybe<Scalars['BigInt']>
  algoHnTagId?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
}

export type AlgoHnCommentAndAlgoHnTagUpdateResponse = {
  __typename?: 'AlgoHnCommentAndAlgoHnTagUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnCommentAndAlgoHnTag>
}

export type AlgoHnCommentConnection = {
  __typename?: 'AlgoHnCommentConnection'
  edges: Array<AlgoHnCommentEdge>
  pageInfo: PageInfo
}

export type AlgoHnCommentDeleteResponse = {
  __typename?: 'AlgoHnCommentDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnComment>
}

export type AlgoHnCommentEdge = {
  __typename?: 'AlgoHnCommentEdge'
  cursor: Scalars['String']
  node: AlgoHnComment
}

export type AlgoHnCommentFilter = {
  algoHnCommentId?: InputMaybe<BigIntFilter>
  algoHnCommentObjectId?: InputMaybe<BigIntFilter>
  algoHnQueryId?: InputMaybe<BigIntFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnCommentFilter>>
  author?: InputMaybe<StringFilter>
  commentText?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<AlgoHnCommentFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnCommentFilter>>
  storyId?: InputMaybe<BigIntFilter>
  storyTitle?: InputMaybe<StringFilter>
  storyUrl?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DatetimeFilter>
}

export type AlgoHnCommentInsertInput = {
  algoHnCommentObjectId?: InputMaybe<Scalars['BigInt']>
  algoHnQueryId?: InputMaybe<Scalars['BigInt']>
  author?: InputMaybe<Scalars['String']>
  commentText?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  storyId?: InputMaybe<Scalars['BigInt']>
  storyTitle?: InputMaybe<Scalars['String']>
  storyUrl?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
}

export type AlgoHnCommentInsertResponse = {
  __typename?: 'AlgoHnCommentInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnComment>
}

export type AlgoHnCommentOrderBy = {
  algoHnCommentId?: InputMaybe<OrderByDirection>
  algoHnCommentObjectId?: InputMaybe<OrderByDirection>
  algoHnQueryId?: InputMaybe<OrderByDirection>
  author?: InputMaybe<OrderByDirection>
  commentText?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  storyId?: InputMaybe<OrderByDirection>
  storyTitle?: InputMaybe<OrderByDirection>
  storyUrl?: InputMaybe<OrderByDirection>
  updatedAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnCommentUpdateInput = {
  algoHnCommentObjectId?: InputMaybe<Scalars['BigInt']>
  algoHnQueryId?: InputMaybe<Scalars['BigInt']>
  author?: InputMaybe<Scalars['String']>
  commentText?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  storyId?: InputMaybe<Scalars['BigInt']>
  storyTitle?: InputMaybe<Scalars['String']>
  storyUrl?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
}

export type AlgoHnCommentUpdateResponse = {
  __typename?: 'AlgoHnCommentUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnComment>
}

export type AlgoHnQuery = Node & {
  __typename?: 'AlgoHnQuery'
  algoHnCommentCollection: AlgoHnCommentConnection
  algoHnQueryId: Scalars['BigInt']
  algoHnStoryCollection: AlgoHnStoryConnection
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryConnection
  query: Scalars['String']
}

export type AlgoHnQueryAlgoHnCommentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnCommentFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnCommentOrderBy>>
}

export type AlgoHnQueryAlgoHnStoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnStoryFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnStoryOrderBy>>
}

export type AlgoHnQueryProjRepoAndAlgoHnQueryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndAlgoHnQueryOrderBy>>
}

export type AlgoHnQueryConnection = {
  __typename?: 'AlgoHnQueryConnection'
  edges: Array<AlgoHnQueryEdge>
  pageInfo: PageInfo
}

export type AlgoHnQueryDeleteResponse = {
  __typename?: 'AlgoHnQueryDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnQuery>
}

export type AlgoHnQueryEdge = {
  __typename?: 'AlgoHnQueryEdge'
  cursor: Scalars['String']
  node: AlgoHnQuery
}

export type AlgoHnQueryFilter = {
  algoHnQueryId?: InputMaybe<BigIntFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnQueryFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<AlgoHnQueryFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnQueryFilter>>
  query?: InputMaybe<StringFilter>
}

export type AlgoHnQueryInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  query?: InputMaybe<Scalars['String']>
}

export type AlgoHnQueryInsertResponse = {
  __typename?: 'AlgoHnQueryInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnQuery>
}

export type AlgoHnQueryOrderBy = {
  algoHnQueryId?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  query?: InputMaybe<OrderByDirection>
}

export type AlgoHnQueryUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  query?: InputMaybe<Scalars['String']>
}

export type AlgoHnQueryUpdateResponse = {
  __typename?: 'AlgoHnQueryUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnQuery>
}

export type AlgoHnStory = Node & {
  __typename?: 'AlgoHnStory'
  algoHnQuery: AlgoHnQuery
  algoHnQueryId: Scalars['BigInt']
  algoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagConnection
  algoHnStoryId: Scalars['BigInt']
  algoHnStoryObjectId: Scalars['BigInt']
  algoHnStoryUrl?: Maybe<Scalars['String']>
  author: Scalars['String']
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  points: Scalars['BigInt']
  title: Scalars['String']
  updatedAt: Scalars['Datetime']
}

export type AlgoHnStoryAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagOrderBy>>
}

export type AlgoHnStoryAndAlgoHnTag = Node & {
  __typename?: 'AlgoHnStoryAndAlgoHnTag'
  algoHnStory: AlgoHnStory
  algoHnStoryId: Scalars['BigInt']
  algoHnTag: AlgoHnTag
  algoHnTagId: Scalars['BigInt']
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type AlgoHnStoryAndAlgoHnTagConnection = {
  __typename?: 'AlgoHnStoryAndAlgoHnTagConnection'
  edges: Array<AlgoHnStoryAndAlgoHnTagEdge>
  pageInfo: PageInfo
}

export type AlgoHnStoryAndAlgoHnTagDeleteResponse = {
  __typename?: 'AlgoHnStoryAndAlgoHnTagDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStoryAndAlgoHnTag>
}

export type AlgoHnStoryAndAlgoHnTagEdge = {
  __typename?: 'AlgoHnStoryAndAlgoHnTagEdge'
  cursor: Scalars['String']
  node: AlgoHnStoryAndAlgoHnTag
}

export type AlgoHnStoryAndAlgoHnTagFilter = {
  algoHnStoryId?: InputMaybe<BigIntFilter>
  algoHnTagId?: InputMaybe<BigIntFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagFilter>>
}

export type AlgoHnStoryAndAlgoHnTagInsertInput = {
  algoHnStoryId?: InputMaybe<Scalars['BigInt']>
  algoHnTagId?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
}

export type AlgoHnStoryAndAlgoHnTagInsertResponse = {
  __typename?: 'AlgoHnStoryAndAlgoHnTagInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStoryAndAlgoHnTag>
}

export type AlgoHnStoryAndAlgoHnTagOrderBy = {
  algoHnStoryId?: InputMaybe<OrderByDirection>
  algoHnTagId?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnStoryAndAlgoHnTagUpdateInput = {
  algoHnStoryId?: InputMaybe<Scalars['BigInt']>
  algoHnTagId?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
}

export type AlgoHnStoryAndAlgoHnTagUpdateResponse = {
  __typename?: 'AlgoHnStoryAndAlgoHnTagUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStoryAndAlgoHnTag>
}

export type AlgoHnStoryConnection = {
  __typename?: 'AlgoHnStoryConnection'
  edges: Array<AlgoHnStoryEdge>
  pageInfo: PageInfo
}

export type AlgoHnStoryDeleteResponse = {
  __typename?: 'AlgoHnStoryDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStory>
}

export type AlgoHnStoryEdge = {
  __typename?: 'AlgoHnStoryEdge'
  cursor: Scalars['String']
  node: AlgoHnStory
}

export type AlgoHnStoryFilter = {
  algoHnQueryId?: InputMaybe<BigIntFilter>
  algoHnStoryId?: InputMaybe<BigIntFilter>
  algoHnStoryObjectId?: InputMaybe<BigIntFilter>
  algoHnStoryUrl?: InputMaybe<StringFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnStoryFilter>>
  author?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<AlgoHnStoryFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnStoryFilter>>
  points?: InputMaybe<BigIntFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DatetimeFilter>
}

export type AlgoHnStoryInsertInput = {
  algoHnQueryId?: InputMaybe<Scalars['BigInt']>
  algoHnStoryObjectId?: InputMaybe<Scalars['BigInt']>
  algoHnStoryUrl?: InputMaybe<Scalars['String']>
  author?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  points?: InputMaybe<Scalars['BigInt']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
}

export type AlgoHnStoryInsertResponse = {
  __typename?: 'AlgoHnStoryInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStory>
}

export type AlgoHnStoryOrderBy = {
  algoHnQueryId?: InputMaybe<OrderByDirection>
  algoHnStoryId?: InputMaybe<OrderByDirection>
  algoHnStoryObjectId?: InputMaybe<OrderByDirection>
  algoHnStoryUrl?: InputMaybe<OrderByDirection>
  author?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  points?: InputMaybe<OrderByDirection>
  title?: InputMaybe<OrderByDirection>
  updatedAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnStoryUpdateInput = {
  algoHnQueryId?: InputMaybe<Scalars['BigInt']>
  algoHnStoryObjectId?: InputMaybe<Scalars['BigInt']>
  algoHnStoryUrl?: InputMaybe<Scalars['String']>
  author?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  points?: InputMaybe<Scalars['BigInt']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
}

export type AlgoHnStoryUpdateResponse = {
  __typename?: 'AlgoHnStoryUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStory>
}

export type AlgoHnTag = Node & {
  __typename?: 'AlgoHnTag'
  algoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagConnection
  algoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagConnection
  algoHnTagId: Scalars['BigInt']
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  title: Scalars['String']
}

export type AlgoHnTagAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>
}

export type AlgoHnTagAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagOrderBy>>
}

export type AlgoHnTagConnection = {
  __typename?: 'AlgoHnTagConnection'
  edges: Array<AlgoHnTagEdge>
  pageInfo: PageInfo
}

export type AlgoHnTagDeleteResponse = {
  __typename?: 'AlgoHnTagDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnTag>
}

export type AlgoHnTagEdge = {
  __typename?: 'AlgoHnTagEdge'
  cursor: Scalars['String']
  node: AlgoHnTag
}

export type AlgoHnTagFilter = {
  algoHnTagId?: InputMaybe<BigIntFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnTagFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<AlgoHnTagFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnTagFilter>>
  title?: InputMaybe<StringFilter>
}

export type AlgoHnTagInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  title?: InputMaybe<Scalars['String']>
}

export type AlgoHnTagInsertResponse = {
  __typename?: 'AlgoHnTagInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnTag>
}

export type AlgoHnTagOrderBy = {
  algoHnTagId?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  title?: InputMaybe<OrderByDirection>
}

export type AlgoHnTagUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  title?: InputMaybe<Scalars['String']>
}

export type AlgoHnTagUpdateResponse = {
  __typename?: 'AlgoHnTagUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnTag>
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

export type GthbForkHist = Node & {
  __typename?: 'GthbForkHist'
  amount: Scalars['BigInt']
  createdAt: Scalars['Datetime']
  gthbForkHistDate: Scalars['Datetime']
  gthbForkHistId: Scalars['BigInt']
  gthbRepo: GthbRepo
  gthbRepoId: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type GthbForkHistConnection = {
  __typename?: 'GthbForkHistConnection'
  edges: Array<GthbForkHistEdge>
  pageInfo: PageInfo
}

export type GthbForkHistDeleteResponse = {
  __typename?: 'GthbForkHistDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbForkHist>
}

export type GthbForkHistEdge = {
  __typename?: 'GthbForkHistEdge'
  cursor: Scalars['String']
  node: GthbForkHist
}

export type GthbForkHistFilter = {
  amount?: InputMaybe<BigIntFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbForkHistFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  gthbForkHistDate?: InputMaybe<DatetimeFilter>
  gthbForkHistId?: InputMaybe<BigIntFilter>
  gthbRepoId?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbForkHistFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbForkHistFilter>>
}

export type GthbForkHistInsertInput = {
  amount?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbForkHistDate?: InputMaybe<Scalars['Datetime']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
}

export type GthbForkHistInsertResponse = {
  __typename?: 'GthbForkHistInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbForkHist>
}

export type GthbForkHistOrderBy = {
  amount?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  gthbForkHistDate?: InputMaybe<OrderByDirection>
  gthbForkHistId?: InputMaybe<OrderByDirection>
  gthbRepoId?: InputMaybe<OrderByDirection>
}

export type GthbForkHistUpdateInput = {
  amount?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbForkHistDate?: InputMaybe<Scalars['Datetime']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
}

export type GthbForkHistUpdateResponse = {
  __typename?: 'GthbForkHistUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbForkHist>
}

export type GthbIssueHist = Node & {
  __typename?: 'GthbIssueHist'
  amount: Scalars['BigInt']
  createdAt: Scalars['Datetime']
  gthbIssueHistDate: Scalars['Datetime']
  gthbIssueHistId: Scalars['BigInt']
  gthbRepo: GthbRepo
  gthbRepoId: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type GthbIssueHistConnection = {
  __typename?: 'GthbIssueHistConnection'
  edges: Array<GthbIssueHistEdge>
  pageInfo: PageInfo
}

export type GthbIssueHistDeleteResponse = {
  __typename?: 'GthbIssueHistDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbIssueHist>
}

export type GthbIssueHistEdge = {
  __typename?: 'GthbIssueHistEdge'
  cursor: Scalars['String']
  node: GthbIssueHist
}

export type GthbIssueHistFilter = {
  amount?: InputMaybe<BigIntFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbIssueHistFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  gthbIssueHistDate?: InputMaybe<DatetimeFilter>
  gthbIssueHistId?: InputMaybe<BigIntFilter>
  gthbRepoId?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbIssueHistFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbIssueHistFilter>>
}

export type GthbIssueHistInsertInput = {
  amount?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbIssueHistDate?: InputMaybe<Scalars['Datetime']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
}

export type GthbIssueHistInsertResponse = {
  __typename?: 'GthbIssueHistInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbIssueHist>
}

export type GthbIssueHistOrderBy = {
  amount?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  gthbIssueHistDate?: InputMaybe<OrderByDirection>
  gthbIssueHistId?: InputMaybe<OrderByDirection>
  gthbRepoId?: InputMaybe<OrderByDirection>
}

export type GthbIssueHistUpdateInput = {
  amount?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbIssueHistDate?: InputMaybe<Scalars['Datetime']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
}

export type GthbIssueHistUpdateResponse = {
  __typename?: 'GthbIssueHistUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbIssueHist>
}

export type GthbLang = Node & {
  __typename?: 'GthbLang'
  color: Scalars['String']
  createdAt: Scalars['Datetime']
  gthbLangId: Scalars['BigInt']
  gthbLangName: Scalars['String']
  gthbRepoAndGthbLangCollection: GthbRepoAndGthbLangConnection
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type GthbLangGthbRepoAndGthbLangCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoAndGthbLangFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoAndGthbLangOrderBy>>
}

export type GthbLangConnection = {
  __typename?: 'GthbLangConnection'
  edges: Array<GthbLangEdge>
  pageInfo: PageInfo
}

export type GthbLangDeleteResponse = {
  __typename?: 'GthbLangDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbLang>
}

export type GthbLangEdge = {
  __typename?: 'GthbLangEdge'
  cursor: Scalars['String']
  node: GthbLang
}

export type GthbLangFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbLangFilter>>
  color?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  gthbLangId?: InputMaybe<BigIntFilter>
  gthbLangName?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbLangFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbLangFilter>>
}

export type GthbLangInsertInput = {
  color?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbLangName?: InputMaybe<Scalars['String']>
}

export type GthbLangInsertResponse = {
  __typename?: 'GthbLangInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbLang>
}

export type GthbLangOrderBy = {
  color?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  gthbLangId?: InputMaybe<OrderByDirection>
  gthbLangName?: InputMaybe<OrderByDirection>
}

export type GthbLangUpdateInput = {
  color?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbLangName?: InputMaybe<Scalars['String']>
}

export type GthbLangUpdateResponse = {
  __typename?: 'GthbLangUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbLang>
}

export type GthbOrg = Node & {
  __typename?: 'GthbOrg'
  createdAt: Scalars['Datetime']
  descriptionHtml?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  gthbOrg: GthbOwner
  gthbOrgDescription?: Maybe<Scalars['String']>
  gthbOrgId: Scalars['BigInt']
  gthbOrgName?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  twitterUsername?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
}

export type GthbOrgConnection = {
  __typename?: 'GthbOrgConnection'
  edges: Array<GthbOrgEdge>
  pageInfo: PageInfo
}

export type GthbOrgDeleteResponse = {
  __typename?: 'GthbOrgDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbOrg>
}

export type GthbOrgEdge = {
  __typename?: 'GthbOrgEdge'
  cursor: Scalars['String']
  node: GthbOrg
}

export type GthbOrgFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbOrgFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  descriptionHtml?: InputMaybe<StringFilter>
  email?: InputMaybe<StringFilter>
  gthbOrgDescription?: InputMaybe<StringFilter>
  gthbOrgId?: InputMaybe<BigIntFilter>
  gthbOrgName?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbOrgFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbOrgFilter>>
  twitterUsername?: InputMaybe<StringFilter>
  websiteUrl?: InputMaybe<StringFilter>
}

export type GthbOrgInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  descriptionHtml?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  gthbOrgDescription?: InputMaybe<Scalars['String']>
  gthbOrgId?: InputMaybe<Scalars['BigInt']>
  gthbOrgName?: InputMaybe<Scalars['String']>
  twitterUsername?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type GthbOrgInsertResponse = {
  __typename?: 'GthbOrgInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbOrg>
}

export type GthbOrgOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  descriptionHtml?: InputMaybe<OrderByDirection>
  email?: InputMaybe<OrderByDirection>
  gthbOrgDescription?: InputMaybe<OrderByDirection>
  gthbOrgId?: InputMaybe<OrderByDirection>
  gthbOrgName?: InputMaybe<OrderByDirection>
  twitterUsername?: InputMaybe<OrderByDirection>
  websiteUrl?: InputMaybe<OrderByDirection>
}

export type GthbOrgUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  descriptionHtml?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  gthbOrgDescription?: InputMaybe<Scalars['String']>
  gthbOrgId?: InputMaybe<Scalars['BigInt']>
  gthbOrgName?: InputMaybe<Scalars['String']>
  twitterUsername?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type GthbOrgUpdateResponse = {
  __typename?: 'GthbOrgUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbOrg>
}

export type GthbOwner = Node & {
  __typename?: 'GthbOwner'
  avatarUrl: Scalars['String']
  createdAt: Scalars['Datetime']
  gthbOwner?: Maybe<GthbOrg>
  gthbOwnerId: Scalars['BigInt']
  gthbOwnerLogin: Scalars['String']
  gthbOwnerType: Scalars['Opaque']
  gthbOwnerUrl: Scalars['String']
  gthbRepoCollection: GthbRepoConnection
  gthbRepoContrCollection: GthbRepoContrConnection
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  repositoriesTotalCount: Scalars['BigInt']
}

export type GthbOwnerGthbRepoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoOrderBy>>
}

export type GthbOwnerGthbRepoContrCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoContrFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoContrOrderBy>>
}

export type GthbOwnerConnection = {
  __typename?: 'GthbOwnerConnection'
  edges: Array<GthbOwnerEdge>
  pageInfo: PageInfo
}

export type GthbOwnerDeleteResponse = {
  __typename?: 'GthbOwnerDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbOwner>
}

export type GthbOwnerEdge = {
  __typename?: 'GthbOwnerEdge'
  cursor: Scalars['String']
  node: GthbOwner
}

export type GthbOwnerFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbOwnerFilter>>
  avatarUrl?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  gthbOwnerId?: InputMaybe<BigIntFilter>
  gthbOwnerLogin?: InputMaybe<StringFilter>
  gthbOwnerType?: InputMaybe<OpaqueFilter>
  gthbOwnerUrl?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbOwnerFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbOwnerFilter>>
  repositoriesTotalCount?: InputMaybe<BigIntFilter>
}

export type GthbOwnerInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbOwnerLogin?: InputMaybe<Scalars['String']>
  gthbOwnerType?: InputMaybe<Scalars['Opaque']>
  gthbOwnerUrl?: InputMaybe<Scalars['String']>
  repositoriesTotalCount?: InputMaybe<Scalars['BigInt']>
}

export type GthbOwnerInsertResponse = {
  __typename?: 'GthbOwnerInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbOwner>
}

export type GthbOwnerOrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  gthbOwnerId?: InputMaybe<OrderByDirection>
  gthbOwnerLogin?: InputMaybe<OrderByDirection>
  gthbOwnerType?: InputMaybe<OrderByDirection>
  gthbOwnerUrl?: InputMaybe<OrderByDirection>
  repositoriesTotalCount?: InputMaybe<OrderByDirection>
}

export type GthbOwnerUpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbOwnerLogin?: InputMaybe<Scalars['String']>
  gthbOwnerType?: InputMaybe<Scalars['Opaque']>
  gthbOwnerUrl?: InputMaybe<Scalars['String']>
  repositoriesTotalCount?: InputMaybe<Scalars['BigInt']>
}

export type GthbOwnerUpdateResponse = {
  __typename?: 'GthbOwnerUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbOwner>
}

export type GthbRepo = Node & {
  __typename?: 'GthbRepo'
  createdAt: Scalars['Datetime']
  forkCount: Scalars['BigInt']
  gthbForkHistCollection: GthbForkHistConnection
  gthbIssueHistCollection: GthbIssueHistConnection
  gthbOwner: GthbOwner
  gthbOwnerId: Scalars['BigInt']
  gthbRepo: ProjRepo
  gthbRepoAndGthbLangCollection: GthbRepoAndGthbLangConnection
  gthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicConnection
  gthbRepoContrCollection: GthbRepoContrConnection
  gthbRepoDescription?: Maybe<Scalars['String']>
  gthbRepoId: Scalars['BigInt']
  gthbRepoName: Scalars['String']
  gthbRepoUrl: Scalars['String']
  gthbStarHistCollection: GthbStarHistConnection
  gthbTrendingCollection: GthbTrendingConnection
  homepageUrl?: Maybe<Scalars['String']>
  isInOrganization: Scalars['Boolean']
  issuesTotalCount: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  pullRequestsTotalCount: Scalars['BigInt']
  stargazerCount: Scalars['BigInt']
}

export type GthbRepoGthbForkHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbForkHistFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbForkHistOrderBy>>
}

export type GthbRepoGthbIssueHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbIssueHistFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbIssueHistOrderBy>>
}

export type GthbRepoGthbRepoAndGthbLangCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoAndGthbLangFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoAndGthbLangOrderBy>>
}

export type GthbRepoGthbRepoAndGthbRepoTopicCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoAndGthbRepoTopicOrderBy>>
}

export type GthbRepoGthbRepoContrCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoContrFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoContrOrderBy>>
}

export type GthbRepoGthbStarHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbStarHistFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbStarHistOrderBy>>
}

export type GthbRepoGthbTrendingCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbTrendingFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbTrendingOrderBy>>
}

export type GthbRepoAndGthbLang = Node & {
  __typename?: 'GthbRepoAndGthbLang'
  createdAt: Scalars['Datetime']
  gthbLang: GthbLang
  gthbLangId: Scalars['BigInt']
  gthbRepo: GthbRepo
  gthbRepoId: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type GthbRepoAndGthbLangConnection = {
  __typename?: 'GthbRepoAndGthbLangConnection'
  edges: Array<GthbRepoAndGthbLangEdge>
  pageInfo: PageInfo
}

export type GthbRepoAndGthbLangDeleteResponse = {
  __typename?: 'GthbRepoAndGthbLangDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbLang>
}

export type GthbRepoAndGthbLangEdge = {
  __typename?: 'GthbRepoAndGthbLangEdge'
  cursor: Scalars['String']
  node: GthbRepoAndGthbLang
}

export type GthbRepoAndGthbLangFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbRepoAndGthbLangFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  gthbLangId?: InputMaybe<BigIntFilter>
  gthbRepoId?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbRepoAndGthbLangFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbRepoAndGthbLangFilter>>
}

export type GthbRepoAndGthbLangInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbLangId?: InputMaybe<Scalars['BigInt']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
}

export type GthbRepoAndGthbLangInsertResponse = {
  __typename?: 'GthbRepoAndGthbLangInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbLang>
}

export type GthbRepoAndGthbLangOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  gthbLangId?: InputMaybe<OrderByDirection>
  gthbRepoId?: InputMaybe<OrderByDirection>
}

export type GthbRepoAndGthbLangUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbLangId?: InputMaybe<Scalars['BigInt']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
}

export type GthbRepoAndGthbLangUpdateResponse = {
  __typename?: 'GthbRepoAndGthbLangUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbLang>
}

export type GthbRepoAndGthbRepoTopic = Node & {
  __typename?: 'GthbRepoAndGthbRepoTopic'
  createdAt: Scalars['Datetime']
  gthbRepo: GthbRepo
  gthbRepoId: Scalars['BigInt']
  gthbRepoTopic: GthbRepoTopic
  gthbRepoTopicId: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type GthbRepoAndGthbRepoTopicConnection = {
  __typename?: 'GthbRepoAndGthbRepoTopicConnection'
  edges: Array<GthbRepoAndGthbRepoTopicEdge>
  pageInfo: PageInfo
}

export type GthbRepoAndGthbRepoTopicDeleteResponse = {
  __typename?: 'GthbRepoAndGthbRepoTopicDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbRepoTopic>
}

export type GthbRepoAndGthbRepoTopicEdge = {
  __typename?: 'GthbRepoAndGthbRepoTopicEdge'
  cursor: Scalars['String']
  node: GthbRepoAndGthbRepoTopic
}

export type GthbRepoAndGthbRepoTopicFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbRepoAndGthbRepoTopicFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  gthbRepoId?: InputMaybe<BigIntFilter>
  gthbRepoTopicId?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbRepoAndGthbRepoTopicFilter>>
}

export type GthbRepoAndGthbRepoTopicInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
  gthbRepoTopicId?: InputMaybe<Scalars['BigInt']>
}

export type GthbRepoAndGthbRepoTopicInsertResponse = {
  __typename?: 'GthbRepoAndGthbRepoTopicInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbRepoTopic>
}

export type GthbRepoAndGthbRepoTopicOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  gthbRepoId?: InputMaybe<OrderByDirection>
  gthbRepoTopicId?: InputMaybe<OrderByDirection>
}

export type GthbRepoAndGthbRepoTopicUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
  gthbRepoTopicId?: InputMaybe<Scalars['BigInt']>
}

export type GthbRepoAndGthbRepoTopicUpdateResponse = {
  __typename?: 'GthbRepoAndGthbRepoTopicUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbRepoTopic>
}

export type GthbRepoConnection = {
  __typename?: 'GthbRepoConnection'
  edges: Array<GthbRepoEdge>
  pageInfo: PageInfo
}

export type GthbRepoContr = Node & {
  __typename?: 'GthbRepoContr'
  contributions: Scalars['BigInt']
  createdAt: Scalars['Datetime']
  gthbOwner: GthbOwner
  gthbOwnerId: Scalars['BigInt']
  gthbRepo: GthbRepo
  gthbRepoId: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type GthbRepoContrConnection = {
  __typename?: 'GthbRepoContrConnection'
  edges: Array<GthbRepoContrEdge>
  pageInfo: PageInfo
}

export type GthbRepoContrDeleteResponse = {
  __typename?: 'GthbRepoContrDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoContr>
}

export type GthbRepoContrEdge = {
  __typename?: 'GthbRepoContrEdge'
  cursor: Scalars['String']
  node: GthbRepoContr
}

export type GthbRepoContrFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbRepoContrFilter>>
  contributions?: InputMaybe<BigIntFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  gthbOwnerId?: InputMaybe<BigIntFilter>
  gthbRepoId?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbRepoContrFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbRepoContrFilter>>
}

export type GthbRepoContrInsertInput = {
  contributions?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbOwnerId?: InputMaybe<Scalars['BigInt']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
}

export type GthbRepoContrInsertResponse = {
  __typename?: 'GthbRepoContrInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoContr>
}

export type GthbRepoContrOrderBy = {
  contributions?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  gthbOwnerId?: InputMaybe<OrderByDirection>
  gthbRepoId?: InputMaybe<OrderByDirection>
}

export type GthbRepoContrUpdateInput = {
  contributions?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbOwnerId?: InputMaybe<Scalars['BigInt']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
}

export type GthbRepoContrUpdateResponse = {
  __typename?: 'GthbRepoContrUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoContr>
}

export type GthbRepoDeleteResponse = {
  __typename?: 'GthbRepoDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepo>
}

export type GthbRepoEdge = {
  __typename?: 'GthbRepoEdge'
  cursor: Scalars['String']
  node: GthbRepo
}

export type GthbRepoFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbRepoFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  forkCount?: InputMaybe<BigIntFilter>
  gthbOwnerId?: InputMaybe<BigIntFilter>
  gthbRepoDescription?: InputMaybe<StringFilter>
  gthbRepoId?: InputMaybe<BigIntFilter>
  gthbRepoName?: InputMaybe<StringFilter>
  gthbRepoUrl?: InputMaybe<StringFilter>
  homepageUrl?: InputMaybe<StringFilter>
  isInOrganization?: InputMaybe<BooleanFilter>
  issuesTotalCount?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbRepoFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbRepoFilter>>
  pullRequestsTotalCount?: InputMaybe<BigIntFilter>
  stargazerCount?: InputMaybe<BigIntFilter>
}

export type GthbRepoInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  forkCount?: InputMaybe<Scalars['BigInt']>
  gthbOwnerId?: InputMaybe<Scalars['BigInt']>
  gthbRepoDescription?: InputMaybe<Scalars['String']>
  gthbRepoName?: InputMaybe<Scalars['String']>
  gthbRepoUrl?: InputMaybe<Scalars['String']>
  homepageUrl?: InputMaybe<Scalars['String']>
  isInOrganization?: InputMaybe<Scalars['Boolean']>
  issuesTotalCount?: InputMaybe<Scalars['BigInt']>
  pullRequestsTotalCount?: InputMaybe<Scalars['BigInt']>
  stargazerCount?: InputMaybe<Scalars['BigInt']>
}

export type GthbRepoInsertResponse = {
  __typename?: 'GthbRepoInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepo>
}

export type GthbRepoOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  forkCount?: InputMaybe<OrderByDirection>
  gthbOwnerId?: InputMaybe<OrderByDirection>
  gthbRepoDescription?: InputMaybe<OrderByDirection>
  gthbRepoId?: InputMaybe<OrderByDirection>
  gthbRepoName?: InputMaybe<OrderByDirection>
  gthbRepoUrl?: InputMaybe<OrderByDirection>
  homepageUrl?: InputMaybe<OrderByDirection>
  isInOrganization?: InputMaybe<OrderByDirection>
  issuesTotalCount?: InputMaybe<OrderByDirection>
  pullRequestsTotalCount?: InputMaybe<OrderByDirection>
  stargazerCount?: InputMaybe<OrderByDirection>
}

export type GthbRepoTopic = Node & {
  __typename?: 'GthbRepoTopic'
  createdAt: Scalars['Datetime']
  gthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicConnection
  gthbRepoTopicId: Scalars['BigInt']
  gthbRepoTopicName: Scalars['String']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  stargazerCount: Scalars['BigInt']
}

export type GthbRepoTopicGthbRepoAndGthbRepoTopicCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoAndGthbRepoTopicOrderBy>>
}

export type GthbRepoTopicConnection = {
  __typename?: 'GthbRepoTopicConnection'
  edges: Array<GthbRepoTopicEdge>
  pageInfo: PageInfo
}

export type GthbRepoTopicDeleteResponse = {
  __typename?: 'GthbRepoTopicDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoTopic>
}

export type GthbRepoTopicEdge = {
  __typename?: 'GthbRepoTopicEdge'
  cursor: Scalars['String']
  node: GthbRepoTopic
}

export type GthbRepoTopicFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbRepoTopicFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  gthbRepoTopicId?: InputMaybe<BigIntFilter>
  gthbRepoTopicName?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbRepoTopicFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbRepoTopicFilter>>
  stargazerCount?: InputMaybe<BigIntFilter>
}

export type GthbRepoTopicInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbRepoTopicName?: InputMaybe<Scalars['String']>
  stargazerCount?: InputMaybe<Scalars['BigInt']>
}

export type GthbRepoTopicInsertResponse = {
  __typename?: 'GthbRepoTopicInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoTopic>
}

export type GthbRepoTopicOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  gthbRepoTopicId?: InputMaybe<OrderByDirection>
  gthbRepoTopicName?: InputMaybe<OrderByDirection>
  stargazerCount?: InputMaybe<OrderByDirection>
}

export type GthbRepoTopicUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbRepoTopicName?: InputMaybe<Scalars['String']>
  stargazerCount?: InputMaybe<Scalars['BigInt']>
}

export type GthbRepoTopicUpdateResponse = {
  __typename?: 'GthbRepoTopicUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoTopic>
}

export type GthbRepoUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  forkCount?: InputMaybe<Scalars['BigInt']>
  gthbOwnerId?: InputMaybe<Scalars['BigInt']>
  gthbRepoDescription?: InputMaybe<Scalars['String']>
  gthbRepoName?: InputMaybe<Scalars['String']>
  gthbRepoUrl?: InputMaybe<Scalars['String']>
  homepageUrl?: InputMaybe<Scalars['String']>
  isInOrganization?: InputMaybe<Scalars['Boolean']>
  issuesTotalCount?: InputMaybe<Scalars['BigInt']>
  pullRequestsTotalCount?: InputMaybe<Scalars['BigInt']>
  stargazerCount?: InputMaybe<Scalars['BigInt']>
}

export type GthbRepoUpdateResponse = {
  __typename?: 'GthbRepoUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbRepo>
}

export type GthbStarHist = Node & {
  __typename?: 'GthbStarHist'
  amount: Scalars['BigInt']
  createdAt: Scalars['Datetime']
  gthbRepo: GthbRepo
  gthbRepoId: Scalars['BigInt']
  gthbStarHistDate: Scalars['Datetime']
  gthbStarHistId: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type GthbStarHistConnection = {
  __typename?: 'GthbStarHistConnection'
  edges: Array<GthbStarHistEdge>
  pageInfo: PageInfo
}

export type GthbStarHistDeleteResponse = {
  __typename?: 'GthbStarHistDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbStarHist>
}

export type GthbStarHistEdge = {
  __typename?: 'GthbStarHistEdge'
  cursor: Scalars['String']
  node: GthbStarHist
}

export type GthbStarHistFilter = {
  amount?: InputMaybe<BigIntFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbStarHistFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  gthbRepoId?: InputMaybe<BigIntFilter>
  gthbStarHistDate?: InputMaybe<DatetimeFilter>
  gthbStarHistId?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbStarHistFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbStarHistFilter>>
}

export type GthbStarHistInsertInput = {
  amount?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
  gthbStarHistDate?: InputMaybe<Scalars['Datetime']>
}

export type GthbStarHistInsertResponse = {
  __typename?: 'GthbStarHistInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbStarHist>
}

export type GthbStarHistOrderBy = {
  amount?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  gthbRepoId?: InputMaybe<OrderByDirection>
  gthbStarHistDate?: InputMaybe<OrderByDirection>
  gthbStarHistId?: InputMaybe<OrderByDirection>
}

export type GthbStarHistUpdateInput = {
  amount?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
  gthbStarHistDate?: InputMaybe<Scalars['Datetime']>
}

export type GthbStarHistUpdateResponse = {
  __typename?: 'GthbStarHistUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbStarHist>
}

export type GthbTrending = Node & {
  __typename?: 'GthbTrending'
  createdAt: Scalars['Datetime']
  dateRange: Scalars['Opaque']
  gthbRepo: GthbRepo
  gthbRepoId: Scalars['BigInt']
  gthbTrendingId: Scalars['BigInt']
  lang?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type GthbTrendingConnection = {
  __typename?: 'GthbTrendingConnection'
  edges: Array<GthbTrendingEdge>
  pageInfo: PageInfo
}

export type GthbTrendingDeleteResponse = {
  __typename?: 'GthbTrendingDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbTrending>
}

export type GthbTrendingEdge = {
  __typename?: 'GthbTrendingEdge'
  cursor: Scalars['String']
  node: GthbTrending
}

export type GthbTrendingFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbTrendingFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  dateRange?: InputMaybe<OpaqueFilter>
  gthbRepoId?: InputMaybe<BigIntFilter>
  gthbTrendingId?: InputMaybe<BigIntFilter>
  lang?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbTrendingFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbTrendingFilter>>
}

export type GthbTrendingInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  dateRange?: InputMaybe<Scalars['Opaque']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
  lang?: InputMaybe<Scalars['String']>
}

export type GthbTrendingInsertResponse = {
  __typename?: 'GthbTrendingInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbTrending>
}

export type GthbTrendingOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  dateRange?: InputMaybe<OrderByDirection>
  gthbRepoId?: InputMaybe<OrderByDirection>
  gthbTrendingId?: InputMaybe<OrderByDirection>
  lang?: InputMaybe<OrderByDirection>
}

export type GthbTrendingUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  dateRange?: InputMaybe<Scalars['Opaque']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
  lang?: InputMaybe<Scalars['String']>
}

export type GthbTrendingUpdateResponse = {
  __typename?: 'GthbTrendingUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbTrending>
}

export type GthbUser = Node & {
  __typename?: 'GthbUser'
  bio?: Maybe<Scalars['String']>
  bioHtml?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  companyHtml?: Maybe<Scalars['String']>
  createdAt: Scalars['Datetime']
  email?: Maybe<Scalars['String']>
  followersTotalCount: Scalars['BigInt']
  gthbUser: GthbOwner
  gthbUserId: Scalars['BigInt']
  gthbUserName?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  twitterUsername?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
}

export type GthbUserConnection = {
  __typename?: 'GthbUserConnection'
  edges: Array<GthbUserEdge>
  pageInfo: PageInfo
}

export type GthbUserDeleteResponse = {
  __typename?: 'GthbUserDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbUser>
}

export type GthbUserEdge = {
  __typename?: 'GthbUserEdge'
  cursor: Scalars['String']
  node: GthbUser
}

export type GthbUserFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbUserFilter>>
  bio?: InputMaybe<StringFilter>
  bioHtml?: InputMaybe<StringFilter>
  company?: InputMaybe<StringFilter>
  companyHtml?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  email?: InputMaybe<StringFilter>
  followersTotalCount?: InputMaybe<BigIntFilter>
  gthbUserId?: InputMaybe<BigIntFilter>
  gthbUserName?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<GthbUserFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbUserFilter>>
  twitterUsername?: InputMaybe<StringFilter>
  websiteUrl?: InputMaybe<StringFilter>
}

export type GthbUserInsertInput = {
  bio?: InputMaybe<Scalars['String']>
  bioHtml?: InputMaybe<Scalars['String']>
  company?: InputMaybe<Scalars['String']>
  companyHtml?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  followersTotalCount?: InputMaybe<Scalars['BigInt']>
  gthbUserId?: InputMaybe<Scalars['BigInt']>
  gthbUserName?: InputMaybe<Scalars['String']>
  twitterUsername?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type GthbUserInsertResponse = {
  __typename?: 'GthbUserInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbUser>
}

export type GthbUserOrderBy = {
  bio?: InputMaybe<OrderByDirection>
  bioHtml?: InputMaybe<OrderByDirection>
  company?: InputMaybe<OrderByDirection>
  companyHtml?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  email?: InputMaybe<OrderByDirection>
  followersTotalCount?: InputMaybe<OrderByDirection>
  gthbUserId?: InputMaybe<OrderByDirection>
  gthbUserName?: InputMaybe<OrderByDirection>
  twitterUsername?: InputMaybe<OrderByDirection>
  websiteUrl?: InputMaybe<OrderByDirection>
}

export type GthbUserUpdateInput = {
  bio?: InputMaybe<Scalars['String']>
  bioHtml?: InputMaybe<Scalars['String']>
  company?: InputMaybe<Scalars['String']>
  companyHtml?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  followersTotalCount?: InputMaybe<Scalars['BigInt']>
  gthbUserId?: InputMaybe<Scalars['BigInt']>
  gthbUserName?: InputMaybe<Scalars['String']>
  twitterUsername?: InputMaybe<Scalars['String']>
  websiteUrl?: InputMaybe<Scalars['String']>
}

export type GthbUserUpdateResponse = {
  __typename?: 'GthbUserUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<GthbUser>
}

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>
}

export type Instance1 = Node & {
  __typename?: 'Instance1'
  created_at: Scalars['Datetime']
  id: Scalars['BigInt']
  instance2Collection?: Maybe<Instance2Connection>
  name?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type Instance1Instance2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<Instance2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<Instance2OrderBy>>
}

export type Instance1Connection = {
  __typename?: 'Instance1Connection'
  edges: Array<Instance1Edge>
  pageInfo: PageInfo
}

export type Instance1DeleteResponse = {
  __typename?: 'Instance1DeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Instance1>
}

export type Instance1Edge = {
  __typename?: 'Instance1Edge'
  cursor: Scalars['String']
  node: Instance1
}

export type Instance1Filter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Instance1Filter>>
  created_at?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<BigIntFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<Instance1Filter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Instance1Filter>>
}

export type Instance1InsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>
  name?: InputMaybe<Scalars['String']>
}

export type Instance1InsertResponse = {
  __typename?: 'Instance1InsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Instance1>
}

export type Instance1OrderBy = {
  created_at?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
}

export type Instance1UpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>
  name?: InputMaybe<Scalars['String']>
}

export type Instance1UpdateResponse = {
  __typename?: 'Instance1UpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Instance1>
}

export type Instance2 = Node & {
  __typename?: 'Instance2'
  created_at: Scalars['Datetime']
  for?: Maybe<Scalars['BigInt']>
  id: Scalars['BigInt']
  instance1?: Maybe<Instance1>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  share?: Maybe<Scalars['String']>
}

export type Instance2Connection = {
  __typename?: 'Instance2Connection'
  edges: Array<Instance2Edge>
  pageInfo: PageInfo
}

export type Instance2DeleteResponse = {
  __typename?: 'Instance2DeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Instance2>
}

export type Instance2Edge = {
  __typename?: 'Instance2Edge'
  cursor: Scalars['String']
  node: Instance2
}

export type Instance2Filter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Instance2Filter>>
  created_at?: InputMaybe<DatetimeFilter>
  for?: InputMaybe<BigIntFilter>
  id?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<Instance2Filter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Instance2Filter>>
  share?: InputMaybe<StringFilter>
}

export type Instance2InsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>
  for?: InputMaybe<Scalars['BigInt']>
  share?: InputMaybe<Scalars['String']>
}

export type Instance2InsertResponse = {
  __typename?: 'Instance2InsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Instance2>
}

export type Instance2OrderBy = {
  created_at?: InputMaybe<OrderByDirection>
  for?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  share?: InputMaybe<OrderByDirection>
}

export type Instance2UpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>
  for?: InputMaybe<Scalars['BigInt']>
  share?: InputMaybe<Scalars['String']>
}

export type Instance2UpdateResponse = {
  __typename?: 'Instance2UpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<Instance2>
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
  createBookmark: Scalars['Boolean']
  /** Deletes zero or more records from the `AlgoHnCommentAndAlgoHnTag` collection */
  deleteFromAlgoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagDeleteResponse
  /** Deletes zero or more records from the `AlgoHnComment` collection */
  deleteFromAlgoHnCommentCollection: AlgoHnCommentDeleteResponse
  /** Deletes zero or more records from the `AlgoHnQuery` collection */
  deleteFromAlgoHnQueryCollection: AlgoHnQueryDeleteResponse
  /** Deletes zero or more records from the `AlgoHnStoryAndAlgoHnTag` collection */
  deleteFromAlgoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagDeleteResponse
  /** Deletes zero or more records from the `AlgoHnStory` collection */
  deleteFromAlgoHnStoryCollection: AlgoHnStoryDeleteResponse
  /** Deletes zero or more records from the `AlgoHnTag` collection */
  deleteFromAlgoHnTagCollection: AlgoHnTagDeleteResponse
  /** Deletes zero or more records from the `GthbForkHist` collection */
  deleteFromGthbForkHistCollection: GthbForkHistDeleteResponse
  /** Deletes zero or more records from the `GthbIssueHist` collection */
  deleteFromGthbIssueHistCollection: GthbIssueHistDeleteResponse
  /** Deletes zero or more records from the `GthbLang` collection */
  deleteFromGthbLangCollection: GthbLangDeleteResponse
  /** Deletes zero or more records from the `GthbOrg` collection */
  deleteFromGthbOrgCollection: GthbOrgDeleteResponse
  /** Deletes zero or more records from the `GthbOwner` collection */
  deleteFromGthbOwnerCollection: GthbOwnerDeleteResponse
  /** Deletes zero or more records from the `GthbRepoAndGthbLang` collection */
  deleteFromGthbRepoAndGthbLangCollection: GthbRepoAndGthbLangDeleteResponse
  /** Deletes zero or more records from the `GthbRepoAndGthbRepoTopic` collection */
  deleteFromGthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicDeleteResponse
  /** Deletes zero or more records from the `GthbRepo` collection */
  deleteFromGthbRepoCollection: GthbRepoDeleteResponse
  /** Deletes zero or more records from the `GthbRepoContr` collection */
  deleteFromGthbRepoContrCollection: GthbRepoContrDeleteResponse
  /** Deletes zero or more records from the `GthbRepoTopic` collection */
  deleteFromGthbRepoTopicCollection: GthbRepoTopicDeleteResponse
  /** Deletes zero or more records from the `GthbStarHist` collection */
  deleteFromGthbStarHistCollection: GthbStarHistDeleteResponse
  /** Deletes zero or more records from the `GthbTrending` collection */
  deleteFromGthbTrendingCollection: GthbTrendingDeleteResponse
  /** Deletes zero or more records from the `GthbUser` collection */
  deleteFromGthbUserCollection: GthbUserDeleteResponse
  /** Deletes zero or more records from the `Instance1` collection */
  deleteFromInstance1Collection: Instance1DeleteResponse
  /** Deletes zero or more records from the `Instance2` collection */
  deleteFromInstance2Collection: Instance2DeleteResponse
  /** Deletes zero or more records from the `PinnedProjBookmark` collection */
  deleteFromPinnedProjBookmarkCollection: PinnedProjBookmarkDeleteResponse
  /** Deletes zero or more records from the `ProjBookmark` collection */
  deleteFromProjBookmarkCollection: ProjBookmarkDeleteResponse
  /** Deletes zero or more records from the `ProjCatAndProjBookmark` collection */
  deleteFromProjCatAndProjBookmarkCollection: ProjCatAndProjBookmarkDeleteResponse
  /** Deletes zero or more records from the `ProjCat` collection */
  deleteFromProjCatCollection: ProjCatDeleteResponse
  /** Deletes zero or more records from the `ProjClassifier` collection */
  deleteFromProjClassifierCollection: ProjClassifierDeleteResponse
  /** Deletes zero or more records from the `ProjRepoAndAlgoHnQuery` collection */
  deleteFromProjRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryDeleteResponse
  /** Deletes zero or more records from the `ProjRepoAndProjClassifier` collection */
  deleteFromProjRepoAndProjClassifierCollection: ProjRepoAndProjClassifierDeleteResponse
  /** Deletes zero or more records from the `ProjRepoAndSbotLinCompany` collection */
  deleteFromProjRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyDeleteResponse
  /** Deletes zero or more records from the `ProjRepoAndSbotLinProfile` collection */
  deleteFromProjRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileDeleteResponse
  /** Deletes zero or more records from the `ProjRepo` collection */
  deleteFromProjRepoCollection: ProjRepoDeleteResponse
  /** Deletes zero or more records from the `ProjRepoMetadata` collection */
  deleteFromProjRepoMetadataCollection: ProjRepoMetadataDeleteResponse
  /** Deletes zero or more records from the `SbotLinCompany` collection */
  deleteFromSbotLinCompanyCollection: SbotLinCompanyDeleteResponse
  /** Deletes zero or more records from the `SbotLinProfile` collection */
  deleteFromSbotLinProfileCollection: SbotLinProfileDeleteResponse
  /** Deletes zero or more records from the `UserAdmin` collection */
  deleteFromUserAdminCollection: UserAdminDeleteResponse
  /** Deletes zero or more records from the `UserApiKey` collection */
  deleteFromUserApiKeyCollection: UserApiKeyDeleteResponse
  /** Deletes zero or more records from the `UserWhitelist` collection */
  deleteFromUserWhitelistCollection: UserWhitelistDeleteResponse
  fDeleteGthbTrendingByDateRange?: Maybe<Scalars['Opaque']>
  fDeleteProjBookmark?: Maybe<Scalars['Int']>
  fDeleteProjBookmarkByGthbRepoName?: Maybe<Scalars['Boolean']>
  fDeleteProjBookmarkByProjRepoId?: Maybe<Scalars['Int']>
  fDeleteUser?: Maybe<Scalars['Boolean']>
  fIsProjRepoBookmarked?: Maybe<Scalars['Boolean']>
  /** Adds one or more `AlgoHnCommentAndAlgoHnTag` records to the collection */
  insertIntoAlgoHnCommentAndAlgoHnTagCollection?: Maybe<AlgoHnCommentAndAlgoHnTagInsertResponse>
  /** Adds one or more `AlgoHnComment` records to the collection */
  insertIntoAlgoHnCommentCollection?: Maybe<AlgoHnCommentInsertResponse>
  /** Adds one or more `AlgoHnQuery` records to the collection */
  insertIntoAlgoHnQueryCollection?: Maybe<AlgoHnQueryInsertResponse>
  /** Adds one or more `AlgoHnStoryAndAlgoHnTag` records to the collection */
  insertIntoAlgoHnStoryAndAlgoHnTagCollection?: Maybe<AlgoHnStoryAndAlgoHnTagInsertResponse>
  /** Adds one or more `AlgoHnStory` records to the collection */
  insertIntoAlgoHnStoryCollection?: Maybe<AlgoHnStoryInsertResponse>
  /** Adds one or more `AlgoHnTag` records to the collection */
  insertIntoAlgoHnTagCollection?: Maybe<AlgoHnTagInsertResponse>
  /** Adds one or more `GthbForkHist` records to the collection */
  insertIntoGthbForkHistCollection?: Maybe<GthbForkHistInsertResponse>
  /** Adds one or more `GthbIssueHist` records to the collection */
  insertIntoGthbIssueHistCollection?: Maybe<GthbIssueHistInsertResponse>
  /** Adds one or more `GthbLang` records to the collection */
  insertIntoGthbLangCollection?: Maybe<GthbLangInsertResponse>
  /** Adds one or more `GthbOrg` records to the collection */
  insertIntoGthbOrgCollection?: Maybe<GthbOrgInsertResponse>
  /** Adds one or more `GthbOwner` records to the collection */
  insertIntoGthbOwnerCollection?: Maybe<GthbOwnerInsertResponse>
  /** Adds one or more `GthbRepoAndGthbLang` records to the collection */
  insertIntoGthbRepoAndGthbLangCollection?: Maybe<GthbRepoAndGthbLangInsertResponse>
  /** Adds one or more `GthbRepoAndGthbRepoTopic` records to the collection */
  insertIntoGthbRepoAndGthbRepoTopicCollection?: Maybe<GthbRepoAndGthbRepoTopicInsertResponse>
  /** Adds one or more `GthbRepo` records to the collection */
  insertIntoGthbRepoCollection?: Maybe<GthbRepoInsertResponse>
  /** Adds one or more `GthbRepoContr` records to the collection */
  insertIntoGthbRepoContrCollection?: Maybe<GthbRepoContrInsertResponse>
  /** Adds one or more `GthbRepoTopic` records to the collection */
  insertIntoGthbRepoTopicCollection?: Maybe<GthbRepoTopicInsertResponse>
  /** Adds one or more `GthbStarHist` records to the collection */
  insertIntoGthbStarHistCollection?: Maybe<GthbStarHistInsertResponse>
  /** Adds one or more `GthbTrending` records to the collection */
  insertIntoGthbTrendingCollection?: Maybe<GthbTrendingInsertResponse>
  /** Adds one or more `GthbUser` records to the collection */
  insertIntoGthbUserCollection?: Maybe<GthbUserInsertResponse>
  /** Adds one or more `Instance1` records to the collection */
  insertIntoInstance1Collection?: Maybe<Instance1InsertResponse>
  /** Adds one or more `Instance2` records to the collection */
  insertIntoInstance2Collection?: Maybe<Instance2InsertResponse>
  /** Adds one or more `PinnedProjBookmark` records to the collection */
  insertIntoPinnedProjBookmarkCollection?: Maybe<PinnedProjBookmarkInsertResponse>
  /** Adds one or more `ProjBookmark` records to the collection */
  insertIntoProjBookmarkCollection?: Maybe<ProjBookmarkInsertResponse>
  /** Adds one or more `ProjCatAndProjBookmark` records to the collection */
  insertIntoProjCatAndProjBookmarkCollection?: Maybe<ProjCatAndProjBookmarkInsertResponse>
  /** Adds one or more `ProjCat` records to the collection */
  insertIntoProjCatCollection?: Maybe<ProjCatInsertResponse>
  /** Adds one or more `ProjClassifier` records to the collection */
  insertIntoProjClassifierCollection?: Maybe<ProjClassifierInsertResponse>
  /** Adds one or more `ProjRepoAndAlgoHnQuery` records to the collection */
  insertIntoProjRepoAndAlgoHnQueryCollection?: Maybe<ProjRepoAndAlgoHnQueryInsertResponse>
  /** Adds one or more `ProjRepoAndProjClassifier` records to the collection */
  insertIntoProjRepoAndProjClassifierCollection?: Maybe<ProjRepoAndProjClassifierInsertResponse>
  /** Adds one or more `ProjRepoAndSbotLinCompany` records to the collection */
  insertIntoProjRepoAndSbotLinCompanyCollection?: Maybe<ProjRepoAndSbotLinCompanyInsertResponse>
  /** Adds one or more `ProjRepoAndSbotLinProfile` records to the collection */
  insertIntoProjRepoAndSbotLinProfileCollection?: Maybe<ProjRepoAndSbotLinProfileInsertResponse>
  /** Adds one or more `ProjRepo` records to the collection */
  insertIntoProjRepoCollection?: Maybe<ProjRepoInsertResponse>
  /** Adds one or more `ProjRepoMetadata` records to the collection */
  insertIntoProjRepoMetadataCollection?: Maybe<ProjRepoMetadataInsertResponse>
  /** Adds one or more `SbotLinCompany` records to the collection */
  insertIntoSbotLinCompanyCollection?: Maybe<SbotLinCompanyInsertResponse>
  /** Adds one or more `SbotLinProfile` records to the collection */
  insertIntoSbotLinProfileCollection?: Maybe<SbotLinProfileInsertResponse>
  /** Adds one or more `UserAdmin` records to the collection */
  insertIntoUserAdminCollection?: Maybe<UserAdminInsertResponse>
  /** Adds one or more `UserApiKey` records to the collection */
  insertIntoUserApiKeyCollection?: Maybe<UserApiKeyInsertResponse>
  /** Adds one or more `UserWhitelist` records to the collection */
  insertIntoUserWhitelistCollection?: Maybe<UserWhitelistInsertResponse>
  removeBookmark: Scalars['Boolean']
  removeBookmarkByProjRepoId: Scalars['Boolean']
  test?: Maybe<Scalars['UUID']>
  /** Updates zero or more records in the `AlgoHnCommentAndAlgoHnTag` collection */
  updateAlgoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagUpdateResponse
  /** Updates zero or more records in the `AlgoHnComment` collection */
  updateAlgoHnCommentCollection: AlgoHnCommentUpdateResponse
  /** Updates zero or more records in the `AlgoHnQuery` collection */
  updateAlgoHnQueryCollection: AlgoHnQueryUpdateResponse
  /** Updates zero or more records in the `AlgoHnStoryAndAlgoHnTag` collection */
  updateAlgoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagUpdateResponse
  /** Updates zero or more records in the `AlgoHnStory` collection */
  updateAlgoHnStoryCollection: AlgoHnStoryUpdateResponse
  /** Updates zero or more records in the `AlgoHnTag` collection */
  updateAlgoHnTagCollection: AlgoHnTagUpdateResponse
  /** Updates zero or more records in the `GthbForkHist` collection */
  updateGthbForkHistCollection: GthbForkHistUpdateResponse
  /** Updates zero or more records in the `GthbIssueHist` collection */
  updateGthbIssueHistCollection: GthbIssueHistUpdateResponse
  /** Updates zero or more records in the `GthbLang` collection */
  updateGthbLangCollection: GthbLangUpdateResponse
  /** Updates zero or more records in the `GthbOrg` collection */
  updateGthbOrgCollection: GthbOrgUpdateResponse
  /** Updates zero or more records in the `GthbOwner` collection */
  updateGthbOwnerCollection: GthbOwnerUpdateResponse
  /** Updates zero or more records in the `GthbRepoAndGthbLang` collection */
  updateGthbRepoAndGthbLangCollection: GthbRepoAndGthbLangUpdateResponse
  /** Updates zero or more records in the `GthbRepoAndGthbRepoTopic` collection */
  updateGthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicUpdateResponse
  /** Updates zero or more records in the `GthbRepo` collection */
  updateGthbRepoCollection: GthbRepoUpdateResponse
  /** Updates zero or more records in the `GthbRepoContr` collection */
  updateGthbRepoContrCollection: GthbRepoContrUpdateResponse
  /** Updates zero or more records in the `GthbRepoTopic` collection */
  updateGthbRepoTopicCollection: GthbRepoTopicUpdateResponse
  /** Updates zero or more records in the `GthbStarHist` collection */
  updateGthbStarHistCollection: GthbStarHistUpdateResponse
  /** Updates zero or more records in the `GthbTrending` collection */
  updateGthbTrendingCollection: GthbTrendingUpdateResponse
  /** Updates zero or more records in the `GthbUser` collection */
  updateGthbUserCollection: GthbUserUpdateResponse
  /** Updates zero or more records in the `Instance1` collection */
  updateInstance1Collection: Instance1UpdateResponse
  /** Updates zero or more records in the `Instance2` collection */
  updateInstance2Collection: Instance2UpdateResponse
  /** Updates zero or more records in the `PinnedProjBookmark` collection */
  updatePinnedProjBookmarkCollection: PinnedProjBookmarkUpdateResponse
  /** Updates zero or more records in the `ProjBookmark` collection */
  updateProjBookmarkCollection: ProjBookmarkUpdateResponse
  /** Updates zero or more records in the `ProjCatAndProjBookmark` collection */
  updateProjCatAndProjBookmarkCollection: ProjCatAndProjBookmarkUpdateResponse
  /** Updates zero or more records in the `ProjCat` collection */
  updateProjCatCollection: ProjCatUpdateResponse
  /** Updates zero or more records in the `ProjClassifier` collection */
  updateProjClassifierCollection: ProjClassifierUpdateResponse
  /** Updates zero or more records in the `ProjRepoAndAlgoHnQuery` collection */
  updateProjRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryUpdateResponse
  /** Updates zero or more records in the `ProjRepoAndProjClassifier` collection */
  updateProjRepoAndProjClassifierCollection: ProjRepoAndProjClassifierUpdateResponse
  /** Updates zero or more records in the `ProjRepoAndSbotLinCompany` collection */
  updateProjRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyUpdateResponse
  /** Updates zero or more records in the `ProjRepoAndSbotLinProfile` collection */
  updateProjRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileUpdateResponse
  /** Updates zero or more records in the `ProjRepo` collection */
  updateProjRepoCollection: ProjRepoUpdateResponse
  /** Updates zero or more records in the `ProjRepoMetadata` collection */
  updateProjRepoMetadataCollection: ProjRepoMetadataUpdateResponse
  /** Updates zero or more records in the `SbotLinCompany` collection */
  updateSbotLinCompanyCollection: SbotLinCompanyUpdateResponse
  /** Updates zero or more records in the `SbotLinProfile` collection */
  updateSbotLinProfileCollection: SbotLinProfileUpdateResponse
  /** Updates zero or more records in the `UserAdmin` collection */
  updateUserAdminCollection: UserAdminUpdateResponse
  /** Updates zero or more records in the `UserApiKey` collection */
  updateUserApiKeyCollection: UserApiKeyUpdateResponse
  /** Updates zero or more records in the `UserWhitelist` collection */
  updateUserWhitelistCollection: UserWhitelistUpdateResponse
}

/** The root type for creating and mutating data */
export type MutationCreateBookmarkArgs = {
  categories: Array<Scalars['String']>
  repo: RepositoryInput
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnCommentCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnCommentFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnQueryCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnQueryFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnStoryCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnStoryFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnTagFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbForkHistCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbForkHistFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbIssueHistCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbIssueHistFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbLangCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbLangFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbOrgCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbOrgFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbOwnerCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbOwnerFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoAndGthbLangCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbRepoAndGthbLangFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoAndGthbRepoTopicCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbRepoFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoContrCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbRepoContrFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoTopicCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbRepoTopicFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbStarHistCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbStarHistFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbTrendingCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbTrendingFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbUserCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbUserFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromInstance1CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Instance1Filter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromInstance2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Instance2Filter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromPinnedProjBookmarkCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<PinnedProjBookmarkFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjBookmarkCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjBookmarkFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjCatAndProjBookmarkCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjCatCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjCatFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjClassifierCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjClassifierFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndAlgoHnQueryCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndProjClassifierCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndSbotLinCompanyCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndSbotLinProfileCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoMetadataCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoMetadataFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromSbotLinCompanyCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<SbotLinCompanyFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromSbotLinProfileCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<SbotLinProfileFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromUserAdminCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<UserAdminFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromUserApiKeyCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<UserApiKeyFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromUserWhitelistCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<UserWhitelistFilter>
}

/** The root type for creating and mutating data */
export type MutationFDeleteGthbTrendingByDateRangeArgs = {
  daterange?: InputMaybe<Scalars['Opaque']>
}

/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkArgs = {
  projbookmarkid?: InputMaybe<Scalars['BigInt']>
}

/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkByGthbRepoNameArgs = {
  githubreponame?: InputMaybe<Scalars['String']>
}

/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkByProjRepoIdArgs = {
  projrepoid?: InputMaybe<Scalars['BigInt']>
}

/** The root type for creating and mutating data */
export type MutationFIsProjRepoBookmarkedArgs = {
  projrepoid?: InputMaybe<Scalars['BigInt']>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  objects: Array<AlgoHnCommentAndAlgoHnTagInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnCommentCollectionArgs = {
  objects: Array<AlgoHnCommentInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnQueryCollectionArgs = {
  objects: Array<AlgoHnQueryInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  objects: Array<AlgoHnStoryAndAlgoHnTagInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnStoryCollectionArgs = {
  objects: Array<AlgoHnStoryInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnTagCollectionArgs = {
  objects: Array<AlgoHnTagInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbForkHistCollectionArgs = {
  objects: Array<GthbForkHistInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbIssueHistCollectionArgs = {
  objects: Array<GthbIssueHistInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbLangCollectionArgs = {
  objects: Array<GthbLangInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbOrgCollectionArgs = {
  objects: Array<GthbOrgInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbOwnerCollectionArgs = {
  objects: Array<GthbOwnerInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbRepoAndGthbLangCollectionArgs = {
  objects: Array<GthbRepoAndGthbLangInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbRepoAndGthbRepoTopicCollectionArgs = {
  objects: Array<GthbRepoAndGthbRepoTopicInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbRepoCollectionArgs = {
  objects: Array<GthbRepoInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbRepoContrCollectionArgs = {
  objects: Array<GthbRepoContrInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbRepoTopicCollectionArgs = {
  objects: Array<GthbRepoTopicInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbStarHistCollectionArgs = {
  objects: Array<GthbStarHistInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbTrendingCollectionArgs = {
  objects: Array<GthbTrendingInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoGthbUserCollectionArgs = {
  objects: Array<GthbUserInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoInstance1CollectionArgs = {
  objects: Array<Instance1InsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoInstance2CollectionArgs = {
  objects: Array<Instance2InsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoPinnedProjBookmarkCollectionArgs = {
  objects: Array<PinnedProjBookmarkInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProjBookmarkCollectionArgs = {
  objects: Array<ProjBookmarkInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProjCatAndProjBookmarkCollectionArgs = {
  objects: Array<ProjCatAndProjBookmarkInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProjCatCollectionArgs = {
  objects: Array<ProjCatInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProjClassifierCollectionArgs = {
  objects: Array<ProjClassifierInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProjRepoAndAlgoHnQueryCollectionArgs = {
  objects: Array<ProjRepoAndAlgoHnQueryInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProjRepoAndProjClassifierCollectionArgs = {
  objects: Array<ProjRepoAndProjClassifierInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProjRepoAndSbotLinCompanyCollectionArgs = {
  objects: Array<ProjRepoAndSbotLinCompanyInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProjRepoAndSbotLinProfileCollectionArgs = {
  objects: Array<ProjRepoAndSbotLinProfileInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProjRepoCollectionArgs = {
  objects: Array<ProjRepoInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProjRepoMetadataCollectionArgs = {
  objects: Array<ProjRepoMetadataInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoSbotLinCompanyCollectionArgs = {
  objects: Array<SbotLinCompanyInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoSbotLinProfileCollectionArgs = {
  objects: Array<SbotLinProfileInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoUserAdminCollectionArgs = {
  objects: Array<UserAdminInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoUserApiKeyCollectionArgs = {
  objects: Array<UserApiKeyInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoUserWhitelistCollectionArgs = {
  objects: Array<UserWhitelistInsertInput>
}

/** The root type for creating and mutating data */
export type MutationRemoveBookmarkArgs = {
  projBookmarkId: Scalars['Int']
}

/** The root type for creating and mutating data */
export type MutationRemoveBookmarkByProjRepoIdArgs = {
  projRepoId: Scalars['Int']
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
  set: AlgoHnCommentAndAlgoHnTagUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnCommentCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnCommentFilter>
  set: AlgoHnCommentUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnQueryCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnQueryFilter>
  set: AlgoHnQueryUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
  set: AlgoHnStoryAndAlgoHnTagUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnStoryCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnStoryFilter>
  set: AlgoHnStoryUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AlgoHnTagFilter>
  set: AlgoHnTagUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbForkHistCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbForkHistFilter>
  set: GthbForkHistUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbIssueHistCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbIssueHistFilter>
  set: GthbIssueHistUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbLangCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbLangFilter>
  set: GthbLangUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbOrgCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbOrgFilter>
  set: GthbOrgUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbOwnerCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbOwnerFilter>
  set: GthbOwnerUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoAndGthbLangCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbRepoAndGthbLangFilter>
  set: GthbRepoAndGthbLangUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoAndGthbRepoTopicCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
  set: GthbRepoAndGthbRepoTopicUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbRepoFilter>
  set: GthbRepoUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoContrCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbRepoContrFilter>
  set: GthbRepoContrUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoTopicCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbRepoTopicFilter>
  set: GthbRepoTopicUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbStarHistCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbStarHistFilter>
  set: GthbStarHistUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbTrendingCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbTrendingFilter>
  set: GthbTrendingUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbUserCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<GthbUserFilter>
  set: GthbUserUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateInstance1CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Instance1Filter>
  set: Instance1UpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateInstance2CollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<Instance2Filter>
  set: Instance2UpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdatePinnedProjBookmarkCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<PinnedProjBookmarkFilter>
  set: PinnedProjBookmarkUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjBookmarkCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjBookmarkFilter>
  set: ProjBookmarkUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjCatAndProjBookmarkCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
  set: ProjCatAndProjBookmarkUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjCatCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjCatFilter>
  set: ProjCatUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjClassifierCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjClassifierFilter>
  set: ProjClassifierUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndAlgoHnQueryCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
  set: ProjRepoAndAlgoHnQueryUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndProjClassifierCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
  set: ProjRepoAndProjClassifierUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndSbotLinCompanyCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
  set: ProjRepoAndSbotLinCompanyUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndSbotLinProfileCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
  set: ProjRepoAndSbotLinProfileUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoFilter>
  set: ProjRepoUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoMetadataCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjRepoMetadataFilter>
  set: ProjRepoMetadataUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateSbotLinCompanyCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<SbotLinCompanyFilter>
  set: SbotLinCompanyUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateSbotLinProfileCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<SbotLinProfileFilter>
  set: SbotLinProfileUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateUserAdminCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<UserAdminFilter>
  set: UserAdminUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateUserApiKeyCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<UserApiKeyFilter>
  set: UserApiKeyUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateUserWhitelistCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<UserWhitelistFilter>
  set: UserWhitelistUpdateInput
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

export type PinnedProjBookmark = Node & {
  __typename?: 'PinnedProjBookmark'
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  pinnedProjBookmarkId: Scalars['BigInt']
  projBookmark: ProjBookmark
  projBookmarkId: Scalars['BigInt']
}

export type PinnedProjBookmarkConnection = {
  __typename?: 'PinnedProjBookmarkConnection'
  edges: Array<PinnedProjBookmarkEdge>
  pageInfo: PageInfo
}

export type PinnedProjBookmarkDeleteResponse = {
  __typename?: 'PinnedProjBookmarkDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<PinnedProjBookmark>
}

export type PinnedProjBookmarkEdge = {
  __typename?: 'PinnedProjBookmarkEdge'
  cursor: Scalars['String']
  node: PinnedProjBookmark
}

export type PinnedProjBookmarkFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PinnedProjBookmarkFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<PinnedProjBookmarkFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PinnedProjBookmarkFilter>>
  pinnedProjBookmarkId?: InputMaybe<BigIntFilter>
  projBookmarkId?: InputMaybe<BigIntFilter>
}

export type PinnedProjBookmarkInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  projBookmarkId?: InputMaybe<Scalars['BigInt']>
}

export type PinnedProjBookmarkInsertResponse = {
  __typename?: 'PinnedProjBookmarkInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<PinnedProjBookmark>
}

export type PinnedProjBookmarkOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  pinnedProjBookmarkId?: InputMaybe<OrderByDirection>
  projBookmarkId?: InputMaybe<OrderByDirection>
}

export type PinnedProjBookmarkUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  projBookmarkId?: InputMaybe<Scalars['BigInt']>
}

export type PinnedProjBookmarkUpdateResponse = {
  __typename?: 'PinnedProjBookmarkUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<PinnedProjBookmark>
}

export type ProjBookmark = Node & {
  __typename?: 'ProjBookmark'
  authUsersId: Scalars['UUID']
  createdAt: Scalars['Datetime']
  isPublic?: Maybe<Scalars['Boolean']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projBookmark: PinnedProjBookmark
  projBookmarkId: Scalars['BigInt']
  projCatAndProjBookmarkCollection: ProjCatAndProjBookmarkConnection
  projRepo: ProjRepo
  projRepoId: Scalars['BigInt']
}

export type ProjBookmarkProjCatAndProjBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjCatAndProjBookmarkOrderBy>>
}

export type ProjBookmarkConnection = {
  __typename?: 'ProjBookmarkConnection'
  edges: Array<ProjBookmarkEdge>
  pageInfo: PageInfo
}

export type ProjBookmarkDeleteResponse = {
  __typename?: 'ProjBookmarkDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjBookmark>
}

export type ProjBookmarkEdge = {
  __typename?: 'ProjBookmarkEdge'
  cursor: Scalars['String']
  node: ProjBookmark
}

export type ProjBookmarkFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjBookmarkFilter>>
  authUsersId?: InputMaybe<UuidFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  isPublic?: InputMaybe<BooleanFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProjBookmarkFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjBookmarkFilter>>
  projBookmarkId?: InputMaybe<BigIntFilter>
  projRepoId?: InputMaybe<BigIntFilter>
}

export type ProjBookmarkInsertInput = {
  authUsersId?: InputMaybe<Scalars['UUID']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  isPublic?: InputMaybe<Scalars['Boolean']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
}

export type ProjBookmarkInsertResponse = {
  __typename?: 'ProjBookmarkInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjBookmark>
}

export type ProjBookmarkOrderBy = {
  authUsersId?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  isPublic?: InputMaybe<OrderByDirection>
  projBookmarkId?: InputMaybe<OrderByDirection>
  projRepoId?: InputMaybe<OrderByDirection>
}

export type ProjBookmarkUpdateInput = {
  authUsersId?: InputMaybe<Scalars['UUID']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  isPublic?: InputMaybe<Scalars['Boolean']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
}

export type ProjBookmarkUpdateResponse = {
  __typename?: 'ProjBookmarkUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjBookmark>
}

export type ProjCat = Node & {
  __typename?: 'ProjCat'
  authUsersId: Scalars['UUID']
  createdAt: Scalars['Datetime']
  isPublic?: Maybe<Scalars['Boolean']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  note?: Maybe<Scalars['String']>
  projCatAndProjBookmarkCollection: ProjCatAndProjBookmarkConnection
  projCatId: Scalars['BigInt']
  title: Scalars['String']
}

export type ProjCatProjCatAndProjBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjCatAndProjBookmarkOrderBy>>
}

export type ProjCatAndProjBookmark = Node & {
  __typename?: 'ProjCatAndProjBookmark'
  createdAt: Scalars['Datetime']
  isPinned?: Maybe<Scalars['Boolean']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projBookmark: ProjBookmark
  projBookmarkId: Scalars['BigInt']
  projCat: ProjCat
  projCatId: Scalars['BigInt']
}

export type ProjCatAndProjBookmarkConnection = {
  __typename?: 'ProjCatAndProjBookmarkConnection'
  edges: Array<ProjCatAndProjBookmarkEdge>
  pageInfo: PageInfo
}

export type ProjCatAndProjBookmarkDeleteResponse = {
  __typename?: 'ProjCatAndProjBookmarkDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjCatAndProjBookmark>
}

export type ProjCatAndProjBookmarkEdge = {
  __typename?: 'ProjCatAndProjBookmarkEdge'
  cursor: Scalars['String']
  node: ProjCatAndProjBookmark
}

export type ProjCatAndProjBookmarkFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjCatAndProjBookmarkFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  isPinned?: InputMaybe<BooleanFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProjCatAndProjBookmarkFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjCatAndProjBookmarkFilter>>
  projBookmarkId?: InputMaybe<BigIntFilter>
  projCatId?: InputMaybe<BigIntFilter>
}

export type ProjCatAndProjBookmarkInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  isPinned?: InputMaybe<Scalars['Boolean']>
  projBookmarkId?: InputMaybe<Scalars['BigInt']>
  projCatId?: InputMaybe<Scalars['BigInt']>
}

export type ProjCatAndProjBookmarkInsertResponse = {
  __typename?: 'ProjCatAndProjBookmarkInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjCatAndProjBookmark>
}

export type ProjCatAndProjBookmarkOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  isPinned?: InputMaybe<OrderByDirection>
  projBookmarkId?: InputMaybe<OrderByDirection>
  projCatId?: InputMaybe<OrderByDirection>
}

export type ProjCatAndProjBookmarkUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  isPinned?: InputMaybe<Scalars['Boolean']>
  projBookmarkId?: InputMaybe<Scalars['BigInt']>
  projCatId?: InputMaybe<Scalars['BigInt']>
}

export type ProjCatAndProjBookmarkUpdateResponse = {
  __typename?: 'ProjCatAndProjBookmarkUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjCatAndProjBookmark>
}

export type ProjCatConnection = {
  __typename?: 'ProjCatConnection'
  edges: Array<ProjCatEdge>
  pageInfo: PageInfo
}

export type ProjCatDeleteResponse = {
  __typename?: 'ProjCatDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjCat>
}

export type ProjCatEdge = {
  __typename?: 'ProjCatEdge'
  cursor: Scalars['String']
  node: ProjCat
}

export type ProjCatFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjCatFilter>>
  authUsersId?: InputMaybe<UuidFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  isPublic?: InputMaybe<BooleanFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProjCatFilter>
  note?: InputMaybe<StringFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjCatFilter>>
  projCatId?: InputMaybe<BigIntFilter>
  title?: InputMaybe<StringFilter>
}

export type ProjCatInsertInput = {
  authUsersId?: InputMaybe<Scalars['UUID']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  isPublic?: InputMaybe<Scalars['Boolean']>
  note?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type ProjCatInsertResponse = {
  __typename?: 'ProjCatInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjCat>
}

export type ProjCatOrderBy = {
  authUsersId?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  isPublic?: InputMaybe<OrderByDirection>
  note?: InputMaybe<OrderByDirection>
  projCatId?: InputMaybe<OrderByDirection>
  title?: InputMaybe<OrderByDirection>
}

export type ProjCatUpdateInput = {
  authUsersId?: InputMaybe<Scalars['UUID']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  isPublic?: InputMaybe<Scalars['Boolean']>
  note?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type ProjCatUpdateResponse = {
  __typename?: 'ProjCatUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjCat>
}

export type ProjClassifier = Node & {
  __typename?: 'ProjClassifier'
  classifier: Scalars['String']
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projClassifierId: Scalars['BigInt']
  projRepoAndProjClassifierCollection: ProjRepoAndProjClassifierConnection
}

export type ProjClassifierProjRepoAndProjClassifierCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndProjClassifierOrderBy>>
}

export type ProjClassifierConnection = {
  __typename?: 'ProjClassifierConnection'
  edges: Array<ProjClassifierEdge>
  pageInfo: PageInfo
}

export type ProjClassifierDeleteResponse = {
  __typename?: 'ProjClassifierDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjClassifier>
}

export type ProjClassifierEdge = {
  __typename?: 'ProjClassifierEdge'
  cursor: Scalars['String']
  node: ProjClassifier
}

export type ProjClassifierFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjClassifierFilter>>
  classifier?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProjClassifierFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjClassifierFilter>>
  projClassifierId?: InputMaybe<BigIntFilter>
}

export type ProjClassifierInsertInput = {
  classifier?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
}

export type ProjClassifierInsertResponse = {
  __typename?: 'ProjClassifierInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjClassifier>
}

export type ProjClassifierOrderBy = {
  classifier?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  projClassifierId?: InputMaybe<OrderByDirection>
}

export type ProjClassifierUpdateInput = {
  classifier?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
}

export type ProjClassifierUpdateResponse = {
  __typename?: 'ProjClassifierUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjClassifier>
}

export type ProjRepo = Node & {
  __typename?: 'ProjRepo'
  createdAt: Scalars['Datetime']
  gthbRepo: GthbRepo
  gthbRepoId: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  note?: Maybe<Scalars['String']>
  projBookmarkCollection: ProjBookmarkConnection
  projRepo: ProjRepoMetadata
  projRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryConnection
  projRepoAndProjClassifierCollection: ProjRepoAndProjClassifierConnection
  projRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyConnection
  projRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileConnection
  projRepoId: Scalars['BigInt']
}

export type ProjRepoProjBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjBookmarkFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjBookmarkOrderBy>>
}

export type ProjRepoProjRepoAndAlgoHnQueryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndAlgoHnQueryOrderBy>>
}

export type ProjRepoProjRepoAndProjClassifierCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndProjClassifierOrderBy>>
}

export type ProjRepoProjRepoAndSbotLinCompanyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinCompanyOrderBy>>
}

export type ProjRepoProjRepoAndSbotLinProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinProfileOrderBy>>
}

export type ProjRepoAndAlgoHnQuery = Node & {
  __typename?: 'ProjRepoAndAlgoHnQuery'
  algoHnQuery: AlgoHnQuery
  algoHnQueryId: Scalars['BigInt']
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projRepo: ProjRepo
  projRepoId: Scalars['BigInt']
}

export type ProjRepoAndAlgoHnQueryConnection = {
  __typename?: 'ProjRepoAndAlgoHnQueryConnection'
  edges: Array<ProjRepoAndAlgoHnQueryEdge>
  pageInfo: PageInfo
}

export type ProjRepoAndAlgoHnQueryDeleteResponse = {
  __typename?: 'ProjRepoAndAlgoHnQueryDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndAlgoHnQuery>
}

export type ProjRepoAndAlgoHnQueryEdge = {
  __typename?: 'ProjRepoAndAlgoHnQueryEdge'
  cursor: Scalars['String']
  node: ProjRepoAndAlgoHnQuery
}

export type ProjRepoAndAlgoHnQueryFilter = {
  algoHnQueryId?: InputMaybe<BigIntFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjRepoAndAlgoHnQueryFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjRepoAndAlgoHnQueryFilter>>
  projRepoId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndAlgoHnQueryInsertInput = {
  algoHnQueryId?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
}

export type ProjRepoAndAlgoHnQueryInsertResponse = {
  __typename?: 'ProjRepoAndAlgoHnQueryInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndAlgoHnQuery>
}

export type ProjRepoAndAlgoHnQueryOrderBy = {
  algoHnQueryId?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  projRepoId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndAlgoHnQueryUpdateInput = {
  algoHnQueryId?: InputMaybe<Scalars['BigInt']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
}

export type ProjRepoAndAlgoHnQueryUpdateResponse = {
  __typename?: 'ProjRepoAndAlgoHnQueryUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndAlgoHnQuery>
}

export type ProjRepoAndProjClassifier = Node & {
  __typename?: 'ProjRepoAndProjClassifier'
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projClassifier: ProjClassifier
  projClassifierId: Scalars['BigInt']
  projRepo: ProjRepo
  projRepoId: Scalars['BigInt']
}

export type ProjRepoAndProjClassifierConnection = {
  __typename?: 'ProjRepoAndProjClassifierConnection'
  edges: Array<ProjRepoAndProjClassifierEdge>
  pageInfo: PageInfo
}

export type ProjRepoAndProjClassifierDeleteResponse = {
  __typename?: 'ProjRepoAndProjClassifierDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndProjClassifier>
}

export type ProjRepoAndProjClassifierEdge = {
  __typename?: 'ProjRepoAndProjClassifierEdge'
  cursor: Scalars['String']
  node: ProjRepoAndProjClassifier
}

export type ProjRepoAndProjClassifierFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjRepoAndProjClassifierFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProjRepoAndProjClassifierFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjRepoAndProjClassifierFilter>>
  projClassifierId?: InputMaybe<BigIntFilter>
  projRepoId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndProjClassifierInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  projClassifierId?: InputMaybe<Scalars['BigInt']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
}

export type ProjRepoAndProjClassifierInsertResponse = {
  __typename?: 'ProjRepoAndProjClassifierInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndProjClassifier>
}

export type ProjRepoAndProjClassifierOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  projClassifierId?: InputMaybe<OrderByDirection>
  projRepoId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndProjClassifierUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  projClassifierId?: InputMaybe<Scalars['BigInt']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
}

export type ProjRepoAndProjClassifierUpdateResponse = {
  __typename?: 'ProjRepoAndProjClassifierUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndProjClassifier>
}

export type ProjRepoAndSbotLinCompany = Node & {
  __typename?: 'ProjRepoAndSbotLinCompany'
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projRepo: ProjRepo
  projRepoId: Scalars['BigInt']
  sbotLinCompany: SbotLinCompany
  sbotLinCompanyId: Scalars['BigInt']
}

export type ProjRepoAndSbotLinCompanyConnection = {
  __typename?: 'ProjRepoAndSbotLinCompanyConnection'
  edges: Array<ProjRepoAndSbotLinCompanyEdge>
  pageInfo: PageInfo
}

export type ProjRepoAndSbotLinCompanyDeleteResponse = {
  __typename?: 'ProjRepoAndSbotLinCompanyDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinCompany>
}

export type ProjRepoAndSbotLinCompanyEdge = {
  __typename?: 'ProjRepoAndSbotLinCompanyEdge'
  cursor: Scalars['String']
  node: ProjRepoAndSbotLinCompany
}

export type ProjRepoAndSbotLinCompanyFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjRepoAndSbotLinCompanyFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjRepoAndSbotLinCompanyFilter>>
  projRepoId?: InputMaybe<BigIntFilter>
  sbotLinCompanyId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndSbotLinCompanyInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
  sbotLinCompanyId?: InputMaybe<Scalars['BigInt']>
}

export type ProjRepoAndSbotLinCompanyInsertResponse = {
  __typename?: 'ProjRepoAndSbotLinCompanyInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinCompany>
}

export type ProjRepoAndSbotLinCompanyOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  projRepoId?: InputMaybe<OrderByDirection>
  sbotLinCompanyId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndSbotLinCompanyUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
  sbotLinCompanyId?: InputMaybe<Scalars['BigInt']>
}

export type ProjRepoAndSbotLinCompanyUpdateResponse = {
  __typename?: 'ProjRepoAndSbotLinCompanyUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinCompany>
}

export type ProjRepoAndSbotLinProfile = Node & {
  __typename?: 'ProjRepoAndSbotLinProfile'
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projRepo: ProjRepo
  projRepoId: Scalars['BigInt']
  sbotLinProfile: SbotLinProfile
  sbotLinProfileId: Scalars['BigInt']
}

export type ProjRepoAndSbotLinProfileConnection = {
  __typename?: 'ProjRepoAndSbotLinProfileConnection'
  edges: Array<ProjRepoAndSbotLinProfileEdge>
  pageInfo: PageInfo
}

export type ProjRepoAndSbotLinProfileDeleteResponse = {
  __typename?: 'ProjRepoAndSbotLinProfileDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinProfile>
}

export type ProjRepoAndSbotLinProfileEdge = {
  __typename?: 'ProjRepoAndSbotLinProfileEdge'
  cursor: Scalars['String']
  node: ProjRepoAndSbotLinProfile
}

export type ProjRepoAndSbotLinProfileFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjRepoAndSbotLinProfileFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjRepoAndSbotLinProfileFilter>>
  projRepoId?: InputMaybe<BigIntFilter>
  sbotLinProfileId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndSbotLinProfileInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
  sbotLinProfileId?: InputMaybe<Scalars['BigInt']>
}

export type ProjRepoAndSbotLinProfileInsertResponse = {
  __typename?: 'ProjRepoAndSbotLinProfileInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinProfile>
}

export type ProjRepoAndSbotLinProfileOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  projRepoId?: InputMaybe<OrderByDirection>
  sbotLinProfileId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndSbotLinProfileUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
  sbotLinProfileId?: InputMaybe<Scalars['BigInt']>
}

export type ProjRepoAndSbotLinProfileUpdateResponse = {
  __typename?: 'ProjRepoAndSbotLinProfileUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinProfile>
}

export type ProjRepoConnection = {
  __typename?: 'ProjRepoConnection'
  edges: Array<ProjRepoEdge>
  pageInfo: PageInfo
}

export type ProjRepoDeleteResponse = {
  __typename?: 'ProjRepoDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepo>
}

export type ProjRepoEdge = {
  __typename?: 'ProjRepoEdge'
  cursor: Scalars['String']
  node: ProjRepo
}

export type ProjRepoFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjRepoFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  gthbRepoId?: InputMaybe<BigIntFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProjRepoFilter>
  note?: InputMaybe<StringFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjRepoFilter>>
  projRepoId?: InputMaybe<BigIntFilter>
}

export type ProjRepoInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
  note?: InputMaybe<Scalars['String']>
}

export type ProjRepoInsertResponse = {
  __typename?: 'ProjRepoInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepo>
}

export type ProjRepoMetadata = Node & {
  __typename?: 'ProjRepoMetadata'
  algoHnEli5: Scalars['String']
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projRepo: ProjRepo
  projRepoId: Scalars['BigInt']
  projRepoMetadataId: Scalars['BigInt']
  repoEli5: Scalars['String']
}

export type ProjRepoMetadataConnection = {
  __typename?: 'ProjRepoMetadataConnection'
  edges: Array<ProjRepoMetadataEdge>
  pageInfo: PageInfo
}

export type ProjRepoMetadataDeleteResponse = {
  __typename?: 'ProjRepoMetadataDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoMetadata>
}

export type ProjRepoMetadataEdge = {
  __typename?: 'ProjRepoMetadataEdge'
  cursor: Scalars['String']
  node: ProjRepoMetadata
}

export type ProjRepoMetadataFilter = {
  algoHnEli5?: InputMaybe<StringFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjRepoMetadataFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProjRepoMetadataFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjRepoMetadataFilter>>
  projRepoId?: InputMaybe<BigIntFilter>
  projRepoMetadataId?: InputMaybe<BigIntFilter>
  repoEli5?: InputMaybe<StringFilter>
}

export type ProjRepoMetadataInsertInput = {
  algoHnEli5?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
  repoEli5?: InputMaybe<Scalars['String']>
}

export type ProjRepoMetadataInsertResponse = {
  __typename?: 'ProjRepoMetadataInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoMetadata>
}

export type ProjRepoMetadataOrderBy = {
  algoHnEli5?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  projRepoId?: InputMaybe<OrderByDirection>
  projRepoMetadataId?: InputMaybe<OrderByDirection>
  repoEli5?: InputMaybe<OrderByDirection>
}

export type ProjRepoMetadataUpdateInput = {
  algoHnEli5?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  projRepoId?: InputMaybe<Scalars['BigInt']>
  repoEli5?: InputMaybe<Scalars['String']>
}

export type ProjRepoMetadataUpdateResponse = {
  __typename?: 'ProjRepoMetadataUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoMetadata>
}

export type ProjRepoOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  gthbRepoId?: InputMaybe<OrderByDirection>
  note?: InputMaybe<OrderByDirection>
  projRepoId?: InputMaybe<OrderByDirection>
}

export type ProjRepoUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  gthbRepoId?: InputMaybe<Scalars['BigInt']>
  note?: InputMaybe<Scalars['String']>
}

export type ProjRepoUpdateResponse = {
  __typename?: 'ProjRepoUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<ProjRepo>
}

/** The root type for querying data */
export type Query = {
  __typename?: 'Query'
  /** A pagable collection of type `AlgoHnCommentAndAlgoHnTag` */
  algoHnCommentAndAlgoHnTagCollection?: Maybe<AlgoHnCommentAndAlgoHnTagConnection>
  /** A pagable collection of type `AlgoHnComment` */
  algoHnCommentCollection?: Maybe<AlgoHnCommentConnection>
  /** A pagable collection of type `AlgoHnQuery` */
  algoHnQueryCollection?: Maybe<AlgoHnQueryConnection>
  /** A pagable collection of type `AlgoHnStoryAndAlgoHnTag` */
  algoHnStoryAndAlgoHnTagCollection?: Maybe<AlgoHnStoryAndAlgoHnTagConnection>
  /** A pagable collection of type `AlgoHnStory` */
  algoHnStoryCollection?: Maybe<AlgoHnStoryConnection>
  /** A pagable collection of type `AlgoHnTag` */
  algoHnTagCollection?: Maybe<AlgoHnTagConnection>
  fIsGthbRepoBookmarked?: Maybe<Scalars['Boolean']>
  /** A pagable collection of type `GthbForkHist` */
  gthbForkHistCollection?: Maybe<GthbForkHistConnection>
  /** A pagable collection of type `GthbIssueHist` */
  gthbIssueHistCollection?: Maybe<GthbIssueHistConnection>
  /** A pagable collection of type `GthbLang` */
  gthbLangCollection?: Maybe<GthbLangConnection>
  /** A pagable collection of type `GthbOrg` */
  gthbOrgCollection?: Maybe<GthbOrgConnection>
  /** A pagable collection of type `GthbOwner` */
  gthbOwnerCollection?: Maybe<GthbOwnerConnection>
  /** A pagable collection of type `GthbRepoAndGthbLang` */
  gthbRepoAndGthbLangCollection?: Maybe<GthbRepoAndGthbLangConnection>
  /** A pagable collection of type `GthbRepoAndGthbRepoTopic` */
  gthbRepoAndGthbRepoTopicCollection?: Maybe<GthbRepoAndGthbRepoTopicConnection>
  /** A pagable collection of type `GthbRepo` */
  gthbRepoCollection?: Maybe<GthbRepoConnection>
  /** A pagable collection of type `GthbRepoContr` */
  gthbRepoContrCollection?: Maybe<GthbRepoContrConnection>
  /** A pagable collection of type `GthbRepoTopic` */
  gthbRepoTopicCollection?: Maybe<GthbRepoTopicConnection>
  /** A pagable collection of type `GthbStarHist` */
  gthbStarHistCollection?: Maybe<GthbStarHistConnection>
  /** A pagable collection of type `GthbTrending` */
  gthbTrendingCollection?: Maybe<GthbTrendingConnection>
  /** A pagable collection of type `GthbUser` */
  gthbUserCollection?: Maybe<GthbUserConnection>
  helloWorld: Scalars['String']
  /** A pagable collection of type `Instance1` */
  instance1Collection?: Maybe<Instance1Connection>
  /** A pagable collection of type `Instance2` */
  instance2Collection?: Maybe<Instance2Connection>
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>
  /** A pagable collection of type `PinnedProjBookmark` */
  pinnedProjBookmarkCollection?: Maybe<PinnedProjBookmarkConnection>
  /** A pagable collection of type `ProjBookmark` */
  projBookmarkCollection?: Maybe<ProjBookmarkConnection>
  /** A pagable collection of type `ProjCatAndProjBookmark` */
  projCatAndProjBookmarkCollection?: Maybe<ProjCatAndProjBookmarkConnection>
  /** A pagable collection of type `ProjCat` */
  projCatCollection?: Maybe<ProjCatConnection>
  /** A pagable collection of type `ProjClassifier` */
  projClassifierCollection?: Maybe<ProjClassifierConnection>
  /** A pagable collection of type `ProjRepoAndAlgoHnQuery` */
  projRepoAndAlgoHnQueryCollection?: Maybe<ProjRepoAndAlgoHnQueryConnection>
  /** A pagable collection of type `ProjRepoAndProjClassifier` */
  projRepoAndProjClassifierCollection?: Maybe<ProjRepoAndProjClassifierConnection>
  /** A pagable collection of type `ProjRepoAndSbotLinCompany` */
  projRepoAndSbotLinCompanyCollection?: Maybe<ProjRepoAndSbotLinCompanyConnection>
  /** A pagable collection of type `ProjRepoAndSbotLinProfile` */
  projRepoAndSbotLinProfileCollection?: Maybe<ProjRepoAndSbotLinProfileConnection>
  /** A pagable collection of type `ProjRepo` */
  projRepoCollection?: Maybe<ProjRepoConnection>
  /** A pagable collection of type `ProjRepoMetadata` */
  projRepoMetadataCollection?: Maybe<ProjRepoMetadataConnection>
  /** A pagable collection of type `SbotLinCompany` */
  sbotLinCompanyCollection?: Maybe<SbotLinCompanyConnection>
  /** A pagable collection of type `SbotLinProfile` */
  sbotLinProfileCollection?: Maybe<SbotLinProfileConnection>
  /** A pagable collection of type `UserAdmin` */
  userAdminCollection?: Maybe<UserAdminConnection>
  /** A pagable collection of type `UserApiKey` */
  userApiKeyCollection?: Maybe<UserApiKeyConnection>
  /** A pagable collection of type `UserWhitelist` */
  userWhitelistCollection?: Maybe<UserWhitelistConnection>
}

/** The root type for querying data */
export type QueryAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnCommentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnCommentFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnCommentOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnQueryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnQueryFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnQueryOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnStoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnStoryFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnStoryOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AlgoHnTagFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AlgoHnTagOrderBy>>
}

/** The root type for querying data */
export type QueryFIsGthbRepoBookmarkedArgs = {
  githubreponame?: InputMaybe<Scalars['String']>
}

/** The root type for querying data */
export type QueryGthbForkHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbForkHistFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbForkHistOrderBy>>
}

/** The root type for querying data */
export type QueryGthbIssueHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbIssueHistFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbIssueHistOrderBy>>
}

/** The root type for querying data */
export type QueryGthbLangCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbLangFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbLangOrderBy>>
}

/** The root type for querying data */
export type QueryGthbOrgCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbOrgFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbOrgOrderBy>>
}

/** The root type for querying data */
export type QueryGthbOwnerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbOwnerFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbOwnerOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoAndGthbLangCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoAndGthbLangFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoAndGthbLangOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoAndGthbRepoTopicCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoAndGthbRepoTopicOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoContrCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoContrFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoContrOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoTopicCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbRepoTopicFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbRepoTopicOrderBy>>
}

/** The root type for querying data */
export type QueryGthbStarHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbStarHistFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbStarHistOrderBy>>
}

/** The root type for querying data */
export type QueryGthbTrendingCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbTrendingFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbTrendingOrderBy>>
}

/** The root type for querying data */
export type QueryGthbUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<GthbUserFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GthbUserOrderBy>>
}

/** The root type for querying data */
export type QueryInstance1CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<Instance1Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<Instance1OrderBy>>
}

/** The root type for querying data */
export type QueryInstance2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<Instance2Filter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<Instance2OrderBy>>
}

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
}

/** The root type for querying data */
export type QueryPinnedProjBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<PinnedProjBookmarkFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PinnedProjBookmarkOrderBy>>
}

/** The root type for querying data */
export type QueryProjBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjBookmarkFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjBookmarkOrderBy>>
}

/** The root type for querying data */
export type QueryProjCatAndProjBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjCatAndProjBookmarkOrderBy>>
}

/** The root type for querying data */
export type QueryProjCatCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjCatFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjCatOrderBy>>
}

/** The root type for querying data */
export type QueryProjClassifierCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjClassifierFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjClassifierOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndAlgoHnQueryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndAlgoHnQueryOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndProjClassifierCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndProjClassifierOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndSbotLinCompanyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinCompanyOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndSbotLinProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinProfileOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoMetadataCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoMetadataFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoMetadataOrderBy>>
}

/** The root type for querying data */
export type QuerySbotLinCompanyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<SbotLinCompanyFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SbotLinCompanyOrderBy>>
}

/** The root type for querying data */
export type QuerySbotLinProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<SbotLinProfileFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SbotLinProfileOrderBy>>
}

/** The root type for querying data */
export type QueryUserAdminCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<UserAdminFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserAdminOrderBy>>
}

/** The root type for querying data */
export type QueryUserApiKeyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<UserApiKeyFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserApiKeyOrderBy>>
}

/** The root type for querying data */
export type QueryUserWhitelistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<UserWhitelistFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserWhitelistOrderBy>>
}

export type RepositoryInput = {
  name: Scalars['String']
  owner: Scalars['String']
}

export type SbotLinCompany = Node & {
  __typename?: 'SbotLinCompany'
  about?: Maybe<Scalars['String']>
  createdAt: Scalars['Datetime']
  employeesAmountInLinkedin: Scalars['BigInt']
  followers: Scalars['BigInt']
  headquarters: Scalars['String']
  logo: Scalars['String']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  projRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyConnection
  sbotLinCompanyId: Scalars['BigInt']
  sbotLinCompanyImage: Scalars['String']
  sbotLinCompanyName: Scalars['String']
  sbotLinCompanyType?: Maybe<Scalars['String']>
  sbotLinCompanyUrl: Scalars['String']
  sphere?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
}

export type SbotLinCompanyProjRepoAndSbotLinCompanyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinCompanyOrderBy>>
}

export type SbotLinCompanyConnection = {
  __typename?: 'SbotLinCompanyConnection'
  edges: Array<SbotLinCompanyEdge>
  pageInfo: PageInfo
}

export type SbotLinCompanyDeleteResponse = {
  __typename?: 'SbotLinCompanyDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<SbotLinCompany>
}

export type SbotLinCompanyEdge = {
  __typename?: 'SbotLinCompanyEdge'
  cursor: Scalars['String']
  node: SbotLinCompany
}

export type SbotLinCompanyFilter = {
  about?: InputMaybe<StringFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<SbotLinCompanyFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  employeesAmountInLinkedin?: InputMaybe<BigIntFilter>
  followers?: InputMaybe<BigIntFilter>
  headquarters?: InputMaybe<StringFilter>
  logo?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<SbotLinCompanyFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<SbotLinCompanyFilter>>
  sbotLinCompanyId?: InputMaybe<BigIntFilter>
  sbotLinCompanyImage?: InputMaybe<StringFilter>
  sbotLinCompanyName?: InputMaybe<StringFilter>
  sbotLinCompanyType?: InputMaybe<StringFilter>
  sbotLinCompanyUrl?: InputMaybe<StringFilter>
  sphere?: InputMaybe<StringFilter>
  website?: InputMaybe<StringFilter>
}

export type SbotLinCompanyInsertInput = {
  about?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  employeesAmountInLinkedin?: InputMaybe<Scalars['BigInt']>
  followers?: InputMaybe<Scalars['BigInt']>
  headquarters?: InputMaybe<Scalars['String']>
  logo?: InputMaybe<Scalars['String']>
  sbotLinCompanyImage?: InputMaybe<Scalars['String']>
  sbotLinCompanyName?: InputMaybe<Scalars['String']>
  sbotLinCompanyType?: InputMaybe<Scalars['String']>
  sbotLinCompanyUrl?: InputMaybe<Scalars['String']>
  sphere?: InputMaybe<Scalars['String']>
  website?: InputMaybe<Scalars['String']>
}

export type SbotLinCompanyInsertResponse = {
  __typename?: 'SbotLinCompanyInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<SbotLinCompany>
}

export type SbotLinCompanyOrderBy = {
  about?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  employeesAmountInLinkedin?: InputMaybe<OrderByDirection>
  followers?: InputMaybe<OrderByDirection>
  headquarters?: InputMaybe<OrderByDirection>
  logo?: InputMaybe<OrderByDirection>
  sbotLinCompanyId?: InputMaybe<OrderByDirection>
  sbotLinCompanyImage?: InputMaybe<OrderByDirection>
  sbotLinCompanyName?: InputMaybe<OrderByDirection>
  sbotLinCompanyType?: InputMaybe<OrderByDirection>
  sbotLinCompanyUrl?: InputMaybe<OrderByDirection>
  sphere?: InputMaybe<OrderByDirection>
  website?: InputMaybe<OrderByDirection>
}

export type SbotLinCompanyUpdateInput = {
  about?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  employeesAmountInLinkedin?: InputMaybe<Scalars['BigInt']>
  followers?: InputMaybe<Scalars['BigInt']>
  headquarters?: InputMaybe<Scalars['String']>
  logo?: InputMaybe<Scalars['String']>
  sbotLinCompanyImage?: InputMaybe<Scalars['String']>
  sbotLinCompanyName?: InputMaybe<Scalars['String']>
  sbotLinCompanyType?: InputMaybe<Scalars['String']>
  sbotLinCompanyUrl?: InputMaybe<Scalars['String']>
  sphere?: InputMaybe<Scalars['String']>
  website?: InputMaybe<Scalars['String']>
}

export type SbotLinCompanyUpdateResponse = {
  __typename?: 'SbotLinCompanyUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<SbotLinCompany>
}

export type SbotLinProfile = Node & {
  __typename?: 'SbotLinProfile'
  about?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  createdAt: Scalars['Datetime']
  currentCompanyLink?: Maybe<Scalars['String']>
  currentCompanyName?: Maybe<Scalars['String']>
  educationDetails?: Maybe<Scalars['String']>
  followers?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  position?: Maybe<Scalars['String']>
  projRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileConnection
  sbotLinProfileFollowing?: Maybe<Scalars['String']>
  sbotLinProfileId: Scalars['BigInt']
  sbotLinProfileName: Scalars['String']
  sbotLinProfileUrl: Scalars['String']
}

export type SbotLinProfileProjRepoAndSbotLinProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinProfileOrderBy>>
}

export type SbotLinProfileConnection = {
  __typename?: 'SbotLinProfileConnection'
  edges: Array<SbotLinProfileEdge>
  pageInfo: PageInfo
}

export type SbotLinProfileDeleteResponse = {
  __typename?: 'SbotLinProfileDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<SbotLinProfile>
}

export type SbotLinProfileEdge = {
  __typename?: 'SbotLinProfileEdge'
  cursor: Scalars['String']
  node: SbotLinProfile
}

export type SbotLinProfileFilter = {
  about?: InputMaybe<StringFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<SbotLinProfileFilter>>
  avatar?: InputMaybe<StringFilter>
  city?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  currentCompanyLink?: InputMaybe<StringFilter>
  currentCompanyName?: InputMaybe<StringFilter>
  educationDetails?: InputMaybe<StringFilter>
  followers?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<SbotLinProfileFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<SbotLinProfileFilter>>
  position?: InputMaybe<StringFilter>
  sbotLinProfileFollowing?: InputMaybe<StringFilter>
  sbotLinProfileId?: InputMaybe<BigIntFilter>
  sbotLinProfileName?: InputMaybe<StringFilter>
  sbotLinProfileUrl?: InputMaybe<StringFilter>
}

export type SbotLinProfileInsertInput = {
  about?: InputMaybe<Scalars['String']>
  avatar?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  currentCompanyLink?: InputMaybe<Scalars['String']>
  currentCompanyName?: InputMaybe<Scalars['String']>
  educationDetails?: InputMaybe<Scalars['String']>
  followers?: InputMaybe<Scalars['String']>
  position?: InputMaybe<Scalars['String']>
  sbotLinProfileFollowing?: InputMaybe<Scalars['String']>
  sbotLinProfileName?: InputMaybe<Scalars['String']>
  sbotLinProfileUrl?: InputMaybe<Scalars['String']>
}

export type SbotLinProfileInsertResponse = {
  __typename?: 'SbotLinProfileInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<SbotLinProfile>
}

export type SbotLinProfileOrderBy = {
  about?: InputMaybe<OrderByDirection>
  avatar?: InputMaybe<OrderByDirection>
  city?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  currentCompanyLink?: InputMaybe<OrderByDirection>
  currentCompanyName?: InputMaybe<OrderByDirection>
  educationDetails?: InputMaybe<OrderByDirection>
  followers?: InputMaybe<OrderByDirection>
  position?: InputMaybe<OrderByDirection>
  sbotLinProfileFollowing?: InputMaybe<OrderByDirection>
  sbotLinProfileId?: InputMaybe<OrderByDirection>
  sbotLinProfileName?: InputMaybe<OrderByDirection>
  sbotLinProfileUrl?: InputMaybe<OrderByDirection>
}

export type SbotLinProfileUpdateInput = {
  about?: InputMaybe<Scalars['String']>
  avatar?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  currentCompanyLink?: InputMaybe<Scalars['String']>
  currentCompanyName?: InputMaybe<Scalars['String']>
  educationDetails?: InputMaybe<Scalars['String']>
  followers?: InputMaybe<Scalars['String']>
  position?: InputMaybe<Scalars['String']>
  sbotLinProfileFollowing?: InputMaybe<Scalars['String']>
  sbotLinProfileName?: InputMaybe<Scalars['String']>
  sbotLinProfileUrl?: InputMaybe<Scalars['String']>
}

export type SbotLinProfileUpdateResponse = {
  __typename?: 'SbotLinProfileUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<SbotLinProfile>
}

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  ilike?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  iregex?: InputMaybe<Scalars['String']>
  is?: InputMaybe<FilterIs>
  like?: InputMaybe<Scalars['String']>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  neq?: InputMaybe<Scalars['String']>
  regex?: InputMaybe<Scalars['String']>
  startsWith?: InputMaybe<Scalars['String']>
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

export type UserAdmin = Node & {
  __typename?: 'UserAdmin'
  authUsersId: Scalars['UUID']
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
}

export type UserAdminConnection = {
  __typename?: 'UserAdminConnection'
  edges: Array<UserAdminEdge>
  pageInfo: PageInfo
}

export type UserAdminDeleteResponse = {
  __typename?: 'UserAdminDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<UserAdmin>
}

export type UserAdminEdge = {
  __typename?: 'UserAdminEdge'
  cursor: Scalars['String']
  node: UserAdmin
}

export type UserAdminFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UserAdminFilter>>
  authUsersId?: InputMaybe<UuidFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<UserAdminFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UserAdminFilter>>
}

export type UserAdminInsertInput = {
  authUsersId?: InputMaybe<Scalars['UUID']>
  createdAt?: InputMaybe<Scalars['Datetime']>
}

export type UserAdminInsertResponse = {
  __typename?: 'UserAdminInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<UserAdmin>
}

export type UserAdminOrderBy = {
  authUsersId?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
}

export type UserAdminUpdateInput = {
  authUsersId?: InputMaybe<Scalars['UUID']>
  createdAt?: InputMaybe<Scalars['Datetime']>
}

export type UserAdminUpdateResponse = {
  __typename?: 'UserAdminUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<UserAdmin>
}

export type UserApiKey = Node & {
  __typename?: 'UserApiKey'
  authUsersId: Scalars['UUID']
  createdAt: Scalars['Datetime']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  userApiKey: Scalars['UUID']
  userApiKeyId: Scalars['BigInt']
}

export type UserApiKeyConnection = {
  __typename?: 'UserApiKeyConnection'
  edges: Array<UserApiKeyEdge>
  pageInfo: PageInfo
}

export type UserApiKeyDeleteResponse = {
  __typename?: 'UserApiKeyDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<UserApiKey>
}

export type UserApiKeyEdge = {
  __typename?: 'UserApiKeyEdge'
  cursor: Scalars['String']
  node: UserApiKey
}

export type UserApiKeyFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UserApiKeyFilter>>
  authUsersId?: InputMaybe<UuidFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<UserApiKeyFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UserApiKeyFilter>>
  userApiKey?: InputMaybe<UuidFilter>
  userApiKeyId?: InputMaybe<BigIntFilter>
}

export type UserApiKeyInsertInput = {
  authUsersId?: InputMaybe<Scalars['UUID']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  userApiKey?: InputMaybe<Scalars['UUID']>
}

export type UserApiKeyInsertResponse = {
  __typename?: 'UserApiKeyInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<UserApiKey>
}

export type UserApiKeyOrderBy = {
  authUsersId?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  userApiKey?: InputMaybe<OrderByDirection>
  userApiKeyId?: InputMaybe<OrderByDirection>
}

export type UserApiKeyUpdateInput = {
  authUsersId?: InputMaybe<Scalars['UUID']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  userApiKey?: InputMaybe<Scalars['UUID']>
}

export type UserApiKeyUpdateResponse = {
  __typename?: 'UserApiKeyUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<UserApiKey>
}

export type UserWhitelist = Node & {
  __typename?: 'UserWhitelist'
  createdAt?: Maybe<Scalars['Datetime']>
  kind: Scalars['String']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  userWhitelistId: Scalars['BigInt']
  userWhitelistValue?: Maybe<Scalars['String']>
}

export type UserWhitelistConnection = {
  __typename?: 'UserWhitelistConnection'
  edges: Array<UserWhitelistEdge>
  pageInfo: PageInfo
}

export type UserWhitelistDeleteResponse = {
  __typename?: 'UserWhitelistDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<UserWhitelist>
}

export type UserWhitelistEdge = {
  __typename?: 'UserWhitelistEdge'
  cursor: Scalars['String']
  node: UserWhitelist
}

export type UserWhitelistFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UserWhitelistFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  kind?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<UserWhitelistFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UserWhitelistFilter>>
  userWhitelistId?: InputMaybe<BigIntFilter>
  userWhitelistValue?: InputMaybe<StringFilter>
}

export type UserWhitelistInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  kind?: InputMaybe<Scalars['String']>
  userWhitelistValue?: InputMaybe<Scalars['String']>
}

export type UserWhitelistInsertResponse = {
  __typename?: 'UserWhitelistInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<UserWhitelist>
}

export type UserWhitelistOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  kind?: InputMaybe<OrderByDirection>
  userWhitelistId?: InputMaybe<OrderByDirection>
  userWhitelistValue?: InputMaybe<OrderByDirection>
}

export type UserWhitelistUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  kind?: InputMaybe<Scalars['String']>
  userWhitelistValue?: InputMaybe<Scalars['String']>
}

export type UserWhitelistUpdateResponse = {
  __typename?: 'UserWhitelistUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']
  /** Array of records impacted by the mutation */
  records: Array<UserWhitelist>
}

export type BookmarkIdsQueryVariables = Exact<{
  userId: Scalars['UUID']
  category?: InputMaybe<Scalars['BigInt']>
  projectId?: InputMaybe<Scalars['BigInt']>
}>

export type BookmarkIdsQuery = {
  __typename?: 'Query'
  projBookmarkCollection?: {
    __typename?: 'ProjBookmarkConnection'
    edges: Array<{
      __typename?: 'ProjBookmarkEdge'
      node: {
        __typename?: 'ProjBookmark'
        projBookmarkId: any
        projCatAndProjBookmarkCollection: {
          __typename?: 'ProjCatAndProjBookmarkConnection'
          edges: Array<{
            __typename?: 'ProjCatAndProjBookmarkEdge'
            node: {
              __typename?: 'ProjCatAndProjBookmark'
              projCat: { __typename?: 'ProjCat'; projCatId: any; title: string }
            }
          }>
        }
        projRepo: {
          __typename?: 'ProjRepo'
          projRepoId: any
          note?: string | null
          gthbRepo: {
            __typename?: 'GthbRepo'
            gthbRepoName: string
            gthbOwner: { __typename?: 'GthbOwner'; gthbOwnerLogin: string }
          }
        }
      }
    }>
  } | null
}

export type FilteredBookmarksQueryVariables = Exact<{
  userId: Scalars['UUID']
  categoryId?: InputMaybe<Scalars['BigInt']>
  projectId?: InputMaybe<Scalars['BigInt']>
  first?: InputMaybe<Scalars['Int']>
  after?: InputMaybe<Scalars['Cursor']>
}>

export type FilteredBookmarksQuery = {
  __typename?: 'Query'
  projBookmarkCollection?: {
    __typename?: 'ProjBookmarkConnection'
    edges: Array<{
      __typename?: 'ProjBookmarkEdge'
      node: {
        __typename?: 'ProjBookmark'
        projBookmarkId: any
        projCatAndProjBookmarkCollection: {
          __typename?: 'ProjCatAndProjBookmarkConnection'
          edges: Array<{
            __typename?: 'ProjCatAndProjBookmarkEdge'
            node: {
              __typename?: 'ProjCatAndProjBookmark'
              projCatId: any
              projCat: { __typename?: 'ProjCat'; projCatId: any; title: string }
            }
          }>
        }
        projRepo: {
          __typename?: 'ProjRepo'
          projRepoId: any
          note?: string | null
          gthbRepo: {
            __typename?: 'GthbRepo'
            gthbRepoId: any
            gthbRepoName: string
            gthbRepoUrl: string
            stargazerCount: any
            gthbOwner: { __typename?: 'GthbOwner'; gthbOwnerLogin: string }
            gthbStarHistCollection: {
              __typename?: 'GthbStarHistConnection'
              edges: Array<{
                __typename?: 'GthbStarHistEdge'
                node: { __typename?: 'GthbStarHist'; amount: any }
              }>
            }
            gthbForkHistCollection: {
              __typename?: 'GthbForkHistConnection'
              edges: Array<{
                __typename?: 'GthbForkHistEdge'
                node: { __typename?: 'GthbForkHist'; amount: any }
              }>
            }
          }
        }
      }
    }>
    pageInfo: { __typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null }
  } | null
}

export type ProjectDetailsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['BigInt']>
}>

export type ProjectDetailsQuery = {
  __typename?: 'Query'
  projRepoCollection?: {
    __typename?: 'ProjRepoConnection'
    edges: Array<{
      __typename?: 'ProjRepoEdge'
      node: {
        __typename?: 'ProjRepo'
        projRepoId: any
        projRepoAndAlgoHnQueryCollection: {
          __typename?: 'ProjRepoAndAlgoHnQueryConnection'
          edges: Array<{
            __typename?: 'ProjRepoAndAlgoHnQueryEdge'
            node: {
              __typename?: 'ProjRepoAndAlgoHnQuery'
              algoHnQuery: { __typename?: 'AlgoHnQuery'; query: string }
            }
          }>
        }
        projRepo: { __typename?: 'ProjRepoMetadata'; algoHnEli5: string; repoEli5: string }
        gthbRepo: {
          __typename?: 'GthbRepo'
          gthbRepoId: any
          gthbRepoName: string
          gthbRepoDescription?: string | null
          stargazerCount: any
          issuesTotalCount: any
          forkCount: any
          pullRequestsTotalCount: any
          gthbRepoUrl: string
          homepageUrl?: string | null
          gthbStarHistCollection: {
            __typename?: 'GthbStarHistConnection'
            edges: Array<{
              __typename?: 'GthbStarHistEdge'
              node: { __typename?: 'GthbStarHist'; amount: any }
            }>
          }
          gthbForkHistCollection: {
            __typename?: 'GthbForkHistConnection'
            edges: Array<{
              __typename?: 'GthbForkHistEdge'
              node: { __typename?: 'GthbForkHist'; amount: any }
            }>
          }
          gthbOwner: { __typename?: 'GthbOwner'; gthbOwnerType: any; gthbOwnerLogin: string }
          gthbRepoAndGthbLangCollection: {
            __typename?: 'GthbRepoAndGthbLangConnection'
            edges: Array<{
              __typename?: 'GthbRepoAndGthbLangEdge'
              node: {
                __typename?: 'GthbRepoAndGthbLang'
                gthbLang: { __typename?: 'GthbLang'; color: string; gthbLangName: string }
              }
            }>
          }
        }
      }
    }>
  } | null
}

export type ProjectIdsQueryVariables = Exact<{
  orderBy: ProjRepoOrderBy
  filter: ProjRepoFilter
}>

export type ProjectIdsQuery = {
  __typename?: 'Query'
  projRepoCollection?: {
    __typename?: 'ProjRepoConnection'
    edges: Array<{
      __typename?: 'ProjRepoEdge'
      node: { __typename?: 'ProjRepo'; projRepoId: any }
    }>
  } | null
}

export type TrendingProjectsQueryVariables = Exact<{
  orderBy: GthbTrendingOrderBy
  filter: GthbTrendingFilter
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
}>

export type TrendingProjectsQuery = {
  __typename?: 'Query'
  gthbTrendingCollection?: {
    __typename?: 'GthbTrendingConnection'
    edges: Array<{
      __typename?: 'GthbTrendingEdge'
      node: {
        __typename?: 'GthbTrending'
        gthbRepoId: any
        dateRange: any
        lang?: string | null
        gthbRepo: {
          __typename?: 'GthbRepo'
          gthbRepoId: any
          gthbRepoName: string
          gthbRepoDescription?: string | null
          stargazerCount: any
          issuesTotalCount: any
          forkCount: any
          pullRequestsTotalCount: any
          gthbRepoUrl: string
          homepageUrl?: string | null
          gthbStarHistCollection: {
            __typename?: 'GthbStarHistConnection'
            edges: Array<{
              __typename?: 'GthbStarHistEdge'
              node: { __typename?: 'GthbStarHist'; amount: any }
            }>
          }
          gthbForkHistCollection: {
            __typename?: 'GthbForkHistConnection'
            edges: Array<{
              __typename?: 'GthbForkHistEdge'
              node: { __typename?: 'GthbForkHist'; amount: any }
            }>
          }
          gthbOwner: {
            __typename?: 'GthbOwner'
            avatarUrl: string
            gthbOwnerType: any
            gthbOwnerLogin: string
          }
        }
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

export const BookmarkIdsDocument = gql`
  query BookmarkIds($userId: UUID!, $category: BigInt, $projectId: BigInt) {
    projBookmarkCollection(
      filter: {
        authUsersId: { eq: $userId }
        projBookmarkId: { eq: $category }
        projRepoId: { eq: $projectId }
      }
    ) {
      edges {
        node {
          projCatAndProjBookmarkCollection {
            edges {
              node {
                projCat {
                  projCatId
                  title
                }
              }
            }
          }
          projBookmarkId
          projRepo {
            projRepoId
            note
            gthbRepo {
              gthbRepoName
              gthbOwner {
                gthbOwnerLogin
              }
            }
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
  query FilteredBookmarks(
    $userId: UUID!
    $categoryId: BigInt
    $projectId: BigInt
    $first: Int
    $after: Cursor
  ) {
    projBookmarkCollection(
      filter: {
        authUsersId: { eq: $userId }
        projBookmarkId: { eq: $categoryId }
        projRepoId: { eq: $projectId }
      }
      first: $first
      after: $after
    ) {
      edges {
        node {
          projCatAndProjBookmarkCollection {
            edges {
              node {
                projCat {
                  projCatId
                  title
                }
                projCatId
              }
            }
          }
          projBookmarkId
          projRepo {
            projRepoId
            note
            gthbRepo {
              gthbRepoId
              gthbRepoName
              gthbRepoUrl
              gthbOwner {
                gthbOwnerLogin
              }
              stargazerCount
              gthbStarHistCollection {
                edges {
                  node {
                    amount
                  }
                }
              }
              gthbForkHistCollection {
                edges {
                  node {
                    amount
                  }
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
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
  query ProjectDetails($id: BigInt) {
    projRepoCollection(filter: { projRepoId: { eq: $id } }) {
      edges {
        node {
          projRepoId
          projRepoAndAlgoHnQueryCollection {
            edges {
              node {
                algoHnQuery {
                  query
                }
              }
            }
          }
          projRepo {
            algoHnEli5
            repoEli5
          }
          gthbRepo {
            gthbRepoId
            gthbRepoName
            gthbRepoDescription
            stargazerCount
            issuesTotalCount
            forkCount
            pullRequestsTotalCount
            gthbRepoUrl
            homepageUrl
            gthbStarHistCollection {
              edges {
                node {
                  amount
                }
              }
            }
            gthbForkHistCollection {
              edges {
                node {
                  amount
                }
              }
            }
            gthbOwner {
              gthbOwnerType
              gthbOwnerLogin
            }
            gthbRepoAndGthbLangCollection {
              edges {
                node {
                  gthbLang {
                    color
                    gthbLangName
                  }
                }
              }
            }
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
export const ProjectIdsDocument = gql`
  query ProjectIds($orderBy: ProjRepoOrderBy!, $filter: ProjRepoFilter!) {
    projRepoCollection(filter: $filter, orderBy: [$orderBy]) {
      edges {
        node {
          projRepoId
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
    $orderBy: GthbTrendingOrderBy!
    $filter: GthbTrendingFilter!
    $first: Int
    $last: Int
    $after: Cursor
    $before: Cursor
  ) {
    gthbTrendingCollection(
      filter: $filter
      orderBy: [$orderBy]
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      edges {
        node {
          gthbRepoId
          gthbRepo {
            gthbRepoId
            gthbRepoName
            gthbRepoDescription
            stargazerCount
            issuesTotalCount
            forkCount
            pullRequestsTotalCount
            gthbRepoUrl
            homepageUrl
            gthbStarHistCollection {
              edges {
                node {
                  amount
                }
              }
            }
            gthbForkHistCollection {
              edges {
                node {
                  amount
                }
              }
            }
            gthbOwner {
              avatarUrl
              gthbOwnerType
              gthbOwnerLogin
            }
          }
          dateRange
          lang
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
