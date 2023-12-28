import { FC, PropsWithChildren } from 'react'
import { useSession } from '@supabase/auth-helpers-react'
import { Client, Provider, cacheExchange, fetchExchange } from 'urql'

// @TODO set up caching

/**
 * Urql provider, adds Authorization header with access_token
 */
const UrqlProvider: FC<PropsWithChildren> = ({ children }) => {
  const session = useSession()

  const client = new Client({
    url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      if (!session?.access_token) return {}
      return {
        headers: { Authorization: `Bearer ${session?.access_token}` }
      }
    }
  })

  return <Provider value={client}>{children}</Provider>
}

export default UrqlProvider
