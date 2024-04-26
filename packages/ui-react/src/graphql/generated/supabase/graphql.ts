import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
	  }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
	/** A high precision floating point value represented as a string */
	BigFloat: { input: any; output: any }
	/** An arbitrary size integer represented as a string */
	BigInt: { input: any; output: any }
	/** An opaque string using for tracking a position in results during pagination */
	Cursor: { input: any; output: any }
	/** A date wihout time information */
	Date: { input: any; output: any }
	/** A date and time */
	Datetime: { input: any; output: any }
	/** A Javascript Object Notation value serialized as a string */
	JSON: { input: any; output: any }
	/** Any type not handled by the type system */
	Opaque: { input: any; output: any }
	/** A time without date information */
	Time: { input: any; output: any }
	/** A universally unique identifier */
	UUID: { input: any; output: any }
}

export type AlgoHnComment = Node & {
	__typename?: 'AlgoHnComment'
	algoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagConnection
	algoHnCommentId: Scalars['BigInt']['output']
	algoHnCommentObjectId: Scalars['BigInt']['output']
	algoHnQuery: AlgoHnQuery
	algoHnQueryId: Scalars['BigInt']['output']
	author: Scalars['String']['output']
	commentText: Scalars['String']['output']
	createdAt: Scalars['Datetime']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	storyId: Scalars['BigInt']['output']
	storyTitle: Scalars['String']['output']
	storyUrl?: Maybe<Scalars['String']['output']>
	updatedAt: Scalars['Datetime']['output']
}

export type AlgoHnCommentAlgoHnCommentAndAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>
}

export type AlgoHnCommentAndAlgoHnTag = Node & {
	__typename?: 'AlgoHnCommentAndAlgoHnTag'
	algoHnComment: AlgoHnComment
	algoHnCommentId: Scalars['BigInt']['output']
	algoHnTag: AlgoHnTag
	algoHnTagId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type AlgoHnCommentAndAlgoHnTagConnection = {
	__typename?: 'AlgoHnCommentAndAlgoHnTagConnection'
	edges: Array<AlgoHnCommentAndAlgoHnTagEdge>
	pageInfo: PageInfo
}

export type AlgoHnCommentAndAlgoHnTagDeleteResponse = {
	__typename?: 'AlgoHnCommentAndAlgoHnTagDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnCommentAndAlgoHnTag>
}

export type AlgoHnCommentAndAlgoHnTagEdge = {
	__typename?: 'AlgoHnCommentAndAlgoHnTagEdge'
	cursor: Scalars['String']['output']
	node: AlgoHnCommentAndAlgoHnTag
}

export type AlgoHnCommentAndAlgoHnTagFilter = {
	algoHnCommentId?: InputMaybe<BigIntFilter>
	algoHnTagId?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagFilter>>
}

export type AlgoHnCommentAndAlgoHnTagInsertInput = {
	algoHnCommentId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnCommentAndAlgoHnTagInsertResponse = {
	__typename?: 'AlgoHnCommentAndAlgoHnTagInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnCommentAndAlgoHnTag>
}

export type AlgoHnCommentAndAlgoHnTagOrderBy = {
	algoHnCommentId?: InputMaybe<OrderByDirection>
	algoHnTagId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnCommentAndAlgoHnTagUpdateInput = {
	algoHnCommentId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnCommentAndAlgoHnTagUpdateResponse = {
	__typename?: 'AlgoHnCommentAndAlgoHnTagUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnComment>
}

export type AlgoHnCommentEdge = {
	__typename?: 'AlgoHnCommentEdge'
	cursor: Scalars['String']['output']
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
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	algoHnCommentObjectId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	author?: InputMaybe<Scalars['String']['input']>
	commentText?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	storyId?: InputMaybe<Scalars['BigInt']['input']>
	storyTitle?: InputMaybe<Scalars['String']['input']>
	storyUrl?: InputMaybe<Scalars['String']['input']>
	updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnCommentInsertResponse = {
	__typename?: 'AlgoHnCommentInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	internalCreatedAt?: InputMaybe<OrderByDirection>
	storyId?: InputMaybe<OrderByDirection>
	storyTitle?: InputMaybe<OrderByDirection>
	storyUrl?: InputMaybe<OrderByDirection>
	updatedAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnCommentUpdateInput = {
	algoHnCommentObjectId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	author?: InputMaybe<Scalars['String']['input']>
	commentText?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	storyId?: InputMaybe<Scalars['BigInt']['input']>
	storyTitle?: InputMaybe<Scalars['String']['input']>
	storyUrl?: InputMaybe<Scalars['String']['input']>
	updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnCommentUpdateResponse = {
	__typename?: 'AlgoHnCommentUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnComment>
}

export type AlgoHnQuery = Node & {
	__typename?: 'AlgoHnQuery'
	algoHnCommentCollection: AlgoHnCommentConnection
	algoHnQueryId: Scalars['BigInt']['output']
	algoHnStoryCollection: AlgoHnStoryConnection
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryConnection
	query: Scalars['String']['output']
}

export type AlgoHnQueryAlgoHnCommentCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnCommentFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnCommentOrderBy>>
}

export type AlgoHnQueryAlgoHnStoryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnStoryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnStoryOrderBy>>
}

export type AlgoHnQueryProjRepoAndAlgoHnQueryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnQuery>
}

export type AlgoHnQueryEdge = {
	__typename?: 'AlgoHnQueryEdge'
	cursor: Scalars['String']['output']
	node: AlgoHnQuery
}

export type AlgoHnQueryFilter = {
	algoHnQueryId?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<AlgoHnQueryFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<AlgoHnQueryFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<AlgoHnQueryFilter>>
	query?: InputMaybe<StringFilter>
}

export type AlgoHnQueryInsertInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	query?: InputMaybe<Scalars['String']['input']>
}

export type AlgoHnQueryInsertResponse = {
	__typename?: 'AlgoHnQueryInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnQuery>
}

export type AlgoHnQueryOrderBy = {
	algoHnQueryId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	query?: InputMaybe<OrderByDirection>
}

export type AlgoHnQueryUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	query?: InputMaybe<Scalars['String']['input']>
}

export type AlgoHnQueryUpdateResponse = {
	__typename?: 'AlgoHnQueryUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnQuery>
}

export type AlgoHnStory = Node & {
	__typename?: 'AlgoHnStory'
	algoHnQuery: AlgoHnQuery
	algoHnQueryId: Scalars['BigInt']['output']
	algoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagConnection
	algoHnStoryId: Scalars['BigInt']['output']
	algoHnStoryObjectId: Scalars['BigInt']['output']
	algoHnStoryUrl?: Maybe<Scalars['String']['output']>
	author: Scalars['String']['output']
	createdAt: Scalars['Datetime']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	points: Scalars['BigInt']['output']
	title: Scalars['String']['output']
	updatedAt: Scalars['Datetime']['output']
}

export type AlgoHnStoryAlgoHnStoryAndAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagOrderBy>>
}

export type AlgoHnStoryAndAlgoHnTag = Node & {
	__typename?: 'AlgoHnStoryAndAlgoHnTag'
	algoHnStory: AlgoHnStory
	algoHnStoryId: Scalars['BigInt']['output']
	algoHnTag: AlgoHnTag
	algoHnTagId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type AlgoHnStoryAndAlgoHnTagConnection = {
	__typename?: 'AlgoHnStoryAndAlgoHnTagConnection'
	edges: Array<AlgoHnStoryAndAlgoHnTagEdge>
	pageInfo: PageInfo
}

export type AlgoHnStoryAndAlgoHnTagDeleteResponse = {
	__typename?: 'AlgoHnStoryAndAlgoHnTagDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnStoryAndAlgoHnTag>
}

export type AlgoHnStoryAndAlgoHnTagEdge = {
	__typename?: 'AlgoHnStoryAndAlgoHnTagEdge'
	cursor: Scalars['String']['output']
	node: AlgoHnStoryAndAlgoHnTag
}

export type AlgoHnStoryAndAlgoHnTagFilter = {
	algoHnStoryId?: InputMaybe<BigIntFilter>
	algoHnTagId?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagFilter>>
}

export type AlgoHnStoryAndAlgoHnTagInsertInput = {
	algoHnStoryId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnStoryAndAlgoHnTagInsertResponse = {
	__typename?: 'AlgoHnStoryAndAlgoHnTagInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnStoryAndAlgoHnTag>
}

export type AlgoHnStoryAndAlgoHnTagOrderBy = {
	algoHnStoryId?: InputMaybe<OrderByDirection>
	algoHnTagId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnStoryAndAlgoHnTagUpdateInput = {
	algoHnStoryId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnStoryAndAlgoHnTagUpdateResponse = {
	__typename?: 'AlgoHnStoryAndAlgoHnTagUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnStory>
}

export type AlgoHnStoryEdge = {
	__typename?: 'AlgoHnStoryEdge'
	cursor: Scalars['String']['output']
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
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnStoryObjectId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnStoryUrl?: InputMaybe<Scalars['String']['input']>
	author?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	points?: InputMaybe<Scalars['BigInt']['input']>
	title?: InputMaybe<Scalars['String']['input']>
	updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnStoryInsertResponse = {
	__typename?: 'AlgoHnStoryInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	internalCreatedAt?: InputMaybe<OrderByDirection>
	points?: InputMaybe<OrderByDirection>
	title?: InputMaybe<OrderByDirection>
	updatedAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnStoryUpdateInput = {
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnStoryObjectId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnStoryUrl?: InputMaybe<Scalars['String']['input']>
	author?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	points?: InputMaybe<Scalars['BigInt']['input']>
	title?: InputMaybe<Scalars['String']['input']>
	updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnStoryUpdateResponse = {
	__typename?: 'AlgoHnStoryUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnStory>
}

export type AlgoHnTag = Node & {
	__typename?: 'AlgoHnTag'
	algoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagConnection
	algoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagConnection
	algoHnTagId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	title: Scalars['String']['output']
}

export type AlgoHnTagAlgoHnCommentAndAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>
}

export type AlgoHnTagAlgoHnStoryAndAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnTag>
}

export type AlgoHnTagEdge = {
	__typename?: 'AlgoHnTagEdge'
	cursor: Scalars['String']['output']
	node: AlgoHnTag
}

export type AlgoHnTagFilter = {
	algoHnTagId?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<AlgoHnTagFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<AlgoHnTagFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<AlgoHnTagFilter>>
	title?: InputMaybe<StringFilter>
}

export type AlgoHnTagInsertInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	title?: InputMaybe<Scalars['String']['input']>
}

export type AlgoHnTagInsertResponse = {
	__typename?: 'AlgoHnTagInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnTag>
}

export type AlgoHnTagOrderBy = {
	algoHnTagId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	title?: InputMaybe<OrderByDirection>
}

export type AlgoHnTagUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	title?: InputMaybe<Scalars['String']['input']>
}

export type AlgoHnTagUpdateResponse = {
	__typename?: 'AlgoHnTagUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnTag>
}

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
	eq?: InputMaybe<Scalars['BigFloat']['input']>
	gt?: InputMaybe<Scalars['BigFloat']['input']>
	gte?: InputMaybe<Scalars['BigFloat']['input']>
	in?: InputMaybe<Array<Scalars['BigFloat']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['BigFloat']['input']>
	lte?: InputMaybe<Scalars['BigFloat']['input']>
	neq?: InputMaybe<Scalars['BigFloat']['input']>
}

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
	eq?: InputMaybe<Scalars['BigInt']['input']>
	gt?: InputMaybe<Scalars['BigInt']['input']>
	gte?: InputMaybe<Scalars['BigInt']['input']>
	in?: InputMaybe<Array<Scalars['BigInt']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['BigInt']['input']>
	lte?: InputMaybe<Scalars['BigInt']['input']>
	neq?: InputMaybe<Scalars['BigInt']['input']>
}

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
	eq?: InputMaybe<Scalars['Boolean']['input']>
	is?: InputMaybe<FilterIs>
}

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
	eq?: InputMaybe<Scalars['Date']['input']>
	gt?: InputMaybe<Scalars['Date']['input']>
	gte?: InputMaybe<Scalars['Date']['input']>
	in?: InputMaybe<Array<Scalars['Date']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['Date']['input']>
	lte?: InputMaybe<Scalars['Date']['input']>
	neq?: InputMaybe<Scalars['Date']['input']>
}

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
	eq?: InputMaybe<Scalars['Datetime']['input']>
	gt?: InputMaybe<Scalars['Datetime']['input']>
	gte?: InputMaybe<Scalars['Datetime']['input']>
	in?: InputMaybe<Array<Scalars['Datetime']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['Datetime']['input']>
	lte?: InputMaybe<Scalars['Datetime']['input']>
	neq?: InputMaybe<Scalars['Datetime']['input']>
}

export enum FilterIs {
	NotNull = 'NOT_NULL',
	Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
	eq?: InputMaybe<Scalars['Float']['input']>
	gt?: InputMaybe<Scalars['Float']['input']>
	gte?: InputMaybe<Scalars['Float']['input']>
	in?: InputMaybe<Array<Scalars['Float']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['Float']['input']>
	lte?: InputMaybe<Scalars['Float']['input']>
	neq?: InputMaybe<Scalars['Float']['input']>
}

export type GthbForkHist = Node & {
	__typename?: 'GthbForkHist'
	amount: Scalars['BigInt']['output']
	gthbForkHistDate: Scalars['Datetime']['output']
	gthbForkHistId: Scalars['BigInt']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbForkHistConnection = {
	__typename?: 'GthbForkHistConnection'
	edges: Array<GthbForkHistEdge>
	pageInfo: PageInfo
}

export type GthbForkHistDeleteResponse = {
	__typename?: 'GthbForkHistDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbForkHist>
}

export type GthbForkHistEdge = {
	__typename?: 'GthbForkHistEdge'
	cursor: Scalars['String']['output']
	node: GthbForkHist
}

export type GthbForkHistFilter = {
	amount?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbForkHistFilter>>
	gthbForkHistDate?: InputMaybe<DatetimeFilter>
	gthbForkHistId?: InputMaybe<BigIntFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbForkHistFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbForkHistFilter>>
}

export type GthbForkHistInsertInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbForkHistDate?: InputMaybe<Scalars['Datetime']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbForkHistInsertResponse = {
	__typename?: 'GthbForkHistInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbForkHist>
}

export type GthbForkHistOrderBy = {
	amount?: InputMaybe<OrderByDirection>
	gthbForkHistDate?: InputMaybe<OrderByDirection>
	gthbForkHistId?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbForkHistUpdateInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbForkHistDate?: InputMaybe<Scalars['Datetime']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbForkHistUpdateResponse = {
	__typename?: 'GthbForkHistUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbForkHist>
}

export type GthbIssueHist = Node & {
	__typename?: 'GthbIssueHist'
	amount: Scalars['BigInt']['output']
	gthbIssueHistDate: Scalars['Datetime']['output']
	gthbIssueHistId: Scalars['BigInt']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbIssueHistConnection = {
	__typename?: 'GthbIssueHistConnection'
	edges: Array<GthbIssueHistEdge>
	pageInfo: PageInfo
}

export type GthbIssueHistDeleteResponse = {
	__typename?: 'GthbIssueHistDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbIssueHist>
}

export type GthbIssueHistEdge = {
	__typename?: 'GthbIssueHistEdge'
	cursor: Scalars['String']['output']
	node: GthbIssueHist
}

export type GthbIssueHistFilter = {
	amount?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbIssueHistFilter>>
	gthbIssueHistDate?: InputMaybe<DatetimeFilter>
	gthbIssueHistId?: InputMaybe<BigIntFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbIssueHistFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbIssueHistFilter>>
}

export type GthbIssueHistInsertInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbIssueHistDate?: InputMaybe<Scalars['Datetime']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbIssueHistInsertResponse = {
	__typename?: 'GthbIssueHistInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbIssueHist>
}

export type GthbIssueHistOrderBy = {
	amount?: InputMaybe<OrderByDirection>
	gthbIssueHistDate?: InputMaybe<OrderByDirection>
	gthbIssueHistId?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbIssueHistUpdateInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbIssueHistDate?: InputMaybe<Scalars['Datetime']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbIssueHistUpdateResponse = {
	__typename?: 'GthbIssueHistUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbIssueHist>
}

export type GthbLang = Node & {
	__typename?: 'GthbLang'
	color: Scalars['String']['output']
	gthbLangId: Scalars['BigInt']['output']
	gthbLangName: Scalars['String']['output']
	gthbRepoAndGthbLangCollection: GthbRepoAndGthbLangConnection
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbLangGthbRepoAndGthbLangCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbLangFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbLang>
}

export type GthbLangEdge = {
	__typename?: 'GthbLangEdge'
	cursor: Scalars['String']['output']
	node: GthbLang
}

export type GthbLangFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbLangFilter>>
	color?: InputMaybe<StringFilter>
	gthbLangId?: InputMaybe<BigIntFilter>
	gthbLangName?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbLangFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbLangFilter>>
}

export type GthbLangInsertInput = {
	color?: InputMaybe<Scalars['String']['input']>
	gthbLangName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbLangInsertResponse = {
	__typename?: 'GthbLangInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbLang>
}

export type GthbLangOrderBy = {
	color?: InputMaybe<OrderByDirection>
	gthbLangId?: InputMaybe<OrderByDirection>
	gthbLangName?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbLangUpdateInput = {
	color?: InputMaybe<Scalars['String']['input']>
	gthbLangName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbLangUpdateResponse = {
	__typename?: 'GthbLangUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbLang>
}

export type GthbOrg = Node & {
	__typename?: 'GthbOrg'
	createdAt: Scalars['Datetime']['output']
	descriptionHtml?: Maybe<Scalars['String']['output']>
	email?: Maybe<Scalars['String']['output']>
	gthbOrg: GthbOwner
	gthbOrgDescription?: Maybe<Scalars['String']['output']>
	gthbOrgId: Scalars['BigInt']['output']
	gthbOrgName?: Maybe<Scalars['String']['output']>
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	twitterUsername?: Maybe<Scalars['String']['output']>
	websiteUrl?: Maybe<Scalars['String']['output']>
}

export type GthbOrgConnection = {
	__typename?: 'GthbOrgConnection'
	edges: Array<GthbOrgEdge>
	pageInfo: PageInfo
}

export type GthbOrgDeleteResponse = {
	__typename?: 'GthbOrgDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbOrg>
}

export type GthbOrgEdge = {
	__typename?: 'GthbOrgEdge'
	cursor: Scalars['String']['output']
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
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbOrgFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbOrgFilter>>
	twitterUsername?: InputMaybe<StringFilter>
	websiteUrl?: InputMaybe<StringFilter>
}

export type GthbOrgInsertInput = {
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	descriptionHtml?: InputMaybe<Scalars['String']['input']>
	email?: InputMaybe<Scalars['String']['input']>
	gthbOrgDescription?: InputMaybe<Scalars['String']['input']>
	gthbOrgId?: InputMaybe<Scalars['BigInt']['input']>
	gthbOrgName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	twitterUsername?: InputMaybe<Scalars['String']['input']>
	websiteUrl?: InputMaybe<Scalars['String']['input']>
}

export type GthbOrgInsertResponse = {
	__typename?: 'GthbOrgInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	internalCreatedAt?: InputMaybe<OrderByDirection>
	twitterUsername?: InputMaybe<OrderByDirection>
	websiteUrl?: InputMaybe<OrderByDirection>
}

export type GthbOrgUpdateInput = {
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	descriptionHtml?: InputMaybe<Scalars['String']['input']>
	email?: InputMaybe<Scalars['String']['input']>
	gthbOrgDescription?: InputMaybe<Scalars['String']['input']>
	gthbOrgId?: InputMaybe<Scalars['BigInt']['input']>
	gthbOrgName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	twitterUsername?: InputMaybe<Scalars['String']['input']>
	websiteUrl?: InputMaybe<Scalars['String']['input']>
}

export type GthbOrgUpdateResponse = {
	__typename?: 'GthbOrgUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbOrg>
}

export type GthbOwner = Node & {
	__typename?: 'GthbOwner'
	avatarUrl: Scalars['String']['output']
	gthbOwner?: Maybe<GthbOrg>
	gthbOwnerId: Scalars['BigInt']['output']
	gthbOwnerLogin: Scalars['String']['output']
	gthbOwnerType: Scalars['Opaque']['output']
	gthbOwnerUrl: Scalars['String']['output']
	gthbRepoCollection: GthbRepoConnection
	gthbRepoContrCollection: GthbRepoContrConnection
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	repositoriesTotalCount: Scalars['BigInt']['output']
}

export type GthbOwnerGthbRepoCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoOrderBy>>
}

export type GthbOwnerGthbRepoContrCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoContrFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbOwner>
}

export type GthbOwnerEdge = {
	__typename?: 'GthbOwnerEdge'
	cursor: Scalars['String']['output']
	node: GthbOwner
}

export type GthbOwnerFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbOwnerFilter>>
	avatarUrl?: InputMaybe<StringFilter>
	gthbOwnerId?: InputMaybe<BigIntFilter>
	gthbOwnerLogin?: InputMaybe<StringFilter>
	gthbOwnerType?: InputMaybe<OpaqueFilter>
	gthbOwnerUrl?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbOwnerFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbOwnerFilter>>
	repositoriesTotalCount?: InputMaybe<BigIntFilter>
}

export type GthbOwnerInsertInput = {
	avatarUrl?: InputMaybe<Scalars['String']['input']>
	gthbOwnerLogin?: InputMaybe<Scalars['String']['input']>
	gthbOwnerType?: InputMaybe<Scalars['Opaque']['input']>
	gthbOwnerUrl?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	repositoriesTotalCount?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbOwnerInsertResponse = {
	__typename?: 'GthbOwnerInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbOwner>
}

export type GthbOwnerOrderBy = {
	avatarUrl?: InputMaybe<OrderByDirection>
	gthbOwnerId?: InputMaybe<OrderByDirection>
	gthbOwnerLogin?: InputMaybe<OrderByDirection>
	gthbOwnerType?: InputMaybe<OrderByDirection>
	gthbOwnerUrl?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	repositoriesTotalCount?: InputMaybe<OrderByDirection>
}

export type GthbOwnerUpdateInput = {
	avatarUrl?: InputMaybe<Scalars['String']['input']>
	gthbOwnerLogin?: InputMaybe<Scalars['String']['input']>
	gthbOwnerType?: InputMaybe<Scalars['Opaque']['input']>
	gthbOwnerUrl?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	repositoriesTotalCount?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbOwnerUpdateResponse = {
	__typename?: 'GthbOwnerUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbOwner>
}

export type GthbRepo = Node & {
	__typename?: 'GthbRepo'
	contributorCount: Scalars['BigInt']['output']
	createdAt: Scalars['Datetime']['output']
	forkCount: Scalars['BigInt']['output']
	forksPerContributor: Scalars['BigInt']['output']
	gthbForkHistCollection: GthbForkHistConnection
	gthbIssueHistCollection: GthbIssueHistConnection
	gthbOwner: GthbOwner
	gthbOwnerId: Scalars['BigInt']['output']
	gthbRepo: ProjRepo
	gthbRepoAndGthbLangCollection: GthbRepoAndGthbLangConnection
	gthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicConnection
	gthbRepoContrCollection: GthbRepoContrConnection
	gthbRepoDescription?: Maybe<Scalars['String']['output']>
	gthbRepoId: Scalars['BigInt']['output']
	gthbRepoName: Scalars['String']['output']
	gthbRepoUrl: Scalars['String']['output']
	gthbStarHistCollection: GthbStarHistConnection
	gthbTrendingCollection: GthbTrendingConnection
	homepageUrl?: Maybe<Scalars['String']['output']>
	internalCreatedAt: Scalars['Datetime']['output']
	isInOrganization: Scalars['Boolean']['output']
	issuesPerContributor: Scalars['BigInt']['output']
	issuesTotalCount: Scalars['BigInt']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	pullRequestsPerContributor: Scalars['BigInt']['output']
	pullRequestsTotalCount: Scalars['BigInt']['output']
	stargazerCount: Scalars['BigInt']['output']
	stargazersPerContributor: Scalars['BigInt']['output']
}

export type GthbRepoGthbForkHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbForkHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbForkHistOrderBy>>
}

export type GthbRepoGthbIssueHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbIssueHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbIssueHistOrderBy>>
}

export type GthbRepoGthbRepoAndGthbLangCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbLangFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoAndGthbLangOrderBy>>
}

export type GthbRepoGthbRepoAndGthbRepoTopicCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoAndGthbRepoTopicOrderBy>>
}

export type GthbRepoGthbRepoContrCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoContrFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoContrOrderBy>>
}

export type GthbRepoGthbStarHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbStarHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbStarHistOrderBy>>
}

export type GthbRepoGthbTrendingCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbTrendingFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbTrendingOrderBy>>
}

export type GthbRepoAndGthbLang = Node & {
	__typename?: 'GthbRepoAndGthbLang'
	gthbLang: GthbLang
	gthbLangId: Scalars['BigInt']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbRepoAndGthbLangConnection = {
	__typename?: 'GthbRepoAndGthbLangConnection'
	edges: Array<GthbRepoAndGthbLangEdge>
	pageInfo: PageInfo
}

export type GthbRepoAndGthbLangDeleteResponse = {
	__typename?: 'GthbRepoAndGthbLangDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoAndGthbLang>
}

export type GthbRepoAndGthbLangEdge = {
	__typename?: 'GthbRepoAndGthbLangEdge'
	cursor: Scalars['String']['output']
	node: GthbRepoAndGthbLang
}

export type GthbRepoAndGthbLangFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbRepoAndGthbLangFilter>>
	gthbLangId?: InputMaybe<BigIntFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbRepoAndGthbLangFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbRepoAndGthbLangFilter>>
}

