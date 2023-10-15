var path = require('path')
module.exports = {
  root: true,
  extends: ['@truffle/eslint-config-base/nextjs'],
  settings: {
    tailwindcss: {
      config: path.join(__dirname, '../../packages/ui/tailwind.config.js')
    },
    next: {
      rootDir: path.join(__dirname, '../../packages/*')
    }
  }
}
