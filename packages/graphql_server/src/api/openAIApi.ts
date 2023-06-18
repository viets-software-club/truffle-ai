import axios from 'axios'
import { RequestBodyOpenAI, ResponseBodyOpenAi } from '../../types/openAIApi'
import { getRepositoryTopics } from './githubApi'

export { getELI5FromReadMe, getHackernewsSentiment }

const model = 'gpt-3.5-turbo'
const openAIapiUrl = 'https://api.openai.com/v1/chat/completions'
const errorMessage =
  'The fetched response was empty. Most likely there is something wrong with the JSON request.'

//The Header for all requests
const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + process.env.OPENAI_API_KEY //process.env.OPENAI_API_KEY
}

/**
 * Retrieves an "Explain Like I'm 5" (ELI5) summary from a project's README.
 * @param readMe - The content of the project's README.
 * @returns The ELI5 summary of the project.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getELI5FromReadMe(readMe: string) {
  const questionEli5 = //this is the question send to openAI
    'The following text describes a programming project that is currently in development. Explain to me what the project is trying to achieve without telling me how they are doing so. Please use around 80 words and do not get too technical'

  const requestBodyEli5: RequestBodyOpenAI = {
    model: model,
    messages: [
      {
        role: 'system',
        content:
          'You are a Computer Science Teacher talking to his students and the students do not have a deep technical understanding. So the teacher tries to stay simple'
      },
      { role: 'user', content: questionEli5 + readMe }
    ]
  }

  try {
    const response = await axios.post(openAIapiUrl, requestBodyEli5, { headers })
    const data = response.data as ResponseBodyOpenAi

    if (!data?.choices[0]?.message?.content) {
      console.log(errorMessage)
      return null
    } else {
      const content: string = data.choices[0].message.content
      console.log(content)
      return content
    }
  } catch (error) {
    console.log('there was an error with the Eli5. Probably the ReadMe file ')
    return null
  }
}

/**
 * Retrieves the general sentiment about a project from Hacker News comments.
 * @param comments - The comments discussing the project.Scraped from Hackernews
 * @returns The general sentiment about the project including a percentage.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getHackernewsSentiment(comments: string) {
  const questionHackernews = //this is the question send to openAI
    'The following comments are discussing a new software project. Please get general sentiment regarding the project and use a percentage on whether people like it or not. Please stay around 50 words'

  const requestBodyHackernews: RequestBodyOpenAI = {
    model: model,
    messages: [
      {
        role: 'system',
        content:
          'You are trying to decide whether you would like to invest in a startup. So you are evaluating these comments'
      },
      { role: 'user', content: questionHackernews + ' ' + comments }
    ]
  }

  try {
    const response = await axios.post(openAIapiUrl, requestBodyHackernews, { headers })
    const data = response.data as ResponseBodyOpenAi

    if (!data?.choices[0]?.message?.content) {
      console.log(errorMessage)
      return null
    } else {
      const content: string = data.choices[0].message.content
      return content
    }
  } catch (error) {
    console.log('OpenAI request did not work out: ', error)
    return null
  }
}

// /**
//  * Categorizes a software engineering project based on its README or category.
//  * This method takes a number 1,2,3 or 4. This number was determined by the categorizeGeneral Method
//  * based on this number the list variable categoriesspecfic gets filled with different categories out of the Categories ENUM.
//  * If it is a 4 which means that the categories were not good enough to determine a general type then we just
//  * put all the available categories inside the variable.
//  * After the the correct categories are assigned we call ChatGPT with a prompt to tell us
//  * which categories fit the best. These categories are then returned in an enum string
//  * @param readMeOrCategory - The project's README or category.
//  * @param categoryGeneral - The general category of the project (1 for developer tools, 2 for infrastructure, 3 for ML/AI).
//  * @returns The two best-fitting specific categories for the project.
//  */
// enum Categories {
//   // Developer Tools
//   CodeEditors = 'Code Editors', // Developer tool
//   VersionControl = 'Version Control', // Developer tool
//   IDEs = 'Integrated Development Environments (IDEs)', // Developer tool
//   TestingFrameworks = 'Testing Frameworks', // Developer tool
//   PackageManagers = 'Package Managers', // Developer tool
//   BuildTools = 'Build Tools', // Developer tool