export type GthbRepoAndGthbLangInsertInput = {
	gthbLangId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoAndGthbLangInsertResponse = {
	__typename?: 'GthbRepoAndGthbLangInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoAndGthbLang>
}

export type GthbRepoAndGthbLangOrderBy = {
	gthbLangId?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbRepoAndGthbLangUpdateInput = {
	gthbLangId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoAndGthbLangUpdateResponse = {
	__typename?: 'GthbRepoAndGthbLangUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoAndGthbLang>
}

export type GthbRepoAndGthbRepoTopic = Node & {
	__typename?: 'GthbRepoAndGthbRepoTopic'
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	gthbRepoTopic: GthbRepoTopic
	gthbRepoTopicId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbRepoAndGthbRepoTopicConnection = {
	__typename?: 'GthbRepoAndGthbRepoTopicConnection'
	edges: Array<GthbRepoAndGthbRepoTopicEdge>
	pageInfo: PageInfo
}

export type GthbRepoAndGthbRepoTopicDeleteResponse = {
	__typename?: 'GthbRepoAndGthbRepoTopicDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoAndGthbRepoTopic>
}

export type GthbRepoAndGthbRepoTopicEdge = {
	__typename?: 'GthbRepoAndGthbRepoTopicEdge'
	cursor: Scalars['String']['output']
	node: GthbRepoAndGthbRepoTopic
}

export type GthbRepoAndGthbRepoTopicFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbRepoAndGthbRepoTopicFilter>>
	gthbRepoId?: InputMaybe<BigIntFilter>
	gthbRepoTopicId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbRepoAndGthbRepoTopicFilter>>
}

export type GthbRepoAndGthbRepoTopicInsertInput = {
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoTopicId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoAndGthbRepoTopicInsertResponse = {
	__typename?: 'GthbRepoAndGthbRepoTopicInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoAndGthbRepoTopic>
}

export type GthbRepoAndGthbRepoTopicOrderBy = {
	gthbRepoId?: InputMaybe<OrderByDirection>
	gthbRepoTopicId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbRepoAndGthbRepoTopicUpdateInput = {
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoTopicId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoAndGthbRepoTopicUpdateResponse = {
	__typename?: 'GthbRepoAndGthbRepoTopicUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	contributions: Scalars['BigInt']['output']
	gthbOwner: GthbOwner
	gthbOwnerId: Scalars['BigInt']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbRepoContrConnection = {
	__typename?: 'GthbRepoContrConnection'
	edges: Array<GthbRepoContrEdge>
	pageInfo: PageInfo
}

export type GthbRepoContrDeleteResponse = {
	__typename?: 'GthbRepoContrDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoContr>
}

export type GthbRepoContrEdge = {
	__typename?: 'GthbRepoContrEdge'
	cursor: Scalars['String']['output']
	node: GthbRepoContr
}

export type GthbRepoContrFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbRepoContrFilter>>
	contributions?: InputMaybe<BigIntFilter>
	gthbOwnerId?: InputMaybe<BigIntFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbRepoContrFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbRepoContrFilter>>
}

export type GthbRepoContrInsertInput = {
	contributions?: InputMaybe<Scalars['BigInt']['input']>
	gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoContrInsertResponse = {
	__typename?: 'GthbRepoContrInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoContr>
}

export type GthbRepoContrOrderBy = {
	contributions?: InputMaybe<OrderByDirection>
	gthbOwnerId?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbRepoContrUpdateInput = {
	contributions?: InputMaybe<Scalars['BigInt']['input']>
	gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoContrUpdateResponse = {
	__typename?: 'GthbRepoContrUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoContr>
}

export type GthbRepoDeleteResponse = {
	__typename?: 'GthbRepoDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepo>
}

export type GthbRepoEdge = {
	__typename?: 'GthbRepoEdge'
	cursor: Scalars['String']['output']
	node: GthbRepo
}

export type GthbRepoFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbRepoFilter>>
	contributorCount?: InputMaybe<BigIntFilter>
	createdAt?: InputMaybe<DatetimeFilter>
	forkCount?: InputMaybe<BigIntFilter>
	forksPerContributor?: InputMaybe<BigIntFilter>
	gthbOwnerId?: InputMaybe<BigIntFilter>
	gthbRepoDescription?: InputMaybe<StringFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	gthbRepoName?: InputMaybe<StringFilter>
	gthbRepoUrl?: InputMaybe<StringFilter>
	homepageUrl?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	isInOrganization?: InputMaybe<BooleanFilter>
	issuesPerContributor?: InputMaybe<BigIntFilter>
	issuesTotalCount?: InputMaybe<BigIntFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbRepoFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbRepoFilter>>
	pullRequestsPerContributor?: InputMaybe<BigIntFilter>
	pullRequestsTotalCount?: InputMaybe<BigIntFilter>
	stargazerCount?: InputMaybe<BigIntFilter>
	stargazersPerContributor?: InputMaybe<BigIntFilter>
}

export type GthbRepoInsertInput = {
	contributorCount?: InputMaybe<Scalars['BigInt']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	forkCount?: InputMaybe<Scalars['BigInt']['input']>
	forksPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoDescription?: InputMaybe<Scalars['String']['input']>
	gthbRepoName?: InputMaybe<Scalars['String']['input']>
	gthbRepoUrl?: InputMaybe<Scalars['String']['input']>
	homepageUrl?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isInOrganization?: InputMaybe<Scalars['Boolean']['input']>
	issuesPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	issuesTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	pullRequestsPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	pullRequestsTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	stargazerCount?: InputMaybe<Scalars['BigInt']['input']>
	stargazersPerContributor?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbRepoInsertResponse = {
	__typename?: 'GthbRepoInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepo>
}

export type GthbRepoOrderBy = {
	contributorCount?: InputMaybe<OrderByDirection>
	createdAt?: InputMaybe<OrderByDirection>
	forkCount?: InputMaybe<OrderByDirection>
	forksPerContributor?: InputMaybe<OrderByDirection>
	gthbOwnerId?: InputMaybe<OrderByDirection>
	gthbRepoDescription?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	gthbRepoName?: InputMaybe<OrderByDirection>
	gthbRepoUrl?: InputMaybe<OrderByDirection>
	homepageUrl?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	isInOrganization?: InputMaybe<OrderByDirection>
	issuesPerContributor?: InputMaybe<OrderByDirection>
	issuesTotalCount?: InputMaybe<OrderByDirection>
	pullRequestsPerContributor?: InputMaybe<OrderByDirection>
	pullRequestsTotalCount?: InputMaybe<OrderByDirection>
	stargazerCount?: InputMaybe<OrderByDirection>
	stargazersPerContributor?: InputMaybe<OrderByDirection>
}

export type GthbRepoTopic = Node & {
	__typename?: 'GthbRepoTopic'
	gthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicConnection
	gthbRepoTopicId: Scalars['BigInt']['output']
	gthbRepoTopicName: Scalars['String']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	stargazerCount: Scalars['BigInt']['output']
}

export type GthbRepoTopicGthbRepoAndGthbRepoTopicCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoTopic>
}

export type GthbRepoTopicEdge = {
	__typename?: 'GthbRepoTopicEdge'
	cursor: Scalars['String']['output']
	node: GthbRepoTopic
}

export type GthbRepoTopicFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbRepoTopicFilter>>
	gthbRepoTopicId?: InputMaybe<BigIntFilter>
	gthbRepoTopicName?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbRepoTopicFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbRepoTopicFilter>>
	stargazerCount?: InputMaybe<BigIntFilter>
}

export type GthbRepoTopicInsertInput = {
	gthbRepoTopicName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	stargazerCount?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbRepoTopicInsertResponse = {
	__typename?: 'GthbRepoTopicInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoTopic>
}

export type GthbRepoTopicOrderBy = {
	gthbRepoTopicId?: InputMaybe<OrderByDirection>
	gthbRepoTopicName?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	stargazerCount?: InputMaybe<OrderByDirection>
}

export type GthbRepoTopicUpdateInput = {
	gthbRepoTopicName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	stargazerCount?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbRepoTopicUpdateResponse = {
	__typename?: 'GthbRepoTopicUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoTopic>
}

export type GthbRepoUpdateInput = {
	contributorCount?: InputMaybe<Scalars['BigInt']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	forkCount?: InputMaybe<Scalars['BigInt']['input']>
	forksPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoDescription?: InputMaybe<Scalars['String']['input']>
	gthbRepoName?: InputMaybe<Scalars['String']['input']>
	gthbRepoUrl?: InputMaybe<Scalars['String']['input']>
	homepageUrl?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isInOrganization?: InputMaybe<Scalars['Boolean']['input']>
	issuesPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	issuesTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	pullRequestsPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	pullRequestsTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	stargazerCount?: InputMaybe<Scalars['BigInt']['input']>
	stargazersPerContributor?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbRepoUpdateResponse = {
	__typename?: 'GthbRepoUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepo>
}

export type GthbStarHist = Node & {
	__typename?: 'GthbStarHist'
	amount: Scalars['BigInt']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	gthbStarHistDate: Scalars['Datetime']['output']
	gthbStarHistId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbStarHistConnection = {
	__typename?: 'GthbStarHistConnection'
	edges: Array<GthbStarHistEdge>
	pageInfo: PageInfo
}

export type GthbStarHistDeleteResponse = {
	__typename?: 'GthbStarHistDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbStarHist>
}

export type GthbStarHistEdge = {
	__typename?: 'GthbStarHistEdge'
	cursor: Scalars['String']['output']
	node: GthbStarHist
}

export type GthbStarHistFilter = {
	amount?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbStarHistFilter>>
	gthbRepoId?: InputMaybe<BigIntFilter>
	gthbStarHistDate?: InputMaybe<DatetimeFilter>
	gthbStarHistId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbStarHistFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbStarHistFilter>>
}

export type GthbStarHistInsertInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	gthbStarHistDate?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbStarHistInsertResponse = {
	__typename?: 'GthbStarHistInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbStarHist>
}

export type GthbStarHistOrderBy = {
	amount?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	gthbStarHistDate?: InputMaybe<OrderByDirection>
	gthbStarHistId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbStarHistUpdateInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	gthbStarHistDate?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbStarHistUpdateResponse = {
	__typename?: 'GthbStarHistUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbStarHist>
}

export type GthbTrending = Node & {
	__typename?: 'GthbTrending'
	dateRange: Scalars['Opaque']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	gthbTrendingId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	lang?: Maybe<Scalars['String']['output']>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbTrendingConnection = {
	__typename?: 'GthbTrendingConnection'
	edges: Array<GthbTrendingEdge>
	pageInfo: PageInfo
}

export type GthbTrendingDeleteResponse = {
	__typename?: 'GthbTrendingDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbTrending>
}

export type GthbTrendingEdge = {
	__typename?: 'GthbTrendingEdge'
	cursor: Scalars['String']['output']
	node: GthbTrending
}

export type GthbTrendingFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbTrendingFilter>>
	dateRange?: InputMaybe<OpaqueFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	gthbTrendingId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	lang?: InputMaybe<StringFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbTrendingFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbTrendingFilter>>
}

export type GthbTrendingInsertInput = {
	dateRange?: InputMaybe<Scalars['Opaque']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	lang?: InputMaybe<Scalars['String']['input']>
}

export type GthbTrendingInsertResponse = {
	__typename?: 'GthbTrendingInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbTrending>
}

export type GthbTrendingOrderBy = {
	dateRange?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	gthbTrendingId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	lang?: InputMaybe<OrderByDirection>
}

export type GthbTrendingUpdateInput = {
	dateRange?: InputMaybe<Scalars['Opaque']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	lang?: InputMaybe<Scalars['String']['input']>
}

export type GthbTrendingUpdateResponse = {
	__typename?: 'GthbTrendingUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbTrending>
}

export type GthbUser = Node & {
	__typename?: 'GthbUser'
	bio?: Maybe<Scalars['String']['output']>
	bioHtml?: Maybe<Scalars['String']['output']>
	company?: Maybe<Scalars['String']['output']>
	companyHtml?: Maybe<Scalars['String']['output']>
	createdAt: Scalars['Datetime']['output']
	email?: Maybe<Scalars['String']['output']>
	followersTotalCount: Scalars['BigInt']['output']
	gthbUser: GthbOwner
	gthbUserId: Scalars['BigInt']['output']
	gthbUserName?: Maybe<Scalars['String']['output']>
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	twitterUsername?: Maybe<Scalars['String']['output']>
	websiteUrl?: Maybe<Scalars['String']['output']>
}

export type GthbUserConnection = {
	__typename?: 'GthbUserConnection'
	edges: Array<GthbUserEdge>
	pageInfo: PageInfo
}

export type GthbUserDeleteResponse = {
	__typename?: 'GthbUserDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbUser>
}

export type GthbUserEdge = {
	__typename?: 'GthbUserEdge'
	cursor: Scalars['String']['output']
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
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbUserFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbUserFilter>>
	twitterUsername?: InputMaybe<StringFilter>
	websiteUrl?: InputMaybe<StringFilter>
}

export type GthbUserInsertInput = {
	bio?: InputMaybe<Scalars['String']['input']>
	bioHtml?: InputMaybe<Scalars['String']['input']>
	company?: InputMaybe<Scalars['String']['input']>
	companyHtml?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	email?: InputMaybe<Scalars['String']['input']>
	followersTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	gthbUserId?: InputMaybe<Scalars['BigInt']['input']>
	gthbUserName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	twitterUsername?: InputMaybe<Scalars['String']['input']>
	websiteUrl?: InputMaybe<Scalars['String']['input']>
}

export type GthbUserInsertResponse = {
	__typename?: 'GthbUserInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	internalCreatedAt?: InputMaybe<OrderByDirection>
	twitterUsername?: InputMaybe<OrderByDirection>
	websiteUrl?: InputMaybe<OrderByDirection>
}

export type GthbUserUpdateInput = {
	bio?: InputMaybe<Scalars['String']['input']>
	bioHtml?: InputMaybe<Scalars['String']['input']>
	company?: InputMaybe<Scalars['String']['input']>
	companyHtml?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	email?: InputMaybe<Scalars['String']['input']>
	followersTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	gthbUserId?: InputMaybe<Scalars['BigInt']['input']>
	gthbUserName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	twitterUsername?: InputMaybe<Scalars['String']['input']>
	websiteUrl?: InputMaybe<Scalars['String']['input']>
}

export type GthbUserUpdateResponse = {
	__typename?: 'GthbUserUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbUser>
}

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
	eq?: InputMaybe<Scalars['ID']['input']>
}

export type Instance1 = Node & {
	__typename?: 'Instance1'
	created_at: Scalars['Datetime']['output']
	id: Scalars['BigInt']['output']
	instance2Collection?: Maybe<Instance2Connection>
	name?: Maybe<Scalars['String']['output']>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type Instance1Instance2CollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<Instance2Filter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<Instance1>
}

export type Instance1Edge = {
	__typename?: 'Instance1Edge'
	cursor: Scalars['String']['output']
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
	created_at?: InputMaybe<Scalars['Datetime']['input']>
	name?: InputMaybe<Scalars['String']['input']>
}

export type Instance1InsertResponse = {
	__typename?: 'Instance1InsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<Instance1>
}

export type Instance1OrderBy = {
	created_at?: InputMaybe<OrderByDirection>
	id?: InputMaybe<OrderByDirection>
	name?: InputMaybe<OrderByDirection>
}

export type Instance1UpdateInput = {
	created_at?: InputMaybe<Scalars['Datetime']['input']>
	name?: InputMaybe<Scalars['String']['input']>
}

export type Instance1UpdateResponse = {
	__typename?: 'Instance1UpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<Instance1>
}

export type Instance2 = Node & {
	__typename?: 'Instance2'
	created_at: Scalars['Datetime']['output']
	for?: Maybe<Scalars['BigInt']['output']>
	id: Scalars['BigInt']['output']
	instance1?: Maybe<Instance1>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	share?: Maybe<Scalars['String']['output']>
}

export type Instance2Connection = {
	__typename?: 'Instance2Connection'
	edges: Array<Instance2Edge>
	pageInfo: PageInfo
}

export type Instance2DeleteResponse = {
	__typename?: 'Instance2DeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<Instance2>
}

export type Instance2Edge = {
	__typename?: 'Instance2Edge'
	cursor: Scalars['String']['output']
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
	created_at?: InputMaybe<Scalars['Datetime']['input']>
	for?: InputMaybe<Scalars['BigInt']['input']>
	share?: InputMaybe<Scalars['String']['input']>
}

export type Instance2InsertResponse = {
	__typename?: 'Instance2InsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	created_at?: InputMaybe<Scalars['Datetime']['input']>
	for?: InputMaybe<Scalars['BigInt']['input']>
	share?: InputMaybe<Scalars['String']['input']>
}

export type Instance2UpdateResponse = {
	__typename?: 'Instance2UpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<Instance2>
}

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
	eq?: InputMaybe<Scalars['Int']['input']>
	gt?: InputMaybe<Scalars['Int']['input']>
	gte?: InputMaybe<Scalars['Int']['input']>
	in?: InputMaybe<Array<Scalars['Int']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['Int']['input']>
	lte?: InputMaybe<Scalars['Int']['input']>
	neq?: InputMaybe<Scalars['Int']['input']>
}

/** The root type for creating and mutating data */
export type Mutation = {
	__typename?: 'Mutation'
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
	fDeleteGthbTrendingByDateRange?: Maybe<Scalars['Opaque']['output']>
	fDeleteProjBookmark?: Maybe<Scalars['Int']['output']>
	fDeleteProjBookmarkByGthbRepoName?: Maybe<Scalars['Boolean']['output']>
	fDeleteProjBookmarkByProjRepoId?: Maybe<Scalars['Int']['output']>
	fDeleteUser?: Maybe<Scalars['Boolean']['output']>
	fIsProjRepoBookmarked?: Maybe<Scalars['Boolean']['output']>
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
	test?: Maybe<Scalars['UUID']['output']>
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
export type MutationDeleteFromAlgoHnCommentAndAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnCommentCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnCommentFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnQueryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnQueryFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnStoryAndAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnStoryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnStoryFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnTagFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbForkHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbForkHistFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbIssueHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbIssueHistFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbLangCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbLangFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbOrgCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbOrgFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbOwnerCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbOwnerFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoAndGthbLangCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoAndGthbLangFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoAndGthbRepoTopicCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoContrCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoContrFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoTopicCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoTopicFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbStarHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbStarHistFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbTrendingCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbTrendingFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbUserCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbUserFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromInstance1CollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<Instance1Filter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromInstance2CollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<Instance2Filter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjBookmarkCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjBookmarkFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjCatAndProjBookmarkCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjCatCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjCatFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjClassifierCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjClassifierFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndAlgoHnQueryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndProjClassifierCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndSbotLinCompanyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndSbotLinProfileCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromSbotLinCompanyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<SbotLinCompanyFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromSbotLinProfileCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<SbotLinProfileFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromUserAdminCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserAdminFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromUserApiKeyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserApiKeyFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromUserWhitelistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserWhitelistFilter>
}

/** The root type for creating and mutating data */
export type MutationFDeleteGthbTrendingByDateRangeArgs = {
	daterange?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkArgs = {
	projbookmarkid?: InputMaybe<Scalars['BigInt']['input']>
}

/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkByGthbRepoNameArgs = {
	githubreponame?: InputMaybe<Scalars['String']['input']>
}

/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkByProjRepoIdArgs = {
	projrepoid?: InputMaybe<Scalars['BigInt']['input']>
}

/** The root type for creating and mutating data */
export type MutationFIsProjRepoBookmarkedArgs = {
	projrepoid?: InputMaybe<Scalars['BigInt']['input']>
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
export type MutationUpdateAlgoHnCommentAndAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
	set: AlgoHnCommentAndAlgoHnTagUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnCommentCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnCommentFilter>
	set: AlgoHnCommentUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnQueryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnQueryFilter>
	set: AlgoHnQueryUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnStoryAndAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
	set: AlgoHnStoryAndAlgoHnTagUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnStoryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnStoryFilter>
	set: AlgoHnStoryUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnTagFilter>
	set: AlgoHnTagUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbForkHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbForkHistFilter>
	set: GthbForkHistUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbIssueHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbIssueHistFilter>
	set: GthbIssueHistUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbLangCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbLangFilter>
	set: GthbLangUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbOrgCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbOrgFilter>
	set: GthbOrgUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbOwnerCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbOwnerFilter>
	set: GthbOwnerUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoAndGthbLangCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoAndGthbLangFilter>
	set: GthbRepoAndGthbLangUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoAndGthbRepoTopicCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
	set: GthbRepoAndGthbRepoTopicUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoFilter>
	set: GthbRepoUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoContrCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoContrFilter>
	set: GthbRepoContrUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoTopicCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoTopicFilter>
	set: GthbRepoTopicUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbStarHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbStarHistFilter>
	set: GthbStarHistUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbTrendingCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbTrendingFilter>
	set: GthbTrendingUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbUserCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbUserFilter>
	set: GthbUserUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateInstance1CollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<Instance1Filter>
	set: Instance1UpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateInstance2CollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<Instance2Filter>
	set: Instance2UpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjBookmarkCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjBookmarkFilter>
	set: ProjBookmarkUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjCatAndProjBookmarkCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
	set: ProjCatAndProjBookmarkUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjCatCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjCatFilter>
	set: ProjCatUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjClassifierCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjClassifierFilter>
	set: ProjClassifierUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndAlgoHnQueryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
	set: ProjRepoAndAlgoHnQueryUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndProjClassifierCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
	set: ProjRepoAndProjClassifierUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndSbotLinCompanyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
	set: ProjRepoAndSbotLinCompanyUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndSbotLinProfileCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
	set: ProjRepoAndSbotLinProfileUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoFilter>
	set: ProjRepoUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateSbotLinCompanyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<SbotLinCompanyFilter>
	set: SbotLinCompanyUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateSbotLinProfileCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<SbotLinProfileFilter>
	set: SbotLinProfileUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateUserAdminCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserAdminFilter>
	set: UserAdminUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateUserApiKeyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserApiKeyFilter>
	set: UserApiKeyUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateUserWhitelistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserWhitelistFilter>
	set: UserWhitelistUpdateInput
}

export type Node = {
	/** Retrieves a record by `ID` */
	nodeId: Scalars['ID']['output']
}

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
	eq?: InputMaybe<Scalars['Opaque']['input']>
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
	endCursor?: Maybe<Scalars['String']['output']>
	hasNextPage: Scalars['Boolean']['output']
	hasPreviousPage: Scalars['Boolean']['output']
	startCursor?: Maybe<Scalars['String']['output']>
}

export type ProjBookmark = Node & {
	__typename?: 'ProjBookmark'
	authUsersId: Scalars['UUID']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	isPublic?: Maybe<Scalars['Boolean']['output']>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projBookmarkId: Scalars['BigInt']['output']
	projCatAndProjBookmarkCollection: ProjCatAndProjBookmarkConnection
	projRepo: ProjRepo
	projRepoId: Scalars['BigInt']['output']
}

export type ProjBookmarkProjCatAndProjBookmarkCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjBookmark>
}

export type ProjBookmarkEdge = {
	__typename?: 'ProjBookmarkEdge'
	cursor: Scalars['String']['output']
	node: ProjBookmark
}

export type ProjBookmarkFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjBookmarkFilter>>
	authUsersId?: InputMaybe<UuidFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPublic?: InputMaybe<Scalars['Boolean']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjBookmarkInsertResponse = {
	__typename?: 'ProjBookmarkInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjBookmark>
}

export type ProjBookmarkOrderBy = {
	authUsersId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	isPublic?: InputMaybe<OrderByDirection>
	projBookmarkId?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
}

export type ProjBookmarkUpdateInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPublic?: InputMaybe<Scalars['Boolean']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjBookmarkUpdateResponse = {
	__typename?: 'ProjBookmarkUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjBookmark>
}

export type ProjCat = Node & {
	__typename?: 'ProjCat'
	authUsersId: Scalars['UUID']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	isPublic?: Maybe<Scalars['Boolean']['output']>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	note?: Maybe<Scalars['String']['output']>
	projCatAndProjBookmarkCollection: ProjCatAndProjBookmarkConnection
	projCatId: Scalars['BigInt']['output']
	title: Scalars['String']['output']
}

export type ProjCatProjCatAndProjBookmarkCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjCatAndProjBookmarkOrderBy>>
}

export type ProjCatAndProjBookmark = Node & {
	__typename?: 'ProjCatAndProjBookmark'
	internalCreatedAt: Scalars['Datetime']['output']
	isPinned?: Maybe<Scalars['Boolean']['output']>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projBookmark: ProjBookmark
	projBookmarkId: Scalars['BigInt']['output']
	projCat: ProjCat
	projCatId: Scalars['BigInt']['output']
}

export type ProjCatAndProjBookmarkConnection = {
	__typename?: 'ProjCatAndProjBookmarkConnection'
	edges: Array<ProjCatAndProjBookmarkEdge>
	pageInfo: PageInfo
}

export type ProjCatAndProjBookmarkDeleteResponse = {
	__typename?: 'ProjCatAndProjBookmarkDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjCatAndProjBookmark>
}

export type ProjCatAndProjBookmarkEdge = {
	__typename?: 'ProjCatAndProjBookmarkEdge'
	cursor: Scalars['String']['output']
	node: ProjCatAndProjBookmark
}

export type ProjCatAndProjBookmarkFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjCatAndProjBookmarkFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPinned?: InputMaybe<Scalars['Boolean']['input']>
	projBookmarkId?: InputMaybe<Scalars['BigInt']['input']>
	projCatId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjCatAndProjBookmarkInsertResponse = {
	__typename?: 'ProjCatAndProjBookmarkInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjCatAndProjBookmark>
}

export type ProjCatAndProjBookmarkOrderBy = {
	internalCreatedAt?: InputMaybe<OrderByDirection>
	isPinned?: InputMaybe<OrderByDirection>
	projBookmarkId?: InputMaybe<OrderByDirection>
	projCatId?: InputMaybe<OrderByDirection>
}

export type ProjCatAndProjBookmarkUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPinned?: InputMaybe<Scalars['Boolean']['input']>
	projBookmarkId?: InputMaybe<Scalars['BigInt']['input']>
	projCatId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjCatAndProjBookmarkUpdateResponse = {
	__typename?: 'ProjCatAndProjBookmarkUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjCat>
}

export type ProjCatEdge = {
	__typename?: 'ProjCatEdge'
	cursor: Scalars['String']['output']
	node: ProjCat
}

export type ProjCatFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjCatFilter>>
	authUsersId?: InputMaybe<UuidFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPublic?: InputMaybe<Scalars['Boolean']['input']>
	note?: InputMaybe<Scalars['String']['input']>
	title?: InputMaybe<Scalars['String']['input']>
}

export type ProjCatInsertResponse = {
	__typename?: 'ProjCatInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjCat>
}

export type ProjCatOrderBy = {
	authUsersId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	isPublic?: InputMaybe<OrderByDirection>
	note?: InputMaybe<OrderByDirection>
	projCatId?: InputMaybe<OrderByDirection>
	title?: InputMaybe<OrderByDirection>
}

export type ProjCatUpdateInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPublic?: InputMaybe<Scalars['Boolean']['input']>
	note?: InputMaybe<Scalars['String']['input']>
	title?: InputMaybe<Scalars['String']['input']>
}

export type ProjCatUpdateResponse = {
	__typename?: 'ProjCatUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjCat>
}

export type ProjClassifier = Node & {
	__typename?: 'ProjClassifier'
	classifier: Scalars['String']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projClassifierId: Scalars['BigInt']['output']
	projRepoAndProjClassifierCollection: ProjRepoAndProjClassifierConnection
}

export type ProjClassifierProjRepoAndProjClassifierCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjClassifier>
}

export type ProjClassifierEdge = {
	__typename?: 'ProjClassifierEdge'
	cursor: Scalars['String']['output']
	node: ProjClassifier
}

export type ProjClassifierFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjClassifierFilter>>
	classifier?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjClassifierFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjClassifierFilter>>
	projClassifierId?: InputMaybe<BigIntFilter>
}

export type ProjClassifierInsertInput = {
	classifier?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type ProjClassifierInsertResponse = {
	__typename?: 'ProjClassifierInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjClassifier>
}

export type ProjClassifierOrderBy = {
	classifier?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	projClassifierId?: InputMaybe<OrderByDirection>
}

export type ProjClassifierUpdateInput = {
	classifier?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type ProjClassifierUpdateResponse = {
	__typename?: 'ProjClassifierUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjClassifier>
}

export type ProjRepo = Node & {
	__typename?: 'ProjRepo'
	algoHnEli5?: Maybe<Scalars['String']['output']>
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	note?: Maybe<Scalars['String']['output']>
	projBookmarkCollection: ProjBookmarkConnection
	projRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryConnection
	projRepoAndProjClassifierCollection: ProjRepoAndProjClassifierConnection
	projRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyConnection
	projRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileConnection
	projRepoId: Scalars['BigInt']['output']
	repoEli5?: Maybe<Scalars['String']['output']>
}

export type ProjRepoProjBookmarkCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjBookmarkFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjBookmarkOrderBy>>
}

export type ProjRepoProjRepoAndAlgoHnQueryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndAlgoHnQueryOrderBy>>
}

export type ProjRepoProjRepoAndProjClassifierCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndProjClassifierOrderBy>>
}

export type ProjRepoProjRepoAndSbotLinCompanyCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndSbotLinCompanyOrderBy>>
}

export type ProjRepoProjRepoAndSbotLinProfileCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndSbotLinProfileOrderBy>>
}

export type ProjRepoAndAlgoHnQuery = Node & {
	__typename?: 'ProjRepoAndAlgoHnQuery'
	algoHnQuery: AlgoHnQuery
	algoHnQueryId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projRepo: ProjRepo
	projRepoId: Scalars['BigInt']['output']
}

export type ProjRepoAndAlgoHnQueryConnection = {
	__typename?: 'ProjRepoAndAlgoHnQueryConnection'
	edges: Array<ProjRepoAndAlgoHnQueryEdge>
	pageInfo: PageInfo
}

export type ProjRepoAndAlgoHnQueryDeleteResponse = {
	__typename?: 'ProjRepoAndAlgoHnQueryDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndAlgoHnQuery>
}

export type ProjRepoAndAlgoHnQueryEdge = {
	__typename?: 'ProjRepoAndAlgoHnQueryEdge'
	cursor: Scalars['String']['output']
	node: ProjRepoAndAlgoHnQuery
}

export type ProjRepoAndAlgoHnQueryFilter = {
	algoHnQueryId?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjRepoAndAlgoHnQueryFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjRepoAndAlgoHnQueryFilter>>
	projRepoId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndAlgoHnQueryInsertInput = {
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndAlgoHnQueryInsertResponse = {
	__typename?: 'ProjRepoAndAlgoHnQueryInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndAlgoHnQuery>
}

export type ProjRepoAndAlgoHnQueryOrderBy = {
	algoHnQueryId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndAlgoHnQueryUpdateInput = {
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndAlgoHnQueryUpdateResponse = {
	__typename?: 'ProjRepoAndAlgoHnQueryUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndAlgoHnQuery>
}

export type ProjRepoAndProjClassifier = Node & {
	__typename?: 'ProjRepoAndProjClassifier'
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projClassifier: ProjClassifier
	projClassifierId: Scalars['BigInt']['output']
	projRepo: ProjRepo
	projRepoId: Scalars['BigInt']['output']
}

export type ProjRepoAndProjClassifierConnection = {
	__typename?: 'ProjRepoAndProjClassifierConnection'
	edges: Array<ProjRepoAndProjClassifierEdge>
	pageInfo: PageInfo
}

export type ProjRepoAndProjClassifierDeleteResponse = {
	__typename?: 'ProjRepoAndProjClassifierDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndProjClassifier>
}

export type ProjRepoAndProjClassifierEdge = {
	__typename?: 'ProjRepoAndProjClassifierEdge'
	cursor: Scalars['String']['output']
	node: ProjRepoAndProjClassifier
}

export type ProjRepoAndProjClassifierFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjRepoAndProjClassifierFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjRepoAndProjClassifierFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjRepoAndProjClassifierFilter>>
	projClassifierId?: InputMaybe<BigIntFilter>
	projRepoId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndProjClassifierInsertInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projClassifierId?: InputMaybe<Scalars['BigInt']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndProjClassifierInsertResponse = {
	__typename?: 'ProjRepoAndProjClassifierInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndProjClassifier>
}

export type ProjRepoAndProjClassifierOrderBy = {
	internalCreatedAt?: InputMaybe<OrderByDirection>
	projClassifierId?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndProjClassifierUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projClassifierId?: InputMaybe<Scalars['BigInt']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndProjClassifierUpdateResponse = {
	__typename?: 'ProjRepoAndProjClassifierUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndProjClassifier>
}

export type ProjRepoAndSbotLinCompany = Node & {
	__typename?: 'ProjRepoAndSbotLinCompany'
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projRepo: ProjRepo
	projRepoId: Scalars['BigInt']['output']
	sbotLinCompany: SbotLinCompany
	sbotLinCompanyId: Scalars['BigInt']['output']
}

export type ProjRepoAndSbotLinCompanyConnection = {
	__typename?: 'ProjRepoAndSbotLinCompanyConnection'
	edges: Array<ProjRepoAndSbotLinCompanyEdge>
	pageInfo: PageInfo
}

export type ProjRepoAndSbotLinCompanyDeleteResponse = {
	__typename?: 'ProjRepoAndSbotLinCompanyDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndSbotLinCompany>
}

export type ProjRepoAndSbotLinCompanyEdge = {
	__typename?: 'ProjRepoAndSbotLinCompanyEdge'
	cursor: Scalars['String']['output']
	node: ProjRepoAndSbotLinCompany
}

export type ProjRepoAndSbotLinCompanyFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjRepoAndSbotLinCompanyFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjRepoAndSbotLinCompanyFilter>>
	projRepoId?: InputMaybe<BigIntFilter>
	sbotLinCompanyId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndSbotLinCompanyInsertInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
	sbotLinCompanyId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndSbotLinCompanyInsertResponse = {
	__typename?: 'ProjRepoAndSbotLinCompanyInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndSbotLinCompany>
}

export type ProjRepoAndSbotLinCompanyOrderBy = {
	internalCreatedAt?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
	sbotLinCompanyId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndSbotLinCompanyUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
	sbotLinCompanyId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndSbotLinCompanyUpdateResponse = {
	__typename?: 'ProjRepoAndSbotLinCompanyUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndSbotLinCompany>
}

export type ProjRepoAndSbotLinProfile = Node & {
	__typename?: 'ProjRepoAndSbotLinProfile'
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projRepo: ProjRepo
	projRepoId: Scalars['BigInt']['output']
	sbotLinProfile: SbotLinProfile
	sbotLinProfileId: Scalars['BigInt']['output']
}

export type ProjRepoAndSbotLinProfileConnection = {
	__typename?: 'ProjRepoAndSbotLinProfileConnection'
	edges: Array<ProjRepoAndSbotLinProfileEdge>
	pageInfo: PageInfo
}

export type ProjRepoAndSbotLinProfileDeleteResponse = {
	__typename?: 'ProjRepoAndSbotLinProfileDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndSbotLinProfile>
}

export type ProjRepoAndSbotLinProfileEdge = {
	__typename?: 'ProjRepoAndSbotLinProfileEdge'
	cursor: Scalars['String']['output']
	node: ProjRepoAndSbotLinProfile
}

export type ProjRepoAndSbotLinProfileFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjRepoAndSbotLinProfileFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjRepoAndSbotLinProfileFilter>>
	projRepoId?: InputMaybe<BigIntFilter>
	sbotLinProfileId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndSbotLinProfileInsertInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
	sbotLinProfileId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndSbotLinProfileInsertResponse = {
	__typename?: 'ProjRepoAndSbotLinProfileInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndSbotLinProfile>
}

export type ProjRepoAndSbotLinProfileOrderBy = {
	internalCreatedAt?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
	sbotLinProfileId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndSbotLinProfileUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
	sbotLinProfileId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndSbotLinProfileUpdateResponse = {
	__typename?: 'ProjRepoAndSbotLinProfileUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepo>
}

export type ProjRepoEdge = {
	__typename?: 'ProjRepoEdge'
	cursor: Scalars['String']['output']
	node: ProjRepo
}

export type ProjRepoFilter = {
	algoHnEli5?: InputMaybe<StringFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjRepoFilter>>
	gthbRepoId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjRepoFilter>
	note?: InputMaybe<StringFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjRepoFilter>>
	projRepoId?: InputMaybe<BigIntFilter>
	repoEli5?: InputMaybe<StringFilter>
}

export type ProjRepoInsertInput = {
	algoHnEli5?: InputMaybe<Scalars['String']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	note?: InputMaybe<Scalars['String']['input']>
	repoEli5?: InputMaybe<Scalars['String']['input']>
}

export type ProjRepoInsertResponse = {
	__typename?: 'ProjRepoInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepo>
}

export type ProjRepoOrderBy = {
	algoHnEli5?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	note?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
	repoEli5?: InputMaybe<OrderByDirection>
}

export type ProjRepoUpdateInput = {
	algoHnEli5?: InputMaybe<Scalars['String']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	note?: InputMaybe<Scalars['String']['input']>
	repoEli5?: InputMaybe<Scalars['String']['input']>
}

export type ProjRepoUpdateResponse = {
	__typename?: 'ProjRepoUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	fIsGthbRepoBookmarked?: Maybe<Scalars['Boolean']['output']>
	fListBookmarkedGthbRepo?: Maybe<GthbRepoConnection>
	fListTrendingGthbRepo?: Maybe<GthbRepoConnection>
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
	/** A pagable collection of type `Instance1` */
	instance1Collection?: Maybe<Instance1Connection>
	/** A pagable collection of type `Instance2` */
	instance2Collection?: Maybe<Instance2Connection>
	/** Retrieve a record by its `ID` */
	node?: Maybe<Node>
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
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnCommentCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnCommentFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnCommentOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnQueryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnQueryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnQueryOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnStoryAndAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnStoryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnStoryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnStoryOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnTagOrderBy>>
}

/** The root type for querying data */
export type QueryFIsGthbRepoBookmarkedArgs = {
	githubreponame?: InputMaybe<Scalars['String']['input']>
}

/** The root type for querying data */
export type QueryFListBookmarkedGthbRepoArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoOrderBy>>
}

/** The root type for querying data */
export type QueryFListTrendingGthbRepoArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoOrderBy>>
}

/** The root type for querying data */
export type QueryGthbForkHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbForkHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbForkHistOrderBy>>
}

/** The root type for querying data */
export type QueryGthbIssueHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbIssueHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbIssueHistOrderBy>>
}

/** The root type for querying data */
export type QueryGthbLangCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbLangFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbLangOrderBy>>
}

/** The root type for querying data */
export type QueryGthbOrgCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbOrgFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbOrgOrderBy>>
}

/** The root type for querying data */
export type QueryGthbOwnerCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbOwnerFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbOwnerOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoAndGthbLangCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbLangFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoAndGthbLangOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoAndGthbRepoTopicCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoAndGthbRepoTopicOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoContrCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoContrFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoContrOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoTopicCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoTopicFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoTopicOrderBy>>
}

/** The root type for querying data */
export type QueryGthbStarHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbStarHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbStarHistOrderBy>>
}

