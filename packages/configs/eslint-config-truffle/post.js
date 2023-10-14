module.exports = {
  root: true,
  extends: ['plugin:sonarjs/recommended', 'prettier'],
  rules: {
    'import/no-unresolved': 'error',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
