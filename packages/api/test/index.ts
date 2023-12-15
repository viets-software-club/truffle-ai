import Updater from '../src/index'

;(async () => {
  const UpdaterInstance = new Updater({
    githubToken: process.env.GITHUB_API_TOKEN,
    openAiApikey: '',
    scrapingBotUsername: '',
    scrapingBotApiKey: ''
  })
  await UpdaterInstance.addBookmark('viets-software-club', 'truffle-ai')
  await UpdaterInstance.close()
})()