/** The root type for querying data */
export type QueryGthbTrendingCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbTrendingFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbTrendingOrderBy>>
}

/** The root type for querying data */
export type QueryGthbUserCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbUserFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbUserOrderBy>>
}

/** The root type for querying data */
export type QueryInstance1CollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<Instance1Filter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<Instance1OrderBy>>
}

/** The root type for querying data */
export type QueryInstance2CollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<Instance2Filter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<Instance2OrderBy>>
}

/** The root type for querying data */
export type QueryNodeArgs = {
	nodeId: Scalars['ID']['input']
}

/** The root type for querying data */
export type QueryProjBookmarkCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjBookmarkFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjBookmarkOrderBy>>
}

/** The root type for querying data */
export type QueryProjCatAndProjBookmarkCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjCatAndProjBookmarkOrderBy>>
}

/** The root type for querying data */
export type QueryProjCatCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjCatFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjCatOrderBy>>
}

/** The root type for querying data */
export type QueryProjClassifierCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjClassifierFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjClassifierOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndAlgoHnQueryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndAlgoHnQueryOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndProjClassifierCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndProjClassifierOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndSbotLinCompanyCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndSbotLinCompanyOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndSbotLinProfileCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndSbotLinProfileOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoOrderBy>>
}

/** The root type for querying data */
export type QuerySbotLinCompanyCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<SbotLinCompanyFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<SbotLinCompanyOrderBy>>
}

/** The root type for querying data */
export type QuerySbotLinProfileCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<SbotLinProfileFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<SbotLinProfileOrderBy>>
}

/** The root type for querying data */
export type QueryUserAdminCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<UserAdminFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<UserAdminOrderBy>>
}

/** The root type for querying data */
export type QueryUserApiKeyCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<UserApiKeyFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<UserApiKeyOrderBy>>
}

/** The root type for querying data */
export type QueryUserWhitelistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<UserWhitelistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<UserWhitelistOrderBy>>
}

export type SbotLinCompany = Node & {
	__typename?: 'SbotLinCompany'
	about?: Maybe<Scalars['String']['output']>
	employeesAmountInLinkedin: Scalars['BigInt']['output']
	followers: Scalars['BigInt']['output']
	headquarters?: Maybe<Scalars['String']['output']>
	internalCreatedAt: Scalars['Datetime']['output']
	logo: Scalars['String']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyConnection
	sbotLinCompanyId: Scalars['BigInt']['output']
	sbotLinCompanyImage: Scalars['String']['output']
	sbotLinCompanyName: Scalars['String']['output']
	sbotLinCompanyType?: Maybe<Scalars['String']['output']>
	sbotLinCompanyUrl: Scalars['String']['output']
	sphere?: Maybe<Scalars['String']['output']>
	website?: Maybe<Scalars['String']['output']>
}

export type SbotLinCompanyProjRepoAndSbotLinCompanyCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinCompany>
}

export type SbotLinCompanyEdge = {
	__typename?: 'SbotLinCompanyEdge'
	cursor: Scalars['String']['output']
	node: SbotLinCompany
}

export type SbotLinCompanyFilter = {
	about?: InputMaybe<StringFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<SbotLinCompanyFilter>>
	employeesAmountInLinkedin?: InputMaybe<BigIntFilter>
	followers?: InputMaybe<BigIntFilter>
	headquarters?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	about?: InputMaybe<Scalars['String']['input']>
	employeesAmountInLinkedin?: InputMaybe<Scalars['BigInt']['input']>
	followers?: InputMaybe<Scalars['BigInt']['input']>
	headquarters?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	logo?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyImage?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyName?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyType?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyUrl?: InputMaybe<Scalars['String']['input']>
	sphere?: InputMaybe<Scalars['String']['input']>
	website?: InputMaybe<Scalars['String']['input']>
}

export type SbotLinCompanyInsertResponse = {
	__typename?: 'SbotLinCompanyInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinCompany>
}

export type SbotLinCompanyOrderBy = {
	about?: InputMaybe<OrderByDirection>
	employeesAmountInLinkedin?: InputMaybe<OrderByDirection>
	followers?: InputMaybe<OrderByDirection>
	headquarters?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
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
	about?: InputMaybe<Scalars['String']['input']>
	employeesAmountInLinkedin?: InputMaybe<Scalars['BigInt']['input']>
	followers?: InputMaybe<Scalars['BigInt']['input']>
	headquarters?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	logo?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyImage?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyName?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyType?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyUrl?: InputMaybe<Scalars['String']['input']>
	sphere?: InputMaybe<Scalars['String']['input']>
	website?: InputMaybe<Scalars['String']['input']>
}

export type SbotLinCompanyUpdateResponse = {
	__typename?: 'SbotLinCompanyUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinCompany>
}

export type SbotLinProfile = Node & {
	__typename?: 'SbotLinProfile'
	about?: Maybe<Scalars['String']['output']>
	avatar?: Maybe<Scalars['String']['output']>
	city?: Maybe<Scalars['String']['output']>
	currentCompanyLink?: Maybe<Scalars['String']['output']>
	currentCompanyName?: Maybe<Scalars['String']['output']>
	educationDetails?: Maybe<Scalars['String']['output']>
	followers?: Maybe<Scalars['String']['output']>
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	position?: Maybe<Scalars['String']['output']>
	projRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileConnection
	sbotLinProfileFollowing?: Maybe<Scalars['String']['output']>
	sbotLinProfileId: Scalars['BigInt']['output']
	sbotLinProfileName: Scalars['String']['output']
	sbotLinProfileUrl: Scalars['String']['output']
}

export type SbotLinProfileProjRepoAndSbotLinProfileCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinProfile>
}

export type SbotLinProfileEdge = {
	__typename?: 'SbotLinProfileEdge'
	cursor: Scalars['String']['output']
	node: SbotLinProfile
}

export type SbotLinProfileFilter = {
	about?: InputMaybe<StringFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<SbotLinProfileFilter>>
	avatar?: InputMaybe<StringFilter>
	city?: InputMaybe<StringFilter>
	currentCompanyLink?: InputMaybe<StringFilter>
	currentCompanyName?: InputMaybe<StringFilter>
	educationDetails?: InputMaybe<StringFilter>
	followers?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	about?: InputMaybe<Scalars['String']['input']>
	avatar?: InputMaybe<Scalars['String']['input']>
	city?: InputMaybe<Scalars['String']['input']>
	currentCompanyLink?: InputMaybe<Scalars['String']['input']>
	currentCompanyName?: InputMaybe<Scalars['String']['input']>
	educationDetails?: InputMaybe<Scalars['String']['input']>
	followers?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	position?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileFollowing?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileName?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileUrl?: InputMaybe<Scalars['String']['input']>
}

export type SbotLinProfileInsertResponse = {
	__typename?: 'SbotLinProfileInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinProfile>
}

export type SbotLinProfileOrderBy = {
	about?: InputMaybe<OrderByDirection>
	avatar?: InputMaybe<OrderByDirection>
	city?: InputMaybe<OrderByDirection>
	currentCompanyLink?: InputMaybe<OrderByDirection>
	currentCompanyName?: InputMaybe<OrderByDirection>
	educationDetails?: InputMaybe<OrderByDirection>
	followers?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	position?: InputMaybe<OrderByDirection>
	sbotLinProfileFollowing?: InputMaybe<OrderByDirection>
	sbotLinProfileId?: InputMaybe<OrderByDirection>
	sbotLinProfileName?: InputMaybe<OrderByDirection>
	sbotLinProfileUrl?: InputMaybe<OrderByDirection>
}

export type SbotLinProfileUpdateInput = {
	about?: InputMaybe<Scalars['String']['input']>
	avatar?: InputMaybe<Scalars['String']['input']>
	city?: InputMaybe<Scalars['String']['input']>
	currentCompanyLink?: InputMaybe<Scalars['String']['input']>
	currentCompanyName?: InputMaybe<Scalars['String']['input']>
	educationDetails?: InputMaybe<Scalars['String']['input']>
	followers?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	position?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileFollowing?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileName?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileUrl?: InputMaybe<Scalars['String']['input']>
}

export type SbotLinProfileUpdateResponse = {
	__typename?: 'SbotLinProfileUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinProfile>
}

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
	eq?: InputMaybe<Scalars['String']['input']>
	gt?: InputMaybe<Scalars['String']['input']>
	gte?: InputMaybe<Scalars['String']['input']>
	ilike?: InputMaybe<Scalars['String']['input']>
	in?: InputMaybe<Array<Scalars['String']['input']>>
	iregex?: InputMaybe<Scalars['String']['input']>
	is?: InputMaybe<FilterIs>
	like?: InputMaybe<Scalars['String']['input']>
	lt?: InputMaybe<Scalars['String']['input']>
	lte?: InputMaybe<Scalars['String']['input']>
	neq?: InputMaybe<Scalars['String']['input']>
	regex?: InputMaybe<Scalars['String']['input']>
	startsWith?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
	eq?: InputMaybe<Scalars['Time']['input']>
	gt?: InputMaybe<Scalars['Time']['input']>
	gte?: InputMaybe<Scalars['Time']['input']>
	in?: InputMaybe<Array<Scalars['Time']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['Time']['input']>
	lte?: InputMaybe<Scalars['Time']['input']>
	neq?: InputMaybe<Scalars['Time']['input']>
}

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
	eq?: InputMaybe<Scalars['UUID']['input']>
	in?: InputMaybe<Array<Scalars['UUID']['input']>>
	is?: InputMaybe<FilterIs>
	neq?: InputMaybe<Scalars['UUID']['input']>
}

export type UserAdmin = Node & {
	__typename?: 'UserAdmin'
	authUsersId: Scalars['UUID']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type UserAdminConnection = {
	__typename?: 'UserAdminConnection'
	edges: Array<UserAdminEdge>
	pageInfo: PageInfo
}

export type UserAdminDeleteResponse = {
	__typename?: 'UserAdminDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserAdmin>
}

export type UserAdminEdge = {
	__typename?: 'UserAdminEdge'
	cursor: Scalars['String']['output']
	node: UserAdmin
}

export type UserAdminFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<UserAdminFilter>>
	authUsersId?: InputMaybe<UuidFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<UserAdminFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<UserAdminFilter>>
}

export type UserAdminInsertInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type UserAdminInsertResponse = {
	__typename?: 'UserAdminInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserAdmin>
}

export type UserAdminOrderBy = {
	authUsersId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type UserAdminUpdateInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type UserAdminUpdateResponse = {
	__typename?: 'UserAdminUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserAdmin>
}

export type UserApiKey = Node & {
	__typename?: 'UserApiKey'
	authUsersId: Scalars['UUID']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	userApiKey: Scalars['UUID']['output']
	userApiKeyId: Scalars['BigInt']['output']
}

export type UserApiKeyConnection = {
	__typename?: 'UserApiKeyConnection'
	edges: Array<UserApiKeyEdge>
	pageInfo: PageInfo
}

export type UserApiKeyDeleteResponse = {
	__typename?: 'UserApiKeyDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserApiKey>
}

export type UserApiKeyEdge = {
	__typename?: 'UserApiKeyEdge'
	cursor: Scalars['String']['output']
	node: UserApiKey
}

export type UserApiKeyFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<UserApiKeyFilter>>
	authUsersId?: InputMaybe<UuidFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<UserApiKeyFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<UserApiKeyFilter>>
	userApiKey?: InputMaybe<UuidFilter>
	userApiKeyId?: InputMaybe<BigIntFilter>
}

export type UserApiKeyInsertInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	userApiKey?: InputMaybe<Scalars['UUID']['input']>
}

export type UserApiKeyInsertResponse = {
	__typename?: 'UserApiKeyInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserApiKey>
}

export type UserApiKeyOrderBy = {
	authUsersId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	userApiKey?: InputMaybe<OrderByDirection>
	userApiKeyId?: InputMaybe<OrderByDirection>
}

export type UserApiKeyUpdateInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	userApiKey?: InputMaybe<Scalars['UUID']['input']>
}

export type UserApiKeyUpdateResponse = {
	__typename?: 'UserApiKeyUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserApiKey>
}

export type UserWhitelist = Node & {
	__typename?: 'UserWhitelist'
	internalCreatedAt?: Maybe<Scalars['Datetime']['output']>
	kind: Scalars['String']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	userWhitelistId: Scalars['BigInt']['output']
	userWhitelistValue?: Maybe<Scalars['String']['output']>
}

export type UserWhitelistConnection = {
	__typename?: 'UserWhitelistConnection'
	edges: Array<UserWhitelistEdge>
	pageInfo: PageInfo
}

export type UserWhitelistDeleteResponse = {
	__typename?: 'UserWhitelistDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserWhitelist>
}

export type UserWhitelistEdge = {
	__typename?: 'UserWhitelistEdge'
	cursor: Scalars['String']['output']
	node: UserWhitelist
}

export type UserWhitelistFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<UserWhitelistFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	kind?: InputMaybe<Scalars['String']['input']>
	userWhitelistValue?: InputMaybe<Scalars['String']['input']>
}

export type UserWhitelistInsertResponse = {
	__typename?: 'UserWhitelistInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserWhitelist>
}

export type UserWhitelistOrderBy = {
	internalCreatedAt?: InputMaybe<OrderByDirection>
	kind?: InputMaybe<OrderByDirection>
	userWhitelistId?: InputMaybe<OrderByDirection>
	userWhitelistValue?: InputMaybe<OrderByDirection>
}

export type UserWhitelistUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	kind?: InputMaybe<Scalars['String']['input']>
	userWhitelistValue?: InputMaybe<Scalars['String']['input']>
}

export type UserWhitelistUpdateResponse = {
	__typename?: 'UserWhitelistUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserWhitelist>
}

export type UpdateNotesForProjRepoMutationVariables = Exact<{
	id?: InputMaybe<Scalars['BigInt']['input']>
	text?: InputMaybe<Scalars['String']['input']>
}>

export type UpdateNotesForProjRepoMutation = {
	__typename?: 'Mutation'
	updateProjRepoCollection: {
		__typename?: 'ProjRepoUpdateResponse'
		affectedCount: number
	}
}

export type AllAlgoHnCommentAndAlgoHnTagQueryVariables = Exact<{
	[key: string]: never
}>

export type AllAlgoHnCommentAndAlgoHnTagQuery = {
	__typename?: 'Query'
	algoHnCommentAndAlgoHnTagCollection?: {
		__typename?: 'AlgoHnCommentAndAlgoHnTagConnection'
		edges: Array<{
			__typename?: 'AlgoHnCommentAndAlgoHnTagEdge'
			node: {
				__typename?: 'AlgoHnCommentAndAlgoHnTag'
				algoHnTagId: any
				algoHnCommentId: any
				internalCreatedAt: any
			}
		}>
	} | null
}

export type AllAlgoHnQueryQueryVariables = Exact<{ [key: string]: never }>

export type AllAlgoHnQueryQuery = {
	__typename?: 'Query'
	algoHnQueryCollection?: {
		__typename?: 'AlgoHnQueryConnection'
		edges: Array<{
			__typename?: 'AlgoHnQueryEdge'
			node: {
				__typename?: 'AlgoHnQuery'
				algoHnQueryId: any
				query: string
				internalCreatedAt: any
			}
		}>
	} | null
}

export type AllAlgoHnStoryQueryVariables = Exact<{ [key: string]: never }>

export type AllAlgoHnStoryQuery = {
	__typename?: 'Query'
	algoHnStoryCollection?: {
		__typename?: 'AlgoHnStoryConnection'
		edges: Array<{
			__typename?: 'AlgoHnStoryEdge'
			node: {
				__typename?: 'AlgoHnStory'
				algoHnStoryId: any
				internalCreatedAt: any
				author: string
				createdAt: any
				algoHnStoryUrl?: string | null
				algoHnStoryObjectId: any
				points: any
				algoHnQueryId: any
				title: string
				updatedAt: any
			}
		}>
	} | null
}

export type AllAlgoHnTagQueryVariables = Exact<{ [key: string]: never }>

export type AllAlgoHnTagQuery = {
	__typename?: 'Query'
	algoHnTagCollection?: {
		__typename?: 'AlgoHnTagConnection'
		edges: Array<{
			__typename?: 'AlgoHnTagEdge'
			node: {
				__typename?: 'AlgoHnTag'
				algoHnTagId: any
				internalCreatedAt: any
				title: string
			}
		}>
	} | null
}

export type AllGthbForkHistQueryVariables = Exact<{ [key: string]: never }>

export type AllGthbForkHistQuery = {
	__typename?: 'Query'
	gthbForkHistCollection?: {
		__typename?: 'GthbForkHistConnection'
		edges: Array<{
			__typename?: 'GthbForkHistEdge'
			node: {
				__typename?: 'GthbForkHist'
				gthbForkHistId: any
				internalCreatedAt: any
				gthbRepoId: any
				gthbForkHistDate: any
				amount: any
			}
		}>
	} | null
}

export type AllGthbIssueHistQueryVariables = Exact<{ [key: string]: never }>

export type AllGthbIssueHistQuery = {
	__typename?: 'Query'
	gthbIssueHistCollection?: {
		__typename?: 'GthbIssueHistConnection'
		edges: Array<{
			__typename?: 'GthbIssueHistEdge'
			node: {
				__typename?: 'GthbIssueHist'
				gthbIssueHistId: any
				internalCreatedAt: any
				gthbRepoId: any
				gthbIssueHistDate: any
				amount: any
			}
		}>
	} | null
}

export type AllGthbRepoContributorQueryVariables = Exact<{
	[key: string]: never
}>

export type AllGthbRepoContributorQuery = {
	__typename?: 'Query'
	gthbRepoContrCollection?: {
		__typename?: 'GthbRepoContrConnection'
		edges: Array<{
			__typename?: 'GthbRepoContrEdge'
			node: {
				__typename?: 'GthbRepoContr'
				gthbRepoId: any
				gthbOwnerId: any
				contributions: any
				internalCreatedAt: any
			}
		}>
	} | null
}

export type AllGthbRepoTopicQueryVariables = Exact<{ [key: string]: never }>

export type AllGthbRepoTopicQuery = {
	__typename?: 'Query'
	gthbRepoTopicCollection?: {
		__typename?: 'GthbRepoTopicConnection'
		edges: Array<{
			__typename?: 'GthbRepoTopicEdge'
			node: {
				__typename?: 'GthbRepoTopic'
				gthbRepoTopicId: any
				internalCreatedAt: any
				gthbRepoTopicName: string
				stargazerCount: any
			}
		}>
	} | null
}

export type AllGthbTrendingQueryVariables = Exact<{ [key: string]: never }>

export type AllGthbTrendingQuery = {
	__typename?: 'Query'
	gthbTrendingCollection?: {
		__typename?: 'GthbTrendingConnection'
		edges: Array<{
			__typename?: 'GthbTrendingEdge'
			node: {
				__typename?: 'GthbTrending'
				gthbTrendingId: any
				gthbRepoId: any
				internalCreatedAt: any
				dateRange: any
				lang?: string | null
			}
		}>
	} | null
}

export type AllGthbUserQueryVariables = Exact<{ [key: string]: never }>

export type AllGthbUserQuery = {
	__typename?: 'Query'
	gthbUserCollection?: {
		__typename?: 'GthbUserConnection'
		edges: Array<{
			__typename?: 'GthbUserEdge'
			node: {
				__typename?: 'GthbUser'
				gthbUserId: any
				internalCreatedAt: any
				bio?: string | null
				bioHtml?: string | null
				company?: string | null
				companyHtml?: string | null
				createdAt: any
				email?: string | null
				followersTotalCount: any
				gthbUserName?: string | null
				twitterUsername?: string | null
				websiteUrl?: string | null
			}
		}>
	} | null
}

export type AllProjCatQueryVariables = Exact<{ [key: string]: never }>

export type AllProjCatQuery = {
	__typename?: 'Query'
	projCatCollection?: {
		__typename?: 'ProjCatConnection'
		edges: Array<{
			__typename?: 'ProjCatEdge'
			node: {
				__typename?: 'ProjCat'
				projCatId: any
				internalCreatedAt: any
				title: string
				authUsersId: any
				note?: string | null
				isPublic?: boolean | null
			}
		}>
	} | null
}

export type AllProjRepoQueryVariables = Exact<{ [key: string]: never }>

export type AllProjRepoQuery = {
	__typename?: 'Query'
	projRepoCollection?: {
		__typename?: 'ProjRepoConnection'
		edges: Array<{
			__typename?: 'ProjRepoEdge'
			node: {
				__typename?: 'ProjRepo'
				projRepoId: any
				internalCreatedAt: any
				gthbRepoId: any
				note?: string | null
			}
		}>
	} | null
}

export type AllProjRepoAndProjClassifierQueryVariables = Exact<{
	[key: string]: never
}>

export type AllProjRepoAndProjClassifierQuery = {
	__typename?: 'Query'
	projRepoAndProjClassifierCollection?: {
		__typename?: 'ProjRepoAndProjClassifierConnection'
		edges: Array<{
			__typename?: 'ProjRepoAndProjClassifierEdge'
			node: {
				__typename?: 'ProjRepoAndProjClassifier'
				projRepoId: any
				projClassifierId: any
				internalCreatedAt: any
			}
		}>
	} | null
}

export type AllProjRepoAndSbotLinCompanyQueryVariables = Exact<{
	[key: string]: never
}>

export type AllProjRepoAndSbotLinCompanyQuery = {
	__typename?: 'Query'
	projRepoAndSbotLinCompanyCollection?: {
		__typename?: 'ProjRepoAndSbotLinCompanyConnection'
		edges: Array<{
			__typename?: 'ProjRepoAndSbotLinCompanyEdge'
			node: {
				__typename?: 'ProjRepoAndSbotLinCompany'
				projRepoId: any
				sbotLinCompanyId: any
				internalCreatedAt: any
			}
		}>
	} | null
}

export type AllProjRepoAndSbotLinProfileQueryVariables = Exact<{
	[key: string]: never
}>

export type AllProjRepoAndSbotLinProfileQuery = {
	__typename?: 'Query'
	projRepoAndSbotLinProfileCollection?: {
		__typename?: 'ProjRepoAndSbotLinProfileConnection'
		edges: Array<{
			__typename?: 'ProjRepoAndSbotLinProfileEdge'
			node: {
				__typename?: 'ProjRepoAndSbotLinProfile'
				projRepoId: any
				sbotLinProfileId: any
				internalCreatedAt: any
			}
		}>
	} | null
}

export type DetailViewForkHistQueryVariables = Exact<{
	filter?: InputMaybe<GthbForkHistFilter>
}>

export type DetailViewForkHistQuery = {
	__typename?: 'Query'
	gthbForkHistCollection?: {
		__typename?: 'GthbForkHistConnection'
		edges: Array<{
			__typename?: 'GthbForkHistEdge'
			node: { __typename?: 'GthbForkHist'; gthbForkHistDate: any; amount: any }
		}>
	} | null
}

export type DetailViewProjRepoTopQueryVariables = Exact<{
	id?: InputMaybe<Scalars['BigInt']['input']>
	gthbStarHistFilter?: InputMaybe<GthbStarHistFilter>
	gthbIssueHistFilter?: InputMaybe<GthbIssueHistFilter>
	gthbForkHistFilter?: InputMaybe<GthbForkHistFilter>
}>

export type DetailViewProjRepoTopQuery = {
	__typename?: 'Query'
	projRepoCollection?: {
		__typename?: 'ProjRepoConnection'
		edges: Array<{
			__typename?: 'ProjRepoEdge'
			node: { __typename?: 'ProjRepo'; algoHnEli5?: string | null }
		}>
	} | null
}

export type ListBookmarkedGthbRepoQueryVariables = Exact<{
	filter?: InputMaybe<GthbRepoFilter>
}>

export type ListBookmarkedGthbRepoQuery = {
	__typename?: 'Query'
	fListBookmarkedGthbRepo?: {
		__typename?: 'GthbRepoConnection'
		edges: Array<{
			__typename?: 'GthbRepoEdge'
			node: {
				__typename?: 'GthbRepo'
				gthbRepoName: string
				gthbRepoDescription?: string | null
				stargazerCount: any
				issuesTotalCount: any
				forksPerContributor: any
				forkCount: any
				contributorCount: any
				issuesPerContributor: any
				pullRequestsTotalCount: any
				gthbOwner: {
					__typename?: 'GthbOwner'
					avatarUrl: string
					gthbOwnerLogin: string
				}
				gthbRepo: { __typename?: 'ProjRepo'; projRepoId: any }
			}
		}>
	} | null
}

export type ListTrendingGthbRepoQueryVariables = Exact<{
	filter?: InputMaybe<GthbRepoFilter>
}>

export type ListTrendingGthbRepoQuery = {
	__typename?: 'Query'
	fListTrendingGthbRepo?: {
		__typename?: 'GthbRepoConnection'
		edges: Array<{
			__typename?: 'GthbRepoEdge'
			node: {
				__typename?: 'GthbRepo'
				gthbRepoName: string
				gthbRepoDescription?: string | null
				stargazerCount: any
				issuesTotalCount: any
				forksPerContributor: any
				forkCount: any
				contributorCount: any
				issuesPerContributor: any
				pullRequestsTotalCount: any
				gthbOwner: {
					__typename?: 'GthbOwner'
					avatarUrl: string
					gthbOwnerLogin: string
				}
				gthbRepo: { __typename?: 'ProjRepo'; projRepoId: any }
			}
		}>
	} | null
}

export type ListViewGthbReposQueryVariables = Exact<{
	filter?: InputMaybe<GthbRepoFilter>
}>

