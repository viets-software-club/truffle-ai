type CookieOptions = {
  [key: string]: string | boolean | number
}

// modified from https://github.com/javascript-tutorial/en.javascript.info/blob/master/6-data-storage/01-cookie/article.md#getcookiename on 16th June 2023, https://github.com/iliakan
export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    // eslint-disable-next-line no-useless-escape
    new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`)
  )
  return matches && decodeURIComponent(matches[1])
}

// modified from https://github.com/javascript-tutorial/en.javascript.info/blob/master/6-data-storage/01-cookie/article.md#setcookiename-value-options on 16th June 2023, https://github.com/iliakan
export const setCookie = (name: string, value: string, options: CookieOptions = { path: '/' }) => {
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  // eslint-disable-next-line no-restricted-syntax
  for (const optionKey in options) {
    if (Object.hasOwn(options, optionKey)) {
      const optionValue = options[optionKey]
      // eslint-disable-next-line no-continue
      if (typeof optionValue === 'boolean' && !optionValue) continue
      cookie += `; ${optionKey}`
      if (typeof optionValue !== 'boolean') {
        cookie += `=${optionValue}`
      }
    }
  }
  console.log(cookie)

  document.cookie = cookie
}
