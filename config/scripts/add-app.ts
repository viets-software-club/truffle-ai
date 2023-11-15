const ORG_NAME = Deno.env.get('ORG_NAME')
const REPO_NAME = Deno.env.get('REPO_NAME')
const GITHUB_TOKEN = Deno.env.get('GITHUB_TOKEN')
let addCmd = new Deno.Command(`helm repo add ${ORG_NAME}`, {
  args: [`https://raw.githubusercontent.com/${ORG_NAME}/${REPO_NAME}/main/`]
})

let { code, stdout, stderr } = await addCmd.output()
console.log(new TextDecoder().decode(stdout))
let updateCmd = new Deno.Command('helm repo update')
let { code, stdout, stderr } = await updateCmd.output()
console.log(new TextDecoder().decode(stdout))