export type ListViewGthbReposQuery = {
	__typename?: 'Query'
	gthbRepoCollection?: {
		__typename?: 'GthbRepoConnection'
		edges: Array<{
			__typename?: 'GthbRepoEdge'
			cursor: string
			node: {
				__typename?: 'GthbRepo'
				gthbRepoName: string
				gthbRepoDescription?: string | null
				stargazerCount: any
				issuesTotalCount: any
				forksPerContributor: any
				forkCount: any
				contributorCount: any
				issuesPerContributor: any
				pullRequestsTotalCount: any
				gthbOwner: {
					__typename?: 'GthbOwner'
					avatarUrl: string
					gthbOwnerLogin: string
				}
			}
		}>
	} | null
}

export type SidebarProjCategoriesToProjBookmarksQueryVariables = Exact<{
	[key: string]: never
}>

export type SidebarProjCategoriesToProjBookmarksQuery = {
	__typename?: 'Query'
	projCatCollection?: {
		__typename?: 'ProjCatConnection'
		edges: Array<{
			__typename?: 'ProjCatEdge'
			node: {
				__typename?: 'ProjCat'
				nodeId: string
				title: string
				projCatAndProjBookmarkCollection: {
					__typename?: 'ProjCatAndProjBookmarkConnection'
					edges: Array<{
						__typename?: 'ProjCatAndProjBookmarkEdge'
						node: {
							__typename?: 'ProjCatAndProjBookmark'
							projBookmark: {
								__typename?: 'ProjBookmark'
								projRepo: {
									__typename?: 'ProjRepo'
									gthbRepo: {
										__typename?: 'GthbRepo'
										gthbRepoName: string
										gthbOwner: {
											__typename?: 'GthbOwner'
											avatarUrl: string
											gthbOwnerLogin: string
										}
									}
								}
							}
						}
					}>
				}
			}
		}>
	} | null
}

export const UpdateNotesForProjRepoDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateNotesForProjRepo' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'BigInt' } }
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'text' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'updateProjRepoCollection' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'filter' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'projRepoId' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'eq' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'id' }
														}
													}
												]
											}
										}
									]
								}
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'set' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'note' },
											value: {
												kind: 'Variable',
												name: { kind: 'Name', value: 'text' }
											}
										}
									]
								}
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'affectedCount' }
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	UpdateNotesForProjRepoMutation,
	UpdateNotesForProjRepoMutationVariables
>
export const AllAlgoHnCommentAndAlgoHnTagDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllAlgoHnCommentAndAlgoHnTag' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: {
							kind: 'Name',
							value: 'algoHnCommentAndAlgoHnTagCollection'
						},
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'algoHnTagId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'algoHnCommentId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	AllAlgoHnCommentAndAlgoHnTagQuery,
	AllAlgoHnCommentAndAlgoHnTagQueryVariables
>
export const AllAlgoHnQueryDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllAlgoHnQuery' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'algoHnQueryCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'algoHnQueryId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'query' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<AllAlgoHnQueryQuery, AllAlgoHnQueryQueryVariables>
export const AllAlgoHnStoryDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllAlgoHnStory' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'algoHnStoryCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'algoHnStoryId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'author' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'createdAt' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'algoHnStoryUrl' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'algoHnStoryObjectId'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'points' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'algoHnQueryId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'title' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'updatedAt' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<AllAlgoHnStoryQuery, AllAlgoHnStoryQueryVariables>
export const AllAlgoHnTagDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllAlgoHnTag' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'algoHnTagCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'algoHnTagId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'title' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<AllAlgoHnTagQuery, AllAlgoHnTagQueryVariables>
export const AllGthbForkHistDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllGthbForkHist' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'gthbForkHistCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbForkHistId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepoId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbForkHistDate' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'amount' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	AllGthbForkHistQuery,
	AllGthbForkHistQueryVariables
>
export const AllGthbIssueHistDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllGthbIssueHist' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'gthbIssueHistCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbIssueHistId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepoId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbIssueHistDate' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'amount' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	AllGthbIssueHistQuery,
	AllGthbIssueHistQueryVariables
>
export const AllGthbRepoContributorDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllGthbRepoContributor' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'gthbRepoContrCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepoId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbOwnerId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'contributions' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	AllGthbRepoContributorQuery,
	AllGthbRepoContributorQueryVariables
>
export const AllGthbRepoTopicDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllGthbRepoTopic' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'gthbRepoTopicCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepoTopicId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepoTopicName' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'stargazerCount' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	AllGthbRepoTopicQuery,
	AllGthbRepoTopicQueryVariables
>
export const AllGthbTrendingDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllGthbTrending' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'gthbTrendingCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbTrendingId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepoId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'dateRange' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'lang' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	AllGthbTrendingQuery,
	AllGthbTrendingQueryVariables
>
export const AllGthbUserDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllGthbUser' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'gthbUserCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbUserId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'bio' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'bioHtml' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'company' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'companyHtml' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'createdAt' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'email' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'followersTotalCount'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbUserName' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'twitterUsername' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'websiteUrl' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<AllGthbUserQuery, AllGthbUserQueryVariables>
export const AllProjCatDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllProjCat' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'projCatCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'projCatId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'title' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'authUsersId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'note' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'isPublic' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<AllProjCatQuery, AllProjCatQueryVariables>
export const AllProjRepoDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllProjRepo' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'projRepoCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'projRepoId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepoId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'note' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<AllProjRepoQuery, AllProjRepoQueryVariables>
export const AllProjRepoAndProjClassifierDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllProjRepoAndProjClassifier' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: {
							kind: 'Name',
							value: 'projRepoAndProjClassifierCollection'
						},
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'projRepoId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'projClassifierId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	AllProjRepoAndProjClassifierQuery,
	AllProjRepoAndProjClassifierQueryVariables
>
export const AllProjRepoAndSbotLinCompanyDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllProjRepoAndSbotLinCompany' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: {
							kind: 'Name',
							value: 'projRepoAndSbotLinCompanyCollection'
						},
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'projRepoId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'sbotLinCompanyId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	AllProjRepoAndSbotLinCompanyQuery,
	AllProjRepoAndSbotLinCompanyQueryVariables
>
export const AllProjRepoAndSbotLinProfileDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'AllProjRepoAndSbotLinProfile' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: {
							kind: 'Name',
							value: 'projRepoAndSbotLinProfileCollection'
						},
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'projRepoId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'sbotLinProfileId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'internalCreatedAt' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	AllProjRepoAndSbotLinProfileQuery,
	AllProjRepoAndSbotLinProfileQueryVariables
>
export const DetailViewForkHistDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'DetailViewForkHist' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'filter' }
					},
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'GthbForkHistFilter' }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'gthbForkHistCollection' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'filter' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'filter' }
								}
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbForkHistDate' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'amount' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	DetailViewForkHistQuery,
	DetailViewForkHistQueryVariables
>
export const DetailViewProjRepoTopDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'DetailViewProjRepoTop' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'BigInt' } }
				},
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'gthbStarHistFilter' }
					},
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'GthbStarHistFilter' }
					}
				},
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'gthbIssueHistFilter' }
					},
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'GthbIssueHistFilter' }
					}
				},
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'gthbForkHistFilter' }
					},
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'GthbForkHistFilter' }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'projRepoCollection' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'filter' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'gthbRepoId' },
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: { kind: 'Name', value: 'eq' },
														value: {
															kind: 'Variable',
															name: { kind: 'Name', value: 'id' }
														}
													}
												]
											}
										}
									]
								}
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'algoHnEli5' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	DetailViewProjRepoTopQuery,
	DetailViewProjRepoTopQueryVariables
>
export const ListBookmarkedGthbRepoDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'ListBookmarkedGthbRepo' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'filter' }
					},
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'GthbRepoFilter' }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'fListBookmarkedGthbRepo' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'filter' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'filter' }
								}
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepoName' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'gthbRepoDescription'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'stargazerCount' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'issuesTotalCount' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'forksPerContributor'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'forkCount' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'contributorCount' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'issuesTotalCount' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'issuesPerContributor'
															}
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'pullRequestsTotalCount'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbOwner' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'avatarUrl' }
																	},
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'gthbOwnerLogin'
																		}
																	}
																]
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepo' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'projRepoId' }
																	}
																]
															}
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	ListBookmarkedGthbRepoQuery,
	ListBookmarkedGthbRepoQueryVariables
>
export const ListTrendingGthbRepoDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'ListTrendingGthbRepo' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'filter' }
					},
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'GthbRepoFilter' }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'fListTrendingGthbRepo' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'filter' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'filter' }
								}
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepoName' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'gthbRepoDescription'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'stargazerCount' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'issuesTotalCount' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'forksPerContributor'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'forkCount' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'contributorCount' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'issuesTotalCount' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'issuesPerContributor'
															}
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'pullRequestsTotalCount'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbOwner' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'avatarUrl' }
																	},
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'gthbOwnerLogin'
																		}
																	}
																]
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepo' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'projRepoId' }
																	}
																]
															}
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	ListTrendingGthbRepoQuery,
	ListTrendingGthbRepoQueryVariables
>
export const ListViewGthbReposDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'ListViewGthbRepos' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'filter' }
					},
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'GthbRepoFilter' }
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'gthbRepoCollection' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'filter' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'filter' }
								}
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbRepoName' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'gthbRepoDescription'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'stargazerCount' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'issuesTotalCount' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'forksPerContributor'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'forkCount' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'contributorCount' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'issuesTotalCount' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'issuesPerContributor'
															}
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'pullRequestsTotalCount'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'gthbOwner' },
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'avatarUrl' }
																	},
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'gthbOwnerLogin'
																		}
																	}
																]
															}
														}
													]
												}
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'cursor' } }
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	ListViewGthbReposQuery,
	ListViewGthbReposQueryVariables
>
export const SidebarProjCategoriesToProjBookmarksDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'SidebarProjCategoriesToProjBookmarks' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'projCatCollection' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'orderBy' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: { kind: 'Name', value: 'title' },
											value: { kind: 'EnumValue', value: 'DescNullsLast' }
										}
									]
								}
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'nodeId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'title' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'projCatAndProjBookmarkCollection'
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: { kind: 'Name', value: 'edges' },
																		selectionSet: {
																			kind: 'SelectionSet',
																			selections: [
																				{
																					kind: 'Field',
																					name: { kind: 'Name', value: 'node' },
																					selectionSet: {
																						kind: 'SelectionSet',
																						selections: [
																							{
																								kind: 'Field',
																								name: {
																									kind: 'Name',
																									value: 'projBookmark'
																								},
																								selectionSet: {
																									kind: 'SelectionSet',
																									selections: [
																										{
																											kind: 'Field',
																											name: {
																												kind: 'Name',
																												value: 'projRepo'
																											},
																											selectionSet: {
																												kind: 'SelectionSet',
																												selections: [
																													{
																														kind: 'Field',
																														name: {
																															kind: 'Name',
																															value: 'gthbRepo'
																														},
																														selectionSet: {
																															kind: 'SelectionSet',
																															selections: [
																																{
																																	kind: 'Field',
																																	name: {
																																		kind: 'Name',
																																		value:
																																			'gthbRepoName'
																																	}
																																},
																																{
																																	kind: 'Field',
																																	name: {
																																		kind: 'Name',
																																		value:
																																			'gthbOwner'
																																	},
																																	selectionSet:
																																		{
																																			kind: 'SelectionSet',
																																			selections:
																																				[
																																					{
																																						kind: 'Field',
																																						name: {
																																							kind: 'Name',
																																							value:
																																								'avatarUrl'
																																						}
																																					},
																																					{
																																						kind: 'Field',
																																						name: {
																																							kind: 'Name',
																																							value:
																																								'gthbOwnerLogin'
																																						}
																																					}
																																				]
																																		}
																																}
																															]
																														}
																													}
																												]
																											}
																										}
																									]
																								}
																							}
																						]
																					}
																				}
																			]
																		}
																	}
																]
															}
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	SidebarProjCategoriesToProjBookmarksQuery,
	SidebarProjCategoriesToProjBookmarksQueryVariables
>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
	/** A high precision floating point value represented as a string */
	BigFloat: { input: any; output: any }
	/** An arbitrary size integer represented as a string */
	BigInt: { input: any; output: any }
	/** An opaque string using for tracking a position in results during pagination */
	Cursor: { input: any; output: any }
	/** A date wihout time information */
	Date: { input: any; output: any }
	/** A date and time */
	Datetime: { input: any; output: any }
	/** A Javascript Object Notation value serialized as a string */
	JSON: { input: any; output: any }
	/** Any type not handled by the type system */
	Opaque: { input: any; output: any }
	/** A time without date information */
	Time: { input: any; output: any }
	/** A universally unique identifier */
	UUID: { input: any; output: any }
}

export type AlgoHnComment = Node & {
	__typename?: 'AlgoHnComment'
	algoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagConnection
	algoHnCommentId: Scalars['BigInt']['output']
	algoHnCommentObjectId: Scalars['BigInt']['output']
	algoHnQuery: AlgoHnQuery
	algoHnQueryId: Scalars['BigInt']['output']
	author: Scalars['String']['output']
	commentText: Scalars['String']['output']
	createdAt: Scalars['Datetime']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	storyId: Scalars['BigInt']['output']
	storyTitle: Scalars['String']['output']
	storyUrl?: Maybe<Scalars['String']['output']>
	updatedAt: Scalars['Datetime']['output']
}

export type AlgoHnCommentAlgoHnCommentAndAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>
}

export type AlgoHnCommentAndAlgoHnTag = Node & {
	__typename?: 'AlgoHnCommentAndAlgoHnTag'
	algoHnComment: AlgoHnComment
	algoHnCommentId: Scalars['BigInt']['output']
	algoHnTag: AlgoHnTag
	algoHnTagId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type AlgoHnCommentAndAlgoHnTagConnection = {
	__typename?: 'AlgoHnCommentAndAlgoHnTagConnection'
	edges: Array<AlgoHnCommentAndAlgoHnTagEdge>
	pageInfo: PageInfo
}

export type AlgoHnCommentAndAlgoHnTagDeleteResponse = {
	__typename?: 'AlgoHnCommentAndAlgoHnTagDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnCommentAndAlgoHnTag>
}

export type AlgoHnCommentAndAlgoHnTagEdge = {
	__typename?: 'AlgoHnCommentAndAlgoHnTagEdge'
	cursor: Scalars['String']['output']
	node: AlgoHnCommentAndAlgoHnTag
}

export type AlgoHnCommentAndAlgoHnTagFilter = {
	algoHnCommentId?: InputMaybe<BigIntFilter>
	algoHnTagId?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagFilter>>
}

export type AlgoHnCommentAndAlgoHnTagInsertInput = {
	algoHnCommentId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnCommentAndAlgoHnTagInsertResponse = {
	__typename?: 'AlgoHnCommentAndAlgoHnTagInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnCommentAndAlgoHnTag>
}

export type AlgoHnCommentAndAlgoHnTagOrderBy = {
	algoHnCommentId?: InputMaybe<OrderByDirection>
	algoHnTagId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnCommentAndAlgoHnTagUpdateInput = {
	algoHnCommentId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnCommentAndAlgoHnTagUpdateResponse = {
	__typename?: 'AlgoHnCommentAndAlgoHnTagUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnComment>
}

export type AlgoHnCommentEdge = {
	__typename?: 'AlgoHnCommentEdge'
	cursor: Scalars['String']['output']
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
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	algoHnCommentObjectId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	author?: InputMaybe<Scalars['String']['input']>
	commentText?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	storyId?: InputMaybe<Scalars['BigInt']['input']>
	storyTitle?: InputMaybe<Scalars['String']['input']>
	storyUrl?: InputMaybe<Scalars['String']['input']>
	updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnCommentInsertResponse = {
	__typename?: 'AlgoHnCommentInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	internalCreatedAt?: InputMaybe<OrderByDirection>
	storyId?: InputMaybe<OrderByDirection>
	storyTitle?: InputMaybe<OrderByDirection>
	storyUrl?: InputMaybe<OrderByDirection>
	updatedAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnCommentUpdateInput = {
	algoHnCommentObjectId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	author?: InputMaybe<Scalars['String']['input']>
	commentText?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	storyId?: InputMaybe<Scalars['BigInt']['input']>
	storyTitle?: InputMaybe<Scalars['String']['input']>
	storyUrl?: InputMaybe<Scalars['String']['input']>
	updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnCommentUpdateResponse = {
	__typename?: 'AlgoHnCommentUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnComment>
}

export type AlgoHnQuery = Node & {
	__typename?: 'AlgoHnQuery'
	algoHnCommentCollection: AlgoHnCommentConnection
	algoHnQueryId: Scalars['BigInt']['output']
	algoHnStoryCollection: AlgoHnStoryConnection
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryConnection
	query: Scalars['String']['output']
}

export type AlgoHnQueryAlgoHnCommentCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnCommentFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnCommentOrderBy>>
}

export type AlgoHnQueryAlgoHnStoryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnStoryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnStoryOrderBy>>
}

export type AlgoHnQueryProjRepoAndAlgoHnQueryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnQuery>
}

export type AlgoHnQueryEdge = {
	__typename?: 'AlgoHnQueryEdge'
	cursor: Scalars['String']['output']
	node: AlgoHnQuery
}

export type AlgoHnQueryFilter = {
	algoHnQueryId?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<AlgoHnQueryFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<AlgoHnQueryFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<AlgoHnQueryFilter>>
	query?: InputMaybe<StringFilter>
}

export type AlgoHnQueryInsertInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	query?: InputMaybe<Scalars['String']['input']>
}

export type AlgoHnQueryInsertResponse = {
	__typename?: 'AlgoHnQueryInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnQuery>
}

export type AlgoHnQueryOrderBy = {
	algoHnQueryId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	query?: InputMaybe<OrderByDirection>
}

export type AlgoHnQueryUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	query?: InputMaybe<Scalars['String']['input']>
}

export type AlgoHnQueryUpdateResponse = {
	__typename?: 'AlgoHnQueryUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnQuery>
}

export type AlgoHnStory = Node & {
	__typename?: 'AlgoHnStory'
	algoHnQuery: AlgoHnQuery
	algoHnQueryId: Scalars['BigInt']['output']
	algoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagConnection
	algoHnStoryId: Scalars['BigInt']['output']
	algoHnStoryObjectId: Scalars['BigInt']['output']
	algoHnStoryUrl?: Maybe<Scalars['String']['output']>
	author: Scalars['String']['output']
	createdAt: Scalars['Datetime']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	points: Scalars['BigInt']['output']
	title: Scalars['String']['output']
	updatedAt: Scalars['Datetime']['output']
}

export type AlgoHnStoryAlgoHnStoryAndAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagOrderBy>>
}

export type AlgoHnStoryAndAlgoHnTag = Node & {
	__typename?: 'AlgoHnStoryAndAlgoHnTag'
	algoHnStory: AlgoHnStory
	algoHnStoryId: Scalars['BigInt']['output']
	algoHnTag: AlgoHnTag
	algoHnTagId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type AlgoHnStoryAndAlgoHnTagConnection = {
	__typename?: 'AlgoHnStoryAndAlgoHnTagConnection'
	edges: Array<AlgoHnStoryAndAlgoHnTagEdge>
	pageInfo: PageInfo
}

export type AlgoHnStoryAndAlgoHnTagDeleteResponse = {
	__typename?: 'AlgoHnStoryAndAlgoHnTagDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnStoryAndAlgoHnTag>
}

export type AlgoHnStoryAndAlgoHnTagEdge = {
	__typename?: 'AlgoHnStoryAndAlgoHnTagEdge'
	cursor: Scalars['String']['output']
	node: AlgoHnStoryAndAlgoHnTag
}

export type AlgoHnStoryAndAlgoHnTagFilter = {
	algoHnStoryId?: InputMaybe<BigIntFilter>
	algoHnTagId?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagFilter>>
}

export type AlgoHnStoryAndAlgoHnTagInsertInput = {
	algoHnStoryId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnStoryAndAlgoHnTagInsertResponse = {
	__typename?: 'AlgoHnStoryAndAlgoHnTagInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnStoryAndAlgoHnTag>
}

export type AlgoHnStoryAndAlgoHnTagOrderBy = {
	algoHnStoryId?: InputMaybe<OrderByDirection>
	algoHnTagId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnStoryAndAlgoHnTagUpdateInput = {
	algoHnStoryId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnTagId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnStoryAndAlgoHnTagUpdateResponse = {
	__typename?: 'AlgoHnStoryAndAlgoHnTagUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnStory>
}

export type AlgoHnStoryEdge = {
	__typename?: 'AlgoHnStoryEdge'
	cursor: Scalars['String']['output']
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
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnStoryObjectId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnStoryUrl?: InputMaybe<Scalars['String']['input']>
	author?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	points?: InputMaybe<Scalars['BigInt']['input']>
	title?: InputMaybe<Scalars['String']['input']>
	updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnStoryInsertResponse = {
	__typename?: 'AlgoHnStoryInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	internalCreatedAt?: InputMaybe<OrderByDirection>
	points?: InputMaybe<OrderByDirection>
	title?: InputMaybe<OrderByDirection>
	updatedAt?: InputMaybe<OrderByDirection>
}

export type AlgoHnStoryUpdateInput = {
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnStoryObjectId?: InputMaybe<Scalars['BigInt']['input']>
	algoHnStoryUrl?: InputMaybe<Scalars['String']['input']>
	author?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	points?: InputMaybe<Scalars['BigInt']['input']>
	title?: InputMaybe<Scalars['String']['input']>
	updatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type AlgoHnStoryUpdateResponse = {
	__typename?: 'AlgoHnStoryUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnStory>
}

export type AlgoHnTag = Node & {
	__typename?: 'AlgoHnTag'
	algoHnCommentAndAlgoHnTagCollection: AlgoHnCommentAndAlgoHnTagConnection
	algoHnStoryAndAlgoHnTagCollection: AlgoHnStoryAndAlgoHnTagConnection
	algoHnTagId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	title: Scalars['String']['output']
}

export type AlgoHnTagAlgoHnCommentAndAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>
}

export type AlgoHnTagAlgoHnStoryAndAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnTag>
}

export type AlgoHnTagEdge = {
	__typename?: 'AlgoHnTagEdge'
	cursor: Scalars['String']['output']
	node: AlgoHnTag
}

export type AlgoHnTagFilter = {
	algoHnTagId?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<AlgoHnTagFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<AlgoHnTagFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<AlgoHnTagFilter>>
	title?: InputMaybe<StringFilter>
}

export type AlgoHnTagInsertInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	title?: InputMaybe<Scalars['String']['input']>
}

export type AlgoHnTagInsertResponse = {
	__typename?: 'AlgoHnTagInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnTag>
}

export type AlgoHnTagOrderBy = {
	algoHnTagId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	title?: InputMaybe<OrderByDirection>
}

export type AlgoHnTagUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	title?: InputMaybe<Scalars['String']['input']>
}

export type AlgoHnTagUpdateResponse = {
	__typename?: 'AlgoHnTagUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<AlgoHnTag>
}

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
	eq?: InputMaybe<Scalars['BigFloat']['input']>
	gt?: InputMaybe<Scalars['BigFloat']['input']>
	gte?: InputMaybe<Scalars['BigFloat']['input']>
	in?: InputMaybe<Array<Scalars['BigFloat']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['BigFloat']['input']>
	lte?: InputMaybe<Scalars['BigFloat']['input']>
	neq?: InputMaybe<Scalars['BigFloat']['input']>
}

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
	eq?: InputMaybe<Scalars['BigInt']['input']>
	gt?: InputMaybe<Scalars['BigInt']['input']>
	gte?: InputMaybe<Scalars['BigInt']['input']>
	in?: InputMaybe<Array<Scalars['BigInt']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['BigInt']['input']>
	lte?: InputMaybe<Scalars['BigInt']['input']>
	neq?: InputMaybe<Scalars['BigInt']['input']>
}

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
	eq?: InputMaybe<Scalars['Boolean']['input']>
	is?: InputMaybe<FilterIs>
}

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
	eq?: InputMaybe<Scalars['Date']['input']>
	gt?: InputMaybe<Scalars['Date']['input']>
	gte?: InputMaybe<Scalars['Date']['input']>
	in?: InputMaybe<Array<Scalars['Date']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['Date']['input']>
	lte?: InputMaybe<Scalars['Date']['input']>
	neq?: InputMaybe<Scalars['Date']['input']>
}

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
	eq?: InputMaybe<Scalars['Datetime']['input']>
	gt?: InputMaybe<Scalars['Datetime']['input']>
	gte?: InputMaybe<Scalars['Datetime']['input']>
	in?: InputMaybe<Array<Scalars['Datetime']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['Datetime']['input']>
	lte?: InputMaybe<Scalars['Datetime']['input']>
	neq?: InputMaybe<Scalars['Datetime']['input']>
}

export enum FilterIs {
	NotNull = 'NOT_NULL',
	Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
	eq?: InputMaybe<Scalars['Float']['input']>
	gt?: InputMaybe<Scalars['Float']['input']>
	gte?: InputMaybe<Scalars['Float']['input']>
	in?: InputMaybe<Array<Scalars['Float']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['Float']['input']>
	lte?: InputMaybe<Scalars['Float']['input']>
	neq?: InputMaybe<Scalars['Float']['input']>
}

