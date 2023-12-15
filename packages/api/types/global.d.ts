declare namespace NodeJS {
  interface ProcessEnv {
    SUPABASE_URL: string
    SUPABASE_REFERENCE_ID: string
    SUPABASE_SERVICE_KEY: string
    GITHUB_API_TOKEN: string
    SUPABASE_DATABASE_URL: string
  }
}

declare module 'bundle-text:*.graphql' {
  const content: string
  export default content
}
declare module 'bundle-text:*.txt' {
  const content: string
  export default content
}
declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode

  export default Schema
}

type Bookmark = {
  id: any
  repo_name: any
}

type OpenAiResponse = {
  id: string
  object: string
  created: number
  model: string
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
  choices: {
    message: {
      role: string
      content: string
    }
    finish_reason: string
    index: number
  }[]
}

type LinkedinCompanyResponse = {
  url: string
  name: string
  founded: string
  sphere: string
  followers: number
  logo: string
  image: string
  employeesAmountInLinkedin: string
  about: string
  website: string
  locations: string[]
  employees: {
    img: string
    title: string
    subtitle: string
  }[]
  updates: {
    time: string
    text: string
    likes_count: number
    comments_count: number
  }[]
  show_more: string[]
  affiliated: {
    title: string
    subtitle: string
    location: string
    Links: string
  }[]
  browse_jobs: string[]
  company_id: string
  timestamp: string
  slogan: string
  crunchbase_url: string
  stock_info: string
  funding: string
  investors: string
  similarPages: string[]
  Website: string
  Industries: string
  'Company size': string
  Headquarters: string
  Type: string
  Specialties: string
}[]

type HackernewsStoriesResponse = {
  hits: {
    created_at: string
    title: string
    url: string
    author: string
    points: number
    story_text: string
    comment_text: string
    num_comments: number
    story_id: string
    story_title: string
    story_url: string
    parent_id: string
    created_at_i: number
    _tags: string[]
    objectID: string
    _highlightResult: {
      title: {
        value: string
        matchLevel: string
        fullyHighlighted: boolean
        matchedWords: string[]
      }
      url: {
        value: string
        matchLevel: string
        fullyHighlighted: boolean
        matchedWords: string[]
      }
      author: {
        value: string
        matchLevel: string
        matchedWords: string[]
      }
    }
  }[]
}
