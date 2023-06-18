import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_API_GRAPHQL_URL]: {
        headers: {
          Authorization: `Bearer development`
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
