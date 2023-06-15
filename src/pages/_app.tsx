import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { withUrqlClient } from 'next-urql'
import { cacheExchange, fetchExchange } from 'urql'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import BASE_URL from '@/constants/baseUrl'
import '@/styles/globals.css'

/**
 * Default component to initialize every page
 * @param {AppProps<{ initialSession: Session }>} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const App = ({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session
}>) => {
  // Create the Supabase client using browser authentication helper
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    })
  )

  return (
    // Provide the Supabase client and initial session using SessionContextProvider
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
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => ({
      headers: {
        Authorization: typeof window !== 'undefined' ? document.cookie : ''
      }
    })
  }),
  { ssr: false }
)(App)
