import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Opaque: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AlgoHnComment = Node & {
  __typename?: 'AlgoHnComment';
  algoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagConnection;
  algoHnCommentId: Scalars['BigInt']['output'];
  algoHnCommentObjectId: Scalars['BigInt']['output'];
  algoHnQuery: AlgoHnQuery;
  algoHnQueryId: Scalars['BigInt']['output'];
  author: Scalars['String']['output'];
  commentText: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  storyId: Scalars['BigInt']['output'];
  storyTitle: Scalars['String']['output'];
  storyUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};


export type AlgoHnCommentAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>;
};

export type AlgoHnCommentAndAlgoHnTag = Node & {
  __typename?: 'AlgoHnCommentAndAlgoHnTag';
  algoHnComment: AlgoHnComment;
  algoHnCommentId: Scalars['BigInt']['output'];
  algoHnTag: AlgoHnTag;
  algoHnTagId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type AlgoHnCommentAndAlgoHnTagConnection = {
  __typename?: 'AlgoHnCommentAndAlgoHnTagConnection';
  edges: Array<AlgoHnCommentAndAlgoHnTagEdge>;
  pageInfo: PageInfo;
};

export type AlgoHnCommentAndAlgoHnTagDeleteResponse = {
  __typename?: 'AlgoHnCommentAndAlgoHnTagDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnCommentAndAlgoHnTag>;
};

export type AlgoHnCommentAndAlgoHnTagEdge = {
  __typename?: 'AlgoHnCommentAndAlgoHnTagEdge';
  cursor: Scalars['String']['output'];
  node: AlgoHnCommentAndAlgoHnTag;
};

export type AlgoHnCommentAndAlgoHnTagFilter = {
  algoHnCommentId?: InputMaybe<BigIntFilter>;
  algoHnTagId?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagFilter>>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagFilter>>;
};

export type AlgoHnCommentAndAlgoHnTagInsertInput = {
  algoHnCommentId?: InputMaybe<Scalars['BigInt']['input']>;
  algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type AlgoHnCommentAndAlgoHnTagInsertResponse = {
  __typename?: 'AlgoHnCommentAndAlgoHnTagInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnCommentAndAlgoHnTag>;
};

export type AlgoHnCommentAndAlgoHnTagOrderBy = {
  algoHnCommentId?: InputMaybe<OrderByDirection>;
  algoHnTagId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
};

export type AlgoHnCommentAndAlgoHnTagUpdateInput = {
  algoHnCommentId?: InputMaybe<Scalars['BigInt']['input']>;
  algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type AlgoHnCommentAndAlgoHnTagUpdateResponse = {
  __typename?: 'AlgoHnCommentAndAlgoHnTagUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnCommentAndAlgoHnTag>;
};

export type AlgoHnCommentConnection = {
  __typename?: 'AlgoHnCommentConnection';
  edges: Array<AlgoHnCommentEdge>;
  pageInfo: PageInfo;
};

export type AlgoHnCommentDeleteResponse = {
  __typename?: 'AlgoHnCommentDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnComment>;
};

export type AlgoHnCommentEdge = {
  __typename?: 'AlgoHnCommentEdge';
  cursor: Scalars['String']['output'];
  node: AlgoHnComment;
};

export type AlgoHnCommentFilter = {
  algoHnCommentId?: InputMaybe<BigIntFilter>;
  algoHnCommentObjectId?: InputMaybe<BigIntFilter>;
  algoHnQueryId?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnCommentFilter>>;
  author?: InputMaybe<StringFilter>;
  commentText?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AlgoHnCommentFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnCommentFilter>>;
  storyId?: InputMaybe<BigIntFilter>;
  storyTitle?: InputMaybe<StringFilter>;
  storyUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type AlgoHnCommentInsertInput = {
  algoHnCommentObjectId?: InputMaybe<Scalars['BigInt']['input']>;
  algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  commentText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  storyId?: InputMaybe<Scalars['BigInt']['input']>;
  storyTitle?: InputMaybe<Scalars['String']['input']>;
  storyUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type AlgoHnCommentInsertResponse = {
  __typename?: 'AlgoHnCommentInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnComment>;
};

export type AlgoHnCommentOrderBy = {
  algoHnCommentId?: InputMaybe<OrderByDirection>;
  algoHnCommentObjectId?: InputMaybe<OrderByDirection>;
  algoHnQueryId?: InputMaybe<OrderByDirection>;
  author?: InputMaybe<OrderByDirection>;
  commentText?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  storyId?: InputMaybe<OrderByDirection>;
  storyTitle?: InputMaybe<OrderByDirection>;
  storyUrl?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type AlgoHnCommentUpdateInput = {
  algoHnCommentObjectId?: InputMaybe<Scalars['BigInt']['input']>;
  algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  commentText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  storyId?: InputMaybe<Scalars['BigInt']['input']>;
  storyTitle?: InputMaybe<Scalars['String']['input']>;
  storyUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type AlgoHnCommentUpdateResponse = {
  __typename?: 'AlgoHnCommentUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnComment>;
};

export type AlgoHnQuery = Node & {
  __typename?: 'AlgoHnQuery';
  algoHnCommentCollection: AlgoHnCommentConnection;
  algoHnQueryId: Scalars['BigInt']['output'];
  algoHnStoryCollection: AlgoHnStoryConnection;
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  projRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryConnection;
  query: Scalars['String']['output'];
};


export type AlgoHnQueryAlgoHnCommentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnCommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnCommentOrderBy>>;
};


export type AlgoHnQueryAlgoHnStoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnStoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnStoryOrderBy>>;
};


export type AlgoHnQueryProjRepoAndAlgoHnQueryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndAlgoHnQueryOrderBy>>;
};

export type AlgoHnQueryConnection = {
  __typename?: 'AlgoHnQueryConnection';
  edges: Array<AlgoHnQueryEdge>;
  pageInfo: PageInfo;
};

export type AlgoHnQueryDeleteResponse = {
  __typename?: 'AlgoHnQueryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnQuery>;
};

export type AlgoHnQueryEdge = {
  __typename?: 'AlgoHnQueryEdge';
  cursor: Scalars['String']['output'];
  node: AlgoHnQuery;
};

export type AlgoHnQueryFilter = {
  algoHnQueryId?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnQueryFilter>>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AlgoHnQueryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnQueryFilter>>;
  query?: InputMaybe<StringFilter>;
};

export type AlgoHnQueryInsertInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type AlgoHnQueryInsertResponse = {
  __typename?: 'AlgoHnQueryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnQuery>;
};

export type AlgoHnQueryOrderBy = {
  algoHnQueryId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  query?: InputMaybe<OrderByDirection>;
};

export type AlgoHnQueryUpdateInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type AlgoHnQueryUpdateResponse = {
  __typename?: 'AlgoHnQueryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnQuery>;
};

export type AlgoHnStory = Node & {
  __typename?: 'AlgoHnStory';
  algoHnQuery: AlgoHnQuery;
  algoHnQueryId: Scalars['BigInt']['output'];
  algoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagConnection;
  algoHnStoryId: Scalars['BigInt']['output'];
  algoHnStoryObjectId: Scalars['BigInt']['output'];
  algoHnStoryUrl?: Maybe<Scalars['String']['output']>;
  author: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  points: Scalars['BigInt']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};


export type AlgoHnStoryAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagOrderBy>>;
};

export type AlgoHnStoryAndAlgoHnTag = Node & {
  __typename?: 'AlgoHnStoryAndAlgoHnTag';
  algoHnStory: AlgoHnStory;
  algoHnStoryId: Scalars['BigInt']['output'];
  algoHnTag: AlgoHnTag;
  algoHnTagId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type AlgoHnStoryAndAlgoHnTagConnection = {
  __typename?: 'AlgoHnStoryAndAlgoHnTagConnection';
  edges: Array<AlgoHnStoryAndAlgoHnTagEdge>;
  pageInfo: PageInfo;
};

export type AlgoHnStoryAndAlgoHnTagDeleteResponse = {
  __typename?: 'AlgoHnStoryAndAlgoHnTagDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStoryAndAlgoHnTag>;
};

export type AlgoHnStoryAndAlgoHnTagEdge = {
  __typename?: 'AlgoHnStoryAndAlgoHnTagEdge';
  cursor: Scalars['String']['output'];
  node: AlgoHnStoryAndAlgoHnTag;
};

export type AlgoHnStoryAndAlgoHnTagFilter = {
  algoHnStoryId?: InputMaybe<BigIntFilter>;
  algoHnTagId?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagFilter>>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagFilter>>;
};

export type AlgoHnStoryAndAlgoHnTagInsertInput = {
  algoHnStoryId?: InputMaybe<Scalars['BigInt']['input']>;
  algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type AlgoHnStoryAndAlgoHnTagInsertResponse = {
  __typename?: 'AlgoHnStoryAndAlgoHnTagInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStoryAndAlgoHnTag>;
};

export type AlgoHnStoryAndAlgoHnTagOrderBy = {
  algoHnStoryId?: InputMaybe<OrderByDirection>;
  algoHnTagId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
};

export type AlgoHnStoryAndAlgoHnTagUpdateInput = {
  algoHnStoryId?: InputMaybe<Scalars['BigInt']['input']>;
  algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type AlgoHnStoryAndAlgoHnTagUpdateResponse = {
  __typename?: 'AlgoHnStoryAndAlgoHnTagUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStoryAndAlgoHnTag>;
};

export type AlgoHnStoryConnection = {
  __typename?: 'AlgoHnStoryConnection';
  edges: Array<AlgoHnStoryEdge>;
  pageInfo: PageInfo;
};

export type AlgoHnStoryDeleteResponse = {
  __typename?: 'AlgoHnStoryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStory>;
};

export type AlgoHnStoryEdge = {
  __typename?: 'AlgoHnStoryEdge';
  cursor: Scalars['String']['output'];
  node: AlgoHnStory;
};

export type AlgoHnStoryFilter = {
  algoHnQueryId?: InputMaybe<BigIntFilter>;
  algoHnStoryId?: InputMaybe<BigIntFilter>;
  algoHnStoryObjectId?: InputMaybe<BigIntFilter>;
  algoHnStoryUrl?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnStoryFilter>>;
  author?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AlgoHnStoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnStoryFilter>>;
  points?: InputMaybe<BigIntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type AlgoHnStoryInsertInput = {
  algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>;
  algoHnStoryObjectId?: InputMaybe<Scalars['BigInt']['input']>;
  algoHnStoryUrl?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  points?: InputMaybe<Scalars['BigInt']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type AlgoHnStoryInsertResponse = {
  __typename?: 'AlgoHnStoryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStory>;
};

export type AlgoHnStoryOrderBy = {
  algoHnQueryId?: InputMaybe<OrderByDirection>;
  algoHnStoryId?: InputMaybe<OrderByDirection>;
  algoHnStoryObjectId?: InputMaybe<OrderByDirection>;
  algoHnStoryUrl?: InputMaybe<OrderByDirection>;
  author?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  points?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type AlgoHnStoryUpdateInput = {
  algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>;
  algoHnStoryObjectId?: InputMaybe<Scalars['BigInt']['input']>;
  algoHnStoryUrl?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  points?: InputMaybe<Scalars['BigInt']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type AlgoHnStoryUpdateResponse = {
  __typename?: 'AlgoHnStoryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnStory>;
};

export type AlgoHnTag = Node & {
  __typename?: 'AlgoHnTag';
  algoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagConnection;
  algoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagConnection;
  algoHnTagId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};


export type AlgoHnTagAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>;
};


export type AlgoHnTagAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagOrderBy>>;
};

export type AlgoHnTagConnection = {
  __typename?: 'AlgoHnTagConnection';
  edges: Array<AlgoHnTagEdge>;
  pageInfo: PageInfo;
};

export type AlgoHnTagDeleteResponse = {
  __typename?: 'AlgoHnTagDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnTag>;
};

export type AlgoHnTagEdge = {
  __typename?: 'AlgoHnTagEdge';
  cursor: Scalars['String']['output'];
  node: AlgoHnTag;
};

export type AlgoHnTagFilter = {
  algoHnTagId?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AlgoHnTagFilter>>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AlgoHnTagFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AlgoHnTagFilter>>;
  title?: InputMaybe<StringFilter>;
};

export type AlgoHnTagInsertInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AlgoHnTagInsertResponse = {
  __typename?: 'AlgoHnTagInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnTag>;
};

export type AlgoHnTagOrderBy = {
  algoHnTagId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type AlgoHnTagUpdateInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AlgoHnTagUpdateResponse = {
  __typename?: 'AlgoHnTagUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<AlgoHnTag>;
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

export type GthbForkHist = Node & {
  __typename?: 'GthbForkHist';
  amount: Scalars['BigInt']['output'];
  gthbForkHistDate: Scalars['Datetime']['output'];
  gthbForkHistId: Scalars['BigInt']['output'];
  gthbRepo: GthbRepo;
  gthbRepoId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type GthbForkHistConnection = {
  __typename?: 'GthbForkHistConnection';
  edges: Array<GthbForkHistEdge>;
  pageInfo: PageInfo;
};

export type GthbForkHistDeleteResponse = {
  __typename?: 'GthbForkHistDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbForkHist>;
};

export type GthbForkHistEdge = {
  __typename?: 'GthbForkHistEdge';
  cursor: Scalars['String']['output'];
  node: GthbForkHist;
};

export type GthbForkHistFilter = {
  amount?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbForkHistFilter>>;
  gthbForkHistDate?: InputMaybe<DatetimeFilter>;
  gthbForkHistId?: InputMaybe<BigIntFilter>;
  gthbRepoId?: InputMaybe<BigIntFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbForkHistFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbForkHistFilter>>;
};

export type GthbForkHistInsertInput = {
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  gthbForkHistDate?: InputMaybe<Scalars['Datetime']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbForkHistInsertResponse = {
  __typename?: 'GthbForkHistInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbForkHist>;
};

export type GthbForkHistOrderBy = {
  amount?: InputMaybe<OrderByDirection>;
  gthbForkHistDate?: InputMaybe<OrderByDirection>;
  gthbForkHistId?: InputMaybe<OrderByDirection>;
  gthbRepoId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
};

export type GthbForkHistUpdateInput = {
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  gthbForkHistDate?: InputMaybe<Scalars['Datetime']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbForkHistUpdateResponse = {
  __typename?: 'GthbForkHistUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbForkHist>;
};

export type GthbIssueHist = Node & {
  __typename?: 'GthbIssueHist';
  amount: Scalars['BigInt']['output'];
  gthbIssueHistDate: Scalars['Datetime']['output'];
  gthbIssueHistId: Scalars['BigInt']['output'];
  gthbRepo: GthbRepo;
  gthbRepoId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type GthbIssueHistConnection = {
  __typename?: 'GthbIssueHistConnection';
  edges: Array<GthbIssueHistEdge>;
  pageInfo: PageInfo;
};

export type GthbIssueHistDeleteResponse = {
  __typename?: 'GthbIssueHistDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbIssueHist>;
};

export type GthbIssueHistEdge = {
  __typename?: 'GthbIssueHistEdge';
  cursor: Scalars['String']['output'];
  node: GthbIssueHist;
};

export type GthbIssueHistFilter = {
  amount?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbIssueHistFilter>>;
  gthbIssueHistDate?: InputMaybe<DatetimeFilter>;
  gthbIssueHistId?: InputMaybe<BigIntFilter>;
  gthbRepoId?: InputMaybe<BigIntFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbIssueHistFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbIssueHistFilter>>;
};

export type GthbIssueHistInsertInput = {
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  gthbIssueHistDate?: InputMaybe<Scalars['Datetime']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbIssueHistInsertResponse = {
  __typename?: 'GthbIssueHistInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbIssueHist>;
};

export type GthbIssueHistOrderBy = {
  amount?: InputMaybe<OrderByDirection>;
  gthbIssueHistDate?: InputMaybe<OrderByDirection>;
  gthbIssueHistId?: InputMaybe<OrderByDirection>;
  gthbRepoId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
};

export type GthbIssueHistUpdateInput = {
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  gthbIssueHistDate?: InputMaybe<Scalars['Datetime']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbIssueHistUpdateResponse = {
  __typename?: 'GthbIssueHistUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbIssueHist>;
};

export type GthbLang = Node & {
  __typename?: 'GthbLang';
  color: Scalars['String']['output'];
  gthbLangId: Scalars['BigInt']['output'];
  gthbLangName: Scalars['String']['output'];
  gthbRepoAndGthbLangCollection: GthbRepoAndGthbLangConnection;
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};


export type GthbLangGthbRepoAndGthbLangCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoAndGthbLangFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoAndGthbLangOrderBy>>;
};

export type GthbLangConnection = {
  __typename?: 'GthbLangConnection';
  edges: Array<GthbLangEdge>;
  pageInfo: PageInfo;
};

export type GthbLangDeleteResponse = {
  __typename?: 'GthbLangDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbLang>;
};

export type GthbLangEdge = {
  __typename?: 'GthbLangEdge';
  cursor: Scalars['String']['output'];
  node: GthbLang;
};

export type GthbLangFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbLangFilter>>;
  color?: InputMaybe<StringFilter>;
  gthbLangId?: InputMaybe<BigIntFilter>;
  gthbLangName?: InputMaybe<StringFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbLangFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbLangFilter>>;
};

export type GthbLangInsertInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  gthbLangName?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbLangInsertResponse = {
  __typename?: 'GthbLangInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbLang>;
};

export type GthbLangOrderBy = {
  color?: InputMaybe<OrderByDirection>;
  gthbLangId?: InputMaybe<OrderByDirection>;
  gthbLangName?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
};

export type GthbLangUpdateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  gthbLangName?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbLangUpdateResponse = {
  __typename?: 'GthbLangUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbLang>;
};

export type GthbOrg = Node & {
  __typename?: 'GthbOrg';
  createdAt: Scalars['Datetime']['output'];
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gthbOrg: GthbOwner;
  gthbOrgDescription?: Maybe<Scalars['String']['output']>;
  gthbOrgId: Scalars['BigInt']['output'];
  gthbOrgName?: Maybe<Scalars['String']['output']>;
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  twitterUsername?: Maybe<Scalars['String']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type GthbOrgConnection = {
  __typename?: 'GthbOrgConnection';
  edges: Array<GthbOrgEdge>;
  pageInfo: PageInfo;
};

export type GthbOrgDeleteResponse = {
  __typename?: 'GthbOrgDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbOrg>;
};

export type GthbOrgEdge = {
  __typename?: 'GthbOrgEdge';
  cursor: Scalars['String']['output'];
  node: GthbOrg;
};

export type GthbOrgFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbOrgFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  descriptionHtml?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  gthbOrgDescription?: InputMaybe<StringFilter>;
  gthbOrgId?: InputMaybe<BigIntFilter>;
  gthbOrgName?: InputMaybe<StringFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbOrgFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbOrgFilter>>;
  twitterUsername?: InputMaybe<StringFilter>;
  websiteUrl?: InputMaybe<StringFilter>;
};

export type GthbOrgInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gthbOrgDescription?: InputMaybe<Scalars['String']['input']>;
  gthbOrgId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbOrgName?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type GthbOrgInsertResponse = {
  __typename?: 'GthbOrgInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbOrg>;
};

export type GthbOrgOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  descriptionHtml?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  gthbOrgDescription?: InputMaybe<OrderByDirection>;
  gthbOrgId?: InputMaybe<OrderByDirection>;
  gthbOrgName?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  twitterUsername?: InputMaybe<OrderByDirection>;
  websiteUrl?: InputMaybe<OrderByDirection>;
};

export type GthbOrgUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gthbOrgDescription?: InputMaybe<Scalars['String']['input']>;
  gthbOrgId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbOrgName?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type GthbOrgUpdateResponse = {
  __typename?: 'GthbOrgUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbOrg>;
};

export type GthbOwner = Node & {
  __typename?: 'GthbOwner';
  avatarUrl: Scalars['String']['output'];
  gthbOwner?: Maybe<GthbOrg>;
  gthbOwnerId: Scalars['BigInt']['output'];
  gthbOwnerLogin: Scalars['String']['output'];
  gthbOwnerType: Scalars['Opaque']['output'];
  gthbOwnerUrl: Scalars['String']['output'];
  gthbRepoCollection: GthbRepoConnection;
  gthbRepoContrCollection: GthbRepoContrConnection;
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  repositoriesTotalCount: Scalars['BigInt']['output'];
};


export type GthbOwnerGthbRepoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoOrderBy>>;
};


export type GthbOwnerGthbRepoContrCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoContrFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoContrOrderBy>>;
};

export type GthbOwnerConnection = {
  __typename?: 'GthbOwnerConnection';
  edges: Array<GthbOwnerEdge>;
  pageInfo: PageInfo;
};

export type GthbOwnerDeleteResponse = {
  __typename?: 'GthbOwnerDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbOwner>;
};

export type GthbOwnerEdge = {
  __typename?: 'GthbOwnerEdge';
  cursor: Scalars['String']['output'];
  node: GthbOwner;
};

export type GthbOwnerFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbOwnerFilter>>;
  avatarUrl?: InputMaybe<StringFilter>;
  gthbOwnerId?: InputMaybe<BigIntFilter>;
  gthbOwnerLogin?: InputMaybe<StringFilter>;
  gthbOwnerType?: InputMaybe<OpaqueFilter>;
  gthbOwnerUrl?: InputMaybe<StringFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbOwnerFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbOwnerFilter>>;
  repositoriesTotalCount?: InputMaybe<BigIntFilter>;
};

export type GthbOwnerInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  gthbOwnerLogin?: InputMaybe<Scalars['String']['input']>;
  gthbOwnerType?: InputMaybe<Scalars['Opaque']['input']>;
  gthbOwnerUrl?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  repositoriesTotalCount?: InputMaybe<Scalars['BigInt']['input']>;
};

export type GthbOwnerInsertResponse = {
  __typename?: 'GthbOwnerInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbOwner>;
};

export type GthbOwnerOrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>;
  gthbOwnerId?: InputMaybe<OrderByDirection>;
  gthbOwnerLogin?: InputMaybe<OrderByDirection>;
  gthbOwnerType?: InputMaybe<OrderByDirection>;
  gthbOwnerUrl?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  repositoriesTotalCount?: InputMaybe<OrderByDirection>;
};

export type GthbOwnerUpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  gthbOwnerLogin?: InputMaybe<Scalars['String']['input']>;
  gthbOwnerType?: InputMaybe<Scalars['Opaque']['input']>;
  gthbOwnerUrl?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  repositoriesTotalCount?: InputMaybe<Scalars['BigInt']['input']>;
};

export type GthbOwnerUpdateResponse = {
  __typename?: 'GthbOwnerUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbOwner>;
};

export type GthbRepo = Node & {
  __typename?: 'GthbRepo';
  contributorCount: Scalars['BigInt']['output'];
  createdAt: Scalars['Datetime']['output'];
  forkCount: Scalars['BigInt']['output'];
  forksPerContributor: Scalars['BigInt']['output'];
  gthbForkHistCollection: GthbForkHistConnection;
  gthbIssueHistCollection: GthbIssueHistConnection;
  gthbOwner: GthbOwner;
  gthbOwnerId: Scalars['BigInt']['output'];
  gthbRepo: ProjRepo;
  gthbRepoAndGthbLangCollection: GthbRepoAndGthbLangConnection;
  gthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicConnection;
  gthbRepoContrCollection: GthbRepoContrConnection;
  gthbRepoDescription?: Maybe<Scalars['String']['output']>;
  gthbRepoId: Scalars['BigInt']['output'];
  gthbRepoName: Scalars['String']['output'];
  gthbRepoUrl: Scalars['String']['output'];
  gthbStarHistCollection: GthbStarHistConnection;
  gthbTrendingCollection: GthbTrendingConnection;
  homepageUrl?: Maybe<Scalars['String']['output']>;
  internalCreatedAt: Scalars['Datetime']['output'];
  isInOrganization: Scalars['Boolean']['output'];
  issuesPerContributor: Scalars['BigInt']['output'];
  issuesTotalCount: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pullRequestsPerContributor: Scalars['BigInt']['output'];
  pullRequestsTotalCount: Scalars['BigInt']['output'];
  stargazerCount: Scalars['BigInt']['output'];
  stargazersPerContributor: Scalars['BigInt']['output'];
};


export type GthbRepoGthbForkHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbForkHistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbForkHistOrderBy>>;
};


export type GthbRepoGthbIssueHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbIssueHistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbIssueHistOrderBy>>;
};


export type GthbRepoGthbRepoAndGthbLangCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoAndGthbLangFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoAndGthbLangOrderBy>>;
};


export type GthbRepoGthbRepoAndGthbRepoTopicCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoAndGthbRepoTopicOrderBy>>;
};


export type GthbRepoGthbRepoContrCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoContrFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoContrOrderBy>>;
};


export type GthbRepoGthbStarHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbStarHistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbStarHistOrderBy>>;
};


export type GthbRepoGthbTrendingCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbTrendingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbTrendingOrderBy>>;
};

