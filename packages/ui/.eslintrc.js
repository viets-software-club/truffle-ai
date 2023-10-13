module.exports = require('../../packages/config/eslint')({
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
    'airbnb',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:sonarjs/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/strict'
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
  env: {
    browser: true
  },
  globals: {
    process: true
  },
  settings: {
    react: {
      version: '18'
    }
  }
})
