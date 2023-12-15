export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigFloat: any;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Opaque: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']>;
  gt?: InputMaybe<Scalars['BigFloat']>;
  gte?: InputMaybe<Scalars['BigFloat']>;
  in?: InputMaybe<Array<Scalars['BigFloat']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']>;
  lte?: InputMaybe<Scalars['BigFloat']>;
  neq?: InputMaybe<Scalars['BigFloat']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

export type GithubForkHistory = Node & {
  __typename?: 'GithubForkHistory';
  amount: Scalars['BigInt'];
  createdAt: Scalars['Datetime'];
  forkDate: Scalars['Datetime'];
  githubForkHistoryId: Scalars['BigInt'];
  githubRepo: GithubRepo;
  githubRepoId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};

export type GithubForkHistoryConnection = {
  __typename?: 'GithubForkHistoryConnection';
  edges: Array<GithubForkHistoryEdge>;
  pageInfo: PageInfo;
};

export type GithubForkHistoryDeleteResponse = {
  __typename?: 'GithubForkHistoryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubForkHistory>;
};

export type GithubForkHistoryEdge = {
  __typename?: 'GithubForkHistoryEdge';
  cursor: Scalars['String'];
  node: GithubForkHistory;
};

export type GithubForkHistoryFilter = {
  amount?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubForkHistoryFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  forkDate?: InputMaybe<DatetimeFilter>;
  githubForkHistoryId?: InputMaybe<BigIntFilter>;
  githubRepoId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubForkHistoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubForkHistoryFilter>>;
};

export type GithubForkHistoryInsertInput = {
  amount?: InputMaybe<Scalars['BigInt']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  forkDate?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type GithubForkHistoryInsertResponse = {
  __typename?: 'GithubForkHistoryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubForkHistory>;
};

export type GithubForkHistoryOrderBy = {
  amount?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  forkDate?: InputMaybe<OrderByDirection>;
  githubForkHistoryId?: InputMaybe<OrderByDirection>;
  githubRepoId?: InputMaybe<OrderByDirection>;
};

export type GithubForkHistoryUpdateInput = {
  amount?: InputMaybe<Scalars['BigInt']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  forkDate?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type GithubForkHistoryUpdateResponse = {
  __typename?: 'GithubForkHistoryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubForkHistory>;
};

export type GithubIssueHistory = Node & {
  __typename?: 'GithubIssueHistory';
  amount: Scalars['BigInt'];
  createdAt: Scalars['Datetime'];
  githubIssueHistoryId: Scalars['BigInt'];
  githubRepo: GithubRepo;
  githubRepoId: Scalars['BigInt'];
  issueDate: Scalars['Datetime'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};

export type GithubIssueHistoryConnection = {
  __typename?: 'GithubIssueHistoryConnection';
  edges: Array<GithubIssueHistoryEdge>;
  pageInfo: PageInfo;
};

export type GithubIssueHistoryDeleteResponse = {
  __typename?: 'GithubIssueHistoryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubIssueHistory>;
};

export type GithubIssueHistoryEdge = {
  __typename?: 'GithubIssueHistoryEdge';
  cursor: Scalars['String'];
  node: GithubIssueHistory;
};

export type GithubIssueHistoryFilter = {
  amount?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubIssueHistoryFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  githubIssueHistoryId?: InputMaybe<BigIntFilter>;
  githubRepoId?: InputMaybe<BigIntFilter>;
  issueDate?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubIssueHistoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubIssueHistoryFilter>>;
};

export type GithubIssueHistoryInsertInput = {
  amount?: InputMaybe<Scalars['BigInt']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  issueDate?: InputMaybe<Scalars['Datetime']>;
};

export type GithubIssueHistoryInsertResponse = {
  __typename?: 'GithubIssueHistoryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubIssueHistory>;
};

export type GithubIssueHistoryOrderBy = {
  amount?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  githubIssueHistoryId?: InputMaybe<OrderByDirection>;
  githubRepoId?: InputMaybe<OrderByDirection>;
  issueDate?: InputMaybe<OrderByDirection>;
};

export type GithubIssueHistoryUpdateInput = {
  amount?: InputMaybe<Scalars['BigInt']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  issueDate?: InputMaybe<Scalars['Datetime']>;
};

export type GithubIssueHistoryUpdateResponse = {
  __typename?: 'GithubIssueHistoryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubIssueHistory>;
};

export type GithubLanguage = Node & {
  __typename?: 'GithubLanguage';
  color: Scalars['String'];
  createdAt: Scalars['Datetime'];
  githubLanguageId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  title: Scalars['String'];
};

export type GithubLanguageConnection = {
  __typename?: 'GithubLanguageConnection';
  edges: Array<GithubLanguageEdge>;
  pageInfo: PageInfo;
};

export type GithubLanguageDeleteResponse = {
  __typename?: 'GithubLanguageDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubLanguage>;
};

export type GithubLanguageEdge = {
  __typename?: 'GithubLanguageEdge';
  cursor: Scalars['String'];
  node: GithubLanguage;
};

export type GithubLanguageFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubLanguageFilter>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  githubLanguageId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubLanguageFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubLanguageFilter>>;
  title?: InputMaybe<StringFilter>;
};

export type GithubLanguageInsertInput = {
  color?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GithubLanguageInsertResponse = {
  __typename?: 'GithubLanguageInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubLanguage>;
};

export type GithubLanguageOrderBy = {
  color?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  githubLanguageId?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type GithubLanguageUpdateInput = {
  color?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GithubLanguageUpdateResponse = {
  __typename?: 'GithubLanguageUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubLanguage>;
};

export type GithubOrganization = Node & {
  __typename?: 'GithubOrganization';
  avatarUrl: Scalars['String'];
  createdAt: Scalars['Datetime'];
  description: Scalars['String'];
  descriptionHtml: Scalars['String'];
  email: Scalars['String'];
  githubOrganization: GithubOwner;
  githubOrganizationId: Scalars['BigInt'];
  login: Scalars['String'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  repositoriesTotalCount: Scalars['BigInt'];
  twitterUsername: Scalars['String'];
  url: Scalars['String'];
  websiteUrl: Scalars['String'];
};

export type GithubOrganizationConnection = {
  __typename?: 'GithubOrganizationConnection';
  edges: Array<GithubOrganizationEdge>;
  pageInfo: PageInfo;
};

export type GithubOrganizationDeleteResponse = {
  __typename?: 'GithubOrganizationDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubOrganization>;
};

export type GithubOrganizationEdge = {
  __typename?: 'GithubOrganizationEdge';
  cursor: Scalars['String'];
  node: GithubOrganization;
};

export type GithubOrganizationFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubOrganizationFilter>>;
  avatarUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  descriptionHtml?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  githubOrganizationId?: InputMaybe<BigIntFilter>;
  login?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubOrganizationFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubOrganizationFilter>>;
  repositoriesTotalCount?: InputMaybe<BigIntFilter>;
  twitterUsername?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  websiteUrl?: InputMaybe<StringFilter>;
};

export type GithubOrganizationInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionHtml?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  githubOrganizationId?: InputMaybe<Scalars['BigInt']>;
  login?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  repositoriesTotalCount?: InputMaybe<Scalars['BigInt']>;
  twitterUsername?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type GithubOrganizationInsertResponse = {
  __typename?: 'GithubOrganizationInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubOrganization>;
};

export type GithubOrganizationOrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  descriptionHtml?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  githubOrganizationId?: InputMaybe<OrderByDirection>;
  login?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  repositoriesTotalCount?: InputMaybe<OrderByDirection>;
  twitterUsername?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
  websiteUrl?: InputMaybe<OrderByDirection>;
};

export type GithubOrganizationUpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionHtml?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  githubOrganizationId?: InputMaybe<Scalars['BigInt']>;
  login?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  repositoriesTotalCount?: InputMaybe<Scalars['BigInt']>;
  twitterUsername?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type GithubOrganizationUpdateResponse = {
  __typename?: 'GithubOrganizationUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubOrganization>;
};

export type GithubOwner = Node & {
  __typename?: 'GithubOwner';
  createdAt: Scalars['Datetime'];
  githubOwner?: Maybe<GithubOrganization>;
  githubOwnerId: Scalars['BigInt'];
  githubRepoCollection: GithubRepoConnection;
  githubRepoContributorCollection: GithubRepoContributorConnection;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  type: Scalars['String'];
};


export type GithubOwnerGithubRepoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubRepoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubRepoOrderBy>>;
};


export type GithubOwnerGithubRepoContributorCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubRepoContributorFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubRepoContributorOrderBy>>;
};

export type GithubOwnerConnection = {
  __typename?: 'GithubOwnerConnection';
  edges: Array<GithubOwnerEdge>;
  pageInfo: PageInfo;
};

export type GithubOwnerDeleteResponse = {
  __typename?: 'GithubOwnerDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubOwner>;
};

export type GithubOwnerEdge = {
  __typename?: 'GithubOwnerEdge';
  cursor: Scalars['String'];
  node: GithubOwner;
};

export type GithubOwnerFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubOwnerFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  githubOwnerId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubOwnerFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubOwnerFilter>>;
  type?: InputMaybe<StringFilter>;
};

export type GithubOwnerInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  type?: InputMaybe<Scalars['String']>;
};

export type GithubOwnerInsertResponse = {
  __typename?: 'GithubOwnerInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubOwner>;
};

export type GithubOwnerOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  githubOwnerId?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
};

export type GithubOwnerUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  type?: InputMaybe<Scalars['String']>;
};

export type GithubOwnerUpdateResponse = {
  __typename?: 'GithubOwnerUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubOwner>;
};

export type GithubRepo = Node & {
  __typename?: 'GithubRepo';
  createdAt: Scalars['Datetime'];
  description: Scalars['String'];
  forkCount: Scalars['BigInt'];
  githubForkHistoryCollection: GithubForkHistoryConnection;
  githubIssueHistoryCollection: GithubIssueHistoryConnection;
  githubOwner: GithubOwner;
  githubOwnerId: Scalars['BigInt'];
  githubRepoContributorCollection: GithubRepoContributorConnection;
  githubRepoForkCollection: GithubRepoForkConnection;
  githubRepoId: Scalars['BigInt'];
  githubRepoIssueCollection: GithubRepoIssueConnection;
  githubStarCollection: GithubStarConnection;
  githubStarHistoryCollection: GithubStarHistoryConnection;
  githubTrendingCollection: GithubTrendingConnection;
  homepageUrl: Scalars['String'];
  isInOrganization: Scalars['Boolean'];
  issuesTotalCount: Scalars['BigInt'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  projectRepoCollection: ProjectRepoConnection;
  pullRequestsTotalCount: Scalars['BigInt'];
  stargazerCount: Scalars['BigInt'];
  url: Scalars['String'];
};


export type GithubRepoGithubForkHistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubForkHistoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubForkHistoryOrderBy>>;
};


export type GithubRepoGithubIssueHistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubIssueHistoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubIssueHistoryOrderBy>>;
};


export type GithubRepoGithubRepoContributorCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubRepoContributorFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubRepoContributorOrderBy>>;
};


export type GithubRepoGithubRepoForkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubRepoForkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubRepoForkOrderBy>>;
};


export type GithubRepoGithubRepoIssueCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubRepoIssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubRepoIssueOrderBy>>;
};


export type GithubRepoGithubStarCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubStarFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubStarOrderBy>>;
};


export type GithubRepoGithubStarHistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubStarHistoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubStarHistoryOrderBy>>;
};


export type GithubRepoGithubTrendingCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubTrendingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubTrendingOrderBy>>;
};


export type GithubRepoProjectRepoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoOrderBy>>;
};

export type GithubRepoAndGithubLanguage = Node & {
  __typename?: 'GithubRepoAndGithubLanguage';
  createdAt: Scalars['Datetime'];
  githubLanguageId: Scalars['BigInt'];
  githubRepoId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};

export type GithubRepoAndGithubLanguageConnection = {
  __typename?: 'GithubRepoAndGithubLanguageConnection';
  edges: Array<GithubRepoAndGithubLanguageEdge>;
  pageInfo: PageInfo;
};

export type GithubRepoAndGithubLanguageDeleteResponse = {
  __typename?: 'GithubRepoAndGithubLanguageDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoAndGithubLanguage>;
};

export type GithubRepoAndGithubLanguageEdge = {
  __typename?: 'GithubRepoAndGithubLanguageEdge';
  cursor: Scalars['String'];
  node: GithubRepoAndGithubLanguage;
};

export type GithubRepoAndGithubLanguageFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubRepoAndGithubLanguageFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  githubLanguageId?: InputMaybe<BigIntFilter>;
  githubRepoId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubRepoAndGithubLanguageFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubRepoAndGithubLanguageFilter>>;
};

export type GithubRepoAndGithubLanguageInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubLanguageId?: InputMaybe<Scalars['BigInt']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type GithubRepoAndGithubLanguageInsertResponse = {
  __typename?: 'GithubRepoAndGithubLanguageInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoAndGithubLanguage>;
};

export type GithubRepoAndGithubLanguageOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  githubLanguageId?: InputMaybe<OrderByDirection>;
  githubRepoId?: InputMaybe<OrderByDirection>;
};

export type GithubRepoAndGithubLanguageUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubLanguageId?: InputMaybe<Scalars['BigInt']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type GithubRepoAndGithubLanguageUpdateResponse = {
  __typename?: 'GithubRepoAndGithubLanguageUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoAndGithubLanguage>;
};

export type GithubRepoConnection = {
  __typename?: 'GithubRepoConnection';
  edges: Array<GithubRepoEdge>;
  pageInfo: PageInfo;
};

export type GithubRepoContributor = Node & {
  __typename?: 'GithubRepoContributor';
  contributions: Scalars['BigInt'];
  createdAt: Scalars['Datetime'];
  githubOwner: GithubOwner;
  githubOwnerId: Scalars['BigInt'];
  githubRepo: GithubRepo;
  githubRepoId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};

export type GithubRepoContributorConnection = {
  __typename?: 'GithubRepoContributorConnection';
  edges: Array<GithubRepoContributorEdge>;
  pageInfo: PageInfo;
};

export type GithubRepoContributorDeleteResponse = {
  __typename?: 'GithubRepoContributorDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoContributor>;
};

export type GithubRepoContributorEdge = {
  __typename?: 'GithubRepoContributorEdge';
  cursor: Scalars['String'];
  node: GithubRepoContributor;
};

export type GithubRepoContributorFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubRepoContributorFilter>>;
  contributions?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  githubOwnerId?: InputMaybe<BigIntFilter>;
  githubRepoId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubRepoContributorFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubRepoContributorFilter>>;
};

export type GithubRepoContributorInsertInput = {
  contributions?: InputMaybe<Scalars['BigInt']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubOwnerId?: InputMaybe<Scalars['BigInt']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type GithubRepoContributorInsertResponse = {
  __typename?: 'GithubRepoContributorInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoContributor>;
};

export type GithubRepoContributorOrderBy = {
  contributions?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  githubOwnerId?: InputMaybe<OrderByDirection>;
  githubRepoId?: InputMaybe<OrderByDirection>;
};

export type GithubRepoContributorUpdateInput = {
  contributions?: InputMaybe<Scalars['BigInt']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubOwnerId?: InputMaybe<Scalars['BigInt']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type GithubRepoContributorUpdateResponse = {
  __typename?: 'GithubRepoContributorUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoContributor>;
};

export type GithubRepoDeleteResponse = {
  __typename?: 'GithubRepoDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepo>;
};

export type GithubRepoEdge = {
  __typename?: 'GithubRepoEdge';
  cursor: Scalars['String'];
  node: GithubRepo;
};

export type GithubRepoFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubRepoFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  forkCount?: InputMaybe<BigIntFilter>;
  githubOwnerId?: InputMaybe<BigIntFilter>;
  githubRepoId?: InputMaybe<BigIntFilter>;
  homepageUrl?: InputMaybe<StringFilter>;
  isInOrganization?: InputMaybe<BooleanFilter>;
  issuesTotalCount?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubRepoFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubRepoFilter>>;
  pullRequestsTotalCount?: InputMaybe<BigIntFilter>;
  stargazerCount?: InputMaybe<BigIntFilter>;
  url?: InputMaybe<StringFilter>;
};

export type GithubRepoFork = Node & {
  __typename?: 'GithubRepoFork';
  createdAt: Scalars['Datetime'];
  githubRepo: GithubRepo;
  githubRepoForkId: Scalars['BigInt'];
  githubRepoId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};

export type GithubRepoForkConnection = {
  __typename?: 'GithubRepoForkConnection';
  edges: Array<GithubRepoForkEdge>;
  pageInfo: PageInfo;
};

export type GithubRepoForkDeleteResponse = {
  __typename?: 'GithubRepoForkDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoFork>;
};

export type GithubRepoForkEdge = {
  __typename?: 'GithubRepoForkEdge';
  cursor: Scalars['String'];
  node: GithubRepoFork;
};

export type GithubRepoForkFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubRepoForkFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  githubRepoForkId?: InputMaybe<BigIntFilter>;
  githubRepoId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubRepoForkFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubRepoForkFilter>>;
};

export type GithubRepoForkInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoForkId?: InputMaybe<Scalars['BigInt']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type GithubRepoForkInsertResponse = {
  __typename?: 'GithubRepoForkInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoFork>;
};

export type GithubRepoForkOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  githubRepoForkId?: InputMaybe<OrderByDirection>;
  githubRepoId?: InputMaybe<OrderByDirection>;
};

export type GithubRepoForkUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoForkId?: InputMaybe<Scalars['BigInt']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type GithubRepoForkUpdateResponse = {
  __typename?: 'GithubRepoForkUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoFork>;
};

export type GithubRepoInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  forkCount?: InputMaybe<Scalars['BigInt']>;
  githubOwnerId?: InputMaybe<Scalars['BigInt']>;
  homepageUrl?: InputMaybe<Scalars['String']>;
  isInOrganization?: InputMaybe<Scalars['Boolean']>;
  issuesTotalCount?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
  pullRequestsTotalCount?: InputMaybe<Scalars['BigInt']>;
  stargazerCount?: InputMaybe<Scalars['BigInt']>;
  url?: InputMaybe<Scalars['String']>;
};

export type GithubRepoInsertResponse = {
  __typename?: 'GithubRepoInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepo>;
};

export type GithubRepoIssue = Node & {
  __typename?: 'GithubRepoIssue';
  body: Scalars['String'];
  createdAt: Scalars['Datetime'];
  githubRepo: GithubRepo;
  githubRepoId: Scalars['BigInt'];
  githubRepoIssueId: Scalars['BigInt'];
  htmlUrl: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  state: Scalars['String'];
  title: Scalars['String'];
};

export type GithubRepoIssueConnection = {
  __typename?: 'GithubRepoIssueConnection';
  edges: Array<GithubRepoIssueEdge>;
  pageInfo: PageInfo;
};

export type GithubRepoIssueDeleteResponse = {
  __typename?: 'GithubRepoIssueDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoIssue>;
};

export type GithubRepoIssueEdge = {
  __typename?: 'GithubRepoIssueEdge';
  cursor: Scalars['String'];
  node: GithubRepoIssue;
};

export type GithubRepoIssueFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubRepoIssueFilter>>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  githubRepoId?: InputMaybe<BigIntFilter>;
  githubRepoIssueId?: InputMaybe<BigIntFilter>;
  htmlUrl?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubRepoIssueFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubRepoIssueFilter>>;
  state?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type GithubRepoIssueInsertInput = {
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  htmlUrl?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GithubRepoIssueInsertResponse = {
  __typename?: 'GithubRepoIssueInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoIssue>;
};

export type GithubRepoIssueOrderBy = {
  body?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  githubRepoId?: InputMaybe<OrderByDirection>;
  githubRepoIssueId?: InputMaybe<OrderByDirection>;
  htmlUrl?: InputMaybe<OrderByDirection>;
  state?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type GithubRepoIssueUpdateInput = {
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  htmlUrl?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GithubRepoIssueUpdateResponse = {
  __typename?: 'GithubRepoIssueUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepoIssue>;
};

export type GithubRepoOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  forkCount?: InputMaybe<OrderByDirection>;
  githubOwnerId?: InputMaybe<OrderByDirection>;
  githubRepoId?: InputMaybe<OrderByDirection>;
  homepageUrl?: InputMaybe<OrderByDirection>;
  isInOrganization?: InputMaybe<OrderByDirection>;
  issuesTotalCount?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  pullRequestsTotalCount?: InputMaybe<OrderByDirection>;
  stargazerCount?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
};

export type GithubRepoUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  forkCount?: InputMaybe<Scalars['BigInt']>;
  githubOwnerId?: InputMaybe<Scalars['BigInt']>;
  homepageUrl?: InputMaybe<Scalars['String']>;
  isInOrganization?: InputMaybe<Scalars['Boolean']>;
  issuesTotalCount?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
  pullRequestsTotalCount?: InputMaybe<Scalars['BigInt']>;
  stargazerCount?: InputMaybe<Scalars['BigInt']>;
  url?: InputMaybe<Scalars['String']>;
};

export type GithubRepoUpdateResponse = {
  __typename?: 'GithubRepoUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubRepo>;
};

export type GithubStar = Node & {
  __typename?: 'GithubStar';
  createdAt: Scalars['Datetime'];
  githubRepo: GithubRepo;
  githubRepoId: Scalars['BigInt'];
  githubStarId: Scalars['BigInt'];
  githubUser: GithubUser;
  githubUserId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  starredAt: Scalars['Datetime'];
};

export type GithubStarConnection = {
  __typename?: 'GithubStarConnection';
  edges: Array<GithubStarEdge>;
  pageInfo: PageInfo;
};

export type GithubStarDeleteResponse = {
  __typename?: 'GithubStarDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubStar>;
};

export type GithubStarEdge = {
  __typename?: 'GithubStarEdge';
  cursor: Scalars['String'];
  node: GithubStar;
};

export type GithubStarFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubStarFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  githubRepoId?: InputMaybe<BigIntFilter>;
  githubStarId?: InputMaybe<BigIntFilter>;
  githubUserId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubStarFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubStarFilter>>;
  starredAt?: InputMaybe<DatetimeFilter>;
};

export type GithubStarHistory = Node & {
  __typename?: 'GithubStarHistory';
  amount: Scalars['BigInt'];
  createdAt: Scalars['Datetime'];
  githubRepo: GithubRepo;
  githubRepoId: Scalars['BigInt'];
  githubStarHistoryId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  starDate: Scalars['Datetime'];
};

export type GithubStarHistoryConnection = {
  __typename?: 'GithubStarHistoryConnection';
  edges: Array<GithubStarHistoryEdge>;
  pageInfo: PageInfo;
};

export type GithubStarHistoryDeleteResponse = {
  __typename?: 'GithubStarHistoryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubStarHistory>;
};

export type GithubStarHistoryEdge = {
  __typename?: 'GithubStarHistoryEdge';
  cursor: Scalars['String'];
  node: GithubStarHistory;
};

export type GithubStarHistoryFilter = {
  amount?: InputMaybe<BigIntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubStarHistoryFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  githubRepoId?: InputMaybe<BigIntFilter>;
  githubStarHistoryId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubStarHistoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubStarHistoryFilter>>;
  starDate?: InputMaybe<DatetimeFilter>;
};

export type GithubStarHistoryInsertInput = {
  amount?: InputMaybe<Scalars['BigInt']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  starDate?: InputMaybe<Scalars['Datetime']>;
};

export type GithubStarHistoryInsertResponse = {
  __typename?: 'GithubStarHistoryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubStarHistory>;
};

export type GithubStarHistoryOrderBy = {
  amount?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  githubRepoId?: InputMaybe<OrderByDirection>;
  githubStarHistoryId?: InputMaybe<OrderByDirection>;
  starDate?: InputMaybe<OrderByDirection>;
};

export type GithubStarHistoryUpdateInput = {
  amount?: InputMaybe<Scalars['BigInt']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  starDate?: InputMaybe<Scalars['Datetime']>;
};

export type GithubStarHistoryUpdateResponse = {
  __typename?: 'GithubStarHistoryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubStarHistory>;
};

export type GithubStarInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  githubUserId?: InputMaybe<Scalars['BigInt']>;
  starredAt?: InputMaybe<Scalars['Datetime']>;
};

export type GithubStarInsertResponse = {
  __typename?: 'GithubStarInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubStar>;
};

export type GithubStarOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  githubRepoId?: InputMaybe<OrderByDirection>;
  githubStarId?: InputMaybe<OrderByDirection>;
  githubUserId?: InputMaybe<OrderByDirection>;
  starredAt?: InputMaybe<OrderByDirection>;
};

export type GithubStarUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  githubUserId?: InputMaybe<Scalars['BigInt']>;
  starredAt?: InputMaybe<Scalars['Datetime']>;
};

export type GithubStarUpdateResponse = {
  __typename?: 'GithubStarUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubStar>;
};

export type GithubTrending = Node & {
  __typename?: 'GithubTrending';
  createdAt: Scalars['Datetime'];
  dateRange: Scalars['String'];
  githubRepo: GithubRepo;
  githubRepoId: Scalars['BigInt'];
  githubTrendingId: Scalars['BigInt'];
  language: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};

export type GithubTrendingConnection = {
  __typename?: 'GithubTrendingConnection';
  edges: Array<GithubTrendingEdge>;
  pageInfo: PageInfo;
};

export type GithubTrendingDeleteResponse = {
  __typename?: 'GithubTrendingDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubTrending>;
};

export type GithubTrendingEdge = {
  __typename?: 'GithubTrendingEdge';
  cursor: Scalars['String'];
  node: GithubTrending;
};

export type GithubTrendingFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubTrendingFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  dateRange?: InputMaybe<StringFilter>;
  githubRepoId?: InputMaybe<BigIntFilter>;
  githubTrendingId?: InputMaybe<BigIntFilter>;
  language?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubTrendingFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubTrendingFilter>>;
};

export type GithubTrendingInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  dateRange?: InputMaybe<Scalars['String']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  language?: InputMaybe<Scalars['String']>;
};

export type GithubTrendingInsertResponse = {
  __typename?: 'GithubTrendingInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubTrending>;
};

