import { join, parseAllDocuments, Base64 } from './deps.ts'
const namespaces = ['production', 'staging', 'commit']

const createEnvFileFromConfigMapAndSecrets = async (
  configMapAndSecretFile: string,
  outDir: string
) => {
  await namespaces.map(async (namespace) => {
    const filePath = join(outDir, `.env.${namespace}`)
    await Deno.writeTextFile(filePath, '')
  })
  const ymlDocuments = parseAllDocuments(await Deno.readTextFile(configMapAndSecretFile))
  await ymlDocuments.forEach(async (ymlDocument) => {
    const jsonDocument = ymlDocument.toJSON()
    if (jsonDocument.data) {
      const { data }: { data: { [key: string]: string } } = jsonDocument
      for (const [key, value] of Object.entries(data)) {
        const newValue =
          jsonDocument.kind === 'Secret' ? Base64.fromBase64String(value).toString() : value
        const line =
          typeof newValue === 'string' && newValue?.includes('\n')
            ? `${key}=${newValue}`
            : `${key}=${newValue}\n`
        await Deno.writeTextFile(join(outDir, `.env.${jsonDocument.metadata.namespace}`), line, {
          create: true,
          append: true
        })
      }
    }
  })
}
const inputFile = prompt('Please enter the input file (generated-k8s.yml):') ?? 'generated-k8s.yml'
const outDir = prompt('Please enter the output directory (../../):') ?? '../../'
await createEnvFileFromConfigMapAndSecrets(inputFile, outDir)
