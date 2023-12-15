import { CodegenConfig } from '@graphql-codegen/cli'

const supabaseSchema = {
  [`https://${process.env.SUPABASE_REFERENCE_ID}.supabase.co/graphql/v1`]: {
    headers: {
      apiKey: `${process.env.SUPABASE_SERVICE_KEY}`
    }
  }
}

const config: CodegenConfig = {
  generates: {
    './src/graphql/github.ts': {
      documents: './src/**/*.graphql',
      schema: 'https://docs.github.com/public/schema.docs.graphql',
      plugins: ['typescript', 'typescript-operations']
    },
    './src/graphql/supabase.ts': {
      schema: supabaseSchema,
      plugins: ['typescript']
    }
  }
}

export default config