export type GthbRepoAndGthbLang = Node & {
  __typename?: 'GthbRepoAndGthbLang';
  gthbLang: GthbLang;
  gthbLangId: Scalars['BigInt']['output'];
  gthbRepo: GthbRepo;
  gthbRepoId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type GthbRepoAndGthbLangConnection = {
  __typename?: 'GthbRepoAndGthbLangConnection';
  edges: Array<GthbRepoAndGthbLangEdge>;
  pageInfo: PageInfo;
};

export type GthbRepoAndGthbLangDeleteResponse = {
  __typename?: 'GthbRepoAndGthbLangDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbLang>;
};

export type GthbRepoAndGthbLangEdge = {
  __typename?: 'GthbRepoAndGthbLangEdge';
  cursor: Scalars['String']['output'];
  node: GthbRepoAndGthbLang;
};

export type GthbRepoAndGthbLangFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbRepoAndGthbLangFilter>>;
  gthbLangId?: InputMaybe<BigIntFilter>;
  gthbRepoId?: InputMaybe<BigIntFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbRepoAndGthbLangFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbRepoAndGthbLangFilter>>;
};

export type GthbRepoAndGthbLangInsertInput = {
  gthbLangId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbRepoAndGthbLangInsertResponse = {
  __typename?: 'GthbRepoAndGthbLangInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbLang>;
};

export type GthbRepoAndGthbLangOrderBy = {
  gthbLangId?: InputMaybe<OrderByDirection>;
  gthbRepoId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
};

export type GthbRepoAndGthbLangUpdateInput = {
  gthbLangId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbRepoAndGthbLangUpdateResponse = {
  __typename?: 'GthbRepoAndGthbLangUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbLang>;
};

export type GthbRepoAndGthbRepoTopic = Node & {
  __typename?: 'GthbRepoAndGthbRepoTopic';
  gthbRepo: GthbRepo;
  gthbRepoId: Scalars['BigInt']['output'];
  gthbRepoTopic: GthbRepoTopic;
  gthbRepoTopicId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type GthbRepoAndGthbRepoTopicConnection = {
  __typename?: 'GthbRepoAndGthbRepoTopicConnection';
  edges: Array<GthbRepoAndGthbRepoTopicEdge>;
  pageInfo: PageInfo;
};

export type GthbRepoAndGthbRepoTopicDeleteResponse = {
  __typename?: 'GthbRepoAndGthbRepoTopicDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbRepoTopic>;
};

export type GthbRepoAndGthbRepoTopicEdge = {
  __typename?: 'GthbRepoAndGthbRepoTopicEdge';
  cursor: Scalars['String']['output'];
  node: GthbRepoAndGthbRepoTopic;
};

export type GthbRepoAndGthbRepoTopicFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbRepoAndGthbRepoTopicFilter>>;
  gthbRepoId?: InputMaybe<BigIntFilter>;
  gthbRepoTopicId?: InputMaybe<BigIntFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbRepoAndGthbRepoTopicFilter>>;
};

export type GthbRepoAndGthbRepoTopicInsertInput = {
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbRepoTopicId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbRepoAndGthbRepoTopicInsertResponse = {
  __typename?: 'GthbRepoAndGthbRepoTopicInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbRepoTopic>;
};

export type GthbRepoAndGthbRepoTopicOrderBy = {
  gthbRepoId?: InputMaybe<OrderByDirection>;
  gthbRepoTopicId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
};

export type GthbRepoAndGthbRepoTopicUpdateInput = {
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbRepoTopicId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbRepoAndGthbRepoTopicUpdateResponse = {
  __typename?: 'GthbRepoAndGthbRepoTopicUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoAndGthbRepoTopic>;
};

export type GthbRepoConnection = {
  __typename?: 'GthbRepoConnection';
  edges: Array<GthbRepoEdge>;
  pageInfo: PageInfo;
};

export type GthbRepoContr = Node & {
  __typename?: 'GthbRepoContr';
  contributions: Scalars['BigInt']['output'];
  gthbOwner: GthbOwner;
  gthbOwnerId: Scalars['BigInt']['output'];
  gthbRepo: GthbRepo;
  gthbRepoId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type GthbRepoContrConnection = {
  __typename?: 'GthbRepoContrConnection';
  edges: Array<GthbRepoContrEdge>;
  pageInfo: PageInfo;
};

export type GthbRepoContrDeleteResponse = {
  __typename?: 'GthbRepoContrDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoContr>;
};

export type GthbRepoContrEdge = {
  __typename?: 'GthbRepoContrEdge';
  cursor: Scalars['String']['output'];
  node: GthbRepoContr;
};

export type GthbRepoContrFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbRepoContrFilter>>;
  contributions?: InputMaybe<BigIntFilter>;
  gthbOwnerId?: InputMaybe<BigIntFilter>;
  gthbRepoId?: InputMaybe<BigIntFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbRepoContrFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbRepoContrFilter>>;
};

export type GthbRepoContrInsertInput = {
  contributions?: InputMaybe<Scalars['BigInt']['input']>;
  gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbRepoContrInsertResponse = {
  __typename?: 'GthbRepoContrInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoContr>;
};

export type GthbRepoContrOrderBy = {
  contributions?: InputMaybe<OrderByDirection>;
  gthbOwnerId?: InputMaybe<OrderByDirection>;
  gthbRepoId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
};

export type GthbRepoContrUpdateInput = {
  contributions?: InputMaybe<Scalars['BigInt']['input']>;
  gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbRepoContrUpdateResponse = {
  __typename?: 'GthbRepoContrUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoContr>;
};

export type GthbRepoDeleteResponse = {
  __typename?: 'GthbRepoDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepo>;
};

export type GthbRepoEdge = {
  __typename?: 'GthbRepoEdge';
  cursor: Scalars['String']['output'];
  node: GthbRepo;
};

export type GthbRepoFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbRepoFilter>>;
  contributorCount?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  forkCount?: InputMaybe<BigIntFilter>;
  forksPerContributor?: InputMaybe<BigIntFilter>;
  gthbOwnerId?: InputMaybe<BigIntFilter>;
  gthbRepoDescription?: InputMaybe<StringFilter>;
  gthbRepoId?: InputMaybe<BigIntFilter>;
  gthbRepoName?: InputMaybe<StringFilter>;
  gthbRepoUrl?: InputMaybe<StringFilter>;
  homepageUrl?: InputMaybe<StringFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  isInOrganization?: InputMaybe<BooleanFilter>;
  issuesPerContributor?: InputMaybe<BigIntFilter>;
  issuesTotalCount?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbRepoFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbRepoFilter>>;
  pullRequestsPerContributor?: InputMaybe<BigIntFilter>;
  pullRequestsTotalCount?: InputMaybe<BigIntFilter>;
  stargazerCount?: InputMaybe<BigIntFilter>;
  stargazersPerContributor?: InputMaybe<BigIntFilter>;
};

export type GthbRepoInsertInput = {
  contributorCount?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  forkCount?: InputMaybe<Scalars['BigInt']['input']>;
  forksPerContributor?: InputMaybe<Scalars['BigInt']['input']>;
  gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbRepoDescription?: InputMaybe<Scalars['String']['input']>;
  gthbRepoName?: InputMaybe<Scalars['String']['input']>;
  gthbRepoUrl?: InputMaybe<Scalars['String']['input']>;
  homepageUrl?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isInOrganization?: InputMaybe<Scalars['Boolean']['input']>;
  issuesPerContributor?: InputMaybe<Scalars['BigInt']['input']>;
  issuesTotalCount?: InputMaybe<Scalars['BigInt']['input']>;
  pullRequestsPerContributor?: InputMaybe<Scalars['BigInt']['input']>;
  pullRequestsTotalCount?: InputMaybe<Scalars['BigInt']['input']>;
  stargazerCount?: InputMaybe<Scalars['BigInt']['input']>;
  stargazersPerContributor?: InputMaybe<Scalars['BigInt']['input']>;
};

export type GthbRepoInsertResponse = {
  __typename?: 'GthbRepoInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepo>;
};

export type GthbRepoOrderBy = {
  contributorCount?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  forkCount?: InputMaybe<OrderByDirection>;
  forksPerContributor?: InputMaybe<OrderByDirection>;
  gthbOwnerId?: InputMaybe<OrderByDirection>;
  gthbRepoDescription?: InputMaybe<OrderByDirection>;
  gthbRepoId?: InputMaybe<OrderByDirection>;
  gthbRepoName?: InputMaybe<OrderByDirection>;
  gthbRepoUrl?: InputMaybe<OrderByDirection>;
  homepageUrl?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  isInOrganization?: InputMaybe<OrderByDirection>;
  issuesPerContributor?: InputMaybe<OrderByDirection>;
  issuesTotalCount?: InputMaybe<OrderByDirection>;
  pullRequestsPerContributor?: InputMaybe<OrderByDirection>;
  pullRequestsTotalCount?: InputMaybe<OrderByDirection>;
  stargazerCount?: InputMaybe<OrderByDirection>;
  stargazersPerContributor?: InputMaybe<OrderByDirection>;
};

export type GthbRepoTopic = Node & {
  __typename?: 'GthbRepoTopic';
  gthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicConnection;
  gthbRepoTopicId: Scalars['BigInt']['output'];
  gthbRepoTopicName: Scalars['String']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  stargazerCount: Scalars['BigInt']['output'];
};


export type GthbRepoTopicGthbRepoAndGthbRepoTopicCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoAndGthbRepoTopicOrderBy>>;
};

export type GthbRepoTopicConnection = {
  __typename?: 'GthbRepoTopicConnection';
  edges: Array<GthbRepoTopicEdge>;
  pageInfo: PageInfo;
};

export type GthbRepoTopicDeleteResponse = {
  __typename?: 'GthbRepoTopicDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoTopic>;
};

export type GthbRepoTopicEdge = {
  __typename?: 'GthbRepoTopicEdge';
  cursor: Scalars['String']['output'];
  node: GthbRepoTopic;
};

export type GthbRepoTopicFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbRepoTopicFilter>>;
  gthbRepoTopicId?: InputMaybe<BigIntFilter>;
  gthbRepoTopicName?: InputMaybe<StringFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbRepoTopicFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbRepoTopicFilter>>;
  stargazerCount?: InputMaybe<BigIntFilter>;
};

export type GthbRepoTopicInsertInput = {
  gthbRepoTopicName?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  stargazerCount?: InputMaybe<Scalars['BigInt']['input']>;
};

export type GthbRepoTopicInsertResponse = {
  __typename?: 'GthbRepoTopicInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoTopic>;
};

export type GthbRepoTopicOrderBy = {
  gthbRepoTopicId?: InputMaybe<OrderByDirection>;
  gthbRepoTopicName?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  stargazerCount?: InputMaybe<OrderByDirection>;
};

export type GthbRepoTopicUpdateInput = {
  gthbRepoTopicName?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  stargazerCount?: InputMaybe<Scalars['BigInt']['input']>;
};

export type GthbRepoTopicUpdateResponse = {
  __typename?: 'GthbRepoTopicUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepoTopic>;
};

export type GthbRepoUpdateInput = {
  contributorCount?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  forkCount?: InputMaybe<Scalars['BigInt']['input']>;
  forksPerContributor?: InputMaybe<Scalars['BigInt']['input']>;
  gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbRepoDescription?: InputMaybe<Scalars['String']['input']>;
  gthbRepoName?: InputMaybe<Scalars['String']['input']>;
  gthbRepoUrl?: InputMaybe<Scalars['String']['input']>;
  homepageUrl?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isInOrganization?: InputMaybe<Scalars['Boolean']['input']>;
  issuesPerContributor?: InputMaybe<Scalars['BigInt']['input']>;
  issuesTotalCount?: InputMaybe<Scalars['BigInt']['input']>;
  pullRequestsPerContributor?: InputMaybe<Scalars['BigInt']['input']>;
  pullRequestsTotalCount?: InputMaybe<Scalars['BigInt']['input']>;
  stargazerCount?: InputMaybe<Scalars['BigInt']['input']>;
  stargazersPerContributor?: InputMaybe<Scalars['BigInt']['input']>;
};

export type GthbRepoUpdateResponse = {
  __typename?: 'GthbRepoUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbRepo>;
};

export type GthbStarHist = Node & {
  __typename?: 'GthbStarHist';
  amount: Scalars['BigInt']['output'];
  gthbRepo: GthbRepo;
  gthbRepoId: Scalars['BigInt']['output'];
  gthbStarHistDate: Scalars['Datetime']['output'];
  gthbStarHistId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type GthbStarHistConnection = {
  __typename?: 'GthbStarHistConnection';
  edges: Array<GthbStarHistEdge>;
  pageInfo: PageInfo;
};

export type GthbStarHistDeleteResponse = {
  __typename?: 'GthbStarHistDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbStarHist>;
};

export type GthbStarHistEdge = {
  __typename?: 'GthbStarHistEdge';
  cursor: Scalars['String']['output'];
  node: GthbStarHist;
};

export type GthbStarHistFilter = {
  amount?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbStarHistFilter>>;
  gthbRepoId?: InputMaybe<BigIntFilter>;
  gthbStarHistDate?: InputMaybe<DatetimeFilter>;
  gthbStarHistId?: InputMaybe<BigIntFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbStarHistFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbStarHistFilter>>;
};

export type GthbStarHistInsertInput = {
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbStarHistDate?: InputMaybe<Scalars['Datetime']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbStarHistInsertResponse = {
  __typename?: 'GthbStarHistInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbStarHist>;
};

export type GthbStarHistOrderBy = {
  amount?: InputMaybe<OrderByDirection>;
  gthbRepoId?: InputMaybe<OrderByDirection>;
  gthbStarHistDate?: InputMaybe<OrderByDirection>;
  gthbStarHistId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
};

export type GthbStarHistUpdateInput = {
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbStarHistDate?: InputMaybe<Scalars['Datetime']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type GthbStarHistUpdateResponse = {
  __typename?: 'GthbStarHistUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbStarHist>;
};

export type GthbTrending = Node & {
  __typename?: 'GthbTrending';
  dateRange: Scalars['Opaque']['output'];
  gthbRepo: GthbRepo;
  gthbRepoId: Scalars['BigInt']['output'];
  gthbTrendingId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  lang?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type GthbTrendingConnection = {
  __typename?: 'GthbTrendingConnection';
  edges: Array<GthbTrendingEdge>;
  pageInfo: PageInfo;
};

export type GthbTrendingDeleteResponse = {
  __typename?: 'GthbTrendingDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbTrending>;
};

export type GthbTrendingEdge = {
  __typename?: 'GthbTrendingEdge';
  cursor: Scalars['String']['output'];
  node: GthbTrending;
};

export type GthbTrendingFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbTrendingFilter>>;
  dateRange?: InputMaybe<OpaqueFilter>;
  gthbRepoId?: InputMaybe<BigIntFilter>;
  gthbTrendingId?: InputMaybe<BigIntFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  lang?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbTrendingFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbTrendingFilter>>;
};

export type GthbTrendingInsertInput = {
  dateRange?: InputMaybe<Scalars['Opaque']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GthbTrendingInsertResponse = {
  __typename?: 'GthbTrendingInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbTrending>;
};

export type GthbTrendingOrderBy = {
  dateRange?: InputMaybe<OrderByDirection>;
  gthbRepoId?: InputMaybe<OrderByDirection>;
  gthbTrendingId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  lang?: InputMaybe<OrderByDirection>;
};

export type GthbTrendingUpdateInput = {
  dateRange?: InputMaybe<Scalars['Opaque']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type GthbTrendingUpdateResponse = {
  __typename?: 'GthbTrendingUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbTrending>;
};

export type GthbUser = Node & {
  __typename?: 'GthbUser';
  bio?: Maybe<Scalars['String']['output']>;
  bioHtml?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyHtml?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  followersTotalCount: Scalars['BigInt']['output'];
  gthbUser: GthbOwner;
  gthbUserId: Scalars['BigInt']['output'];
  gthbUserName?: Maybe<Scalars['String']['output']>;
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  twitterUsername?: Maybe<Scalars['String']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type GthbUserConnection = {
  __typename?: 'GthbUserConnection';
  edges: Array<GthbUserEdge>;
  pageInfo: PageInfo;
};

export type GthbUserDeleteResponse = {
  __typename?: 'GthbUserDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbUser>;
};

export type GthbUserEdge = {
  __typename?: 'GthbUserEdge';
  cursor: Scalars['String']['output'];
  node: GthbUser;
};

export type GthbUserFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GthbUserFilter>>;
  bio?: InputMaybe<StringFilter>;
  bioHtml?: InputMaybe<StringFilter>;
  company?: InputMaybe<StringFilter>;
  companyHtml?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  followersTotalCount?: InputMaybe<BigIntFilter>;
  gthbUserId?: InputMaybe<BigIntFilter>;
  gthbUserName?: InputMaybe<StringFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GthbUserFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GthbUserFilter>>;
  twitterUsername?: InputMaybe<StringFilter>;
  websiteUrl?: InputMaybe<StringFilter>;
};

export type GthbUserInsertInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  bioHtml?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyHtml?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  followersTotalCount?: InputMaybe<Scalars['BigInt']['input']>;
  gthbUserId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbUserName?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type GthbUserInsertResponse = {
  __typename?: 'GthbUserInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbUser>;
};

export type GthbUserOrderBy = {
  bio?: InputMaybe<OrderByDirection>;
  bioHtml?: InputMaybe<OrderByDirection>;
  company?: InputMaybe<OrderByDirection>;
  companyHtml?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  followersTotalCount?: InputMaybe<OrderByDirection>;
  gthbUserId?: InputMaybe<OrderByDirection>;
  gthbUserName?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  twitterUsername?: InputMaybe<OrderByDirection>;
  websiteUrl?: InputMaybe<OrderByDirection>;
};

export type GthbUserUpdateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  bioHtml?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyHtml?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  followersTotalCount?: InputMaybe<Scalars['BigInt']['input']>;
  gthbUserId?: InputMaybe<Scalars['BigInt']['input']>;
  gthbUserName?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type GthbUserUpdateResponse = {
  __typename?: 'GthbUserUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<GthbUser>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `AlgoHnCommentAndAlgoHnTag` collection */
  deleteFromAlgoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagDeleteResponse;
  /** Deletes zero or more records from the `AlgoHnComment` collection */
  deleteFromAlgoHnCommentCollection: AlgoHnCommentDeleteResponse;
  /** Deletes zero or more records from the `AlgoHnQuery` collection */
  deleteFromAlgoHnQueryCollection: AlgoHnQueryDeleteResponse;
  /** Deletes zero or more records from the `AlgoHnStoryAndAlgoHnTag` collection */
  deleteFromAlgoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagDeleteResponse;
  /** Deletes zero or more records from the `AlgoHnStory` collection */
  deleteFromAlgoHnStoryCollection: AlgoHnStoryDeleteResponse;
  /** Deletes zero or more records from the `AlgoHnTag` collection */
  deleteFromAlgoHnTagCollection: AlgoHnTagDeleteResponse;
  /** Deletes zero or more records from the `GthbForkHist` collection */
  deleteFromGthbForkHistCollection: GthbForkHistDeleteResponse;
  /** Deletes zero or more records from the `GthbIssueHist` collection */
  deleteFromGthbIssueHistCollection: GthbIssueHistDeleteResponse;
  /** Deletes zero or more records from the `GthbLang` collection */
  deleteFromGthbLangCollection: GthbLangDeleteResponse;
  /** Deletes zero or more records from the `GthbOrg` collection */
  deleteFromGthbOrgCollection: GthbOrgDeleteResponse;
  /** Deletes zero or more records from the `GthbOwner` collection */
  deleteFromGthbOwnerCollection: GthbOwnerDeleteResponse;
  /** Deletes zero or more records from the `GthbRepoAndGthbLang` collection */
  deleteFromGthbRepoAndGthbLangCollection: GthbRepoAndGthbLangDeleteResponse;
  /** Deletes zero or more records from the `GthbRepoAndGthbRepoTopic` collection */
  deleteFromGthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicDeleteResponse;
  /** Deletes zero or more records from the `GthbRepo` collection */
  deleteFromGthbRepoCollection: GthbRepoDeleteResponse;
  /** Deletes zero or more records from the `GthbRepoContr` collection */
  deleteFromGthbRepoContrCollection: GthbRepoContrDeleteResponse;
  /** Deletes zero or more records from the `GthbRepoTopic` collection */
  deleteFromGthbRepoTopicCollection: GthbRepoTopicDeleteResponse;
  /** Deletes zero or more records from the `GthbStarHist` collection */
  deleteFromGthbStarHistCollection: GthbStarHistDeleteResponse;
  /** Deletes zero or more records from the `GthbTrending` collection */
  deleteFromGthbTrendingCollection: GthbTrendingDeleteResponse;
  /** Deletes zero or more records from the `GthbUser` collection */
  deleteFromGthbUserCollection: GthbUserDeleteResponse;
  /** Deletes zero or more records from the `ProjBookmark` collection */
  deleteFromProjBookmarkCollection: ProjBookmarkDeleteResponse;
  /** Deletes zero or more records from the `ProjCatAndProjBookmark` collection */
  deleteFromProjCatAndProjBookmarkCollection: ProjCatAndProjBookmarkDeleteResponse;
  /** Deletes zero or more records from the `ProjCat` collection */
  deleteFromProjCatCollection: ProjCatDeleteResponse;
  /** Deletes zero or more records from the `ProjClassifier` collection */
  deleteFromProjClassifierCollection: ProjClassifierDeleteResponse;
  /** Deletes zero or more records from the `ProjRepoAndAlgoHnQuery` collection */
  deleteFromProjRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryDeleteResponse;
  /** Deletes zero or more records from the `ProjRepoAndProjClassifier` collection */
  deleteFromProjRepoAndProjClassifierCollection: ProjRepoAndProjClassifierDeleteResponse;
  /** Deletes zero or more records from the `ProjRepoAndSbotLinCompany` collection */
  deleteFromProjRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyDeleteResponse;
  /** Deletes zero or more records from the `ProjRepoAndSbotLinProfile` collection */
  deleteFromProjRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileDeleteResponse;
  /** Deletes zero or more records from the `ProjRepo` collection */
  deleteFromProjRepoCollection: ProjRepoDeleteResponse;
  /** Deletes zero or more records from the `SbotLinCompany` collection */
  deleteFromSbotLinCompanyCollection: SbotLinCompanyDeleteResponse;
  /** Deletes zero or more records from the `SbotLinProfile` collection */
  deleteFromSbotLinProfileCollection: SbotLinProfileDeleteResponse;
  /** Deletes zero or more records from the `UserAdmin` collection */
  deleteFromUserAdminCollection: UserAdminDeleteResponse;
  /** Deletes zero or more records from the `UserApiKey` collection */
  deleteFromUserApiKeyCollection: UserApiKeyDeleteResponse;
  /** Deletes zero or more records from the `UserWhitelist` collection */
  deleteFromUserWhitelistCollection: UserWhitelistDeleteResponse;
  fDeleteGthbTrendingByDateRange?: Maybe<Scalars['Opaque']['output']>;
  fDeleteProjBookmark?: Maybe<Scalars['Int']['output']>;
  fDeleteProjBookmarkByGthbName?: Maybe<Scalars['Boolean']['output']>;
  fDeleteProjBookmarkByProjRepoId?: Maybe<Scalars['Int']['output']>;
  fDeleteProjBookmarkOnProjCatByTitleAndGthbName?: Maybe<Scalars['Boolean']['output']>;
  fDeleteProjBookmarkOnProjCatByTitleAndGthbRepoId?: Maybe<Scalars['Boolean']['output']>;
  fDeleteUser?: Maybe<Scalars['Boolean']['output']>;
  fIsProjRepoBookmarked?: Maybe<Scalars['Boolean']['output']>;
  /** Adds one or more `AlgoHnCommentAndAlgoHnTag` records to the collection */
  insertIntoAlgoHnCommentAndAlgoHnTagCollection?: Maybe<AlgoHnCommentAndAlgoHnTagInsertResponse>;
  /** Adds one or more `AlgoHnComment` records to the collection */
  insertIntoAlgoHnCommentCollection?: Maybe<AlgoHnCommentInsertResponse>;
  /** Adds one or more `AlgoHnQuery` records to the collection */
  insertIntoAlgoHnQueryCollection?: Maybe<AlgoHnQueryInsertResponse>;
  /** Adds one or more `AlgoHnStoryAndAlgoHnTag` records to the collection */
  insertIntoAlgoHnStoryAndAlgoHnTagCollection?: Maybe<AlgoHnStoryAndAlgoHnTagInsertResponse>;
  /** Adds one or more `AlgoHnStory` records to the collection */
  insertIntoAlgoHnStoryCollection?: Maybe<AlgoHnStoryInsertResponse>;
  /** Adds one or more `AlgoHnTag` records to the collection */
  insertIntoAlgoHnTagCollection?: Maybe<AlgoHnTagInsertResponse>;
  /** Adds one or more `GthbForkHist` records to the collection */
  insertIntoGthbForkHistCollection?: Maybe<GthbForkHistInsertResponse>;
  /** Adds one or more `GthbIssueHist` records to the collection */
  insertIntoGthbIssueHistCollection?: Maybe<GthbIssueHistInsertResponse>;
  /** Adds one or more `GthbLang` records to the collection */
  insertIntoGthbLangCollection?: Maybe<GthbLangInsertResponse>;
  /** Adds one or more `GthbOrg` records to the collection */
  insertIntoGthbOrgCollection?: Maybe<GthbOrgInsertResponse>;
  /** Adds one or more `GthbOwner` records to the collection */
  insertIntoGthbOwnerCollection?: Maybe<GthbOwnerInsertResponse>;
  /** Adds one or more `GthbRepoAndGthbLang` records to the collection */
  insertIntoGthbRepoAndGthbLangCollection?: Maybe<GthbRepoAndGthbLangInsertResponse>;
  /** Adds one or more `GthbRepoAndGthbRepoTopic` records to the collection */
  insertIntoGthbRepoAndGthbRepoTopicCollection?: Maybe<GthbRepoAndGthbRepoTopicInsertResponse>;
  /** Adds one or more `GthbRepo` records to the collection */
  insertIntoGthbRepoCollection?: Maybe<GthbRepoInsertResponse>;
  /** Adds one or more `GthbRepoContr` records to the collection */
  insertIntoGthbRepoContrCollection?: Maybe<GthbRepoContrInsertResponse>;
  /** Adds one or more `GthbRepoTopic` records to the collection */
  insertIntoGthbRepoTopicCollection?: Maybe<GthbRepoTopicInsertResponse>;
  /** Adds one or more `GthbStarHist` records to the collection */
  insertIntoGthbStarHistCollection?: Maybe<GthbStarHistInsertResponse>;
  /** Adds one or more `GthbTrending` records to the collection */
  insertIntoGthbTrendingCollection?: Maybe<GthbTrendingInsertResponse>;
  /** Adds one or more `GthbUser` records to the collection */
  insertIntoGthbUserCollection?: Maybe<GthbUserInsertResponse>;
  /** Adds one or more `ProjBookmark` records to the collection */
  insertIntoProjBookmarkCollection?: Maybe<ProjBookmarkInsertResponse>;
  /** Adds one or more `ProjCatAndProjBookmark` records to the collection */
  insertIntoProjCatAndProjBookmarkCollection?: Maybe<ProjCatAndProjBookmarkInsertResponse>;
  /** Adds one or more `ProjCat` records to the collection */
  insertIntoProjCatCollection?: Maybe<ProjCatInsertResponse>;
  /** Adds one or more `ProjClassifier` records to the collection */
  insertIntoProjClassifierCollection?: Maybe<ProjClassifierInsertResponse>;
  /** Adds one or more `ProjRepoAndAlgoHnQuery` records to the collection */
  insertIntoProjRepoAndAlgoHnQueryCollection?: Maybe<ProjRepoAndAlgoHnQueryInsertResponse>;
  /** Adds one or more `ProjRepoAndProjClassifier` records to the collection */
  insertIntoProjRepoAndProjClassifierCollection?: Maybe<ProjRepoAndProjClassifierInsertResponse>;
  /** Adds one or more `ProjRepoAndSbotLinCompany` records to the collection */
  insertIntoProjRepoAndSbotLinCompanyCollection?: Maybe<ProjRepoAndSbotLinCompanyInsertResponse>;
  /** Adds one or more `ProjRepoAndSbotLinProfile` records to the collection */
  insertIntoProjRepoAndSbotLinProfileCollection?: Maybe<ProjRepoAndSbotLinProfileInsertResponse>;
  /** Adds one or more `ProjRepo` records to the collection */
  insertIntoProjRepoCollection?: Maybe<ProjRepoInsertResponse>;
  /** Adds one or more `SbotLinCompany` records to the collection */
  insertIntoSbotLinCompanyCollection?: Maybe<SbotLinCompanyInsertResponse>;
  /** Adds one or more `SbotLinProfile` records to the collection */
  insertIntoSbotLinProfileCollection?: Maybe<SbotLinProfileInsertResponse>;
  /** Adds one or more `UserAdmin` records to the collection */
  insertIntoUserAdminCollection?: Maybe<UserAdminInsertResponse>;
  /** Adds one or more `UserApiKey` records to the collection */
  insertIntoUserApiKeyCollection?: Maybe<UserApiKeyInsertResponse>;
  /** Adds one or more `UserWhitelist` records to the collection */
  insertIntoUserWhitelistCollection?: Maybe<UserWhitelistInsertResponse>;
  /** Updates zero or more records in the `AlgoHnCommentAndAlgoHnTag` collection */
  updateAlgoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagUpdateResponse;
  /** Updates zero or more records in the `AlgoHnComment` collection */
  updateAlgoHnCommentCollection: AlgoHnCommentUpdateResponse;
  /** Updates zero or more records in the `AlgoHnQuery` collection */
  updateAlgoHnQueryCollection: AlgoHnQueryUpdateResponse;
  /** Updates zero or more records in the `AlgoHnStoryAndAlgoHnTag` collection */
  updateAlgoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagUpdateResponse;
  /** Updates zero or more records in the `AlgoHnStory` collection */
  updateAlgoHnStoryCollection: AlgoHnStoryUpdateResponse;
  /** Updates zero or more records in the `AlgoHnTag` collection */
  updateAlgoHnTagCollection: AlgoHnTagUpdateResponse;
  /** Updates zero or more records in the `GthbForkHist` collection */
  updateGthbForkHistCollection: GthbForkHistUpdateResponse;
  /** Updates zero or more records in the `GthbIssueHist` collection */
  updateGthbIssueHistCollection: GthbIssueHistUpdateResponse;
  /** Updates zero or more records in the `GthbLang` collection */
  updateGthbLangCollection: GthbLangUpdateResponse;
  /** Updates zero or more records in the `GthbOrg` collection */
  updateGthbOrgCollection: GthbOrgUpdateResponse;
  /** Updates zero or more records in the `GthbOwner` collection */
  updateGthbOwnerCollection: GthbOwnerUpdateResponse;
  /** Updates zero or more records in the `GthbRepoAndGthbLang` collection */
  updateGthbRepoAndGthbLangCollection: GthbRepoAndGthbLangUpdateResponse;
  /** Updates zero or more records in the `GthbRepoAndGthbRepoTopic` collection */
  updateGthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicUpdateResponse;
  /** Updates zero or more records in the `GthbRepo` collection */
  updateGthbRepoCollection: GthbRepoUpdateResponse;
  /** Updates zero or more records in the `GthbRepoContr` collection */
  updateGthbRepoContrCollection: GthbRepoContrUpdateResponse;
  /** Updates zero or more records in the `GthbRepoTopic` collection */
  updateGthbRepoTopicCollection: GthbRepoTopicUpdateResponse;
  /** Updates zero or more records in the `GthbStarHist` collection */
  updateGthbStarHistCollection: GthbStarHistUpdateResponse;
  /** Updates zero or more records in the `GthbTrending` collection */
  updateGthbTrendingCollection: GthbTrendingUpdateResponse;
  /** Updates zero or more records in the `GthbUser` collection */
  updateGthbUserCollection: GthbUserUpdateResponse;
  /** Updates zero or more records in the `ProjBookmark` collection */
  updateProjBookmarkCollection: ProjBookmarkUpdateResponse;
  /** Updates zero or more records in the `ProjCatAndProjBookmark` collection */
  updateProjCatAndProjBookmarkCollection: ProjCatAndProjBookmarkUpdateResponse;
  /** Updates zero or more records in the `ProjCat` collection */
  updateProjCatCollection: ProjCatUpdateResponse;
  /** Updates zero or more records in the `ProjClassifier` collection */
  updateProjClassifierCollection: ProjClassifierUpdateResponse;
  /** Updates zero or more records in the `ProjRepoAndAlgoHnQuery` collection */
  updateProjRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryUpdateResponse;
  /** Updates zero or more records in the `ProjRepoAndProjClassifier` collection */
  updateProjRepoAndProjClassifierCollection: ProjRepoAndProjClassifierUpdateResponse;
  /** Updates zero or more records in the `ProjRepoAndSbotLinCompany` collection */
  updateProjRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyUpdateResponse;
  /** Updates zero or more records in the `ProjRepoAndSbotLinProfile` collection */
  updateProjRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileUpdateResponse;
  /** Updates zero or more records in the `ProjRepo` collection */
  updateProjRepoCollection: ProjRepoUpdateResponse;
  /** Updates zero or more records in the `SbotLinCompany` collection */
  updateSbotLinCompanyCollection: SbotLinCompanyUpdateResponse;
  /** Updates zero or more records in the `SbotLinProfile` collection */
  updateSbotLinProfileCollection: SbotLinProfileUpdateResponse;
  /** Updates zero or more records in the `UserAdmin` collection */
  updateUserAdminCollection: UserAdminUpdateResponse;
  /** Updates zero or more records in the `UserApiKey` collection */
  updateUserApiKeyCollection: UserApiKeyUpdateResponse;
  /** Updates zero or more records in the `UserWhitelist` collection */
  updateUserWhitelistCollection: UserWhitelistUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnCommentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnCommentFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnQueryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnQueryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnStoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnStoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnTagFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbForkHistCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbForkHistFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbIssueHistCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbIssueHistFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbLangCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbLangFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbOrgCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbOrgFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbOwnerCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbOwnerFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoAndGthbLangCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbRepoAndGthbLangFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoAndGthbRepoTopicCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbRepoFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoContrCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbRepoContrFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoTopicCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbRepoTopicFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbStarHistCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbStarHistFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbTrendingCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbTrendingFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGthbUserCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbUserFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjBookmarkCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjBookmarkFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjCatAndProjBookmarkCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjCatAndProjBookmarkFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjCatCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjCatFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjClassifierCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjClassifierFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndAlgoHnQueryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndProjClassifierCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjRepoAndProjClassifierFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndSbotLinCompanyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndSbotLinProfileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjRepoFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromSbotLinCompanyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SbotLinCompanyFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromSbotLinProfileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SbotLinProfileFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUserAdminCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserAdminFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUserApiKeyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserApiKeyFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUserWhitelistCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserWhitelistFilter>;
};


/** The root type for creating and mutating data */
export type MutationFDeleteGthbTrendingByDateRangeArgs = {
  daterange: Scalars['Opaque']['input'];
};


/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkArgs = {
  projbookmarkid: Scalars['BigInt']['input'];
};


/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkByGthbNameArgs = {
  ownerlogin: Scalars['String']['input'];
  reponame: Scalars['String']['input'];
};


/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkByProjRepoIdArgs = {
  projrepoid: Scalars['BigInt']['input'];
};


/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkOnProjCatByTitleAndGthbNameArgs = {
  cattitle: Scalars['String']['input'];
  ownerlogin: Scalars['String']['input'];
  reponame: Scalars['String']['input'];
};


/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkOnProjCatByTitleAndGthbRepoIdArgs = {
  cattitle: Scalars['String']['input'];
  id: Scalars['BigInt']['input'];
};


/** The root type for creating and mutating data */
export type MutationFIsProjRepoBookmarkedArgs = {
  projrepoid: Scalars['BigInt']['input'];
};


/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  objects: Array<AlgoHnCommentAndAlgoHnTagInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnCommentCollectionArgs = {
  objects: Array<AlgoHnCommentInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnQueryCollectionArgs = {
  objects: Array<AlgoHnQueryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  objects: Array<AlgoHnStoryAndAlgoHnTagInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnStoryCollectionArgs = {
  objects: Array<AlgoHnStoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoAlgoHnTagCollectionArgs = {
  objects: Array<AlgoHnTagInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbForkHistCollectionArgs = {
  objects: Array<GthbForkHistInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbIssueHistCollectionArgs = {
  objects: Array<GthbIssueHistInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbLangCollectionArgs = {
  objects: Array<GthbLangInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbOrgCollectionArgs = {
  objects: Array<GthbOrgInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbOwnerCollectionArgs = {
  objects: Array<GthbOwnerInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbRepoAndGthbLangCollectionArgs = {
  objects: Array<GthbRepoAndGthbLangInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbRepoAndGthbRepoTopicCollectionArgs = {
  objects: Array<GthbRepoAndGthbRepoTopicInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbRepoCollectionArgs = {
  objects: Array<GthbRepoInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbRepoContrCollectionArgs = {
  objects: Array<GthbRepoContrInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbRepoTopicCollectionArgs = {
  objects: Array<GthbRepoTopicInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbStarHistCollectionArgs = {
  objects: Array<GthbStarHistInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbTrendingCollectionArgs = {
  objects: Array<GthbTrendingInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGthbUserCollectionArgs = {
  objects: Array<GthbUserInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjBookmarkCollectionArgs = {
  objects: Array<ProjBookmarkInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjCatAndProjBookmarkCollectionArgs = {
  objects: Array<ProjCatAndProjBookmarkInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjCatCollectionArgs = {
  objects: Array<ProjCatInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjClassifierCollectionArgs = {
  objects: Array<ProjClassifierInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjRepoAndAlgoHnQueryCollectionArgs = {
  objects: Array<ProjRepoAndAlgoHnQueryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjRepoAndProjClassifierCollectionArgs = {
  objects: Array<ProjRepoAndProjClassifierInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjRepoAndSbotLinCompanyCollectionArgs = {
  objects: Array<ProjRepoAndSbotLinCompanyInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjRepoAndSbotLinProfileCollectionArgs = {
  objects: Array<ProjRepoAndSbotLinProfileInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjRepoCollectionArgs = {
  objects: Array<ProjRepoInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoSbotLinCompanyCollectionArgs = {
  objects: Array<SbotLinCompanyInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoSbotLinProfileCollectionArgs = {
  objects: Array<SbotLinProfileInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUserAdminCollectionArgs = {
  objects: Array<UserAdminInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUserApiKeyCollectionArgs = {
  objects: Array<UserApiKeyInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUserWhitelistCollectionArgs = {
  objects: Array<UserWhitelistInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>;
  set: AlgoHnCommentAndAlgoHnTagUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnCommentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnCommentFilter>;
  set: AlgoHnCommentUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnQueryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnQueryFilter>;
  set: AlgoHnQueryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>;
  set: AlgoHnStoryAndAlgoHnTagUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnStoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnStoryFilter>;
  set: AlgoHnStoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnTagCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AlgoHnTagFilter>;
  set: AlgoHnTagUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbForkHistCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbForkHistFilter>;
  set: GthbForkHistUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbIssueHistCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbIssueHistFilter>;
  set: GthbIssueHistUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbLangCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbLangFilter>;
  set: GthbLangUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbOrgCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbOrgFilter>;
  set: GthbOrgUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbOwnerCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbOwnerFilter>;
  set: GthbOwnerUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoAndGthbLangCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbRepoAndGthbLangFilter>;
  set: GthbRepoAndGthbLangUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoAndGthbRepoTopicCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>;
  set: GthbRepoAndGthbRepoTopicUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbRepoFilter>;
  set: GthbRepoUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoContrCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbRepoContrFilter>;
  set: GthbRepoContrUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoTopicCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbRepoTopicFilter>;
  set: GthbRepoTopicUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbStarHistCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbStarHistFilter>;
  set: GthbStarHistUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbTrendingCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbTrendingFilter>;
  set: GthbTrendingUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGthbUserCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GthbUserFilter>;
  set: GthbUserUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjBookmarkCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjBookmarkFilter>;
  set: ProjBookmarkUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjCatAndProjBookmarkCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjCatAndProjBookmarkFilter>;
  set: ProjCatAndProjBookmarkUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjCatCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjCatFilter>;
  set: ProjCatUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjClassifierCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjClassifierFilter>;
  set: ProjClassifierUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndAlgoHnQueryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>;
  set: ProjRepoAndAlgoHnQueryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndProjClassifierCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjRepoAndProjClassifierFilter>;
  set: ProjRepoAndProjClassifierUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndSbotLinCompanyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>;
  set: ProjRepoAndSbotLinCompanyUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndSbotLinProfileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>;
  set: ProjRepoAndSbotLinProfileUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjRepoCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjRepoFilter>;
  set: ProjRepoUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateSbotLinCompanyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SbotLinCompanyFilter>;
  set: SbotLinCompanyUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateSbotLinProfileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SbotLinProfileFilter>;
  set: SbotLinProfileUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateUserAdminCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserAdminFilter>;
  set: UserAdminUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateUserApiKeyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserApiKeyFilter>;
  set: UserApiKeyUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateUserWhitelistCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserWhitelistFilter>;
  set: UserWhitelistUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

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
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type ProjBookmark = Node & {
  __typename?: 'ProjBookmark';
  authUsersId: Scalars['UUID']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  projBookmarkId: Scalars['BigInt']['output'];
  projCatAndProjBookmarkCollection: ProjCatAndProjBookmarkConnection;
  projRepo: ProjRepo;
  projRepoId: Scalars['BigInt']['output'];
};


export type ProjBookmarkProjCatAndProjBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjCatAndProjBookmarkFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjCatAndProjBookmarkOrderBy>>;
};

export type ProjBookmarkConnection = {
  __typename?: 'ProjBookmarkConnection';
  edges: Array<ProjBookmarkEdge>;
  pageInfo: PageInfo;
};

export type ProjBookmarkDeleteResponse = {
  __typename?: 'ProjBookmarkDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjBookmark>;
};

export type ProjBookmarkEdge = {
  __typename?: 'ProjBookmarkEdge';
  cursor: Scalars['String']['output'];
  node: ProjBookmark;
};

export type ProjBookmarkFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjBookmarkFilter>>;
  authUsersId?: InputMaybe<UuidFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  isPublic?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjBookmarkFilter>;
  note?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjBookmarkFilter>>;
  projBookmarkId?: InputMaybe<BigIntFilter>;
  projRepoId?: InputMaybe<BigIntFilter>;
};

export type ProjBookmarkInsertInput = {
  authUsersId?: InputMaybe<Scalars['UUID']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  projRepoId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjBookmarkInsertResponse = {
  __typename?: 'ProjBookmarkInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjBookmark>;
};

export type ProjBookmarkOrderBy = {
  authUsersId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  isPublic?: InputMaybe<OrderByDirection>;
  note?: InputMaybe<OrderByDirection>;
  projBookmarkId?: InputMaybe<OrderByDirection>;
  projRepoId?: InputMaybe<OrderByDirection>;
};

export type ProjBookmarkUpdateInput = {
  authUsersId?: InputMaybe<Scalars['UUID']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  projRepoId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjBookmarkUpdateResponse = {
  __typename?: 'ProjBookmarkUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjBookmark>;
};

export type ProjCat = Node & {
  __typename?: 'ProjCat';
  authUsersId: Scalars['UUID']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  projCatAndProjBookmarkCollection: ProjCatAndProjBookmarkConnection;
  projCatId: Scalars['BigInt']['output'];
  title: Scalars['String']['output'];
};


export type ProjCatProjCatAndProjBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjCatAndProjBookmarkFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjCatAndProjBookmarkOrderBy>>;
};

export type ProjCatAndProjBookmark = Node & {
  __typename?: 'ProjCatAndProjBookmark';
  internalCreatedAt: Scalars['Datetime']['output'];
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  projBookmark: ProjBookmark;
  projBookmarkId: Scalars['BigInt']['output'];
  projCat: ProjCat;
  projCatId: Scalars['BigInt']['output'];
};

export type ProjCatAndProjBookmarkConnection = {
  __typename?: 'ProjCatAndProjBookmarkConnection';
  edges: Array<ProjCatAndProjBookmarkEdge>;
  pageInfo: PageInfo;
};

export type ProjCatAndProjBookmarkDeleteResponse = {
  __typename?: 'ProjCatAndProjBookmarkDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjCatAndProjBookmark>;
};

export type ProjCatAndProjBookmarkEdge = {
  __typename?: 'ProjCatAndProjBookmarkEdge';
  cursor: Scalars['String']['output'];
  node: ProjCatAndProjBookmark;
};

export type ProjCatAndProjBookmarkFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjCatAndProjBookmarkFilter>>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  isPinned?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjCatAndProjBookmarkFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjCatAndProjBookmarkFilter>>;
  projBookmarkId?: InputMaybe<BigIntFilter>;
  projCatId?: InputMaybe<BigIntFilter>;
};

export type ProjCatAndProjBookmarkInsertInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isPinned?: InputMaybe<Scalars['Boolean']['input']>;
  projBookmarkId?: InputMaybe<Scalars['BigInt']['input']>;
  projCatId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjCatAndProjBookmarkInsertResponse = {
  __typename?: 'ProjCatAndProjBookmarkInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjCatAndProjBookmark>;
};

export type ProjCatAndProjBookmarkOrderBy = {
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  isPinned?: InputMaybe<OrderByDirection>;
  projBookmarkId?: InputMaybe<OrderByDirection>;
  projCatId?: InputMaybe<OrderByDirection>;
};

export type ProjCatAndProjBookmarkUpdateInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isPinned?: InputMaybe<Scalars['Boolean']['input']>;
  projBookmarkId?: InputMaybe<Scalars['BigInt']['input']>;
  projCatId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjCatAndProjBookmarkUpdateResponse = {
  __typename?: 'ProjCatAndProjBookmarkUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjCatAndProjBookmark>;
};

export type ProjCatConnection = {
  __typename?: 'ProjCatConnection';
  edges: Array<ProjCatEdge>;
  pageInfo: PageInfo;
};

export type ProjCatDeleteResponse = {
  __typename?: 'ProjCatDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjCat>;
};

export type ProjCatEdge = {
  __typename?: 'ProjCatEdge';
  cursor: Scalars['String']['output'];
  node: ProjCat;
};

export type ProjCatFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjCatFilter>>;
  authUsersId?: InputMaybe<UuidFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  isPublic?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjCatFilter>;
  note?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjCatFilter>>;
  projCatId?: InputMaybe<BigIntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProjCatInsertInput = {
  authUsersId?: InputMaybe<Scalars['UUID']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjCatInsertResponse = {
  __typename?: 'ProjCatInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjCat>;
};

export type ProjCatOrderBy = {
  authUsersId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  isPublic?: InputMaybe<OrderByDirection>;
  note?: InputMaybe<OrderByDirection>;
  projCatId?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type ProjCatUpdateInput = {
  authUsersId?: InputMaybe<Scalars['UUID']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjCatUpdateResponse = {
  __typename?: 'ProjCatUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjCat>;
};

export type ProjClassifier = Node & {
  __typename?: 'ProjClassifier';
  classifier: Scalars['String']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  projClassifierId: Scalars['BigInt']['output'];
  projRepoAndProjClassifierCollection: ProjRepoAndProjClassifierConnection;
};


export type ProjClassifierProjRepoAndProjClassifierCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndProjClassifierFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndProjClassifierOrderBy>>;
};

export type ProjClassifierConnection = {
  __typename?: 'ProjClassifierConnection';
  edges: Array<ProjClassifierEdge>;
  pageInfo: PageInfo;
};

export type ProjClassifierDeleteResponse = {
  __typename?: 'ProjClassifierDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjClassifier>;
};

export type ProjClassifierEdge = {
  __typename?: 'ProjClassifierEdge';
  cursor: Scalars['String']['output'];
  node: ProjClassifier;
};

export type ProjClassifierFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjClassifierFilter>>;
  classifier?: InputMaybe<StringFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjClassifierFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjClassifierFilter>>;
  projClassifierId?: InputMaybe<BigIntFilter>;
};

export type ProjClassifierInsertInput = {
  classifier?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProjClassifierInsertResponse = {
  __typename?: 'ProjClassifierInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjClassifier>;
};

export type ProjClassifierOrderBy = {
  classifier?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  projClassifierId?: InputMaybe<OrderByDirection>;
};

export type ProjClassifierUpdateInput = {
  classifier?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProjClassifierUpdateResponse = {
  __typename?: 'ProjClassifierUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjClassifier>;
};

export type ProjRepo = Node & {
  __typename?: 'ProjRepo';
  algoHnEli5?: Maybe<Scalars['String']['output']>;
  gthbRepo: GthbRepo;
  gthbRepoId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  projBookmarkCollection: ProjBookmarkConnection;
  projRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryConnection;
  projRepoAndProjClassifierCollection: ProjRepoAndProjClassifierConnection;
  projRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyConnection;
  projRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileConnection;
  projRepoId: Scalars['BigInt']['output'];
  repoEli5?: Maybe<Scalars['String']['output']>;
};


export type ProjRepoProjBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjBookmarkFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjBookmarkOrderBy>>;
};


export type ProjRepoProjRepoAndAlgoHnQueryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndAlgoHnQueryOrderBy>>;
};


export type ProjRepoProjRepoAndProjClassifierCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndProjClassifierFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndProjClassifierOrderBy>>;
};


export type ProjRepoProjRepoAndSbotLinCompanyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinCompanyOrderBy>>;
};


export type ProjRepoProjRepoAndSbotLinProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinProfileOrderBy>>;
};

export type ProjRepoAndAlgoHnQuery = Node & {
  __typename?: 'ProjRepoAndAlgoHnQuery';
  algoHnQuery: AlgoHnQuery;
  algoHnQueryId: Scalars['BigInt']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  projRepo: ProjRepo;
  projRepoId: Scalars['BigInt']['output'];
};

export type ProjRepoAndAlgoHnQueryConnection = {
  __typename?: 'ProjRepoAndAlgoHnQueryConnection';
  edges: Array<ProjRepoAndAlgoHnQueryEdge>;
  pageInfo: PageInfo;
};

export type ProjRepoAndAlgoHnQueryDeleteResponse = {
  __typename?: 'ProjRepoAndAlgoHnQueryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndAlgoHnQuery>;
};

export type ProjRepoAndAlgoHnQueryEdge = {
  __typename?: 'ProjRepoAndAlgoHnQueryEdge';
  cursor: Scalars['String']['output'];
  node: ProjRepoAndAlgoHnQuery;
};

export type ProjRepoAndAlgoHnQueryFilter = {
  algoHnQueryId?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjRepoAndAlgoHnQueryFilter>>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjRepoAndAlgoHnQueryFilter>>;
  projRepoId?: InputMaybe<BigIntFilter>;
};

export type ProjRepoAndAlgoHnQueryInsertInput = {
  algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  projRepoId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjRepoAndAlgoHnQueryInsertResponse = {
  __typename?: 'ProjRepoAndAlgoHnQueryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndAlgoHnQuery>;
};

export type ProjRepoAndAlgoHnQueryOrderBy = {
  algoHnQueryId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  projRepoId?: InputMaybe<OrderByDirection>;
};

export type ProjRepoAndAlgoHnQueryUpdateInput = {
  algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  projRepoId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjRepoAndAlgoHnQueryUpdateResponse = {
  __typename?: 'ProjRepoAndAlgoHnQueryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndAlgoHnQuery>;
};

export type ProjRepoAndProjClassifier = Node & {
  __typename?: 'ProjRepoAndProjClassifier';
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  projClassifier: ProjClassifier;
  projClassifierId: Scalars['BigInt']['output'];
  projRepo: ProjRepo;
  projRepoId: Scalars['BigInt']['output'];
};

export type ProjRepoAndProjClassifierConnection = {
  __typename?: 'ProjRepoAndProjClassifierConnection';
  edges: Array<ProjRepoAndProjClassifierEdge>;
  pageInfo: PageInfo;
};

export type ProjRepoAndProjClassifierDeleteResponse = {
  __typename?: 'ProjRepoAndProjClassifierDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndProjClassifier>;
};

export type ProjRepoAndProjClassifierEdge = {
  __typename?: 'ProjRepoAndProjClassifierEdge';
  cursor: Scalars['String']['output'];
  node: ProjRepoAndProjClassifier;
};

export type ProjRepoAndProjClassifierFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjRepoAndProjClassifierFilter>>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjRepoAndProjClassifierFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjRepoAndProjClassifierFilter>>;
  projClassifierId?: InputMaybe<BigIntFilter>;
  projRepoId?: InputMaybe<BigIntFilter>;
};

export type ProjRepoAndProjClassifierInsertInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  projClassifierId?: InputMaybe<Scalars['BigInt']['input']>;
  projRepoId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjRepoAndProjClassifierInsertResponse = {
  __typename?: 'ProjRepoAndProjClassifierInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndProjClassifier>;
};

export type ProjRepoAndProjClassifierOrderBy = {
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  projClassifierId?: InputMaybe<OrderByDirection>;
  projRepoId?: InputMaybe<OrderByDirection>;
};

export type ProjRepoAndProjClassifierUpdateInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  projClassifierId?: InputMaybe<Scalars['BigInt']['input']>;
  projRepoId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjRepoAndProjClassifierUpdateResponse = {
  __typename?: 'ProjRepoAndProjClassifierUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndProjClassifier>;
};

export type ProjRepoAndSbotLinCompany = Node & {
  __typename?: 'ProjRepoAndSbotLinCompany';
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  projRepo: ProjRepo;
  projRepoId: Scalars['BigInt']['output'];
  sbotLinCompany: SbotLinCompany;
  sbotLinCompanyId: Scalars['BigInt']['output'];
};

export type ProjRepoAndSbotLinCompanyConnection = {
  __typename?: 'ProjRepoAndSbotLinCompanyConnection';
  edges: Array<ProjRepoAndSbotLinCompanyEdge>;
  pageInfo: PageInfo;
};

export type ProjRepoAndSbotLinCompanyDeleteResponse = {
  __typename?: 'ProjRepoAndSbotLinCompanyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinCompany>;
};

export type ProjRepoAndSbotLinCompanyEdge = {
  __typename?: 'ProjRepoAndSbotLinCompanyEdge';
  cursor: Scalars['String']['output'];
  node: ProjRepoAndSbotLinCompany;
};

export type ProjRepoAndSbotLinCompanyFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjRepoAndSbotLinCompanyFilter>>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjRepoAndSbotLinCompanyFilter>>;
  projRepoId?: InputMaybe<BigIntFilter>;
  sbotLinCompanyId?: InputMaybe<BigIntFilter>;
};

export type ProjRepoAndSbotLinCompanyInsertInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  projRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  sbotLinCompanyId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjRepoAndSbotLinCompanyInsertResponse = {
  __typename?: 'ProjRepoAndSbotLinCompanyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinCompany>;
};

export type ProjRepoAndSbotLinCompanyOrderBy = {
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  projRepoId?: InputMaybe<OrderByDirection>;
  sbotLinCompanyId?: InputMaybe<OrderByDirection>;
};

export type ProjRepoAndSbotLinCompanyUpdateInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  projRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  sbotLinCompanyId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjRepoAndSbotLinCompanyUpdateResponse = {
  __typename?: 'ProjRepoAndSbotLinCompanyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinCompany>;
};

export type ProjRepoAndSbotLinProfile = Node & {
  __typename?: 'ProjRepoAndSbotLinProfile';
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  projRepo: ProjRepo;
  projRepoId: Scalars['BigInt']['output'];
  sbotLinProfile: SbotLinProfile;
  sbotLinProfileId: Scalars['BigInt']['output'];
};

export type ProjRepoAndSbotLinProfileConnection = {
  __typename?: 'ProjRepoAndSbotLinProfileConnection';
  edges: Array<ProjRepoAndSbotLinProfileEdge>;
  pageInfo: PageInfo;
};

export type ProjRepoAndSbotLinProfileDeleteResponse = {
  __typename?: 'ProjRepoAndSbotLinProfileDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinProfile>;
};

export type ProjRepoAndSbotLinProfileEdge = {
  __typename?: 'ProjRepoAndSbotLinProfileEdge';
  cursor: Scalars['String']['output'];
  node: ProjRepoAndSbotLinProfile;
};

export type ProjRepoAndSbotLinProfileFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjRepoAndSbotLinProfileFilter>>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjRepoAndSbotLinProfileFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjRepoAndSbotLinProfileFilter>>;
  projRepoId?: InputMaybe<BigIntFilter>;
  sbotLinProfileId?: InputMaybe<BigIntFilter>;
};

export type ProjRepoAndSbotLinProfileInsertInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  projRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  sbotLinProfileId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjRepoAndSbotLinProfileInsertResponse = {
  __typename?: 'ProjRepoAndSbotLinProfileInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinProfile>;
};

export type ProjRepoAndSbotLinProfileOrderBy = {
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  projRepoId?: InputMaybe<OrderByDirection>;
  sbotLinProfileId?: InputMaybe<OrderByDirection>;
};

export type ProjRepoAndSbotLinProfileUpdateInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  projRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  sbotLinProfileId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ProjRepoAndSbotLinProfileUpdateResponse = {
  __typename?: 'ProjRepoAndSbotLinProfileUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepoAndSbotLinProfile>;
};

export type ProjRepoConnection = {
  __typename?: 'ProjRepoConnection';
  edges: Array<ProjRepoEdge>;
  pageInfo: PageInfo;
};

export type ProjRepoDeleteResponse = {
  __typename?: 'ProjRepoDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepo>;
};

export type ProjRepoEdge = {
  __typename?: 'ProjRepoEdge';
  cursor: Scalars['String']['output'];
  node: ProjRepo;
};

export type ProjRepoFilter = {
  algoHnEli5?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjRepoFilter>>;
  gthbRepoId?: InputMaybe<BigIntFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjRepoFilter>;
  note?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjRepoFilter>>;
  projRepoId?: InputMaybe<BigIntFilter>;
  repoEli5?: InputMaybe<StringFilter>;
};

export type ProjRepoInsertInput = {
  algoHnEli5?: InputMaybe<Scalars['String']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  repoEli5?: InputMaybe<Scalars['String']['input']>;
};

export type ProjRepoInsertResponse = {
  __typename?: 'ProjRepoInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepo>;
};

export type ProjRepoOrderBy = {
  algoHnEli5?: InputMaybe<OrderByDirection>;
  gthbRepoId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  note?: InputMaybe<OrderByDirection>;
  projRepoId?: InputMaybe<OrderByDirection>;
  repoEli5?: InputMaybe<OrderByDirection>;
};

export type ProjRepoUpdateInput = {
  algoHnEli5?: InputMaybe<Scalars['String']['input']>;
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  repoEli5?: InputMaybe<Scalars['String']['input']>;
};

export type ProjRepoUpdateResponse = {
  __typename?: 'ProjRepoUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<ProjRepo>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `AlgoHnCommentAndAlgoHnTag` */
  algoHnCommentAndAlgoHnTagCollection?: Maybe<AlgoHnCommentAndAlgoHnTagConnection>;
  /** A pagable collection of type `AlgoHnComment` */
  algoHnCommentCollection?: Maybe<AlgoHnCommentConnection>;
  /** A pagable collection of type `AlgoHnQuery` */
  algoHnQueryCollection?: Maybe<AlgoHnQueryConnection>;
  /** A pagable collection of type `AlgoHnStoryAndAlgoHnTag` */
  algoHnStoryAndAlgoHnTagCollection?: Maybe<AlgoHnStoryAndAlgoHnTagConnection>;
  /** A pagable collection of type `AlgoHnStory` */
  algoHnStoryCollection?: Maybe<AlgoHnStoryConnection>;
  /** A pagable collection of type `AlgoHnTag` */
  algoHnTagCollection?: Maybe<AlgoHnTagConnection>;
  fGetGthbOrgByGthbName?: Maybe<GthbOrgConnection>;
  fGetGthbOrgByGthbRepoId?: Maybe<GthbOrgConnection>;
  fGetGthbOwnerByGthbName?: Maybe<GthbOwnerConnection>;
  fGetGthbRepoByGthbName?: Maybe<GthbRepoConnection>;
  fGetGthbUserByGthbName?: Maybe<GthbUserConnection>;
  fGetGthbUserByGthbRepoId?: Maybe<GthbUserConnection>;
  fGetProjBookmarkByGthbName?: Maybe<ProjBookmarkConnection>;
  fGetProjRepoByGthbName?: Maybe<ProjRepoConnection>;
  fIsGthbRepoBookmarked?: Maybe<Scalars['Boolean']['output']>;
  fListBookmarkedGthbRepo?: Maybe<GthbRepoConnection>;
  fListGthbReposByCatTitle?: Maybe<GthbRepoConnection>;
  fListTrendingGthbRepo?: Maybe<GthbRepoConnection>;
  /** A pagable collection of type `GthbForkHist` */
  gthbForkHistCollection?: Maybe<GthbForkHistConnection>;
  /** A pagable collection of type `GthbIssueHist` */
  gthbIssueHistCollection?: Maybe<GthbIssueHistConnection>;
  /** A pagable collection of type `GthbLang` */
  gthbLangCollection?: Maybe<GthbLangConnection>;
  /** A pagable collection of type `GthbOrg` */
  gthbOrgCollection?: Maybe<GthbOrgConnection>;
  /** A pagable collection of type `GthbOwner` */
  gthbOwnerCollection?: Maybe<GthbOwnerConnection>;
  /** A pagable collection of type `GthbRepoAndGthbLang` */
  gthbRepoAndGthbLangCollection?: Maybe<GthbRepoAndGthbLangConnection>;
  /** A pagable collection of type `GthbRepoAndGthbRepoTopic` */
  gthbRepoAndGthbRepoTopicCollection?: Maybe<GthbRepoAndGthbRepoTopicConnection>;
  /** A pagable collection of type `GthbRepo` */
  gthbRepoCollection?: Maybe<GthbRepoConnection>;
  /** A pagable collection of type `GthbRepoContr` */
  gthbRepoContrCollection?: Maybe<GthbRepoContrConnection>;
  /** A pagable collection of type `GthbRepoTopic` */
  gthbRepoTopicCollection?: Maybe<GthbRepoTopicConnection>;
  /** A pagable collection of type `GthbStarHist` */
  gthbStarHistCollection?: Maybe<GthbStarHistConnection>;
  /** A pagable collection of type `GthbTrending` */
  gthbTrendingCollection?: Maybe<GthbTrendingConnection>;
  /** A pagable collection of type `GthbUser` */
  gthbUserCollection?: Maybe<GthbUserConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `ProjBookmark` */
  projBookmarkCollection?: Maybe<ProjBookmarkConnection>;
  /** A pagable collection of type `ProjCatAndProjBookmark` */
  projCatAndProjBookmarkCollection?: Maybe<ProjCatAndProjBookmarkConnection>;
  /** A pagable collection of type `ProjCat` */
  projCatCollection?: Maybe<ProjCatConnection>;
  /** A pagable collection of type `ProjClassifier` */
  projClassifierCollection?: Maybe<ProjClassifierConnection>;
  /** A pagable collection of type `ProjRepoAndAlgoHnQuery` */
  projRepoAndAlgoHnQueryCollection?: Maybe<ProjRepoAndAlgoHnQueryConnection>;
  /** A pagable collection of type `ProjRepoAndProjClassifier` */
  projRepoAndProjClassifierCollection?: Maybe<ProjRepoAndProjClassifierConnection>;
  /** A pagable collection of type `ProjRepoAndSbotLinCompany` */
  projRepoAndSbotLinCompanyCollection?: Maybe<ProjRepoAndSbotLinCompanyConnection>;
  /** A pagable collection of type `ProjRepoAndSbotLinProfile` */
  projRepoAndSbotLinProfileCollection?: Maybe<ProjRepoAndSbotLinProfileConnection>;
  /** A pagable collection of type `ProjRepo` */
  projRepoCollection?: Maybe<ProjRepoConnection>;
  /** A pagable collection of type `SbotLinCompany` */
  sbotLinCompanyCollection?: Maybe<SbotLinCompanyConnection>;
  /** A pagable collection of type `SbotLinProfile` */
  sbotLinProfileCollection?: Maybe<SbotLinProfileConnection>;
  /** A pagable collection of type `UserAdmin` */
  userAdminCollection?: Maybe<UserAdminConnection>;
  /** A pagable collection of type `UserApiKey` */
  userApiKeyCollection?: Maybe<UserApiKeyConnection>;
  /** A pagable collection of type `UserWhitelist` */
  userWhitelistCollection?: Maybe<UserWhitelistConnection>;
};


/** The root type for querying data */
export type QueryAlgoHnCommentAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>;
};


/** The root type for querying data */
export type QueryAlgoHnCommentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnCommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnCommentOrderBy>>;
};


/** The root type for querying data */
export type QueryAlgoHnQueryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnQueryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnQueryOrderBy>>;
};


/** The root type for querying data */
export type QueryAlgoHnStoryAndAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagOrderBy>>;
};


/** The root type for querying data */
export type QueryAlgoHnStoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnStoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnStoryOrderBy>>;
};


/** The root type for querying data */
export type QueryAlgoHnTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AlgoHnTagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AlgoHnTagOrderBy>>;
};


/** The root type for querying data */
export type QueryFGetGthbOrgByGthbNameArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbOrgFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbOrgOrderBy>>;
  ownerlogin: Scalars['String']['input'];
  reponame: Scalars['String']['input'];
};


/** The root type for querying data */
export type QueryFGetGthbOrgByGthbRepoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbOrgFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gthbRepoIdArg: Scalars['BigInt']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbOrgOrderBy>>;
};


/** The root type for querying data */
export type QueryFGetGthbOwnerByGthbNameArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbOwnerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbOwnerOrderBy>>;
  ownerlogin: Scalars['String']['input'];
  reponame: Scalars['String']['input'];
};


/** The root type for querying data */
export type QueryFGetGthbRepoByGthbNameArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoOrderBy>>;
  ownerlogin: Scalars['String']['input'];
  reponame: Scalars['String']['input'];
};


/** The root type for querying data */
export type QueryFGetGthbUserByGthbNameArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbUserOrderBy>>;
  ownerlogin: Scalars['String']['input'];
  reponame: Scalars['String']['input'];
};


/** The root type for querying data */
export type QueryFGetGthbUserByGthbRepoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gthbRepoIdArg: Scalars['BigInt']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbUserOrderBy>>;
};


/** The root type for querying data */
export type QueryFGetProjBookmarkByGthbNameArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjBookmarkFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjBookmarkOrderBy>>;
  ownerlogin: Scalars['String']['input'];
  reponame: Scalars['String']['input'];
};


/** The root type for querying data */
export type QueryFGetProjRepoByGthbNameArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoOrderBy>>;
  ownerlogin: Scalars['String']['input'];
  reponame: Scalars['String']['input'];
};


/** The root type for querying data */
export type QueryFIsGthbRepoBookmarkedArgs = {
  githubreponame: Scalars['String']['input'];
};


/** The root type for querying data */
export type QueryFListBookmarkedGthbRepoArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoOrderBy>>;
};


/** The root type for querying data */
export type QueryFListGthbReposByCatTitleArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  catTitleArg: Scalars['String']['input'];
  filter?: InputMaybe<GthbRepoFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoOrderBy>>;
};


/** The root type for querying data */
export type QueryFListTrendingGthbRepoArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gthbDateRangeArg: Scalars['String']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbForkHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbForkHistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbForkHistOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbIssueHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbIssueHistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbIssueHistOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbLangCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbLangFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbLangOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbOrgCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbOrgFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbOrgOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbOwnerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbOwnerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbOwnerOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbRepoAndGthbLangCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoAndGthbLangFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoAndGthbLangOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbRepoAndGthbRepoTopicCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoAndGthbRepoTopicOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbRepoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbRepoContrCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoContrFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoContrOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbRepoTopicCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbRepoTopicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbRepoTopicOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbStarHistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbStarHistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbStarHistOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbTrendingCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbTrendingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbTrendingOrderBy>>;
};


/** The root type for querying data */
export type QueryGthbUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GthbUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GthbUserOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryProjBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjBookmarkFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjBookmarkOrderBy>>;
};


/** The root type for querying data */
export type QueryProjCatAndProjBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjCatAndProjBookmarkFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjCatAndProjBookmarkOrderBy>>;
};


/** The root type for querying data */
export type QueryProjCatCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjCatFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjCatOrderBy>>;
};


/** The root type for querying data */
export type QueryProjClassifierCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjClassifierFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjClassifierOrderBy>>;
};


/** The root type for querying data */
export type QueryProjRepoAndAlgoHnQueryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndAlgoHnQueryOrderBy>>;
};


/** The root type for querying data */
export type QueryProjRepoAndProjClassifierCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndProjClassifierFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndProjClassifierOrderBy>>;
};


/** The root type for querying data */
export type QueryProjRepoAndSbotLinCompanyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinCompanyOrderBy>>;
};


/** The root type for querying data */
export type QueryProjRepoAndSbotLinProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinProfileOrderBy>>;
};


/** The root type for querying data */
export type QueryProjRepoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoOrderBy>>;
};


/** The root type for querying data */
export type QuerySbotLinCompanyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SbotLinCompanyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SbotLinCompanyOrderBy>>;
};


/** The root type for querying data */
export type QuerySbotLinProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SbotLinProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SbotLinProfileOrderBy>>;
};


/** The root type for querying data */
export type QueryUserAdminCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserAdminFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserAdminOrderBy>>;
};


/** The root type for querying data */
export type QueryUserApiKeyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserApiKeyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserApiKeyOrderBy>>;
};


/** The root type for querying data */
export type QueryUserWhitelistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserWhitelistFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserWhitelistOrderBy>>;
};

export type SbotLinCompany = Node & {
  __typename?: 'SbotLinCompany';
  about?: Maybe<Scalars['String']['output']>;
  employeesAmountInLinkedin: Scalars['BigInt']['output'];
  followers: Scalars['BigInt']['output'];
  headquarters?: Maybe<Scalars['String']['output']>;
  internalCreatedAt: Scalars['Datetime']['output'];
  logo: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  projRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyConnection;
  sbotLinCompanyId: Scalars['BigInt']['output'];
  sbotLinCompanyImage: Scalars['String']['output'];
  sbotLinCompanyName: Scalars['String']['output'];
  sbotLinCompanyType?: Maybe<Scalars['String']['output']>;
  sbotLinCompanyUrl: Scalars['String']['output'];
  sphere?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


export type SbotLinCompanyProjRepoAndSbotLinCompanyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinCompanyOrderBy>>;
};

export type SbotLinCompanyConnection = {
  __typename?: 'SbotLinCompanyConnection';
  edges: Array<SbotLinCompanyEdge>;
  pageInfo: PageInfo;
};

export type SbotLinCompanyDeleteResponse = {
  __typename?: 'SbotLinCompanyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<SbotLinCompany>;
};

export type SbotLinCompanyEdge = {
  __typename?: 'SbotLinCompanyEdge';
  cursor: Scalars['String']['output'];
  node: SbotLinCompany;
};

export type SbotLinCompanyFilter = {
  about?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<SbotLinCompanyFilter>>;
  employeesAmountInLinkedin?: InputMaybe<BigIntFilter>;
  followers?: InputMaybe<BigIntFilter>;
  headquarters?: InputMaybe<StringFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  logo?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<SbotLinCompanyFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<SbotLinCompanyFilter>>;
  sbotLinCompanyId?: InputMaybe<BigIntFilter>;
  sbotLinCompanyImage?: InputMaybe<StringFilter>;
  sbotLinCompanyName?: InputMaybe<StringFilter>;
  sbotLinCompanyType?: InputMaybe<StringFilter>;
  sbotLinCompanyUrl?: InputMaybe<StringFilter>;
  sphere?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
};

export type SbotLinCompanyInsertInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  employeesAmountInLinkedin?: InputMaybe<Scalars['BigInt']['input']>;
  followers?: InputMaybe<Scalars['BigInt']['input']>;
  headquarters?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  sbotLinCompanyImage?: InputMaybe<Scalars['String']['input']>;
  sbotLinCompanyName?: InputMaybe<Scalars['String']['input']>;
  sbotLinCompanyType?: InputMaybe<Scalars['String']['input']>;
  sbotLinCompanyUrl?: InputMaybe<Scalars['String']['input']>;
  sphere?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type SbotLinCompanyInsertResponse = {
  __typename?: 'SbotLinCompanyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<SbotLinCompany>;
};

export type SbotLinCompanyOrderBy = {
  about?: InputMaybe<OrderByDirection>;
  employeesAmountInLinkedin?: InputMaybe<OrderByDirection>;
  followers?: InputMaybe<OrderByDirection>;
  headquarters?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  logo?: InputMaybe<OrderByDirection>;
  sbotLinCompanyId?: InputMaybe<OrderByDirection>;
  sbotLinCompanyImage?: InputMaybe<OrderByDirection>;
  sbotLinCompanyName?: InputMaybe<OrderByDirection>;
  sbotLinCompanyType?: InputMaybe<OrderByDirection>;
  sbotLinCompanyUrl?: InputMaybe<OrderByDirection>;
  sphere?: InputMaybe<OrderByDirection>;
  website?: InputMaybe<OrderByDirection>;
};

export type SbotLinCompanyUpdateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  employeesAmountInLinkedin?: InputMaybe<Scalars['BigInt']['input']>;
  followers?: InputMaybe<Scalars['BigInt']['input']>;
  headquarters?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  sbotLinCompanyImage?: InputMaybe<Scalars['String']['input']>;
  sbotLinCompanyName?: InputMaybe<Scalars['String']['input']>;
  sbotLinCompanyType?: InputMaybe<Scalars['String']['input']>;
  sbotLinCompanyUrl?: InputMaybe<Scalars['String']['input']>;
  sphere?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type SbotLinCompanyUpdateResponse = {
  __typename?: 'SbotLinCompanyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<SbotLinCompany>;
};

export type SbotLinProfile = Node & {
  __typename?: 'SbotLinProfile';
  about?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  currentCompanyLink?: Maybe<Scalars['String']['output']>;
  currentCompanyName?: Maybe<Scalars['String']['output']>;
  educationDetails?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<Scalars['String']['output']>;
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  position?: Maybe<Scalars['String']['output']>;
  projRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileConnection;
  sbotLinProfileFollowing?: Maybe<Scalars['String']['output']>;
  sbotLinProfileId: Scalars['BigInt']['output'];
  sbotLinProfileName: Scalars['String']['output'];
  sbotLinProfileUrl: Scalars['String']['output'];
};


export type SbotLinProfileProjRepoAndSbotLinProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjRepoAndSbotLinProfileOrderBy>>;
};

export type SbotLinProfileConnection = {
  __typename?: 'SbotLinProfileConnection';
  edges: Array<SbotLinProfileEdge>;
  pageInfo: PageInfo;
};

export type SbotLinProfileDeleteResponse = {
  __typename?: 'SbotLinProfileDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<SbotLinProfile>;
};

export type SbotLinProfileEdge = {
  __typename?: 'SbotLinProfileEdge';
  cursor: Scalars['String']['output'];
  node: SbotLinProfile;
};

export type SbotLinProfileFilter = {
  about?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<SbotLinProfileFilter>>;
  avatar?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  currentCompanyLink?: InputMaybe<StringFilter>;
  currentCompanyName?: InputMaybe<StringFilter>;
  educationDetails?: InputMaybe<StringFilter>;
  followers?: InputMaybe<StringFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<SbotLinProfileFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<SbotLinProfileFilter>>;
  position?: InputMaybe<StringFilter>;
  sbotLinProfileFollowing?: InputMaybe<StringFilter>;
  sbotLinProfileId?: InputMaybe<BigIntFilter>;
  sbotLinProfileName?: InputMaybe<StringFilter>;
  sbotLinProfileUrl?: InputMaybe<StringFilter>;
};

export type SbotLinProfileInsertInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  currentCompanyLink?: InputMaybe<Scalars['String']['input']>;
  currentCompanyName?: InputMaybe<Scalars['String']['input']>;
  educationDetails?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  sbotLinProfileFollowing?: InputMaybe<Scalars['String']['input']>;
  sbotLinProfileName?: InputMaybe<Scalars['String']['input']>;
  sbotLinProfileUrl?: InputMaybe<Scalars['String']['input']>;
};

export type SbotLinProfileInsertResponse = {
  __typename?: 'SbotLinProfileInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<SbotLinProfile>;
};

export type SbotLinProfileOrderBy = {
  about?: InputMaybe<OrderByDirection>;
  avatar?: InputMaybe<OrderByDirection>;
  city?: InputMaybe<OrderByDirection>;
  currentCompanyLink?: InputMaybe<OrderByDirection>;
  currentCompanyName?: InputMaybe<OrderByDirection>;
  educationDetails?: InputMaybe<OrderByDirection>;
  followers?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  position?: InputMaybe<OrderByDirection>;
  sbotLinProfileFollowing?: InputMaybe<OrderByDirection>;
  sbotLinProfileId?: InputMaybe<OrderByDirection>;
  sbotLinProfileName?: InputMaybe<OrderByDirection>;
  sbotLinProfileUrl?: InputMaybe<OrderByDirection>;
};

export type SbotLinProfileUpdateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  currentCompanyLink?: InputMaybe<Scalars['String']['input']>;
  currentCompanyName?: InputMaybe<Scalars['String']['input']>;
  educationDetails?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<Scalars['String']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  sbotLinProfileFollowing?: InputMaybe<Scalars['String']['input']>;
  sbotLinProfileName?: InputMaybe<Scalars['String']['input']>;
  sbotLinProfileUrl?: InputMaybe<Scalars['String']['input']>;
};

