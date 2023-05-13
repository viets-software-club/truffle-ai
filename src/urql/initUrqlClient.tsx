import { cacheExchange, Client, createClient, fetchExchange, SSRData, ssrExchange } from 'urql'

let urqlClient: Client | null = null

let ssrCache: ReturnType<typeof ssrExchange> | null = null

const isServer = typeof window === 'undefined'

/**
 * Initializes urql client usable on both server and client side
 * @param initialState - usually data from the server returned as props
 * @param url - GraphQL endpoint
 * @returns object with urqlClient and ssrCache
 */
const initUrqlClient = (url: string, initialState?: SSRData) => {
  if (!urqlClient) {
    // Fill client with initial state from server
    ssrCache = ssrExchange({ initialState, isClient: !isServer })

    urqlClient = createClient({
      url,
      exchanges: [
        cacheExchange, // Caches GraphQL results with document caching
        ssrCache, // Allows for SSR to collect results for client-side rehydration
        fetchExchange // Executes GraphQL requests with a fetch HTTP call
      ]
    })
  } else {
    // When navigating to another page, client is already initialized
    // Restore that page's initial state
    ssrCache?.restoreData(initialState || {})
  }

  return { urqlClient, ssrCache }
}

export default initUrqlClient
