var path = require('path')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  plugins: ['@typescript-eslint', 'import', 'sonarjs'],
  ignorePatterns: ['.eslintrc.js', 'dist', 'node_modules', '.mesh', '.dockerignore', '.husky'],
  rules: {
    'import/no-unresolved': 'error',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error'
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      typescript: {
        project: 'packages/*/tsconfig.json'
      }
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./packages/*/tsconfig.json'],
    tsconfigRootDir: path.join(__dirname, '../../..'),
    ecmaFeatures: {
      jsx: true
    }
  }
}