export type SbotLinProfileUpdateResponse = {
  __typename?: 'SbotLinProfileUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<SbotLinProfile>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type UserAdmin = Node & {
  __typename?: 'UserAdmin';
  authUsersId: Scalars['UUID']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type UserAdminConnection = {
  __typename?: 'UserAdminConnection';
  edges: Array<UserAdminEdge>;
  pageInfo: PageInfo;
};

export type UserAdminDeleteResponse = {
  __typename?: 'UserAdminDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserAdmin>;
};

export type UserAdminEdge = {
  __typename?: 'UserAdminEdge';
  cursor: Scalars['String']['output'];
  node: UserAdmin;
};

export type UserAdminFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UserAdminFilter>>;
  authUsersId?: InputMaybe<UuidFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UserAdminFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UserAdminFilter>>;
};

export type UserAdminInsertInput = {
  authUsersId?: InputMaybe<Scalars['UUID']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type UserAdminInsertResponse = {
  __typename?: 'UserAdminInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserAdmin>;
};

export type UserAdminOrderBy = {
  authUsersId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
};

export type UserAdminUpdateInput = {
  authUsersId?: InputMaybe<Scalars['UUID']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

export type UserAdminUpdateResponse = {
  __typename?: 'UserAdminUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserAdmin>;
};

export type UserApiKey = Node & {
  __typename?: 'UserApiKey';
  authUsersId: Scalars['UUID']['output'];
  internalCreatedAt: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  userApiKey: Scalars['UUID']['output'];
  userApiKeyId: Scalars['BigInt']['output'];
};

export type UserApiKeyConnection = {
  __typename?: 'UserApiKeyConnection';
  edges: Array<UserApiKeyEdge>;
  pageInfo: PageInfo;
};

export type UserApiKeyDeleteResponse = {
  __typename?: 'UserApiKeyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserApiKey>;
};

export type UserApiKeyEdge = {
  __typename?: 'UserApiKeyEdge';
  cursor: Scalars['String']['output'];
  node: UserApiKey;
};

export type UserApiKeyFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UserApiKeyFilter>>;
  authUsersId?: InputMaybe<UuidFilter>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UserApiKeyFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UserApiKeyFilter>>;
  userApiKey?: InputMaybe<UuidFilter>;
  userApiKeyId?: InputMaybe<BigIntFilter>;
};

export type UserApiKeyInsertInput = {
  authUsersId?: InputMaybe<Scalars['UUID']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userApiKey?: InputMaybe<Scalars['UUID']['input']>;
};

export type UserApiKeyInsertResponse = {
  __typename?: 'UserApiKeyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserApiKey>;
};

export type UserApiKeyOrderBy = {
  authUsersId?: InputMaybe<OrderByDirection>;
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  userApiKey?: InputMaybe<OrderByDirection>;
  userApiKeyId?: InputMaybe<OrderByDirection>;
};

export type UserApiKeyUpdateInput = {
  authUsersId?: InputMaybe<Scalars['UUID']['input']>;
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userApiKey?: InputMaybe<Scalars['UUID']['input']>;
};

export type UserApiKeyUpdateResponse = {
  __typename?: 'UserApiKeyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserApiKey>;
};

export type UserWhitelist = Node & {
  __typename?: 'UserWhitelist';
  internalCreatedAt?: Maybe<Scalars['Datetime']['output']>;
  kind: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  userWhitelistId: Scalars['BigInt']['output'];
  userWhitelistValue?: Maybe<Scalars['String']['output']>;
};

export type UserWhitelistConnection = {
  __typename?: 'UserWhitelistConnection';
  edges: Array<UserWhitelistEdge>;
  pageInfo: PageInfo;
};

export type UserWhitelistDeleteResponse = {
  __typename?: 'UserWhitelistDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserWhitelist>;
};

export type UserWhitelistEdge = {
  __typename?: 'UserWhitelistEdge';
  cursor: Scalars['String']['output'];
  node: UserWhitelist;
};

export type UserWhitelistFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UserWhitelistFilter>>;
  internalCreatedAt?: InputMaybe<DatetimeFilter>;
  kind?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UserWhitelistFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UserWhitelistFilter>>;
  userWhitelistId?: InputMaybe<BigIntFilter>;
  userWhitelistValue?: InputMaybe<StringFilter>;
};

