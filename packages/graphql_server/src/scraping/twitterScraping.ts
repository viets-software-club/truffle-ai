import axios from 'axios'
import { TwitterPost, TwitterSearchResponse } from '../../types/twitterScraping'

const apiKey = process.env.SCRAPER_API_API_KEY || ''

/**
 * Gets first page of twitter posts for a given hashtag
 * @param hashtag - the hashtag to search for
 * @returns An array of the TwitterPosts
 */
export async function getPostsForHashtag(hashtag: string): Promise<TwitterPost[]> {
  let result: TwitterSearchResponse
  try {
    const response = await axios.get<TwitterSearchResponse>(
      'https://api.scraperapi.com/structured/twitter/v2/search',
      {
        params: {
          api_key: apiKey,
          query: hashtag
        }
      }
    )
    result = response.data
    return mapToInternalType(result.tweets)
  } catch (error) {
    console.log('Could not fetch twitter search results for: ' + hashtag)
    return []
  }
}

/**
 * Maps an array of the API response from TwitterSearchResponse type to TwitterPost type.
 * @param tweets - The array of tweets to be mapped.
 * @returns An array of mapped TwitterPost objects.
 */
function mapToInternalType(tweets: TwitterSearchResponse['tweets']): TwitterPost[] {
  return tweets.map((tweet) => ({
    id: tweet.tweet_id ?? '',
    userId: tweet.user_id ?? '',
    conversationId: tweet.conversation_id ?? '',
    // the URL given from the API call is wrongly formatted, so we have to build the url to the post here
    tweetUrl: 'https://twitter.com/' + tweet.user_name ?? '' + '/status/' + tweet.conversation_id ?? '',
    text: tweet.text ?? '',
    retweetCount: tweet.retweets ?? 0,
    likeCount: 0, // Unfortunately this API does not deliver like counts, but we will need this count for the other issues
    replies: tweet.replies?? 0
  }))
}
