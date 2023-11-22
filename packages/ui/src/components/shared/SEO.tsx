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
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='robots' content='noindex' />
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
      />

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

      {/* PWA */}
      <link rel='manifest' href='/manifest.json' />
      <meta name='application-name' content='Truffle AI' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='Truffle AI' />
      <meta name='description' content='Find early stage tech startups.' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='theme-color' content='#575BC7' />
      <link rel='apple-touch-icon' href='/icons/icon-192x192.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='/icons/icon-152x152.png' />
    </Head>
  )
}

export default SEO
