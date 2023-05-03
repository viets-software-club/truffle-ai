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
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }]
  },
  env: {
    browser: true,
    node: false
  },
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: '18'
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      parser: '@typescript-eslint/parser'
    }
  ]
}
