import axios from 'axios'
import { RequestBodyOpenAI, ResponseBodyOpenAi } from '../../types/openAIApi'

export { getELI5FromReadMe, getHackernewsSentiment }

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
async function getHackernewsSentiment(comments: string) {
  // limit length of name to 5000 characters, because it might cause problems with GPT otherwise
  if (comments.length > 5000) {
    comments = comments.substring(0, 5000)
  }
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

export enum Topic {
  MachineLearning = 1,
  DevTools = 2,
  Infrastructure = 3,
  Miscellaneous = 8,
  CategorizationError = 9
}

/**
 * Calls GPT and get categories for a project.
 * @param {string[]} topics - The topics of a repo, probably fetched from github
 * @param {string} description - The description of a repo, probably fetched from github
 * @returns The categories a repo fits into as a list of strings.
 */
export const getCategoryFromGPT = async (topics: string[] | null, description: string | null) => {
  if (topics === null && description === null) return Topic['9']

  const request_body_Categories = {
    model: model,
    messages: [
      {
        role: 'system',
        content: `You are a machine that can only answer with numbers separated by commas.
        You take in infos about a repository that is hosted on github and reply with numbers separated by commas to categorize the project.
        Your answer may only contain numbers separated by commas.
        ${createCategorizationPrompt()}
        Only answer with 8 if no other category fits.
        `
      },
      {
        role: 'user',
        content: `        
        ${topics ? 'topics related to the respository:' + topics.toString() : ''}
        ${description ? 'description of the repository:' + description : ''}
        `
      }
    ]
  }
  try {
    const response = await axios.post<ResponseBodyOpenAi>(openAIapiUrl, request_body_Categories, {
      headers
    })

    const answer = response?.data?.choices?.[0]?.message?.content
    const categoryNumbers = answer ? convertNumbersStringToList(answer) : ['9']
    return categoryNumbers.map((categoryNumber) => {
      return Topic[Number(categoryNumber)]
    })
  } catch (error) {
    return Topic['9']
  }
}

// iterating through enums needs to be done like that
const createCategorizationPrompt = () => {
  let prompt = 'Answer with '
  for (const key in Topic) {
    if (isNaN(Number(key))) continue
    if (key === '9') continue
    prompt += `${key} for ${Topic[key]}, `
  }
  return prompt
}

function convertNumbersStringToList(str: string): string[] {
  const numbersRegex = /\d+/g
  const numbers = str.match(numbersRegex)
  return numbers ? numbers : []
}
