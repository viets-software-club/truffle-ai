const ORG_NAME = Deno.env.get('ORG_NAME')
const REPO_NAME = Deno.env.get('REPO_NAME')
const GITHUB_TOKEN = Deno.env.get('GITHUB_TOKEN')
let addCmd = new Deno.Command('helm', {
  args: [
    'repo',
    'add',
    ORG_NAME,
    `https://raw.githubusercontent.com/${ORG_NAME}/${REPO_NAME}/main/`
  ]
})

let add = await addCmd.output()
console.log('added helm repo', new TextDecoder().decode(add.stdout))
let updateCmd = new Deno.Command('helm', { args: ['repo', 'update'] })
let update = await updateCmd.output()
console.log('updated helm repos', new TextDecoder().decode(update.stdout))
