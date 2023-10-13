module.exports = {
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
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react-hooks/exhaustive-deps': 'off'
  },
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
