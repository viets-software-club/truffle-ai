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
  parserOptions: {
    project: ['./tsconfig.base.json', './packages/*/tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: __dirname
  },
  rules: {
    'import/no-unresolved': 'error',
    'import/extensions': ['error', { tsx: 'never' }],
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error'
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
  }
}
