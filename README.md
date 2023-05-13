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

## Learn more

To learn more about Next.js, take a look at the following resources:

- [Learn Next.js](https://nextjs.org/learn)
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub repository](https://github.com/vercel/next.js/)
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)
