var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  DB_URL: '"https://translate-test-aee8f.firebaseio.com/"'
})
