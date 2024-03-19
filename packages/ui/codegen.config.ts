import type { CodegenConfig } from '@graphql-codegen/cli'

// const apiUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL
// const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const apiUrl = 'http://0.0.0.0:3001/api/graphql'
const apiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwYXBpcmRtdHpqYWhoYXZmYmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1OTAyNDQsImV4cCI6MjAxNTE2NjI0NH0.SeuaYbWUX2cs5_txugVz2uVAygcWThNKbVfEkB0Jms4'

const bearerToken =
  'eyJhbGciOiJIUzI1NiIsImtpZCI6IlNYNzc1dnlyUGtLem5oaUEiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA0NDY5MjYzLCJpYXQiOjE3MDQ0NjU2NjMsImlzcyI6Imh0dHBzOi8vY3BhcGlyZG10emphaGhhdmZiYWIuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6Ijk5N2NkMWYwLWE3YjctNGVlYi05NzAyLTBmODM5ZWE3ZmEyMiIsImVtYWlsIjoiY25raWdhZHllQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiLCJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pTQ2JWMVRqSkw0RmVET1VWQ2tnV2NhOGo0TmtESXNfNVFYbWVOeVFPMT1zOTYtYyIsImVtYWlsIjoiY25raWdhZHllQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJDbGVtZW5zIEtpZ2FkeWUiLCJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYW1lIjoiQ2xlbWVucyBLaWdhZHllIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSlNDYlYxVGpKTDRGZURPVVZDa2dXY2E4ajROa0RJc181UVhtZU55UU8xPXM5Ni1jIiwicHJvdmlkZXJfaWQiOiIxMTExOTkzNTU4MzQwMzU0NjQ3NDUiLCJzdWIiOiIxMTExOTkzNTU4MzQwMzU0NjQ3NDUifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvYXV0aCIsInRpbWVzdGFtcCI6MTcwMzE4NzUzN31dLCJzZXNzaW9uX2lkIjoiODk4MjY2ZjAtZjRhYy00MGEwLWE1YWEtODc2OTU2NGY4ZDg0In0.c7wC2jIogIT1AJiPXl8h4CPxYnhvF9vSxQcd1WcAvYg'

const config: CodegenConfig = {
  schema: [
    {
      [apiUrl]: {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          apiKey
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