export type GithubTrendingOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  dateRange?: InputMaybe<OrderByDirection>;
  githubRepoId?: InputMaybe<OrderByDirection>;
  githubTrendingId?: InputMaybe<OrderByDirection>;
  language?: InputMaybe<OrderByDirection>;
};

export type GithubTrendingUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  dateRange?: InputMaybe<Scalars['String']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  language?: InputMaybe<Scalars['String']>;
};

export type GithubTrendingUpdateResponse = {
  __typename?: 'GithubTrendingUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubTrending>;
};

export type GithubUser = Node & {
  __typename?: 'GithubUser';
  avatarUrl: Scalars['String'];
  bio: Scalars['String'];
  bioHtml: Scalars['String'];
  company: Scalars['String'];
  companyHtml: Scalars['String'];
  createdAt: Scalars['Datetime'];
  email: Scalars['String'];
  followersTotalCount: Scalars['String'];
  githubStarCollection: GithubStarConnection;
  githubUser: GithubOwner;
  githubUserId: Scalars['BigInt'];
  login: Scalars['String'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  repositoriesTotalCount: Scalars['BigInt'];
  twitterUsername: Scalars['String'];
  url: Scalars['String'];
  websiteUrl: Scalars['String'];
};


export type GithubUserGithubStarCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubStarFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubStarOrderBy>>;
};

export type GithubUserConnection = {
  __typename?: 'GithubUserConnection';
  edges: Array<GithubUserEdge>;
  pageInfo: PageInfo;
};

export type GithubUserDeleteResponse = {
  __typename?: 'GithubUserDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubUser>;
};

export type GithubUserEdge = {
  __typename?: 'GithubUserEdge';
  cursor: Scalars['String'];
  node: GithubUser;
};

export type GithubUserFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<GithubUserFilter>>;
  avatarUrl?: InputMaybe<StringFilter>;
  bio?: InputMaybe<StringFilter>;
  bioHtml?: InputMaybe<StringFilter>;
  company?: InputMaybe<StringFilter>;
  companyHtml?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  followersTotalCount?: InputMaybe<StringFilter>;
  githubUserId?: InputMaybe<BigIntFilter>;
  login?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<GithubUserFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<GithubUserFilter>>;
  repositoriesTotalCount?: InputMaybe<BigIntFilter>;
  twitterUsername?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  websiteUrl?: InputMaybe<StringFilter>;
};

export type GithubUserInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bioHtml?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  companyHtml?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  followersTotalCount?: InputMaybe<Scalars['String']>;
  githubUserId?: InputMaybe<Scalars['BigInt']>;
  login?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  repositoriesTotalCount?: InputMaybe<Scalars['BigInt']>;
  twitterUsername?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type GithubUserInsertResponse = {
  __typename?: 'GithubUserInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubUser>;
};

export type GithubUserOrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>;
  bio?: InputMaybe<OrderByDirection>;
  bioHtml?: InputMaybe<OrderByDirection>;
  company?: InputMaybe<OrderByDirection>;
  companyHtml?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  followersTotalCount?: InputMaybe<OrderByDirection>;
  githubUserId?: InputMaybe<OrderByDirection>;
  login?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  repositoriesTotalCount?: InputMaybe<OrderByDirection>;
  twitterUsername?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
  websiteUrl?: InputMaybe<OrderByDirection>;
};

export type GithubUserUpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bioHtml?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  companyHtml?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  followersTotalCount?: InputMaybe<Scalars['String']>;
  githubUserId?: InputMaybe<Scalars['BigInt']>;
  login?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  repositoriesTotalCount?: InputMaybe<Scalars['BigInt']>;
  twitterUsername?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type GithubUserUpdateResponse = {
  __typename?: 'GithubUserUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<GithubUser>;
};

export type HackernewsStory = Node & {
  __typename?: 'HackernewsStory';
  author: Scalars['String'];
  comments: Scalars['String'];
  createdAt: Scalars['Datetime'];
  hackernewsStoryAndHackernewsTagCollection: HackernewsStoryAndHackernewsTagConnection;
  hackernewsStoryId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  points: Scalars['BigInt'];
  projectRepoAndHackernewsStoryCollection: ProjectRepoAndHackernewsStoryConnection;
  storyText: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};


export type HackernewsStoryHackernewsStoryAndHackernewsTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<HackernewsStoryAndHackernewsTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HackernewsStoryAndHackernewsTagOrderBy>>;
};


export type HackernewsStoryProjectRepoAndHackernewsStoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoAndHackernewsStoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoAndHackernewsStoryOrderBy>>;
};

export type HackernewsStoryAndHackernewsTag = Node & {
  __typename?: 'HackernewsStoryAndHackernewsTag';
  createdAt: Scalars['Datetime'];
  hackernewsStory: HackernewsStory;
  hackernewsStoryId: Scalars['BigInt'];
  hackernewsTag: HackernewsTag;
  hackernewsTagId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};

export type HackernewsStoryAndHackernewsTagConnection = {
  __typename?: 'HackernewsStoryAndHackernewsTagConnection';
  edges: Array<HackernewsStoryAndHackernewsTagEdge>;
  pageInfo: PageInfo;
};

export type HackernewsStoryAndHackernewsTagDeleteResponse = {
  __typename?: 'HackernewsStoryAndHackernewsTagDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<HackernewsStoryAndHackernewsTag>;
};

export type HackernewsStoryAndHackernewsTagEdge = {
  __typename?: 'HackernewsStoryAndHackernewsTagEdge';
  cursor: Scalars['String'];
  node: HackernewsStoryAndHackernewsTag;
};

export type HackernewsStoryAndHackernewsTagFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<HackernewsStoryAndHackernewsTagFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  hackernewsStoryId?: InputMaybe<BigIntFilter>;
  hackernewsTagId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<HackernewsStoryAndHackernewsTagFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<HackernewsStoryAndHackernewsTagFilter>>;
};

export type HackernewsStoryAndHackernewsTagInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  hackernewsStoryId?: InputMaybe<Scalars['BigInt']>;
  hackernewsTagId?: InputMaybe<Scalars['BigInt']>;
};

export type HackernewsStoryAndHackernewsTagInsertResponse = {
  __typename?: 'HackernewsStoryAndHackernewsTagInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<HackernewsStoryAndHackernewsTag>;
};

export type HackernewsStoryAndHackernewsTagOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  hackernewsStoryId?: InputMaybe<OrderByDirection>;
  hackernewsTagId?: InputMaybe<OrderByDirection>;
};

export type HackernewsStoryAndHackernewsTagUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  hackernewsStoryId?: InputMaybe<Scalars['BigInt']>;
  hackernewsTagId?: InputMaybe<Scalars['BigInt']>;
};

export type HackernewsStoryAndHackernewsTagUpdateResponse = {
  __typename?: 'HackernewsStoryAndHackernewsTagUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<HackernewsStoryAndHackernewsTag>;
};

export type HackernewsStoryConnection = {
  __typename?: 'HackernewsStoryConnection';
  edges: Array<HackernewsStoryEdge>;
  pageInfo: PageInfo;
};

export type HackernewsStoryDeleteResponse = {
  __typename?: 'HackernewsStoryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<HackernewsStory>;
};

export type HackernewsStoryEdge = {
  __typename?: 'HackernewsStoryEdge';
  cursor: Scalars['String'];
  node: HackernewsStory;
};

export type HackernewsStoryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<HackernewsStoryFilter>>;
  author?: InputMaybe<StringFilter>;
  comments?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  hackernewsStoryId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<HackernewsStoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<HackernewsStoryFilter>>;
  points?: InputMaybe<BigIntFilter>;
  storyText?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type HackernewsStoryInsertInput = {
  author?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  points?: InputMaybe<Scalars['BigInt']>;
  storyText?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type HackernewsStoryInsertResponse = {
  __typename?: 'HackernewsStoryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<HackernewsStory>;
};

export type HackernewsStoryOrderBy = {
  author?: InputMaybe<OrderByDirection>;
  comments?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  hackernewsStoryId?: InputMaybe<OrderByDirection>;
  points?: InputMaybe<OrderByDirection>;
  storyText?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
};

export type HackernewsStoryUpdateInput = {
  author?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  points?: InputMaybe<Scalars['BigInt']>;
  storyText?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type HackernewsStoryUpdateResponse = {
  __typename?: 'HackernewsStoryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<HackernewsStory>;
};

export type HackernewsTag = Node & {
  __typename?: 'HackernewsTag';
  createdAt: Scalars['Datetime'];
  hackernewsStoryAndHackernewsTagCollection: HackernewsStoryAndHackernewsTagConnection;
  hackernewsTagId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  title: Scalars['String'];
};


export type HackernewsTagHackernewsStoryAndHackernewsTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<HackernewsStoryAndHackernewsTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HackernewsStoryAndHackernewsTagOrderBy>>;
};

export type HackernewsTagConnection = {
  __typename?: 'HackernewsTagConnection';
  edges: Array<HackernewsTagEdge>;
  pageInfo: PageInfo;
};

export type HackernewsTagDeleteResponse = {
  __typename?: 'HackernewsTagDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<HackernewsTag>;
};

export type HackernewsTagEdge = {
  __typename?: 'HackernewsTagEdge';
  cursor: Scalars['String'];
  node: HackernewsTag;
};

export type HackernewsTagFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<HackernewsTagFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  hackernewsTagId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<HackernewsTagFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<HackernewsTagFilter>>;
  title?: InputMaybe<StringFilter>;
};

export type HackernewsTagInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  hackernewsTagId?: InputMaybe<Scalars['BigInt']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HackernewsTagInsertResponse = {
  __typename?: 'HackernewsTagInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<HackernewsTag>;
};

export type HackernewsTagOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  hackernewsTagId?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type HackernewsTagUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  hackernewsTagId?: InputMaybe<Scalars['BigInt']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HackernewsTagUpdateResponse = {
  __typename?: 'HackernewsTagUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<HackernewsTag>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>;
};

export type Instance1 = Node & {
  __typename?: 'Instance1';
  created_at: Scalars['Datetime'];
  id: Scalars['BigInt'];
  instance2Collection?: Maybe<Instance2Connection>;
  name?: Maybe<Scalars['String']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};


export type Instance1Instance2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Instance2Filter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Instance2OrderBy>>;
};

export type Instance1Connection = {
  __typename?: 'Instance1Connection';
  edges: Array<Instance1Edge>;
  pageInfo: PageInfo;
};

export type Instance1DeleteResponse = {
  __typename?: 'Instance1DeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Instance1>;
};

export type Instance1Edge = {
  __typename?: 'Instance1Edge';
  cursor: Scalars['String'];
  node: Instance1;
};

export type Instance1Filter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Instance1Filter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Instance1Filter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Instance1Filter>>;
};

export type Instance1InsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Instance1InsertResponse = {
  __typename?: 'Instance1InsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Instance1>;
};

export type Instance1OrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type Instance1UpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Instance1UpdateResponse = {
  __typename?: 'Instance1UpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Instance1>;
};

export type Instance2 = Node & {
  __typename?: 'Instance2';
  created_at: Scalars['Datetime'];
  for?: Maybe<Scalars['BigInt']>;
  id: Scalars['BigInt'];
  instance1?: Maybe<Instance1>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  share?: Maybe<Scalars['String']>;
};

export type Instance2Connection = {
  __typename?: 'Instance2Connection';
  edges: Array<Instance2Edge>;
  pageInfo: PageInfo;
};

export type Instance2DeleteResponse = {
  __typename?: 'Instance2DeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Instance2>;
};

export type Instance2Edge = {
  __typename?: 'Instance2Edge';
  cursor: Scalars['String'];
  node: Instance2;
};

export type Instance2Filter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Instance2Filter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  for?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Instance2Filter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Instance2Filter>>;
  share?: InputMaybe<StringFilter>;
};

export type Instance2InsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  for?: InputMaybe<Scalars['BigInt']>;
  share?: InputMaybe<Scalars['String']>;
};

export type Instance2InsertResponse = {
  __typename?: 'Instance2InsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Instance2>;
};

export type Instance2OrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  for?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  share?: InputMaybe<OrderByDirection>;
};

export type Instance2UpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  for?: InputMaybe<Scalars['BigInt']>;
  share?: InputMaybe<Scalars['String']>;
};

export type Instance2UpdateResponse = {
  __typename?: 'Instance2UpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Instance2>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

export type LinkedinProfileSearch = Node & {
  __typename?: 'LinkedinProfileSearch';
  about: Scalars['String'];
  createdAt: Scalars['Datetime'];
  followers: Scalars['BigInt'];
  language: Scalars['String'];
  linkedinProfileSearchId: Scalars['BigInt'];
  linkedinProfileSearchUpdateCollection: LinkedinProfileSearchUpdateConnection;
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  projectRepoAndLinkedinProfileSearchCollection: ProjectRepoAndLinkedinProfileSearchConnection;
  sphere: Scalars['String'];
  url: Scalars['String'];
};


export type LinkedinProfileSearchLinkedinProfileSearchUpdateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<LinkedinProfileSearchUpdateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LinkedinProfileSearchUpdateOrderBy>>;
};


export type LinkedinProfileSearchProjectRepoAndLinkedinProfileSearchCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoAndLinkedinProfileSearchFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoAndLinkedinProfileSearchOrderBy>>;
};

