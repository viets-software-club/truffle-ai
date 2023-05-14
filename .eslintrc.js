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
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'import/extensions': ['error', { tsx: 'never' }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error'
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
  },
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  }
}
