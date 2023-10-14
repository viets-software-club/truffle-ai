var path = require('path')
module.exports = {
  extends: [
    'truffle/pre',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/strict',
    'truffle/post'
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'import/extensions': ['error', { tsx: 'never' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react-hooks/exhaustive-deps': 'off'
  },
  ignorePatterns: [
    'next.config.js',
    'postcss.config.js',
    'tailwind.config.js',
    'src/graphql/generated/*.ts'
  ],
  env: {
    browser: true,
    node: false
  },
  globals: {
    process: true
  },
  settings: {
    react: {
      version: '18'
    }
  }
}
