const fs = require('fs')
const path = require('path')
const deploymentFile = path.join(__dirname, '../config/deployment.yml')
try {
  console.log(`${process.env.COMMIT_TAG} ${process.env.COMMIT_MESSAGE.replaceAll("'", '')}`)
  const data = fs
    .readFileSync(deploymentFile, 'utf8')
    .replace('<GRAPHQL-SERVER-IMAGE>', process.env.GRAPHQL_SERVER_IMAGE)
    .replace('<GRAPHQL-GATEWAY-IMAGE>', process.env.GRAPHQL_GATEWAY_IMAGE)
    .replace('<REPO-JOB-IMAGE>', process.env.REPO_JOB_IMAGE)
    .replace(
      '<CHANGE-CAUSE>',
      `${process.env.COMMIT_TAG}: ${process.env.COMMIT_MESSAGE.replaceAll("'", '')}`
    )
    .replace('<GRAPHQL-GATEWAY-PORT>', process.env.GRAPHQL_GATEWAY_PORT)
    .replace('<GRAPHQL-SERVER-PORT>', process.env.GRAPHQL_SERVER_PORT)
    .replace('<CERTIFICATE-ID>', process.env.CERTIFICATE_ID)
  console.log(data)
  fs.writeFileSync(deploymentFile, data)
  console.log('Deployment file written')
} catch (error) {
  console.error(error)
}