export type LinkedinProfileSearchConnection = {
  __typename?: 'LinkedinProfileSearchConnection';
  edges: Array<LinkedinProfileSearchEdge>;
  pageInfo: PageInfo;
};

export type LinkedinProfileSearchDeleteResponse = {
  __typename?: 'LinkedinProfileSearchDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<LinkedinProfileSearch>;
};

export type LinkedinProfileSearchEdge = {
  __typename?: 'LinkedinProfileSearchEdge';
  cursor: Scalars['String'];
  node: LinkedinProfileSearch;
};

export type LinkedinProfileSearchFilter = {
  about?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<LinkedinProfileSearchFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  followers?: InputMaybe<BigIntFilter>;
  language?: InputMaybe<StringFilter>;
  linkedinProfileSearchId?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<LinkedinProfileSearchFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<LinkedinProfileSearchFilter>>;
  sphere?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type LinkedinProfileSearchInsertInput = {
  about?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  followers?: InputMaybe<Scalars['BigInt']>;
  language?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sphere?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinkedinProfileSearchInsertResponse = {
  __typename?: 'LinkedinProfileSearchInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<LinkedinProfileSearch>;
};

export type LinkedinProfileSearchOrderBy = {
  about?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  followers?: InputMaybe<OrderByDirection>;
  language?: InputMaybe<OrderByDirection>;
  linkedinProfileSearchId?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  sphere?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
};

export type LinkedinProfileSearchUpdate = Node & {
  __typename?: 'LinkedinProfileSearchUpdate';
  commentsCount: Scalars['BigInt'];
  createdAt: Scalars['Datetime'];
  likesCount: Scalars['BigInt'];
  linkedinProfileSearch: LinkedinProfileSearch;
  linkedinProfileSearchId: Scalars['BigInt'];
  linkedinProfileSearchUpdateId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  title: Scalars['String'];
  updateText: Scalars['String'];
  updateTime: Scalars['String'];
};

export type LinkedinProfileSearchUpdateConnection = {
  __typename?: 'LinkedinProfileSearchUpdateConnection';
  edges: Array<LinkedinProfileSearchUpdateEdge>;
  pageInfo: PageInfo;
};

export type LinkedinProfileSearchUpdateDeleteResponse = {
  __typename?: 'LinkedinProfileSearchUpdateDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<LinkedinProfileSearchUpdate>;
};

export type LinkedinProfileSearchUpdateEdge = {
  __typename?: 'LinkedinProfileSearchUpdateEdge';
  cursor: Scalars['String'];
  node: LinkedinProfileSearchUpdate;
};

export type LinkedinProfileSearchUpdateFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<LinkedinProfileSearchUpdateFilter>>;
  commentsCount?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  likesCount?: InputMaybe<BigIntFilter>;
  linkedinProfileSearchId?: InputMaybe<BigIntFilter>;
  linkedinProfileSearchUpdateId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<LinkedinProfileSearchUpdateFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<LinkedinProfileSearchUpdateFilter>>;
  title?: InputMaybe<StringFilter>;
  updateText?: InputMaybe<StringFilter>;
  updateTime?: InputMaybe<StringFilter>;
};

export type LinkedinProfileSearchUpdateInput = {
  about?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  followers?: InputMaybe<Scalars['BigInt']>;
  language?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sphere?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LinkedinProfileSearchUpdateInsertInput = {
  commentsCount?: InputMaybe<Scalars['BigInt']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  likesCount?: InputMaybe<Scalars['BigInt']>;
  linkedinProfileSearchId?: InputMaybe<Scalars['BigInt']>;
  title?: InputMaybe<Scalars['String']>;
  updateText?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['String']>;
};

export type LinkedinProfileSearchUpdateInsertResponse = {
  __typename?: 'LinkedinProfileSearchUpdateInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<LinkedinProfileSearchUpdate>;
};

export type LinkedinProfileSearchUpdateOrderBy = {
  commentsCount?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  likesCount?: InputMaybe<OrderByDirection>;
  linkedinProfileSearchId?: InputMaybe<OrderByDirection>;
  linkedinProfileSearchUpdateId?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updateText?: InputMaybe<OrderByDirection>;
  updateTime?: InputMaybe<OrderByDirection>;
};

export type LinkedinProfileSearchUpdateResponse = {
  __typename?: 'LinkedinProfileSearchUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<LinkedinProfileSearch>;
};

export type LinkedinProfileSearchUpdateUpdateInput = {
  commentsCount?: InputMaybe<Scalars['BigInt']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  likesCount?: InputMaybe<Scalars['BigInt']>;
  linkedinProfileSearchId?: InputMaybe<Scalars['BigInt']>;
  title?: InputMaybe<Scalars['String']>;
  updateText?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['String']>;
};

export type LinkedinProfileSearchUpdateUpdateResponse = {
  __typename?: 'LinkedinProfileSearchUpdateUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<LinkedinProfileSearchUpdate>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `GithubForkHistory` collection */
  deleteFromGithubForkHistoryCollection: GithubForkHistoryDeleteResponse;
  /** Deletes zero or more records from the `GithubIssueHistory` collection */
  deleteFromGithubIssueHistoryCollection: GithubIssueHistoryDeleteResponse;
  /** Deletes zero or more records from the `GithubLanguage` collection */
  deleteFromGithubLanguageCollection: GithubLanguageDeleteResponse;
  /** Deletes zero or more records from the `GithubOrganization` collection */
  deleteFromGithubOrganizationCollection: GithubOrganizationDeleteResponse;
  /** Deletes zero or more records from the `GithubOwner` collection */
  deleteFromGithubOwnerCollection: GithubOwnerDeleteResponse;
  /** Deletes zero or more records from the `GithubRepoAndGithubLanguage` collection */
  deleteFromGithubRepoAndGithubLanguageCollection: GithubRepoAndGithubLanguageDeleteResponse;
  /** Deletes zero or more records from the `GithubRepo` collection */
  deleteFromGithubRepoCollection: GithubRepoDeleteResponse;
  /** Deletes zero or more records from the `GithubRepoContributor` collection */
  deleteFromGithubRepoContributorCollection: GithubRepoContributorDeleteResponse;
  /** Deletes zero or more records from the `GithubRepoFork` collection */
  deleteFromGithubRepoForkCollection: GithubRepoForkDeleteResponse;
  /** Deletes zero or more records from the `GithubRepoIssue` collection */
  deleteFromGithubRepoIssueCollection: GithubRepoIssueDeleteResponse;
  /** Deletes zero or more records from the `GithubStar` collection */
  deleteFromGithubStarCollection: GithubStarDeleteResponse;
  /** Deletes zero or more records from the `GithubStarHistory` collection */
  deleteFromGithubStarHistoryCollection: GithubStarHistoryDeleteResponse;
  /** Deletes zero or more records from the `GithubTrending` collection */
  deleteFromGithubTrendingCollection: GithubTrendingDeleteResponse;
  /** Deletes zero or more records from the `GithubUser` collection */
  deleteFromGithubUserCollection: GithubUserDeleteResponse;
  /** Deletes zero or more records from the `HackernewsStoryAndHackernewsTag` collection */
  deleteFromHackernewsStoryAndHackernewsTagCollection: HackernewsStoryAndHackernewsTagDeleteResponse;
  /** Deletes zero or more records from the `HackernewsStory` collection */
  deleteFromHackernewsStoryCollection: HackernewsStoryDeleteResponse;
  /** Deletes zero or more records from the `HackernewsTag` collection */
  deleteFromHackernewsTagCollection: HackernewsTagDeleteResponse;
  /** Deletes zero or more records from the `Instance1` collection */
  deleteFromInstance1Collection: Instance1DeleteResponse;
  /** Deletes zero or more records from the `Instance2` collection */
  deleteFromInstance2Collection: Instance2DeleteResponse;
  /** Deletes zero or more records from the `LinkedinProfileSearch` collection */
  deleteFromLinkedinProfileSearchCollection: LinkedinProfileSearchDeleteResponse;
  /** Deletes zero or more records from the `LinkedinProfileSearchUpdate` collection */
  deleteFromLinkedinProfileSearchUpdateCollection: LinkedinProfileSearchUpdateDeleteResponse;
  /** Deletes zero or more records from the `ProjectBookmark` collection */
  deleteFromProjectBookmarkCollection: ProjectBookmarkDeleteResponse;
  /** Deletes zero or more records from the `ProjectCategoryAndProjectBookmark` collection */
  deleteFromProjectCategoryAndProjectBookmarkCollection: ProjectCategoryAndProjectBookmarkDeleteResponse;
  /** Deletes zero or more records from the `ProjectCategory` collection */
  deleteFromProjectCategoryCollection: ProjectCategoryDeleteResponse;
  /** Deletes zero or more records from the `ProjectRepoAndHackernewsStory` collection */
  deleteFromProjectRepoAndHackernewsStoryCollection: ProjectRepoAndHackernewsStoryDeleteResponse;
  /** Deletes zero or more records from the `ProjectRepoAndLinkedinProfileSearch` collection */
  deleteFromProjectRepoAndLinkedinProfileSearchCollection: ProjectRepoAndLinkedinProfileSearchDeleteResponse;
  /** Deletes zero or more records from the `ProjectRepoAndTwitterSearch` collection */
  deleteFromProjectRepoAndTwitterSearchCollection: ProjectRepoAndTwitterSearchDeleteResponse;
  /** Deletes zero or more records from the `ProjectRepo` collection */
  deleteFromProjectRepoCollection: ProjectRepoDeleteResponse;
  /** Deletes zero or more records from the `ProjectRepoMetadata` collection */
  deleteFromProjectRepoMetadataCollection: ProjectRepoMetadataDeleteResponse;
  /** Deletes zero or more records from the `TwitterSearchAndUser` collection */
  deleteFromTwitterSearchAndUserCollection: TwitterSearchAndUserDeleteResponse;
  /** Deletes zero or more records from the `TwitterSearch` collection */
  deleteFromTwitterSearchCollection: TwitterSearchDeleteResponse;
  /** Deletes zero or more records from the `TwitterUser` collection */
  deleteFromTwitterUserCollection: TwitterUserDeleteResponse;
  /** Deletes zero or more records from the `UserApiKey` collection */
  deleteFromUserApiKeyCollection: UserApiKeyDeleteResponse;
  /** Deletes zero or more records from the `UsersAdmin` collection */
  deleteFromUsersAdminCollection: UsersAdminDeleteResponse;
  /** Deletes zero or more records from the `UsersWhitelist` collection */
  deleteFromUsersWhitelistCollection: UsersWhitelistDeleteResponse;
  deleteUser?: Maybe<Scalars['Boolean']>;
  /** Adds one or more `GithubForkHistory` records to the collection */
  insertIntoGithubForkHistoryCollection?: Maybe<GithubForkHistoryInsertResponse>;
  /** Adds one or more `GithubIssueHistory` records to the collection */
  insertIntoGithubIssueHistoryCollection?: Maybe<GithubIssueHistoryInsertResponse>;
  /** Adds one or more `GithubLanguage` records to the collection */
  insertIntoGithubLanguageCollection?: Maybe<GithubLanguageInsertResponse>;
  /** Adds one or more `GithubOrganization` records to the collection */
  insertIntoGithubOrganizationCollection?: Maybe<GithubOrganizationInsertResponse>;
  /** Adds one or more `GithubOwner` records to the collection */
  insertIntoGithubOwnerCollection?: Maybe<GithubOwnerInsertResponse>;
  /** Adds one or more `GithubRepoAndGithubLanguage` records to the collection */
  insertIntoGithubRepoAndGithubLanguageCollection?: Maybe<GithubRepoAndGithubLanguageInsertResponse>;
  /** Adds one or more `GithubRepo` records to the collection */
  insertIntoGithubRepoCollection?: Maybe<GithubRepoInsertResponse>;
  /** Adds one or more `GithubRepoContributor` records to the collection */
  insertIntoGithubRepoContributorCollection?: Maybe<GithubRepoContributorInsertResponse>;
  /** Adds one or more `GithubRepoFork` records to the collection */
  insertIntoGithubRepoForkCollection?: Maybe<GithubRepoForkInsertResponse>;
  /** Adds one or more `GithubRepoIssue` records to the collection */
  insertIntoGithubRepoIssueCollection?: Maybe<GithubRepoIssueInsertResponse>;
  /** Adds one or more `GithubStar` records to the collection */
  insertIntoGithubStarCollection?: Maybe<GithubStarInsertResponse>;
  /** Adds one or more `GithubStarHistory` records to the collection */
  insertIntoGithubStarHistoryCollection?: Maybe<GithubStarHistoryInsertResponse>;
  /** Adds one or more `GithubTrending` records to the collection */
  insertIntoGithubTrendingCollection?: Maybe<GithubTrendingInsertResponse>;
  /** Adds one or more `GithubUser` records to the collection */
  insertIntoGithubUserCollection?: Maybe<GithubUserInsertResponse>;
  /** Adds one or more `HackernewsStoryAndHackernewsTag` records to the collection */
  insertIntoHackernewsStoryAndHackernewsTagCollection?: Maybe<HackernewsStoryAndHackernewsTagInsertResponse>;
  /** Adds one or more `HackernewsStory` records to the collection */
  insertIntoHackernewsStoryCollection?: Maybe<HackernewsStoryInsertResponse>;
  /** Adds one or more `HackernewsTag` records to the collection */
  insertIntoHackernewsTagCollection?: Maybe<HackernewsTagInsertResponse>;
  /** Adds one or more `Instance1` records to the collection */
  insertIntoInstance1Collection?: Maybe<Instance1InsertResponse>;
  /** Adds one or more `Instance2` records to the collection */
  insertIntoInstance2Collection?: Maybe<Instance2InsertResponse>;
  /** Adds one or more `LinkedinProfileSearch` records to the collection */
  insertIntoLinkedinProfileSearchCollection?: Maybe<LinkedinProfileSearchInsertResponse>;
  /** Adds one or more `LinkedinProfileSearchUpdate` records to the collection */
  insertIntoLinkedinProfileSearchUpdateCollection?: Maybe<LinkedinProfileSearchUpdateInsertResponse>;
  /** Adds one or more `ProjectBookmark` records to the collection */
  insertIntoProjectBookmarkCollection?: Maybe<ProjectBookmarkInsertResponse>;
  /** Adds one or more `ProjectCategoryAndProjectBookmark` records to the collection */
  insertIntoProjectCategoryAndProjectBookmarkCollection?: Maybe<ProjectCategoryAndProjectBookmarkInsertResponse>;
  /** Adds one or more `ProjectCategory` records to the collection */
  insertIntoProjectCategoryCollection?: Maybe<ProjectCategoryInsertResponse>;
  /** Adds one or more `ProjectRepoAndHackernewsStory` records to the collection */
  insertIntoProjectRepoAndHackernewsStoryCollection?: Maybe<ProjectRepoAndHackernewsStoryInsertResponse>;
  /** Adds one or more `ProjectRepoAndLinkedinProfileSearch` records to the collection */
  insertIntoProjectRepoAndLinkedinProfileSearchCollection?: Maybe<ProjectRepoAndLinkedinProfileSearchInsertResponse>;
  /** Adds one or more `ProjectRepoAndTwitterSearch` records to the collection */
  insertIntoProjectRepoAndTwitterSearchCollection?: Maybe<ProjectRepoAndTwitterSearchInsertResponse>;
  /** Adds one or more `ProjectRepo` records to the collection */
  insertIntoProjectRepoCollection?: Maybe<ProjectRepoInsertResponse>;
  /** Adds one or more `ProjectRepoMetadata` records to the collection */
  insertIntoProjectRepoMetadataCollection?: Maybe<ProjectRepoMetadataInsertResponse>;
  /** Adds one or more `TwitterSearchAndUser` records to the collection */
  insertIntoTwitterSearchAndUserCollection?: Maybe<TwitterSearchAndUserInsertResponse>;
  /** Adds one or more `TwitterSearch` records to the collection */
  insertIntoTwitterSearchCollection?: Maybe<TwitterSearchInsertResponse>;
  /** Adds one or more `TwitterUser` records to the collection */
  insertIntoTwitterUserCollection?: Maybe<TwitterUserInsertResponse>;
  /** Adds one or more `UserApiKey` records to the collection */
  insertIntoUserApiKeyCollection?: Maybe<UserApiKeyInsertResponse>;
  /** Adds one or more `UsersAdmin` records to the collection */
  insertIntoUsersAdminCollection?: Maybe<UsersAdminInsertResponse>;
  /** Adds one or more `UsersWhitelist` records to the collection */
  insertIntoUsersWhitelistCollection?: Maybe<UsersWhitelistInsertResponse>;
  /** Updates zero or more records in the `GithubForkHistory` collection */
  updateGithubForkHistoryCollection: GithubForkHistoryUpdateResponse;
  /** Updates zero or more records in the `GithubIssueHistory` collection */
  updateGithubIssueHistoryCollection: GithubIssueHistoryUpdateResponse;
  /** Updates zero or more records in the `GithubLanguage` collection */
  updateGithubLanguageCollection: GithubLanguageUpdateResponse;
  /** Updates zero or more records in the `GithubOrganization` collection */
  updateGithubOrganizationCollection: GithubOrganizationUpdateResponse;
  /** Updates zero or more records in the `GithubOwner` collection */
  updateGithubOwnerCollection: GithubOwnerUpdateResponse;
  /** Updates zero or more records in the `GithubRepoAndGithubLanguage` collection */
  updateGithubRepoAndGithubLanguageCollection: GithubRepoAndGithubLanguageUpdateResponse;
  /** Updates zero or more records in the `GithubRepo` collection */
  updateGithubRepoCollection: GithubRepoUpdateResponse;
  /** Updates zero or more records in the `GithubRepoContributor` collection */
  updateGithubRepoContributorCollection: GithubRepoContributorUpdateResponse;
  /** Updates zero or more records in the `GithubRepoFork` collection */
  updateGithubRepoForkCollection: GithubRepoForkUpdateResponse;
  /** Updates zero or more records in the `GithubRepoIssue` collection */
  updateGithubRepoIssueCollection: GithubRepoIssueUpdateResponse;
  /** Updates zero or more records in the `GithubStar` collection */
  updateGithubStarCollection: GithubStarUpdateResponse;
  /** Updates zero or more records in the `GithubStarHistory` collection */
  updateGithubStarHistoryCollection: GithubStarHistoryUpdateResponse;
  /** Updates zero or more records in the `GithubTrending` collection */
  updateGithubTrendingCollection: GithubTrendingUpdateResponse;
  /** Updates zero or more records in the `GithubUser` collection */
  updateGithubUserCollection: GithubUserUpdateResponse;
  /** Updates zero or more records in the `HackernewsStoryAndHackernewsTag` collection */
  updateHackernewsStoryAndHackernewsTagCollection: HackernewsStoryAndHackernewsTagUpdateResponse;
  /** Updates zero or more records in the `HackernewsStory` collection */
  updateHackernewsStoryCollection: HackernewsStoryUpdateResponse;
  /** Updates zero or more records in the `HackernewsTag` collection */
  updateHackernewsTagCollection: HackernewsTagUpdateResponse;
  /** Updates zero or more records in the `Instance1` collection */
  updateInstance1Collection: Instance1UpdateResponse;
  /** Updates zero or more records in the `Instance2` collection */
  updateInstance2Collection: Instance2UpdateResponse;
  /** Updates zero or more records in the `LinkedinProfileSearch` collection */
  updateLinkedinProfileSearchCollection: LinkedinProfileSearchUpdateResponse;
  /** Updates zero or more records in the `LinkedinProfileSearchUpdate` collection */
  updateLinkedinProfileSearchUpdateCollection: LinkedinProfileSearchUpdateUpdateResponse;
  /** Updates zero or more records in the `ProjectBookmark` collection */
  updateProjectBookmarkCollection: ProjectBookmarkUpdateResponse;
  /** Updates zero or more records in the `ProjectCategoryAndProjectBookmark` collection */
  updateProjectCategoryAndProjectBookmarkCollection: ProjectCategoryAndProjectBookmarkUpdateResponse;
  /** Updates zero or more records in the `ProjectCategory` collection */
  updateProjectCategoryCollection: ProjectCategoryUpdateResponse;
  /** Updates zero or more records in the `ProjectRepoAndHackernewsStory` collection */
  updateProjectRepoAndHackernewsStoryCollection: ProjectRepoAndHackernewsStoryUpdateResponse;
  /** Updates zero or more records in the `ProjectRepoAndLinkedinProfileSearch` collection */
  updateProjectRepoAndLinkedinProfileSearchCollection: ProjectRepoAndLinkedinProfileSearchUpdateResponse;
  /** Updates zero or more records in the `ProjectRepoAndTwitterSearch` collection */
  updateProjectRepoAndTwitterSearchCollection: ProjectRepoAndTwitterSearchUpdateResponse;
  /** Updates zero or more records in the `ProjectRepo` collection */
  updateProjectRepoCollection: ProjectRepoUpdateResponse;
  /** Updates zero or more records in the `ProjectRepoMetadata` collection */
  updateProjectRepoMetadataCollection: ProjectRepoMetadataUpdateResponse;
  /** Updates zero or more records in the `TwitterSearchAndUser` collection */
  updateTwitterSearchAndUserCollection: TwitterSearchAndUserUpdateResponse;
  /** Updates zero or more records in the `TwitterSearch` collection */
  updateTwitterSearchCollection: TwitterSearchUpdateResponse;
  /** Updates zero or more records in the `TwitterUser` collection */
  updateTwitterUserCollection: TwitterUserUpdateResponse;
  /** Updates zero or more records in the `UserApiKey` collection */
  updateUserApiKeyCollection: UserApiKeyUpdateResponse;
  /** Updates zero or more records in the `UsersAdmin` collection */
  updateUsersAdminCollection: UsersAdminUpdateResponse;
  /** Updates zero or more records in the `UsersWhitelist` collection */
  updateUsersWhitelistCollection: UsersWhitelistUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubForkHistoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubForkHistoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubIssueHistoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubIssueHistoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubLanguageCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubLanguageFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubOrganizationCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubOrganizationFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubOwnerCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubOwnerFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubRepoAndGithubLanguageCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubRepoAndGithubLanguageFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubRepoCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubRepoFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubRepoContributorCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubRepoContributorFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubRepoForkCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubRepoForkFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubRepoIssueCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubRepoIssueFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubStarCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubStarFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubStarHistoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubStarHistoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubTrendingCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubTrendingFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromGithubUserCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubUserFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromHackernewsStoryAndHackernewsTagCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<HackernewsStoryAndHackernewsTagFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromHackernewsStoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<HackernewsStoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromHackernewsTagCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<HackernewsTagFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromInstance1CollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Instance1Filter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromInstance2CollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Instance2Filter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromLinkedinProfileSearchCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<LinkedinProfileSearchFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromLinkedinProfileSearchUpdateCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<LinkedinProfileSearchUpdateFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjectBookmarkCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectBookmarkFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjectCategoryAndProjectBookmarkCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectCategoryAndProjectBookmarkFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjectCategoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectCategoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjectRepoAndHackernewsStoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectRepoAndHackernewsStoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjectRepoAndLinkedinProfileSearchCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectRepoAndLinkedinProfileSearchFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjectRepoAndTwitterSearchCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectRepoAndTwitterSearchFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjectRepoCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectRepoFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProjectRepoMetadataCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectRepoMetadataFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromTwitterSearchAndUserCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TwitterSearchAndUserFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromTwitterSearchCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TwitterSearchFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromTwitterUserCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TwitterUserFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUserApiKeyCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UserApiKeyFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUsersAdminCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UsersAdminFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUsersWhitelistCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UsersWhitelistFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubForkHistoryCollectionArgs = {
  objects: Array<GithubForkHistoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubIssueHistoryCollectionArgs = {
  objects: Array<GithubIssueHistoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubLanguageCollectionArgs = {
  objects: Array<GithubLanguageInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubOrganizationCollectionArgs = {
  objects: Array<GithubOrganizationInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubOwnerCollectionArgs = {
  objects: Array<GithubOwnerInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubRepoAndGithubLanguageCollectionArgs = {
  objects: Array<GithubRepoAndGithubLanguageInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubRepoCollectionArgs = {
  objects: Array<GithubRepoInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubRepoContributorCollectionArgs = {
  objects: Array<GithubRepoContributorInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubRepoForkCollectionArgs = {
  objects: Array<GithubRepoForkInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubRepoIssueCollectionArgs = {
  objects: Array<GithubRepoIssueInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubStarCollectionArgs = {
  objects: Array<GithubStarInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubStarHistoryCollectionArgs = {
  objects: Array<GithubStarHistoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubTrendingCollectionArgs = {
  objects: Array<GithubTrendingInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoGithubUserCollectionArgs = {
  objects: Array<GithubUserInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoHackernewsStoryAndHackernewsTagCollectionArgs = {
  objects: Array<HackernewsStoryAndHackernewsTagInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoHackernewsStoryCollectionArgs = {
  objects: Array<HackernewsStoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoHackernewsTagCollectionArgs = {
  objects: Array<HackernewsTagInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoInstance1CollectionArgs = {
  objects: Array<Instance1InsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoInstance2CollectionArgs = {
  objects: Array<Instance2InsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoLinkedinProfileSearchCollectionArgs = {
  objects: Array<LinkedinProfileSearchInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoLinkedinProfileSearchUpdateCollectionArgs = {
  objects: Array<LinkedinProfileSearchUpdateInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjectBookmarkCollectionArgs = {
  objects: Array<ProjectBookmarkInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjectCategoryAndProjectBookmarkCollectionArgs = {
  objects: Array<ProjectCategoryAndProjectBookmarkInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjectCategoryCollectionArgs = {
  objects: Array<ProjectCategoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjectRepoAndHackernewsStoryCollectionArgs = {
  objects: Array<ProjectRepoAndHackernewsStoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjectRepoAndLinkedinProfileSearchCollectionArgs = {
  objects: Array<ProjectRepoAndLinkedinProfileSearchInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjectRepoAndTwitterSearchCollectionArgs = {
  objects: Array<ProjectRepoAndTwitterSearchInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjectRepoCollectionArgs = {
  objects: Array<ProjectRepoInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProjectRepoMetadataCollectionArgs = {
  objects: Array<ProjectRepoMetadataInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoTwitterSearchAndUserCollectionArgs = {
  objects: Array<TwitterSearchAndUserInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoTwitterSearchCollectionArgs = {
  objects: Array<TwitterSearchInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoTwitterUserCollectionArgs = {
  objects: Array<TwitterUserInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUserApiKeyCollectionArgs = {
  objects: Array<UserApiKeyInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUsersAdminCollectionArgs = {
  objects: Array<UsersAdminInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUsersWhitelistCollectionArgs = {
  objects: Array<UsersWhitelistInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubForkHistoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubForkHistoryFilter>;
  set: GithubForkHistoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubIssueHistoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubIssueHistoryFilter>;
  set: GithubIssueHistoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubLanguageCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubLanguageFilter>;
  set: GithubLanguageUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubOrganizationCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubOrganizationFilter>;
  set: GithubOrganizationUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubOwnerCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubOwnerFilter>;
  set: GithubOwnerUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubRepoAndGithubLanguageCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubRepoAndGithubLanguageFilter>;
  set: GithubRepoAndGithubLanguageUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubRepoCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubRepoFilter>;
  set: GithubRepoUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubRepoContributorCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubRepoContributorFilter>;
  set: GithubRepoContributorUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubRepoForkCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubRepoForkFilter>;
  set: GithubRepoForkUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubRepoIssueCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubRepoIssueFilter>;
  set: GithubRepoIssueUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubStarCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubStarFilter>;
  set: GithubStarUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubStarHistoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubStarHistoryFilter>;
  set: GithubStarHistoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubTrendingCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubTrendingFilter>;
  set: GithubTrendingUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateGithubUserCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GithubUserFilter>;
  set: GithubUserUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateHackernewsStoryAndHackernewsTagCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<HackernewsStoryAndHackernewsTagFilter>;
  set: HackernewsStoryAndHackernewsTagUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateHackernewsStoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<HackernewsStoryFilter>;
  set: HackernewsStoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateHackernewsTagCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<HackernewsTagFilter>;
  set: HackernewsTagUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateInstance1CollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Instance1Filter>;
  set: Instance1UpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateInstance2CollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<Instance2Filter>;
  set: Instance2UpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateLinkedinProfileSearchCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<LinkedinProfileSearchFilter>;
  set: LinkedinProfileSearchUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateLinkedinProfileSearchUpdateCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<LinkedinProfileSearchUpdateFilter>;
  set: LinkedinProfileSearchUpdateUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjectBookmarkCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectBookmarkFilter>;
  set: ProjectBookmarkUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjectCategoryAndProjectBookmarkCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectCategoryAndProjectBookmarkFilter>;
  set: ProjectCategoryAndProjectBookmarkUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjectCategoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectCategoryFilter>;
  set: ProjectCategoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjectRepoAndHackernewsStoryCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectRepoAndHackernewsStoryFilter>;
  set: ProjectRepoAndHackernewsStoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjectRepoAndLinkedinProfileSearchCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectRepoAndLinkedinProfileSearchFilter>;
  set: ProjectRepoAndLinkedinProfileSearchUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjectRepoAndTwitterSearchCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectRepoAndTwitterSearchFilter>;
  set: ProjectRepoAndTwitterSearchUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjectRepoCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectRepoFilter>;
  set: ProjectRepoUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProjectRepoMetadataCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProjectRepoMetadataFilter>;
  set: ProjectRepoMetadataUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateTwitterSearchAndUserCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TwitterSearchAndUserFilter>;
  set: TwitterSearchAndUserUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateTwitterSearchCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TwitterSearchFilter>;
  set: TwitterSearchUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateTwitterUserCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TwitterUserFilter>;
  set: TwitterUserUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateUserApiKeyCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UserApiKeyFilter>;
  set: UserApiKeyUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateUsersAdminCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UsersAdminFilter>;
  set: UsersAdminUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateUsersWhitelistCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UsersWhitelistFilter>;
  set: UsersWhitelistUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']>;
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
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type ProjectBookmark = Node & {
  __typename?: 'ProjectBookmark';
  createdAt: Scalars['Datetime'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  projectBookmarkId: Scalars['BigInt'];
  projectCategoryAndProjectBookmarkCollection: ProjectCategoryAndProjectBookmarkConnection;
  projectRepo: ProjectRepo;
  projectRepoId: Scalars['BigInt'];
  userId: Scalars['UUID'];
};


export type ProjectBookmarkProjectCategoryAndProjectBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectCategoryAndProjectBookmarkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectCategoryAndProjectBookmarkOrderBy>>;
};

export type ProjectBookmarkConnection = {
  __typename?: 'ProjectBookmarkConnection';
  edges: Array<ProjectBookmarkEdge>;
  pageInfo: PageInfo;
};

export type ProjectBookmarkDeleteResponse = {
  __typename?: 'ProjectBookmarkDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectBookmark>;
};

export type ProjectBookmarkEdge = {
  __typename?: 'ProjectBookmarkEdge';
  cursor: Scalars['String'];
  node: ProjectBookmark;
};

export type ProjectBookmarkFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjectBookmarkFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjectBookmarkFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjectBookmarkFilter>>;
  projectBookmarkId?: InputMaybe<BigIntFilter>;
  projectRepoId?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type ProjectBookmarkInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  projectRepoId?: InputMaybe<Scalars['BigInt']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type ProjectBookmarkInsertResponse = {
  __typename?: 'ProjectBookmarkInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectBookmark>;
};

export type ProjectBookmarkOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  projectBookmarkId?: InputMaybe<OrderByDirection>;
  projectRepoId?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type ProjectBookmarkUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  projectRepoId?: InputMaybe<Scalars['BigInt']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type ProjectBookmarkUpdateResponse = {
  __typename?: 'ProjectBookmarkUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectBookmark>;
};

export type ProjectCategory = Node & {
  __typename?: 'ProjectCategory';
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  projectCategoryAndProjectBookmarkCollection: ProjectCategoryAndProjectBookmarkConnection;
  projectCategoryId: Scalars['BigInt'];
  userId: Scalars['UUID'];
};


export type ProjectCategoryProjectCategoryAndProjectBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectCategoryAndProjectBookmarkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectCategoryAndProjectBookmarkOrderBy>>;
};

export type ProjectCategoryAndProjectBookmark = Node & {
  __typename?: 'ProjectCategoryAndProjectBookmark';
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  projectBookmark: ProjectBookmark;
  projectBookmarkId: Scalars['BigInt'];
  projectCategory: ProjectCategory;
  projectCategoryId: Scalars['BigInt'];
};

export type ProjectCategoryAndProjectBookmarkConnection = {
  __typename?: 'ProjectCategoryAndProjectBookmarkConnection';
  edges: Array<ProjectCategoryAndProjectBookmarkEdge>;
  pageInfo: PageInfo;
};

export type ProjectCategoryAndProjectBookmarkDeleteResponse = {
  __typename?: 'ProjectCategoryAndProjectBookmarkDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectCategoryAndProjectBookmark>;
};

export type ProjectCategoryAndProjectBookmarkEdge = {
  __typename?: 'ProjectCategoryAndProjectBookmarkEdge';
  cursor: Scalars['String'];
  node: ProjectCategoryAndProjectBookmark;
};

export type ProjectCategoryAndProjectBookmarkFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjectCategoryAndProjectBookmarkFilter>>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjectCategoryAndProjectBookmarkFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjectCategoryAndProjectBookmarkFilter>>;
  projectBookmarkId?: InputMaybe<BigIntFilter>;
  projectCategoryId?: InputMaybe<BigIntFilter>;
};

export type ProjectCategoryAndProjectBookmarkInsertInput = {
  projectBookmarkId?: InputMaybe<Scalars['BigInt']>;
  projectCategoryId?: InputMaybe<Scalars['BigInt']>;
};

export type ProjectCategoryAndProjectBookmarkInsertResponse = {
  __typename?: 'ProjectCategoryAndProjectBookmarkInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectCategoryAndProjectBookmark>;
};

export type ProjectCategoryAndProjectBookmarkOrderBy = {
  projectBookmarkId?: InputMaybe<OrderByDirection>;
  projectCategoryId?: InputMaybe<OrderByDirection>;
};

export type ProjectCategoryAndProjectBookmarkUpdateInput = {
  projectBookmarkId?: InputMaybe<Scalars['BigInt']>;
  projectCategoryId?: InputMaybe<Scalars['BigInt']>;
};

export type ProjectCategoryAndProjectBookmarkUpdateResponse = {
  __typename?: 'ProjectCategoryAndProjectBookmarkUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectCategoryAndProjectBookmark>;
};

export type ProjectCategoryConnection = {
  __typename?: 'ProjectCategoryConnection';
  edges: Array<ProjectCategoryEdge>;
  pageInfo: PageInfo;
};

export type ProjectCategoryDeleteResponse = {
  __typename?: 'ProjectCategoryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectCategory>;
};

export type ProjectCategoryEdge = {
  __typename?: 'ProjectCategoryEdge';
  cursor: Scalars['String'];
  node: ProjectCategory;
};

export type ProjectCategoryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjectCategoryFilter>>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjectCategoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjectCategoryFilter>>;
  projectCategoryId?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type ProjectCategoryInsertInput = {
  name?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type ProjectCategoryInsertResponse = {
  __typename?: 'ProjectCategoryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectCategory>;
};

export type ProjectCategoryOrderBy = {
  name?: InputMaybe<OrderByDirection>;
  projectCategoryId?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type ProjectCategoryUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type ProjectCategoryUpdateResponse = {
  __typename?: 'ProjectCategoryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectCategory>;
};

export type ProjectRepo = Node & {
  __typename?: 'ProjectRepo';
  createdAt: Scalars['Datetime'];
  githubRepo: GithubRepo;
  githubRepoId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  note: Scalars['String'];
  projectBookmarkCollection: ProjectBookmarkConnection;
  projectRepoAndHackernewsStoryCollection: ProjectRepoAndHackernewsStoryConnection;
  projectRepoAndLinkedinProfileSearchCollection: ProjectRepoAndLinkedinProfileSearchConnection;
  projectRepoAndTwitterSearchCollection: ProjectRepoAndTwitterSearchConnection;
  projectRepoId: Scalars['BigInt'];
  projectRepoMetadata: ProjectRepoMetadata;
  projectRepoMetadataId: Scalars['BigInt'];
};


export type ProjectRepoProjectBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectBookmarkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectBookmarkOrderBy>>;
};


export type ProjectRepoProjectRepoAndHackernewsStoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoAndHackernewsStoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoAndHackernewsStoryOrderBy>>;
};


export type ProjectRepoProjectRepoAndLinkedinProfileSearchCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoAndLinkedinProfileSearchFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoAndLinkedinProfileSearchOrderBy>>;
};


export type ProjectRepoProjectRepoAndTwitterSearchCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoAndTwitterSearchFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoAndTwitterSearchOrderBy>>;
};

export type ProjectRepoAndHackernewsStory = Node & {
  __typename?: 'ProjectRepoAndHackernewsStory';
  createdAt: Scalars['Datetime'];
  hackernewsStory: HackernewsStory;
  hackernewsStoryId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  projectRepo: ProjectRepo;
  projectRepoId: Scalars['BigInt'];
};

export type ProjectRepoAndHackernewsStoryConnection = {
  __typename?: 'ProjectRepoAndHackernewsStoryConnection';
  edges: Array<ProjectRepoAndHackernewsStoryEdge>;
  pageInfo: PageInfo;
};

export type ProjectRepoAndHackernewsStoryDeleteResponse = {
  __typename?: 'ProjectRepoAndHackernewsStoryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoAndHackernewsStory>;
};

export type ProjectRepoAndHackernewsStoryEdge = {
  __typename?: 'ProjectRepoAndHackernewsStoryEdge';
  cursor: Scalars['String'];
  node: ProjectRepoAndHackernewsStory;
};

export type ProjectRepoAndHackernewsStoryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjectRepoAndHackernewsStoryFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  hackernewsStoryId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjectRepoAndHackernewsStoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjectRepoAndHackernewsStoryFilter>>;
  projectRepoId?: InputMaybe<BigIntFilter>;
};

export type ProjectRepoAndHackernewsStoryInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  hackernewsStoryId?: InputMaybe<Scalars['BigInt']>;
  projectRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type ProjectRepoAndHackernewsStoryInsertResponse = {
  __typename?: 'ProjectRepoAndHackernewsStoryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoAndHackernewsStory>;
};

export type ProjectRepoAndHackernewsStoryOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  hackernewsStoryId?: InputMaybe<OrderByDirection>;
  projectRepoId?: InputMaybe<OrderByDirection>;
};

export type ProjectRepoAndHackernewsStoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  hackernewsStoryId?: InputMaybe<Scalars['BigInt']>;
  projectRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type ProjectRepoAndHackernewsStoryUpdateResponse = {
  __typename?: 'ProjectRepoAndHackernewsStoryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoAndHackernewsStory>;
};

export type ProjectRepoAndLinkedinProfileSearch = Node & {
  __typename?: 'ProjectRepoAndLinkedinProfileSearch';
  createdAt: Scalars['Datetime'];
  linkedinProfileSearch: LinkedinProfileSearch;
  linkedinProfileSearchId: Scalars['BigInt'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  projectRepo: ProjectRepo;
  projectRepoId: Scalars['BigInt'];
};

export type ProjectRepoAndLinkedinProfileSearchConnection = {
  __typename?: 'ProjectRepoAndLinkedinProfileSearchConnection';
  edges: Array<ProjectRepoAndLinkedinProfileSearchEdge>;
  pageInfo: PageInfo;
};

export type ProjectRepoAndLinkedinProfileSearchDeleteResponse = {
  __typename?: 'ProjectRepoAndLinkedinProfileSearchDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoAndLinkedinProfileSearch>;
};

export type ProjectRepoAndLinkedinProfileSearchEdge = {
  __typename?: 'ProjectRepoAndLinkedinProfileSearchEdge';
  cursor: Scalars['String'];
  node: ProjectRepoAndLinkedinProfileSearch;
};

export type ProjectRepoAndLinkedinProfileSearchFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjectRepoAndLinkedinProfileSearchFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  linkedinProfileSearchId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjectRepoAndLinkedinProfileSearchFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjectRepoAndLinkedinProfileSearchFilter>>;
  projectRepoId?: InputMaybe<BigIntFilter>;
};

export type ProjectRepoAndLinkedinProfileSearchInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  linkedinProfileSearchId?: InputMaybe<Scalars['BigInt']>;
  projectRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type ProjectRepoAndLinkedinProfileSearchInsertResponse = {
  __typename?: 'ProjectRepoAndLinkedinProfileSearchInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoAndLinkedinProfileSearch>;
};

export type ProjectRepoAndLinkedinProfileSearchOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  linkedinProfileSearchId?: InputMaybe<OrderByDirection>;
  projectRepoId?: InputMaybe<OrderByDirection>;
};

export type ProjectRepoAndLinkedinProfileSearchUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  linkedinProfileSearchId?: InputMaybe<Scalars['BigInt']>;
  projectRepoId?: InputMaybe<Scalars['BigInt']>;
};

export type ProjectRepoAndLinkedinProfileSearchUpdateResponse = {
  __typename?: 'ProjectRepoAndLinkedinProfileSearchUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoAndLinkedinProfileSearch>;
};

export type ProjectRepoAndTwitterSearch = Node & {
  __typename?: 'ProjectRepoAndTwitterSearch';
  createdAt: Scalars['Datetime'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  projectRepo: ProjectRepo;
  projectRepoId: Scalars['BigInt'];
  twitterSearch: TwitterSearch;
  twitterSearchId: Scalars['BigInt'];
};

export type ProjectRepoAndTwitterSearchConnection = {
  __typename?: 'ProjectRepoAndTwitterSearchConnection';
  edges: Array<ProjectRepoAndTwitterSearchEdge>;
  pageInfo: PageInfo;
};

export type ProjectRepoAndTwitterSearchDeleteResponse = {
  __typename?: 'ProjectRepoAndTwitterSearchDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoAndTwitterSearch>;
};

export type ProjectRepoAndTwitterSearchEdge = {
  __typename?: 'ProjectRepoAndTwitterSearchEdge';
  cursor: Scalars['String'];
  node: ProjectRepoAndTwitterSearch;
};

export type ProjectRepoAndTwitterSearchFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjectRepoAndTwitterSearchFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjectRepoAndTwitterSearchFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjectRepoAndTwitterSearchFilter>>;
  projectRepoId?: InputMaybe<BigIntFilter>;
  twitterSearchId?: InputMaybe<BigIntFilter>;
};

export type ProjectRepoAndTwitterSearchInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  projectRepoId?: InputMaybe<Scalars['BigInt']>;
  twitterSearchId?: InputMaybe<Scalars['BigInt']>;
};

export type ProjectRepoAndTwitterSearchInsertResponse = {
  __typename?: 'ProjectRepoAndTwitterSearchInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoAndTwitterSearch>;
};

export type ProjectRepoAndTwitterSearchOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  projectRepoId?: InputMaybe<OrderByDirection>;
  twitterSearchId?: InputMaybe<OrderByDirection>;
};

export type ProjectRepoAndTwitterSearchUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  projectRepoId?: InputMaybe<Scalars['BigInt']>;
  twitterSearchId?: InputMaybe<Scalars['BigInt']>;
};

export type ProjectRepoAndTwitterSearchUpdateResponse = {
  __typename?: 'ProjectRepoAndTwitterSearchUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoAndTwitterSearch>;
};

export type ProjectRepoConnection = {
  __typename?: 'ProjectRepoConnection';
  edges: Array<ProjectRepoEdge>;
  pageInfo: PageInfo;
};

export type ProjectRepoDeleteResponse = {
  __typename?: 'ProjectRepoDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepo>;
};

export type ProjectRepoEdge = {
  __typename?: 'ProjectRepoEdge';
  cursor: Scalars['String'];
  node: ProjectRepo;
};

export type ProjectRepoFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjectRepoFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  githubRepoId?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjectRepoFilter>;
  note?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjectRepoFilter>>;
  projectRepoId?: InputMaybe<BigIntFilter>;
  projectRepoMetadataId?: InputMaybe<BigIntFilter>;
};

export type ProjectRepoInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  note?: InputMaybe<Scalars['String']>;
  projectRepoMetadataId?: InputMaybe<Scalars['BigInt']>;
};

export type ProjectRepoInsertResponse = {
  __typename?: 'ProjectRepoInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepo>;
};

export type ProjectRepoMetadata = Node & {
  __typename?: 'ProjectRepoMetadata';
  createdAt: Scalars['Datetime'];
  hackernewsEli5: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  projectRepoCollection: ProjectRepoConnection;
  projectRepoMetadataId: Scalars['BigInt'];
  repoEli5: Scalars['String'];
};


export type ProjectRepoMetadataProjectRepoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoOrderBy>>;
};

export type ProjectRepoMetadataConnection = {
  __typename?: 'ProjectRepoMetadataConnection';
  edges: Array<ProjectRepoMetadataEdge>;
  pageInfo: PageInfo;
};

export type ProjectRepoMetadataDeleteResponse = {
  __typename?: 'ProjectRepoMetadataDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoMetadata>;
};

export type ProjectRepoMetadataEdge = {
  __typename?: 'ProjectRepoMetadataEdge';
  cursor: Scalars['String'];
  node: ProjectRepoMetadata;
};

export type ProjectRepoMetadataFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjectRepoMetadataFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  hackernewsEli5?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjectRepoMetadataFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjectRepoMetadataFilter>>;
  projectRepoMetadataId?: InputMaybe<BigIntFilter>;
  repoEli5?: InputMaybe<StringFilter>;
};

export type ProjectRepoMetadataInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  hackernewsEli5?: InputMaybe<Scalars['String']>;
  repoEli5?: InputMaybe<Scalars['String']>;
};

export type ProjectRepoMetadataInsertResponse = {
  __typename?: 'ProjectRepoMetadataInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoMetadata>;
};

export type ProjectRepoMetadataOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  hackernewsEli5?: InputMaybe<OrderByDirection>;
  projectRepoMetadataId?: InputMaybe<OrderByDirection>;
  repoEli5?: InputMaybe<OrderByDirection>;
};

export type ProjectRepoMetadataUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  hackernewsEli5?: InputMaybe<Scalars['String']>;
  repoEli5?: InputMaybe<Scalars['String']>;
};

export type ProjectRepoMetadataUpdateResponse = {
  __typename?: 'ProjectRepoMetadataUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepoMetadata>;
};

export type ProjectRepoOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  githubRepoId?: InputMaybe<OrderByDirection>;
  note?: InputMaybe<OrderByDirection>;
  projectRepoId?: InputMaybe<OrderByDirection>;
  projectRepoMetadataId?: InputMaybe<OrderByDirection>;
};

export type ProjectRepoUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  githubRepoId?: InputMaybe<Scalars['BigInt']>;
  note?: InputMaybe<Scalars['String']>;
  projectRepoMetadataId?: InputMaybe<Scalars['BigInt']>;
};

export type ProjectRepoUpdateResponse = {
  __typename?: 'ProjectRepoUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<ProjectRepo>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `GithubForkHistory` */
  githubForkHistoryCollection?: Maybe<GithubForkHistoryConnection>;
  /** A pagable collection of type `GithubIssueHistory` */
  githubIssueHistoryCollection?: Maybe<GithubIssueHistoryConnection>;
  /** A pagable collection of type `GithubLanguage` */
  githubLanguageCollection?: Maybe<GithubLanguageConnection>;
  /** A pagable collection of type `GithubOrganization` */
  githubOrganizationCollection?: Maybe<GithubOrganizationConnection>;
  /** A pagable collection of type `GithubOwner` */
  githubOwnerCollection?: Maybe<GithubOwnerConnection>;
  /** A pagable collection of type `GithubRepoAndGithubLanguage` */
  githubRepoAndGithubLanguageCollection?: Maybe<GithubRepoAndGithubLanguageConnection>;
  /** A pagable collection of type `GithubRepo` */
  githubRepoCollection?: Maybe<GithubRepoConnection>;
  /** A pagable collection of type `GithubRepoContributor` */
  githubRepoContributorCollection?: Maybe<GithubRepoContributorConnection>;
  /** A pagable collection of type `GithubRepoFork` */
  githubRepoForkCollection?: Maybe<GithubRepoForkConnection>;
  /** A pagable collection of type `GithubRepoIssue` */
  githubRepoIssueCollection?: Maybe<GithubRepoIssueConnection>;
  /** A pagable collection of type `GithubStar` */
  githubStarCollection?: Maybe<GithubStarConnection>;
  /** A pagable collection of type `GithubStarHistory` */
  githubStarHistoryCollection?: Maybe<GithubStarHistoryConnection>;
  /** A pagable collection of type `GithubTrending` */
  githubTrendingCollection?: Maybe<GithubTrendingConnection>;
  /** A pagable collection of type `GithubUser` */
  githubUserCollection?: Maybe<GithubUserConnection>;
  /** A pagable collection of type `HackernewsStoryAndHackernewsTag` */
  hackernewsStoryAndHackernewsTagCollection?: Maybe<HackernewsStoryAndHackernewsTagConnection>;
  /** A pagable collection of type `HackernewsStory` */
  hackernewsStoryCollection?: Maybe<HackernewsStoryConnection>;
  /** A pagable collection of type `HackernewsTag` */
  hackernewsTagCollection?: Maybe<HackernewsTagConnection>;
  /** A pagable collection of type `Instance1` */
  instance1Collection?: Maybe<Instance1Connection>;
  /** A pagable collection of type `Instance2` */
  instance2Collection?: Maybe<Instance2Connection>;
  /** A pagable collection of type `LinkedinProfileSearch` */
  linkedinProfileSearchCollection?: Maybe<LinkedinProfileSearchConnection>;
  /** A pagable collection of type `LinkedinProfileSearchUpdate` */
  linkedinProfileSearchUpdateCollection?: Maybe<LinkedinProfileSearchUpdateConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `ProjectBookmark` */
  projectBookmarkCollection?: Maybe<ProjectBookmarkConnection>;
  /** A pagable collection of type `ProjectCategoryAndProjectBookmark` */
  projectCategoryAndProjectBookmarkCollection?: Maybe<ProjectCategoryAndProjectBookmarkConnection>;
  /** A pagable collection of type `ProjectCategory` */
  projectCategoryCollection?: Maybe<ProjectCategoryConnection>;
  /** A pagable collection of type `ProjectRepoAndHackernewsStory` */
  projectRepoAndHackernewsStoryCollection?: Maybe<ProjectRepoAndHackernewsStoryConnection>;
  /** A pagable collection of type `ProjectRepoAndLinkedinProfileSearch` */
  projectRepoAndLinkedinProfileSearchCollection?: Maybe<ProjectRepoAndLinkedinProfileSearchConnection>;
  /** A pagable collection of type `ProjectRepoAndTwitterSearch` */
  projectRepoAndTwitterSearchCollection?: Maybe<ProjectRepoAndTwitterSearchConnection>;
  /** A pagable collection of type `ProjectRepo` */
  projectRepoCollection?: Maybe<ProjectRepoConnection>;
  /** A pagable collection of type `ProjectRepoMetadata` */
  projectRepoMetadataCollection?: Maybe<ProjectRepoMetadataConnection>;
  /** A pagable collection of type `TwitterSearchAndUser` */
  twitterSearchAndUserCollection?: Maybe<TwitterSearchAndUserConnection>;
  /** A pagable collection of type `TwitterSearch` */
  twitterSearchCollection?: Maybe<TwitterSearchConnection>;
  /** A pagable collection of type `TwitterUser` */
  twitterUserCollection?: Maybe<TwitterUserConnection>;
  /** A pagable collection of type `UserApiKey` */
  userApiKeyCollection?: Maybe<UserApiKeyConnection>;
  /** A pagable collection of type `UsersAdmin` */
  usersAdminCollection?: Maybe<UsersAdminConnection>;
  /** A pagable collection of type `UsersWhitelist` */
  usersWhitelistCollection?: Maybe<UsersWhitelistConnection>;
};


/** The root type for querying data */
export type QueryGithubForkHistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubForkHistoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubForkHistoryOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubIssueHistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubIssueHistoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubIssueHistoryOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubLanguageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubLanguageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubLanguageOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubOrganizationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubOrganizationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubOrganizationOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubOwnerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubOwnerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubOwnerOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubRepoAndGithubLanguageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubRepoAndGithubLanguageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubRepoAndGithubLanguageOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubRepoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubRepoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubRepoOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubRepoContributorCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubRepoContributorFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubRepoContributorOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubRepoForkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubRepoForkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubRepoForkOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubRepoIssueCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubRepoIssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubRepoIssueOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubStarCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubStarFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubStarOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubStarHistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubStarHistoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubStarHistoryOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubTrendingCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubTrendingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubTrendingOrderBy>>;
};


/** The root type for querying data */
export type QueryGithubUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GithubUserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubUserOrderBy>>;
};


/** The root type for querying data */
export type QueryHackernewsStoryAndHackernewsTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<HackernewsStoryAndHackernewsTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HackernewsStoryAndHackernewsTagOrderBy>>;
};


/** The root type for querying data */
export type QueryHackernewsStoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<HackernewsStoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HackernewsStoryOrderBy>>;
};


/** The root type for querying data */
export type QueryHackernewsTagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<HackernewsTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HackernewsTagOrderBy>>;
};


/** The root type for querying data */
export type QueryInstance1CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Instance1Filter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Instance1OrderBy>>;
};


/** The root type for querying data */
export type QueryInstance2CollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<Instance2Filter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Instance2OrderBy>>;
};


/** The root type for querying data */
export type QueryLinkedinProfileSearchCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<LinkedinProfileSearchFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LinkedinProfileSearchOrderBy>>;
};


/** The root type for querying data */
export type QueryLinkedinProfileSearchUpdateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<LinkedinProfileSearchUpdateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LinkedinProfileSearchUpdateOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root type for querying data */
export type QueryProjectBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectBookmarkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectBookmarkOrderBy>>;
};


/** The root type for querying data */
export type QueryProjectCategoryAndProjectBookmarkCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectCategoryAndProjectBookmarkFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectCategoryAndProjectBookmarkOrderBy>>;
};


/** The root type for querying data */
export type QueryProjectCategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectCategoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectCategoryOrderBy>>;
};


/** The root type for querying data */
export type QueryProjectRepoAndHackernewsStoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoAndHackernewsStoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoAndHackernewsStoryOrderBy>>;
};


/** The root type for querying data */
export type QueryProjectRepoAndLinkedinProfileSearchCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoAndLinkedinProfileSearchFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoAndLinkedinProfileSearchOrderBy>>;
};


/** The root type for querying data */
export type QueryProjectRepoAndTwitterSearchCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoAndTwitterSearchFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoAndTwitterSearchOrderBy>>;
};


/** The root type for querying data */
export type QueryProjectRepoCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoOrderBy>>;
};


/** The root type for querying data */
export type QueryProjectRepoMetadataCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoMetadataFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoMetadataOrderBy>>;
};


/** The root type for querying data */
export type QueryTwitterSearchAndUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TwitterSearchAndUserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TwitterSearchAndUserOrderBy>>;
};


/** The root type for querying data */
export type QueryTwitterSearchCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TwitterSearchFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TwitterSearchOrderBy>>;
};