export type UserWhitelistInsertInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  userWhitelistValue?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhitelistInsertResponse = {
  __typename?: 'UserWhitelistInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserWhitelist>;
};

export type UserWhitelistOrderBy = {
  internalCreatedAt?: InputMaybe<OrderByDirection>;
  kind?: InputMaybe<OrderByDirection>;
  userWhitelistId?: InputMaybe<OrderByDirection>;
  userWhitelistValue?: InputMaybe<OrderByDirection>;
};

export type UserWhitelistUpdateInput = {
  internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  userWhitelistValue?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhitelistUpdateResponse = {
  __typename?: 'UserWhitelistUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<UserWhitelist>;
};

export type DeleteProjBookmarkByGthbNameMutationVariables = Exact<{
  ownerLogin: Scalars['String']['input'];
  repoName: Scalars['String']['input'];
}>;


export type DeleteProjBookmarkByGthbNameMutation = { __typename?: 'Mutation', fDeleteProjBookmarkByGthbName?: boolean | null };

export type DeleteProjBookmarkOnProjCatByTitleAndIdMutationVariables = Exact<{
  catTitle: Scalars['String']['input'];
  id: Scalars['BigInt']['input'];
}>;


export type DeleteProjBookmarkOnProjCatByTitleAndIdMutation = { __typename?: 'Mutation', fDeleteProjBookmarkOnProjCatByTitleAndGthbRepoId?: boolean | null };

export type UpdateNotesForGthbRepoMutationVariables = Exact<{
  id?: InputMaybe<Scalars['BigInt']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateNotesForGthbRepoMutation = { __typename?: 'Mutation', updateProjRepoCollection: { __typename?: 'ProjRepoUpdateResponse', affectedCount: number } };

export type UpdateNotesForProjRepoMutationVariables = Exact<{
  id?: InputMaybe<Scalars['BigInt']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateNotesForProjRepoMutation = { __typename?: 'Mutation', updateProjRepoCollection: { __typename?: 'ProjRepoUpdateResponse', affectedCount: number } };

export type UpdateProjBookmarkNotesByProjBookmarkIdMutationVariables = Exact<{
  projBookmarkId?: InputMaybe<Scalars['BigInt']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateProjBookmarkNotesByProjBookmarkIdMutation = { __typename?: 'Mutation', updateProjBookmarkCollection: { __typename?: 'ProjBookmarkUpdateResponse', affectedCount: number } };

export type UpdateProjCatNotesByCatTitleMutationVariables = Exact<{
  categoryTitle?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateProjCatNotesByCatTitleMutation = { __typename?: 'Mutation', updateProjCatCollection: { __typename?: 'ProjCatUpdateResponse', affectedCount: number } };

export type UpdateProjRepoNotesByGthbRepoIdMutationVariables = Exact<{
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateProjRepoNotesByGthbRepoIdMutation = { __typename?: 'Mutation', updateProjRepoCollection: { __typename?: 'ProjRepoUpdateResponse', affectedCount: number } };

export type AllAlgoHnCommentQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAlgoHnCommentQuery = { __typename?: 'Query', algoHnCommentCollection?: { __typename?: 'AlgoHnCommentConnection', edges: Array<{ __typename?: 'AlgoHnCommentEdge', node: { __typename?: 'AlgoHnComment', algoHnCommentId: any, internalCreatedAt: any, algoHnCommentObjectId: any, algoHnQueryId: any, commentText: string, storyId: any, storyTitle: string, storyUrl?: string | null, createdAt: any, updatedAt: any } }> } | null };

export type AllAlgoHnCommentAndAlgoHnTagQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAlgoHnCommentAndAlgoHnTagQuery = { __typename?: 'Query', algoHnCommentAndAlgoHnTagCollection?: { __typename?: 'AlgoHnCommentAndAlgoHnTagConnection', edges: Array<{ __typename?: 'AlgoHnCommentAndAlgoHnTagEdge', node: { __typename?: 'AlgoHnCommentAndAlgoHnTag', algoHnTagId: any, algoHnCommentId: any, internalCreatedAt: any } }> } | null };

export type AllAlgoHnQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAlgoHnQueryQuery = { __typename?: 'Query', algoHnQueryCollection?: { __typename?: 'AlgoHnQueryConnection', edges: Array<{ __typename?: 'AlgoHnQueryEdge', node: { __typename?: 'AlgoHnQuery', algoHnQueryId: any, query: string, internalCreatedAt: any } }> } | null };

export type AllAlgoHnStoryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAlgoHnStoryQuery = { __typename?: 'Query', algoHnStoryCollection?: { __typename?: 'AlgoHnStoryConnection', edges: Array<{ __typename?: 'AlgoHnStoryEdge', node: { __typename?: 'AlgoHnStory', algoHnStoryId: any, internalCreatedAt: any, author: string, createdAt: any, algoHnStoryUrl?: string | null, algoHnStoryObjectId: any, points: any, algoHnQueryId: any, title: string, updatedAt: any } }> } | null };

export type AllAlgoHnStoryAndAlgoHnQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAlgoHnStoryAndAlgoHnQuery = { __typename?: 'Query', algoHnStoryAndAlgoHnTagCollection?: { __typename?: 'AlgoHnStoryAndAlgoHnTagConnection', edges: Array<{ __typename?: 'AlgoHnStoryAndAlgoHnTagEdge', node: { __typename?: 'AlgoHnStoryAndAlgoHnTag', algoHnStoryId: any, internalCreatedAt: any, algoHnTagId: any } }> } | null };

export type AllAlgoHnTagQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAlgoHnTagQuery = { __typename?: 'Query', algoHnTagCollection?: { __typename?: 'AlgoHnTagConnection', edges: Array<{ __typename?: 'AlgoHnTagEdge', node: { __typename?: 'AlgoHnTag', algoHnTagId: any, internalCreatedAt: any, title: string } }> } | null };

export type AllGthbForkHistQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbForkHistQuery = { __typename?: 'Query', gthbForkHistCollection?: { __typename?: 'GthbForkHistConnection', edges: Array<{ __typename?: 'GthbForkHistEdge', node: { __typename?: 'GthbForkHist', gthbForkHistId: any, internalCreatedAt: any, gthbRepoId: any, gthbForkHistDate: any, amount: any } }> } | null };

export type AllGthbIssueHistQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbIssueHistQuery = { __typename?: 'Query', gthbIssueHistCollection?: { __typename?: 'GthbIssueHistConnection', edges: Array<{ __typename?: 'GthbIssueHistEdge', node: { __typename?: 'GthbIssueHist', gthbIssueHistId: any, internalCreatedAt: any, gthbRepoId: any, gthbIssueHistDate: any, amount: any } }> } | null };

export type AllGthbLangQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbLangQuery = { __typename?: 'Query', gthbLangCollection?: { __typename?: 'GthbLangConnection', edges: Array<{ __typename?: 'GthbLangEdge', node: { __typename?: 'GthbLang', gthbLangId: any, internalCreatedAt: any, color: string, gthbLangName: string } }> } | null };

export type AllGthbOrgQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbOrgQuery = { __typename?: 'Query', gthbOrgCollection?: { __typename?: 'GthbOrgConnection', edges: Array<{ __typename?: 'GthbOrgEdge', node: { __typename?: 'GthbOrg', gthbOrgId: any, internalCreatedAt: any, createdAt: any, gthbOrgDescription?: string | null, descriptionHtml?: string | null, email?: string | null, gthbOrgName?: string | null, twitterUsername?: string | null, websiteUrl?: string | null } }> } | null };

export type AllGthbOwnerQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbOwnerQuery = { __typename?: 'Query', gthbOwnerCollection?: { __typename?: 'GthbOwnerConnection', edges: Array<{ __typename?: 'GthbOwnerEdge', node: { __typename?: 'GthbOwner', gthbOwnerId: any, internalCreatedAt: any, gthbOwnerType: any, avatarUrl: string, gthbOwnerLogin: string, gthbOwnerUrl: string, repositoriesTotalCount: any } }> } | null };

export type AllGthbRepoQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbRepoQuery = { __typename?: 'Query', gthbRepoCollection?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', gthbRepoId: any, internalCreatedAt: any, createdAt: any, gthbRepoDescription?: string | null, forkCount: any, homepageUrl?: string | null, isInOrganization: boolean, issuesTotalCount: any, gthbRepoName: string, gthbOwnerId: any, pullRequestsTotalCount: any, gthbRepoUrl: string, stargazerCount: any, contributorCount: any, forksPerContributor: any, issuesPerContributor: any, stargazersPerContributor: any, pullRequestsPerContributor: any } }> } | null };

export type AllGthbRepoAndGthbLangQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbRepoAndGthbLangQuery = { __typename?: 'Query', gthbRepoAndGthbLangCollection?: { __typename?: 'GthbRepoAndGthbLangConnection', edges: Array<{ __typename?: 'GthbRepoAndGthbLangEdge', node: { __typename?: 'GthbRepoAndGthbLang', gthbRepoId: any, gthbLangId: any, internalCreatedAt: any } }> } | null };

export type AllGthbRepoAndGthbRepoTopicQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbRepoAndGthbRepoTopicQuery = { __typename?: 'Query', gthbRepoAndGthbRepoTopicCollection?: { __typename?: 'GthbRepoAndGthbRepoTopicConnection', edges: Array<{ __typename?: 'GthbRepoAndGthbRepoTopicEdge', node: { __typename?: 'GthbRepoAndGthbRepoTopic', gthbRepoId: any, gthbRepoTopicId: any, internalCreatedAt: any } }> } | null };

export type AllGthbRepoContributorQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbRepoContributorQuery = { __typename?: 'Query', gthbRepoContrCollection?: { __typename?: 'GthbRepoContrConnection', edges: Array<{ __typename?: 'GthbRepoContrEdge', node: { __typename?: 'GthbRepoContr', gthbRepoId: any, gthbOwnerId: any, contributions: any, internalCreatedAt: any } }> } | null };

export type AllGthbRepoTopicQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbRepoTopicQuery = { __typename?: 'Query', gthbRepoTopicCollection?: { __typename?: 'GthbRepoTopicConnection', edges: Array<{ __typename?: 'GthbRepoTopicEdge', node: { __typename?: 'GthbRepoTopic', gthbRepoTopicId: any, internalCreatedAt: any, gthbRepoTopicName: string, stargazerCount: any } }> } | null };

export type AllGthbStarHistQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbStarHistQuery = { __typename?: 'Query', gthbStarHistCollection?: { __typename?: 'GthbStarHistConnection', edges: Array<{ __typename?: 'GthbStarHistEdge', node: { __typename?: 'GthbStarHist', gthbStarHistId: any, internalCreatedAt: any, gthbRepoId: any, gthbStarHistDate: any, amount: any } }> } | null };

export type AllGthbTrendingQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbTrendingQuery = { __typename?: 'Query', gthbTrendingCollection?: { __typename?: 'GthbTrendingConnection', edges: Array<{ __typename?: 'GthbTrendingEdge', node: { __typename?: 'GthbTrending', gthbTrendingId: any, gthbRepoId: any, internalCreatedAt: any, dateRange: any, lang?: string | null } }> } | null };

export type AllGthbUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGthbUserQuery = { __typename?: 'Query', gthbUserCollection?: { __typename?: 'GthbUserConnection', edges: Array<{ __typename?: 'GthbUserEdge', node: { __typename?: 'GthbUser', gthbUserId: any, internalCreatedAt: any, bio?: string | null, bioHtml?: string | null, company?: string | null, companyHtml?: string | null, createdAt: any, email?: string | null, followersTotalCount: any, gthbUserName?: string | null, twitterUsername?: string | null, websiteUrl?: string | null } }> } | null };

export type AllProjBookmarkQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjBookmarkQuery = { __typename?: 'Query', projBookmarkCollection?: { __typename?: 'ProjBookmarkConnection', edges: Array<{ __typename?: 'ProjBookmarkEdge', node: { __typename?: 'ProjBookmark', projBookmarkId: any, internalCreatedAt: any, projRepoId: any, authUsersId: any, isPublic?: boolean | null } }> } | null };

export type AllProjCatQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjCatQuery = { __typename?: 'Query', projCatCollection?: { __typename?: 'ProjCatConnection', edges: Array<{ __typename?: 'ProjCatEdge', node: { __typename?: 'ProjCat', projCatId: any, internalCreatedAt: any, title: string, authUsersId: any, note?: string | null, isPublic?: boolean | null } }> } | null };

export type AllProjCatAndProjBookmarkQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjCatAndProjBookmarkQuery = { __typename?: 'Query', projCatAndProjBookmarkCollection?: { __typename?: 'ProjCatAndProjBookmarkConnection', edges: Array<{ __typename?: 'ProjCatAndProjBookmarkEdge', node: { __typename?: 'ProjCatAndProjBookmark', projCatId: any, projBookmarkId: any, isPinned?: boolean | null, internalCreatedAt: any } }> } | null };

export type AllProjClassifierQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjClassifierQuery = { __typename?: 'Query', projClassifierCollection?: { __typename?: 'ProjClassifierConnection', edges: Array<{ __typename?: 'ProjClassifierEdge', node: { __typename?: 'ProjClassifier', projClassifierId: any, internalCreatedAt: any, classifier: string } }> } | null };

export type AllProjRepoQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjRepoQuery = { __typename?: 'Query', projRepoCollection?: { __typename?: 'ProjRepoConnection', edges: Array<{ __typename?: 'ProjRepoEdge', node: { __typename?: 'ProjRepo', projRepoId: any, internalCreatedAt: any, gthbRepoId: any, note?: string | null } }> } | null };

export type AllProjRepoAndAlgoHnQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjRepoAndAlgoHnQueryQuery = { __typename?: 'Query', projRepoAndAlgoHnQueryCollection?: { __typename?: 'ProjRepoAndAlgoHnQueryConnection', edges: Array<{ __typename?: 'ProjRepoAndAlgoHnQueryEdge', node: { __typename?: 'ProjRepoAndAlgoHnQuery', projRepoId: any, algoHnQueryId: any, internalCreatedAt: any } }> } | null };

export type AllProjRepoAndProjClassifierQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjRepoAndProjClassifierQuery = { __typename?: 'Query', projRepoAndProjClassifierCollection?: { __typename?: 'ProjRepoAndProjClassifierConnection', edges: Array<{ __typename?: 'ProjRepoAndProjClassifierEdge', node: { __typename?: 'ProjRepoAndProjClassifier', projRepoId: any, projClassifierId: any, internalCreatedAt: any } }> } | null };

export type AllProjRepoAndSbotLinCompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjRepoAndSbotLinCompanyQuery = { __typename?: 'Query', projRepoAndSbotLinCompanyCollection?: { __typename?: 'ProjRepoAndSbotLinCompanyConnection', edges: Array<{ __typename?: 'ProjRepoAndSbotLinCompanyEdge', node: { __typename?: 'ProjRepoAndSbotLinCompany', projRepoId: any, sbotLinCompanyId: any, internalCreatedAt: any } }> } | null };

export type AllProjRepoAndSbotLinProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjRepoAndSbotLinProfileQuery = { __typename?: 'Query', projRepoAndSbotLinProfileCollection?: { __typename?: 'ProjRepoAndSbotLinProfileConnection', edges: Array<{ __typename?: 'ProjRepoAndSbotLinProfileEdge', node: { __typename?: 'ProjRepoAndSbotLinProfile', projRepoId: any, sbotLinProfileId: any, internalCreatedAt: any } }> } | null };

export type AllProjRepoMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjRepoMetadataQuery = { __typename?: 'Query', projRepoCollection?: { __typename?: 'ProjRepoConnection', edges: Array<{ __typename?: 'ProjRepoEdge', node: { __typename?: 'ProjRepo', projRepoId: any, algoHnEli5?: string | null, repoEli5?: string | null, internalCreatedAt: any } }> } | null };

export type AllSbotLinCompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSbotLinCompanyQuery = { __typename?: 'Query', sbotLinCompanyCollection?: { __typename?: 'SbotLinCompanyConnection', edges: Array<{ __typename?: 'SbotLinCompanyEdge', node: { __typename?: 'SbotLinCompany', sbotLinCompanyId: any, internalCreatedAt: any, sbotLinCompanyUrl: string, sbotLinCompanyName: string, sphere?: string | null, followers: any, logo: string, sbotLinCompanyImage: string, employeesAmountInLinkedin: any, about?: string | null, website?: string | null, headquarters?: string | null, sbotLinCompanyType?: string | null } }> } | null };

export type AllSbotLinProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSbotLinProfileQuery = { __typename?: 'Query', sbotLinProfileCollection?: { __typename?: 'SbotLinProfileConnection', edges: Array<{ __typename?: 'SbotLinProfileEdge', node: { __typename?: 'SbotLinProfile', sbotLinProfileId: any, internalCreatedAt: any, sbotLinProfileUrl: string, sbotLinProfileName: string, position?: string | null, currentCompanyName?: string | null, currentCompanyLink?: string | null, avatar?: string | null, about?: string | null, city?: string | null, followers?: string | null, sbotLinProfileFollowing?: string | null, educationDetails?: string | null } }> } | null };

export type AllUserAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUserAdminQuery = { __typename?: 'Query', userAdminCollection?: { __typename?: 'UserAdminConnection', edges: Array<{ __typename?: 'UserAdminEdge', node: { __typename?: 'UserAdmin', authUsersId: any, internalCreatedAt: any } }> } | null };

export type AllUserApiKeyQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUserApiKeyQuery = { __typename?: 'Query', userApiKeyCollection?: { __typename?: 'UserApiKeyConnection', edges: Array<{ __typename?: 'UserApiKeyEdge', node: { __typename?: 'UserApiKey', userApiKeyId: any, internalCreatedAt: any, userApiKey: any, authUsersId: any } }> } | null };

export type AllUserWhitelistQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUserWhitelistQuery = { __typename?: 'Query', userWhitelistCollection?: { __typename?: 'UserWhitelistConnection', edges: Array<{ __typename?: 'UserWhitelistEdge', node: { __typename?: 'UserWhitelist', userWhitelistId: any, internalCreatedAt?: any | null, kind: string, userWhitelistValue?: string | null } }> } | null };

export type CompareListByCategoryIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type CompareListByCategoryIdQuery = { __typename?: 'Query', projCatAndProjBookmarkCollection?: { __typename?: 'ProjCatAndProjBookmarkConnection', edges: Array<{ __typename?: 'ProjCatAndProjBookmarkEdge', node: { __typename?: 'ProjCatAndProjBookmark', projCat: { __typename?: 'ProjCat', title: string }, projBookmark: { __typename?: 'ProjBookmark', projRepo: { __typename?: 'ProjRepo', gthbRepo: { __typename?: 'GthbRepo', gthbRepoName: string, gthbRepoDescription?: string | null, stargazerCount: any, issuesTotalCount: any, forksPerContributor: any, forkCount: any, contributorCount: any, issuesPerContributor: any, pullRequestsTotalCount: any, gthbOwner: { __typename?: 'GthbOwner', avatarUrl: string, gthbOwnerLogin: string } } } } } }> } | null };

export type DetailViewForkHistQueryVariables = Exact<{
  filter?: InputMaybe<GthbForkHistFilter>;
}>;


export type DetailViewForkHistQuery = { __typename?: 'Query', gthbForkHistCollection?: { __typename?: 'GthbForkHistConnection', edges: Array<{ __typename?: 'GthbForkHistEdge', node: { __typename?: 'GthbForkHist', gthbForkHistDate: any, amount: any } }> } | null };

export type DetailViewIssueHistQueryVariables = Exact<{
  filter?: InputMaybe<GthbIssueHistFilter>;
}>;


export type DetailViewIssueHistQuery = { __typename?: 'Query', gthbIssueHistCollection?: { __typename?: 'GthbIssueHistConnection', edges: Array<{ __typename?: 'GthbIssueHistEdge', node: { __typename?: 'GthbIssueHist', gthbIssueHistDate: any, amount: any } }> } | null };

export type DetailViewProjRepoTopQueryVariables = Exact<{
  id?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type DetailViewProjRepoTopQuery = { __typename?: 'Query', projRepoCollection?: { __typename?: 'ProjRepoConnection', edges: Array<{ __typename?: 'ProjRepoEdge', node: { __typename?: 'ProjRepo', repoEli5?: string | null, algoHnEli5?: string | null, gthbRepo: { __typename?: 'GthbRepo', gthbRepoDescription?: string | null, gthbOwner: { __typename?: 'GthbOwner', avatarUrl: string, gthbOwnerLogin: string } } } }> } | null };

export type DetailViewStarHistQueryVariables = Exact<{
  filter?: InputMaybe<GthbStarHistFilter>;
}>;


export type DetailViewStarHistQuery = { __typename?: 'Query', gthbStarHistCollection?: { __typename?: 'GthbStarHistConnection', edges: Array<{ __typename?: 'GthbStarHistEdge', node: { __typename?: 'GthbStarHist', gthbStarHistDate: any, amount: any } }> } | null };

export type DetailViewProjRepoTop2QueryVariables = Exact<{
  id?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type DetailViewProjRepoTop2Query = { __typename?: 'Query', projRepoCollection?: { __typename?: 'ProjRepoConnection', edges: Array<{ __typename?: 'ProjRepoEdge', node: { __typename?: 'ProjRepo', algoHnEli5?: string | null } }> } | null };

export type ListBookmarkedGthbRepoQueryVariables = Exact<{
  filter?: InputMaybe<GthbRepoFilter>;
}>;


export type ListBookmarkedGthbRepoQuery = { __typename?: 'Query', fListBookmarkedGthbRepo?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbRepoDescription?: string | null, stargazerCount: any, issuesTotalCount: any, forksPerContributor: any, forkCount: any, contributorCount: any, issuesPerContributor: any, pullRequestsTotalCount: any, gthbOwner: { __typename?: 'GthbOwner', avatarUrl: string, gthbOwnerLogin: string }, gthbRepo: { __typename?: 'ProjRepo', projRepoId: any } } }> } | null };

export type ListViewGthbReposQueryVariables = Exact<{
  filter?: InputMaybe<GthbRepoFilter>;
}>;


export type ListViewGthbReposQuery = { __typename?: 'Query', gthbRepoCollection?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', cursor: string, node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbRepoDescription?: string | null, stargazerCount: any, issuesTotalCount: any, forksPerContributor: any, forkCount: any, contributorCount: any, issuesPerContributor: any, pullRequestsTotalCount: any, gthbOwner: { __typename?: 'GthbOwner', avatarUrl: string, gthbOwnerLogin: string } } }> } | null };

export type SidebarProjCategoriesToProjBookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type SidebarProjCategoriesToProjBookmarksQuery = { __typename?: 'Query', projCatCollection?: { __typename?: 'ProjCatConnection', edges: Array<{ __typename?: 'ProjCatEdge', node: { __typename?: 'ProjCat', nodeId: string, title: string, projCatAndProjBookmarkCollection: { __typename?: 'ProjCatAndProjBookmarkConnection', edges: Array<{ __typename?: 'ProjCatAndProjBookmarkEdge', node: { __typename?: 'ProjCatAndProjBookmark', projBookmark: { __typename?: 'ProjBookmark', projRepo: { __typename?: 'ProjRepo', gthbRepo: { __typename?: 'GthbRepo', gthbRepoName: string, gthbOwner: { __typename?: 'GthbOwner', avatarUrl: string, gthbOwnerLogin: string } } } } } }> } } }> } | null };

export type AddRepoListBookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type AddRepoListBookmarksQuery = { __typename?: 'Query', fListBookmarkedGthbRepo?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string } } }> } | null };

export type BookmarkTableQueryVariables = Exact<{
  filter?: InputMaybe<GthbRepoFilter>;
  orderBy?: InputMaybe<Array<GthbRepoOrderBy> | GthbRepoOrderBy>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BookmarkTableQuery = { __typename?: 'Query', queryStargazerMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazerCount: any } }> } | null, queryStargazerMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazerCount: any } }> } | null, queryForkMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forkCount: any } }> } | null, queryForkMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forkCount: any } }> } | null, queryIssueMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesTotalCount: any } }> } | null, queryIssueMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesTotalCount: any } }> } | null, queryContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', contributorCount: any } }> } | null, queryContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', contributorCount: any } }> } | null, queryPullRequestsMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsTotalCount: any } }> } | null, queryPullRequestsMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsTotalCount: any } }> } | null, queryIssuesPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesPerContributor: any } }> } | null, queryIssuesPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesPerContributor: any } }> } | null, queryForksPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forksPerContributor: any } }> } | null, queryForksPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forksPerContributor: any } }> } | null, queryStargazersPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazersPerContributor: any } }> } | null, queryStargazersPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazersPerContributor: any } }> } | null, queryPullRequestsPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsPerContributor: any } }> } | null, queryPullRequestsPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsPerContributor: any } }> } | null, queryTrending?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', cursor: string, node: { __typename?: 'GthbRepo', gthbRepoName: string, stargazerCount: any, stargazersPerContributor: any, forkCount: any, issuesTotalCount: any, issuesPerContributor: any, forksPerContributor: any, gthbRepoDescription?: string | null, contributorCount: any, pullRequestsTotalCount: any, pullRequestsPerContributor: any, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string, avatarUrl: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type CatTableQueryVariables = Exact<{
  title: Scalars['String']['input'];
  filter?: InputMaybe<GthbRepoFilter>;
  orderBy?: InputMaybe<Array<GthbRepoOrderBy> | GthbRepoOrderBy>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CatTableQuery = { __typename?: 'Query', queryStargazerMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazerCount: any } }> } | null, queryStargazerMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazerCount: any } }> } | null, queryForkMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forkCount: any } }> } | null, queryForkMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forkCount: any } }> } | null, queryIssueMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesTotalCount: any } }> } | null, queryIssueMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesTotalCount: any } }> } | null, queryContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', contributorCount: any } }> } | null, queryContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', contributorCount: any } }> } | null, queryPullRequestsMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsTotalCount: any } }> } | null, queryPullRequestsMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsTotalCount: any } }> } | null, queryIssuesPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesPerContributor: any } }> } | null, queryIssuesPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesPerContributor: any } }> } | null, queryForksPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forksPerContributor: any } }> } | null, queryForksPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forksPerContributor: any } }> } | null, queryStargazersPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazersPerContributor: any } }> } | null, queryStargazersPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazersPerContributor: any } }> } | null, queryPullRequestsPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsPerContributor: any } }> } | null, queryPullRequestsPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsPerContributor: any } }> } | null, queryTrending?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', cursor: string, node: { __typename?: 'GthbRepo', gthbRepoName: string, stargazerCount: any, stargazersPerContributor: any, forkCount: any, issuesTotalCount: any, issuesPerContributor: any, forksPerContributor: any, gthbRepoDescription?: string | null, contributorCount: any, pullRequestsTotalCount: any, pullRequestsPerContributor: any, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string, avatarUrl: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type ChartDataByGthbRepoFilterQueryVariables = Exact<{
  gthbRepoFilter?: InputMaybe<GthbRepoFilter>;
}>;


