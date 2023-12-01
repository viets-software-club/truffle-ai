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
  project: Project
  projectId: Scalars['UUID']
  userId: Scalars['UUID']
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
  founder: AssociatedPerson
  founderId: Scalars['UUID']
  id: Scalars['BigInt']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']
  project: Project
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
  addBookmark: Response
  addProjectByName: Response
  addProjectByUrl: Response
  deleteBookmark: Response
  /** Deletes zero or more records from the `AllowedUsers` collection */
  deleteFromAllowedUsersCollection: AllowedUsersDeleteResponse
  /** Deletes zero or more records from the `AssociatedPerson` collection */
  deleteFromAssociatedPersonCollection: AssociatedPersonDeleteResponse
  /** Deletes zero or more records from the `Bookmark` collection */
  deleteFromBookmarkCollection: BookmarkDeleteResponse
  /** Deletes zero or more records from the `FoundedBy` collection */
  deleteFromFoundedByCollection: FoundedByDeleteResponse
  /** Deletes zero or more records from the `Organization` collection */
  deleteFromOrganizationCollection: OrganizationDeleteResponse
  /** Deletes zero or more records from the `Project` collection */
  deleteFromProjectCollection: ProjectDeleteResponse
  editBookmarkCategory: Response
  /** Adds one or more `AllowedUsers` records to the collection */
  insertIntoAllowedUsersCollection?: Maybe<AllowedUsersInsertResponse>
  /** Adds one or more `AssociatedPerson` records to the collection */
  insertIntoAssociatedPersonCollection?: Maybe<AssociatedPersonInsertResponse>
  /** Adds one or more `Bookmark` records to the collection */
  insertIntoBookmarkCollection?: Maybe<BookmarkInsertResponse>
  /** Adds one or more `FoundedBy` records to the collection */
  insertIntoFoundedByCollection?: Maybe<FoundedByInsertResponse>
  /** Adds one or more `Organization` records to the collection */
  insertIntoOrganizationCollection?: Maybe<OrganizationInsertResponse>
  /** Adds one or more `Project` records to the collection */
  insertIntoProjectCollection?: Maybe<ProjectInsertResponse>
  renameBookmarkCategory: Response
  /** Updates zero or more records in the `AllowedUsers` collection */
  updateAllowedUsersCollection: AllowedUsersUpdateResponse
  /** Updates zero or more records in the `AssociatedPerson` collection */
  updateAssociatedPersonCollection: AssociatedPersonUpdateResponse
  /** Updates zero or more records in the `Bookmark` collection */
  updateBookmarkCollection: BookmarkUpdateResponse
  /** Updates zero or more records in the `FoundedBy` collection */
  updateFoundedByCollection: FoundedByUpdateResponse
  /** Updates zero or more records in the `Organization` collection */
  updateOrganizationCollection: OrganizationUpdateResponse
  /** Updates zero or more records in the `Project` collection */
  updateProjectCollection: ProjectUpdateResponse
}

/** The root type for creating and mutating data */
export type MutationAddBookmarkArgs = {
  category: Scalars['String']
  projectID: Scalars['String']
}

/** The root type for creating and mutating data */
export type MutationAddProjectByNameArgs = {
  bookmarkCategory: Scalars['String']
  name: Scalars['String']
  owner: Scalars['String']
}

/** The root type for creating and mutating data */
export type MutationAddProjectByUrlArgs = {
  bookmarkCategory: Scalars['String']
  url: Scalars['String']
}

/** The root type for creating and mutating data */
export type MutationDeleteBookmarkArgs = {
  projectID: Scalars['String']
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAllowedUsersCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AllowedUsersFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromAssociatedPersonCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AssociatedPersonFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromBookmarkCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<BookmarkFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromFoundedByCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<FoundedByFilter>
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
export type MutationEditBookmarkCategoryArgs = {
  newCategory: Scalars['String']
  projectID: Scalars['String']
}

/** The root type for creating and mutating data */
export type MutationInsertIntoAllowedUsersCollectionArgs = {
  objects: Array<AllowedUsersInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoAssociatedPersonCollectionArgs = {
  objects: Array<AssociatedPersonInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoBookmarkCollectionArgs = {
  objects: Array<BookmarkInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoFoundedByCollectionArgs = {
  objects: Array<FoundedByInsertInput>
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
export type MutationRenameBookmarkCategoryArgs = {
  newCategory: Scalars['String']
  oldCategory: Scalars['String']
}

/** The root type for creating and mutating data */
export type MutationUpdateAllowedUsersCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AllowedUsersFilter>
  set: AllowedUsersUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateAssociatedPersonCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<AssociatedPersonFilter>
  set: AssociatedPersonUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateBookmarkCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<BookmarkFilter>
  set: BookmarkUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateFoundedByCollectionArgs = {
  atMost?: Scalars['Int']
  filter?: InputMaybe<FoundedByFilter>
  set: FoundedByUpdateInput
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

/** The root type for querying data */
export type Query = {
  __typename?: 'Query'
  /** A pagable collection of type `AllowedUsers` */
  allowedUsersCollection?: Maybe<AllowedUsersConnection>
  /** A pagable collection of type `AssociatedPerson` */
  associatedPersonCollection?: Maybe<AssociatedPersonConnection>
  /** A pagable collection of type `Bookmark` */
  bookmarkCollection?: Maybe<BookmarkConnection>
  /** A pagable collection of type `FoundedBy` */
  foundedByCollection?: Maybe<FoundedByConnection>
  helloWorld: Scalars['String']
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>
  /** A pagable collection of type `Organization` */
  organizationCollection?: Maybe<OrganizationConnection>
  /** A pagable collection of type `Project` */
  projectCollection?: Maybe<ProjectConnection>
}

/** The root type for querying data */
export type QueryAllowedUsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AllowedUsersFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AllowedUsersOrderBy>>
}

/** The root type for querying data */
export type QueryAssociatedPersonCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<AssociatedPersonFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AssociatedPersonOrderBy>>
}

/** The root type for querying data */
export type QueryBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<BookmarkFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BookmarkOrderBy>>
}

/** The root type for querying data */
export type QueryFoundedByCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  filter?: InputMaybe<FoundedByFilter>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FoundedByOrderBy>>
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
        project: { __typename?: 'Project'; id: any }
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
        project: {
          __typename?: 'Project'
          id: any
          name?: string | null
          owningPerson?: any | null
          owningOrganization?: any | null
          associatedPerson?: { __typename?: 'AssociatedPerson'; avatarUrl?: string | null } | null
          organization?: { __typename?: 'Organization'; avatarUrl?: string | null } | null
        }
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
        about?: string | null
        eli5?: string | null
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
          about
          eli5
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