/** The root type for querying data */
export type QueryTwitterUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TwitterUserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TwitterUserOrderBy>>;
};


/** The root type for querying data */
export type QueryUserApiKeyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<UserApiKeyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserApiKeyOrderBy>>;
};


/** The root type for querying data */
export type QueryUsersAdminCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<UsersAdminFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersAdminOrderBy>>;
};


/** The root type for querying data */
export type QueryUsersWhitelistCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<UsersWhitelistFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersWhitelistOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  ilike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  iregex?: InputMaybe<Scalars['String']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  regex?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

export type TwitterSearch = Node & {
  __typename?: 'TwitterSearch';
  createdAt: Scalars['Datetime'];
  fullText: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  projectRepoAndTwitterSearchCollection: ProjectRepoAndTwitterSearchConnection;
  twitterSearchAndUserCollection: TwitterSearchAndUserConnection;
  twitterSearchId: Scalars['BigInt'];
};


export type TwitterSearchProjectRepoAndTwitterSearchCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProjectRepoAndTwitterSearchFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectRepoAndTwitterSearchOrderBy>>;
};


export type TwitterSearchTwitterSearchAndUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TwitterSearchAndUserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TwitterSearchAndUserOrderBy>>;
};

export type TwitterSearchAndUser = Node & {
  __typename?: 'TwitterSearchAndUser';
  createdAt: Scalars['Datetime'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  twitterSearch: TwitterSearch;
  twitterSearchId: Scalars['BigInt'];
  twitterUser: TwitterUser;
  twitterUserId: Scalars['BigInt'];
};

export type TwitterSearchAndUserConnection = {
  __typename?: 'TwitterSearchAndUserConnection';
  edges: Array<TwitterSearchAndUserEdge>;
  pageInfo: PageInfo;
};

export type TwitterSearchAndUserDeleteResponse = {
  __typename?: 'TwitterSearchAndUserDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<TwitterSearchAndUser>;
};

export type TwitterSearchAndUserEdge = {
  __typename?: 'TwitterSearchAndUserEdge';
  cursor: Scalars['String'];
  node: TwitterSearchAndUser;
};

export type TwitterSearchAndUserFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TwitterSearchAndUserFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<TwitterSearchAndUserFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TwitterSearchAndUserFilter>>;
  twitterSearchId?: InputMaybe<BigIntFilter>;
  twitterUserId?: InputMaybe<BigIntFilter>;
};

