import { ReactElement, useState } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import SEO from '@/components/shared/SEO'
import UrqlProvider from '@/components/shared/hoc/UrqlProvider'
import '@/styles/globals.css'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps<{
  initialSession: Session
}> & {
  Component: NextPageWithLayout
}

/**
 * Default component to initialize every page
 * @param {AppProps<{ initialSession: Session }>} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [supabaseClient] = useState(() => createPagesBrowserClient())

  const getLayout = Component.getLayout ?? (page => page)

  // Provide the Supabase client and initial session using SessionContextProvider
  return (
    <>
      <SEO />

      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <UrqlProvider>{getLayout(<Component {...pageProps} />)}</UrqlProvider>
      </SessionContextProvider>
    </>
  )
}

export default App