export type GthbForkHist = Node & {
	__typename?: 'GthbForkHist'
	amount: Scalars['BigInt']['output']
	gthbForkHistDate: Scalars['Datetime']['output']
	gthbForkHistId: Scalars['BigInt']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbForkHistConnection = {
	__typename?: 'GthbForkHistConnection'
	edges: Array<GthbForkHistEdge>
	pageInfo: PageInfo
}

export type GthbForkHistDeleteResponse = {
	__typename?: 'GthbForkHistDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbForkHist>
}

export type GthbForkHistEdge = {
	__typename?: 'GthbForkHistEdge'
	cursor: Scalars['String']['output']
	node: GthbForkHist
}

export type GthbForkHistFilter = {
	amount?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbForkHistFilter>>
	gthbForkHistDate?: InputMaybe<DatetimeFilter>
	gthbForkHistId?: InputMaybe<BigIntFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbForkHistFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbForkHistFilter>>
}

export type GthbForkHistInsertInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbForkHistDate?: InputMaybe<Scalars['Datetime']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbForkHistInsertResponse = {
	__typename?: 'GthbForkHistInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbForkHist>
}

export type GthbForkHistOrderBy = {
	amount?: InputMaybe<OrderByDirection>
	gthbForkHistDate?: InputMaybe<OrderByDirection>
	gthbForkHistId?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbForkHistUpdateInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbForkHistDate?: InputMaybe<Scalars['Datetime']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbForkHistUpdateResponse = {
	__typename?: 'GthbForkHistUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbForkHist>
}

export type GthbIssueHist = Node & {
	__typename?: 'GthbIssueHist'
	amount: Scalars['BigInt']['output']
	gthbIssueHistDate: Scalars['Datetime']['output']
	gthbIssueHistId: Scalars['BigInt']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbIssueHistConnection = {
	__typename?: 'GthbIssueHistConnection'
	edges: Array<GthbIssueHistEdge>
	pageInfo: PageInfo
}

export type GthbIssueHistDeleteResponse = {
	__typename?: 'GthbIssueHistDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbIssueHist>
}

export type GthbIssueHistEdge = {
	__typename?: 'GthbIssueHistEdge'
	cursor: Scalars['String']['output']
	node: GthbIssueHist
}

export type GthbIssueHistFilter = {
	amount?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbIssueHistFilter>>
	gthbIssueHistDate?: InputMaybe<DatetimeFilter>
	gthbIssueHistId?: InputMaybe<BigIntFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbIssueHistFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbIssueHistFilter>>
}

export type GthbIssueHistInsertInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbIssueHistDate?: InputMaybe<Scalars['Datetime']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbIssueHistInsertResponse = {
	__typename?: 'GthbIssueHistInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbIssueHist>
}

export type GthbIssueHistOrderBy = {
	amount?: InputMaybe<OrderByDirection>
	gthbIssueHistDate?: InputMaybe<OrderByDirection>
	gthbIssueHistId?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbIssueHistUpdateInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbIssueHistDate?: InputMaybe<Scalars['Datetime']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbIssueHistUpdateResponse = {
	__typename?: 'GthbIssueHistUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbIssueHist>
}

export type GthbLang = Node & {
	__typename?: 'GthbLang'
	color: Scalars['String']['output']
	gthbLangId: Scalars['BigInt']['output']
	gthbLangName: Scalars['String']['output']
	gthbRepoAndGthbLangCollection: GthbRepoAndGthbLangConnection
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbLangGthbRepoAndGthbLangCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbLangFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbLang>
}

export type GthbLangEdge = {
	__typename?: 'GthbLangEdge'
	cursor: Scalars['String']['output']
	node: GthbLang
}

export type GthbLangFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbLangFilter>>
	color?: InputMaybe<StringFilter>
	gthbLangId?: InputMaybe<BigIntFilter>
	gthbLangName?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbLangFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbLangFilter>>
}

export type GthbLangInsertInput = {
	color?: InputMaybe<Scalars['String']['input']>
	gthbLangName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbLangInsertResponse = {
	__typename?: 'GthbLangInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbLang>
}

export type GthbLangOrderBy = {
	color?: InputMaybe<OrderByDirection>
	gthbLangId?: InputMaybe<OrderByDirection>
	gthbLangName?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbLangUpdateInput = {
	color?: InputMaybe<Scalars['String']['input']>
	gthbLangName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbLangUpdateResponse = {
	__typename?: 'GthbLangUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbLang>
}

export type GthbOrg = Node & {
	__typename?: 'GthbOrg'
	createdAt: Scalars['Datetime']['output']
	descriptionHtml?: Maybe<Scalars['String']['output']>
	email?: Maybe<Scalars['String']['output']>
	gthbOrg: GthbOwner
	gthbOrgDescription?: Maybe<Scalars['String']['output']>
	gthbOrgId: Scalars['BigInt']['output']
	gthbOrgName?: Maybe<Scalars['String']['output']>
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	twitterUsername?: Maybe<Scalars['String']['output']>
	websiteUrl?: Maybe<Scalars['String']['output']>
}

export type GthbOrgConnection = {
	__typename?: 'GthbOrgConnection'
	edges: Array<GthbOrgEdge>
	pageInfo: PageInfo
}

export type GthbOrgDeleteResponse = {
	__typename?: 'GthbOrgDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbOrg>
}

export type GthbOrgEdge = {
	__typename?: 'GthbOrgEdge'
	cursor: Scalars['String']['output']
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
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbOrgFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbOrgFilter>>
	twitterUsername?: InputMaybe<StringFilter>
	websiteUrl?: InputMaybe<StringFilter>
}

export type GthbOrgInsertInput = {
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	descriptionHtml?: InputMaybe<Scalars['String']['input']>
	email?: InputMaybe<Scalars['String']['input']>
	gthbOrgDescription?: InputMaybe<Scalars['String']['input']>
	gthbOrgId?: InputMaybe<Scalars['BigInt']['input']>
	gthbOrgName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	twitterUsername?: InputMaybe<Scalars['String']['input']>
	websiteUrl?: InputMaybe<Scalars['String']['input']>
}

export type GthbOrgInsertResponse = {
	__typename?: 'GthbOrgInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	internalCreatedAt?: InputMaybe<OrderByDirection>
	twitterUsername?: InputMaybe<OrderByDirection>
	websiteUrl?: InputMaybe<OrderByDirection>
}

export type GthbOrgUpdateInput = {
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	descriptionHtml?: InputMaybe<Scalars['String']['input']>
	email?: InputMaybe<Scalars['String']['input']>
	gthbOrgDescription?: InputMaybe<Scalars['String']['input']>
	gthbOrgId?: InputMaybe<Scalars['BigInt']['input']>
	gthbOrgName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	twitterUsername?: InputMaybe<Scalars['String']['input']>
	websiteUrl?: InputMaybe<Scalars['String']['input']>
}

export type GthbOrgUpdateResponse = {
	__typename?: 'GthbOrgUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbOrg>
}

export type GthbOwner = Node & {
	__typename?: 'GthbOwner'
	avatarUrl: Scalars['String']['output']
	gthbOwner?: Maybe<GthbOrg>
	gthbOwnerId: Scalars['BigInt']['output']
	gthbOwnerLogin: Scalars['String']['output']
	gthbOwnerType: Scalars['Opaque']['output']
	gthbOwnerUrl: Scalars['String']['output']
	gthbRepoCollection: GthbRepoConnection
	gthbRepoContrCollection: GthbRepoContrConnection
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	repositoriesTotalCount: Scalars['BigInt']['output']
}

export type GthbOwnerGthbRepoCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoOrderBy>>
}

export type GthbOwnerGthbRepoContrCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoContrFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbOwner>
}

export type GthbOwnerEdge = {
	__typename?: 'GthbOwnerEdge'
	cursor: Scalars['String']['output']
	node: GthbOwner
}

export type GthbOwnerFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbOwnerFilter>>
	avatarUrl?: InputMaybe<StringFilter>
	gthbOwnerId?: InputMaybe<BigIntFilter>
	gthbOwnerLogin?: InputMaybe<StringFilter>
	gthbOwnerType?: InputMaybe<OpaqueFilter>
	gthbOwnerUrl?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbOwnerFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbOwnerFilter>>
	repositoriesTotalCount?: InputMaybe<BigIntFilter>
}

export type GthbOwnerInsertInput = {
	avatarUrl?: InputMaybe<Scalars['String']['input']>
	gthbOwnerLogin?: InputMaybe<Scalars['String']['input']>
	gthbOwnerType?: InputMaybe<Scalars['Opaque']['input']>
	gthbOwnerUrl?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	repositoriesTotalCount?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbOwnerInsertResponse = {
	__typename?: 'GthbOwnerInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbOwner>
}

export type GthbOwnerOrderBy = {
	avatarUrl?: InputMaybe<OrderByDirection>
	gthbOwnerId?: InputMaybe<OrderByDirection>
	gthbOwnerLogin?: InputMaybe<OrderByDirection>
	gthbOwnerType?: InputMaybe<OrderByDirection>
	gthbOwnerUrl?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	repositoriesTotalCount?: InputMaybe<OrderByDirection>
}

export type GthbOwnerUpdateInput = {
	avatarUrl?: InputMaybe<Scalars['String']['input']>
	gthbOwnerLogin?: InputMaybe<Scalars['String']['input']>
	gthbOwnerType?: InputMaybe<Scalars['Opaque']['input']>
	gthbOwnerUrl?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	repositoriesTotalCount?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbOwnerUpdateResponse = {
	__typename?: 'GthbOwnerUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbOwner>
}

export type GthbRepo = Node & {
	__typename?: 'GthbRepo'
	contributorCount: Scalars['BigInt']['output']
	createdAt: Scalars['Datetime']['output']
	forkCount: Scalars['BigInt']['output']
	forksPerContributor: Scalars['BigInt']['output']
	gthbForkHistCollection: GthbForkHistConnection
	gthbIssueHistCollection: GthbIssueHistConnection
	gthbOwner: GthbOwner
	gthbOwnerId: Scalars['BigInt']['output']
	gthbRepo: ProjRepo
	gthbRepoAndGthbLangCollection: GthbRepoAndGthbLangConnection
	gthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicConnection
	gthbRepoContrCollection: GthbRepoContrConnection
	gthbRepoDescription?: Maybe<Scalars['String']['output']>
	gthbRepoId: Scalars['BigInt']['output']
	gthbRepoName: Scalars['String']['output']
	gthbRepoUrl: Scalars['String']['output']
	gthbStarHistCollection: GthbStarHistConnection
	gthbTrendingCollection: GthbTrendingConnection
	homepageUrl?: Maybe<Scalars['String']['output']>
	internalCreatedAt: Scalars['Datetime']['output']
	isInOrganization: Scalars['Boolean']['output']
	issuesPerContributor: Scalars['BigInt']['output']
	issuesTotalCount: Scalars['BigInt']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	pullRequestsPerContributor: Scalars['BigInt']['output']
	pullRequestsTotalCount: Scalars['BigInt']['output']
	stargazerCount: Scalars['BigInt']['output']
	stargazersPerContributor: Scalars['BigInt']['output']
}

export type GthbRepoGthbForkHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbForkHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbForkHistOrderBy>>
}

export type GthbRepoGthbIssueHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbIssueHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbIssueHistOrderBy>>
}

export type GthbRepoGthbRepoAndGthbLangCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbLangFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoAndGthbLangOrderBy>>
}

export type GthbRepoGthbRepoAndGthbRepoTopicCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoAndGthbRepoTopicOrderBy>>
}

export type GthbRepoGthbRepoContrCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoContrFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoContrOrderBy>>
}

export type GthbRepoGthbStarHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbStarHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbStarHistOrderBy>>
}

export type GthbRepoGthbTrendingCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbTrendingFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbTrendingOrderBy>>
}

export type GthbRepoAndGthbLang = Node & {
	__typename?: 'GthbRepoAndGthbLang'
	gthbLang: GthbLang
	gthbLangId: Scalars['BigInt']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbRepoAndGthbLangConnection = {
	__typename?: 'GthbRepoAndGthbLangConnection'
	edges: Array<GthbRepoAndGthbLangEdge>
	pageInfo: PageInfo
}

export type GthbRepoAndGthbLangDeleteResponse = {
	__typename?: 'GthbRepoAndGthbLangDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoAndGthbLang>
}

export type GthbRepoAndGthbLangEdge = {
	__typename?: 'GthbRepoAndGthbLangEdge'
	cursor: Scalars['String']['output']
	node: GthbRepoAndGthbLang
}

export type GthbRepoAndGthbLangFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbRepoAndGthbLangFilter>>
	gthbLangId?: InputMaybe<BigIntFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbRepoAndGthbLangFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbRepoAndGthbLangFilter>>
}

export type GthbRepoAndGthbLangInsertInput = {
	gthbLangId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoAndGthbLangInsertResponse = {
	__typename?: 'GthbRepoAndGthbLangInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoAndGthbLang>
}

export type GthbRepoAndGthbLangOrderBy = {
	gthbLangId?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbRepoAndGthbLangUpdateInput = {
	gthbLangId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoAndGthbLangUpdateResponse = {
	__typename?: 'GthbRepoAndGthbLangUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoAndGthbLang>
}

export type GthbRepoAndGthbRepoTopic = Node & {
	__typename?: 'GthbRepoAndGthbRepoTopic'
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	gthbRepoTopic: GthbRepoTopic
	gthbRepoTopicId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbRepoAndGthbRepoTopicConnection = {
	__typename?: 'GthbRepoAndGthbRepoTopicConnection'
	edges: Array<GthbRepoAndGthbRepoTopicEdge>
	pageInfo: PageInfo
}

export type GthbRepoAndGthbRepoTopicDeleteResponse = {
	__typename?: 'GthbRepoAndGthbRepoTopicDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoAndGthbRepoTopic>
}

export type GthbRepoAndGthbRepoTopicEdge = {
	__typename?: 'GthbRepoAndGthbRepoTopicEdge'
	cursor: Scalars['String']['output']
	node: GthbRepoAndGthbRepoTopic
}

export type GthbRepoAndGthbRepoTopicFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbRepoAndGthbRepoTopicFilter>>
	gthbRepoId?: InputMaybe<BigIntFilter>
	gthbRepoTopicId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbRepoAndGthbRepoTopicFilter>>
}

export type GthbRepoAndGthbRepoTopicInsertInput = {
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoTopicId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoAndGthbRepoTopicInsertResponse = {
	__typename?: 'GthbRepoAndGthbRepoTopicInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoAndGthbRepoTopic>
}

export type GthbRepoAndGthbRepoTopicOrderBy = {
	gthbRepoId?: InputMaybe<OrderByDirection>
	gthbRepoTopicId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbRepoAndGthbRepoTopicUpdateInput = {
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoTopicId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoAndGthbRepoTopicUpdateResponse = {
	__typename?: 'GthbRepoAndGthbRepoTopicUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	contributions: Scalars['BigInt']['output']
	gthbOwner: GthbOwner
	gthbOwnerId: Scalars['BigInt']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbRepoContrConnection = {
	__typename?: 'GthbRepoContrConnection'
	edges: Array<GthbRepoContrEdge>
	pageInfo: PageInfo
}

export type GthbRepoContrDeleteResponse = {
	__typename?: 'GthbRepoContrDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoContr>
}

export type GthbRepoContrEdge = {
	__typename?: 'GthbRepoContrEdge'
	cursor: Scalars['String']['output']
	node: GthbRepoContr
}

export type GthbRepoContrFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbRepoContrFilter>>
	contributions?: InputMaybe<BigIntFilter>
	gthbOwnerId?: InputMaybe<BigIntFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbRepoContrFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbRepoContrFilter>>
}

export type GthbRepoContrInsertInput = {
	contributions?: InputMaybe<Scalars['BigInt']['input']>
	gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoContrInsertResponse = {
	__typename?: 'GthbRepoContrInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoContr>
}

export type GthbRepoContrOrderBy = {
	contributions?: InputMaybe<OrderByDirection>
	gthbOwnerId?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbRepoContrUpdateInput = {
	contributions?: InputMaybe<Scalars['BigInt']['input']>
	gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbRepoContrUpdateResponse = {
	__typename?: 'GthbRepoContrUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoContr>
}

export type GthbRepoDeleteResponse = {
	__typename?: 'GthbRepoDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepo>
}

export type GthbRepoEdge = {
	__typename?: 'GthbRepoEdge'
	cursor: Scalars['String']['output']
	node: GthbRepo
}

export type GthbRepoFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbRepoFilter>>
	contributorCount?: InputMaybe<BigIntFilter>
	createdAt?: InputMaybe<DatetimeFilter>
	forkCount?: InputMaybe<BigIntFilter>
	forksPerContributor?: InputMaybe<BigIntFilter>
	gthbOwnerId?: InputMaybe<BigIntFilter>
	gthbRepoDescription?: InputMaybe<StringFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	gthbRepoName?: InputMaybe<StringFilter>
	gthbRepoUrl?: InputMaybe<StringFilter>
	homepageUrl?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	isInOrganization?: InputMaybe<BooleanFilter>
	issuesPerContributor?: InputMaybe<BigIntFilter>
	issuesTotalCount?: InputMaybe<BigIntFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbRepoFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbRepoFilter>>
	pullRequestsPerContributor?: InputMaybe<BigIntFilter>
	pullRequestsTotalCount?: InputMaybe<BigIntFilter>
	stargazerCount?: InputMaybe<BigIntFilter>
	stargazersPerContributor?: InputMaybe<BigIntFilter>
}

export type GthbRepoInsertInput = {
	contributorCount?: InputMaybe<Scalars['BigInt']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	forkCount?: InputMaybe<Scalars['BigInt']['input']>
	forksPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoDescription?: InputMaybe<Scalars['String']['input']>
	gthbRepoName?: InputMaybe<Scalars['String']['input']>
	gthbRepoUrl?: InputMaybe<Scalars['String']['input']>
	homepageUrl?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isInOrganization?: InputMaybe<Scalars['Boolean']['input']>
	issuesPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	issuesTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	pullRequestsPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	pullRequestsTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	stargazerCount?: InputMaybe<Scalars['BigInt']['input']>
	stargazersPerContributor?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbRepoInsertResponse = {
	__typename?: 'GthbRepoInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepo>
}

export type GthbRepoOrderBy = {
	contributorCount?: InputMaybe<OrderByDirection>
	createdAt?: InputMaybe<OrderByDirection>
	forkCount?: InputMaybe<OrderByDirection>
	forksPerContributor?: InputMaybe<OrderByDirection>
	gthbOwnerId?: InputMaybe<OrderByDirection>
	gthbRepoDescription?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	gthbRepoName?: InputMaybe<OrderByDirection>
	gthbRepoUrl?: InputMaybe<OrderByDirection>
	homepageUrl?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	isInOrganization?: InputMaybe<OrderByDirection>
	issuesPerContributor?: InputMaybe<OrderByDirection>
	issuesTotalCount?: InputMaybe<OrderByDirection>
	pullRequestsPerContributor?: InputMaybe<OrderByDirection>
	pullRequestsTotalCount?: InputMaybe<OrderByDirection>
	stargazerCount?: InputMaybe<OrderByDirection>
	stargazersPerContributor?: InputMaybe<OrderByDirection>
}

export type GthbRepoTopic = Node & {
	__typename?: 'GthbRepoTopic'
	gthbRepoAndGthbRepoTopicCollection: GthbRepoAndGthbRepoTopicConnection
	gthbRepoTopicId: Scalars['BigInt']['output']
	gthbRepoTopicName: Scalars['String']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	stargazerCount: Scalars['BigInt']['output']
}

export type GthbRepoTopicGthbRepoAndGthbRepoTopicCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoTopic>
}

export type GthbRepoTopicEdge = {
	__typename?: 'GthbRepoTopicEdge'
	cursor: Scalars['String']['output']
	node: GthbRepoTopic
}

export type GthbRepoTopicFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbRepoTopicFilter>>
	gthbRepoTopicId?: InputMaybe<BigIntFilter>
	gthbRepoTopicName?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbRepoTopicFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbRepoTopicFilter>>
	stargazerCount?: InputMaybe<BigIntFilter>
}

export type GthbRepoTopicInsertInput = {
	gthbRepoTopicName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	stargazerCount?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbRepoTopicInsertResponse = {
	__typename?: 'GthbRepoTopicInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoTopic>
}

export type GthbRepoTopicOrderBy = {
	gthbRepoTopicId?: InputMaybe<OrderByDirection>
	gthbRepoTopicName?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	stargazerCount?: InputMaybe<OrderByDirection>
}

export type GthbRepoTopicUpdateInput = {
	gthbRepoTopicName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	stargazerCount?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbRepoTopicUpdateResponse = {
	__typename?: 'GthbRepoTopicUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepoTopic>
}

export type GthbRepoUpdateInput = {
	contributorCount?: InputMaybe<Scalars['BigInt']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	forkCount?: InputMaybe<Scalars['BigInt']['input']>
	forksPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	gthbOwnerId?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoDescription?: InputMaybe<Scalars['String']['input']>
	gthbRepoName?: InputMaybe<Scalars['String']['input']>
	gthbRepoUrl?: InputMaybe<Scalars['String']['input']>
	homepageUrl?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isInOrganization?: InputMaybe<Scalars['Boolean']['input']>
	issuesPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	issuesTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	pullRequestsPerContributor?: InputMaybe<Scalars['BigInt']['input']>
	pullRequestsTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	stargazerCount?: InputMaybe<Scalars['BigInt']['input']>
	stargazersPerContributor?: InputMaybe<Scalars['BigInt']['input']>
}

export type GthbRepoUpdateResponse = {
	__typename?: 'GthbRepoUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbRepo>
}

export type GthbStarHist = Node & {
	__typename?: 'GthbStarHist'
	amount: Scalars['BigInt']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	gthbStarHistDate: Scalars['Datetime']['output']
	gthbStarHistId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbStarHistConnection = {
	__typename?: 'GthbStarHistConnection'
	edges: Array<GthbStarHistEdge>
	pageInfo: PageInfo
}

export type GthbStarHistDeleteResponse = {
	__typename?: 'GthbStarHistDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbStarHist>
}

export type GthbStarHistEdge = {
	__typename?: 'GthbStarHistEdge'
	cursor: Scalars['String']['output']
	node: GthbStarHist
}

export type GthbStarHistFilter = {
	amount?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbStarHistFilter>>
	gthbRepoId?: InputMaybe<BigIntFilter>
	gthbStarHistDate?: InputMaybe<DatetimeFilter>
	gthbStarHistId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbStarHistFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbStarHistFilter>>
}

export type GthbStarHistInsertInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	gthbStarHistDate?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbStarHistInsertResponse = {
	__typename?: 'GthbStarHistInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbStarHist>
}

export type GthbStarHistOrderBy = {
	amount?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	gthbStarHistDate?: InputMaybe<OrderByDirection>
	gthbStarHistId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type GthbStarHistUpdateInput = {
	amount?: InputMaybe<Scalars['BigInt']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	gthbStarHistDate?: InputMaybe<Scalars['Datetime']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type GthbStarHistUpdateResponse = {
	__typename?: 'GthbStarHistUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbStarHist>
}

export type GthbTrending = Node & {
	__typename?: 'GthbTrending'
	dateRange: Scalars['Opaque']['output']
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	gthbTrendingId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	lang?: Maybe<Scalars['String']['output']>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type GthbTrendingConnection = {
	__typename?: 'GthbTrendingConnection'
	edges: Array<GthbTrendingEdge>
	pageInfo: PageInfo
}

export type GthbTrendingDeleteResponse = {
	__typename?: 'GthbTrendingDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbTrending>
}

export type GthbTrendingEdge = {
	__typename?: 'GthbTrendingEdge'
	cursor: Scalars['String']['output']
	node: GthbTrending
}

export type GthbTrendingFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<GthbTrendingFilter>>
	dateRange?: InputMaybe<OpaqueFilter>
	gthbRepoId?: InputMaybe<BigIntFilter>
	gthbTrendingId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	lang?: InputMaybe<StringFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbTrendingFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbTrendingFilter>>
}

export type GthbTrendingInsertInput = {
	dateRange?: InputMaybe<Scalars['Opaque']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	lang?: InputMaybe<Scalars['String']['input']>
}

export type GthbTrendingInsertResponse = {
	__typename?: 'GthbTrendingInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbTrending>
}

export type GthbTrendingOrderBy = {
	dateRange?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	gthbTrendingId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	lang?: InputMaybe<OrderByDirection>
}

export type GthbTrendingUpdateInput = {
	dateRange?: InputMaybe<Scalars['Opaque']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	lang?: InputMaybe<Scalars['String']['input']>
}

export type GthbTrendingUpdateResponse = {
	__typename?: 'GthbTrendingUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbTrending>
}

export type GthbUser = Node & {
	__typename?: 'GthbUser'
	bio?: Maybe<Scalars['String']['output']>
	bioHtml?: Maybe<Scalars['String']['output']>
	company?: Maybe<Scalars['String']['output']>
	companyHtml?: Maybe<Scalars['String']['output']>
	createdAt: Scalars['Datetime']['output']
	email?: Maybe<Scalars['String']['output']>
	followersTotalCount: Scalars['BigInt']['output']
	gthbUser: GthbOwner
	gthbUserId: Scalars['BigInt']['output']
	gthbUserName?: Maybe<Scalars['String']['output']>
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	twitterUsername?: Maybe<Scalars['String']['output']>
	websiteUrl?: Maybe<Scalars['String']['output']>
}

export type GthbUserConnection = {
	__typename?: 'GthbUserConnection'
	edges: Array<GthbUserEdge>
	pageInfo: PageInfo
}

export type GthbUserDeleteResponse = {
	__typename?: 'GthbUserDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbUser>
}

export type GthbUserEdge = {
	__typename?: 'GthbUserEdge'
	cursor: Scalars['String']['output']
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
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<GthbUserFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<GthbUserFilter>>
	twitterUsername?: InputMaybe<StringFilter>
	websiteUrl?: InputMaybe<StringFilter>
}

export type GthbUserInsertInput = {
	bio?: InputMaybe<Scalars['String']['input']>
	bioHtml?: InputMaybe<Scalars['String']['input']>
	company?: InputMaybe<Scalars['String']['input']>
	companyHtml?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	email?: InputMaybe<Scalars['String']['input']>
	followersTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	gthbUserId?: InputMaybe<Scalars['BigInt']['input']>
	gthbUserName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	twitterUsername?: InputMaybe<Scalars['String']['input']>
	websiteUrl?: InputMaybe<Scalars['String']['input']>
}

export type GthbUserInsertResponse = {
	__typename?: 'GthbUserInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	internalCreatedAt?: InputMaybe<OrderByDirection>
	twitterUsername?: InputMaybe<OrderByDirection>
	websiteUrl?: InputMaybe<OrderByDirection>
}

export type GthbUserUpdateInput = {
	bio?: InputMaybe<Scalars['String']['input']>
	bioHtml?: InputMaybe<Scalars['String']['input']>
	company?: InputMaybe<Scalars['String']['input']>
	companyHtml?: InputMaybe<Scalars['String']['input']>
	createdAt?: InputMaybe<Scalars['Datetime']['input']>
	email?: InputMaybe<Scalars['String']['input']>
	followersTotalCount?: InputMaybe<Scalars['BigInt']['input']>
	gthbUserId?: InputMaybe<Scalars['BigInt']['input']>
	gthbUserName?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	twitterUsername?: InputMaybe<Scalars['String']['input']>
	websiteUrl?: InputMaybe<Scalars['String']['input']>
}

export type GthbUserUpdateResponse = {
	__typename?: 'GthbUserUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<GthbUser>
}

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
	eq?: InputMaybe<Scalars['ID']['input']>
}

export type Instance1 = Node & {
	__typename?: 'Instance1'
	created_at: Scalars['Datetime']['output']
	id: Scalars['BigInt']['output']
	instance2Collection?: Maybe<Instance2Connection>
	name?: Maybe<Scalars['String']['output']>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type Instance1Instance2CollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<Instance2Filter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<Instance1>
}

export type Instance1Edge = {
	__typename?: 'Instance1Edge'
	cursor: Scalars['String']['output']
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
	created_at?: InputMaybe<Scalars['Datetime']['input']>
	name?: InputMaybe<Scalars['String']['input']>
}

export type Instance1InsertResponse = {
	__typename?: 'Instance1InsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<Instance1>
}

export type Instance1OrderBy = {
	created_at?: InputMaybe<OrderByDirection>
	id?: InputMaybe<OrderByDirection>
	name?: InputMaybe<OrderByDirection>
}

export type Instance1UpdateInput = {
	created_at?: InputMaybe<Scalars['Datetime']['input']>
	name?: InputMaybe<Scalars['String']['input']>
}

export type Instance1UpdateResponse = {
	__typename?: 'Instance1UpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<Instance1>
}

export type Instance2 = Node & {
	__typename?: 'Instance2'
	created_at: Scalars['Datetime']['output']
	for?: Maybe<Scalars['BigInt']['output']>
	id: Scalars['BigInt']['output']
	instance1?: Maybe<Instance1>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	share?: Maybe<Scalars['String']['output']>
}

export type Instance2Connection = {
	__typename?: 'Instance2Connection'
	edges: Array<Instance2Edge>
	pageInfo: PageInfo
}

export type Instance2DeleteResponse = {
	__typename?: 'Instance2DeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<Instance2>
}

export type Instance2Edge = {
	__typename?: 'Instance2Edge'
	cursor: Scalars['String']['output']
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
	created_at?: InputMaybe<Scalars['Datetime']['input']>
	for?: InputMaybe<Scalars['BigInt']['input']>
	share?: InputMaybe<Scalars['String']['input']>
}

export type Instance2InsertResponse = {
	__typename?: 'Instance2InsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	created_at?: InputMaybe<Scalars['Datetime']['input']>
	for?: InputMaybe<Scalars['BigInt']['input']>
	share?: InputMaybe<Scalars['String']['input']>
}

export type Instance2UpdateResponse = {
	__typename?: 'Instance2UpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<Instance2>
}

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
	eq?: InputMaybe<Scalars['Int']['input']>
	gt?: InputMaybe<Scalars['Int']['input']>
	gte?: InputMaybe<Scalars['Int']['input']>
	in?: InputMaybe<Array<Scalars['Int']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['Int']['input']>
	lte?: InputMaybe<Scalars['Int']['input']>
	neq?: InputMaybe<Scalars['Int']['input']>
}

/** The root type for creating and mutating data */
export type Mutation = {
	__typename?: 'Mutation'
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
	fDeleteGthbTrendingByDateRange?: Maybe<Scalars['Opaque']['output']>
	fDeleteProjBookmark?: Maybe<Scalars['Int']['output']>
	fDeleteProjBookmarkByGthbRepoName?: Maybe<Scalars['Boolean']['output']>
	fDeleteProjBookmarkByProjRepoId?: Maybe<Scalars['Int']['output']>
	fDeleteUser?: Maybe<Scalars['Boolean']['output']>
	fIsProjRepoBookmarked?: Maybe<Scalars['Boolean']['output']>
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
	test?: Maybe<Scalars['UUID']['output']>
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
export type MutationDeleteFromAlgoHnCommentAndAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnCommentCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnCommentFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnQueryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnQueryFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnStoryAndAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnStoryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnStoryFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnTagFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbForkHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbForkHistFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbIssueHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbIssueHistFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbLangCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbLangFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbOrgCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbOrgFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbOwnerCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbOwnerFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoAndGthbLangCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoAndGthbLangFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoAndGthbRepoTopicCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoContrCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoContrFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbRepoTopicCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoTopicFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbStarHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbStarHistFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbTrendingCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbTrendingFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromGthbUserCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbUserFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromInstance1CollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<Instance1Filter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromInstance2CollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<Instance2Filter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjBookmarkCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjBookmarkFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjCatAndProjBookmarkCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjCatCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjCatFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjClassifierCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjClassifierFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndAlgoHnQueryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndProjClassifierCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndSbotLinCompanyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoAndSbotLinProfileCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjRepoCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromSbotLinCompanyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<SbotLinCompanyFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromSbotLinProfileCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<SbotLinProfileFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromUserAdminCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserAdminFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromUserApiKeyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserApiKeyFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromUserWhitelistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserWhitelistFilter>
}

/** The root type for creating and mutating data */
export type MutationFDeleteGthbTrendingByDateRangeArgs = {
	daterange?: InputMaybe<Scalars['Opaque']['input']>
}

/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkArgs = {
	projbookmarkid?: InputMaybe<Scalars['BigInt']['input']>
}

/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkByGthbRepoNameArgs = {
	githubreponame?: InputMaybe<Scalars['String']['input']>
}

/** The root type for creating and mutating data */
export type MutationFDeleteProjBookmarkByProjRepoIdArgs = {
	projrepoid?: InputMaybe<Scalars['BigInt']['input']>
}

/** The root type for creating and mutating data */
export type MutationFIsProjRepoBookmarkedArgs = {
	projrepoid?: InputMaybe<Scalars['BigInt']['input']>
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
export type MutationUpdateAlgoHnCommentAndAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
	set: AlgoHnCommentAndAlgoHnTagUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnCommentCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnCommentFilter>
	set: AlgoHnCommentUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnQueryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnQueryFilter>
	set: AlgoHnQueryUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnStoryAndAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
	set: AlgoHnStoryAndAlgoHnTagUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnStoryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnStoryFilter>
	set: AlgoHnStoryUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAlgoHnTagCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<AlgoHnTagFilter>
	set: AlgoHnTagUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbForkHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbForkHistFilter>
	set: GthbForkHistUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbIssueHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbIssueHistFilter>
	set: GthbIssueHistUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbLangCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbLangFilter>
	set: GthbLangUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbOrgCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbOrgFilter>
	set: GthbOrgUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbOwnerCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbOwnerFilter>
	set: GthbOwnerUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoAndGthbLangCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoAndGthbLangFilter>
	set: GthbRepoAndGthbLangUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoAndGthbRepoTopicCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
	set: GthbRepoAndGthbRepoTopicUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoFilter>
	set: GthbRepoUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoContrCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoContrFilter>
	set: GthbRepoContrUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbRepoTopicCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbRepoTopicFilter>
	set: GthbRepoTopicUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbStarHistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbStarHistFilter>
	set: GthbStarHistUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbTrendingCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbTrendingFilter>
	set: GthbTrendingUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateGthbUserCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<GthbUserFilter>
	set: GthbUserUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateInstance1CollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<Instance1Filter>
	set: Instance1UpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateInstance2CollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<Instance2Filter>
	set: Instance2UpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjBookmarkCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjBookmarkFilter>
	set: ProjBookmarkUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjCatAndProjBookmarkCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
	set: ProjCatAndProjBookmarkUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjCatCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjCatFilter>
	set: ProjCatUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjClassifierCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjClassifierFilter>
	set: ProjClassifierUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndAlgoHnQueryCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
	set: ProjRepoAndAlgoHnQueryUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndProjClassifierCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
	set: ProjRepoAndProjClassifierUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndSbotLinCompanyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
	set: ProjRepoAndSbotLinCompanyUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoAndSbotLinProfileCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
	set: ProjRepoAndSbotLinProfileUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjRepoCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<ProjRepoFilter>
	set: ProjRepoUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateSbotLinCompanyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<SbotLinCompanyFilter>
	set: SbotLinCompanyUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateSbotLinProfileCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<SbotLinProfileFilter>
	set: SbotLinProfileUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateUserAdminCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserAdminFilter>
	set: UserAdminUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateUserApiKeyCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserApiKeyFilter>
	set: UserApiKeyUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateUserWhitelistCollectionArgs = {
	atMost?: Scalars['Int']['input']
	filter?: InputMaybe<UserWhitelistFilter>
	set: UserWhitelistUpdateInput
}

export type Node = {
	/** Retrieves a record by `ID` */
	nodeId: Scalars['ID']['output']
}

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
	eq?: InputMaybe<Scalars['Opaque']['input']>
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
	endCursor?: Maybe<Scalars['String']['output']>
	hasNextPage: Scalars['Boolean']['output']
	hasPreviousPage: Scalars['Boolean']['output']
	startCursor?: Maybe<Scalars['String']['output']>
}

export type ProjBookmark = Node & {
	__typename?: 'ProjBookmark'
	authUsersId: Scalars['UUID']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	isPublic?: Maybe<Scalars['Boolean']['output']>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projBookmarkId: Scalars['BigInt']['output']
	projCatAndProjBookmarkCollection: ProjCatAndProjBookmarkConnection
	projRepo: ProjRepo
	projRepoId: Scalars['BigInt']['output']
}

export type ProjBookmarkProjCatAndProjBookmarkCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjBookmark>
}

export type ProjBookmarkEdge = {
	__typename?: 'ProjBookmarkEdge'
	cursor: Scalars['String']['output']
	node: ProjBookmark
}

export type ProjBookmarkFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjBookmarkFilter>>
	authUsersId?: InputMaybe<UuidFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPublic?: InputMaybe<Scalars['Boolean']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjBookmarkInsertResponse = {
	__typename?: 'ProjBookmarkInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjBookmark>
}

export type ProjBookmarkOrderBy = {
	authUsersId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	isPublic?: InputMaybe<OrderByDirection>
	projBookmarkId?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
}

export type ProjBookmarkUpdateInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPublic?: InputMaybe<Scalars['Boolean']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjBookmarkUpdateResponse = {
	__typename?: 'ProjBookmarkUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjBookmark>
}

export type ProjCat = Node & {
	__typename?: 'ProjCat'
	authUsersId: Scalars['UUID']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	isPublic?: Maybe<Scalars['Boolean']['output']>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	note?: Maybe<Scalars['String']['output']>
	projCatAndProjBookmarkCollection: ProjCatAndProjBookmarkConnection
	projCatId: Scalars['BigInt']['output']
	title: Scalars['String']['output']
}

export type ProjCatProjCatAndProjBookmarkCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjCatAndProjBookmarkOrderBy>>
}

export type ProjCatAndProjBookmark = Node & {
	__typename?: 'ProjCatAndProjBookmark'
	internalCreatedAt: Scalars['Datetime']['output']
	isPinned?: Maybe<Scalars['Boolean']['output']>
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projBookmark: ProjBookmark
	projBookmarkId: Scalars['BigInt']['output']
	projCat: ProjCat
	projCatId: Scalars['BigInt']['output']
}

export type ProjCatAndProjBookmarkConnection = {
	__typename?: 'ProjCatAndProjBookmarkConnection'
	edges: Array<ProjCatAndProjBookmarkEdge>
	pageInfo: PageInfo
}

export type ProjCatAndProjBookmarkDeleteResponse = {
	__typename?: 'ProjCatAndProjBookmarkDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjCatAndProjBookmark>
}

export type ProjCatAndProjBookmarkEdge = {
	__typename?: 'ProjCatAndProjBookmarkEdge'
	cursor: Scalars['String']['output']
	node: ProjCatAndProjBookmark
}

export type ProjCatAndProjBookmarkFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjCatAndProjBookmarkFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPinned?: InputMaybe<Scalars['Boolean']['input']>
	projBookmarkId?: InputMaybe<Scalars['BigInt']['input']>
	projCatId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjCatAndProjBookmarkInsertResponse = {
	__typename?: 'ProjCatAndProjBookmarkInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjCatAndProjBookmark>
}

export type ProjCatAndProjBookmarkOrderBy = {
	internalCreatedAt?: InputMaybe<OrderByDirection>
	isPinned?: InputMaybe<OrderByDirection>
	projBookmarkId?: InputMaybe<OrderByDirection>
	projCatId?: InputMaybe<OrderByDirection>
}

export type ProjCatAndProjBookmarkUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPinned?: InputMaybe<Scalars['Boolean']['input']>
	projBookmarkId?: InputMaybe<Scalars['BigInt']['input']>
	projCatId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjCatAndProjBookmarkUpdateResponse = {
	__typename?: 'ProjCatAndProjBookmarkUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjCat>
}

export type ProjCatEdge = {
	__typename?: 'ProjCatEdge'
	cursor: Scalars['String']['output']
	node: ProjCat
}

export type ProjCatFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjCatFilter>>
	authUsersId?: InputMaybe<UuidFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPublic?: InputMaybe<Scalars['Boolean']['input']>
	note?: InputMaybe<Scalars['String']['input']>
	title?: InputMaybe<Scalars['String']['input']>
}

export type ProjCatInsertResponse = {
	__typename?: 'ProjCatInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjCat>
}

export type ProjCatOrderBy = {
	authUsersId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	isPublic?: InputMaybe<OrderByDirection>
	note?: InputMaybe<OrderByDirection>
	projCatId?: InputMaybe<OrderByDirection>
	title?: InputMaybe<OrderByDirection>
}

export type ProjCatUpdateInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	isPublic?: InputMaybe<Scalars['Boolean']['input']>
	note?: InputMaybe<Scalars['String']['input']>
	title?: InputMaybe<Scalars['String']['input']>
}

export type ProjCatUpdateResponse = {
	__typename?: 'ProjCatUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjCat>
}

export type ProjClassifier = Node & {
	__typename?: 'ProjClassifier'
	classifier: Scalars['String']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projClassifierId: Scalars['BigInt']['output']
	projRepoAndProjClassifierCollection: ProjRepoAndProjClassifierConnection
}

export type ProjClassifierProjRepoAndProjClassifierCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjClassifier>
}

export type ProjClassifierEdge = {
	__typename?: 'ProjClassifierEdge'
	cursor: Scalars['String']['output']
	node: ProjClassifier
}

export type ProjClassifierFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjClassifierFilter>>
	classifier?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjClassifierFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjClassifierFilter>>
	projClassifierId?: InputMaybe<BigIntFilter>
}

export type ProjClassifierInsertInput = {
	classifier?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type ProjClassifierInsertResponse = {
	__typename?: 'ProjClassifierInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjClassifier>
}

export type ProjClassifierOrderBy = {
	classifier?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	projClassifierId?: InputMaybe<OrderByDirection>
}

export type ProjClassifierUpdateInput = {
	classifier?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type ProjClassifierUpdateResponse = {
	__typename?: 'ProjClassifierUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjClassifier>
}

export type ProjRepo = Node & {
	__typename?: 'ProjRepo'
	algoHnEli5?: Maybe<Scalars['String']['output']>
	gthbRepo: GthbRepo
	gthbRepoId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	note?: Maybe<Scalars['String']['output']>
	projBookmarkCollection: ProjBookmarkConnection
	projRepoAndAlgoHnQueryCollection: ProjRepoAndAlgoHnQueryConnection
	projRepoAndProjClassifierCollection: ProjRepoAndProjClassifierConnection
	projRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyConnection
	projRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileConnection
	projRepoId: Scalars['BigInt']['output']
	repoEli5?: Maybe<Scalars['String']['output']>
}

export type ProjRepoProjBookmarkCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjBookmarkFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjBookmarkOrderBy>>
}

export type ProjRepoProjRepoAndAlgoHnQueryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndAlgoHnQueryOrderBy>>
}

export type ProjRepoProjRepoAndProjClassifierCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndProjClassifierOrderBy>>
}

export type ProjRepoProjRepoAndSbotLinCompanyCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndSbotLinCompanyOrderBy>>
}

export type ProjRepoProjRepoAndSbotLinProfileCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndSbotLinProfileOrderBy>>
}

export type ProjRepoAndAlgoHnQuery = Node & {
	__typename?: 'ProjRepoAndAlgoHnQuery'
	algoHnQuery: AlgoHnQuery
	algoHnQueryId: Scalars['BigInt']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projRepo: ProjRepo
	projRepoId: Scalars['BigInt']['output']
}

export type ProjRepoAndAlgoHnQueryConnection = {
	__typename?: 'ProjRepoAndAlgoHnQueryConnection'
	edges: Array<ProjRepoAndAlgoHnQueryEdge>
	pageInfo: PageInfo
}

export type ProjRepoAndAlgoHnQueryDeleteResponse = {
	__typename?: 'ProjRepoAndAlgoHnQueryDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndAlgoHnQuery>
}

export type ProjRepoAndAlgoHnQueryEdge = {
	__typename?: 'ProjRepoAndAlgoHnQueryEdge'
	cursor: Scalars['String']['output']
	node: ProjRepoAndAlgoHnQuery
}

export type ProjRepoAndAlgoHnQueryFilter = {
	algoHnQueryId?: InputMaybe<BigIntFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjRepoAndAlgoHnQueryFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjRepoAndAlgoHnQueryFilter>>
	projRepoId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndAlgoHnQueryInsertInput = {
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndAlgoHnQueryInsertResponse = {
	__typename?: 'ProjRepoAndAlgoHnQueryInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndAlgoHnQuery>
}

export type ProjRepoAndAlgoHnQueryOrderBy = {
	algoHnQueryId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndAlgoHnQueryUpdateInput = {
	algoHnQueryId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndAlgoHnQueryUpdateResponse = {
	__typename?: 'ProjRepoAndAlgoHnQueryUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndAlgoHnQuery>
}

export type ProjRepoAndProjClassifier = Node & {
	__typename?: 'ProjRepoAndProjClassifier'
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projClassifier: ProjClassifier
	projClassifierId: Scalars['BigInt']['output']
	projRepo: ProjRepo
	projRepoId: Scalars['BigInt']['output']
}

export type ProjRepoAndProjClassifierConnection = {
	__typename?: 'ProjRepoAndProjClassifierConnection'
	edges: Array<ProjRepoAndProjClassifierEdge>
	pageInfo: PageInfo
}

export type ProjRepoAndProjClassifierDeleteResponse = {
	__typename?: 'ProjRepoAndProjClassifierDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndProjClassifier>
}

export type ProjRepoAndProjClassifierEdge = {
	__typename?: 'ProjRepoAndProjClassifierEdge'
	cursor: Scalars['String']['output']
	node: ProjRepoAndProjClassifier
}

export type ProjRepoAndProjClassifierFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjRepoAndProjClassifierFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjRepoAndProjClassifierFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjRepoAndProjClassifierFilter>>
	projClassifierId?: InputMaybe<BigIntFilter>
	projRepoId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndProjClassifierInsertInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projClassifierId?: InputMaybe<Scalars['BigInt']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndProjClassifierInsertResponse = {
	__typename?: 'ProjRepoAndProjClassifierInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndProjClassifier>
}

export type ProjRepoAndProjClassifierOrderBy = {
	internalCreatedAt?: InputMaybe<OrderByDirection>
	projClassifierId?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndProjClassifierUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projClassifierId?: InputMaybe<Scalars['BigInt']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndProjClassifierUpdateResponse = {
	__typename?: 'ProjRepoAndProjClassifierUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndProjClassifier>
}

export type ProjRepoAndSbotLinCompany = Node & {
	__typename?: 'ProjRepoAndSbotLinCompany'
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projRepo: ProjRepo
	projRepoId: Scalars['BigInt']['output']
	sbotLinCompany: SbotLinCompany
	sbotLinCompanyId: Scalars['BigInt']['output']
}

export type ProjRepoAndSbotLinCompanyConnection = {
	__typename?: 'ProjRepoAndSbotLinCompanyConnection'
	edges: Array<ProjRepoAndSbotLinCompanyEdge>
	pageInfo: PageInfo
}

export type ProjRepoAndSbotLinCompanyDeleteResponse = {
	__typename?: 'ProjRepoAndSbotLinCompanyDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndSbotLinCompany>
}

export type ProjRepoAndSbotLinCompanyEdge = {
	__typename?: 'ProjRepoAndSbotLinCompanyEdge'
	cursor: Scalars['String']['output']
	node: ProjRepoAndSbotLinCompany
}

export type ProjRepoAndSbotLinCompanyFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjRepoAndSbotLinCompanyFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjRepoAndSbotLinCompanyFilter>>
	projRepoId?: InputMaybe<BigIntFilter>
	sbotLinCompanyId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndSbotLinCompanyInsertInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
	sbotLinCompanyId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndSbotLinCompanyInsertResponse = {
	__typename?: 'ProjRepoAndSbotLinCompanyInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndSbotLinCompany>
}

export type ProjRepoAndSbotLinCompanyOrderBy = {
	internalCreatedAt?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
	sbotLinCompanyId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndSbotLinCompanyUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
	sbotLinCompanyId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndSbotLinCompanyUpdateResponse = {
	__typename?: 'ProjRepoAndSbotLinCompanyUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndSbotLinCompany>
}

export type ProjRepoAndSbotLinProfile = Node & {
	__typename?: 'ProjRepoAndSbotLinProfile'
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projRepo: ProjRepo
	projRepoId: Scalars['BigInt']['output']
	sbotLinProfile: SbotLinProfile
	sbotLinProfileId: Scalars['BigInt']['output']
}

export type ProjRepoAndSbotLinProfileConnection = {
	__typename?: 'ProjRepoAndSbotLinProfileConnection'
	edges: Array<ProjRepoAndSbotLinProfileEdge>
	pageInfo: PageInfo
}

export type ProjRepoAndSbotLinProfileDeleteResponse = {
	__typename?: 'ProjRepoAndSbotLinProfileDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndSbotLinProfile>
}

export type ProjRepoAndSbotLinProfileEdge = {
	__typename?: 'ProjRepoAndSbotLinProfileEdge'
	cursor: Scalars['String']['output']
	node: ProjRepoAndSbotLinProfile
}

export type ProjRepoAndSbotLinProfileFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjRepoAndSbotLinProfileFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjRepoAndSbotLinProfileFilter>>
	projRepoId?: InputMaybe<BigIntFilter>
	sbotLinProfileId?: InputMaybe<BigIntFilter>
}

export type ProjRepoAndSbotLinProfileInsertInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
	sbotLinProfileId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndSbotLinProfileInsertResponse = {
	__typename?: 'ProjRepoAndSbotLinProfileInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepoAndSbotLinProfile>
}

export type ProjRepoAndSbotLinProfileOrderBy = {
	internalCreatedAt?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
	sbotLinProfileId?: InputMaybe<OrderByDirection>
}

export type ProjRepoAndSbotLinProfileUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	projRepoId?: InputMaybe<Scalars['BigInt']['input']>
	sbotLinProfileId?: InputMaybe<Scalars['BigInt']['input']>
}

export type ProjRepoAndSbotLinProfileUpdateResponse = {
	__typename?: 'ProjRepoAndSbotLinProfileUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepo>
}

export type ProjRepoEdge = {
	__typename?: 'ProjRepoEdge'
	cursor: Scalars['String']['output']
	node: ProjRepo
}

export type ProjRepoFilter = {
	algoHnEli5?: InputMaybe<StringFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ProjRepoFilter>>
	gthbRepoId?: InputMaybe<BigIntFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<ProjRepoFilter>
	note?: InputMaybe<StringFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ProjRepoFilter>>
	projRepoId?: InputMaybe<BigIntFilter>
	repoEli5?: InputMaybe<StringFilter>
}

export type ProjRepoInsertInput = {
	algoHnEli5?: InputMaybe<Scalars['String']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	note?: InputMaybe<Scalars['String']['input']>
	repoEli5?: InputMaybe<Scalars['String']['input']>
}

export type ProjRepoInsertResponse = {
	__typename?: 'ProjRepoInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<ProjRepo>
}

export type ProjRepoOrderBy = {
	algoHnEli5?: InputMaybe<OrderByDirection>
	gthbRepoId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	note?: InputMaybe<OrderByDirection>
	projRepoId?: InputMaybe<OrderByDirection>
	repoEli5?: InputMaybe<OrderByDirection>
}

export type ProjRepoUpdateInput = {
	algoHnEli5?: InputMaybe<Scalars['String']['input']>
	gthbRepoId?: InputMaybe<Scalars['BigInt']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	note?: InputMaybe<Scalars['String']['input']>
	repoEli5?: InputMaybe<Scalars['String']['input']>
}

export type ProjRepoUpdateResponse = {
	__typename?: 'ProjRepoUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
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
	fIsGthbRepoBookmarked?: Maybe<Scalars['Boolean']['output']>
	fListBookmarkedGthbRepo?: Maybe<GthbRepoConnection>
	fListTrendingGthbRepo?: Maybe<GthbRepoConnection>
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
	/** A pagable collection of type `Instance1` */
	instance1Collection?: Maybe<Instance1Connection>
	/** A pagable collection of type `Instance2` */
	instance2Collection?: Maybe<Instance2Connection>
	/** Retrieve a record by its `ID` */
	node?: Maybe<Node>
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
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnCommentAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnCommentAndAlgoHnTagOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnCommentCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnCommentFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnCommentOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnQueryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnQueryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnQueryOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnStoryAndAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnStoryAndAlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnStoryAndAlgoHnTagOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnStoryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnStoryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnStoryOrderBy>>
}

/** The root type for querying data */
export type QueryAlgoHnTagCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<AlgoHnTagFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<AlgoHnTagOrderBy>>
}

/** The root type for querying data */
export type QueryFIsGthbRepoBookmarkedArgs = {
	githubreponame?: InputMaybe<Scalars['String']['input']>
}

/** The root type for querying data */
export type QueryFListBookmarkedGthbRepoArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoOrderBy>>
}

/** The root type for querying data */
export type QueryFListTrendingGthbRepoArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoOrderBy>>
}

/** The root type for querying data */
export type QueryGthbForkHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbForkHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbForkHistOrderBy>>
}

/** The root type for querying data */
export type QueryGthbIssueHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbIssueHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbIssueHistOrderBy>>
}