export type TwitterSearchAndUserInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  twitterSearchId?: InputMaybe<Scalars['BigInt']>;
  twitterUserId?: InputMaybe<Scalars['BigInt']>;
};

export type TwitterSearchAndUserInsertResponse = {
  __typename?: 'TwitterSearchAndUserInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<TwitterSearchAndUser>;
};

export type TwitterSearchAndUserOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  twitterSearchId?: InputMaybe<OrderByDirection>;
  twitterUserId?: InputMaybe<OrderByDirection>;
};

export type TwitterSearchAndUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  twitterSearchId?: InputMaybe<Scalars['BigInt']>;
  twitterUserId?: InputMaybe<Scalars['BigInt']>;
};

export type TwitterSearchAndUserUpdateResponse = {
  __typename?: 'TwitterSearchAndUserUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<TwitterSearchAndUser>;
};

export type TwitterSearchConnection = {
  __typename?: 'TwitterSearchConnection';
  edges: Array<TwitterSearchEdge>;
  pageInfo: PageInfo;
};

export type TwitterSearchDeleteResponse = {
  __typename?: 'TwitterSearchDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<TwitterSearch>;
};

export type TwitterSearchEdge = {
  __typename?: 'TwitterSearchEdge';
  cursor: Scalars['String'];
  node: TwitterSearch;
};

