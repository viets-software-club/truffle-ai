import { getRepositoryTopics } from '../api/githubApi'
import {
  Topic,
  getCategoryFromGPT,
  getELI5FromReadMe,
  getHackernewsSentiment
  // categorizeProjectGeneral
} from '../api/openAIApi'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function testgetEli5FromReadMe() {
  //get readme from githubscraping method in real application
  const readMe = `
    SuperAGI logo, Open-source framework to build, manage and run useful Autonomous AI Agents. SuperAGI forks SuperAGI stars SuperAGI pull-requests SuperAGI Commits. Follow SuperAGI. Follow _superAGI Join SuperAGI Discord Community. Share SuperAGI Repository. Follow _superAGI Share on Telegram Share on Reddit Buy Me A Coffee. bulb Features Provision, Spawn & Deploy Autonomous AI Agents. Extend Agent Capabilities with Tools. Run Concurrent Agents Seamlessly. Graphical User Interface. Action Console. Multiple Vector DBs. Multi-Modal Agents. Agent Trajectory Fine-Tuning. Performance Telemetry. Optimized Token Usage. Agent Memory Storage. Looping Detection Heuristics. Concurrent Agents. Resource Manager. hammer_and_wrench Tools Slack Email Jira File Manager Google Search Dall-E Github Web Interaction Zapier Instagram Trello Google Analytics Duckduckgo Discord. computer Screenshots GUI. SuperAGI logo. motorway Roadmap Click here to checkout the latest roadmap link. gear Setting up Download the repo using git clone https://github.com/TransformerOptimus/SuperAGI.git in your terminal or directly from github page in zip format. Navigate to the directory using cd SuperAGI and create a copy of config_template.yaml and name it config.yaml. Enter your unique OpenAI API Key, Google key, Custom search engine ID without any quotes or spaces in config.yaml file. Follow the links below to get your keys: Keys Accessing the keys OpenAI API Key Sign up and create an API key at OpenAI Developer Google API key Create a project in the Google Cloud Console and enable the API you need (for example: Google Custom Search JSON API). Then, create an API key in the "Credentials" section. Custom search engine ID Visit Google Programmable Search Engine to create a custom search engine for your application and obtain the search engine ID. Ensure that Docker is installed in your system, if not, Install it from here. Once you have Docker Desktop running, run command : docker-compose up --build in SuperAGI directory. Open your browser and go to localhost:3000 to see SuperAGI running. warning Under Development! This project is under active development and may still have issues. We appreciate your understanding and patience. If you encounter any problems, please first check the open issues. If your issue is not listed, kindly create a new issue detailing the error or problem you experienced. Thank you for your support! film_projector Curated Videos How To Install SuperAGI on: Github Codespaces Windows/MacOS/Linux woman_technologist Contributors TransformerOptimus Cptsnowcrasher vectorcrow Akki-jain Autocop-AgentCOLONAYUSHluciferlinx101mukundans89Fluder-ParadynenborthynihirrTarraann starStar History Star History Chart
    `
  console.log(await getELI5FromReadMe(readMe))
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function testHackerNewsSentiment() {
  //get real comments from method in hackerNewsScraper. E.g. searchHackerNewsStories('SuperAGI')

  const comments =
    '&gt; What do you think?<p>Universal basic incoom. This is what I argue in my post on AI&#x27;s impact on programming jobs -- my take is that if AI ends up automating low end tasks, then it opens up opportunities for us to spend our time on more creative and challenging problems. The current generation of models know all the data structures and algorithms but do they have the ability to extrapolate their knowledge to come up with novel solutions to unseen problems -- which is what we are good at. Similarly, there are tons of interesting problems which are unsolved in other domains and we could use AI&#x27;s help to tackle those. Naval Ravikant talks about something similar on Joe Rogan Podcast -- where he says everybody can be rich. His argument was that if every human on the planet could become an engineer, or doctor, or scientist, we would solve all of our basic problems in few years and then humanity would be free to explore creative things. So if AI gets us there, we could be writers, actors, scientists.<p><a href='
  console.log(await getHackernewsSentiment(comments))
}

const testCategorization = async (repoName: string, owner: string) => {
  const repoTopics = await getRepositoryTopics(owner, repoName, process.env.GITHUB_API_TOKEN)
  console.log('topics', repoTopics)
  const categoryNumbers = await getCategoryFromGPT(repoTopics, null)
  console.log('Categories:', categoryNumbers)
}

void testCategorization('next.js', 'vercel')
