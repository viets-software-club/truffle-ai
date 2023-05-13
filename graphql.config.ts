import type { CodegenConfig } from '@graphql-codegen/cli'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/graphql'

const config: CodegenConfig = {
  overwrite: true,
  schema: BASE_URL,
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/types.tsx': {
      plugins: ['typescript']
    },
    'src/graphql/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.gql.tsx',
        baseTypesPath: 'types.ts'
      },
      plugins: ['typescript-operations', 'typescript-urql'],
      config: {
        withHooks: true
      }
    }
  }
}

export default config