export type ChartDataByGthbRepoFilterQuery = { __typename?: 'Query', gthbRepoCollection?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbRepoId: any, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string } } }> } | null };

export type ChartDataStarsByGthbRepoFilterQueryVariables = Exact<{
  gthbRepoFilter?: InputMaybe<GthbRepoFilter>;
  starFilter?: InputMaybe<GthbStarHistFilter>;
  starOrderBy?: InputMaybe<Array<GthbStarHistOrderBy> | GthbStarHistOrderBy>;
}>;


export type ChartDataStarsByGthbRepoFilterQuery = { __typename?: 'Query', gthbRepoCollection?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbRepoId: any, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string }, gthbStarHistCollection: { __typename?: 'GthbStarHistConnection', edges: Array<{ __typename?: 'GthbStarHistEdge', node: { __typename?: 'GthbStarHist', gthbStarHistDate: any, amount: any } }> } } }> } | null };

export type ChartDataForksByGthbRepoFilterQueryVariables = Exact<{
  gthbRepoFilter?: InputMaybe<GthbRepoFilter>;
  forkFilter?: InputMaybe<GthbForkHistFilter>;
  forkOrderBy?: InputMaybe<Array<GthbForkHistOrderBy> | GthbForkHistOrderBy>;
}>;


export type ChartDataForksByGthbRepoFilterQuery = { __typename?: 'Query', gthbRepoCollection?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbRepoId: any, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string }, gthbForkHistCollection: { __typename?: 'GthbForkHistConnection', edges: Array<{ __typename?: 'GthbForkHistEdge', node: { __typename?: 'GthbForkHist', gthbForkHistDate: any, amount: any } }> } } }> } | null };

