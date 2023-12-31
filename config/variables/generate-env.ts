// Generates env files for deployment
import { Base64, parse, path, walk } from './deps.ts'
const namespaces = ['production', 'staging', 'commit']

const writeEnvsFromDir = async (inputDir: string, outDir: string, isEncode: boolean) => {
  const files = walk(inputDir, {
    maxDepth: 1,
    includeDirs: false,
    includeSymlinks: false,
    exts: ['.yml']
  })
  for await (const file of files) {
    if (file.name.startsWith('secretExample')) {
      continue
    }
    const isAllNamespaces = file.name.split('.').length === 3
    const isOneNamespace = file.name.split('.').length === 4

    const json: { [key: string]: string } = parse(await Deno.readTextFile(file.path))
    if (json === null) {
      console.info(`${file.path} is empty`)
      continue
    }
    for (const [key, value] of Object.entries(json)) {
      const newValue = isEncode ? Base64.fromString(value).toString() : value
      const line =
        typeof newValue === 'string' && newValue?.includes('\n')
          ? `${key}=${newValue}`
          : `${key}=${newValue}\n`
      if (isAllNamespaces) {
        namespaces.forEach(async (namespace) => {
          await Deno.writeTextFile(path.join(outDir, `.env.${namespace}`), line, {
            create: true,
            append: true
          })
        })
      } else if (isOneNamespace) {
        const namespace = file.name.split('.')[2]
        await Deno.writeTextFile(path.join(outDir, `.env.${namespace}`), line, {
          create: true,
          append: true
        })
      } else {
        console.error('The file formatting is wrong! Exiting.')
        Deno.exit()
      }
    }
  }
}
const mainModuleDir = path.dirname(path.fromFileUrl(Deno.mainModule))
const outDir = path.resolve(path.join(mainModuleDir, '../..'))
namespaces.forEach(async (namespace) => {
  await Deno.writeTextFile(path.join(outDir, `.env.${namespace}`, ''), '')
})

console.info('Writing ConfigMaps to .env files:')
await writeEnvsFromDir('./config/variables/configMaps', outDir, false)
console.info('-'.repeat(20))
console.info('Writing Secrets to .env files:')
await writeEnvsFromDir('./config/variables/secrets', outDir, false)
console.info('-'.repeat(20))
console.info('Finished writing .env files')
