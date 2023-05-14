import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// eslint-disable-next-line react/jsx-props-no-spreading
const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />
export default App
