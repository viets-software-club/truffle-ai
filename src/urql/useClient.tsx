import { useMemo } from 'react'
import { SSRData } from 'urql'
import initUrqlClient from './initUrqlClient'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/graphql'

/**
 * Simple hook to initialize urql client with pageProps
 * @param pageProps - props of page
 * @returns urqlClient
 */
const useClient = (pageProps: { URQL_DATA?: SSRData | undefined }) => {
  const urqlData = pageProps.URQL_DATA

  // Only update client when pageProps change
  const { urqlClient } = useMemo(() => initUrqlClient(BASE_URL, urqlData), [urqlData])

  return urqlClient
}

export default useClient
