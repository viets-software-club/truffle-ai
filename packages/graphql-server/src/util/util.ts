import mercurius from 'mercurius'

export const throwErrorWithCode = (code: string, message: string, additionalInfo: object = {}) => {
  throw new mercurius.ErrorWithProps(message, {
    ...additionalInfo,
    code,
    timestamp: Math.round(new Date().getTime() / 1000)
  })
}
