'use strict';

if (!global._babelPolyfill) require('babel-polyfill');

var t = require('tap');
var path = require('path');
var CONSOLE = require('../utils').getConsole({ debug: true, log: true, error: true, warn: true }, 'BASE TEST', '----', '-----');

function getNetConfig(number) {
  return {
    channels: {
      'test': { url: 'localhost:1' + number + '080' },
      'httpPublic': { url: 'localhost:1' + number + '081' },
      'http': { url: 'localhost:1' + number + '082' }
    }
  };
}
var SERVICE1UpdateSchema = function SERVICE1UpdateSchema() {
  var config = require('./domain/schema');
  config.net = getNetConfig(1);
  return config;
};
var SERVICE1 = require('../service')({
  serviceName: 'SERVICE1',
  serviceId: 'SERVICE1',
  configFile: path.join(__dirname, './domain/config'),
  schemaFile: path.join(__dirname, './domain/schema'),
  methodsFile: path.join(__dirname, './domain/methods'),
  netConfigFile: path.join(__dirname, './domain/net.json'),
  schemaPath: path.join(__dirname, './schema')
}, SERVICE1UpdateSchema);

var SERVICE2UpdateSchema = function SERVICE2UpdateSchema() {
  var config = require('./domain/schema');
  config.net = getNetConfig(2);
  return config;
};
var SERVICE2 = require('../service')({
  serviceName: 'SERVICE2',
  serviceId: 'SERVICE2',
  configFile: path.join(__dirname, './domain/config'),
  schemaFile: path.join(__dirname, './domain/schema'),
  methodsFile: path.join(__dirname, './domain/methods'),
  netConfigFile: path.join(__dirname, './domain/net.json'),
  schemaPath: path.join(__dirname, './schema')
}, SERVICE2UpdateSchema);

var SERVICE3UpdateSchema = function SERVICE3UpdateSchema() {
  var config = require('./domain/schema');
  config.net = getNetConfig(3);
  return config;
};
var SERVICE3 = require('../service')({
  serviceName: 'SERVICE3',
  serviceId: 'SERVICE3',
  configFile: path.join(__dirname, './domain/config'),
  schemaFile: path.join(__dirname, './domain/schema'),
  methodsFile: path.join(__dirname, './domain/methods'),
  netConfigFile: path.join(__dirname, './domain/net.json'),
  schemaPath: path.join(__dirname, './schema')
}, SERVICE3UpdateSchema);

