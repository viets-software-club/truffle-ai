import type { CodegenConfig } from '@graphql-codegen/cli'

const key = process.env.NEXT_PUBLIC_GRAPHQL_URL
if(typeof key !== 'string')
  console.error("Couldn't generate codegen")


const config: CodegenConfig = {
  schema: [
    {
      [key]: {
        headers: {
          Authorization: 'Bearer development'
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
