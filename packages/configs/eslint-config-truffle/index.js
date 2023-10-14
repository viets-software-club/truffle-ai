module.exports = {
  extends: ['./post', './pre'].map(require.resolve)
}
