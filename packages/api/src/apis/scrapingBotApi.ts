import axios from 'axios'

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

class ScrapingBot {
  static apiUrl = 'http://api.scraping-bot.io/scrape/data-scraper'
  username
  apiKey
  axios
  constructor(username: string, apiKey: string) {
    this.username = username
    this.apiKey = apiKey
    const credentials = Buffer.from(`${username}:${apiKey}`).toString('base64')
    this.axios = axios.create({
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${credentials}`
      }
    })
  }

  async getCompanyInfosFromLinkedIn(linkedInHandle: string, maxWaitingTimeInMs = 30000) {
    // start scraping
    const response = await this.axios.post<{ responseId: string }>(ScrapingBot.apiUrl, {
      scraper: 'linkedinCompanyProfile',
      url: 'https://linkedin.com/company/' + linkedInHandle
    })

    const maximumNumberOfRuns = Math.floor(maxWaitingTimeInMs / 5000)

    let numberOfRuns = 0 // count number of runs depending on the maxWaitingTimeInMs
    // sends request until finalData is received
    // sends request until finalData is received
    do {
      numberOfRuns++
      await sleep(5000)
      // get scraped data for linkedin
      const responseLinkedIn = await axios.get<LinkedinCompanyResponse>(
        `http://api.scraping-bot.io/scrape/data-scraper-response?scraper=linkedinCompanyProfile&responseId=${response.data.responseId}`
      )
      if (responseLinkedIn != null) return responseLinkedIn.data[0]
    } while (numberOfRuns < maximumNumberOfRuns)
  }
}

export default ScrapingBot
