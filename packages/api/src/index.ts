import GithubApi from './apis/githubApi'
import OpenAiApi from './apis/openAIApi'
import GithubScraper from './scraper/githubScraper'
import HackernewsScraper from './apis/hackernewsAlgoliaApi'
import ScrapingBot from './apis/scrapingBotApi'
import { InsertProjectRepo } from './database/index.d'
import Database from './database'

type DatabaseUpdaterConstructorInput = {
  githubToken: string
  openAiApikey: string
  scrapingBotUsername: string
  scrapingBotApiKey: string
}

const DummyProjectRepo: InsertProjectRepo = {
  project_repo_metadata: {
    hackernews_eli5: 'project_repo_metadata_hackernews_eli5',
    repo_eli5: 'project_repo_metadata_repo_eli5'
  },
  linkedin_profile_searchs: [
    {
      linkedin_profile_search: {
        about: 'linkedin_profile_search_about',
        followers: 5,
        language: 'linkedin_profile_search_language',
        name: 'linkedin_profile_search_name',
        sphere: 'linkedin_profile_search_sphere',
        url: 'linkedin_profile_search_url'
      },
      linkedin_profile_search_updates: [
        {
          comments_count: 5,
          likes_count: 5,
          title: 'linkedin_profile_search_updates_title',
          update_text: 'linkedin_profile_search_updates_update_text',
          update_time: 'linkedin_profile_search_updates_update_time'
        }
      ]
    }
  ],
  twitter_searchs: [
    {
      twitter_search: {
        created_at: new Date().toISOString(),
        full_text: 'twitter_search_full_text'
      },
      twitter_users: [
        {
          description: 'twitter_users_description',
          followers_count: 6,
          location: 'twitter_users_location',
          name: 'twitter_users_name',
          screen_name: 'twitter_users_screen_name',
          url: 'twitter_users_url'
        }
      ]
    }
  ],
  hackernews_storys: [
    {
      hackernews_story: {
        url: 'hackernews_story_url',
        title: 'hackernews_story_title',
        author: 'hackernews_story_author',
        comments: 'hackernews_story_comments',
        points: 5,
        story_text: 'hackernews_story_story_text'
      },
      hackernews_tags: [
        {
          title: 'hackernews_tags_title'
        }
      ]
    }
  ],
  note: 'note',
  github_repo: {
    self: {
      created_at: new Date().toISOString(),
      description: 'github_repo_description',
      fork_count: 5,
      homepage_url: 'github_repo_homepage_url',
      is_in_organization: true,
      issues_total_count: 5,
      name: 'github_repo_name',
      pull_requests_total_count: 6,
      stargazer_count: 6,
      url: 'github_repo_url'
    },
    github_languages: [
      {
        name: 'github_languages_title',
        color: 'github_languages_color'
      }
    ],
    github_repo_contributors: [
      {
        self: {
          contributions: 5
        },
        github_owner: {
          self: {
            avatar_url: 'github_repo_contributors_avatar_url',
            type: 'User',
            url: 'github_repo_contributors_github_owner_url',
            login: 'github_repo_contributors_github_owner_login',
            repositories_total_count: 5
          },
          github_user: {
            company: 'hey',
            company_html: 'hfd',
            followers_total_count: 445,
            created_at: new Date().toISOString(),
            bio: 'github_owner_implementation_description',
            bio_html: 'github_owner_implementation_description_html',
            email: 'github_owner_implementation_email',
            name: 'github_owner_implementation_name',
            twitter_username: 'github_owner_implementation_twitter_username',
            website_url: 'github_owner_implementation_website_url'
          }
        }
      }
    ],
    github_owner: {
      self: {
        avatar_url: 'github_owner_avatar_url',
        type: 'Organization',
        url: 'github_owner_url',
        login: 'github_owner_login',
        repositories_total_count: 5
      },
      github_organization: {
        created_at: new Date().toISOString(),
        description: 'github_owner_implementation_description',
        description_html: 'github_owner_implementation_description_html',
        email: 'github_owner_implementation_email',
        name: 'github_owner_implementation_name',
        twitter_username: 'github_owner_implementation_twitter_username',
        website_url: 'github_owner_implementation_website_url'
      }
    },
    github_star_historys: [
      {
        amount: 5,
        star_date: new Date().toISOString()
      }
    ],
    github_fork_historys: [
      {
        amount: 5,
        fork_date: new Date().toISOString()
      }
    ],
    github_issue_historys: [
      {
        amount: 5,
        issue_date: new Date().toISOString()
      }
    ]
  }
}

class UpdaterInstance {
  githubApi
  openAiApi
  githubScraper
  hackernewsScraper
  scrapingBot
  db

  constructor(data: DatabaseUpdaterConstructorInput) {
    this.githubApi = new GithubApi(data.githubToken)
    this.openAiApi = new OpenAiApi(data.openAiApikey)
    this.githubScraper = new GithubScraper()
    this.hackernewsScraper = new HackernewsScraper()
    this.scrapingBot = new ScrapingBot(data.scrapingBotUsername, data.scrapingBotApiKey)
    this.db = new Database()
  }

  async close() {
    console.log('closing')
    await this.db.close()
  }
  async add(dateRange: 'month' | 'week' | 'day') {
    // console.log("hmm2")
    // sql.end()
    // try {
    // sql.end();
    // } catch(e) {
    //   console.error(e)
    // }
    // console.log(GetRepositoryDataQueryStringa)
    //   await this.githubApi.fetchGraphQLApi<GetRepositoryDataQuery>(GetRepositoryDataQueryString, {
    //     owner: 'viets-software-club',
    //     repo: 'truffle-ai'
    //   }
    // )
  }

