#!/usr/bin/env zx
import fs from 'fs-extra'
const text = fs.readFileSync('./.env.common', 'utf8');
const isEnvSet = text.search(/ENVIRONMENT=\w+/g) !== -1
const newText = isEnvSet ? text.replace(/ENVIRONMENT=\w+/g, `ENVIRONMENT=${argv._[0]}`) : `ENVIRONMENT=${argv._[0]}`;
if(isEnvSet) 
  await fs.outputFileSync('./.env.common', newText);
else
  await fs.outputFileSync('./.env.common', `\n${newText}`, {flag: 'a'});
console.log(`Changed ENVIRONMENT to ${chalk.cyan(argv._[0])}`)