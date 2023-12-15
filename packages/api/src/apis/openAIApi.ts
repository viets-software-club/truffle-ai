import axios from 'axios'

// export enum Topics {
//   MachineLearning = 1,
//   DevTools = 2,
//   Infrastructure = 3,
//   Miscellaneous = 8,
//   CategorizationError = 9
// }
class OpenAiApi {
  static model = 'gpt-3.5-turbo'
  static apiUrl = 'https://api.openai.com/v1/chat/completions'
  axios
  constructor(apiKey: string) {
    this.axios = axios.create({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    })
  }

  async _send(systemContent: string, userContent: string) {
    const body = {
      model: OpenAiApi.model,
      messages: [
        {
          role: 'system',
          content: systemContent
        },
        { role: 'user', content: userContent }
      ]
    }
    return this.axios.post<OpenAiResponse>(OpenAiApi.apiUrl, body)
  }

  /**
   * Retrieves an "Explain Like I'm 5" (ELI5) summary from a project's README.
   * @param readMe - The content of the project's README.
   * @returns The ELI5 summary of the project.
   */
  async getELI5FromReadMe(readMe: string) {
    const question =
      'The following text describes a programming project that is currently in development. Explain to me what the project is trying to achieve without telling me how they are doing so. Please use around 80 words and do not get too technical'
    const response = await this._send(
      'You are a Computer Science Teacher talking to his students and the students do not have a deep technical understanding. So the teacher tries to stay simple',
      `${question}\n${readMe}`
    )
    return response.data.choices[0].message.content
  }

  /**
   * Retrieves the general sentiment about a project from Hacker News comments.
   * @param comments - The comments discussing the project.Scraped from Hackernews
   * @returns The general sentiment about the project including a percentage.
   */
  async getHackernewsSentiment(comments: string) {
    // limit length of name to 5000 characters, because it might cause problems with GPT otherwise
    if (comments.length > 5000) comments = comments.substring(0, 5000)

    const question =
      'The following comments are discussing a new software project. Please get general sentiment regarding the project and use a percentage on whether people like it or not. Please stay around 50 words'
    const response = await this._send(
      'You are trying to decide whether you would like to invest in a startup. So you are evaluating these comments',
      `${question}\n${comments}`
    )
    return response.data.choices[0].message.content
  }
}

export default OpenAiApi
// /**
//  * Calls GPT and get categories for a project.
//  * @param {string[]} topics - The topics of a repo, probably fetched from github
//  * @param {string} description - The description of a repo, probably fetched from github
//  * @returns The categories a repo fits into as a list of strings.
//  */
// export const getCategoryFromGPT = async (topics: string[] | null, description: string | null) => {
//   if (topics === null && description === null) return Topic['9']

//   const request_body_Categories = {
//     model: this.,
//     messages: [
//       {
//         role: 'system',
//         content:
//       },
//       {
//         role: 'user',
//         content: `
//         ${topics ? 'topics related to the respository:' + topics.toString() : ''}
//         ${description ? 'description of the repository:' + description : ''}
//         `
//       }
//     ]
//   }

//   const response = await this._send<ResponseBodyOpenAi>('You are trying to decide whether you would like to invest in a startup. So you are evaluating these comments',
//   `${question}\n${comments}`
//   )
//   try {
//     const response = await axios.post<ResponseBodyOpenAi>(openAIapiUrl, request_body_Categories, {
//       headers
//     })

//     const answer = response?.data?.choices?.[0]?.message?.content
//     const categoryNumbers = answer ? convertNumbersStringToList(answer) : ['9']
//     return categoryNumbers.map((categoryNumber) => {
//       return Topic[Number(categoryNumber)]
//     })
//   } catch (error) {
//     return Topics['9']
//   }
// }

// function convertNumbersStringToList(str: string): string[] {
//   const numbersRegex = /\d+/g
//   const numbers = str.match(numbersRegex)
//   return numbers ? numbers : []
