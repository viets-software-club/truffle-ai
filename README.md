# Truffle AI Frontend

Truffle AI is a tool helping VC analysts find early stage tech companies by collecting traces founders leave on the internet. This repository contains the frontend application for it, which was built using Next.js.

## Setup

```bash
npm install # installs necessary packages
npm run prepare # installs precommit hook that runs eslint & prettier
npm run dev # starts dev server
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

Please have a look at the [coding guidelines](https://www.notion.so/Development-Guidelines-3013fbf7b3c941cdac8f0dd85628a133?pvs=4#ec664c8c9b1141e8bfeea173c8c4eb7f) for this project before starting to code.

## Recommended extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [GraphQL](https://marketplace.visualstudio.com/items?itemName=mquandalle.graphql)
- [TailwindCSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## NPM scripts

#### `dev`

Starts the application in development mode (with hot-code reloading, error reporting, etc.).

#### `build`

Compiles the application for production deployment.

#### `start`

Starts the application in production mode. Run `build` to compile it first.

#### `codegen`

Automatically generates types and hooks for new GraphQL queries you create.

#### `lint`

Analyzes the code in the src/ folder and gives a list of all problems (errors and warnings).

#### `lint:debug`

Same as `lint` but provides additional information for debugging.

#### `lint:fix`

Same as `lint` but automatically fixes problems that can be solved easily.

#### `prepare`

Installs a precommit hook that runs eslint & prettier before every commit.

#### `prettier:check`

Analyzes all files in the root directory (and its subfolders) and gives a list of formatting issues that don't follow the rules described in the prettier configuration.

#### `prettier:all`

Same as `prettier:check` but automatically fixes problems.

#### `react:update-react-imports`

Removes redundant import statements of `react` in components.

## Environment Variables

`NEXT_PUBLIC_SUPABASE_URL=https://yipnhkmklmbuxjwzpipg.supabase.co`
`NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpcG5oa21rbG1idXhqd3pwaXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1MTU3NTcsImV4cCI6MjAwMDA5MTc1N30.r_sih3YT0PqgHoYC59LxBA7OO2SXkAcLX44KRs1Q7O0`

## Learn more

To learn more about Next.js, take a look at the following resources:

- [Learn Next.js](https://nextjs.org/learn)
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub repository](https://github.com/vercel/next.js/)
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)
