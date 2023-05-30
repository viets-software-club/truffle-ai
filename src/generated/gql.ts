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

export type AssociatedPerson = Node & {
  __typename?: 'AssociatedPerson'
  associatedWith?: Maybe<Scalars['UUID']>
  avatarUrl?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  email?: Maybe<Scalars['String']>
  githubUrl?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  login?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  project?: Maybe<Project>
  repositoryCount?: Maybe<Scalars['Int']>
  twitterUsername?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
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
  associatedWith?: InputMaybe<UuidFilter>
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
  associatedWith?: InputMaybe<Scalars['UUID']>
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
  associatedWith?: InputMaybe<OrderByDirection>
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
  associatedWith?: InputMaybe<Scalars['UUID']>
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

export type DiscordChannel = SocialMediaPresence & {
  __typename?: 'DiscordChannel'
  accountName: Scalars['String']
  link: Scalars['String']
  memberCount: Scalars['Int']
  platform: Scalars['String']
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

export type GitHubInformation = {
  __typename?: 'GitHubInformation'
  about: Scalars['String']
  author: GitHubUser
  categories: Array<Maybe<Scalars['String']>>
  contributorsCount: Scalars['Int']
  eli5: Scalars['String']
  forkCount: Scalars['Int']
  issueCount: Scalars['Int']
  linkToRepo: Scalars['String']
  name: Scalars['String']
  programmingLanguages: Array<Maybe<Scalars['String']>>
  pullRequestCount: Scalars['Int']
  starCount: Scalars['Int']
  topThreeContributors: Array<Maybe<GitHubUser>>
  websiteOfRepo: Scalars['String']
}

export type GitHubUser = {
  __typename?: 'GitHubUser'
  email?: Maybe<Scalars['String']>
  employedAt?: Maybe<Scalars['String']>
  gitHubHandle: Scalars['String']
  name: Scalars['String']
  personalWebsite?: Maybe<Scalars['String']>
  repositoryCount: Scalars['Int']
  starCount: Scalars['Int']
  twitterHandle?: Maybe<Scalars['String']>
}

export type HackernewsTopPost = SocialMediaTopPost & {
  __typename?: 'HackernewsTopPost'
  commentCount: Scalars['Int']
  link: Scalars['String']
  platform: Scalars['String']
  pointCount: Scalars['Int']
  title: Scalars['String']
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

export type LinkedInAccount = SocialMediaPresence & {
  __typename?: 'LinkedInAccount'
  accountName: Scalars['String']
  followerCount: Scalars['Int']
  link: Scalars['String']
  platform: Scalars['String']
}

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation'
  /** Deletes zero or more records from the `AssociatedPerson` collection */
  deleteFromAssociatedPersonCollection: AssociatedPersonDeleteResponse
  /** Deletes zero or more records from the `Organization` collection */
  deleteFromOrganizationCollection: OrganizationDeleteResponse
  /** Deletes zero or more records from the `Project` collection */
  deleteFromProjectCollection: ProjectDeleteResponse
  /** Adds one or more `AssociatedPerson` records to the collection */
  insertIntoAssociatedPersonCollection?: Maybe<AssociatedPersonInsertResponse>
  /** Adds one or more `Organization` records to the collection */
  insertIntoOrganizationCollection?: Maybe<OrganizationInsertResponse>
  /** Adds one or more `Project` records to the collection */
  insertIntoProjectCollection?: Maybe<ProjectInsertResponse>
  /** Updates zero or more records in the `AssociatedPerson` collection */
  updateAssociatedPersonCollection: AssociatedPersonUpdateResponse
  /** Updates zero or more records in the `Organization` collection */
  updateOrganizationCollection: OrganizationUpdateResponse
  /** Updates zero or more records in the `Project` collection */
  updateProjectCollection: ProjectUpdateResponse
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAssociatedPersonCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AssociatedPersonFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromOrganizationCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<OrganizationFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromProjectCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<ProjectFilter>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoAssociatedPersonCollectionArgs = {
  objects: Array<AssociatedPersonInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoOrganizationCollectionArgs = {
  objects: Array<OrganizationInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoProjectCollectionArgs = {
  objects: Array<ProjectInsertInput>
}

/** The root type for creating and mutating data */
export type MutationUpdateAssociatedPersonCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AssociatedPersonFilter>
  set: AssociatedPersonUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateOrganizationCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<OrganizationFilter>
  set: OrganizationUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProjectCollectionArgs = {
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

export type Organization = Node & {
  __typename?: 'Organization'
  avatarUrl?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  email?: Maybe<Scalars['String']>
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

export type OrganizationInsertInput = {
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
  email?: InputMaybe<OrderByDirection>
  githubUrl?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  login?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  repositoryCount?: InputMaybe<OrderByDirection>
  twitterUsername?: InputMaybe<OrderByDirection>
  websiteUrl?: InputMaybe<OrderByDirection>
}

export type OrganizationUpdateInput = {
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

export type ProductHuntTopPost = SocialMediaTopPost & {
  __typename?: 'ProductHuntTopPost'
  commentCount: Scalars['Int']
  date: Scalars['String']
  descriptionPreview: Scalars['String']
  likeCount: Scalars['Int']
  link: Scalars['String']
  platform: Scalars['String']
  title: Scalars['String']
}

export type Project = Node & {
  __typename?: 'Project'
  about?: Maybe<Scalars['String']>
  associatedPersonCollection?: Maybe<AssociatedPersonConnection>
  contributorCount?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['Datetime']>
  eli5?: Maybe<Scalars['String']>
  forkCount?: Maybe<Scalars['Int']>
  gitHubInformation: GitHubInformation
  githubUrl?: Maybe<Scalars['String']>
  id: Scalars['ID']
  isBookmarked?: Maybe<Scalars['Boolean']>
  issueCount?: Maybe<Scalars['Int']>
  name: Scalars['String']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  organization?: Maybe<Organization>
  ownedBy: Scalars['UUID']
  pullRequestCount?: Maybe<Scalars['Int']>
  socialMediaAccounts: Array<Maybe<SocialMediaPresence>>
  socialMediaTopPosts: Array<Maybe<SocialMediaTopPost>>
  starCount?: Maybe<Scalars['Int']>
  starHistory?: Maybe<Array<Maybe<Scalars['Int']>>>
  websiteUrl?: Maybe<Scalars['String']>
}

export type ProjectAssociatedPersonCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AssociatedPersonFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociatedPersonOrderBy>>
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
  githubUrl?: InputMaybe<StringFilter>
  id?: InputMaybe<UuidFilter>
  isBookmarked?: InputMaybe<BooleanFilter>
  issueCount?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  ownedBy?: InputMaybe<UuidFilter>
  pullRequestCount?: InputMaybe<IntFilter>
  starCount?: InputMaybe<IntFilter>
  websiteUrl?: InputMaybe<StringFilter>
}

export type ProjectInsertInput = {
  about?: InputMaybe<Scalars['String']>
  contributorCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  eli5?: InputMaybe<Scalars['String']>
  forkCount?: InputMaybe<Scalars['Int']>
  githubUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  isBookmarked?: InputMaybe<Scalars['Boolean']>
  issueCount?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  ownedBy?: InputMaybe<Scalars['UUID']>
  pullRequestCount?: InputMaybe<Scalars['Int']>
  starCount?: InputMaybe<Scalars['Int']>
  starHistory?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
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
  githubUrl?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  isBookmarked?: InputMaybe<OrderByDirection>
  issueCount?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
  ownedBy?: InputMaybe<OrderByDirection>
  pullRequestCount?: InputMaybe<OrderByDirection>
  starCount?: InputMaybe<OrderByDirection>
  websiteUrl?: InputMaybe<OrderByDirection>
}

export type ProjectUpdateInput = {
  about?: InputMaybe<Scalars['String']>
  contributorCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  eli5?: InputMaybe<Scalars['String']>
  forkCount?: InputMaybe<Scalars['Int']>
  githubUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['UUID']>
  isBookmarked?: InputMaybe<Scalars['Boolean']>
  issueCount?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  ownedBy?: InputMaybe<Scalars['UUID']>
  pullRequestCount?: InputMaybe<Scalars['Int']>
  starCount?: InputMaybe<Scalars['Int']>
  starHistory?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
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
  /** A pagable collection of type `AssociatedPerson` */
  associatedPersonCollection?: Maybe<AssociatedPersonConnection>
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>
  /** A pagable collection of type `Organization` */
  organizationCollection?: Maybe<OrganizationConnection>
  /** A pagable collection of type `Project` */
  projectCollection?: Maybe<ProjectConnection>
  projects: Array<Project>
}

export type QueryAssociatedPersonCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AssociatedPersonFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociatedPersonOrderBy>>
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

export type SlackChannel = SocialMediaPresence & {
  __typename?: 'SlackChannel'
  accountName: Scalars['String']
  link: Scalars['String']
  memberCount: Scalars['Int']
  platform: Scalars['String']
}

export type SocialMediaPresence = {
  accountName: Scalars['String']
  link: Scalars['String']
  platform: Scalars['String']
}

export type SocialMediaTopPost = {
  link: Scalars['String']
  platform: Scalars['String']
  title: Scalars['String']
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

export type TwitterAccount = SocialMediaPresence & {
  __typename?: 'TwitterAccount'
  accountName: Scalars['String']
  followerCount: Scalars['Int']
  link: Scalars['String']
  platform: Scalars['String']
}

export type TwitterTopPost = SocialMediaTopPost & {
  __typename?: 'TwitterTopPost'
  commentCount: Scalars['Int']
  date: Scalars['String']
  likeCount: Scalars['Int']
  link: Scalars['String']
  platform: Scalars['String']
  retweetCount: Scalars['Int']
  title: Scalars['String']
  viewsCount: Scalars['Int']
}

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>
  in?: InputMaybe<Array<Scalars['UUID']>>
  is?: InputMaybe<FilterIs>
  neq?: InputMaybe<Scalars['UUID']>
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
        id: string
        nodeId: string
        eli5?: string | null
        about?: string | null
        name: string
        starCount?: number | null
        issueCount?: number | null
        forkCount?: number | null
        pullRequestCount?: number | null
        contributorCount?: number | null
        githubUrl?: string | null
        websiteUrl?: string | null
        organization?: {
          __typename?: 'Organization'
          id: any
          nodeId: string
          login?: string | null
          avatarUrl?: string | null
        } | null
      }
    }>
  } | null
}

export type TrendingProjectsQueryVariables = Exact<{ [key: string]: never }>

export type TrendingProjectsQuery = {
  __typename?: 'Query'
  projectCollection?: {
    __typename?: 'ProjectConnection'
    edges: Array<{
      __typename?: 'ProjectEdge'
      node: {
        __typename?: 'Project'
        id: string
        nodeId: string
        name: string
        starCount?: number | null
        issueCount?: number | null
        forkCount?: number | null
        pullRequestCount?: number | null
        contributorCount?: number | null
        websiteUrl?: string | null
        organization?: {
          __typename?: 'Organization'
          id: any
          nodeId: string
          login?: string | null
          avatarUrl?: string | null
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
          starCount
          issueCount
          forkCount
          pullRequestCount
          contributorCount
          githubUrl
          websiteUrl
          organization {
            id
            nodeId
            login
            avatarUrl
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
          starCount
          issueCount
          forkCount
          pullRequestCount
          contributorCount
          websiteUrl
          organization {
            id
            nodeId
            login
            avatarUrl
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
