var t = require('tap')
var path = require('path')
var co = require('co')
var CONSOLE = require('../utils').getConsole({debug: true, log: true, error: true, warn: true}, 'BASE TEST', '----', '-----')

function getNetConfig (number) {
  return {
    channels: {
      'test': { url: 'localhost:1' + number + '080' },
      'httpPublic': { url: 'localhost:1' + number + '081' },
      'http': { url: 'localhost:1' + number + '082' }
    }
  }
}
var SERVICE1UpdateSchema = () => {
  var config = require('./domain/schema')
  config.net = getNetConfig(1)
  return config
}
var SERVICE1 = require('../service')({
  serviceName: 'SERVICE1',
  serviceId: 'SERVICE1',
  configFile: path.join(__dirname, './domain/config'),
  schemaFile: path.join(__dirname, './domain/schema'),
  methodsFile: path.join(__dirname, './domain/methods'),
  netConfigFile: path.join(__dirname, './domain/net.json'),
  schemaPath: path.join(__dirname, './schema')
}, SERVICE1UpdateSchema)

var SERVICE2UpdateSchema = () => {
  var config = require('./domain/schema')
  config.net = getNetConfig(2)
  return config
}
var SERVICE2 = require('../service')({
  serviceName: 'SERVICE2',
  serviceId: 'SERVICE2',
  configFile: path.join(__dirname, './domain/config'),
  schemaFile: path.join(__dirname, './domain/schema'),
  methodsFile: path.join(__dirname, './domain/methods'),
  netConfigFile: path.join(__dirname, './domain/net.json'),
  schemaPath: path.join(__dirname, './schema')
}, SERVICE2UpdateSchema)

var SERVICE3UpdateSchema = () => {
  var config = require('./domain/schema')
  config.net = getNetConfig(3)
  return config
}
var SERVICE3 = require('../service')({
  serviceName: 'SERVICE3',
  serviceId: 'SERVICE3',
  configFile: path.join(__dirname, './domain/config'),
  schemaFile: path.join(__dirname, './domain/schema'),
  methodsFile: path.join(__dirname, './domain/methods'),
  netConfigFile: path.join(__dirname, './domain/net.json'),
  schemaPath: path.join(__dirname, './schema')
}, SERVICE3UpdateSchema)

t.test('*** SERVICE1S NET ***', {
//  autoend: true
}, co.wrap(function*(t) {
  t.plan(1)

  CONSOLE.debug('----------------- TEST 1 - START SERVERS -----------------')
  yield t.test('START SERVERS', co.wrap(function*(t) {
    yield SERVICE1.netServer.start()
    yield SERVICE2.netServer.start()
    yield SERVICE3.netServer.start()

    yield new Promise((resolve) => setTimeout(resolve, 1000))

    CONSOLE.debug('----------------- testRpc -----------------')
    var testRpc = yield SERVICE1.netClient.rpc('testRpc', {testsed: 'testsend'})
    t.same(testRpc, {testsed: 'testsend'}, 'rpc testRpc echo test')

    yield new Promise((resolve) => setTimeout(resolve, 1000))

    CONSOLE.debug('----------------- testEvent -----------------')
    var testEmit = yield SERVICE1.netClient.emit('testEvent', {testsed: 'testsend'})
    t.same(testEmit, {testsed: 'testsend'}, 'emit testEvent echo test')

    yield new Promise((resolve) => setTimeout(resolve, 1000))

    CONSOLE.debug('----------------- testEventMulti -----------------')
    var testEmitMulti = yield SERVICE1.netClient.emit('testEventMulti', {testsed: 'testsend'})
    t.same(testEmitMulti, [{testsed: 'testsend'}, {testsed: 'testsend'}], 'emit testEventMulti echo test')

    t.end()
  }))
  t.end()
})).then(() => process.exit())
