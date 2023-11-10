import { camelCase, parseAllDocuments, path, stringify, walk } from "./deps.ts";
const namespaces = ["production", "staging", "commit"];

const addSpacesToStringfiedData = (str: string) => {
  const lines = str.split("\n");
  lines.pop();
  return lines.map((elem) => "  " + elem + "\n").join("");
};
const createResource = (
  kind: string,
  namespace: string,
  repoName: string,
  resourceName: string,
  data: object | null,
): string => {
  return `apiVersion: v1\nkind: ${kind}\nmetadata:
  name: ${repoName}-${resourceName}-config
  namespace: ${namespace}
data:
${data != null ? addSpacesToStringfiedData(stringify(data)) : ""}---
`;
};

const writeResource = async (
  destDir: string,
  kind: string,
  namespace: string,
  repoName: string,
  name: string,
  data: object,
) => {
  await Deno.writeTextFile(
    `${destDir}/${camelCase(kind)}s.${namespace}.yml`,
    createResource(kind, namespace, repoName, name, data),
    {
      create: true,
      append: true,
    },
  );
};
const writeResources = async (
  destDir: string,
  kind: string,
  repoName: string,
  name: string,
  data: object,
) => {
  await namespaces.map(async (namespace: string) => {
    await Deno.writeTextFile(
      `${destDir}/${camelCase(kind)}s.${namespace}.yml`,
      createResource(kind, namespace, repoName, name, data),
      {
        create: true,
        append: true,
      },
    );
  });
};

const make = async (
  kind: string,
  inputDir: string,
  destDir: string,
  repoName: string,
) => {
  const files = walk(inputDir, {
    maxDepth: 1,
    includeDirs: false,
    includeSymlinks: false,
    exts: [".yml"],
  });
  for await (const file of files) {
    if (file.name.startsWith("secretExample")) {
      continue;
    }
    if (!file.name.startsWith(`${camelCase(kind)}.`)) {
      console.error(
        `There is another file as ${kind}. in the directory. Exiting.`,
      );
      Deno.exit();
    }
    if (!file.name.endsWith(".yml")) {
      console.error(
        "There is another file as .yml in the directory. Exiting.",
      );
      Deno.exit();
    }
    const resourceName = file.name.substring(
      kind.length + 1,
      file.name.indexOf(".", kind.length + 1),
    );
    const ymlDocumentsInFile = parseAllDocuments(
      await Deno.readTextFile(file.path),
    );
    if (ymlDocumentsInFile.length > 1) {
      console.error("Not possible to have multi document yml");
      Deno.exit();
    }
    if (file.name.split(".").length === 4) {
      const namespace = file.name.split(".")[2];
      writeResource(
        destDir,
        kind,
        namespace,
        repoName,
        resourceName,
        ymlDocumentsInFile[0]?.toJSON() ?? null,
      );
    } else if (file.name.split(".").length === 3) {
      writeResources(
        destDir,
        kind,
        repoName,
        resourceName,
        ymlDocumentsInFile[0]?.toJSON() ?? null,
      );
    } else {
      console.error("ConfigMap path format wrong.");
      Deno.exit();
    }
  }
};

const generateNamespacedResource = async (
  kind: string,
  inputDir: string,
  destDir: string,
  repoName: string,
) => {
  await namespaces.map(async (namespace) => {
    await Deno.writeTextFile(
      `${destDir}/${camelCase(kind)}s.${namespace}.yml`,
      "",
    );
  });
  await make(kind, inputDir, destDir, repoName);
};

const repoName = "truffle-ai";
const outConfigMap = path.dirname("../terraform/modules/doks-vars/configMaps");
const outSecret = path.dirname("../terraform/modules/doks-vars/secrets");
console.info(`Writing ConfigMaps to ${outConfigMap}`);
await generateNamespacedResource(
  "ConfigMap",
  "./configMaps",
  outConfigMap,
  repoName,
);
console.info(`Writing Secrets to ${outSecret}`);
await generateNamespacedResource(
  "Secret",
  "./secrets",
  outSecret,
  repoName,
);
