import { ResolveUserFn, useGenericAuth } from '@envelop/generic-auth'
import { createClient } from '@supabase/supabase-js'
import { IncomingMessage } from 'http'
import jsonwebtoken from 'jsonwebtoken'
import winston from 'winston'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
})
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
  ]
});

type Context = {
  req: IncomingMessage
}

const resolveUserFn: ResolveUserFn<object, Context> = async (context: Context) => {
  // if Authorization header exists
  if (context?.req?.headers?.authorization) {
    // read jwt from Authorization Bearer header
    const authorizationHeader = context.req.headers.authorization
    if (
      typeof authorizationHeader !== 'string' ||
      !authorizationHeader.startsWith('Bearer') ||
      authorizationHeader.length < 7
    ) {
      logger.info("Authorization header is not a valid Bearer token")
      return null
    }
    const jwt = authorizationHeader?.substring(7)
    if (!jwt) return null

    // Get user from Supabase if JWT is valid
    const {
      data: { user },
      error
    } = await supabase.auth.getUser(jwt)
    if (error) {
      console.error(error)
      return null
    }
    return { user, jwt }
  }

  // if userApiKey header exists
  if (context?.req?.headers?.userApiKey) {
    const userApiKey = context.req.headers.userApiKey
    const { data, error: selectError } = await supabase
      .from('user_api_key')
      .select('user_id')
      .eq('key', userApiKey)
    if (selectError) {
      logger.info("Error when selecting userApiKey from db", selectError)
      return null
    }
    if (!data?.[0]?.user_id) {
      console.warn("User ID couldn't be retrieved from db for userApiKey")
      return null
    }

    const {
      data: { user },
      error: userByIdError
    } = await supabase.auth.admin.getUserById(data?.[0]?.user_id)

    if (userByIdError) {
      console.error("Error when getting User by ID", data?.[0]?.user_id, ", User doesn't seem to exist", userByIdError)
      return null
    }

    const jwt = jsonwebtoken.sign({ sub: user?.id }, process.env.SUPABASE_JWT_SECRET, { expiresIn: '1h' })
    return { user, jwt }
  }


  // if not run in production, allow acccess
  if (process.env.NODE_ENV !== 'production') return {}

  return null
}

const plugins = [
  useGenericAuth({
    resolveUserFn,
    mode: 'protect-all'
  })
]

export default plugins
