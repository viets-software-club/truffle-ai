// import GithubApi from '../apis/githubApi'
// import OpenAiApi from '../apis/openAIApi'
// import GithubScraper from '../scraper/githubScraper'
// import HackernewsScraper from '../apis/hackernewsAlgoliaApi'
// import ScrapingBot from '../apis/scrapingBotApi'
// // eslint-disable-next-line import/no-unresolved
// import GetRepositoryDataQueryString from '../GetRepositoryData.graphql'
// import { GetRepositoryDataQuery } from '../graphql/codegen-generated'
// import Logger from '../logger'
// import supabaseClient from '../supabaseClient'

// const TABLE_BOOKMARK = '_bookmark2'
// const TABLE_TRENDING = '_bookmark2'
// const TABLE_REPO = '_repo2'
// const TABLE_ORGANIZATION = '_github_organization2'
// const TABLE_PROGRAMMING_LANGUAGES = '_github_programmingLanguage2'
// const TABLE_STAR = '_github_star2'

// type DatabaseUpdaterConstructorInput = {
//   githubToken: string
//   openAiApikey: string
//   scrapingBotUsername: string
//   scrapingBotApiKey: string
// }

// class DatabaseUpdater {
//   githubApi
//   openAiApi
//   githubScraper
//   hackernewsScraper
//   scrapingBot

//   constructor(data: DatabaseUpdaterConstructorInput) {
//     this.githubApi = new GithubApi(data.githubToken)
//     this.openAiApi = new OpenAiApi(data.openAiApikey)
//     this.githubScraper = new GithubScraper()
//     this.hackernewsScraper = new HackernewsScraper()
//     this.scrapingBot = new ScrapingBot(data.scrapingBotUsername, data.scrapingBotApiKey)
//   }

//   async addBookmark(repositoryOwner: string, repositoryName: string, userId: string) {
//     const repoId = `${repositoryOwner} / ${repositoryName}`
//     const { data } = await supabaseClient
//       .from('_bookmark2')
//       .upsert({ repo_id: repoId, user_id: userId }, { onConflict: 'repo_id' })
//       .select()
//     await this.updateRepository(repositoryOwner, repositoryName, data?.at(0)?.id as number, null)
//   }

//   async updateBookmarks() {
//     const { data } = await supabaseClient.from(TABLE_BOOKMARK).select('*')
//     if (data)
//       await Promise.all(
//         data.map((bookmark) => {
//           if (!bookmark.repo_id) return null
//           const [repositoryOwner, repositoryName] = bookmark.repo_id.split('/')
//           return this.updateRepository(repositoryOwner, repositoryName, bookmark.id, null)
//         })
//       )
//   }

//   async updateTrending() {
//     await supabaseClient.from(TABLE_TRENDING).delete()
//     const { data } = await supabaseClient.from(TABLE_TRENDING).select('*')
//     if (data)
//       await Promise.all(
//         data.map((trending) => {
//           if (!trending.repo_id) return null
//           const [repositoryOwner, repositoryName] = trending.repo_id.split('/')
//           return this.updateRepository(repositoryOwner, repositoryName, null, trending.id)
//         })
//       )
//   }

//   async updateRepository(
//     repositoryOwner: string,
//     repositoryName: string,
//     bookmarkId: number | null,
//     trendingId: number | null
//   ) {
//     const response = await this.githubApi.fetchGraphQLApi<GetRepositoryDataQuery>(
//       GetRepositoryDataQueryString,
//       {
//         repositoryOwner,
//         repositoryName
//       }
//     )
//     const repositoryReadme = await this.githubScraper.fetchRepositoryReadme(
//       repositoryOwner,
//       repositoryName
//     )
//     if (repositoryReadme.length === 0) {
//       Logger.log(`repository ${repositoryOwner}/${repositoryName} will be added without readme`)
//     }
//     const repositoryEli5Description =
//       repositoryReadme?.[0] && (await this.openAiApi.getELI5FromReadMe(repositoryReadme?.[0]))

//     const storiesWithComments = await this.hackernewsScraper.fetchHackernewsStoryWithCommentsByText(
//       `${repositoryOwner} ${repositoryName}`,
//       10000
//     )
//     const comments = storiesWithComments
//       .map((story) => {
//         const commentsAsString = story.comments.map((comment) => comment.comment_text).join('\n')
//         return `Next group of comments: \n ${commentsAsString}`
//       })
//       .join('\n')
//     const hackernewsSentiment = await this.openAiApi.getHackernewsSentiment(comments)
//     const contributors = await this.githubApi.fetchRepositoryContributors(
//       repositoryOwner,
//       repositoryName
//     )
//     const { repository, organization } = response

//     let organizationId = null
//     if (repository?.isInOrganization) {
//       const { data, error: upsertOrganizationError } = await supabaseClient
//         .from(TABLE_ORGANIZATION)
//         .upsert(
//           {
//             avatar_url: organization?.avatarUrl as string,
//             createdAt: organization?.createdAt as string,
//             name: organization?.name,
//             email: organization?.email,
//             github_url: organization?.url as string,
//             twitter_username: organization?.twitterUsername,
//             website_url: organization?.websiteUrl as string
//           },
//           { onConflict: 'name' }
//         )
//         .select()
//       if (upsertOrganizationError) console.error(upsertOrganizationError)
//       organizationId = data?.at(0)?.id as number
//     }
//     if (repository?.languages?.edges?.length) {
//       const languages = repository?.languages?.edges.map((edge) => {
//         if (edge)
//           return {
//             language: edge.node.name,
//             color: edge.node.color
//           }
//       })

//       await supabaseClient
//         .from(TABLE_PROGRAMMING_LANGUAGES)
//         .upsert(languages, { onConflict: 'language' })
//     }

//     const id = `${repositoryOwner} / ${repositoryName}`
//     const { error: upsertError } = await supabaseClient.from(TABLE_REPO).upsert(
//       {
//         id,
//         about: repository?.description as string,
//         name: repository?.name as string,
//         created_at: repository?.createdAt as string,
//         contributor_count: contributors.data.length,
//         eli5: repositoryEli5Description,
//         fork_count: repository?.forkCount as number,
//         issue_count: repository?.issues.totalCount as number,
//         owner: repositoryOwner,
//         pr_count: (repository?.pullRequests as { totalCount: number }).totalCount,
//         url: repository?.url as string,
//         hackernews_sentiment: hackernewsSentiment,
//         website_url: repository?.homepageUrl as string,
//         star_count: repository?.stargazerCount as number,
//         bookmark_id: bookmarkId,
//         trending_id: trendingId,
//         organization_id: organizationId
//       },
//       { onConflict: 'id' }
//     )
//     if (upsertError) console.log(upsertError)

//     const stargazerResponse = await this.githubApi.fetchRepositoryStargazersByTotalCount(
//       repositoryOwner,
//       repositoryName,
//       repository?.stargazerCount as number,
//       10
//     )

//     const { error: stargazerError } = await supabaseClient.from(TABLE_STAR).upsert(
//       stargazerResponse.map((stargazer) => ({
//         ...stargazer,
//         repo_id: id
//       })),
//       { onConflict: 'date,repo_id' }
//     )
//     if (stargazerError) console.error(stargazerError)
//   }
// }

// export default DatabaseUpdater
