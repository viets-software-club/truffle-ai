import { parseAllDocuments, stringify, walk } from "./deps.ts";
const namespaces = ["production", "staging", "commit"];

const addSpacesToStringfiedData = (str: string) => {
  const lines = str.split("\n");
  lines.pop();
  return lines.map((elem) => "  " + elem + "\n").join("");
};
const createConfigMap = (
  repoName: string,
  namespace: string,
  configMapName: string,
  data: object | null,
): string => {
  return `apiVersion: v1\nkind: ConfigMap\nmetadata:
  name: ${repoName}-${configMapName}-config
  namespace: ${namespace}
data:
${data != null ? addSpacesToStringfiedData(stringify(data)) : ""}---
`;
};

const writeConfigMap = async (
  destDir: string,
  namespace: string,
  repoName: string,
  name: string,
  data: object,
) => {
  await Deno.writeTextFile(
    `${destDir}/configMaps.${namespace}.yml`,
    createConfigMap(namespace, repoName, name, data),
    {
      create: true,
      append: true,
    },
  );
};
const writeConfigMaps = async (
  destDir: string,
  repoName: string,
  name: string,
  data: object,
) => {
  await namespaces.map(async (namespace: string) => {
    await Deno.writeTextFile(
      `${destDir}/configMaps.${namespace}.yml`,
      createConfigMap(namespace, repoName, name, data),
      {
        create: true,
        append: true,
      },
    );
  });
};

const make = async (
  destDir: string,
  repoName: string,
) => {
  const files = walk("./configMaps", {
    maxDepth: 1,
    includeDirs: false,
    includeSymlinks: false,
    exts: [".yml"],
  });
  for await (const file of files) {
    if (!file.name.startsWith("configMap.")) {
      console.error(
        "There is another file as configMap. in the directory. Exiting.",
      );
      Deno.exit();
    }
    if (!file.name.endsWith(".yml")) {
      console.error(
        "There is another file as .yml in the directory. Exiting.",
      );
      Deno.exit();
    }
    const configMapName = file.name.substring(10, file.name.indexOf(".", 10));
    const ymlDocumentsInFile = parseAllDocuments(
      await Deno.readTextFile(file.path),
    );
    if (ymlDocumentsInFile.length > 1) {
      console.error("Not possible to have multi document yml");
      Deno.exit();
    }
    if (file.name.split(".").length === 4) {
      const namespace = file.name.split(".")[2];
      writeConfigMap(
        destDir,
        namespace,
        repoName,
        configMapName,
        ymlDocumentsInFile[0]?.toJSON() ?? null,
      );
    } else if (file.name.split(".").length === 3) {
      writeConfigMaps(
        destDir,
        repoName,
        configMapName,
        ymlDocumentsInFile[0]?.toJSON() ?? null,
      );
    } else {
      console.error("ConfigMap path format wrong.");
      Deno.exit();
    }
  }
};

const generateConfigMaps = async (
  destDir: string,
  repoName: string,
) => {
  await namespaces.map(async (namespace) => {
    await Deno.writeTextFile(
      `${destDir}/configMaps.${namespace}.yml`,
      "",
    );
  });
  await make(destDir, repoName);
};

const repoName = prompt("Please enter the repo-name (truffle-ai):") ??
  "truffle-ai";
const destDir = prompt(
  "Please enter the destination directory (../terraform/modules/kubernetes-config):",
) ?? "../terraform/modules/kubernetes-config";

await generateConfigMaps(destDir, repoName);