export type ChartDataIssuesByGthbRepoFilterQueryVariables = Exact<{
  gthbRepoFilter?: InputMaybe<GthbRepoFilter>;
  issueFilter?: InputMaybe<GthbIssueHistFilter>;
  issueOrderBy?: InputMaybe<Array<GthbIssueHistOrderBy> | GthbIssueHistOrderBy>;
}>;


export type ChartDataIssuesByGthbRepoFilterQuery = { __typename?: 'Query', gthbRepoCollection?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbRepoId: any, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string }, gthbIssueHistCollection: { __typename?: 'GthbIssueHistConnection', edges: Array<{ __typename?: 'GthbIssueHistEdge', node: { __typename?: 'GthbIssueHist', gthbIssueHistDate: any, amount: any } }> } } }> } | null };

export type CompareQueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type CompareQuery = { __typename?: 'Query', projCatCollection?: { __typename?: 'ProjCatConnection', edges: Array<{ __typename?: 'ProjCatEdge', node: { __typename?: 'ProjCat', title: string, projCatAndProjBookmarkCollection: { __typename?: 'ProjCatAndProjBookmarkConnection', edges: Array<{ __typename?: 'ProjCatAndProjBookmarkEdge', node: { __typename?: 'ProjCatAndProjBookmark', projBookmark: { __typename?: 'ProjBookmark', projRepo: { __typename?: 'ProjRepo', gthbRepoId: any, gthbRepo: { __typename?: 'GthbRepo', gthbRepoName: string, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string } } } } } }> } } }> } | null };

