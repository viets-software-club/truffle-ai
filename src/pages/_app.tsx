import { cacheExchange, fetchExchange } from 'urql'
import { withUrqlClient } from 'next-urql'
import { AppProps } from 'next/app'

import { BASE_URL } from '@/util/constants'
import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Component {...pageProps} />
}

export default withUrqlClient(
  (ssrExchange) => ({
    url: BASE_URL,
    exchanges: [cacheExchange, ssrExchange, fetchExchange]
  }),
  { ssr: true } // enables SSR using getInitialProps
)(App)