t.test('*** SERVICE1S NET ***', {
  //  autoend: true
}, function mainTest(t) {
  return regeneratorRuntime.async(function mainTest$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          t.plan(1);

          CONSOLE.debug('----------------- TEST 1 - START SERVERS -----------------');
          _context2.next = 4;
          return regeneratorRuntime.awrap(t.test('START SERVERS', function _callee(t) {
            var testRpc, testEmit, testEmitMulti;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(SERVICE1.netServer.start());

                  case 2:
                    _context.next = 4;
                    return regeneratorRuntime.awrap(SERVICE2.netServer.start());

                  case 4:
                    _context.next = 6;
                    return regeneratorRuntime.awrap(SERVICE3.netServer.start());

                  case 6:
                    _context.next = 8;
                    return regeneratorRuntime.awrap(new Promise(function (resolve) {
                      return setTimeout(resolve, 1000);
                    }));

                  case 8:

                    CONSOLE.debug('----------------- testRpc -----------------');
                    _context.next = 11;
                    return regeneratorRuntime.awrap(SERVICE1.netClient.rpc('testRpc', { testsed: 'testsend' }));

                  case 11:
                    testRpc = _context.sent;

                    t.same(testRpc, { testsed: 'testsend' }, 'rpc testRpc echo test');

                    _context.next = 15;
                    return regeneratorRuntime.awrap(new Promise(function (resolve) {
                      return setTimeout(resolve, 1000);
                    }));

                  case 15:

                    CONSOLE.debug('----------------- testEvent -----------------');
                    _context.next = 18;
                    return regeneratorRuntime.awrap(SERVICE1.netClient.emit('testEvent', { testsed: 'testsend' }));

                  case 18:
                    testEmit = _context.sent;

                    t.same(testEmit, { testsed: 'testsend' }, 'emit testEvent echo test');

                    _context.next = 22;
                    return regeneratorRuntime.awrap(new Promise(function (resolve) {
                      return setTimeout(resolve, 1000);
                    }));

                  case 22:

                    CONSOLE.debug('----------------- testEventMulti -----------------');
                    _context.next = 25;
                    return regeneratorRuntime.awrap(SERVICE1.netClient.emit('testEventMulti', { testsed: 'testsend' }));

                  case 25:
                    testEmitMulti = _context.sent;

                    t.same(testEmitMulti, [{ testsed: 'testsend' }, { testsed: 'testsend' }], 'emit testEventMulti echo test');

                    t.end();

                  case 28:
                  case 'end':
                    return _context.stop();
                }
              }
            }, null, this);
          }));

        case 4:
          t.end();

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this);
}).then(function () {
  return process.exit();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UudGVzdC5lczYiXSwibmFtZXMiOlsiZ2xvYmFsIiwiX2JhYmVsUG9seWZpbGwiLCJyZXF1aXJlIiwidCIsInBhdGgiLCJDT05TT0xFIiwiZ2V0Q29uc29sZSIsImRlYnVnIiwibG9nIiwiZXJyb3IiLCJ3YXJuIiwiZ2V0TmV0Q29uZmlnIiwibnVtYmVyIiwiY2hhbm5lbHMiLCJ1cmwiLCJTRVJWSUNFMVVwZGF0ZVNjaGVtYSIsImNvbmZpZyIsIm5ldCIsIlNFUlZJQ0UxIiwic2VydmljZU5hbWUiLCJzZXJ2aWNlSWQiLCJjb25maWdGaWxlIiwiam9pbiIsIl9fZGlybmFtZSIsInNjaGVtYUZpbGUiLCJtZXRob2RzRmlsZSIsIm5ldENvbmZpZ0ZpbGUiLCJzY2hlbWFQYXRoIiwiU0VSVklDRTJVcGRhdGVTY2hlbWEiLCJTRVJWSUNFMiIsIlNFUlZJQ0UzVXBkYXRlU2NoZW1hIiwiU0VSVklDRTMiLCJ0ZXN0IiwibWFpblRlc3QiLCJwbGFuIiwibmV0U2VydmVyIiwic3RhcnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJuZXRDbGllbnQiLCJycGMiLCJ0ZXN0c2VkIiwidGVzdFJwYyIsInNhbWUiLCJlbWl0IiwidGVzdEVtaXQiLCJ0ZXN0RW1pdE11bHRpIiwiZW5kIiwidGhlbiIsInByb2Nlc3MiLCJleGl0Il0sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksQ0FBQ0EsT0FBT0MsY0FBWixFQUEyQkMsUUFBUSxnQkFBUjs7QUFFM0IsSUFBSUMsSUFBSUQsUUFBUSxLQUFSLENBQVI7QUFDQSxJQUFJRSxPQUFPRixRQUFRLE1BQVIsQ0FBWDtBQUNBLElBQUlHLFVBQVVILFFBQVEsVUFBUixFQUFvQkksVUFBcEIsQ0FBK0IsRUFBQ0MsT0FBTyxJQUFSLEVBQWNDLEtBQUssSUFBbkIsRUFBeUJDLE9BQU8sSUFBaEMsRUFBc0NDLE1BQU0sSUFBNUMsRUFBL0IsRUFBa0YsV0FBbEYsRUFBK0YsTUFBL0YsRUFBdUcsT0FBdkcsQ0FBZDs7QUFF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LFVBQVYsRUFBckMsQ0FkTzs7QUFBQTtBQWN4QkksNEJBZHdCOztBQWU1QjNDLHNCQUFFeUMsSUFBRixDQUFPRSxRQUFQLEVBQWlCLEVBQUNKLFNBQVMsVUFBVixFQUFqQixFQUF3QywwQkFBeEM7O0FBZjRCO0FBQUEsb0RBaUJ0QixJQUFJTCxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLDZCQUFhQyxXQUFXRCxPQUFYLEVBQW9CLElBQXBCLENBQWI7QUFBQSxxQkFBWixDQWpCc0I7O0FBQUE7O0FBbUI1QmpDLDRCQUFRRSxLQUFSLENBQWMsb0RBQWQ7QUFuQjRCO0FBQUEsb0RBb0JGVyxTQUFTc0IsU0FBVCxDQUFtQkssSUFBbkIsQ0FBd0IsZ0JBQXhCLEVBQTBDLEVBQUNILFNBQVMsVUFBVixFQUExQyxDQXBCRTs7QUFBQTtBQW9CeEJLLGlDQXBCd0I7O0FBcUI1QjVDLHNCQUFFeUMsSUFBRixDQUFPRyxhQUFQLEVBQXNCLENBQUMsRUFBQ0wsU0FBUyxVQUFWLEVBQUQsRUFBd0IsRUFBQ0EsU0FBUyxVQUFWLEVBQXhCLENBQXRCLEVBQXNFLCtCQUF0RTs7QUFFQXZDLHNCQUFFNkMsR0FBRjs7QUF2QjRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXhCLENBSkw7O0FBQUE7QUE2QkQ3QyxZQUFFNkMsR0FBRjs7QUE3QkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FGSCxFQWdDR0MsSUFoQ0gsQ0FnQ1E7QUFBQSxTQUFNQyxRQUFRQyxJQUFSLEVBQU47QUFBQSxDQWhDUiIsImZpbGUiOiJiYXNlLnRlc3QuZXM2Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pZiAoIWdsb2JhbC5fYmFiZWxQb2x5ZmlsbClyZXF1aXJlKCdiYWJlbC1wb2x5ZmlsbCcpXG5cbnZhciB0ID0gcmVxdWlyZSgndGFwJylcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG52YXIgQ09OU09MRSA9IHJlcXVpcmUoJy4uL3V0aWxzJykuZ2V0Q29uc29sZSh7ZGVidWc6IHRydWUsIGxvZzogdHJ1ZSwgZXJyb3I6IHRydWUsIHdhcm46IHRydWV9LCAnQkFTRSBURVNUJywgJy0tLS0nLCAnLS0tLS0nKVxuXG5mdW5jdGlvbiBnZXROZXRDb25maWcgKG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIGNoYW5uZWxzOiB7XG4gICAgICAndGVzdCc6IHsgdXJsOiAnbG9jYWxob3N0OjEnICsgbnVtYmVyICsgJzA4MCcgfSxcbiAgICAgICdodHRwUHVibGljJzogeyB1cmw6ICdsb2NhbGhvc3Q6MScgKyBudW1iZXIgKyAnMDgxJyB9LFxuICAgICAgJ2h0dHAnOiB7IHVybDogJ2xvY2FsaG9zdDoxJyArIG51bWJlciArICcwODInIH1cbiAgICB9XG4gIH1cbn1cbnZhciBTRVJWSUNFMVVwZGF0ZVNjaGVtYSA9ICgpID0+IHtcbiAgdmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4vZG9tYWluL3NjaGVtYScpXG4gIGNvbmZpZy5uZXQgPSBnZXROZXRDb25maWcoMSlcbiAgcmV0dXJuIGNvbmZpZ1xufVxudmFyIFNFUlZJQ0UxID0gcmVxdWlyZSgnLi4vc2VydmljZScpKHtcbiAgc2VydmljZU5hbWU6ICdTRVJWSUNFMScsXG4gIHNlcnZpY2VJZDogJ1NFUlZJQ0UxJyxcbiAgY29uZmlnRmlsZTogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vZG9tYWluL2NvbmZpZycpLFxuICBzY2hlbWFGaWxlOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9kb21haW4vc2NoZW1hJyksXG4gIG1ldGhvZHNGaWxlOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9kb21haW4vbWV0aG9kcycpLFxuICBuZXRDb25maWdGaWxlOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9kb21haW4vbmV0Lmpzb24nKSxcbiAgc2NoZW1hUGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc2NoZW1hJylcbn0sIFNFUlZJQ0UxVXBkYXRlU2NoZW1hKVxuXG52YXIgU0VSVklDRTJVcGRhdGVTY2hlbWEgPSAoKSA9PiB7XG4gIHZhciBjb25maWcgPSByZXF1aXJlKCcuL2RvbWFpbi9zY2hlbWEnKVxuICBjb25maWcubmV0ID0gZ2V0TmV0Q29uZmlnKDIpXG4gIHJldHVybiBjb25maWdcbn1cbnZhciBTRVJWSUNFMiA9IHJlcXVpcmUoJy4uL3NlcnZpY2UnKSh7XG4gIHNlcnZpY2VOYW1lOiAnU0VSVklDRTInLFxuICBzZXJ2aWNlSWQ6ICdTRVJWSUNFMicsXG4gIGNvbmZpZ0ZpbGU6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2RvbWFpbi9jb25maWcnKSxcbiAgc2NoZW1hRmlsZTogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vZG9tYWluL3NjaGVtYScpLFxuICBtZXRob2RzRmlsZTogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vZG9tYWluL21ldGhvZHMnKSxcbiAgbmV0Q29uZmlnRmlsZTogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vZG9tYWluL25ldC5qc29uJyksXG4gIHNjaGVtYVBhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL3NjaGVtYScpXG59LCBTRVJWSUNFMlVwZGF0ZVNjaGVtYSlcblxudmFyIFNFUlZJQ0UzVXBkYXRlU2NoZW1hID0gKCkgPT4ge1xuICB2YXIgY29uZmlnID0gcmVxdWlyZSgnLi9kb21haW4vc2NoZW1hJylcbiAgY29uZmlnLm5ldCA9IGdldE5ldENvbmZpZygzKVxuICByZXR1cm4gY29uZmlnXG59XG52YXIgU0VSVklDRTMgPSByZXF1aXJlKCcuLi9zZXJ2aWNlJykoe1xuICBzZXJ2aWNlTmFtZTogJ1NFUlZJQ0UzJyxcbiAgc2VydmljZUlkOiAnU0VSVklDRTMnLFxuICBjb25maWdGaWxlOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9kb21haW4vY29uZmlnJyksXG4gIHNjaGVtYUZpbGU6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2RvbWFpbi9zY2hlbWEnKSxcbiAgbWV0aG9kc0ZpbGU6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2RvbWFpbi9tZXRob2RzJyksXG4gIG5ldENvbmZpZ0ZpbGU6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2RvbWFpbi9uZXQuanNvbicpLFxuICBzY2hlbWFQYXRoOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zY2hlbWEnKVxufSwgU0VSVklDRTNVcGRhdGVTY2hlbWEpXG5cbnQudGVzdCgnKioqIFNFUlZJQ0UxUyBORVQgKioqJywge1xuLy8gIGF1dG9lbmQ6IHRydWVcbn0sIGFzeW5jIGZ1bmN0aW9uIG1haW5UZXN0ICh0KSB7XG4gIHQucGxhbigxKVxuXG4gIENPTlNPTEUuZGVidWcoJy0tLS0tLS0tLS0tLS0tLS0tIFRFU1QgMSAtIFNUQVJUIFNFUlZFUlMgLS0tLS0tLS0tLS0tLS0tLS0nKVxuICBhd2FpdCB0LnRlc3QoJ1NUQVJUIFNFUlZFUlMnLCBhc3luYyBmdW5jdGlvbiAodCkge1xuICAgIGF3YWl0IFNFUlZJQ0UxLm5ldFNlcnZlci5zdGFydCgpXG4gICAgYXdhaXQgU0VSVklDRTIubmV0U2VydmVyLnN0YXJ0KClcbiAgICBhd2FpdCBTRVJWSUNFMy5uZXRTZXJ2ZXIuc3RhcnQoKVxuXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpXG5cbiAgICBDT05TT0xFLmRlYnVnKCctLS0tLS0tLS0tLS0tLS0tLSB0ZXN0UnBjIC0tLS0tLS0tLS0tLS0tLS0tJylcbiAgICB2YXIgdGVzdFJwYyA9IGF3YWl0IFNFUlZJQ0UxLm5ldENsaWVudC5ycGMoJ3Rlc3RScGMnLCB7dGVzdHNlZDogJ3Rlc3RzZW5kJ30pXG4gICAgdC5zYW1lKHRlc3RScGMsIHt0ZXN0c2VkOiAndGVzdHNlbmQnfSwgJ3JwYyB0ZXN0UnBjIGVjaG8gdGVzdCcpXG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcblxuICAgIENPTlNPTEUuZGVidWcoJy0tLS0tLS0tLS0tLS0tLS0tIHRlc3RFdmVudCAtLS0tLS0tLS0tLS0tLS0tLScpXG4gICAgdmFyIHRlc3RFbWl0ID0gYXdhaXQgU0VSVklDRTEubmV0Q2xpZW50LmVtaXQoJ3Rlc3RFdmVudCcsIHt0ZXN0c2VkOiAndGVzdHNlbmQnfSlcbiAgICB0LnNhbWUodGVzdEVtaXQsIHt0ZXN0c2VkOiAndGVzdHNlbmQnfSwgJ2VtaXQgdGVzdEV2ZW50IGVjaG8gdGVzdCcpXG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcblxuICAgIENPTlNPTEUuZGVidWcoJy0tLS0tLS0tLS0tLS0tLS0tIHRlc3RFdmVudE11bHRpIC0tLS0tLS0tLS0tLS0tLS0tJylcbiAgICB2YXIgdGVzdEVtaXRNdWx0aSA9IGF3YWl0IFNFUlZJQ0UxLm5ldENsaWVudC5lbWl0KCd0ZXN0RXZlbnRNdWx0aScsIHt0ZXN0c2VkOiAndGVzdHNlbmQnfSlcbiAgICB0LnNhbWUodGVzdEVtaXRNdWx0aSwgW3t0ZXN0c2VkOiAndGVzdHNlbmQnfSwge3Rlc3RzZWQ6ICd0ZXN0c2VuZCd9XSwgJ2VtaXQgdGVzdEV2ZW50TXVsdGkgZWNobyB0ZXN0JylcblxuICAgIHQuZW5kKClcbiAgfSlcbiAgdC5lbmQoKVxufSkudGhlbigoKSA9PiBwcm9jZXNzLmV4aXQoKSlcbiJdfQ==