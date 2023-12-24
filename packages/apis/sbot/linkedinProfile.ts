import axios, { AxiosResponse } from 'axios'
const username = process.env.SCRAPING_BOT_USER_NAME
const apiKey = process.env.SCRAPING_BOT_API_KEY
const apiEndPoint = 'http://api.scraping-bot.io/scrape/data-scraper'
const auth = `Basic ${new Buffer(`${username}:${apiKey}`).toString('base64')}`

type ResponseData = {
	pending?: unknown
}

function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}
const user = process.argv[2]
async function scrape() {
	try {
		const response = await axios.post(
			apiEndPoint,
			{
				scraper: 'linkedinProfile',
				url: `https://linkedin.com/in/${user}`
			},
			{
				headers: {
					Accept: 'application/json',
					Authorization: auth
				}
			}
		)

		console.log('responseId received : ', response.data.responseId)
		let finalData: AxiosResponse<ResponseData>
		do {
			// checking for response data every 5s or more, there is no need to check more often as scraping data from
			// social media is quite longer than normal scraping, and we limit how often you can do those check
			await sleep(60000)
			const responseUrl = `http://api.scraping-bot.io/scrape/data-scraper-response?scraper=linkedinProfile&responseId=${response.data.responseId}`
			finalData = await axios.get<ResponseData>(responseUrl, {
				headers: {
					Accept: 'application/json',
					Authorization: auth
				}
			})
		} while (finalData == null || finalData.data.pending === true)
		return finalData.data
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.message)
		}
	}
}

scrape().then((result) => console.log(result))
