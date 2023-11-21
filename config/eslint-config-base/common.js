var path = require('path')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'import', 'sonarjs'],
  ignorePatterns: [
    '**/packages/config/**',
    '.eslintrc.js',
    'dist',
    'node_modules',
    '.mesh',
    '.dockerignore',
    '.husky',
    '.eslintrc.js',
    'config/scripts/**'
  ],
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
    ecmaVersion: 9,
    project: ['./packages/*/tsconfig.json'],
    tsconfigRootDir: path.join(__dirname, '../..')
  }
}
