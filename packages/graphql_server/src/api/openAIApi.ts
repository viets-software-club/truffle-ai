import axios from 'axios'
import { RequestBodyOpenAI, ResponseBodyOpenAi } from '../../types/openAIApi'

export { getELI5FromReadMe, getHackernewsSentiment, categorizeProjectGeneral }

const model = 'gpt-3.5-turbo'
const openAIapiUrl = 'https://api.openai.com/v1/chat/completions'
const errorMessage =
  'The fetched response was empty. Most likely there is something wrong with the JSON request.'

//The Header for all requests
const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + process.env.OPENAI_API_KEY
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

/**
 * Categorizes a software engineering project based on its README or category.
 * @param readMeOrCategory - The project's README or category.
 * @param categoryGeneral - The general category of the project (1 for developer tools, 2 for infrastructure, 3 for ML/AI).
 * @returns The two best-fitting specific categories for the project.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function categorizeProjectSpecific(readMeOrCategory: string, categoryGeneral: number) {
  //The following 3 variables are the lists of categories used to define the project
  const listOfCategoriesDeveloperTools: string[] = [
    'Code Editors',
    'Version Control',
    'Continuous Integration',
    'Testing Frameworks',
    'Package Managers',
    'Integrated Development Environments',
    'Debuggers',
    'Profilers',
    'Build Tools',
    'Code Quality'
  ]

  const listOfCategoriesInfrastructure: string[] = [
    'Cloud Computing',
    'Virtualization',
    'Containerization',
    'Orchestration',
    'Monitoring',
    'Networking',
    'Databases',
    'Load Balancing',
    'Content Delivery Networks',
    'Identity Management'
  ]

  const listOfCategoriesMLAI: string[] = [
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Cybersecurity'
  ]

  const questionCategoriesSpecific = //this is the question send to openAI
    'These categories should be used to categorize a software engineering project. Please choose two of the categories from the list that describe this project the best based on these words or readme (Your response should only consist of the two words you choose, separated by a comma): '

  let categoriesSpecific: string[] //checks which general category it is
  switch (categoryGeneral) {
    case 1:
      categoriesSpecific = listOfCategoriesDeveloperTools
      break
    case 2:
      categoriesSpecific = listOfCategoriesInfrastructure
      break
    case 3:
      categoriesSpecific = listOfCategoriesMLAI
      break
    case 4: //if chatgtp says the categories are not specific enough we need t use the readme file to put it into two of the categories
      categoriesSpecific = listOfCategoriesDeveloperTools.concat(listOfCategoriesInfrastructure)
      categoriesSpecific = categoriesSpecific.concat(listOfCategoriesMLAI)
      break
    default:
      console.log('Invalid categoryGeneral value')
      return null
  }

  const requestBodyCategories: RequestBodyOpenAI = {
    model: model,
    messages: [
      {
        role: 'system',
        content:
          'You are a professor trying to categorize a project. You have to read something about the project and then give it two of the categories according to your evaluation. Even if you do not think that you can evaluate it. Just do it to the best of your abilities'
      },
      {
        role: 'user',
        content: categoriesSpecific.join(' ,') + questionCategoriesSpecific + readMeOrCategory
      }
    ]
  }

  try {
    const response = await axios.post(openAIapiUrl, requestBodyCategories, { headers })
    const data = response.data as ResponseBodyOpenAi

    if (!data?.choices[0]?.message?.content) {
      console.log(errorMessage)
      return null
    } else {
      const content: string = data.choices[0].message.content
      return content
    }
  } catch (error) {
    console.log('AI request did not work: ', error)
    return null
  }
}

/**
 * Categorizes a software engineering project into a general category based on its README or provided category.
 * @param readMeOrCategory - The project's README or category.
 * @returns The two best-fitting specific categories for the project, based on the general category.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function categorizeProjectGeneral(categories: string, readme: string) {
  const questionCategoriesGeneral =
    'These 3 categroies should be used to categorize a software engineering project. 1 for developer tools, 2 for Infrastructure, 3 for Machine Learning and Artifical Inteligence. Apart from the number do not respond with anything): '

  const request_body_Categories = {
    model: model,
    messages: [
      {
        role: 'system',
        content:
          'You are a professor trying to categorize a project. You have to read something about the project and then give it two of the categories according to your evaluation. Even if you do not think that you can evaluate it. Just do it to the best of your abilities'
      },
      { role: 'user', content: '' }
    ]
  }

  const listOfCategories: string[] = [
    'Developer Tools',
    'Infrastrcuture',
    'Machine Learning and Aritfical Inteligence'
  ]
  request_body_Categories.messages[1].content =
    listOfCategories.join(' ,') + questionCategoriesGeneral + categories
  try {
    const response = await axios.post(openAIapiUrl, request_body_Categories, { headers })
    //returns a number that decides which general categorie we are using
    const data = response.data as ResponseBodyOpenAi
    if (!data?.choices[0]?.message?.content) {
      console.log(errorMessage)
      return null
    } else {
      const content: string = data?.choices[0]?.message?.content
      const num = parseInt(content)
      if (num !== 1 && num !== 2 && num !== 3) {
        return categorizeProjectSpecific(readme, 4)
      } else {
        return categorizeProjectSpecific(categories, num)
      }
    }
  } catch (error) {
    console.log('AI request did not work: ', error)
    return null
  }
}
