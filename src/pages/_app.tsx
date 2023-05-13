import { Provider, SSRData } from 'urql'
import type { AppProps } from 'next/app'
import useClient from '../urql/useClient'

import '@/styles/globals.css'

type PageProps = {
  URQL_DATA?: SSRData | undefined
}

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  // Initialize urql client
  const client = useClient(pageProps)

  return (
    <Provider value={client}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  )
}
