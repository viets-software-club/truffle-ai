import Head from 'next/head'

const SEO = () => {
  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''

  return (
    <Head>
      {/* Basic */}
      <title>Truffle AI</title>
      <meta charSet='UTF-8' />
      <meta name='title' content='Truffle AI' />
      <meta name='description' content='Find early stage tech startups.' />
      <meta name='robots' content='noindex' />

      {/* Opengraph */}
      <meta property='og:title' content='Truffle AI' />
      <meta property='og:description' content='Find early stage tech startups.' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={`${origin}/logo.png`} />
      <meta property='og:url' content={origin} />

      {/* Twitter */}
      <meta name='twitter:card' content='website' />
      <meta name='twitter:title' content='Truffle AI' />
      <meta name='twitter:description' content='Find early stage tech startups.' />
      <meta name='twitter:site' content='@lafamigliaVC' />
      <meta name='twitter:creator' content='@vietdle' />
      <meta name='twitter:image' content={`${origin}/logo.png`} />
    </Head>
  )
}

export default SEO
