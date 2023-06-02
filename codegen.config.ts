import type { CodegenConfig } from '@graphql-codegen/cli'
import BASE_URL from './src/constants/baseUrl'

const config: CodegenConfig = {
  // @TODO environment variable doesn't work, fix
  schema: BASE_URL,
  documents: './src/queries/**/*.graphql',
  generates: {
    './src/generated/gql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql']
    }
  },
  hooks: {
    afterAllFileWrite: ['prettier --write']
  }
}

export default config
