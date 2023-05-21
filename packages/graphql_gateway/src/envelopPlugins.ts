import { useGenericAuth, ResolveUserFn } from '@envelop/generic-auth'
import { createClient, User } from '@supabase/supabase-js'
import { IncomingMessage } from 'http'
import { parse } from 'cookie'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY)

type Context = {
  req: IncomingMessage
}

const resolveUserFn: ResolveUserFn<User, Context> = async (context: Context) => {
  if (!context?.req?.headers?.cookie) {
    console.error('All Cookies missing')
    return null
  }
  const cookies = parse(context.req.headers.cookie)
  if (!cookies?.jwt) {
    console.error('Jwt cookie missing')
    return null
  }
  const {
    data: { user },
    error
  } = await supabase.auth.getUser(cookies?.jwt)
  if (error) {
    console.error('Error when getting user from Supabase', error)
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
