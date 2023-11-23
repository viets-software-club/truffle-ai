#!/usr/bin/env zx
// lists sub commands of npm run command (e.g. for npm run start, lists all start:<subcommand>)
import 'zx/globals'

$.verbose = false
console.warn('Use one of the following:\n')
console.log(
  (
    await $`npm run | grep --color=always "${argv._[0]}:" -A 1 | awk '/^[[:space:]]/ {print "\\033[38;5;232m" $0 "\\033[0m"; next} {print}';`
  ).stdout
)
