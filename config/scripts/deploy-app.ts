const REPO_NAME = Deno.env.get('REPO_NAME')

const environment = prompt('Which environment (commit)') || Deno.env.get('NAMESPACE', 'commit')
const sha = prompt('What commit sha?') || Deno.env.get('GIT_COMMIT_TAG', null)
const promptedChangeCause = prompt('What is the change cause?') || ''
const hasTag = !!sha
let certificateId = prompt('What is the certificate uuid (auto-filled via doctl)') // doctl compute certificate list --format ID --no-header
const isSure = confirm('Are you sure about your settings?')
if (!isSure) Deno.exit('Goodbye')

const shortSha = hasTag ? sha.substring(0, 7) : ''
const NAMESPACE = hasTag ? `${environment}-${shortSha}` : environment
const RESOURCE_PREFIX = NAMESPACE
const CHANGE_CAUSE = hasTag ? `${shortSha}: ${promptedChangeCause}` : promptedChangeCause
const certificateCmd = new Deno.Command('doctl compute certificate list', [
  '--format ID',
  '--no-header'
])
if (!certificateId) {
  let { code, stdout, stderr } = await certificateCmd.output()
  certificateId = new TextDecoder().decode(stdout)
}

const IMAGE_REPOSITORY_URL = `ghcr.io/${ORG_NAME}/${REPO_NAME}/${environment}`
const IMAGE_TAG = sha

const args = [
  'upgrade',
  `--set nginx-ingress-controller.service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-name=${REPO_NAME}-nginx-ingress-controller`,
  `--set nginx-ingress-controller.service.annotations.service\\.beta\\.kubernetes\\.io/do-loadbalancer-certificate-id=${certificateId}`,
  `--set image.repositoryUrl=${IMAGE_REPOSITORY_URL}`,
  `--set image.tag=${IMAGE_TAG}`,
  `--namespace ${NAMESPACE}`,
  `--set resPrefix=${RESOURCE_PREFIX}`,
  '--atomic',
  '--install',
  '--create-namespace',
  `--namespace=${NAMESPACE}`
]

let deployCmd = new Deno.Command('helm', { args })

let { code, stdout, stderr } = await deployCmd.output()

// stdout & stderr are a Uint8Array
console.log(new TextDecoder().decode(stdout))
