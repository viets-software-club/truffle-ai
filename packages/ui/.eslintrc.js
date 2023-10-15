module.exports = {
  extends: ['@truffle/eslint-config-base/nextjs'],
  settings: {
    tailwindcss: {
      config: 'packages/ui/tailwind.config.js'
    },
    next: {
      rootDir: 'packages/ui/'
    }
  }
}
