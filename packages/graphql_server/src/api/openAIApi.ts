import { OpenAIResponse } from '../../types/openAIApi'

/** Creates the ELI5 of the repository by passing the readme to chatgpt
 * @param {string} readME readMe file of the repository as a string
 * @param {string} OPENAI_API_KEY api key for OpenAI
 * @returns {string} the summary by ChatGPT of the repo or on error null
 */
export async function getELI5DescriptionForRepositoryFromText(
  readME: string,
  OPENAI_API_KEY: string
) {
  const question =
    'The following text describes a prorgamming project that is current in development. Explain to me what the project is trying to archieve without telling me' +
    "how they are doing so. Please use arround 50 words and don't get too technical" +
    readME
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + OPENAI_API_KEY
    },
    method: 'POST',
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a Computer Science Teacher to his students without technical knowledge'
        },
        {
          role: 'user',
          content: question
        }
      ]
    })
  })
  const data = (await response.json()) as OpenAIResponse
  // this mostly becomes null when the free version of openai turbo api is used more often than 3 times per minute
  return data.choices?.[0]?.message?.content ?? null
}
