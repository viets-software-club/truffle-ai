module.exports = {
  root: true,
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
  rules: {
    'import/no-unresolved': 'error'
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json'
      },
      node: {
        extensions: ['.ts']
      }
    }
  },
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    project: ['./tsconfig.json']
  }
}
