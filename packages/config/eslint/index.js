var path = require('path')
var _ = require('lodash')
var baseConfig = {
  root: false,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:sonarjs/recommended'
  ],
  plugins: ['@typescript-eslint', 'import', 'sonarjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [path.join(__dirname, '../../../packages/*/tsconfig.json')],
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: path.join(__dirname, '../../../')
  },
  rules: {
    'import/no-unresolved': 'error',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-void': ['error', { allowAsStatement: true }]
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      typescript: {
        project: 'packages/*/tsconfig.json'
      }
    }
  }
}

module.exports = function (config) {
  return _.merge(baseConfig, config)
}
