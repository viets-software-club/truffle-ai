import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_GRAPHQL_URL]: {
        headers: {
          Authorization: `Bearer development`
        }
      }
    }
  ],
  documents: ['./src/graphql/queries/**/*.graphql', './src/graphql/mutations/**/*.graphql'],
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
