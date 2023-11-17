import axios, { AxiosRequestConfig } from 'axios'
import { LinkedInCompanyProfile, CompanyDataResponse } from '../../types/linkedInScraping'

const username = process.env.SCRAPING_BOT_USER_NAME || ''
const apiKey = process.env.SCRAPING_BOT_API_KEY || ''
const apiEndPoint = process.env.SCRAPING_BOT_API_ENDPOINT || ''
const auth = 'Basic ' + Buffer.from(username + ':' + apiKey).toString('base64')
const SLEEPING_TIME_IN_MS = 5000

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

/**
 * There is an inital POST with the scraping parameters to get a unique responseId from the API.
 * The second GET request then finally returns the scraping result.
 * It is important to note, that the API is using an Array of objects for the data attribute.
 * According to their documentation, they needed to implement it in this two-request-way, because LinkedIn uses protection tools to avoid bots
 * https://www.scraping-bot.io/web-scraping-documentation/#data-scraper-api
 * @param linkedInHandle
 * @returns the specified LinkedInCompanyProfileType including the most important data
 */
// eslint-disable-next-line sonarjs/cognitive-complexity -- don't kow why this is "too complex"  - @thomas-woehrle
export async function getCompanyInfosFromLinkedIn(
  linkedInHandle: string,
  maximumWaitingTimeInMs = 30000
): Promise<LinkedInCompanyProfile | null> {
  try {
    // builds the axios request configuration
    const requestConfig: AxiosRequestConfig = {
      headers: {
        Accept: 'application/json',
        Authorization: auth
      }
    }
    // specifies the used scraping mechanism, which is in this case linkedinCompanyProfile
    const requestData = {
      scraper: 'linkedinCompanyProfile',
      url: 'https://linkedin.com/company/' + linkedInHandle
    }

    const response = await axios.post<{ responseId: string }>(
      apiEndPoint,
      requestData,
      requestConfig
    )

    let finalData: CompanyDataResponse | null = null

    const maximumNumberOfRuns = Math.floor(maximumWaitingTimeInMs / SLEEPING_TIME_IN_MS)

    let numberOfRuns = 0 // counts the number of runs depending on the maximumWaitingTimeInMs
    // sends the request until finalData is received
    do {
      numberOfRuns++
      await sleep(SLEEPING_TIME_IN_MS)
      const responseUrl = `http://api.scraping-bot.io/scrape/data-scraper-response?scraper=linkedinCompanyProfile&responseId=${response.data.responseId}`
      const finalDataResponse = await axios.get<CompanyDataResponse[]>(responseUrl, requestConfig)
      finalData = finalDataResponse.data[0]
    } while (!finalData && numberOfRuns < maximumNumberOfRuns)

    if (!finalData) throw new Error('finalData is falsy')

    return {
      url: finalData.url ?? '',
      name: finalData.name ?? '',
      founded: finalData.founded ?? '',
      followers: finalData.followers ?? '',
      employeesAmountInLinkedin: finalData.employeesAmountInLinkedin ?? 0,
      about: finalData.about ?? '',
      website: finalData.website ?? '',
      updates: finalData.updates ?? [],
      crunchbaseUrl: finalData.crunchbase_url ?? '',
      industries: finalData.Industries ?? '',
      hqLocation: finalData.Headquarters ?? '',
      specialties: finalData.Specialties ?? ''
    }
  } catch (error) {
    console.error("Error in getCompanyInfosFromLinkedIn for company '" + linkedInHandle + "'")
    console.log(error)
    return null
  }
}
