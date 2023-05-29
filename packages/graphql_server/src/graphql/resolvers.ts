// we don't need this anymore because the projects now come from the DB.
// But I will leave it here for testing purposes, until another GraphQL endpoint is implemented

// I get an error when importing this module. It works still.
// chatGPT says this might come from the standard module loader not supporting
// json files?! I do not know how to resolve this atm
import sampleProjects from '../assets/sampleProjects.json'

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
    // @TODO add typing for all types
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    projects: () => sampleProjects
  },
  SocialMediaPresence: {
    // resolves the type of SocialMediaPresence based on the platform field
    resolveType(socialMediaPresence: SocialMediaPresence) {
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
