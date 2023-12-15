import axios from 'axios'

class HackernewsScraper {
  static apiUrl = `http://hn.algolia.com/api/v1`

  async fetchHackernewsStoryWithCommentsByText(text: string, maxTimeInMsBack: number) {
    return Promise.all(
      (await this.fetchHackernewsStoriesByText(text))
        .filter((story) => isRecent(story.created_at, maxTimeInMsBack))
        .map(async (story) => {
          return {
            ...story,
            comments: await this.fetchHackernewsCommentsByStoryId(story.objectID)
          }
        })
    )
  }

  /**
   * Search Hackernews stories based on the given text, retrieve comments,
   * @param text - search query to find Hackernews stories
   * @returns the comments and the links to the posts. please receive in this format: let [comments, links] = searchHackerNewsStories("companyname")
   */
  async fetchHackernewsStoriesByText(text: string) {
    const response = await axios.get<HackernewsStoriesResponse>(
      `${HackernewsScraper.apiUrl}/search?query=${text}&tags=story`
    )
    return response.data.hits
  }

  /**
   * Retrieve Hacker News comments for a given story ID.
   * @param story_id - The ID of the story to fetch comments for.
   * @returns A promise that resolves to an array of comments.
   */
  async fetchHackernewsCommentsByStoryId(storyId: string) {
    const response = await axios.get<HackernewsStoriesResponse>(
      `${HackernewsScraper.apiUrl}/search?tags=comment,story_${storyId}`
    )
    return response.data.hits
  }
}

/**
 * Check if the given JSON-formatted date is more @param maxTimeInMsBack ago.
 * @param date
 * @param maxTimeInMsBack
 * @returns boolean indicating if the date is more than two months ago.
 */
function isRecent(date: string, maxTimeInMsBack: number): boolean {
  const jsonDateObj = new Date(date)
  const currentDate = new Date()
  const timeDiff = currentDate.getTime() - jsonDateObj.getTime()
  // const twoMonthsInMillis = 60 * 24 * 60 * 60 * 1000
  return timeDiff <= maxTimeInMsBack
}

export default HackernewsScraper