//   // Infrastructure
//   CloudComputing = 'Cloud Computing', // Infrastructure
//   Orchestration = 'Orchestration', // Infrastructure
//   Monitoring = 'Monitoring', // Infrastructure
//   Networking = 'Networking', // Infrastructure
//   Databases = 'Databases', // Infrastructure

//   // ML/AI
//   MachineLearning = 'Machine Learning', // ML/AI
//   NaturalLanguageProcessing = 'Natural Language Processing', // ML/AI
//   ComputerVision = 'Computer Vision' // ML/AI
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// async function categorizeProjectSpecific(readMeOrCategory: string, categoryGeneral: number) {
//   // The following 3 variables are the lists of categories used to define the project

//   const questionCategoriesSpecific =
//     'These categories should be used to categorize a software engineering project. Please choose two of the categories from the list that describe this project the best based on these words or readme (Your response should only consist of the two words you choose, separated by a comma and inside an enum, so like this: [ "Web Development", "Data Analysis"] ) nothing else should be in your answer!: '

//   let categoriesSpecific: Categories[] // checks which general category it is
//   switch (categoryGeneral) {
//     case 1:
//       categoriesSpecific = [
//         Categories.CodeEditors,
//         Categories.VersionControl,
//         Categories.IDEs,
//         Categories.TestingFrameworks,
//         Categories.PackageManagers,
//         Categories.BuildTools
//       ]
//       break
//     case 2:
//       categoriesSpecific = [
//         Categories.CloudComputing,
//         Categories.Orchestration,
//         Categories.Monitoring,
//         Categories.Networking,
//         Categories.Databases
//       ]
//       break
//     case 3:
//       categoriesSpecific = [
//         Categories.MachineLearning,
//         Categories.NaturalLanguageProcessing,
//         Categories.ComputerVision
//       ]
//       break
//     default: // if chatgpt says categories are not specifc enough we just return two of them
//       categoriesSpecific = [
//         Categories.CodeEditors,
//         Categories.VersionControl,
//         Categories.IDEs,
//         Categories.TestingFrameworks,
//         Categories.PackageManagers,
//         Categories.BuildTools,
//         Categories.CloudComputing,
//         Categories.Orchestration,
//         Categories.Monitoring,
//         Categories.Networking,
//         Categories.Databases,
//         Categories.MachineLearning,
//         Categories.NaturalLanguageProcessing,
//         Categories.ComputerVision
//       ]
//       break
//   }

//   //defines the request. Adding the readMe or categories and the correct categories
//   const requestBodyCategories: RequestBodyOpenAI = {
//     model: model,
//     messages: [
//       {
//         role: 'system',
//         content:
//           'You are a professor trying to categorize a project. You have to read something about the project and then give it two of the categories according to your evaluation. Even if you do not think that you can evaluate it. Just do it to the best of your abilities'
//       },
//       {
//         role: 'user',
//         content:
//           categoriesSpecific.join(', ') + '\n' + questionCategoriesSpecific + readMeOrCategory //turns the array into a string where all categories are seperated by a comma
//       }
//     ]
//   }

//   //sends the request and returns the content which should look like this  [ "Web Development", "Data Analysis"]
//   try {
//     const response = await axios.post(openAIapiUrl, requestBodyCategories, { headers })
//     const data = response.data as ResponseBodyOpenAi

//     if (!data?.choices[0]?.message?.content) {
//       console.log(errorMessage)
//       return null
//     } else {
//       const content: string = data.choices[0].message.content
//       return content
//     }
//   } catch (error) {
//     console.log('AI request did not work: ', error)
//     return null
//   }
// }

// /**
//  * Categorizes a software engineering project into a general category based on its README or provided category.
//  * This method takes the categories and the readme of a repo as parameters. Then it asks chatgpt to categorize
//  * it into one three categories. Please see below the variable: listOfCategories
//  * ChatGPT returns the numbers 1,2 or 3. Each number represents one of the categories.
//  */
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// async function categorizeProjectGeneral(categories: string[]) {
//   const questionCategoriesGeneral =
//     'These 3 categroies should be used to categorize a software engineering project. 1 for developer tools, 2 for Infrastructure, 3 for Machine Learning and Artifical Inteligence. just decide on the categories and only return the numbers. So your number for example should be: 3. Only return one number! If you did not find any categories at the beginning of the question just tell me:  '

