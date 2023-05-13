import { BASE_URL } from '@/util/constants'
import type { CodegenConfig } from '@graphql-codegen/cli'

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
