import { GitHubInfo } from '../types/githubApi'
import { getContributorCount, getRepoInfo } from './api/githubApi'

/**
 * Calculates time specified by the parameters
 * @param {number} hours - The number of hours to subtract.
 * @param {number} minutes - The number of minutes to subtract.
 * @returns {string} The specified time in ISO format.
 */
export const getCutOffTime: (hours: number, minutes: number) => string = (
  hours: number,
  minutes: number
) => {
  const cutoffTime = new Date()
  cutoffTime.setHours(cutoffTime.getHours() - hours)
  cutoffTime.setMinutes(cutoffTime.getMinutes() - minutes)
  return cutoffTime.toISOString()
}

/**
 * Returns the githubData for the specified repo.
 * @param {string} name - The name of the repository
 * @param {string} owner The name of the owner of the repository.
 */
export const getGithubData = async (name: string, owner: string) => {
  // query send to github. If this is changed the corresponding types have to be changed as well
  const query = `
    query {
      repository(owner: "${owner}", name: "${name}") {
        name 
        description
        stargazerCount
        issues(filterBy: {states: [OPEN]}) {
          totalCount
        }
        forkCount
        pullRequests(states: [OPEN]) {
          totalCount
        }
        url
        homepageUrl
        languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
          edges {
            node {
              name 
              color
            }
          }
        }
        owner {
          login
        }
      }
    }`

  // call github api
  const githubData: GitHubInfo | null = await getRepoInfo(
    query,
    'Bearer ' + process.env.GITHUB_API_TOKEN
  )

  return githubData ? githubData : null
}

/**
 * This function should be put somewhere else later on. Credits to chatGPT for creating it
 * Parses a GitHub URL and extracts the repository name and owner.
 * @param {string} url - The GitHub URL.
 * @returns {{name: string, owner: string} | null} An object containing the owner and repo names, or null if the URL is invalid.
 */
export const parseGitHubUrl = (url: string) => {
  const pattern = /https?:\/\/github\.com\/([^/]+)\/([^/]+)(?:\/[\w.-]+)*$/
  const match = pattern.exec(url)

  if (match && match.length === 3) {
    const [, owner, repo] = match
    return { owner, repo }
  }

  return null
}

