import { cacheExchange, fetchExchange } from 'urql'
import { withUrqlClient } from 'next-urql'
import { AppProps } from 'next/app'

import BASE_URL from '@/constants/baseUrl'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <Component {...pageProps} />
)

export default withUrqlClient(
  (ssrExchange) => ({
    url: BASE_URL,
    exchanges: [cacheExchange, ssrExchange, fetchExchange]
  }),
  { ssr: true } // enables SSR using getInitialProps
)(App)
