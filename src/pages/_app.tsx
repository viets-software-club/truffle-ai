import { createElement, useState } from 'react'
import { AppProps } from 'next/app'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import withUrql from '@/components/side-effects/withUrql'
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
  const [supabaseClient] = useState(() => createPagesBrowserClient())

  // Provide the Supabase client and initial session using SessionContextProvider
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      {createElement(withUrql(Component), pageProps)}
    </SessionContextProvider>
  )
}

export default App
