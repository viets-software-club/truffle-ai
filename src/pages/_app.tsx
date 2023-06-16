import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { withUrqlClient } from 'next-urql'
import { cacheExchange, fetchExchange } from 'urql'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { getCookie } from '@/util/cookie'
import '@/styles/globals.css'

const App = ({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session
}>) => {
  const [supabaseClient] = useState(() => createPagesBrowserClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      {React.createElement(Component, pageProps)}
    </SessionContextProvider>
  )
}

export default withUrqlClient(
  () => ({
    url: process.env.NEXT_PUBLIC_API_GRAPHQL_URL,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      if (typeof window !== 'undefined') return {}
      const cookie = getCookie(process.env.NEXT_PUBLIC_SUPABASE_AUTH_COOKIE_NAME)
      if (cookie)
        return {
          headers: {
            Authorization: `Bearer ${cookie}`
          }
        }
      return {}
    }
  }),
  { ssr: false }
)(App)
