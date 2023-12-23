import axios, { AxiosResponse } from 'axios'
const username = process.env.SCRAPING_BOT_USER_NAME
const apiKey = process.env.SCRAPING_BOT_API_KEY
const apiEndPoint = 'http://api.scraping-bot.io/scrape/data-scraper'
const auth = `Basic ${new Buffer(`${username}:${apiKey}`).toString('base64')}`

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
const keywords = process.argv[2]
async function scrape() {
  try {
    const response = await axios.post(
      apiEndPoint,
      {
        scraper: 'linkedinSearchResult',
        keywords: 'philipp czernitzki'
      },
      {
        headers: {
          Accept: 'application/json',
          Authorization: auth
        }
      }
    )

    console.log('responseId received : ', response.data.responseId)
    // biome-ignore lint/suspicious/noExplicitAny: No linting required in this test file for http request
    let finalData: AxiosResponse<any, any> | null
    do {
      // checking for response data every 5s or more, there is no need to check more often as scraping data from
      // social media is quite longer than normal scraping, and we limit how often you can do those check
      await sleep(60000 * 10)
      const responseUrl =
        `http://api.scraping-bot.io/scrape/data-scraper-response?scraper=linkedinSearchResult&responseId=${response.data.responseId}`
      finalData = await axios.get(responseUrl, {
        headers: {
          Accept: 'application/json',
          Authorization: auth
        }
      })
    } while (finalData == null || finalData.data.pending === true)
    return finalData.data
  } catch (e) {
    console.log(e.message)
  }
}

scrape().then((result) => console.log(result))
