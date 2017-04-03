var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DB_URL: '"https://translate-test-aee8f.firebaseio.com/"'
})
