// Generates value files for deployment
import { Base64, camelCase, parseAllDocuments, path, stringify, walk } from './deps.ts'
const namespaces = ['production', 'staging', 'commit']

const addSpacesToStringfiedData = (str: string) => {
  const lines = str.split('\n')
  lines.pop()
  return lines.map((elem) => '    ' + elem + '\n').join('')
}
const encode = (data: { [key: string]: string }) => {
  const newData = {}
  for (const [key, value] of Object.entries(data)) {
    Object.assign(newData, { [key]: Base64.fromString(value).toString() })
  }
  return newData
}
const createResource = (
  kind: string,
  resourceName: string,
  data: { [key: string]: string } | null
): string => {
  return `  ${resourceName}-${kind === 'Secret' ? 'secret' : 'config-map'}:
${
  data != null ? addSpacesToStringfiedData(stringify(kind === 'Secret' ? encode(data) : data)) : ''
}`
}

const writeResource = async (
  destDir: string,
  kind: string,
  namespace: string,
  resourceName: string,
  data: { [key: string]: string } | null
) => {
  await Deno.writeTextFile(
    `${destDir}/values.${namespace}.yml`,
    createResource(kind, resourceName, data),
    {
      create: true,
      append: true
    }
  )
}
const writeResources = async (
  destDir: string,
  kind: string,
  resourceName: string,
  data: { [key: string]: string } | null
) => {
  await namespaces.map(async (namespace: string) => {
    await Deno.writeTextFile(
      `${destDir}/values.${namespace}.yml`,
      createResource(kind, resourceName, data),
      {
        create: true,
        append: true
      }
    )
  })
}

const make = async (kind: string, inputDir: string, destDir: string) => {
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
    if (!file.name.startsWith(`${camelCase(kind)}.`)) {
      console.error(`There is another file as ${kind}. in the directory. Exiting.`)
      Deno.exit()
    }
    if (!file.name.endsWith('.yml')) {
      console.error('There is another file as .yml in the directory. Exiting.')
      Deno.exit()
    }
    const resourceName = file.name.substring(
      kind.length + 1,
      file.name.indexOf('.', kind.length + 1)
    )
    const ymlDocumentsInFile = parseAllDocuments(await Deno.readTextFile(file.path))
    if (ymlDocumentsInFile.length === 0) {
      console.info(`${file.path} is empty`)
    }
    if (ymlDocumentsInFile.length > 1) {
      console.error('Not possible to have multi document yml')
      Deno.exit()
    }
    if (file.name.split('.').length === 4) {
      const namespace = file.name.split('.')[2]
      writeResource(destDir, kind, namespace, resourceName, ymlDocumentsInFile[0]?.toJSON() ?? null)
    } else if (file.name.split('.').length === 3) {
      writeResources(destDir, kind, resourceName, ymlDocumentsInFile[0]?.toJSON() ?? null)
    } else {
      console.error('ConfigMap path format wrong.')
      Deno.exit()
    }
  }
}

const generateNamespacedResource = async (kind: string, inputDir: string, destDir: string) => {
  await namespaces.map(async (namespace) => {
    await Deno.writeTextFile(`${destDir}/values.${namespace}.yml`, `${camelCase(kind)}s:\n`, {
      create: true
    })
  })
  await make(kind, inputDir, destDir)
}
export const mainModuleDir = path.dirname(path.fromFileUrl(Deno.mainModule))
const outConfigMap = path.resolve(path.join(mainModuleDir, '../../outputs/_configMaps'))
const outSecret = path.resolve(path.join(mainModuleDir, '../../outputs/_secrets'))
console.info(`Writing ConfigMaps to ${outConfigMap}`)
await generateNamespacedResource('ConfigMap', './config/variables/configMaps', outConfigMap)
console.info('-'.repeat(20))
console.info(`Writing Secrets to ${outSecret}`)
await generateNamespacedResource('Secret', './config/variables/secrets', outSecret)
console.info('-'.repeat(20))
console.info('Finished writing k8s envs')
