import { ResolveUserFn, useGenericAuth } from '@envelop/generic-auth'
import { User, createClient } from '@supabase/supabase-js'
import { parse } from 'cookie'
import { IncomingMessage } from 'http'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY)

type Context = {
  req: IncomingMessage
}

const resolveUserFn: ResolveUserFn<User, Context> = async (context: Context) => {
  // Get cookies from authorization header (temporary workaround)
  const cookies = parse(context?.req?.headers?.authorization as string)

  if (!cookies?.['supabase-auth-token']) {
    console.error('Auth token missing')
    return null
  }

  // Get JWT from cookie (cookie set by Supabase is array of tokens)
  const tokenArray: string[] = JSON.parse(cookies?.['supabase-auth-token']) as string[]
  const jwt = tokenArray?.[0]

  // Get user from Supabase if JWT is valid
  const {
    data: { user },
    error
  } = await supabase.auth.getUser(jwt)

  if (error) {
    console.error('Error while trying to get user from Supabase', error)
    return null
  }

  return user
}

const plugins = [
  useGenericAuth({
    resolveUserFn,
    mode: 'protect-all'
  })
]

export default plugins
