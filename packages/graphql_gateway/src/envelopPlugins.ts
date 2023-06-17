import { ResolveUserFn, useGenericAuth } from '@envelop/generic-auth'
import { createClient } from '@supabase/supabase-js'
import { IncomingMessage } from 'http'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
})

type Context = {
  req: IncomingMessage
}

const resolveUserFn: ResolveUserFn<object, Context> = async (context: Context) => {
  // read jwt from Authorization Bearer header
  const authorizationHeader = context?.req?.headers?.authorization
  if (
    typeof authorizationHeader !== 'string' ||
    !authorizationHeader.startsWith('Bearer') ||
    authorizationHeader.length < 7
  )
    return null
  const jwt = authorizationHeader?.substring(7)
  if (!jwt) return null

  // if not run in production, and jwt equals 'development' allow acccess
  if (process.env.NODE_ENV !== 'production' && jwt === 'development') return {}

  // Get user from Supabase if JWT is valid
  const {
    data: { user },
    error
  } = await supabase.auth.getUser(jwt)
  if (error) return null

  return user
}

const plugins = [
  useGenericAuth({
    resolveUserFn,
    mode: 'protect-all'
  })
]

export default plugins