  async addBookmark(owner: string, repo: string) {
      await this.db.insertBookmark(DummyProjectRepo)
    
    // console.log('no idea')
  }
  // const { repository } = await this.githubApi.fetchGraphQLApi<GetRepositoryDataQuery>(
  //   GetRepositoryDataQueryString,
  //   {
  //     owner,
  //     repo
  //   }
  // )
  // const stargazers = this.githubApi.fetchRepositoryStargazersByTotalCount(
  //   owner,
  //   repo,
  //   repository?.stargazerCount || 0,
  //   30
  // )

  // if (!repository) throw new Error("Couldn't fetch repo")
  // const type = repository.isInOrganization ? 'Organization' : 'User'
  // const { owner: repoOwner } = repository
  // const [github_owner] = await sql.begin(async (sql) => {
  //   const [github_owner] = await sql`insert into github_owner (type) values (${type}) returning *`
  //   // let github_owner_entity;
  //   if (!repository.isInOrganization) {
  //     const user = repoOwner as UserFragment
  //     const [github_user] = await sql`
  //       insert into github_user
  //         (github_user_id, avatar_url, bio, bio_html, company, company_html, email, followers_total_count, login, name, repositories_total_count, twitter_username, url, website_url)
  //         values
  //         (${github_owner?.user_id}, ${user?.avatarUrl}, ${user?.bio || null}, ${
  //           user?.bioHTML || null
  //         }, ${user?.company || null},${user?.companyHTML || null},${user?.user_email || null}, ${
  //           user?.followers?.totalCount || null
  //         }, ${user?.login || null}, ${user?.name || null}, ${
  //           user?.repositories?.totalCount || null
  //         }, ${user?.twitterUsername || null}, ${user?.url}, ${user?.websiteUrl})
  //         returning *
  //     `
  //   } else {
  //     const org = repoOwner as OrganizationFragment
  //     const [github_organization] = await sql`
  //       insert into github_organization
  //         (github_organization_id, avatar_url, description, description_html, email, login, name, repositories_total_count, twitter_username, url, website_url)
  //         values
  //         (${github_owner?.user_id}, ${org?.avatarUrl}, ${org?.description || null}, ${
  //           org?.descriptionHTML || null
  //         }, ${org?.org_email || null}, ${org.login || null}, ${
  //           org?.repositories?.totalCount || null
  //         }, ${org?.twitterUsername || null}, ${org.url || null}, ${org?.websiteUrl || null})
  //         returning *
  //     `
  //   }
  //   const [github_repo] = await sql`
  //   insert into github_organization
  //     (description, created_at, fork_count, homepage_url, is_in_organization, issues_total_count, name, github_owner_id, pull_request_total_count, url, stargazer_count)
  //     values
  //     (${repository.description || null}, ${repository.createdAt || null}, ${
  //       repository.forkCount || null
  //     }, ${repository.homepageUrl || null}, ${repository.isInOrganization || null}, ${
  //       repository?.issues?.totalCount || null
  //     }, ${repository.name}, ${github_owner.github_owner_id}, ${
  //       repository.pullRequests.totalCount
  //     }, ${repository.url}, ${repository.stargazerCount})
  //   `

  //   const [github_star] = await sql`
  //   insert into github_stars
  //     (github_repo_id, starred_at, github_user_id)
  //     values
  //     (${repository.description || null}, ${repository.forkCount || null}, ${
  //       repository.homepageUrl || null
  //     }, ${repository.isInOrganization || null}, ${repository?.issues?.totalCount || null}, ${
  //       repository.name
  //     }, ${github_owner.github_owner_id}, ${repository.pullRequests.totalCount}, ${
  //       repository.url
  //     }, ${repository.stargazerCount})
  //   `

  //   return [github_repo, github_owner]

  // bio
  // bioHTML
  // company
  // companyHTML
  // createdAt
  // user_email: email
  // followers {
  //   totalCount
  // }
  // name
  // twitterUsername
  // url
  // websiteUrl
  // sql`
  //   -- insert owner
  //   with g_owner as
  //     (insert into github_owner (type) values (${type}) returning *);
  //   -- insert user
  //   if not ${repository.isInOrganization} then
  //     with g_user as
  //       (
  //         insert into github_user
  //         (github_user_id, avatar_url, bio, bio_html, company, company_html, email, followers_total_count, login, name, repositories_total_count, twitter_username, url, website_url)
  //         values
  //         (owner.github_user_id, ${repository.owner.avatarUrl}, ${repository.owner.bio}

  //           ) returning *;

  // `

  // avatar_url text not null,
  // bio text not null,
  // bio_html text not null,
  // company text not null,
  // company_html text not null,
  // created_at timestamp with time zone not null,
  // email text not null,
  // followers_total_count text not null,
  // login text not null,
  // name text not null,
  // repositories_total_count bigint not null,
  // twitter_username text not null,
  // url text not null,
  // website_url text not null,
  // const userStream = Readable.from(['User\n', 'User\n'], {emitClose: true})
  // const query = await sql`

  // insert into github_owner (
  //   type
  // ) values (
  //   'Murray', 68
  // )
  // returning *;
  // if ${type}
  // insert into
  // copy github_owner (type) from stdin returning github_owner_id;
  // copy github_owner (type) from stdin

  // `.writable()
  // await pipeline(userStream, query);
  // await query.end();
}

export default UpdaterInstance
// const GitHubApi = new GithubApi(process.env.GITHUB_TOKEN)

// const add = (dateRange: "month" | "week" | "day") => {
//   githubApi.

// }

// const remove = (dateRange: "month" | "week" | "day") => {

// }

// const addBookmark = (bookmark: string) => {

// }

// const removeBookmark = (bookmark: string) => {
// }

// export default {
//   add,
//   remove,
//   addBookmark,
//   removeBookmark
// }