export const mockTwitterPosts = [
  {
    id: '1670711618710241281',
    userName: 'MiguelGargallo',
    realName: 'Miguel Gargallo',
    userVerified: false,
    tweetUrl: 'https://twitter.com/MiguelGargallo/status/1670711618710241281',
    date: 'Mon Jun 19 08:34:24 +0000 2023',
    text:
      'Pending, interesting\n' +
      '\n' +
      'How should #business #leaders approach the #metaverse? | #WIRED #UK\n' +
      '\n' +
      'Miguel Gargallo divulgador de #IA #Inteligencia #Artificial #ChatGPT 🍔 Stacks: ⚫️ #NextJS 🟦 #Typescript 🟨 #Javascript, 🦀 #Rust, #iOS #iPhone mirando #repos de 🐈‍⬛ #GitHub + info 🗞️…',
    retweetCount: 0,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1670711030429745152',
    userName: 'aiforme_wiki',
    realName: 'aiforme.wiki',
    userVerified: false,
    tweetUrl: 'https://twitter.com/aiforme_wiki/status/1670711030429745152',
    date: 'Mon Jun 19 08:32:04 +0000 2023',
    text:
      '🚀 @GitHub Copilot X: your ultimate AI-powered coding sidekick! \n' +
      '\n' +
      'Integrates seamlessly into your workflow, providing context-aware conversations, storytelling pull requests, and command-line prowess. \n' +
      '\n' +
      'Link - https://t.co/CYLiZahmpd\n' +
      '\n' +
      '#GitHub #AItools',
    retweetCount: 0,
    likeCount: -1,
    replies: 1
  },
  {
    id: '1668603038712340482',
    userName: 'SinghiShubh',
    realName: 'Shubh Singhi',
    userVerified: false,
    tweetUrl: 'https://twitter.com/SinghiShubh/status/1668603038712340482',
    date: 'Tue Jun 13 12:55:40 +0000 2023',
    text:
      'Are you looking for a (free) design tool to supercharge your workflow?\n' +
      '\n' +
      'Try Paper Sketching.\n' +
      '\n' +
      "It's proven to accelerate creativity and collaboration.\n" +
      '\n' +
      'Pick up a pen and paper, and get started prototyping now 💪',
    retweetCount: 1,
    likeCount: -1,
    replies: 3
  },
  {
    id: '1670710572789252096',
    userName: 'mesudarshan',
    realName: 'Sudarshan Koirala',
    userVerified: false,
    tweetUrl: 'https://twitter.com/mesudarshan/status/1670710572789252096',
    date: 'Mon Jun 19 08:30:15 +0000 2023',
    text:
      'Do you want to learn @LangChainAI  ?\n' +
      '\n' +
      'I have created a youtube playlist for you to start learning LangChain step by step. Enjoy 😎\n' +
      '\n' +
      '🎥 Video link: https://t.co/Z3UcgA8uMl\n' +
      '\n' +
      '💻 GitHub code: https://t.co/tIq1fhrWSH\n' +
      '\n' +
      '#langchain #openai #llm #python #github #datascience #nlp https://t.co/Mal8NXVcOU',
    retweetCount: 0,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1670708733423353856',
    userName: 'HonkonenKJ',
    realName: 'KJ Honkonen',
    userVerified: false,
    tweetUrl: 'https://twitter.com/HonkonenKJ/status/1670708733423353856',
    date: 'Mon Jun 19 08:22:56 +0000 2023',
    text:
      'https://t.co/PjOdb8UvMH\n' +
      'GitHubin AI Copilot muuttaa koodauksen tulevaisuutta, generoi koodia kuin runoilija sonetteja, mahdollistaen kehittäjien keskittyä luoviin haasteisiin.Jopa 20-25% tuottavuuden kasvu voi olla kriittistä startupien selviytymiselle #GitHub #AICopilot #Koodaus',
    retweetCount: 0,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1670708314454491137',
    userName: 'AmanKumarSinha_',
    realName: 'Aman Kumar Sinha',
    userVerified: false,
    tweetUrl: 'https://twitter.com/AmanKumarSinha_/status/1670708314454491137',
    date: 'Mon Jun 19 08:21:17 +0000 2023',
    text:
      '🚀 Introducing my new project: To-Do List App!\n' +
      '\n' +
      '💻 Simplify your task management with this Node.js and MongoDB-powered app.\n' +
      '\n' +
      'Feel free to explore the code on GitHub: https://t.co/O4zYnJZjjY\n' +
      '\n' +
      '#webdevelopment #nodejs #mongodb #github #project',
    retweetCount: 0,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1670707031291080704',
    userName: 'TiDB_Developer',
    realName: 'TiDB',
    userVerified: false,
    tweetUrl: 'https://twitter.com/TiDB_Developer/status/1670707031291080704',
    date: 'Mon Jun 19 08:16:11 +0000 2023',
    text:
      '💻 Want to create an awesome personalized dashboard with your #GitHub data? Look no further! \n' +
      'Join our webinar to discover the simple and fun process of crafting your very own dashboard using the incredible power of #TiDB Serverless and #Vercel.',
    retweetCount: 0,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1661903477121982464',
    userName: 'heomai2019',
    realName: 'MQQSO',
    userVerified: false,
    tweetUrl: 'https://twitter.com/heomai2019/status/1661903477121982464',
    date: 'Fri May 26 01:14:00 +0000 2023',
    text: '🌴 The Best Sandal for Walking and Standing All Summer. 🌴',
    retweetCount: 101,
    likeCount: -1,
    replies: 106
  },
  {
    id: '1670700316923183104',
    userName: 'bamitav',
    realName: '𝔸𝕞𝕚𝕥𝕒𝕧 𝔹𝕙𝕒𝕥𝕥𝕒𝕔𝕙𝕒𝕣𝕛𝕖𝕖',
    userVerified: false,
    tweetUrl: 'https://twitter.com/bamitav/status/1670700316923183104',
    date: 'Mon Jun 19 07:49:30 +0000 2023',
    text:
      'Is Traditional #Coding Worthwhile in the Era of Low-Code and No-Code Platforms?\n' +
      '\n' +
      'https://t.co/BxbBvXaabB\n' +
      '\n' +
      '#codinglife #code #developer #DevOps #CloudNative #cloud #tech #lowcode #NoCode #DevSecOps #AIOps #MLOps #k8s #Kubernetes #Docker #github #Engineering #technology #OpenSource…',
    retweetCount: 0,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1670697925733765121',
    userName: 'HomesAtMetacoda',
    realName: 'Michelle Homes @michelle@proc.social',
    userVerified: false,
    tweetUrl: 'https://twitter.com/HomesAtMetacoda/status/1670697925733765121',
    date: 'Mon Jun 19 07:40:00 +0000 2023',
    text:
      'Learn how to clone a #GitHub repository in #SASStudio using SSH. @BogdanTeleuca steps through the process and shares some valuable learnings that will save you lots of research time and quicker success!\n' +
      '#SASviya #SAStip #SAsusers #github #SASadmin #SAS\n' +
      'https://t.co/uGnhjgMDcA https://t.co/Z0jmsLGZKj',
    retweetCount: 0,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1670692204593967105',
    userName: 'Openinside_co',
    realName: 'OPENINSIDE',
    userVerified: false,
    tweetUrl: 'https://twitter.com/Openinside_co/status/1670692204593967105',
    date: 'Mon Jun 19 07:17:16 +0000 2023',
    text:
      'How do you prefer to learn new skills??\n' +
      '\n' +
      '#technology #GitHub #Bahrain #opensource #skills\n' +
      '@WeAreDevs\n' +
      '@OpenSourceOrg',
    retweetCount: 0,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1670688342759952385',
    userName: 'adaptsmedia',
    realName: 'Adapts Media',
    userVerified: false,
    tweetUrl: 'https://twitter.com/adaptsmedia/status/1670688338209120256',
    date: 'Mon Jun 19 07:01:55 +0000 2023',
    text: '#Git #GitHub #Software #Service #GraphicalUserInterface #Web  #Linux #Microsoft #Science #Technology #UserManagement  #Future #Science #Technology #Programming #Coding',
    retweetCount: 0,
    likeCount: -1,
    replies: 1
  },
  {
    id: '1668300162026942478',
    userName: 'aziontech',
    realName: 'Azion',
    userVerified: false,
    tweetUrl: 'https://twitter.com/aziontech/status/1668300162026942478',
    date: 'Mon Jun 12 16:52:08 +0000 2023',
    text:
      'Securing applications is easy when you manage and renew TSL certificates using Azion!🔒🚀\n' +
      '\n' +
      "Focus on building while we take care of your applications with Let's Encrypt Certificate Authority. Read more. » https://t.co/UiDJBsYHMk \n" +
      '\n' +
      '#Azion #AzionForDevs #LetsEncrypt',
    retweetCount: 0,
    likeCount: -1,
    replies: 1
  },
  {
    id: '1670683264493973509',
    userName: 'YenidunyaCise',
    realName: 'firstoneislastone（互关、涨粉互fo）',
    userVerified: false,
    tweetUrl: 'https://twitter.com/YenidunyaCise/status/1670683264493973509',
    date: 'Mon Jun 19 06:41:44 +0000 2023',
    text: '#github 互关\nhttps://t.co/3b87ol58y8\n关注必回哦！',
    retweetCount: 0,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1670682872326287360',
    userName: 'itcscyber',
    realName: 'ITCS',
    userVerified: false,
    tweetUrl: 'https://twitter.com/itcscyber/status/1670682872326287360',
    date: 'Mon Jun 19 06:40:11 +0000 2023',
    text:
      'Researchers from VulnCheck have observed a campaign using real security researchers as bait for malware. \n' +
      '\n' +
      'Read more 🔗 https://t.co/quOHwUrKwD\n' +
      '\n' +
      '#scam #github #malware #malwarebytes #cybersecurity #cybersecurityawareness #managedserviceprovider #κυβερνοασφάλεια https://t.co/WBQn7PxU7I',
    retweetCount: 0,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1670682574463680514',
    userName: 'HoutenPieter',
    realName: 'Pieter Houten',
    userVerified: false,
    tweetUrl: 'https://twitter.com/HoutenPieter/status/1670682574463680514',
    date: 'Mon Jun 19 06:39:00 +0000 2023',
    text:
      'Once you get the taste of #GitHub and interactive #mapping...\n' +
      'I uploaded a #socialnetworkanalysis #graph to my GitHub page: https://t.co/oMNoKy3rQc\n' +
      'For this I created a distance matrix in #QGIS and then imported distances under 45 km as edges into #Gephi.\n' +
      '#digitalhumanities 🇪🇸🇵🇹 https://t.co/kdAki2TEmg',
    retweetCount: 1,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1670680130203648000',
    userName: 'evitadb_io',
    realName: 'evitaDB',
    userVerified: false,
    tweetUrl: 'https://twitter.com/evitadb_io/status/1670680130203648000',
    date: 'Mon Jun 19 06:29:17 +0000 2023',
    text:
      'In the next post in the "How we built our documentation site in #NextJS" series, Míra Alt discusses our approach approach to multi-language code examples, designed for compatibility with plain Markdown rendering on #GitHub and optimization for printing.\n' +
      '\n' +
      'https://t.co/uQzYfylMVP',
    retweetCount: 1,
    likeCount: -1,
    replies: 0
  },
  {
    id: '1670679431143366658',
    userName: 'krutikkkkkkkkk',
    realName: 'Krutik',
    userVerified: false,
    tweetUrl: 'https://twitter.com/krutikkkkkkkkk/status/1670679431143366658',
    date: 'Mon Jun 19 06:26:30 +0000 2023',
    text: 'Drop your Github Profile!\n\n#github',
    retweetCount: 0,
    likeCount: -1,
    replies: 1
  }
]