/** The root type for querying data */
export type QueryGthbLangCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbLangFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbLangOrderBy>>
}

/** The root type for querying data */
export type QueryGthbOrgCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbOrgFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbOrgOrderBy>>
}

/** The root type for querying data */
export type QueryGthbOwnerCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbOwnerFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbOwnerOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoAndGthbLangCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbLangFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoAndGthbLangOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoAndGthbRepoTopicCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoAndGthbRepoTopicFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoAndGthbRepoTopicOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoContrCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoContrFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoContrOrderBy>>
}

/** The root type for querying data */
export type QueryGthbRepoTopicCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbRepoTopicFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbRepoTopicOrderBy>>
}

/** The root type for querying data */
export type QueryGthbStarHistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbStarHistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbStarHistOrderBy>>
}

/** The root type for querying data */
export type QueryGthbTrendingCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbTrendingFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbTrendingOrderBy>>
}

/** The root type for querying data */
export type QueryGthbUserCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<GthbUserFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<GthbUserOrderBy>>
}

/** The root type for querying data */
export type QueryInstance1CollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<Instance1Filter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<Instance1OrderBy>>
}

/** The root type for querying data */
export type QueryInstance2CollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<Instance2Filter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<Instance2OrderBy>>
}

/** The root type for querying data */
export type QueryNodeArgs = {
	nodeId: Scalars['ID']['input']
}

/** The root type for querying data */
export type QueryProjBookmarkCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjBookmarkFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjBookmarkOrderBy>>
}

/** The root type for querying data */
export type QueryProjCatAndProjBookmarkCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjCatAndProjBookmarkFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjCatAndProjBookmarkOrderBy>>
}

/** The root type for querying data */
export type QueryProjCatCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjCatFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjCatOrderBy>>
}

/** The root type for querying data */
export type QueryProjClassifierCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjClassifierFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjClassifierOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndAlgoHnQueryCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndAlgoHnQueryFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndAlgoHnQueryOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndProjClassifierCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndProjClassifierFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndProjClassifierOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndSbotLinCompanyCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndSbotLinCompanyOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoAndSbotLinProfileCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoAndSbotLinProfileOrderBy>>
}

/** The root type for querying data */
export type QueryProjRepoCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<ProjRepoOrderBy>>
}

/** The root type for querying data */
export type QuerySbotLinCompanyCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<SbotLinCompanyFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<SbotLinCompanyOrderBy>>
}

/** The root type for querying data */
export type QuerySbotLinProfileCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<SbotLinProfileFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<SbotLinProfileOrderBy>>
}

/** The root type for querying data */
export type QueryUserAdminCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<UserAdminFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<UserAdminOrderBy>>
}

/** The root type for querying data */
export type QueryUserApiKeyCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<UserApiKeyFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<UserApiKeyOrderBy>>
}

/** The root type for querying data */
export type QueryUserWhitelistCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<UserWhitelistFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
	orderBy?: InputMaybe<Array<UserWhitelistOrderBy>>
}

export type SbotLinCompany = Node & {
	__typename?: 'SbotLinCompany'
	about?: Maybe<Scalars['String']['output']>
	employeesAmountInLinkedin: Scalars['BigInt']['output']
	followers: Scalars['BigInt']['output']
	headquarters?: Maybe<Scalars['String']['output']>
	internalCreatedAt: Scalars['Datetime']['output']
	logo: Scalars['String']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	projRepoAndSbotLinCompanyCollection: ProjRepoAndSbotLinCompanyConnection
	sbotLinCompanyId: Scalars['BigInt']['output']
	sbotLinCompanyImage: Scalars['String']['output']
	sbotLinCompanyName: Scalars['String']['output']
	sbotLinCompanyType?: Maybe<Scalars['String']['output']>
	sbotLinCompanyUrl: Scalars['String']['output']
	sphere?: Maybe<Scalars['String']['output']>
	website?: Maybe<Scalars['String']['output']>
}

export type SbotLinCompanyProjRepoAndSbotLinCompanyCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinCompanyFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinCompany>
}

export type SbotLinCompanyEdge = {
	__typename?: 'SbotLinCompanyEdge'
	cursor: Scalars['String']['output']
	node: SbotLinCompany
}

export type SbotLinCompanyFilter = {
	about?: InputMaybe<StringFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<SbotLinCompanyFilter>>
	employeesAmountInLinkedin?: InputMaybe<BigIntFilter>
	followers?: InputMaybe<BigIntFilter>
	headquarters?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	about?: InputMaybe<Scalars['String']['input']>
	employeesAmountInLinkedin?: InputMaybe<Scalars['BigInt']['input']>
	followers?: InputMaybe<Scalars['BigInt']['input']>
	headquarters?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	logo?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyImage?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyName?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyType?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyUrl?: InputMaybe<Scalars['String']['input']>
	sphere?: InputMaybe<Scalars['String']['input']>
	website?: InputMaybe<Scalars['String']['input']>
}

export type SbotLinCompanyInsertResponse = {
	__typename?: 'SbotLinCompanyInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinCompany>
}

export type SbotLinCompanyOrderBy = {
	about?: InputMaybe<OrderByDirection>
	employeesAmountInLinkedin?: InputMaybe<OrderByDirection>
	followers?: InputMaybe<OrderByDirection>
	headquarters?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
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
	about?: InputMaybe<Scalars['String']['input']>
	employeesAmountInLinkedin?: InputMaybe<Scalars['BigInt']['input']>
	followers?: InputMaybe<Scalars['BigInt']['input']>
	headquarters?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	logo?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyImage?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyName?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyType?: InputMaybe<Scalars['String']['input']>
	sbotLinCompanyUrl?: InputMaybe<Scalars['String']['input']>
	sphere?: InputMaybe<Scalars['String']['input']>
	website?: InputMaybe<Scalars['String']['input']>
}

export type SbotLinCompanyUpdateResponse = {
	__typename?: 'SbotLinCompanyUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinCompany>
}

export type SbotLinProfile = Node & {
	__typename?: 'SbotLinProfile'
	about?: Maybe<Scalars['String']['output']>
	avatar?: Maybe<Scalars['String']['output']>
	city?: Maybe<Scalars['String']['output']>
	currentCompanyLink?: Maybe<Scalars['String']['output']>
	currentCompanyName?: Maybe<Scalars['String']['output']>
	educationDetails?: Maybe<Scalars['String']['output']>
	followers?: Maybe<Scalars['String']['output']>
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	position?: Maybe<Scalars['String']['output']>
	projRepoAndSbotLinProfileCollection: ProjRepoAndSbotLinProfileConnection
	sbotLinProfileFollowing?: Maybe<Scalars['String']['output']>
	sbotLinProfileId: Scalars['BigInt']['output']
	sbotLinProfileName: Scalars['String']['output']
	sbotLinProfileUrl: Scalars['String']['output']
}

export type SbotLinProfileProjRepoAndSbotLinProfileCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>
	before?: InputMaybe<Scalars['Cursor']['input']>
	filter?: InputMaybe<ProjRepoAndSbotLinProfileFilter>
	first?: InputMaybe<Scalars['Int']['input']>
	last?: InputMaybe<Scalars['Int']['input']>
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
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinProfile>
}

export type SbotLinProfileEdge = {
	__typename?: 'SbotLinProfileEdge'
	cursor: Scalars['String']['output']
	node: SbotLinProfile
}

export type SbotLinProfileFilter = {
	about?: InputMaybe<StringFilter>
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<SbotLinProfileFilter>>
	avatar?: InputMaybe<StringFilter>
	city?: InputMaybe<StringFilter>
	currentCompanyLink?: InputMaybe<StringFilter>
	currentCompanyName?: InputMaybe<StringFilter>
	educationDetails?: InputMaybe<StringFilter>
	followers?: InputMaybe<StringFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	about?: InputMaybe<Scalars['String']['input']>
	avatar?: InputMaybe<Scalars['String']['input']>
	city?: InputMaybe<Scalars['String']['input']>
	currentCompanyLink?: InputMaybe<Scalars['String']['input']>
	currentCompanyName?: InputMaybe<Scalars['String']['input']>
	educationDetails?: InputMaybe<Scalars['String']['input']>
	followers?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	position?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileFollowing?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileName?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileUrl?: InputMaybe<Scalars['String']['input']>
}

export type SbotLinProfileInsertResponse = {
	__typename?: 'SbotLinProfileInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinProfile>
}

export type SbotLinProfileOrderBy = {
	about?: InputMaybe<OrderByDirection>
	avatar?: InputMaybe<OrderByDirection>
	city?: InputMaybe<OrderByDirection>
	currentCompanyLink?: InputMaybe<OrderByDirection>
	currentCompanyName?: InputMaybe<OrderByDirection>
	educationDetails?: InputMaybe<OrderByDirection>
	followers?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	position?: InputMaybe<OrderByDirection>
	sbotLinProfileFollowing?: InputMaybe<OrderByDirection>
	sbotLinProfileId?: InputMaybe<OrderByDirection>
	sbotLinProfileName?: InputMaybe<OrderByDirection>
	sbotLinProfileUrl?: InputMaybe<OrderByDirection>
}

export type SbotLinProfileUpdateInput = {
	about?: InputMaybe<Scalars['String']['input']>
	avatar?: InputMaybe<Scalars['String']['input']>
	city?: InputMaybe<Scalars['String']['input']>
	currentCompanyLink?: InputMaybe<Scalars['String']['input']>
	currentCompanyName?: InputMaybe<Scalars['String']['input']>
	educationDetails?: InputMaybe<Scalars['String']['input']>
	followers?: InputMaybe<Scalars['String']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	position?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileFollowing?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileName?: InputMaybe<Scalars['String']['input']>
	sbotLinProfileUrl?: InputMaybe<Scalars['String']['input']>
}

export type SbotLinProfileUpdateResponse = {
	__typename?: 'SbotLinProfileUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<SbotLinProfile>
}

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
	eq?: InputMaybe<Scalars['String']['input']>
	gt?: InputMaybe<Scalars['String']['input']>
	gte?: InputMaybe<Scalars['String']['input']>
	ilike?: InputMaybe<Scalars['String']['input']>
	in?: InputMaybe<Array<Scalars['String']['input']>>
	iregex?: InputMaybe<Scalars['String']['input']>
	is?: InputMaybe<FilterIs>
	like?: InputMaybe<Scalars['String']['input']>
	lt?: InputMaybe<Scalars['String']['input']>
	lte?: InputMaybe<Scalars['String']['input']>
	neq?: InputMaybe<Scalars['String']['input']>
	regex?: InputMaybe<Scalars['String']['input']>
	startsWith?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
	eq?: InputMaybe<Scalars['Time']['input']>
	gt?: InputMaybe<Scalars['Time']['input']>
	gte?: InputMaybe<Scalars['Time']['input']>
	in?: InputMaybe<Array<Scalars['Time']['input']>>
	is?: InputMaybe<FilterIs>
	lt?: InputMaybe<Scalars['Time']['input']>
	lte?: InputMaybe<Scalars['Time']['input']>
	neq?: InputMaybe<Scalars['Time']['input']>
}

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
	eq?: InputMaybe<Scalars['UUID']['input']>
	in?: InputMaybe<Array<Scalars['UUID']['input']>>
	is?: InputMaybe<FilterIs>
	neq?: InputMaybe<Scalars['UUID']['input']>
}

export type UserAdmin = Node & {
	__typename?: 'UserAdmin'
	authUsersId: Scalars['UUID']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
}

export type UserAdminConnection = {
	__typename?: 'UserAdminConnection'
	edges: Array<UserAdminEdge>
	pageInfo: PageInfo
}

export type UserAdminDeleteResponse = {
	__typename?: 'UserAdminDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserAdmin>
}

export type UserAdminEdge = {
	__typename?: 'UserAdminEdge'
	cursor: Scalars['String']['output']
	node: UserAdmin
}

export type UserAdminFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<UserAdminFilter>>
	authUsersId?: InputMaybe<UuidFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<UserAdminFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<UserAdminFilter>>
}

