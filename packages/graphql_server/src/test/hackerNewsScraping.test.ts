import { searchHackerNewsStories } from '../scraping/hackerNewsScraping'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function testHackerNewsScraping(repoName: string) {
  //logs the comments
  console.log(await searchHackerNewsStories(repoName))
}
