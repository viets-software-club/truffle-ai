export type TwitterPost = {
  id: string
  userName: string
  realName: string
  userVerified: boolean
  tweetUrl: string
  date: string
  text: string
  retweetCount: number
  likeCount: number
  replies: number
}

export type TwitterSearchResponse = {
  query: string
  next_cursor: string
  tweets: {
    user_id: string
    user_name: string
    real_name: string
    user_verified: boolean
    user_following: number
    user_followers: number
    user_tweets: number
    user_profile_url: string
    user_description: string
    tweet_id: string
    conversation_id: string
    date: string
    text: string
    is_reply: boolean
    replies: number
    retweets: number
    quotes: number
    views: number
    link: string
  }[]
}
