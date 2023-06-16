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
