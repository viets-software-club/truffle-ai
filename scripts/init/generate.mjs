#!/usr/bin/env zx
import 'zx/globals'

$.verbose = false

echo("Use the following in your .zshrc/.bashrc:\n")
const dir = process.cwd()
const env = "development"

const list = [`${dir}/scripts/source.sh`, `${dir}/config/alias/index.txt`]
for (const entry of list) {
    echo(chalk.cyan(`source ${entry}`))
}
echo("\nfor .vscode/settings.json:\n")
echo (chalk.cyan(`{
  "deno.enablePaths": ["./packages/build-values"]
}`))