//   const request_body_Categories = {
//     model: model,
//     messages: [
//       {
//         role: 'system',
//         content: `You are a machine that can only answer with number separated by commas.
//         You take in infos about a repository that is hosted on github and reply with numbers separated by commas to categorize the project.`
//       },
//       { role: 'user', content: '' }
//     ]
//   }

//   const listOfCategories: string[] = [
//     //The three categories
//     'Developer Tools',
//     'Infrastrcuture',
//     'Machine Learning and Aritfical Inteligence'
//   ]
//   // request_body_Categories.messages[1].content = //adds the categories to the question and then adds them to the request that is going to be send
//   //   listOfCategories.join(' ,') + questionCategoriesGeneral + categories + readme
//   try {
//     const response = await axios.post(openAIapiUrl, request_body_Categories, { headers })
//     //returns a number that decides which general categorie we are using
//     const data = response.data as ResponseBodyOpenAi
//     if (!data?.choices[0]?.message?.content) {
//       console.log(errorMessage)
//       return null
//     } else {
//       const content: string = data?.choices[0]?.message?.content
//       //I want to filter out the numbers from the gpt response
//       const numberRegex = /\d/g
//       const numbers: number[] = content.match(numberRegex)?.map(Number) || [] //takes the numbers out of the response
//       if (numbers.length != 0) {
//         return categorizeProjectSpecific(readme, numbers[0])
//       } else {
//         return "['could not','evaluate categories]"
//       }
//       /*
//       const num = parseInt(content) //parses the returned string into a number
//       console.log(num)
//       if (num !== 1 && num !== 2 && num !== 3) {
//         return categorizeProjectSpecific(readme, 4) //if chatGPT does not think that the categories are good enough it does not return a number
//       } else {
//         //If there is no number we specify the categories based on the readme and we take into consideration all categories
//         return categorizeProjectSpecific(categories, num) //if the number is correct we only pick the specifc categories which are predetermined inside the specfic method
//       }*/
//     }
//   } catch (error) {
//     console.log('AI request did not work: ', error)
//     return null
//   }
// }

const getCategoryNumberFromGPT = async (categories: string[]) => {
  const request_body_Categories = {
    model: model,
    messages: [
      {
        role: 'system',
        content: `You are a machine that can only answer with numbers separated by commas.
        You take in infos about a repository that is hosted on github and reply with numbers separated by commas to categorize the project.
        Your answer may only contain numbers separated by commas.
        ${createCategorizationPrompt()}
        `
      },
      {
        role: 'user',
        content: `        
        Topics related to the repository: ${categories.toString()}
        `
      }
    ]
  }
  try {
    const response = await axios.post<OpenAIResponse>(openAIapiUrl, request_body_Categories, {
      headers
    })

    const answer = response?.data?.choices?.[0]?.message?.content
    return answer ? answer : '9'
  } catch (error) {
    return '9'
  }
}

const topicsMap = {
  1: 'Machine Learning',
  2: 'Dev Tools',
  3: 'Infrastructure',
  8: 'Other',
  9: 'CategorizationError'
}

const createCategorizationPrompt = () => {
  let prompt = 'Answer with '
  console.log(Object.entries(topicsMap))
  for (const [key, value] of Object.entries(topicsMap)) {
    if (key === '9') continue
    prompt += `${key} for ${value}, `
  }
  return prompt
}

const testForRepo = async (repoName: string, owner: string) => {
  const repoTopics = await getRepositoryTopics(owner, repoName, process.env.GITHUB_API_TOKEN)
  console.log(repoTopics)
  console.log(createCategorizationPrompt())
  const categoryNumbers = await getCategoryNumberFromGPT(repoTopics)
  console.log(categoryNumbers)
}

void testForRepo('react', 'facebook')

type OpenAIResponse = {
  id: string
  object: string
  created: number
  model: string
  choices: OpenAIChoice[]
}

type OpenAIChoice = {
  message: {
    role: string
    content: string
  }
  finish_reason: string
  index: number
}