export type UserAdminInsertInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type UserAdminInsertResponse = {
	__typename?: 'UserAdminInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserAdmin>
}

export type UserAdminOrderBy = {
	authUsersId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
}

export type UserAdminUpdateInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
}

export type UserAdminUpdateResponse = {
	__typename?: 'UserAdminUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserAdmin>
}

export type UserApiKey = Node & {
	__typename?: 'UserApiKey'
	authUsersId: Scalars['UUID']['output']
	internalCreatedAt: Scalars['Datetime']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	userApiKey: Scalars['UUID']['output']
	userApiKeyId: Scalars['BigInt']['output']
}

export type UserApiKeyConnection = {
	__typename?: 'UserApiKeyConnection'
	edges: Array<UserApiKeyEdge>
	pageInfo: PageInfo
}

export type UserApiKeyDeleteResponse = {
	__typename?: 'UserApiKeyDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserApiKey>
}

export type UserApiKeyEdge = {
	__typename?: 'UserApiKeyEdge'
	cursor: Scalars['String']['output']
	node: UserApiKey
}

export type UserApiKeyFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<UserApiKeyFilter>>
	authUsersId?: InputMaybe<UuidFilter>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
	nodeId?: InputMaybe<IdFilter>
	/** Negates a filter */
	not?: InputMaybe<UserApiKeyFilter>
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<UserApiKeyFilter>>
	userApiKey?: InputMaybe<UuidFilter>
	userApiKeyId?: InputMaybe<BigIntFilter>
}

export type UserApiKeyInsertInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	userApiKey?: InputMaybe<Scalars['UUID']['input']>
}

export type UserApiKeyInsertResponse = {
	__typename?: 'UserApiKeyInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserApiKey>
}

export type UserApiKeyOrderBy = {
	authUsersId?: InputMaybe<OrderByDirection>
	internalCreatedAt?: InputMaybe<OrderByDirection>
	userApiKey?: InputMaybe<OrderByDirection>
	userApiKeyId?: InputMaybe<OrderByDirection>
}

export type UserApiKeyUpdateInput = {
	authUsersId?: InputMaybe<Scalars['UUID']['input']>
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	userApiKey?: InputMaybe<Scalars['UUID']['input']>
}

export type UserApiKeyUpdateResponse = {
	__typename?: 'UserApiKeyUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserApiKey>
}

export type UserWhitelist = Node & {
	__typename?: 'UserWhitelist'
	internalCreatedAt?: Maybe<Scalars['Datetime']['output']>
	kind: Scalars['String']['output']
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output']
	userWhitelistId: Scalars['BigInt']['output']
	userWhitelistValue?: Maybe<Scalars['String']['output']>
}

export type UserWhitelistConnection = {
	__typename?: 'UserWhitelistConnection'
	edges: Array<UserWhitelistEdge>
	pageInfo: PageInfo
}

export type UserWhitelistDeleteResponse = {
	__typename?: 'UserWhitelistDeleteResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserWhitelist>
}

export type UserWhitelistEdge = {
	__typename?: 'UserWhitelistEdge'
	cursor: Scalars['String']['output']
	node: UserWhitelist
}

export type UserWhitelistFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<UserWhitelistFilter>>
	internalCreatedAt?: InputMaybe<DatetimeFilter>
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
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	kind?: InputMaybe<Scalars['String']['input']>
	userWhitelistValue?: InputMaybe<Scalars['String']['input']>
}

export type UserWhitelistInsertResponse = {
	__typename?: 'UserWhitelistInsertResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserWhitelist>
}

export type UserWhitelistOrderBy = {
	internalCreatedAt?: InputMaybe<OrderByDirection>
	kind?: InputMaybe<OrderByDirection>
	userWhitelistId?: InputMaybe<OrderByDirection>
	userWhitelistValue?: InputMaybe<OrderByDirection>
}

export type UserWhitelistUpdateInput = {
	internalCreatedAt?: InputMaybe<Scalars['Datetime']['input']>
	kind?: InputMaybe<Scalars['String']['input']>
	userWhitelistValue?: InputMaybe<Scalars['String']['input']>
}

export type UserWhitelistUpdateResponse = {
	__typename?: 'UserWhitelistUpdateResponse'
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output']
	/** Array of records impacted by the mutation */
	records: Array<UserWhitelist>
}

export type UpdateNotesForProjRepoMutationVariables = Exact<{
	id?: InputMaybe<Scalars['BigInt']['input']>
	text?: InputMaybe<Scalars['String']['input']>
}>

export type UpdateNotesForProjRepoMutation = {
	__typename?: 'Mutation'
	updateProjRepoCollection: {
		__typename?: 'ProjRepoUpdateResponse'
		affectedCount: number
	}
}

export type AllAlgoHnCommentAndAlgoHnTagQueryVariables = Exact<{
	[key: string]: never
}>

export type AllAlgoHnCommentAndAlgoHnTagQuery = {
	__typename?: 'Query'
	algoHnCommentAndAlgoHnTagCollection?: {
		__typename?: 'AlgoHnCommentAndAlgoHnTagConnection'
		edges: Array<{
			__typename?: 'AlgoHnCommentAndAlgoHnTagEdge'
			node: {
				__typename?: 'AlgoHnCommentAndAlgoHnTag'
				algoHnTagId: any
				algoHnCommentId: any
				internalCreatedAt: any
			}
		}>
	} | null
}

export type AllAlgoHnQueryQueryVariables = Exact<{ [key: string]: never }>

export type AllAlgoHnQueryQuery = {
	__typename?: 'Query'
	algoHnQueryCollection?: {
		__typename?: 'AlgoHnQueryConnection'
		edges: Array<{
			__typename?: 'AlgoHnQueryEdge'
			node: {
				__typename?: 'AlgoHnQuery'
				algoHnQueryId: any
				query: string
				internalCreatedAt: any
			}
		}>
	} | null
}

export type AllAlgoHnStoryQueryVariables = Exact<{ [key: string]: never }>

export type AllAlgoHnStoryQuery = {
	__typename?: 'Query'
	algoHnStoryCollection?: {
		__typename?: 'AlgoHnStoryConnection'
		edges: Array<{
			__typename?: 'AlgoHnStoryEdge'
			node: {
				__typename?: 'AlgoHnStory'
				algoHnStoryId: any
				internalCreatedAt: any
				author: string
				createdAt: any
				algoHnStoryUrl?: string | null
				algoHnStoryObjectId: any
				points: any
				algoHnQueryId: any
				title: string
				updatedAt: any
			}
		}>
	} | null
}

export type AllAlgoHnTagQueryVariables = Exact<{ [key: string]: never }>

export type AllAlgoHnTagQuery = {
	__typename?: 'Query'
	algoHnTagCollection?: {
		__typename?: 'AlgoHnTagConnection'
		edges: Array<{
			__typename?: 'AlgoHnTagEdge'
			node: {
				__typename?: 'AlgoHnTag'
				algoHnTagId: any
				internalCreatedAt: any
				title: string
			}
		}>
	} | null
}

export type AllGthbForkHistQueryVariables = Exact<{ [key: string]: never }>

export type AllGthbForkHistQuery = {
	__typename?: 'Query'
	gthbForkHistCollection?: {
		__typename?: 'GthbForkHistConnection'
		edges: Array<{
			__typename?: 'GthbForkHistEdge'
			node: {
				__typename?: 'GthbForkHist'
				gthbForkHistId: any
				internalCreatedAt: any
				gthbRepoId: any
				gthbForkHistDate: any
				amount: any
			}
		}>
	} | null
}

export type AllGthbIssueHistQueryVariables = Exact<{ [key: string]: never }>

export type AllGthbIssueHistQuery = {
	__typename?: 'Query'
	gthbIssueHistCollection?: {
		__typename?: 'GthbIssueHistConnection'
		edges: Array<{
			__typename?: 'GthbIssueHistEdge'
			node: {
				__typename?: 'GthbIssueHist'
				gthbIssueHistId: any
				internalCreatedAt: any
				gthbRepoId: any
				gthbIssueHistDate: any
				amount: any
			}
		}>
	} | null
}

export type AllGthbRepoContributorQueryVariables = Exact<{
	[key: string]: never
}>

export type AllGthbRepoContributorQuery = {
	__typename?: 'Query'
	gthbRepoContrCollection?: {
		__typename?: 'GthbRepoContrConnection'
		edges: Array<{
			__typename?: 'GthbRepoContrEdge'
			node: {
				__typename?: 'GthbRepoContr'
				gthbRepoId: any
				gthbOwnerId: any
				contributions: any
				internalCreatedAt: any
			}
		}>
	} | null
}

export type AllGthbRepoTopicQueryVariables = Exact<{ [key: string]: never }>

export type AllGthbRepoTopicQuery = {
	__typename?: 'Query'
	gthbRepoTopicCollection?: {
		__typename?: 'GthbRepoTopicConnection'
		edges: Array<{
			__typename?: 'GthbRepoTopicEdge'
			node: {
				__typename?: 'GthbRepoTopic'
				gthbRepoTopicId: any
				internalCreatedAt: any
				gthbRepoTopicName: string
				stargazerCount: any
			}
		}>
	} | null
}

export type AllGthbTrendingQueryVariables = Exact<{ [key: string]: never }>

export type AllGthbTrendingQuery = {
	__typename?: 'Query'
	gthbTrendingCollection?: {
		__typename?: 'GthbTrendingConnection'
		edges: Array<{
			__typename?: 'GthbTrendingEdge'
			node: {
				__typename?: 'GthbTrending'
				gthbTrendingId: any
				gthbRepoId: any
				internalCreatedAt: any
				dateRange: any
				lang?: string | null
			}
		}>
	} | null
}

export type AllGthbUserQueryVariables = Exact<{ [key: string]: never }>

export type AllGthbUserQuery = {
	__typename?: 'Query'
	gthbUserCollection?: {
		__typename?: 'GthbUserConnection'
		edges: Array<{
			__typename?: 'GthbUserEdge'
			node: {
				__typename?: 'GthbUser'
				gthbUserId: any
				internalCreatedAt: any
				bio?: string | null
				bioHtml?: string | null
				company?: string | null
				companyHtml?: string | null
				createdAt: any
				email?: string | null
				followersTotalCount: any
				gthbUserName?: string | null
				twitterUsername?: string | null
				websiteUrl?: string | null
			}
		}>
	} | null
}

export type AllProjCatQueryVariables = Exact<{ [key: string]: never }>

export type AllProjCatQuery = {
	__typename?: 'Query'
	projCatCollection?: {
		__typename?: 'ProjCatConnection'
		edges: Array<{
			__typename?: 'ProjCatEdge'
			node: {
				__typename?: 'ProjCat'
				projCatId: any
				internalCreatedAt: any
				title: string
				authUsersId: any
				note?: string | null
				isPublic?: boolean | null
			}
		}>
	} | null
}

export type AllProjRepoQueryVariables = Exact<{ [key: string]: never }>

export type AllProjRepoQuery = {
	__typename?: 'Query'
	projRepoCollection?: {
		__typename?: 'ProjRepoConnection'
		edges: Array<{
			__typename?: 'ProjRepoEdge'
			node: {
				__typename?: 'ProjRepo'
				projRepoId: any
				internalCreatedAt: any
				gthbRepoId: any
				note?: string | null
			}
		}>
	} | null
}

export type AllProjRepoAndProjClassifierQueryVariables = Exact<{
	[key: string]: never
}>

export type AllProjRepoAndProjClassifierQuery = {
	__typename?: 'Query'
	projRepoAndProjClassifierCollection?: {
		__typename?: 'ProjRepoAndProjClassifierConnection'
		edges: Array<{
			__typename?: 'ProjRepoAndProjClassifierEdge'
			node: {
				__typename?: 'ProjRepoAndProjClassifier'
				projRepoId: any
				projClassifierId: any
				internalCreatedAt: any
			}
		}>
	} | null
}

export type AllProjRepoAndSbotLinCompanyQueryVariables = Exact<{
	[key: string]: never
}>

export type AllProjRepoAndSbotLinCompanyQuery = {
	__typename?: 'Query'
	projRepoAndSbotLinCompanyCollection?: {
		__typename?: 'ProjRepoAndSbotLinCompanyConnection'
		edges: Array<{
			__typename?: 'ProjRepoAndSbotLinCompanyEdge'
			node: {
				__typename?: 'ProjRepoAndSbotLinCompany'
				projRepoId: any
				sbotLinCompanyId: any
				internalCreatedAt: any
			}
		}>
	} | null
}

export type AllProjRepoAndSbotLinProfileQueryVariables = Exact<{
	[key: string]: never
}>

export type AllProjRepoAndSbotLinProfileQuery = {
	__typename?: 'Query'
	projRepoAndSbotLinProfileCollection?: {
		__typename?: 'ProjRepoAndSbotLinProfileConnection'
		edges: Array<{
			__typename?: 'ProjRepoAndSbotLinProfileEdge'
			node: {
				__typename?: 'ProjRepoAndSbotLinProfile'
				projRepoId: any
				sbotLinProfileId: any
				internalCreatedAt: any
			}
		}>
	} | null
}

export type DetailViewForkHistQueryVariables = Exact<{
	filter?: InputMaybe<GthbForkHistFilter>
}>

export type DetailViewForkHistQuery = {
	__typename?: 'Query'
	gthbForkHistCollection?: {
		__typename?: 'GthbForkHistConnection'
		edges: Array<{
			__typename?: 'GthbForkHistEdge'
			node: { __typename?: 'GthbForkHist'; gthbForkHistDate: any; amount: any }
		}>
	} | null
}

export type DetailViewProjRepoTopQueryVariables = Exact<{
	id?: InputMaybe<Scalars['BigInt']['input']>
	gthbStarHistFilter?: InputMaybe<GthbStarHistFilter>
	gthbIssueHistFilter?: InputMaybe<GthbIssueHistFilter>
	gthbForkHistFilter?: InputMaybe<GthbForkHistFilter>
}>

export type DetailViewProjRepoTopQuery = {
	__typename?: 'Query'
	projRepoCollection?: {
		__typename?: 'ProjRepoConnection'
		edges: Array<{
			__typename?: 'ProjRepoEdge'
			node: { __typename?: 'ProjRepo'; algoHnEli5?: string | null }
		}>
	} | null
}

export type ListBookmarkedGthbRepoQueryVariables = Exact<{
	filter?: InputMaybe<GthbRepoFilter>
}>

export type ListBookmarkedGthbRepoQuery = {
	__typename?: 'Query'
	fListBookmarkedGthbRepo?: {
		__typename?: 'GthbRepoConnection'
		edges: Array<{
			__typename?: 'GthbRepoEdge'
			node: {
				__typename?: 'GthbRepo'
				gthbRepoName: string
				gthbRepoDescription?: string | null
				stargazerCount: any
				issuesTotalCount: any
				forksPerContributor: any
				forkCount: any
				contributorCount: any
				issuesPerContributor: any
				pullRequestsTotalCount: any
				gthbOwner: {
					__typename?: 'GthbOwner'
					avatarUrl: string
					gthbOwnerLogin: string
				}
				gthbRepo: { __typename?: 'ProjRepo'; projRepoId: any }
			}
		}>
	} | null
}

export type ListTrendingGthbRepoQueryVariables = Exact<{
	filter?: InputMaybe<GthbRepoFilter>
}>

export type ListTrendingGthbRepoQuery = {
	__typename?: 'Query'
	fListTrendingGthbRepo?: {
		__typename?: 'GthbRepoConnection'
		edges: Array<{
			__typename?: 'GthbRepoEdge'
			node: {
				__typename?: 'GthbRepo'
				gthbRepoName: string
				gthbRepoDescription?: string | null
				stargazerCount: any
				issuesTotalCount: any
				forksPerContributor: any
				forkCount: any
				contributorCount: any
				issuesPerContributor: any
				pullRequestsTotalCount: any
				gthbOwner: {
					__typename?: 'GthbOwner'
					avatarUrl: string
					gthbOwnerLogin: string
				}
				gthbRepo: { __typename?: 'ProjRepo'; projRepoId: any }
			}
		}>
	} | null
}

export type ListViewGthbReposQueryVariables = Exact<{
	filter?: InputMaybe<GthbRepoFilter>
}>

export type ListViewGthbReposQuery = {
	__typename?: 'Query'
	gthbRepoCollection?: {
		__typename?: 'GthbRepoConnection'
		edges: Array<{
			__typename?: 'GthbRepoEdge'
			cursor: string
			node: {
				__typename?: 'GthbRepo'
				gthbRepoName: string
				gthbRepoDescription?: string | null
				stargazerCount: any
				issuesTotalCount: any
				forksPerContributor: any
				forkCount: any
				contributorCount: any
				issuesPerContributor: any
				pullRequestsTotalCount: any
				gthbOwner: {
					__typename?: 'GthbOwner'
					avatarUrl: string
					gthbOwnerLogin: string
				}
			}
		}>
	} | null
}

export type SidebarProjCategoriesToProjBookmarksQueryVariables = Exact<{
	[key: string]: never
}>

export type SidebarProjCategoriesToProjBookmarksQuery = {
	__typename?: 'Query'
	projCatCollection?: {
		__typename?: 'ProjCatConnection'
		edges: Array<{
			__typename?: 'ProjCatEdge'
			node: {
				__typename?: 'ProjCat'
				nodeId: string
				title: string
				projCatAndProjBookmarkCollection: {
					__typename?: 'ProjCatAndProjBookmarkConnection'
					edges: Array<{
						__typename?: 'ProjCatAndProjBookmarkEdge'
						node: {
							__typename?: 'ProjCatAndProjBookmark'
							projBookmark: {
								__typename?: 'ProjBookmark'
								projRepo: {
									__typename?: 'ProjRepo'
									gthbRepo: {
										__typename?: 'GthbRepo'
										gthbRepoName: string
										gthbOwner: {
											__typename?: 'GthbOwner'
											avatarUrl: string
											gthbOwnerLogin: string
										}
									}
								}
							}
						}
					}>
				}
			}
		}>
	} | null
}

export const UpdateNotesForProjRepoDocument = gql`
    mutation UpdateNotesForProjRepo($id: BigInt, $text: String) {
  updateProjRepoCollection(filter: {projRepoId: {eq: $id}}, set: {note: $text}) {
    affectedCount
  }
}
    `
export type UpdateNotesForProjRepoMutationFn = Apollo.MutationFunction<
	UpdateNotesForProjRepoMutation,
	UpdateNotesForProjRepoMutationVariables
>

