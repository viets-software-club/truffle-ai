import axios from 'axios'
import { TwitterPost, TwitterSearchResponse } from '../../types/twitterScraping'

const apiKey = process.env.SCRAPER_API_API_KEY || ''
const SORT_BY_RETWEETS = 'retweets'
const SORT_BY_REPLIES = 'replies'

/**
 * Gets first page of twitter posts for a given hashtag
 * Does not have to be a hashtag, can be any string
 * @param hashtag - the hashtag to search for
 * @returns An array of the TwitterPosts
 */
export async function getPostsForHashtag(hashtag: string): Promise<TwitterPost[] | null> {
  try {
    const { data } = await axios.get<TwitterSearchResponse>(
      'https://api.scraperapi.com/structured/twitter/v2/search',
      {
        params: {
          api_key: apiKey,
          query: hashtag
        }
      }
    )
    if (!data.tweets || !Array.isArray(data.tweets)) return null

    return mapToTwitterPosts(data.tweets)
  } catch (error) {
    console.log(error)
    return null
  }
}

/**
 * Gets first page of twitter posts for a given hashtag and sorts the tweets by given criterion
 * @param hashtag - the hashtag to search for
 * @param sortBy - the sorting criterion
 * @returns An sorted array of the TwitterPosts
 */
export async function getPostsForHashtagSortedBy(
  hashtag: string,
  sortBy: string
): Promise<TwitterPost[] | null> {
  const tweets = await getPostsForHashtag(hashtag)
  if (!tweets) return null
  return tweets.sort((a, b) => {
    if (sortBy === SORT_BY_REPLIES) {
      return b.replies - a.replies
    }
    if (sortBy === SORT_BY_RETWEETS) {
      return b.retweetCount - a.retweetCount
    }
    return 0
  })
}

/**
 * Maps an array of the API response from TwitterSearchResponse type to TwitterPost type.
 * @param tweets - The array of tweets to be mapped.
 * @returns An array of mapped TwitterPost objects.
 */
function mapToTwitterPosts(tweets: TwitterSearchResponse['tweets']): TwitterPost[] {
  return tweets.map((tweet) => ({
    id: tweet.tweet_id ?? '',
    userName: tweet.user_name ?? 'twitter handle not included',
    realName: tweet.real_name ?? 'real name of user not included',
    userVerified: tweet.user_verified ?? false,
    // the URL given from the API call is wrongly formatted, so we have to build the url to the post here
    tweetUrl: 'https://twitter.com/' + tweet.user_name + '/status/' + tweet.conversation_id,
    date: tweet.date ?? 'date not included',
    text: tweet.text ?? 'text not included',
    retweetCount: tweet.retweets ?? -1,
    likeCount: -1, // Unfortunately this API does not deliver like counts, but we will need this count for the other issues
    replies: tweet.replies ?? -1
  }))
}
