import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      // @TODO figure out how to use env variables here
      'http://157.245.24.200/graphql': {
        headers: {
          Authorization: '<your-auth-token>' // log document.cookie in console and copy/ paste the result
        }
      }
    }
  ],
  documents: './src/graphql/queries/**/*.graphql',
  generates: {
    './src/graphql/generated/gql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql']
    }
  },
  hooks: {
    afterAllFileWrite: ['prettier --write']
  }
}

export default config
