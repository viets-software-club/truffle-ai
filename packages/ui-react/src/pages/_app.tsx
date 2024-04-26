import { ReactElement, useState } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import SEO from '@/components/pure/SEO'
import TooltipItem from '@/components/pure/TooltipItem'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink } from '@apollo/client';
import '@/styles/globals.css'


const link1 = new HttpLink({
  uri: 'https://api.graphql.server1.com',
  headers: {
    ["x-server"]: 'supabase',
  },
});

const link2 = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  headers: {
    ["x-server"]: 'server',
  },
});

const client = new ApolloClient({
  link: ApolloLink.split(
      operation => operation.getContext().clientName === 'supabase',
      link1,
      link2
  ),
  cache: new InMemoryCache(),
})


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
        <ApolloProvider client={client}>{getLayout(<Component {...pageProps} />)}</ApolloProvider>
      </SessionContextProvider>

      <TooltipItem />
    </>
  )
}

export default App
