
if (!global._babelPolyfill)require('babel-polyfill')
var SERVICE = require('./service')({
  configFile: path.join(__dirname, './domain/config'),
  methodsFile: path.join(__dirname, './domain/methods'),
  netConfigFile: path.join(__dirname, './domain/net.json'),
  schemaPath: path.join(__dirname, './schema')
})
SERVICE.netServer.start()
