import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { withUrqlClient } from 'next-urql'
import { cacheExchange, fetchExchange } from 'urql'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import BASE_URL from '@/constants/baseUrl'
import '@/styles/globals.css'

const App = ({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session
}>) => {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    })
  )

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
    url: BASE_URL,
    exchanges: [cacheExchange, fetchExchange]
  }),
  { ssr: false }
)(App)