export type TwitterSearchFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TwitterSearchFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  fullText?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<TwitterSearchFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TwitterSearchFilter>>;
  twitterSearchId?: InputMaybe<BigIntFilter>;
};

export type TwitterSearchInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  fullText?: InputMaybe<Scalars['String']>;
};

export type TwitterSearchInsertResponse = {
  __typename?: 'TwitterSearchInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<TwitterSearch>;
};

export type TwitterSearchOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  fullText?: InputMaybe<OrderByDirection>;
  twitterSearchId?: InputMaybe<OrderByDirection>;
};

export type TwitterSearchUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  fullText?: InputMaybe<Scalars['String']>;
};

export type TwitterSearchUpdateResponse = {
  __typename?: 'TwitterSearchUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<TwitterSearch>;
};

export type TwitterUser = Node & {
  __typename?: 'TwitterUser';
  createdAt: Scalars['Datetime'];
  description: Scalars['String'];
  followersCount: Scalars['BigInt'];
  location: Scalars['String'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  screenName: Scalars['String'];
  twitterSearchAndUserCollection: TwitterSearchAndUserConnection;
  twitterUserId: Scalars['BigInt'];
  url: Scalars['String'];
};


export type TwitterUserTwitterSearchAndUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TwitterSearchAndUserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TwitterSearchAndUserOrderBy>>;
};

