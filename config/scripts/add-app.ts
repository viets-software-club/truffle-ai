const ORG_NAME = Deno.env.get('ORG_NAME')
const RELEASE_REPO_NAME = Deno.env.get('RELEASE_REPO_NAME')
const REPO_NAME = Deno.env.get('REPO_NAME')
const GITHUB_TOKEN = Deno.env.get('GITHUB_TOKEN')
let addCmd = new Deno.Command('helm', {
  args: [
    'repo',
    'add',
    ORG_NAME,
    '--username',
    `${GITHUB_TOKEN}`,
    '--password',
    `${GITHUB_TOKEN}`,
    `https://raw.githubusercontent.com/${ORG_NAME}/${RELEASE_REPO_NAME}/main/`
  ]
})

let add = await addCmd.output()
console.log(
  'added helm repo\n',
  new TextDecoder().decode(add.stdout),
  new TextDecoder().decode(add.stderr)
)
let updateCmd = new Deno.Command('helm', { args: ['repo', 'update'] })
let update = await updateCmd.output()
console.log(
  'updated helm repos\n\n',
  new TextDecoder().decode(update.stdout),
  new TextDecoder().decode(update.stderr)
)
