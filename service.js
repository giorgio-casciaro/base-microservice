var jesusServer = require('sint-bit-jesus/net.server')
var jesusClient = require('sint-bit-jesus/net.client')
var schemaManager = require('sint-bit-schema-manager')
var generateId = require('uuid/v4')
var path = require('path')
const getConsole = (serviceName, serviceId, pack) => require('./utils').getConsole({error: true, debug: true, log: true, warn: true}, serviceName, serviceId, pack)
var PACKAGE = 'microservice'
var CONSOLE = getConsole(PACKAGE, '----', '-----')

module.exports = function getService (CONFIG = {}, updateSchema) {

  if (!updateSchema) {
    updateSchema = () => {
      var config = require(CONFIG.configFile)
      config.net = require(CONFIG.netConfigFile)
      return config
    }
  }

  var domainConfig = require(CONFIG.configFile)
  var schemaConnection = schemaManager({updateSchema, savePath: CONFIG.schemaPath || domainConfig.schemaPath, serviceName: CONFIG.serviceName || domainConfig.serviceName, intervall: 1000, defaultField: 'methods'})
  var getMethods = () => require(CONFIG.methodsFile)(CONSOLE, netClient)

  CONFIG = Object.assign({
    serviceName: domainConfig.serviceName,
    serviceId: domainConfig.serviceId || generateId(),
    CONSOLE,
    getMethods,
    getMethodsConfig: (service, exclude) => schemaConnection.get(),
    getNetConfig: (service, exclude) => schemaConnection.get('net', service, exclude),
    getEventsIn: (service, exclude) => schemaConnection.get('eventsIn', service, exclude),
    getEventsOut: (service, exclude) => schemaConnection.get('eventsOut', service, exclude),
    getRpcOut: (service, exclude) => schemaConnection.get('rpcOut', service, exclude)
  }, CONFIG)
  
  var netClient = jesusClient(CONFIG)
  return {
    CONFIG,
    netClient,
    netServer: jesusServer(CONFIG)
  }
}