export type TwitterUserConnection = {
  __typename?: 'TwitterUserConnection';
  edges: Array<TwitterUserEdge>;
  pageInfo: PageInfo;
};

export type TwitterUserDeleteResponse = {
  __typename?: 'TwitterUserDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<TwitterUser>;
};

export type TwitterUserEdge = {
  __typename?: 'TwitterUserEdge';
  cursor: Scalars['String'];
  node: TwitterUser;
};

export type TwitterUserFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TwitterUserFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  followersCount?: InputMaybe<BigIntFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<TwitterUserFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TwitterUserFilter>>;
  screenName?: InputMaybe<StringFilter>;
  twitterUserId?: InputMaybe<BigIntFilter>;
  url?: InputMaybe<StringFilter>;
};

export type TwitterUserInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  followersCount?: InputMaybe<Scalars['BigInt']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  screenName?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type TwitterUserInsertResponse = {
  __typename?: 'TwitterUserInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<TwitterUser>;
};

export type TwitterUserOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  followersCount?: InputMaybe<OrderByDirection>;
  location?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  screenName?: InputMaybe<OrderByDirection>;
  twitterUserId?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
};

export type TwitterUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  followersCount?: InputMaybe<Scalars['BigInt']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  screenName?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type TwitterUserUpdateResponse = {
  __typename?: 'TwitterUserUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<TwitterUser>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type UserApiKey = Node & {
  __typename?: 'UserApiKey';
  createdAt: Scalars['Datetime'];
  key: Scalars['UUID'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  userApiKeyId: Scalars['BigInt'];
  userId: Scalars['UUID'];
};

export type UserApiKeyConnection = {
  __typename?: 'UserApiKeyConnection';
  edges: Array<UserApiKeyEdge>;
  pageInfo: PageInfo;
};

export type UserApiKeyDeleteResponse = {
  __typename?: 'UserApiKeyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<UserApiKey>;
};

export type UserApiKeyEdge = {
  __typename?: 'UserApiKeyEdge';
  cursor: Scalars['String'];
  node: UserApiKey;
};

export type UserApiKeyFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UserApiKeyFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  key?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UserApiKeyFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UserApiKeyFilter>>;
  userApiKeyId?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type UserApiKeyInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  key?: InputMaybe<Scalars['UUID']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type UserApiKeyInsertResponse = {
  __typename?: 'UserApiKeyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<UserApiKey>;
};

export type UserApiKeyOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  userApiKeyId?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type UserApiKeyUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  key?: InputMaybe<Scalars['UUID']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type UserApiKeyUpdateResponse = {
  __typename?: 'UserApiKeyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<UserApiKey>;
};

export type UsersAdmin = Node & {
  __typename?: 'UsersAdmin';
  createdAt: Scalars['Datetime'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  userId: Scalars['UUID'];
};

export type UsersAdminConnection = {
  __typename?: 'UsersAdminConnection';
  edges: Array<UsersAdminEdge>;
  pageInfo: PageInfo;
};

export type UsersAdminDeleteResponse = {
  __typename?: 'UsersAdminDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<UsersAdmin>;
};

export type UsersAdminEdge = {
  __typename?: 'UsersAdminEdge';
  cursor: Scalars['String'];
  node: UsersAdmin;
};

export type UsersAdminFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UsersAdminFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UsersAdminFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UsersAdminFilter>>;
  userId?: InputMaybe<UuidFilter>;
};

export type UsersAdminInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type UsersAdminInsertResponse = {
  __typename?: 'UsersAdminInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<UsersAdmin>;
};

export type UsersAdminOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type UsersAdminUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['UUID']>;
};

export type UsersAdminUpdateResponse = {
  __typename?: 'UsersAdminUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<UsersAdmin>;
};

export type UsersWhitelist = Node & {
  __typename?: 'UsersWhitelist';
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  type: Scalars['String'];
  usersWhitelistId: Scalars['BigInt'];
  value?: Maybe<Scalars['String']>;
};

export type UsersWhitelistConnection = {
  __typename?: 'UsersWhitelistConnection';
  edges: Array<UsersWhitelistEdge>;
  pageInfo: PageInfo;
};

export type UsersWhitelistDeleteResponse = {
  __typename?: 'UsersWhitelistDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<UsersWhitelist>;
};

export type UsersWhitelistEdge = {
  __typename?: 'UsersWhitelistEdge';
  cursor: Scalars['String'];
  node: UsersWhitelist;
};

export type UsersWhitelistFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UsersWhitelistFilter>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UsersWhitelistFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UsersWhitelistFilter>>;
  type?: InputMaybe<StringFilter>;
  usersWhitelistId?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<StringFilter>;
};

export type UsersWhitelistInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type UsersWhitelistInsertResponse = {
  __typename?: 'UsersWhitelistInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<UsersWhitelist>;
};

export type UsersWhitelistOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  usersWhitelistId?: InputMaybe<OrderByDirection>;
  value?: InputMaybe<OrderByDirection>;
};

export type UsersWhitelistUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type UsersWhitelistUpdateResponse = {
  __typename?: 'UsersWhitelistUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<UsersWhitelist>;
};