export type DetailQueryVariables = Exact<{
  repoName: Scalars['String']['input'];
  ownerLogin: Scalars['String']['input'];
}>;


export type DetailQuery = { __typename?: 'Query', fGetGthbOwnerByGthbName?: { __typename?: 'GthbOwnerConnection', edges: Array<{ __typename?: 'GthbOwnerEdge', node: { __typename?: 'GthbOwner', avatarUrl: string, gthbOwnerId: any } }> } | null, fGetGthbRepoByGthbName?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', gthbRepoId: any, gthbRepoDescription?: string | null } }> } | null, fGetProjRepoByGthbName?: { __typename?: 'ProjRepoConnection', edges: Array<{ __typename?: 'ProjRepoEdge', node: { __typename?: 'ProjRepo', projRepoId: any, repoEli5?: string | null } }> } | null, fGetProjBookmarkByGthbName?: { __typename?: 'ProjBookmarkConnection', edges: Array<{ __typename?: 'ProjBookmarkEdge', node: { __typename?: 'ProjBookmark', projBookmarkId: any } }> } | null };

export type DetailUpAndDownQueryVariables = Exact<{
  dateRange: Scalars['String']['input'];
  filter?: InputMaybe<GthbRepoFilter>;
  orderBy?: InputMaybe<Array<GthbRepoOrderBy> | GthbRepoOrderBy>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  isTrending: Scalars['Boolean']['input'];
  isCategory: Scalars['Boolean']['input'];
  isBookmarks: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
}>;


export type DetailUpAndDownQuery = { __typename?: 'Query', beforeTrendingRepo?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', cursor: string, node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string } } }> } | null, afterTrendingRepo?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', cursor: string, node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string } } }> } | null, beforeBookmarkRepo?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', cursor: string, node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string } } }> } | null, afterBookmarkRepo?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', cursor: string, node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string } } }> } | null, beforeCategoryRepo?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', cursor: string, node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string } } }> } | null, afterCategoryRepo?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', cursor: string, node: { __typename?: 'GthbRepo', gthbRepoName: string, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string } } }> } | null };