export const mockForkHistory = [
  {
    date: '2022/6/3 19:57:11',
    count: 0
  },
  {
    date: '2023/6/13 15:11:54',
    count: 30
  },
  {
    date: '2023/6/13 15:41:52',
    count: 90
  },
  {
    date: '2023/6/13 16:5:18',
    count: 120
  },
  {
    date: '2023/6/13 16:30:57',
    count: 150
  },
  {
    date: '2023/6/13 16:57:44',
    count: 180
  },
  {
    date: '2023/6/13 17:36:43',
    count: 210
  },
  {
    date: '2023/6/13 18:14:46',
    count: 240
  },
  {
    date: '2023/6/13 19:57:5',
    count: 300
  },
  {
    date: '2023/6/13 21:50:46',
    count: 330
  },
  {
    date: '2023/6/14 0:28:33',
    count: 360
  },
  {
    date: '2023/6/14 3:9:57',
    count: 390
  },
  {
    date: '2023/6/14 4:44:44',
    count: 420
  },
  {
    date: '2023/6/14 6:42:5',
    count: 450
  },
  {
    date: '2023/6/14 11:35:50',
    count: 510
  },
  {
    date: '2023/6/14 15:9:25',
    count: 540
  },
  {
    date: '2023/6/14 21:18:18',
    count: 570
  },
  {
    date: '2023/6/15 4:22:36',
    count: 600
  },
  {
    date: '2023/6/15 14:10:51',
    count: 630
  },
  {
    date: '2023/6/15 17:16:37',
    count: 660
  },
  {
    date: '2023/6/16 4:32:46',
    count: 720
  },
  {
    date: '2023/6/16 8:1:2',
    count: 750
  },
  {
    date: '2023/6/16 11:23:30',
    count: 780
  },
  {
    date: '2023/6/16 16:20:50',
    count: 810
  },
  {
    date: '2023/6/17 1:39:55',
    count: 843
  }
]
