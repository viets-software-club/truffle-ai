#!/usr/bin/env zx
console.log(
	`\n>>> Your environment is ${chalk.cyan.bold.underline(
		process.env.ENVIRONMENT.toUpperCase()
	)}`
)
