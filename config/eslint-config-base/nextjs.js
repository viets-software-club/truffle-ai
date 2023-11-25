var common = require('./common')

module.exports = {
  ...common,
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:sonarjs/recommended',
    'prettier'
  ],
  plugins: [...common.plugins, 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    ...common.rules,
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'import/extensions': ['error', { tsx: 'never' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react-hooks/exhaustive-deps': 'off',
    'react/require-default-props': 'off',
    'max-lines-per-function': [
      'error',
      {
        max: 150,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'no-nested-ternary': 'off'
  },
  ignorePatterns: [
    ...common.ignorePatterns,
    'next.config.js',
    'postcss.config.js',
    'tailwind.config.js',
    'src/graphql/generated/*.ts'
  ],
  env: {
    ...common.env,
    browser: true,
    node: false
  },
  globals: {
    ...common.globals,
    process: true
  },
  settings: {
    ...common.settings,
    react: {
      ...common.settings.react,
      version: '18'
    }
  }
}
