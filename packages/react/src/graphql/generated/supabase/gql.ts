/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
	'mutation UpdateNotesForProjRepo($id: BigInt, $text: String) {\n  updateProjRepoCollection(filter: {projRepoId: {eq: $id}}, set: {note: $text}) {\n    affectedCount\n  }\n}':
		types.UpdateNotesForProjRepoDocument,
	'query AllAlgoHnCommentAndAlgoHnTag {\n  algoHnCommentAndAlgoHnTagCollection {\n    edges {\n      node {\n        algoHnTagId\n        algoHnCommentId\n        internalCreatedAt\n      }\n    }\n  }\n}':
		types.AllAlgoHnCommentAndAlgoHnTagDocument,
	'query AllAlgoHnQuery {\n  algoHnQueryCollection {\n    edges {\n      node {\n        algoHnQueryId\n        query\n        internalCreatedAt\n      }\n    }\n  }\n}':
		types.AllAlgoHnQueryDocument,
	'query AllAlgoHnStory {\n  algoHnStoryCollection {\n    edges {\n      node {\n        algoHnStoryId\n        internalCreatedAt\n        author\n        createdAt\n        algoHnStoryUrl\n        algoHnStoryObjectId\n        points\n        algoHnQueryId\n        title\n        updatedAt\n      }\n    }\n  }\n}':
		types.AllAlgoHnStoryDocument,
	'query AllAlgoHnTag {\n  algoHnTagCollection {\n    edges {\n      node {\n        algoHnTagId\n        internalCreatedAt\n        title\n      }\n    }\n  }\n}':
		types.AllAlgoHnTagDocument,
	'query AllGthbForkHist {\n  gthbForkHistCollection {\n    edges {\n      node {\n        gthbForkHistId\n        internalCreatedAt\n        gthbRepoId\n        gthbForkHistDate\n        amount\n      }\n    }\n  }\n}':
		types.AllGthbForkHistDocument,
	'query AllGthbIssueHist {\n  gthbIssueHistCollection {\n    edges {\n      node {\n        gthbIssueHistId\n        internalCreatedAt\n        gthbRepoId\n        gthbIssueHistDate\n        amount\n      }\n    }\n  }\n}':
		types.AllGthbIssueHistDocument,
	'query AllGthbRepoContributor {\n  gthbRepoContrCollection {\n    edges {\n      node {\n        gthbRepoId\n        gthbOwnerId\n        contributions\n        internalCreatedAt\n      }\n    }\n  }\n}':
		types.AllGthbRepoContributorDocument,
	'query AllGthbRepoTopic {\n  gthbRepoTopicCollection {\n    edges {\n      node {\n        gthbRepoTopicId\n        internalCreatedAt\n        gthbRepoTopicName\n        stargazerCount\n      }\n    }\n  }\n}':
		types.AllGthbRepoTopicDocument,
	'query AllGthbTrending {\n  gthbTrendingCollection {\n    edges {\n      node {\n        gthbTrendingId\n        gthbRepoId\n        internalCreatedAt\n        dateRange\n        lang\n      }\n    }\n  }\n}':
		types.AllGthbTrendingDocument,
	'query AllGthbUser {\n  gthbUserCollection {\n    edges {\n      node {\n        gthbUserId\n        internalCreatedAt\n        bio\n        bioHtml\n        company\n        companyHtml\n        createdAt\n        email\n        followersTotalCount\n        gthbUserName\n        twitterUsername\n        websiteUrl\n      }\n    }\n  }\n}':
		types.AllGthbUserDocument,
	'query AllProjCat {\n  projCatCollection {\n    edges {\n      node {\n        projCatId\n        internalCreatedAt\n        title\n        authUsersId\n        note\n        isPublic\n      }\n    }\n  }\n}':
		types.AllProjCatDocument,
	'query AllProjRepo {\n  projRepoCollection {\n    edges {\n      node {\n        projRepoId\n        internalCreatedAt\n        gthbRepoId\n        note\n      }\n    }\n  }\n}':
		types.AllProjRepoDocument,
	'query AllProjRepoAndProjClassifier {\n  projRepoAndProjClassifierCollection {\n    edges {\n      node {\n        projRepoId\n        projClassifierId\n        internalCreatedAt\n      }\n    }\n  }\n}':
		types.AllProjRepoAndProjClassifierDocument,
	'query AllProjRepoAndSbotLinCompany {\n  projRepoAndSbotLinCompanyCollection {\n    edges {\n      node {\n        projRepoId\n        sbotLinCompanyId\n        internalCreatedAt\n      }\n    }\n  }\n}':
		types.AllProjRepoAndSbotLinCompanyDocument,
	'query AllProjRepoAndSbotLinProfile {\n  projRepoAndSbotLinProfileCollection {\n    edges {\n      node {\n        projRepoId\n        sbotLinProfileId\n        internalCreatedAt\n      }\n    }\n  }\n}':
		types.AllProjRepoAndSbotLinProfileDocument,
	'query DetailViewForkHist($filter: GthbForkHistFilter) {\n  gthbForkHistCollection(filter: $filter) {\n    edges {\n      node {\n        gthbForkHistDate\n        amount\n      }\n    }\n  }\n}':
		types.DetailViewForkHistDocument,
	'query DetailViewProjRepoTop($id: BigInt, $gthbStarHistFilter: GthbStarHistFilter, $gthbIssueHistFilter: GthbIssueHistFilter, $gthbForkHistFilter: GthbForkHistFilter) {\n  projRepoCollection(filter: {gthbRepoId: {eq: $id}}) {\n    edges {\n      node {\n        algoHnEli5\n      }\n    }\n  }\n}':
		types.DetailViewProjRepoTopDocument,
	'query ListBookmarkedGthbRepo($filter: GthbRepoFilter) {\n  fListBookmarkedGthbRepo(filter: $filter) {\n    edges {\n      node {\n        gthbRepoName\n        gthbRepoDescription\n        stargazerCount\n        issuesTotalCount\n        forksPerContributor\n        forkCount\n        contributorCount\n        issuesTotalCount\n        issuesPerContributor\n        pullRequestsTotalCount\n        gthbOwner {\n          avatarUrl\n          gthbOwnerLogin\n        }\n        gthbRepo {\n          projRepoId\n        }\n      }\n    }\n  }\n}':
		types.ListBookmarkedGthbRepoDocument,
	'query ListTrendingGthbRepo($filter: GthbRepoFilter) {\n  fListTrendingGthbRepo(filter: $filter) {\n    edges {\n      node {\n        gthbRepoName\n        gthbRepoDescription\n        stargazerCount\n        issuesTotalCount\n        forksPerContributor\n        forkCount\n        contributorCount\n        issuesTotalCount\n        issuesPerContributor\n        pullRequestsTotalCount\n        gthbOwner {\n          avatarUrl\n          gthbOwnerLogin\n        }\n        gthbRepo {\n          projRepoId\n        }\n      }\n    }\n  }\n}':
		types.ListTrendingGthbRepoDocument,
	'query ListViewGthbRepos($filter: GthbRepoFilter) {\n  gthbRepoCollection(filter: $filter) {\n    edges {\n      node {\n        gthbRepoName\n        gthbRepoDescription\n        stargazerCount\n        issuesTotalCount\n        forksPerContributor\n        forkCount\n        contributorCount\n        issuesTotalCount\n        issuesPerContributor\n        pullRequestsTotalCount\n        gthbOwner {\n          avatarUrl\n          gthbOwnerLogin\n        }\n      }\n      cursor\n    }\n  }\n}':
		types.ListViewGthbReposDocument,
	'query SidebarProjCategoriesToProjBookmarks {\n  projCatCollection(orderBy: {title: DescNullsLast}) {\n    edges {\n      node {\n        nodeId\n        title\n        projCatAndProjBookmarkCollection {\n          edges {\n            node {\n              projBookmark {\n                projRepo {\n                  gthbRepo {\n                    gthbRepoName\n                    gthbOwner {\n                      avatarUrl\n                      gthbOwnerLogin\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}':
		types.SidebarProjCategoriesToProjBookmarksDocument
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'mutation UpdateNotesForProjRepo($id: BigInt, $text: String) {\n  updateProjRepoCollection(filter: {projRepoId: {eq: $id}}, set: {note: $text}) {\n    affectedCount\n  }\n}'
): (typeof documents)['mutation UpdateNotesForProjRepo($id: BigInt, $text: String) {\n  updateProjRepoCollection(filter: {projRepoId: {eq: $id}}, set: {note: $text}) {\n    affectedCount\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllAlgoHnCommentAndAlgoHnTag {\n  algoHnCommentAndAlgoHnTagCollection {\n    edges {\n      node {\n        algoHnTagId\n        algoHnCommentId\n        internalCreatedAt\n      }\n    }\n  }\n}'
): (typeof documents)['query AllAlgoHnCommentAndAlgoHnTag {\n  algoHnCommentAndAlgoHnTagCollection {\n    edges {\n      node {\n        algoHnTagId\n        algoHnCommentId\n        internalCreatedAt\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllAlgoHnQuery {\n  algoHnQueryCollection {\n    edges {\n      node {\n        algoHnQueryId\n        query\n        internalCreatedAt\n      }\n    }\n  }\n}'
): (typeof documents)['query AllAlgoHnQuery {\n  algoHnQueryCollection {\n    edges {\n      node {\n        algoHnQueryId\n        query\n        internalCreatedAt\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllAlgoHnStory {\n  algoHnStoryCollection {\n    edges {\n      node {\n        algoHnStoryId\n        internalCreatedAt\n        author\n        createdAt\n        algoHnStoryUrl\n        algoHnStoryObjectId\n        points\n        algoHnQueryId\n        title\n        updatedAt\n      }\n    }\n  }\n}'
): (typeof documents)['query AllAlgoHnStory {\n  algoHnStoryCollection {\n    edges {\n      node {\n        algoHnStoryId\n        internalCreatedAt\n        author\n        createdAt\n        algoHnStoryUrl\n        algoHnStoryObjectId\n        points\n        algoHnQueryId\n        title\n        updatedAt\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllAlgoHnTag {\n  algoHnTagCollection {\n    edges {\n      node {\n        algoHnTagId\n        internalCreatedAt\n        title\n      }\n    }\n  }\n}'
): (typeof documents)['query AllAlgoHnTag {\n  algoHnTagCollection {\n    edges {\n      node {\n        algoHnTagId\n        internalCreatedAt\n        title\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllGthbForkHist {\n  gthbForkHistCollection {\n    edges {\n      node {\n        gthbForkHistId\n        internalCreatedAt\n        gthbRepoId\n        gthbForkHistDate\n        amount\n      }\n    }\n  }\n}'
): (typeof documents)['query AllGthbForkHist {\n  gthbForkHistCollection {\n    edges {\n      node {\n        gthbForkHistId\n        internalCreatedAt\n        gthbRepoId\n        gthbForkHistDate\n        amount\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllGthbIssueHist {\n  gthbIssueHistCollection {\n    edges {\n      node {\n        gthbIssueHistId\n        internalCreatedAt\n        gthbRepoId\n        gthbIssueHistDate\n        amount\n      }\n    }\n  }\n}'
): (typeof documents)['query AllGthbIssueHist {\n  gthbIssueHistCollection {\n    edges {\n      node {\n        gthbIssueHistId\n        internalCreatedAt\n        gthbRepoId\n        gthbIssueHistDate\n        amount\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllGthbRepoContributor {\n  gthbRepoContrCollection {\n    edges {\n      node {\n        gthbRepoId\n        gthbOwnerId\n        contributions\n        internalCreatedAt\n      }\n    }\n  }\n}'
): (typeof documents)['query AllGthbRepoContributor {\n  gthbRepoContrCollection {\n    edges {\n      node {\n        gthbRepoId\n        gthbOwnerId\n        contributions\n        internalCreatedAt\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllGthbRepoTopic {\n  gthbRepoTopicCollection {\n    edges {\n      node {\n        gthbRepoTopicId\n        internalCreatedAt\n        gthbRepoTopicName\n        stargazerCount\n      }\n    }\n  }\n}'
): (typeof documents)['query AllGthbRepoTopic {\n  gthbRepoTopicCollection {\n    edges {\n      node {\n        gthbRepoTopicId\n        internalCreatedAt\n        gthbRepoTopicName\n        stargazerCount\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllGthbTrending {\n  gthbTrendingCollection {\n    edges {\n      node {\n        gthbTrendingId\n        gthbRepoId\n        internalCreatedAt\n        dateRange\n        lang\n      }\n    }\n  }\n}'
): (typeof documents)['query AllGthbTrending {\n  gthbTrendingCollection {\n    edges {\n      node {\n        gthbTrendingId\n        gthbRepoId\n        internalCreatedAt\n        dateRange\n        lang\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllGthbUser {\n  gthbUserCollection {\n    edges {\n      node {\n        gthbUserId\n        internalCreatedAt\n        bio\n        bioHtml\n        company\n        companyHtml\n        createdAt\n        email\n        followersTotalCount\n        gthbUserName\n        twitterUsername\n        websiteUrl\n      }\n    }\n  }\n}'
): (typeof documents)['query AllGthbUser {\n  gthbUserCollection {\n    edges {\n      node {\n        gthbUserId\n        internalCreatedAt\n        bio\n        bioHtml\n        company\n        companyHtml\n        createdAt\n        email\n        followersTotalCount\n        gthbUserName\n        twitterUsername\n        websiteUrl\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllProjCat {\n  projCatCollection {\n    edges {\n      node {\n        projCatId\n        internalCreatedAt\n        title\n        authUsersId\n        note\n        isPublic\n      }\n    }\n  }\n}'
): (typeof documents)['query AllProjCat {\n  projCatCollection {\n    edges {\n      node {\n        projCatId\n        internalCreatedAt\n        title\n        authUsersId\n        note\n        isPublic\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllProjRepo {\n  projRepoCollection {\n    edges {\n      node {\n        projRepoId\n        internalCreatedAt\n        gthbRepoId\n        note\n      }\n    }\n  }\n}'
): (typeof documents)['query AllProjRepo {\n  projRepoCollection {\n    edges {\n      node {\n        projRepoId\n        internalCreatedAt\n        gthbRepoId\n        note\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllProjRepoAndProjClassifier {\n  projRepoAndProjClassifierCollection {\n    edges {\n      node {\n        projRepoId\n        projClassifierId\n        internalCreatedAt\n      }\n    }\n  }\n}'
): (typeof documents)['query AllProjRepoAndProjClassifier {\n  projRepoAndProjClassifierCollection {\n    edges {\n      node {\n        projRepoId\n        projClassifierId\n        internalCreatedAt\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllProjRepoAndSbotLinCompany {\n  projRepoAndSbotLinCompanyCollection {\n    edges {\n      node {\n        projRepoId\n        sbotLinCompanyId\n        internalCreatedAt\n      }\n    }\n  }\n}'
): (typeof documents)['query AllProjRepoAndSbotLinCompany {\n  projRepoAndSbotLinCompanyCollection {\n    edges {\n      node {\n        projRepoId\n        sbotLinCompanyId\n        internalCreatedAt\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query AllProjRepoAndSbotLinProfile {\n  projRepoAndSbotLinProfileCollection {\n    edges {\n      node {\n        projRepoId\n        sbotLinProfileId\n        internalCreatedAt\n      }\n    }\n  }\n}'
): (typeof documents)['query AllProjRepoAndSbotLinProfile {\n  projRepoAndSbotLinProfileCollection {\n    edges {\n      node {\n        projRepoId\n        sbotLinProfileId\n        internalCreatedAt\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query DetailViewForkHist($filter: GthbForkHistFilter) {\n  gthbForkHistCollection(filter: $filter) {\n    edges {\n      node {\n        gthbForkHistDate\n        amount\n      }\n    }\n  }\n}'
): (typeof documents)['query DetailViewForkHist($filter: GthbForkHistFilter) {\n  gthbForkHistCollection(filter: $filter) {\n    edges {\n      node {\n        gthbForkHistDate\n        amount\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query DetailViewProjRepoTop($id: BigInt, $gthbStarHistFilter: GthbStarHistFilter, $gthbIssueHistFilter: GthbIssueHistFilter, $gthbForkHistFilter: GthbForkHistFilter) {\n  projRepoCollection(filter: {gthbRepoId: {eq: $id}}) {\n    edges {\n      node {\n        algoHnEli5\n      }\n    }\n  }\n}'
): (typeof documents)['query DetailViewProjRepoTop($id: BigInt, $gthbStarHistFilter: GthbStarHistFilter, $gthbIssueHistFilter: GthbIssueHistFilter, $gthbForkHistFilter: GthbForkHistFilter) {\n  projRepoCollection(filter: {gthbRepoId: {eq: $id}}) {\n    edges {\n      node {\n        algoHnEli5\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query ListBookmarkedGthbRepo($filter: GthbRepoFilter) {\n  fListBookmarkedGthbRepo(filter: $filter) {\n    edges {\n      node {\n        gthbRepoName\n        gthbRepoDescription\n        stargazerCount\n        issuesTotalCount\n        forksPerContributor\n        forkCount\n        contributorCount\n        issuesTotalCount\n        issuesPerContributor\n        pullRequestsTotalCount\n        gthbOwner {\n          avatarUrl\n          gthbOwnerLogin\n        }\n        gthbRepo {\n          projRepoId\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query ListBookmarkedGthbRepo($filter: GthbRepoFilter) {\n  fListBookmarkedGthbRepo(filter: $filter) {\n    edges {\n      node {\n        gthbRepoName\n        gthbRepoDescription\n        stargazerCount\n        issuesTotalCount\n        forksPerContributor\n        forkCount\n        contributorCount\n        issuesTotalCount\n        issuesPerContributor\n        pullRequestsTotalCount\n        gthbOwner {\n          avatarUrl\n          gthbOwnerLogin\n        }\n        gthbRepo {\n          projRepoId\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query ListTrendingGthbRepo($filter: GthbRepoFilter) {\n  fListTrendingGthbRepo(filter: $filter) {\n    edges {\n      node {\n        gthbRepoName\n        gthbRepoDescription\n        stargazerCount\n        issuesTotalCount\n        forksPerContributor\n        forkCount\n        contributorCount\n        issuesTotalCount\n        issuesPerContributor\n        pullRequestsTotalCount\n        gthbOwner {\n          avatarUrl\n          gthbOwnerLogin\n        }\n        gthbRepo {\n          projRepoId\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query ListTrendingGthbRepo($filter: GthbRepoFilter) {\n  fListTrendingGthbRepo(filter: $filter) {\n    edges {\n      node {\n        gthbRepoName\n        gthbRepoDescription\n        stargazerCount\n        issuesTotalCount\n        forksPerContributor\n        forkCount\n        contributorCount\n        issuesTotalCount\n        issuesPerContributor\n        pullRequestsTotalCount\n        gthbOwner {\n          avatarUrl\n          gthbOwnerLogin\n        }\n        gthbRepo {\n          projRepoId\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query ListViewGthbRepos($filter: GthbRepoFilter) {\n  gthbRepoCollection(filter: $filter) {\n    edges {\n      node {\n        gthbRepoName\n        gthbRepoDescription\n        stargazerCount\n        issuesTotalCount\n        forksPerContributor\n        forkCount\n        contributorCount\n        issuesTotalCount\n        issuesPerContributor\n        pullRequestsTotalCount\n        gthbOwner {\n          avatarUrl\n          gthbOwnerLogin\n        }\n      }\n      cursor\n    }\n  }\n}'
): (typeof documents)['query ListViewGthbRepos($filter: GthbRepoFilter) {\n  gthbRepoCollection(filter: $filter) {\n    edges {\n      node {\n        gthbRepoName\n        gthbRepoDescription\n        stargazerCount\n        issuesTotalCount\n        forksPerContributor\n        forkCount\n        contributorCount\n        issuesTotalCount\n        issuesPerContributor\n        pullRequestsTotalCount\n        gthbOwner {\n          avatarUrl\n          gthbOwnerLogin\n        }\n      }\n      cursor\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query SidebarProjCategoriesToProjBookmarks {\n  projCatCollection(orderBy: {title: DescNullsLast}) {\n    edges {\n      node {\n        nodeId\n        title\n        projCatAndProjBookmarkCollection {\n          edges {\n            node {\n              projBookmark {\n                projRepo {\n                  gthbRepo {\n                    gthbRepoName\n                    gthbOwner {\n                      avatarUrl\n                      gthbOwnerLogin\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query SidebarProjCategoriesToProjBookmarks {\n  projCatCollection(orderBy: {title: DescNullsLast}) {\n    edges {\n      node {\n        nodeId\n        title\n        projCatAndProjBookmarkCollection {\n          edges {\n            node {\n              projBookmark {\n                projRepo {\n                  gthbRepo {\n                    gthbRepoName\n                    gthbOwner {\n                      avatarUrl\n                      gthbOwnerLogin\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}']

export function graphql(source: string) {
	return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
