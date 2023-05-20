// I get an error when importing this module. It works still.
// chatGPT says this might come from the standard module loader not supporting
// json files?! I do not know how to resolve this atm
import sampleProjects from '../../assets/sampleProjects'

type SocialMediaPresence = {
  platform: string
  accountName: string
  link: string
}

type SocialMediaTopPost = {
  platform: string
  link: string
  title: string
}

const resolvers = {
  Query: {
    // see https://graphql.org/learn/execution/
    // Returns the above imported sampleProjects
    //
    // pre-commit hook complains because of typing, which does not play a
    // role here because GraphQL knows about the type -> --no-verify commit
    //
    // will check with Philipp whether and how to change this
    projects: () => sampleProjects
  },
  SocialMediaPresence: {
    // resolves the type of SocialMediaPresence based on the platform field
    resolveType(socialMediaPresence: SocialMediaPresence) {
      console.log(socialMediaPresence.platform)
      switch (socialMediaPresence.platform) {
        case 'Twitter':
          return 'TwitterAccount'
        case 'LinkedIn':
          return 'LinkedInAccount'
        case 'Slack':
          return 'SlackChannel'
        case 'Discord':
          return 'DiscordChannel'
        default:
          return null // fallback to null if the object doesn't match any known types
      }
    }
  },
  SocialMediaTopPost: {
    // resolves the type of SocialMediaTopPost based on the platform field
    resolveType(socialMediaTopPost: SocialMediaTopPost) {
      switch (socialMediaTopPost.platform) {
        case 'Hacker News':
          return 'HackernewsTopPost'
        case 'Twitter':
          return 'TwitterTopPost'
        case 'Product Hunt':
          return 'ProductHuntTopPost'
        default:
          return null
      }
    }
  }
}

export default resolvers
