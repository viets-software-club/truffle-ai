import axios from 'axios'
let username = process.env.SCRAPING_BOT_USER_NAME,
  apiKey = process.env.SCRAPING_BOT_API_KEY,
  apiEndPoint = 'http://api.scraping-bot.io/scrape/data-scraper',
  auth = 'Basic ' + new Buffer(username + ':' + apiKey).toString('base64')

function sleep(ms: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function scrape() {
  try {
    let response = await axios.post(
      apiEndPoint,
      {
        scraper: 'twitterSearch',
        search: 'google'
      },
      {
        headers: {
          Accept: 'application/json',
          Authorization: auth
        }
      }
    )

    console.log('responseId received : ', response.data.responseId)
    let finalData
    do {
      // checking for response data every 5s or more, there is no need to check more often as scraping data from
      // social media is quite longer than normal scraping, and we limit how often you can do those check
      await sleep(10000)
      let responseUrl =
        'http://api.scraping-bot.io/scrape/data-scraper-response?scraper=twitterSearch&responseId=' +
        response.data.responseId
      finalData = await axios.get(responseUrl, {
        headers: {
          Accept: 'application/json',
          Authorization: auth
        }
      })
    } while (finalData == null || finalData.data.pending === true)
    return finalData.data
  } catch (e: any) {
    console.log(e.message)
  }
}

scrape().then((result) => console.log(result))
