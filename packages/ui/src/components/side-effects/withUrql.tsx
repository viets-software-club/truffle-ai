import React from 'react'
import { useSession } from '@supabase/auth-helpers-react'
import { Client, Provider, fetchExchange } from 'urql'

// @TODO set up caching

/**
 * HOC for Urql provider, adds Authorization header with access_token
 */
export default function withUrql<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: React.PropsWithChildren<P>) => {
    const session = useSession()

    const client = new Client({
      url: process.env.GRAPHQL_URL,
      exchanges: [fetchExchange],
      fetchOptions: () => {
        if (!session?.access_token) return {}
        return {
          headers: { Authorization: `Bearer ${session?.access_token}` }
        }
      }
    })
    return <Provider value={client}>{React.createElement(WrappedComponent, props)}</Provider>
  }
}
