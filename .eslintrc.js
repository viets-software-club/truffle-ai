module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
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
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'sonarjs', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  env: {
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: '18'
    }
  },
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  }
}
