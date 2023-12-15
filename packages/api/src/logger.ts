class Logger {
  static prefix = 'api'

  static log(message: string | object): void {
    if (typeof message === 'string')
      console.log(`[${Logger.prefix}] ${new Date().toLocaleString()}: ${message}`)
    else if (typeof message === 'object')
      console.log(`[${Logger.prefix}] ${new Date().toLocaleString()}: `, message)
  }

  static error(message: string | object): void {
    if (typeof message === 'string')
      console.error(`[${Logger.prefix}] ${new Date().toLocaleString()}: ${message}`)
    else if (typeof message === 'object')
      console.error(`[${Logger.prefix}] ${new Date().toLocaleString()}: `, message)
  }
}

export default Logger
