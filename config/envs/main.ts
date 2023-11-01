import {walk, join, parseAllDocuments, parse, stringify, decode, Base64} from './deps.ts'

const CONFIG_MAP_DIR = './configMaps'
const SECRET_DIR = './secrets'
const namespaces = ['production', 'staging', 'commit']


const addSpacesToStringfiedData = (str: string) => {
  const lines = str.split('\n')
  lines.pop();
  return lines.map(elem => '  ' + elem + '\n').join('')
}
const createConfigMap = (appName: string, configMapName: string, namespace: string, data: object | null): string => {
  return `apiVersion: v1\nkind: ConfigMap\nmetadata:
  name: ${appName}-${configMapName}-config
  namespace: ${namespace}
data:
${data != null ? addSpacesToStringfiedData(stringify(data)): ''}`
}


const createSecret = (appName: string, secretName: string, namespace: string, data?: object | null): string => {
  return `apiVersion: v1\nkind: Secret\nmetadata:
  name: ${appName}-${secretName}-secret
  namespace: ${namespace}
data:
${data != null ? addSpacesToStringfiedData(stringify(data)): ''}`
}

const getConfigMaps = async (appName: string, directory: string): Promise<string[]> => {
  const files = walk(directory, {maxDepth: 1, includeDirs: false, includeSymlinks: false, exts: ['.yml']})
  let configMaps: string[] = []
  for await (const file of files) {
    if(file.name.startsWith('configMap.') && file.name.length > 14) {
      const confiMapName = file.name.substring('configMap'.length + 1, file.name.length - 4)
      const ymlDocumentsInFile = parseAllDocuments(await Deno.readTextFile(file.path))
      if(ymlDocumentsInFile.length === 0) {console.info(`${file.name} is empty`); 
      configMaps = configMaps.concat(namespaces.flatMap(namespace => {
        return createConfigMap(appName, confiMapName, namespace, null)
      }))
      continue; }
      if(ymlDocumentsInFile.length !== 1 && ymlDocumentsInFile.length !== namespaces.length) {console.error('Aborting. Some configMap specifies namespaces but does not include all namespaces!!! This can not be!'); Deno.exit() }
      configMaps = configMaps.concat(ymlDocumentsInFile.flatMap(ymlDocument => {
        const jsonDocument = ymlDocument.toJSON()
        const {namespace, ...jsonDocumentWithoutNamespace} = jsonDocument
        if(namespace?.length > 0) {
          return createConfigMap(appName, confiMapName, namespace, jsonDocumentWithoutNamespace)
        } else {
          return namespaces.flatMap(namespace => {
            return createConfigMap(appName, confiMapName, namespace, jsonDocumentWithoutNamespace)
          })
        }
      }));
    }
  }
  return configMaps
}

const getSecrets = async (appName: string, directory: string): Promise<string[]> => {
  const files = walk(directory, {maxDepth: 1, includeDirs: false, includeSymlinks: false, exts: ['.yml']})
  let secrets: string[] = []
  for await (const file of files) {
    if(file.name.startsWith('secret.') && file.name.length > 14) {
      const secret = file.name.substring('secret'.length + 1, file.name.length - 4)
      const ymlDocumentsInFile = parseAllDocuments(await Deno.readTextFile(file.path))
      if(ymlDocumentsInFile.length === 0) {console.info(`${file.name} is empty`);
       
      secrets = secrets.concat(namespaces.flatMap(namespace => {
        return createSecret(appName, secret, namespace, null)
      }))
      continue;
      
      }
      if(ymlDocumentsInFile.length !== 1 && ymlDocumentsInFile.length !== namespaces.length) {console.error('Aborting. Some secret specifies namespaces but does not include all namespaces!!! This can not be!'); Deno.exit() }
      secrets = secrets.concat(ymlDocumentsInFile.flatMap(ymlDocument => {
        const jsonDocument = ymlDocument.toJSON()
        const {namespace,  ...jsonDocumentWithoutNamespace} = jsonDocument
        if(namespace) {
          return createSecret(appName, secret, namespace, jsonDocumentWithoutNamespace)
        } else {
          return namespaces.flatMap(namespace => {
            return createSecret(appName, secret, namespace, jsonDocumentWithoutNamespace)
          })
        }
      }));
    }
  }
  return secrets
}


const createEnvFileFromConfigMapAndSecrets = async (configMapAndSecretFile: string, outDir: string) => {
  await namespaces.map(async namespace => {
    const filePath = join(outDir, `.env.${namespace}`);
    await Deno.writeTextFile(filePath, '');
  })
  const ymlDocuments = parseAllDocuments(await Deno.readTextFile(configMapAndSecretFile));
  await ymlDocuments.forEach(async (ymlDocument) => {
    const jsonDocument = ymlDocument.toJSON()
    // if(jsonDocument.data) {
    //   const {data}: {data: {[key: string]: string}} = jsonDocument
    //   for (const [key, value] of Object.entries(data)) {
    //     console.log(Base64.fromBase64String(value).toString());
    //     jsonDocument.data[key] = Base64.fromBase64String(value).toString()
    //   }
    // }
    if(jsonDocument.data) {
      const {data}: {data: {[key: string]: string}} = jsonDocument
      for (const [key, value] of Object.entries(data)) {
        const newValue = jsonDocument.kind === "Secret" ? Base64.fromBase64String(value).toString() : value
        const line = typeof newValue === 'string' && newValue?.includes('\n') ? `${key}=${newValue}` : `${key}=${newValue}\n`
        await Deno.writeTextFile(join(outDir, `.env.${jsonDocument.metadata.namespace}`), line, {create: true, append: true})

      }
    }
    // console.log(jsonDocument.data)
    // if(jsonDocument.data) {
    //   const output = stringify(jsonDocument.data);
    //   Deno.writeTextFile(join(outDir, `.env.${jsonDocument.metadata.namespace}`), output, {create: true, append: true})
    // }
  })
}



const generateConfigMapsAndSecretsFile = async (outputFile: string, appName: string, configMapDir: string, secretsDir: string, convertSecretsToBase64: boolean) => {
  const configMaps = await getConfigMaps(appName, configMapDir)
  const secrets = await getSecrets(appName, secretsDir)
  const data = [...configMaps, ...secrets].join('---\n')
  Deno.writeTextFile(outputFile, data)
}

const appName = prompt("Please enter the app prefix (truffle):") ?? "truffle";
await generateConfigMapsAndSecretsFile("generated-envs.yml", appName, CONFIG_MAP_DIR, SECRET_DIR, false)
await createEnvFileFromConfigMapAndSecrets("./generated-envs.yml", "../../")