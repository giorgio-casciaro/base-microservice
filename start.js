var path = require('path')
var SERVICE = require('./service')({
  configFile: path.join(__dirname, './domain/config'),
  methodsFile: path.join(__dirname, './domain/methods'),
  netConfigFile: path.join(__dirname, './domain/net.json'),
  schemaFile: path.join(__dirname, './domain/schema')
})
SERVICE.netServer.start()