export type GetProjBookmarkNotesByProjBookmarkIdQueryVariables = Exact<{
  projBookmarkId?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type GetProjBookmarkNotesByProjBookmarkIdQuery = { __typename?: 'Query', projBookmarkCollection?: { __typename?: 'ProjBookmarkConnection', edges: Array<{ __typename?: 'ProjBookmarkEdge', node: { __typename?: 'ProjBookmark', note?: string | null } }> } | null };

export type GetProjCatNotesByCatTitleQueryVariables = Exact<{
  categoryTitle?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProjCatNotesByCatTitleQuery = { __typename?: 'Query', projCatCollection?: { __typename?: 'ProjCatConnection', edges: Array<{ __typename?: 'ProjCatEdge', node: { __typename?: 'ProjCat', note?: string | null } }> } | null };

export type GetProjRepoNotesByGthbRepoIdQueryVariables = Exact<{
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type GetProjRepoNotesByGthbRepoIdQuery = { __typename?: 'Query', projRepoCollection?: { __typename?: 'ProjRepoConnection', edges: Array<{ __typename?: 'ProjRepoEdge', node: { __typename?: 'ProjRepo', note?: string | null } }> } | null };

export type HackernewsEli5ByGthbNameQueryVariables = Exact<{
  repoName: Scalars['String']['input'];
  ownerLogin: Scalars['String']['input'];
}>;


export type HackernewsEli5ByGthbNameQuery = { __typename?: 'Query', fGetProjRepoByGthbName?: { __typename?: 'ProjRepoConnection', edges: Array<{ __typename?: 'ProjRepoEdge', node: { __typename?: 'ProjRepo', algoHnEli5?: string | null } }> } | null };

export type ListCategoriesTitleQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCategoriesTitleQuery = { __typename?: 'Query', projCatCollection?: { __typename?: 'ProjCatConnection', edges: Array<{ __typename?: 'ProjCatEdge', node: { __typename?: 'ProjCat', title: string } }> } | null };

export type RepoSidebarByGthbRepoIdQueryVariables = Exact<{
  gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>;
  ownerId?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type RepoSidebarByGthbRepoIdQuery = { __typename?: 'Query', gthbRepoCollection?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forkCount: any, homepageUrl?: string | null, isInOrganization: boolean, issuesTotalCount: any, issuesPerContributor: any, pullRequestsTotalCount: any, gthbRepoName: string, gthbRepoDescription?: string | null, gthbRepoUrl: string, stargazerCount: any, contributorCount: any, stargazersPerContributor: any, forksPerContributor: any, createdAt: any, pullRequestsPerContributor: any, gthbRepo: { __typename?: 'ProjRepo', projRepoAndSbotLinProfileCollection: { __typename?: 'ProjRepoAndSbotLinProfileConnection', edges: Array<{ __typename?: 'ProjRepoAndSbotLinProfileEdge', node: { __typename?: 'ProjRepoAndSbotLinProfile', sbotLinProfile: { __typename?: 'SbotLinProfile', sbotLinProfileUrl: string, sbotLinProfileName: string } } }> }, projRepoAndSbotLinCompanyCollection: { __typename?: 'ProjRepoAndSbotLinCompanyConnection', edges: Array<{ __typename?: 'ProjRepoAndSbotLinCompanyEdge', node: { __typename?: 'ProjRepoAndSbotLinCompany', sbotLinCompanyId: any, sbotLinCompany: { __typename?: 'SbotLinCompany', sbotLinCompanyName: string, sbotLinCompanyUrl: string } } }> } }, gthbRepoAndGthbRepoTopicCollection: { __typename?: 'GthbRepoAndGthbRepoTopicConnection', edges: Array<{ __typename?: 'GthbRepoAndGthbRepoTopicEdge', node: { __typename?: 'GthbRepoAndGthbRepoTopic', gthbRepoTopic: { __typename?: 'GthbRepoTopic', gthbRepoTopicName: string } } }> }, gthbRepoAndGthbLangCollection: { __typename?: 'GthbRepoAndGthbLangConnection', edges: Array<{ __typename?: 'GthbRepoAndGthbLangEdge', node: { __typename?: 'GthbRepoAndGthbLang', gthbLang: { __typename?: 'GthbLang', gthbLangName: string, color: string } } }> }, gthbRepoContrCollection: { __typename?: 'GthbRepoContrConnection', edges: Array<{ __typename?: 'GthbRepoContrEdge', node: { __typename?: 'GthbRepoContr', contributions: any, gthbOwner: { __typename?: 'GthbOwner', avatarUrl: string, gthbOwnerLogin: string, gthbOwnerUrl: string, gthbOwnerType: any } } }> }, gthbOwner: { __typename?: 'GthbOwner', avatarUrl: string, gthbOwnerLogin: string, gthbOwnerUrl: string, gthbOwnerType: any } } }> } | null, gthbOrgCollection?: { __typename?: 'GthbOrgConnection', edges: Array<{ __typename?: 'GthbOrgEdge', node: { __typename?: 'GthbOrg', gthbOrgId: any, gthbOrgDescription?: string | null, descriptionHtml?: string | null, email?: string | null, gthbOrgName?: string | null, twitterUsername?: string | null, websiteUrl?: string | null } }> } | null, gthbUserCollection?: { __typename?: 'GthbUserConnection', edges: Array<{ __typename?: 'GthbUserEdge', node: { __typename?: 'GthbUser', gthbUserId: any, bio?: string | null, company?: string | null, createdAt: any, email?: string | null, followersTotalCount: any, gthbUserName?: string | null, twitterUsername?: string | null, websiteUrl?: string | null } }> } | null };

export type SidebarQueryVariables = Exact<{ [key: string]: never; }>;


export type SidebarQuery = { __typename?: 'Query', projCatCollection?: { __typename?: 'ProjCatConnection', edges: Array<{ __typename?: 'ProjCatEdge', node: { __typename?: 'ProjCat', title: string, projCatAndProjBookmarkCollection: { __typename?: 'ProjCatAndProjBookmarkConnection', edges: Array<{ __typename?: 'ProjCatAndProjBookmarkEdge', node: { __typename?: 'ProjCatAndProjBookmark', projBookmark: { __typename?: 'ProjBookmark', projRepo: { __typename?: 'ProjRepo', gthbRepo: { __typename?: 'GthbRepo', gthbRepoName: string, gthbOwner: { __typename?: 'GthbOwner', avatarUrl: string, gthbOwnerLogin: string } } } } } }> } } }> } | null };

export type TrendingTableQueryVariables = Exact<{
  dateRange: Scalars['String']['input'];
  filter?: InputMaybe<GthbRepoFilter>;
  orderBy?: InputMaybe<Array<GthbRepoOrderBy> | GthbRepoOrderBy>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TrendingTableQuery = { __typename?: 'Query', queryStargazerMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazerCount: any } }> } | null, queryStargazerMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazerCount: any } }> } | null, queryForkMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forkCount: any } }> } | null, queryForkMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forkCount: any } }> } | null, queryIssueMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesTotalCount: any } }> } | null, queryIssueMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesTotalCount: any } }> } | null, queryContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', contributorCount: any } }> } | null, queryContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', contributorCount: any } }> } | null, queryPullRequestsMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsTotalCount: any } }> } | null, queryPullRequestsMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsTotalCount: any } }> } | null, queryIssuesPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesPerContributor: any } }> } | null, queryIssuesPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', issuesPerContributor: any } }> } | null, queryForksPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forksPerContributor: any } }> } | null, queryForksPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', forksPerContributor: any } }> } | null, queryStargazersPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazersPerContributor: any } }> } | null, queryStargazersPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', stargazersPerContributor: any } }> } | null, queryPullRequestsPerContributorMax?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsPerContributor: any } }> } | null, queryPullRequestsPerContributorMin?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', node: { __typename?: 'GthbRepo', pullRequestsPerContributor: any } }> } | null, queryTrending?: { __typename?: 'GthbRepoConnection', edges: Array<{ __typename?: 'GthbRepoEdge', cursor: string, node: { __typename?: 'GthbRepo', gthbRepoName: string, stargazerCount: any, stargazersPerContributor: any, forkCount: any, issuesTotalCount: any, issuesPerContributor: any, forksPerContributor: any, gthbRepoDescription?: string | null, contributorCount: any, pullRequestsTotalCount: any, pullRequestsPerContributor: any, gthbOwner: { __typename?: 'GthbOwner', gthbOwnerLogin: string, avatarUrl: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };


export const DeleteProjBookmarkByGthbNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProjBookmarkByGthbName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerLogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repoName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fDeleteProjBookmarkByGthbName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ownerlogin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerLogin"}}},{"kind":"Argument","name":{"kind":"Name","value":"reponame"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repoName"}}}]}]}}]} as unknown as DocumentNode<DeleteProjBookmarkByGthbNameMutation, DeleteProjBookmarkByGthbNameMutationVariables>;
export const DeleteProjBookmarkOnProjCatByTitleAndIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProjBookmarkOnProjCatByTitleAndId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"catTitle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fDeleteProjBookmarkOnProjCatByTitleAndGthbRepoId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cattitle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"catTitle"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteProjBookmarkOnProjCatByTitleAndIdMutation, DeleteProjBookmarkOnProjCatByTitleAndIdMutationVariables>;
export const UpdateNotesForGthbRepoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNotesForGthbRepo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProjRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gthbRepoId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<UpdateNotesForGthbRepoMutation, UpdateNotesForGthbRepoMutationVariables>;
export const UpdateNotesForProjRepoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNotesForProjRepo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProjRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projRepoId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<UpdateNotesForProjRepoMutation, UpdateNotesForProjRepoMutationVariables>;
export const UpdateProjBookmarkNotesByProjBookmarkIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProjBookmarkNotesByProjBookmarkId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projBookmarkId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProjBookmarkCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projBookmarkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projBookmarkId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<UpdateProjBookmarkNotesByProjBookmarkIdMutation, UpdateProjBookmarkNotesByProjBookmarkIdMutationVariables>;
export const UpdateProjCatNotesByCatTitleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProjCatNotesByCatTitle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProjCatCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryTitle"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<UpdateProjCatNotesByCatTitleMutation, UpdateProjCatNotesByCatTitleMutationVariables>;
export const UpdateProjRepoNotesByGthbRepoIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProjRepoNotesByGthbRepoId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProjRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gthbRepoId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<UpdateProjRepoNotesByGthbRepoIdMutation, UpdateProjRepoNotesByGthbRepoIdMutationVariables>;
export const AllAlgoHnCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAlgoHnComment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnCommentCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"algoHnCommentObjectId"}},{"kind":"Field","name":{"kind":"Name","value":"algoHnQueryId"}},{"kind":"Field","name":{"kind":"Name","value":"commentText"}},{"kind":"Field","name":{"kind":"Name","value":"storyId"}},{"kind":"Field","name":{"kind":"Name","value":"storyTitle"}},{"kind":"Field","name":{"kind":"Name","value":"storyUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllAlgoHnCommentQuery, AllAlgoHnCommentQueryVariables>;
export const AllAlgoHnCommentAndAlgoHnTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAlgoHnCommentAndAlgoHnTag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnCommentAndAlgoHnTagCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnTagId"}},{"kind":"Field","name":{"kind":"Name","value":"algoHnCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllAlgoHnCommentAndAlgoHnTagQuery, AllAlgoHnCommentAndAlgoHnTagQueryVariables>;
export const AllAlgoHnQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAlgoHnQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnQueryCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnQueryId"}},{"kind":"Field","name":{"kind":"Name","value":"query"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllAlgoHnQueryQuery, AllAlgoHnQueryQueryVariables>;
export const AllAlgoHnStoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAlgoHnStory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnStoryCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnStoryId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"algoHnStoryUrl"}},{"kind":"Field","name":{"kind":"Name","value":"algoHnStoryObjectId"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"algoHnQueryId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllAlgoHnStoryQuery, AllAlgoHnStoryQueryVariables>;
export const AllAlgoHnStoryAndAlgoHnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAlgoHnStoryAndAlgoHn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnStoryAndAlgoHnTagCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnStoryId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"algoHnTagId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllAlgoHnStoryAndAlgoHnQuery, AllAlgoHnStoryAndAlgoHnQueryVariables>;
export const AllAlgoHnTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllAlgoHnTag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnTagCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnTagId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllAlgoHnTagQuery, AllAlgoHnTagQueryVariables>;
export const AllGthbForkHistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbForkHist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbForkHistCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbForkHistId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbForkHistDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbForkHistQuery, AllGthbForkHistQueryVariables>;
export const AllGthbIssueHistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbIssueHist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbIssueHistCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbIssueHistId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbIssueHistDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbIssueHistQuery, AllGthbIssueHistQueryVariables>;
export const AllGthbLangDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbLang"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbLangCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbLangId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"gthbLangName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbLangQuery, AllGthbLangQueryVariables>;
export const AllGthbOrgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbOrg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOrgCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOrgDescription"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionHtml"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOrgName"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbOrgQuery, AllGthbOrgQueryVariables>;
export const AllGthbOwnerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerType"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"repositoriesTotalCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbOwnerQuery, AllGthbOwnerQueryVariables>;
export const AllGthbRepoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"homepageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isInOrganization"}},{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerId"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}},{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"stargazersPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsPerContributor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbRepoQuery, AllGthbRepoQueryVariables>;
export const AllGthbRepoAndGthbLangDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbRepoAndGthbLang"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoAndGthbLangCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbLangId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbRepoAndGthbLangQuery, AllGthbRepoAndGthbLangQueryVariables>;
export const AllGthbRepoAndGthbRepoTopicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbRepoAndGthbRepoTopic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoAndGthbRepoTopicCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoTopicId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbRepoAndGthbRepoTopicQuery, AllGthbRepoAndGthbRepoTopicQueryVariables>;
export const AllGthbRepoContributorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbRepoContributor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoContrCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerId"}},{"kind":"Field","name":{"kind":"Name","value":"contributions"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbRepoContributorQuery, AllGthbRepoContributorQueryVariables>;
export const AllGthbRepoTopicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbRepoTopic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoTopicCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoTopicId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoTopicName"}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbRepoTopicQuery, AllGthbRepoTopicQueryVariables>;
export const AllGthbStarHistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbStarHist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbStarHistCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbStarHistId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbStarHistDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbStarHistQuery, AllGthbStarHistQueryVariables>;
export const AllGthbTrendingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbTrending"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbTrendingCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbTrendingId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateRange"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbTrendingQuery, AllGthbTrendingQueryVariables>;
export const AllGthbUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllGthbUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbUserCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbUserId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"bioHtml"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"companyHtml"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followersTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"gthbUserName"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGthbUserQuery, AllGthbUserQueryVariables>;
export const AllProjBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjBookmark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projBookmarkCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projBookmarkId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"projRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"authUsersId"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProjBookmarkQuery, AllProjBookmarkQueryVariables>;
export const AllProjCatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjCat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projCatCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projCatId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"authUsersId"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProjCatQuery, AllProjCatQueryVariables>;
export const AllProjCatAndProjBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjCatAndProjBookmark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projCatAndProjBookmarkCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projCatId"}},{"kind":"Field","name":{"kind":"Name","value":"projBookmarkId"}},{"kind":"Field","name":{"kind":"Name","value":"isPinned"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProjCatAndProjBookmarkQuery, AllProjCatAndProjBookmarkQueryVariables>;
export const AllProjClassifierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjClassifier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projClassifierCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projClassifierId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"classifier"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProjClassifierQuery, AllProjClassifierQueryVariables>;
export const AllProjRepoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProjRepoQuery, AllProjRepoQueryVariables>;
export const AllProjRepoAndAlgoHnQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjRepoAndAlgoHnQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoAndAlgoHnQueryCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"algoHnQueryId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProjRepoAndAlgoHnQueryQuery, AllProjRepoAndAlgoHnQueryQueryVariables>;
export const AllProjRepoAndProjClassifierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjRepoAndProjClassifier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoAndProjClassifierCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"projClassifierId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProjRepoAndProjClassifierQuery, AllProjRepoAndProjClassifierQueryVariables>;
export const AllProjRepoAndSbotLinCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjRepoAndSbotLinCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoAndSbotLinCompanyCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinCompanyId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProjRepoAndSbotLinCompanyQuery, AllProjRepoAndSbotLinCompanyQueryVariables>;
export const AllProjRepoAndSbotLinProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjRepoAndSbotLinProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoAndSbotLinProfileCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProjRepoAndSbotLinProfileQuery, AllProjRepoAndSbotLinProfileQueryVariables>;
export const AllProjRepoMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProjRepoMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"algoHnEli5"}},{"kind":"Field","name":{"kind":"Name","value":"repoEli5"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProjRepoMetadataQuery, AllProjRepoMetadataQueryVariables>;
export const AllSbotLinCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllSbotLinCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sbotLinCompanyCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sbotLinCompanyId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinCompanyUrl"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinCompanyName"}},{"kind":"Field","name":{"kind":"Name","value":"sphere"}},{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinCompanyImage"}},{"kind":"Field","name":{"kind":"Name","value":"employeesAmountInLinkedin"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"headquarters"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinCompanyType"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllSbotLinCompanyQuery, AllSbotLinCompanyQueryVariables>;
export const AllSbotLinProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllSbotLinProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sbotLinProfileCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sbotLinProfileId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinProfileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinProfileName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"currentCompanyName"}},{"kind":"Field","name":{"kind":"Name","value":"currentCompanyLink"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinProfileFollowing"}},{"kind":"Field","name":{"kind":"Name","value":"educationDetails"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllSbotLinProfileQuery, AllSbotLinProfileQueryVariables>;
export const AllUserAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllUserAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAdminCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authUsersId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllUserAdminQuery, AllUserAdminQueryVariables>;
export const AllUserApiKeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllUserApiKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userApiKeyCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userApiKeyId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"authUsersId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllUserApiKeyQuery, AllUserApiKeyQueryVariables>;
export const AllUserWhitelistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllUserWhitelist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userWhitelistCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userWhitelistId"}},{"kind":"Field","name":{"kind":"Name","value":"internalCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"userWhitelistValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllUserWhitelistQuery, AllUserWhitelistQueryVariables>;
export const CompareListByCategoryIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CompareListByCategoryId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projCatAndProjBookmarkCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projCatId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projCat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projBookmark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CompareListByCategoryIdQuery, CompareListByCategoryIdQueryVariables>;
export const DetailViewForkHistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DetailViewForkHist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbForkHistFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbForkHistCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbForkHistDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DetailViewForkHistQuery, DetailViewForkHistQueryVariables>;
export const DetailViewIssueHistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DetailViewIssueHist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbIssueHistFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbIssueHistCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbIssueHistDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DetailViewIssueHistQuery, DetailViewIssueHistQueryVariables>;
export const DetailViewProjRepoTopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DetailViewProjRepoTop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gthbRepoId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"repoEli5"}},{"kind":"Field","name":{"kind":"Name","value":"algoHnEli5"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DetailViewProjRepoTopQuery, DetailViewProjRepoTopQueryVariables>;
export const DetailViewStarHistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DetailViewStarHist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbStarHistFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbStarHistCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbStarHistDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DetailViewStarHistQuery, DetailViewStarHistQueryVariables>;
export const DetailViewProjRepoTop2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DetailViewProjRepoTop2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gthbRepoId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnEli5"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DetailViewProjRepoTop2Query, DetailViewProjRepoTop2QueryVariables>;
export const ListBookmarkedGthbRepoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListBookmarkedGthbRepo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListBookmarkedGthbRepoQuery, ListBookmarkedGthbRepoQueryVariables>;
export const ListViewGthbReposDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListViewGthbRepos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}}]}}]} as unknown as DocumentNode<ListViewGthbReposQuery, ListViewGthbReposQueryVariables>;
export const SidebarProjCategoriesToProjBookmarksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SidebarProjCategoriesToProjBookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projCatCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"projCatAndProjBookmarkCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projBookmark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SidebarProjCategoriesToProjBookmarksQuery, SidebarProjCategoriesToProjBookmarksQueryVariables>;
export const AddRepoListBookmarksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AddRepoListBookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddRepoListBookmarksQuery, AddRepoListBookmarksQueryVariables>;
export const BookmarkTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BookmarkTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoOrderBy"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"queryStargazerMax"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazerCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryStargazerMin"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazerCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForkMax"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forkCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forkCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForkMin"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forkCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forkCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssueMax"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesTotalCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssueMin"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesTotalCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryContributorMax"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contributorCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryContributorMin"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contributorCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsMax"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsTotalCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsMin"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsTotalCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssuesPerContributorMax"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssuesPerContributorMin"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForksPerContributorMax"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forksPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForksPerContributorMin"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forksPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryStargazersPerContributorMax"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazersPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazersPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryStargazersPerContributorMin"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazersPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazersPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsPerContributorMax"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsPerContributorMin"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryTrending"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"stargazersPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsPerContributor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]}}]}}]} as unknown as DocumentNode<BookmarkTableQuery, BookmarkTableQueryVariables>;
export const CatTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CatTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoOrderBy"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"queryStargazerMax"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazerCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryStargazerMin"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazerCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForkMax"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forkCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forkCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForkMin"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forkCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forkCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssueMax"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesTotalCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssueMin"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesTotalCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryContributorMax"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contributorCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryContributorMin"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contributorCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsMax"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsTotalCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsMin"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsTotalCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssuesPerContributorMax"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssuesPerContributorMin"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForksPerContributorMax"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forksPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForksPerContributorMin"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forksPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryStargazersPerContributorMax"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazersPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazersPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryStargazersPerContributorMin"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazersPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazersPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsPerContributorMax"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsPerContributorMin"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryTrending"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"stargazersPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsPerContributor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]}}]}}]} as unknown as DocumentNode<CatTableQuery, CatTableQueryVariables>;
export const ChartDataByGthbRepoFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChartDataByGthbRepoFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChartDataByGthbRepoFilterQuery, ChartDataByGthbRepoFilterQueryVariables>;
export const ChartDataStarsByGthbRepoFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChartDataStarsByGthbRepoFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"starFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbStarHistFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"starOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbStarHistOrderBy"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbStarHistCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"starFilter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"starOrderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbStarHistDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChartDataStarsByGthbRepoFilterQuery, ChartDataStarsByGthbRepoFilterQueryVariables>;
export const ChartDataForksByGthbRepoFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChartDataForksByGthbRepoFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"forkFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbForkHistFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"forkOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbForkHistOrderBy"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbForkHistCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"forkFilter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"forkOrderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbForkHistDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChartDataForksByGthbRepoFilterQuery, ChartDataForksByGthbRepoFilterQueryVariables>;
export const ChartDataIssuesByGthbRepoFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChartDataIssuesByGthbRepoFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueFilter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbIssueHistFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueOrderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbIssueHistOrderBy"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbIssueHistCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueFilter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueOrderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbIssueHistDate"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChartDataIssuesByGthbRepoFilterQuery, ChartDataIssuesByGthbRepoFilterQueryVariables>;
export const CompareDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Compare"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projCatCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"projCatAndProjBookmarkCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projBookmark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CompareQuery, CompareQueryVariables>;
export const DetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Detail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repoName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerLogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fGetGthbOwnerByGthbName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reponame"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repoName"}}},{"kind":"Argument","name":{"kind":"Name","value":"ownerlogin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerLogin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerId"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fGetGthbRepoByGthbName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reponame"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repoName"}}},{"kind":"Argument","name":{"kind":"Name","value":"ownerlogin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerLogin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoDescription"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fGetProjRepoByGthbName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reponame"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repoName"}}},{"kind":"Argument","name":{"kind":"Name","value":"ownerlogin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerLogin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoId"}},{"kind":"Field","name":{"kind":"Name","value":"repoEli5"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fGetProjBookmarkByGthbName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reponame"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repoName"}}},{"kind":"Argument","name":{"kind":"Name","value":"ownerlogin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerLogin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projBookmarkId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DetailQuery, DetailQueryVariables>;
export const DetailUpAndDownDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DetailUpAndDown"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoOrderBy"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isTrending"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCategory"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isBookmarks"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"beforeTrendingRepo"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"1"}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isTrending"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"afterTrendingRepo"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isTrending"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"beforeBookmarkRepo"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"1"}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBookmarks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"afterBookmarkRepo"},"name":{"kind":"Name","value":"fListBookmarkedGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBookmarks"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"beforeCategoryRepo"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"1"}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCategory"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"afterCategoryRepo"},"name":{"kind":"Name","value":"fListGthbReposByCatTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catTitleArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCategory"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}}]}}]} as unknown as DocumentNode<DetailUpAndDownQuery, DetailUpAndDownQueryVariables>;
export const GetProjBookmarkNotesByProjBookmarkIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjBookmarkNotesByProjBookmarkId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projBookmarkId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projBookmarkCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projBookmarkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projBookmarkId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjBookmarkNotesByProjBookmarkIdQuery, GetProjBookmarkNotesByProjBookmarkIdQueryVariables>;
export const GetProjCatNotesByCatTitleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjCatNotesByCatTitle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projCatCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryTitle"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjCatNotesByCatTitleQuery, GetProjCatNotesByCatTitleQueryVariables>;
export const GetProjRepoNotesByGthbRepoIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjRepoNotesByGthbRepoId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gthbRepoId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjRepoNotesByGthbRepoIdQuery, GetProjRepoNotesByGthbRepoIdQueryVariables>;
export const HackernewsEli5ByGthbNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HackernewsEli5ByGthbName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repoName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerLogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fGetProjRepoByGthbName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reponame"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repoName"}}},{"kind":"Argument","name":{"kind":"Name","value":"ownerlogin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerLogin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"algoHnEli5"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HackernewsEli5ByGthbNameQuery, HackernewsEli5ByGthbNameQueryVariables>;
export const ListCategoriesTitleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListCategoriesTitle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projCatCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListCategoriesTitleQuery, ListCategoriesTitleQueryVariables>;
export const RepoSidebarByGthbRepoIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RepoSidebarByGthbRepoId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gthbRepoId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gthbRepoId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"homepageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isInOrganization"}},{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}},{"kind":"Field","name":{"kind":"Name","value":"stargazersPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepoAndSbotLinProfileCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sbotLinProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sbotLinProfileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinProfileName"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"projRepoAndSbotLinCompanyCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sbotLinCompanyId"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinCompany"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sbotLinCompanyName"}},{"kind":"Field","name":{"kind":"Name","value":"sbotLinCompanyUrl"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoAndGthbRepoTopicCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoTopic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoTopicName"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoAndGthbLangCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbLang"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbLangName"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoContrCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contributions"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributions"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerType"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerType"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbOrgCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gthbOrgId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOrgDescription"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionHtml"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOrgName"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gthbUserCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gthbUserId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbUserId"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followersTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"gthbUserName"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RepoSidebarByGthbRepoIdQuery, RepoSidebarByGthbRepoIdQueryVariables>;
export const SidebarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Sidebar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projCatCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"projCatAndProjBookmarkCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projBookmark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SidebarQuery, SidebarQueryVariables>;
export const TrendingTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TrendingTable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GthbRepoOrderBy"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"queryStargazerMax"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazerCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryStargazerMin"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazerCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForkMax"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forkCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forkCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForkMin"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forkCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forkCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssueMax"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesTotalCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssueMin"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesTotalCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryContributorMax"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contributorCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryContributorMin"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contributorCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsMax"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsTotalCount"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsMin"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsTotalCount"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssuesPerContributorMax"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryIssuesPerContributorMin"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuesPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForksPerContributorMax"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forksPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryForksPerContributorMin"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"forksPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryStargazersPerContributorMax"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazersPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazersPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryStargazersPerContributorMin"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stargazersPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stargazersPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsPerContributorMax"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsPerContributor"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryPullRequestsPerContributorMin"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pullRequestsPerContributor"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pullRequestsPerContributor"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"queryTrending"},"name":{"kind":"Name","value":"fListTrendingGthbRepo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gthbDateRangeArg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateRange"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbRepoName"}},{"kind":"Field","name":{"kind":"Name","value":"gthbOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gthbOwnerLogin"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazerCount"}},{"kind":"Field","name":{"kind":"Name","value":"stargazersPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"forkCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"issuesPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"forksPerContributor"}},{"kind":"Field","name":{"kind":"Name","value":"gthbRepoDescription"}},{"kind":"Field","name":{"kind":"Name","value":"contributorCount"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsTotalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequestsPerContributor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]}}]}}]} as unknown as DocumentNode<TrendingTableQuery, TrendingTableQueryVariables>;