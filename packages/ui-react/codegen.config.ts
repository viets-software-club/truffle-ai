import type { CodegenConfig } from '@graphql-codegen/cli'



console.log(process.env.SUPABASE_SERVICE_KEY);

const config: CodegenConfig = {
  generates: {
    './src/graphql/generated/supabase/': {
      preset: "client",
      plugins: ["typescript",  'typescript-operations', 'typescript-react-apollo'],
      schema: {
        [process.env.SUPABASE_GRAPHQL_URL]: {
          headers: {
            apiKey: process.env.SUPABASE_SERVICE_KEY,
            ["x-server"]: 'supabase',
            ["x-codegen"]: 'true'
          }
        }
      },
      documents: ['./src/graphql/supabase/queries/**/*.graphql', './src/graphql/supabase/mutations/**/*.graphql'],
      config: {
        withHooks: true
      },
    },
    // './src/graphql/generated/server/': {
    //   preset: "client",
    //   plugins: ["typescript",  'typescript-operations', 'typescript-react-apollo'],
    //   schema: {
    //     [process.env.GRAPHQL_SERVER_URL]: {
    //       headers: {
    //         apiKey: process.env.GRAPHQL_SERVER_URL,
    //         ["x-server"]: 'server',
    //         ["x-codegen"]: 'true'
    //       }
    //     }
    //   },
    //   documents: ['./src/graphql/server/queries/**/*.graphql', './src/graphql/server/mutations/**/*.graphql'],
    //   config: {
    //     withHooks: true
    //   },
    // },
  }
}

export default config