/**
 * __useUpdateNotesForProjRepoMutation__
 *
 * To run a mutation, you first call `useUpdateNotesForProjRepoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNotesForProjRepoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNotesForProjRepoMutation, { data, loading, error }] = useUpdateNotesForProjRepoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useUpdateNotesForProjRepoMutation(
	baseOptions?: Apollo.MutationHookOptions<
		UpdateNotesForProjRepoMutation,
		UpdateNotesForProjRepoMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<
		UpdateNotesForProjRepoMutation,
		UpdateNotesForProjRepoMutationVariables
	>(UpdateNotesForProjRepoDocument, options)
}
export type UpdateNotesForProjRepoMutationHookResult = ReturnType<
	typeof useUpdateNotesForProjRepoMutation
>
export type UpdateNotesForProjRepoMutationResult =
	Apollo.MutationResult<UpdateNotesForProjRepoMutation>
export type UpdateNotesForProjRepoMutationOptions = Apollo.BaseMutationOptions<
	UpdateNotesForProjRepoMutation,
	UpdateNotesForProjRepoMutationVariables
>
export const AllAlgoHnCommentAndAlgoHnTagDocument = gql`
    query AllAlgoHnCommentAndAlgoHnTag {
  algoHnCommentAndAlgoHnTagCollection {
    edges {
      node {
        algoHnTagId
        algoHnCommentId
        internalCreatedAt
      }
    }
  }
}
    `

/**
 * __useAllAlgoHnCommentAndAlgoHnTagQuery__
 *
 * To run a query within a React component, call `useAllAlgoHnCommentAndAlgoHnTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAlgoHnCommentAndAlgoHnTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAlgoHnCommentAndAlgoHnTagQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAlgoHnCommentAndAlgoHnTagQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllAlgoHnCommentAndAlgoHnTagQuery,
		AllAlgoHnCommentAndAlgoHnTagQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<
		AllAlgoHnCommentAndAlgoHnTagQuery,
		AllAlgoHnCommentAndAlgoHnTagQueryVariables
	>(AllAlgoHnCommentAndAlgoHnTagDocument, options)
}
export function useAllAlgoHnCommentAndAlgoHnTagLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllAlgoHnCommentAndAlgoHnTagQuery,
		AllAlgoHnCommentAndAlgoHnTagQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		AllAlgoHnCommentAndAlgoHnTagQuery,
		AllAlgoHnCommentAndAlgoHnTagQueryVariables
	>(AllAlgoHnCommentAndAlgoHnTagDocument, options)
}
export function useAllAlgoHnCommentAndAlgoHnTagSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllAlgoHnCommentAndAlgoHnTagQuery,
		AllAlgoHnCommentAndAlgoHnTagQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		AllAlgoHnCommentAndAlgoHnTagQuery,
		AllAlgoHnCommentAndAlgoHnTagQueryVariables
	>(AllAlgoHnCommentAndAlgoHnTagDocument, options)
}
export type AllAlgoHnCommentAndAlgoHnTagQueryHookResult = ReturnType<
	typeof useAllAlgoHnCommentAndAlgoHnTagQuery
>
export type AllAlgoHnCommentAndAlgoHnTagLazyQueryHookResult = ReturnType<
	typeof useAllAlgoHnCommentAndAlgoHnTagLazyQuery
>
export type AllAlgoHnCommentAndAlgoHnTagSuspenseQueryHookResult = ReturnType<
	typeof useAllAlgoHnCommentAndAlgoHnTagSuspenseQuery
>
export type AllAlgoHnCommentAndAlgoHnTagQueryResult = Apollo.QueryResult<
	AllAlgoHnCommentAndAlgoHnTagQuery,
	AllAlgoHnCommentAndAlgoHnTagQueryVariables
>
export const AllAlgoHnQueryDocument = gql`
    query AllAlgoHnQuery {
  algoHnQueryCollection {
    edges {
      node {
        algoHnQueryId
        query
        internalCreatedAt
      }
    }
  }
}
    `

/**
 * __useAllAlgoHnQueryQuery__
 *
 * To run a query within a React component, call `useAllAlgoHnQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAlgoHnQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAlgoHnQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAlgoHnQueryQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllAlgoHnQueryQuery,
		AllAlgoHnQueryQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<AllAlgoHnQueryQuery, AllAlgoHnQueryQueryVariables>(
		AllAlgoHnQueryDocument,
		options
	)
}
export function useAllAlgoHnQueryLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllAlgoHnQueryQuery,
		AllAlgoHnQueryQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<AllAlgoHnQueryQuery, AllAlgoHnQueryQueryVariables>(
		AllAlgoHnQueryDocument,
		options
	)
}
export function useAllAlgoHnQuerySuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllAlgoHnQueryQuery,
		AllAlgoHnQueryQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		AllAlgoHnQueryQuery,
		AllAlgoHnQueryQueryVariables
	>(AllAlgoHnQueryDocument, options)
}
export type AllAlgoHnQueryQueryHookResult = ReturnType<
	typeof useAllAlgoHnQueryQuery
>
export type AllAlgoHnQueryLazyQueryHookResult = ReturnType<
	typeof useAllAlgoHnQueryLazyQuery
>
export type AllAlgoHnQuerySuspenseQueryHookResult = ReturnType<
	typeof useAllAlgoHnQuerySuspenseQuery
>
export type AllAlgoHnQueryQueryResult = Apollo.QueryResult<
	AllAlgoHnQueryQuery,
	AllAlgoHnQueryQueryVariables
>
export const AllAlgoHnStoryDocument = gql`
    query AllAlgoHnStory {
  algoHnStoryCollection {
    edges {
      node {
        algoHnStoryId
        internalCreatedAt
        author
        createdAt
        algoHnStoryUrl
        algoHnStoryObjectId
        points
        algoHnQueryId
        title
        updatedAt
      }
    }
  }
}
    `

/**
 * __useAllAlgoHnStoryQuery__
 *
 * To run a query within a React component, call `useAllAlgoHnStoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAlgoHnStoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAlgoHnStoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAlgoHnStoryQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllAlgoHnStoryQuery,
		AllAlgoHnStoryQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<AllAlgoHnStoryQuery, AllAlgoHnStoryQueryVariables>(
		AllAlgoHnStoryDocument,
		options
	)
}
export function useAllAlgoHnStoryLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllAlgoHnStoryQuery,
		AllAlgoHnStoryQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<AllAlgoHnStoryQuery, AllAlgoHnStoryQueryVariables>(
		AllAlgoHnStoryDocument,
		options
	)
}
export function useAllAlgoHnStorySuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllAlgoHnStoryQuery,
		AllAlgoHnStoryQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		AllAlgoHnStoryQuery,
		AllAlgoHnStoryQueryVariables
	>(AllAlgoHnStoryDocument, options)
}
export type AllAlgoHnStoryQueryHookResult = ReturnType<
	typeof useAllAlgoHnStoryQuery
>
export type AllAlgoHnStoryLazyQueryHookResult = ReturnType<
	typeof useAllAlgoHnStoryLazyQuery
>
export type AllAlgoHnStorySuspenseQueryHookResult = ReturnType<
	typeof useAllAlgoHnStorySuspenseQuery
>
export type AllAlgoHnStoryQueryResult = Apollo.QueryResult<
	AllAlgoHnStoryQuery,
	AllAlgoHnStoryQueryVariables
>
export const AllAlgoHnTagDocument = gql`
    query AllAlgoHnTag {
  algoHnTagCollection {
    edges {
      node {
        algoHnTagId
        internalCreatedAt
        title
      }
    }
  }
}
    `

/**
 * __useAllAlgoHnTagQuery__
 *
 * To run a query within a React component, call `useAllAlgoHnTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAlgoHnTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAlgoHnTagQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAlgoHnTagQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllAlgoHnTagQuery,
		AllAlgoHnTagQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<AllAlgoHnTagQuery, AllAlgoHnTagQueryVariables>(
		AllAlgoHnTagDocument,
		options
	)
}
export function useAllAlgoHnTagLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllAlgoHnTagQuery,
		AllAlgoHnTagQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<AllAlgoHnTagQuery, AllAlgoHnTagQueryVariables>(
		AllAlgoHnTagDocument,
		options
	)
}
export function useAllAlgoHnTagSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllAlgoHnTagQuery,
		AllAlgoHnTagQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<AllAlgoHnTagQuery, AllAlgoHnTagQueryVariables>(
		AllAlgoHnTagDocument,
		options
	)
}
export type AllAlgoHnTagQueryHookResult = ReturnType<
	typeof useAllAlgoHnTagQuery
>
export type AllAlgoHnTagLazyQueryHookResult = ReturnType<
	typeof useAllAlgoHnTagLazyQuery
>
export type AllAlgoHnTagSuspenseQueryHookResult = ReturnType<
	typeof useAllAlgoHnTagSuspenseQuery
>
export type AllAlgoHnTagQueryResult = Apollo.QueryResult<
	AllAlgoHnTagQuery,
	AllAlgoHnTagQueryVariables
>
export const AllGthbForkHistDocument = gql`
    query AllGthbForkHist {
  gthbForkHistCollection {
    edges {
      node {
        gthbForkHistId
        internalCreatedAt
        gthbRepoId
        gthbForkHistDate
        amount
      }
    }
  }
}
    `

/**
 * __useAllGthbForkHistQuery__
 *
 * To run a query within a React component, call `useAllGthbForkHistQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGthbForkHistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGthbForkHistQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGthbForkHistQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllGthbForkHistQuery,
		AllGthbForkHistQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<AllGthbForkHistQuery, AllGthbForkHistQueryVariables>(
		AllGthbForkHistDocument,
		options
	)
}
export function useAllGthbForkHistLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllGthbForkHistQuery,
		AllGthbForkHistQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		AllGthbForkHistQuery,
		AllGthbForkHistQueryVariables
	>(AllGthbForkHistDocument, options)
}
export function useAllGthbForkHistSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllGthbForkHistQuery,
		AllGthbForkHistQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		AllGthbForkHistQuery,
		AllGthbForkHistQueryVariables
	>(AllGthbForkHistDocument, options)
}
export type AllGthbForkHistQueryHookResult = ReturnType<
	typeof useAllGthbForkHistQuery
>
export type AllGthbForkHistLazyQueryHookResult = ReturnType<
	typeof useAllGthbForkHistLazyQuery
>
export type AllGthbForkHistSuspenseQueryHookResult = ReturnType<
	typeof useAllGthbForkHistSuspenseQuery
>
export type AllGthbForkHistQueryResult = Apollo.QueryResult<
	AllGthbForkHistQuery,
	AllGthbForkHistQueryVariables
>
export const AllGthbIssueHistDocument = gql`
    query AllGthbIssueHist {
  gthbIssueHistCollection {
    edges {
      node {
        gthbIssueHistId
        internalCreatedAt
        gthbRepoId
        gthbIssueHistDate
        amount
      }
    }
  }
}
    `

/**
 * __useAllGthbIssueHistQuery__
 *
 * To run a query within a React component, call `useAllGthbIssueHistQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGthbIssueHistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGthbIssueHistQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGthbIssueHistQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllGthbIssueHistQuery,
		AllGthbIssueHistQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<AllGthbIssueHistQuery, AllGthbIssueHistQueryVariables>(
		AllGthbIssueHistDocument,
		options
	)
}
export function useAllGthbIssueHistLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllGthbIssueHistQuery,
		AllGthbIssueHistQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		AllGthbIssueHistQuery,
		AllGthbIssueHistQueryVariables
	>(AllGthbIssueHistDocument, options)
}
export function useAllGthbIssueHistSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllGthbIssueHistQuery,
		AllGthbIssueHistQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		AllGthbIssueHistQuery,
		AllGthbIssueHistQueryVariables
	>(AllGthbIssueHistDocument, options)
}
export type AllGthbIssueHistQueryHookResult = ReturnType<
	typeof useAllGthbIssueHistQuery
>
export type AllGthbIssueHistLazyQueryHookResult = ReturnType<
	typeof useAllGthbIssueHistLazyQuery
>
export type AllGthbIssueHistSuspenseQueryHookResult = ReturnType<
	typeof useAllGthbIssueHistSuspenseQuery
>
export type AllGthbIssueHistQueryResult = Apollo.QueryResult<
	AllGthbIssueHistQuery,
	AllGthbIssueHistQueryVariables
>
export const AllGthbRepoContributorDocument = gql`
    query AllGthbRepoContributor {
  gthbRepoContrCollection {
    edges {
      node {
        gthbRepoId
        gthbOwnerId
        contributions
        internalCreatedAt
      }
    }
  }
}
    `

/**
 * __useAllGthbRepoContributorQuery__
 *
 * To run a query within a React component, call `useAllGthbRepoContributorQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGthbRepoContributorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGthbRepoContributorQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGthbRepoContributorQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllGthbRepoContributorQuery,
		AllGthbRepoContributorQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<
		AllGthbRepoContributorQuery,
		AllGthbRepoContributorQueryVariables
	>(AllGthbRepoContributorDocument, options)
}
export function useAllGthbRepoContributorLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllGthbRepoContributorQuery,
		AllGthbRepoContributorQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		AllGthbRepoContributorQuery,
		AllGthbRepoContributorQueryVariables
	>(AllGthbRepoContributorDocument, options)
}
export function useAllGthbRepoContributorSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllGthbRepoContributorQuery,
		AllGthbRepoContributorQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		AllGthbRepoContributorQuery,
		AllGthbRepoContributorQueryVariables
	>(AllGthbRepoContributorDocument, options)
}
export type AllGthbRepoContributorQueryHookResult = ReturnType<
	typeof useAllGthbRepoContributorQuery
>
export type AllGthbRepoContributorLazyQueryHookResult = ReturnType<
	typeof useAllGthbRepoContributorLazyQuery
>
export type AllGthbRepoContributorSuspenseQueryHookResult = ReturnType<
	typeof useAllGthbRepoContributorSuspenseQuery
>
export type AllGthbRepoContributorQueryResult = Apollo.QueryResult<
	AllGthbRepoContributorQuery,
	AllGthbRepoContributorQueryVariables
>
export const AllGthbRepoTopicDocument = gql`
    query AllGthbRepoTopic {
  gthbRepoTopicCollection {
    edges {
      node {
        gthbRepoTopicId
        internalCreatedAt
        gthbRepoTopicName
        stargazerCount
      }
    }
  }
}
    `

/**
 * __useAllGthbRepoTopicQuery__
 *
 * To run a query within a React component, call `useAllGthbRepoTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGthbRepoTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGthbRepoTopicQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGthbRepoTopicQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllGthbRepoTopicQuery,
		AllGthbRepoTopicQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<AllGthbRepoTopicQuery, AllGthbRepoTopicQueryVariables>(
		AllGthbRepoTopicDocument,
		options
	)
}
export function useAllGthbRepoTopicLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllGthbRepoTopicQuery,
		AllGthbRepoTopicQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		AllGthbRepoTopicQuery,
		AllGthbRepoTopicQueryVariables
	>(AllGthbRepoTopicDocument, options)
}
export function useAllGthbRepoTopicSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllGthbRepoTopicQuery,
		AllGthbRepoTopicQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		AllGthbRepoTopicQuery,
		AllGthbRepoTopicQueryVariables
	>(AllGthbRepoTopicDocument, options)
}
export type AllGthbRepoTopicQueryHookResult = ReturnType<
	typeof useAllGthbRepoTopicQuery
>
export type AllGthbRepoTopicLazyQueryHookResult = ReturnType<
	typeof useAllGthbRepoTopicLazyQuery
>
export type AllGthbRepoTopicSuspenseQueryHookResult = ReturnType<
	typeof useAllGthbRepoTopicSuspenseQuery
>
export type AllGthbRepoTopicQueryResult = Apollo.QueryResult<
	AllGthbRepoTopicQuery,
	AllGthbRepoTopicQueryVariables
>
export const AllGthbTrendingDocument = gql`
    query AllGthbTrending {
  gthbTrendingCollection {
    edges {
      node {
        gthbTrendingId
        gthbRepoId
        internalCreatedAt
        dateRange
        lang
      }
    }
  }
}
    `

/**
 * __useAllGthbTrendingQuery__
 *
 * To run a query within a React component, call `useAllGthbTrendingQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGthbTrendingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGthbTrendingQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGthbTrendingQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllGthbTrendingQuery,
		AllGthbTrendingQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<AllGthbTrendingQuery, AllGthbTrendingQueryVariables>(
		AllGthbTrendingDocument,
		options
	)
}
export function useAllGthbTrendingLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllGthbTrendingQuery,
		AllGthbTrendingQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		AllGthbTrendingQuery,
		AllGthbTrendingQueryVariables
	>(AllGthbTrendingDocument, options)
}
export function useAllGthbTrendingSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllGthbTrendingQuery,
		AllGthbTrendingQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		AllGthbTrendingQuery,
		AllGthbTrendingQueryVariables
	>(AllGthbTrendingDocument, options)
}
export type AllGthbTrendingQueryHookResult = ReturnType<
	typeof useAllGthbTrendingQuery
>
export type AllGthbTrendingLazyQueryHookResult = ReturnType<
	typeof useAllGthbTrendingLazyQuery
>
export type AllGthbTrendingSuspenseQueryHookResult = ReturnType<
	typeof useAllGthbTrendingSuspenseQuery
>
export type AllGthbTrendingQueryResult = Apollo.QueryResult<
	AllGthbTrendingQuery,
	AllGthbTrendingQueryVariables
>
export const AllGthbUserDocument = gql`
    query AllGthbUser {
  gthbUserCollection {
    edges {
      node {
        gthbUserId
        internalCreatedAt
        bio
        bioHtml
        company
        companyHtml
        createdAt
        email
        followersTotalCount
        gthbUserName
        twitterUsername
        websiteUrl
      }
    }
  }
}
    `

/**
 * __useAllGthbUserQuery__
 *
 * To run a query within a React component, call `useAllGthbUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGthbUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGthbUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGthbUserQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllGthbUserQuery,
		AllGthbUserQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<AllGthbUserQuery, AllGthbUserQueryVariables>(
		AllGthbUserDocument,
		options
	)
}
export function useAllGthbUserLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllGthbUserQuery,
		AllGthbUserQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<AllGthbUserQuery, AllGthbUserQueryVariables>(
		AllGthbUserDocument,
		options
	)
}
export function useAllGthbUserSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllGthbUserQuery,
		AllGthbUserQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<AllGthbUserQuery, AllGthbUserQueryVariables>(
		AllGthbUserDocument,
		options
	)
}
export type AllGthbUserQueryHookResult = ReturnType<typeof useAllGthbUserQuery>
export type AllGthbUserLazyQueryHookResult = ReturnType<
	typeof useAllGthbUserLazyQuery
>
export type AllGthbUserSuspenseQueryHookResult = ReturnType<
	typeof useAllGthbUserSuspenseQuery
>
export type AllGthbUserQueryResult = Apollo.QueryResult<
	AllGthbUserQuery,
	AllGthbUserQueryVariables
>
export const AllProjCatDocument = gql`
    query AllProjCat {
  projCatCollection {
    edges {
      node {
        projCatId
        internalCreatedAt
        title
        authUsersId
        note
        isPublic
      }
    }
  }
}
    `

/**
 * __useAllProjCatQuery__
 *
 * To run a query within a React component, call `useAllProjCatQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjCatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjCatQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProjCatQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllProjCatQuery,
		AllProjCatQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<AllProjCatQuery, AllProjCatQueryVariables>(
		AllProjCatDocument,
		options
	)
}
export function useAllProjCatLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllProjCatQuery,
		AllProjCatQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<AllProjCatQuery, AllProjCatQueryVariables>(
		AllProjCatDocument,
		options
	)
}
export function useAllProjCatSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllProjCatQuery,
		AllProjCatQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<AllProjCatQuery, AllProjCatQueryVariables>(
		AllProjCatDocument,
		options
	)
}
export type AllProjCatQueryHookResult = ReturnType<typeof useAllProjCatQuery>
export type AllProjCatLazyQueryHookResult = ReturnType<
	typeof useAllProjCatLazyQuery
>
export type AllProjCatSuspenseQueryHookResult = ReturnType<
	typeof useAllProjCatSuspenseQuery
>
export type AllProjCatQueryResult = Apollo.QueryResult<
	AllProjCatQuery,
	AllProjCatQueryVariables
>
export const AllProjRepoDocument = gql`
    query AllProjRepo {
  projRepoCollection {
    edges {
      node {
        projRepoId
        internalCreatedAt
        gthbRepoId
        note
      }
    }
  }
}
    `

/**
 * __useAllProjRepoQuery__
 *
 * To run a query within a React component, call `useAllProjRepoQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjRepoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjRepoQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProjRepoQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllProjRepoQuery,
		AllProjRepoQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<AllProjRepoQuery, AllProjRepoQueryVariables>(
		AllProjRepoDocument,
		options
	)
}
export function useAllProjRepoLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllProjRepoQuery,
		AllProjRepoQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<AllProjRepoQuery, AllProjRepoQueryVariables>(
		AllProjRepoDocument,
		options
	)
}
export function useAllProjRepoSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllProjRepoQuery,
		AllProjRepoQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<AllProjRepoQuery, AllProjRepoQueryVariables>(
		AllProjRepoDocument,
		options
	)
}
export type AllProjRepoQueryHookResult = ReturnType<typeof useAllProjRepoQuery>
export type AllProjRepoLazyQueryHookResult = ReturnType<
	typeof useAllProjRepoLazyQuery
>
export type AllProjRepoSuspenseQueryHookResult = ReturnType<
	typeof useAllProjRepoSuspenseQuery
>
export type AllProjRepoQueryResult = Apollo.QueryResult<
	AllProjRepoQuery,
	AllProjRepoQueryVariables
>
export const AllProjRepoAndProjClassifierDocument = gql`
    query AllProjRepoAndProjClassifier {
  projRepoAndProjClassifierCollection {
    edges {
      node {
        projRepoId
        projClassifierId
        internalCreatedAt
      }
    }
  }
}
    `

/**
 * __useAllProjRepoAndProjClassifierQuery__
 *
 * To run a query within a React component, call `useAllProjRepoAndProjClassifierQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjRepoAndProjClassifierQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjRepoAndProjClassifierQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProjRepoAndProjClassifierQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllProjRepoAndProjClassifierQuery,
		AllProjRepoAndProjClassifierQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<
		AllProjRepoAndProjClassifierQuery,
		AllProjRepoAndProjClassifierQueryVariables
	>(AllProjRepoAndProjClassifierDocument, options)
}
export function useAllProjRepoAndProjClassifierLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllProjRepoAndProjClassifierQuery,
		AllProjRepoAndProjClassifierQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		AllProjRepoAndProjClassifierQuery,
		AllProjRepoAndProjClassifierQueryVariables
	>(AllProjRepoAndProjClassifierDocument, options)
}
export function useAllProjRepoAndProjClassifierSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllProjRepoAndProjClassifierQuery,
		AllProjRepoAndProjClassifierQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		AllProjRepoAndProjClassifierQuery,
		AllProjRepoAndProjClassifierQueryVariables
	>(AllProjRepoAndProjClassifierDocument, options)
}
export type AllProjRepoAndProjClassifierQueryHookResult = ReturnType<
	typeof useAllProjRepoAndProjClassifierQuery
>
export type AllProjRepoAndProjClassifierLazyQueryHookResult = ReturnType<
	typeof useAllProjRepoAndProjClassifierLazyQuery
>
export type AllProjRepoAndProjClassifierSuspenseQueryHookResult = ReturnType<
	typeof useAllProjRepoAndProjClassifierSuspenseQuery
>
export type AllProjRepoAndProjClassifierQueryResult = Apollo.QueryResult<
	AllProjRepoAndProjClassifierQuery,
	AllProjRepoAndProjClassifierQueryVariables
>
export const AllProjRepoAndSbotLinCompanyDocument = gql`
    query AllProjRepoAndSbotLinCompany {
  projRepoAndSbotLinCompanyCollection {
    edges {
      node {
        projRepoId
        sbotLinCompanyId
        internalCreatedAt
      }
    }
  }
}
    `

/**
 * __useAllProjRepoAndSbotLinCompanyQuery__
 *
 * To run a query within a React component, call `useAllProjRepoAndSbotLinCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjRepoAndSbotLinCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjRepoAndSbotLinCompanyQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProjRepoAndSbotLinCompanyQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllProjRepoAndSbotLinCompanyQuery,
		AllProjRepoAndSbotLinCompanyQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<
		AllProjRepoAndSbotLinCompanyQuery,
		AllProjRepoAndSbotLinCompanyQueryVariables
	>(AllProjRepoAndSbotLinCompanyDocument, options)
}
export function useAllProjRepoAndSbotLinCompanyLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllProjRepoAndSbotLinCompanyQuery,
		AllProjRepoAndSbotLinCompanyQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		AllProjRepoAndSbotLinCompanyQuery,
		AllProjRepoAndSbotLinCompanyQueryVariables
	>(AllProjRepoAndSbotLinCompanyDocument, options)
}
export function useAllProjRepoAndSbotLinCompanySuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllProjRepoAndSbotLinCompanyQuery,
		AllProjRepoAndSbotLinCompanyQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		AllProjRepoAndSbotLinCompanyQuery,
		AllProjRepoAndSbotLinCompanyQueryVariables
	>(AllProjRepoAndSbotLinCompanyDocument, options)
}
export type AllProjRepoAndSbotLinCompanyQueryHookResult = ReturnType<
	typeof useAllProjRepoAndSbotLinCompanyQuery
>
export type AllProjRepoAndSbotLinCompanyLazyQueryHookResult = ReturnType<
	typeof useAllProjRepoAndSbotLinCompanyLazyQuery
>
export type AllProjRepoAndSbotLinCompanySuspenseQueryHookResult = ReturnType<
	typeof useAllProjRepoAndSbotLinCompanySuspenseQuery
>
export type AllProjRepoAndSbotLinCompanyQueryResult = Apollo.QueryResult<
	AllProjRepoAndSbotLinCompanyQuery,
	AllProjRepoAndSbotLinCompanyQueryVariables
>
export const AllProjRepoAndSbotLinProfileDocument = gql`
    query AllProjRepoAndSbotLinProfile {
  projRepoAndSbotLinProfileCollection {
    edges {
      node {
        projRepoId
        sbotLinProfileId
        internalCreatedAt
      }
    }
  }
}
    `

/**
 * __useAllProjRepoAndSbotLinProfileQuery__
 *
 * To run a query within a React component, call `useAllProjRepoAndSbotLinProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjRepoAndSbotLinProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjRepoAndSbotLinProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProjRepoAndSbotLinProfileQuery(
	baseOptions?: Apollo.QueryHookOptions<
		AllProjRepoAndSbotLinProfileQuery,
		AllProjRepoAndSbotLinProfileQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<
		AllProjRepoAndSbotLinProfileQuery,
		AllProjRepoAndSbotLinProfileQueryVariables
	>(AllProjRepoAndSbotLinProfileDocument, options)
}
export function useAllProjRepoAndSbotLinProfileLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllProjRepoAndSbotLinProfileQuery,
		AllProjRepoAndSbotLinProfileQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		AllProjRepoAndSbotLinProfileQuery,
		AllProjRepoAndSbotLinProfileQueryVariables
	>(AllProjRepoAndSbotLinProfileDocument, options)
}
export function useAllProjRepoAndSbotLinProfileSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		AllProjRepoAndSbotLinProfileQuery,
		AllProjRepoAndSbotLinProfileQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		AllProjRepoAndSbotLinProfileQuery,
		AllProjRepoAndSbotLinProfileQueryVariables
	>(AllProjRepoAndSbotLinProfileDocument, options)
}
export type AllProjRepoAndSbotLinProfileQueryHookResult = ReturnType<
	typeof useAllProjRepoAndSbotLinProfileQuery
>
export type AllProjRepoAndSbotLinProfileLazyQueryHookResult = ReturnType<
	typeof useAllProjRepoAndSbotLinProfileLazyQuery
>
export type AllProjRepoAndSbotLinProfileSuspenseQueryHookResult = ReturnType<
	typeof useAllProjRepoAndSbotLinProfileSuspenseQuery
>
export type AllProjRepoAndSbotLinProfileQueryResult = Apollo.QueryResult<
	AllProjRepoAndSbotLinProfileQuery,
	AllProjRepoAndSbotLinProfileQueryVariables
>
export const DetailViewForkHistDocument = gql`
    query DetailViewForkHist($filter: GthbForkHistFilter) {
  gthbForkHistCollection(filter: $filter) {
    edges {
      node {
        gthbForkHistDate
        amount
      }
    }
  }
}
    `

/**
 * __useDetailViewForkHistQuery__
 *
 * To run a query within a React component, call `useDetailViewForkHistQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailViewForkHistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailViewForkHistQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDetailViewForkHistQuery(
	baseOptions?: Apollo.QueryHookOptions<
		DetailViewForkHistQuery,
		DetailViewForkHistQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<
		DetailViewForkHistQuery,
		DetailViewForkHistQueryVariables
	>(DetailViewForkHistDocument, options)
}
export function useDetailViewForkHistLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		DetailViewForkHistQuery,
		DetailViewForkHistQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		DetailViewForkHistQuery,
		DetailViewForkHistQueryVariables
	>(DetailViewForkHistDocument, options)
}
export function useDetailViewForkHistSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		DetailViewForkHistQuery,
		DetailViewForkHistQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		DetailViewForkHistQuery,
		DetailViewForkHistQueryVariables
	>(DetailViewForkHistDocument, options)
}
export type DetailViewForkHistQueryHookResult = ReturnType<
	typeof useDetailViewForkHistQuery
>
export type DetailViewForkHistLazyQueryHookResult = ReturnType<
	typeof useDetailViewForkHistLazyQuery
>
export type DetailViewForkHistSuspenseQueryHookResult = ReturnType<
	typeof useDetailViewForkHistSuspenseQuery
>
export type DetailViewForkHistQueryResult = Apollo.QueryResult<
	DetailViewForkHistQuery,
	DetailViewForkHistQueryVariables
>
export const DetailViewProjRepoTopDocument = gql`
    query DetailViewProjRepoTop($id: BigInt, $gthbStarHistFilter: GthbStarHistFilter, $gthbIssueHistFilter: GthbIssueHistFilter, $gthbForkHistFilter: GthbForkHistFilter) {
  projRepoCollection(filter: {gthbRepoId: {eq: $id}}) {
    edges {
      node {
        algoHnEli5
      }
    }
  }
}
    `

/**
 * __useDetailViewProjRepoTopQuery__
 *
 * To run a query within a React component, call `useDetailViewProjRepoTopQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailViewProjRepoTopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailViewProjRepoTopQuery({
 *   variables: {
 *      id: // value for 'id'
 *      gthbStarHistFilter: // value for 'gthbStarHistFilter'
 *      gthbIssueHistFilter: // value for 'gthbIssueHistFilter'
 *      gthbForkHistFilter: // value for 'gthbForkHistFilter'
 *   },
 * });
 */
export function useDetailViewProjRepoTopQuery(
	baseOptions?: Apollo.QueryHookOptions<
		DetailViewProjRepoTopQuery,
		DetailViewProjRepoTopQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<
		DetailViewProjRepoTopQuery,
		DetailViewProjRepoTopQueryVariables
	>(DetailViewProjRepoTopDocument, options)
}
export function useDetailViewProjRepoTopLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		DetailViewProjRepoTopQuery,
		DetailViewProjRepoTopQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		DetailViewProjRepoTopQuery,
		DetailViewProjRepoTopQueryVariables
	>(DetailViewProjRepoTopDocument, options)
}
export function useDetailViewProjRepoTopSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		DetailViewProjRepoTopQuery,
		DetailViewProjRepoTopQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		DetailViewProjRepoTopQuery,
		DetailViewProjRepoTopQueryVariables
	>(DetailViewProjRepoTopDocument, options)
}
export type DetailViewProjRepoTopQueryHookResult = ReturnType<
	typeof useDetailViewProjRepoTopQuery
>
export type DetailViewProjRepoTopLazyQueryHookResult = ReturnType<
	typeof useDetailViewProjRepoTopLazyQuery
>
export type DetailViewProjRepoTopSuspenseQueryHookResult = ReturnType<
	typeof useDetailViewProjRepoTopSuspenseQuery
>
export type DetailViewProjRepoTopQueryResult = Apollo.QueryResult<
	DetailViewProjRepoTopQuery,
	DetailViewProjRepoTopQueryVariables
>
export const ListBookmarkedGthbRepoDocument = gql`
    query ListBookmarkedGthbRepo($filter: GthbRepoFilter) {
  fListBookmarkedGthbRepo(filter: $filter) {
    edges {
      node {
        gthbRepoName
        gthbRepoDescription
        stargazerCount
        issuesTotalCount
        forksPerContributor
        forkCount
        contributorCount
        issuesTotalCount
        issuesPerContributor
        pullRequestsTotalCount
        gthbOwner {
          avatarUrl
          gthbOwnerLogin
        }
        gthbRepo {
          projRepoId
        }
      }
    }
  }
}
    `

/**
 * __useListBookmarkedGthbRepoQuery__
 *
 * To run a query within a React component, call `useListBookmarkedGthbRepoQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBookmarkedGthbRepoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBookmarkedGthbRepoQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useListBookmarkedGthbRepoQuery(
	baseOptions?: Apollo.QueryHookOptions<
		ListBookmarkedGthbRepoQuery,
		ListBookmarkedGthbRepoQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<
		ListBookmarkedGthbRepoQuery,
		ListBookmarkedGthbRepoQueryVariables
	>(ListBookmarkedGthbRepoDocument, options)
}
export function useListBookmarkedGthbRepoLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		ListBookmarkedGthbRepoQuery,
		ListBookmarkedGthbRepoQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		ListBookmarkedGthbRepoQuery,
		ListBookmarkedGthbRepoQueryVariables
	>(ListBookmarkedGthbRepoDocument, options)
}
export function useListBookmarkedGthbRepoSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		ListBookmarkedGthbRepoQuery,
		ListBookmarkedGthbRepoQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		ListBookmarkedGthbRepoQuery,
		ListBookmarkedGthbRepoQueryVariables
	>(ListBookmarkedGthbRepoDocument, options)
}
export type ListBookmarkedGthbRepoQueryHookResult = ReturnType<
	typeof useListBookmarkedGthbRepoQuery
>
export type ListBookmarkedGthbRepoLazyQueryHookResult = ReturnType<
	typeof useListBookmarkedGthbRepoLazyQuery
>
export type ListBookmarkedGthbRepoSuspenseQueryHookResult = ReturnType<
	typeof useListBookmarkedGthbRepoSuspenseQuery
>
export type ListBookmarkedGthbRepoQueryResult = Apollo.QueryResult<
	ListBookmarkedGthbRepoQuery,
	ListBookmarkedGthbRepoQueryVariables
>
export const ListTrendingGthbRepoDocument = gql`
    query ListTrendingGthbRepo($filter: GthbRepoFilter) {
  fListTrendingGthbRepo(filter: $filter) {
    edges {
      node {
        gthbRepoName
        gthbRepoDescription
        stargazerCount
        issuesTotalCount
        forksPerContributor
        forkCount
        contributorCount
        issuesTotalCount
        issuesPerContributor
        pullRequestsTotalCount
        gthbOwner {
          avatarUrl
          gthbOwnerLogin
        }
        gthbRepo {
          projRepoId
        }
      }
    }
  }
}
    `

/**
 * __useListTrendingGthbRepoQuery__
 *
 * To run a query within a React component, call `useListTrendingGthbRepoQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTrendingGthbRepoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTrendingGthbRepoQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useListTrendingGthbRepoQuery(
	baseOptions?: Apollo.QueryHookOptions<
		ListTrendingGthbRepoQuery,
		ListTrendingGthbRepoQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<
		ListTrendingGthbRepoQuery,
		ListTrendingGthbRepoQueryVariables
	>(ListTrendingGthbRepoDocument, options)
}
export function useListTrendingGthbRepoLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		ListTrendingGthbRepoQuery,
		ListTrendingGthbRepoQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		ListTrendingGthbRepoQuery,
		ListTrendingGthbRepoQueryVariables
	>(ListTrendingGthbRepoDocument, options)
}
export function useListTrendingGthbRepoSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		ListTrendingGthbRepoQuery,
		ListTrendingGthbRepoQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		ListTrendingGthbRepoQuery,
		ListTrendingGthbRepoQueryVariables
	>(ListTrendingGthbRepoDocument, options)
}
export type ListTrendingGthbRepoQueryHookResult = ReturnType<
	typeof useListTrendingGthbRepoQuery
>
export type ListTrendingGthbRepoLazyQueryHookResult = ReturnType<
	typeof useListTrendingGthbRepoLazyQuery
>
export type ListTrendingGthbRepoSuspenseQueryHookResult = ReturnType<
	typeof useListTrendingGthbRepoSuspenseQuery
>
export type ListTrendingGthbRepoQueryResult = Apollo.QueryResult<
	ListTrendingGthbRepoQuery,
	ListTrendingGthbRepoQueryVariables
>
export const ListViewGthbReposDocument = gql`
    query ListViewGthbRepos($filter: GthbRepoFilter) {
  gthbRepoCollection(filter: $filter) {
    edges {
      node {
        gthbRepoName
        gthbRepoDescription
        stargazerCount
        issuesTotalCount
        forksPerContributor
        forkCount
        contributorCount
        issuesTotalCount
        issuesPerContributor
        pullRequestsTotalCount
        gthbOwner {
          avatarUrl
          gthbOwnerLogin
        }
      }
      cursor
    }
  }
}
    `

/**
 * __useListViewGthbReposQuery__
 *
 * To run a query within a React component, call `useListViewGthbReposQuery` and pass it any options that fit your needs.
 * When your component renders, `useListViewGthbReposQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListViewGthbReposQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useListViewGthbReposQuery(
	baseOptions?: Apollo.QueryHookOptions<
		ListViewGthbReposQuery,
		ListViewGthbReposQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<
		ListViewGthbReposQuery,
		ListViewGthbReposQueryVariables
	>(ListViewGthbReposDocument, options)
}
export function useListViewGthbReposLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		ListViewGthbReposQuery,
		ListViewGthbReposQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		ListViewGthbReposQuery,
		ListViewGthbReposQueryVariables
	>(ListViewGthbReposDocument, options)
}
export function useListViewGthbReposSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		ListViewGthbReposQuery,
		ListViewGthbReposQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		ListViewGthbReposQuery,
		ListViewGthbReposQueryVariables
	>(ListViewGthbReposDocument, options)
}
export type ListViewGthbReposQueryHookResult = ReturnType<
	typeof useListViewGthbReposQuery
>
export type ListViewGthbReposLazyQueryHookResult = ReturnType<
	typeof useListViewGthbReposLazyQuery
>
export type ListViewGthbReposSuspenseQueryHookResult = ReturnType<
	typeof useListViewGthbReposSuspenseQuery
>
export type ListViewGthbReposQueryResult = Apollo.QueryResult<
	ListViewGthbReposQuery,
	ListViewGthbReposQueryVariables
>
export const SidebarProjCategoriesToProjBookmarksDocument = gql`
    query SidebarProjCategoriesToProjBookmarks {
  projCatCollection(orderBy: {title: DescNullsLast}) {
    edges {
      node {
        nodeId
        title
        projCatAndProjBookmarkCollection {
          edges {
            node {
              projBookmark {
                projRepo {
                  gthbRepo {
                    gthbRepoName
                    gthbOwner {
                      avatarUrl
                      gthbOwnerLogin
                    }
                  }
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

/**
 * __useSidebarProjCategoriesToProjBookmarksQuery__
 *
 * To run a query within a React component, call `useSidebarProjCategoriesToProjBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSidebarProjCategoriesToProjBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSidebarProjCategoriesToProjBookmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useSidebarProjCategoriesToProjBookmarksQuery(
	baseOptions?: Apollo.QueryHookOptions<
		SidebarProjCategoriesToProjBookmarksQuery,
		SidebarProjCategoriesToProjBookmarksQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<
		SidebarProjCategoriesToProjBookmarksQuery,
		SidebarProjCategoriesToProjBookmarksQueryVariables
	>(SidebarProjCategoriesToProjBookmarksDocument, options)
}
export function useSidebarProjCategoriesToProjBookmarksLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		SidebarProjCategoriesToProjBookmarksQuery,
		SidebarProjCategoriesToProjBookmarksQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<
		SidebarProjCategoriesToProjBookmarksQuery,
		SidebarProjCategoriesToProjBookmarksQueryVariables
	>(SidebarProjCategoriesToProjBookmarksDocument, options)
}
export function useSidebarProjCategoriesToProjBookmarksSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		SidebarProjCategoriesToProjBookmarksQuery,
		SidebarProjCategoriesToProjBookmarksQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<
		SidebarProjCategoriesToProjBookmarksQuery,
		SidebarProjCategoriesToProjBookmarksQueryVariables
	>(SidebarProjCategoriesToProjBookmarksDocument, options)
}
export type SidebarProjCategoriesToProjBookmarksQueryHookResult = ReturnType<
	typeof useSidebarProjCategoriesToProjBookmarksQuery
>
export type SidebarProjCategoriesToProjBookmarksLazyQueryHookResult =
	ReturnType<typeof useSidebarProjCategoriesToProjBookmarksLazyQuery>
export type SidebarProjCategoriesToProjBookmarksSuspenseQueryHookResult =
	ReturnType<typeof useSidebarProjCategoriesToProjBookmarksSuspenseQuery>
export type SidebarProjCategoriesToProjBookmarksQueryResult =
	Apollo.QueryResult<
		SidebarProjCategoriesToProjBookmarksQuery,
		SidebarProjCategoriesToProjBookmarksQueryVariables
	>
