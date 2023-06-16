export type HackerNewsStoriesResponse = {
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

export type HackerNewsStoriesResponseHitsArray = {
  created_at: string
  title: string
  url: string | null
  author: string
  points: number
  story_text: string | null
  comment_text: string | null
  num_comments: number
  story_id: string | null
  story_title: string | null
  story_url: string | null
  parent_id: string | null
  created_at_i: number
  _tags: string[]
  objectID: string
  _highlightResult: {
    title: Record<string, unknown>
    url: Record<string, unknown>
    author: Record<string, unknown>
  }
}[]
export type HackerNewsStoriesResponseHit = {
  created_at: string
  title: string
  url: string | null
  author: string
  points: number
  story_text: string | null
  comment_text: string | null
  num_comments: number
  story_id: string | null
  story_title: string | null
  story_url: string | null
  parent_id: string | null
  created_at_i: number
  _tags: string[]
  objectID: string
  _highlightResult: {
    title: Record<string, unknown>
    url: Record<string, unknown>
    author: Record<string, unknown>
  }
}

export type GetHackerNewsCommentsResponseHitArray = {
  created_at: string
  title?: string | null
  url?: string | null
  author: string
  points?: number | null
  story_text?: string | null
  comment_text: string
  num_comments?: number | null
  story_id: number
  story_title: string
  story_url: string
  parent_id: number
  created_at_i: number
  _tags: string[]
  objectID: string
  _highlightResult: unknown
}[]

export type EachHackerNewsComment = {
  created_at: string
  title: null
  url: null
  author: string
  points: null
  story_text: null
  comment_text: string
  num_comments: null
  story_id: number
  story_title: string
  story_url: string
  parent_id: number
  created_at_i: number
  _tags: string[]
  objectID: string
  _highlightResult: {
    author: object
    comment_text: object
    story_title: object
    story_url: object
  }
}

export type GetHackerNewsCommentsResponseHits = {
  hits: EachHackerNewsComment[]
}
