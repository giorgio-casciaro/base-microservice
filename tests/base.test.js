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
  var config = require('./domain/config');
  config.net = getNetConfig(1);
  return config;
};
var SERVICE1 = require('../service')({
  serviceName: 'SERVICE1',
  serviceId: 'SERVICE1',
  configFile: path.join(__dirname, './domain/config'),
  methodsFile: path.join(__dirname, './domain/methods'),
  netConfigFile: path.join(__dirname, './domain/net.json'),
  schemaPath: path.join(__dirname, './schema')
}, SERVICE1UpdateSchema);

var SERVICE2UpdateSchema = function SERVICE2UpdateSchema() {
  var config = require('./domain/config');
  config.net = getNetConfig(2);
  return config;
};
var SERVICE2 = require('../service')({
  serviceName: 'SERVICE2',
  serviceId: 'SERVICE2',
  configFile: path.join(__dirname, './domain/config'),
  methodsFile: path.join(__dirname, './domain/methods'),
  netConfigFile: path.join(__dirname, './domain/net.json'),
  schemaPath: path.join(__dirname, './schema')
}, SERVICE2UpdateSchema);

var SERVICE3UpdateSchema = function SERVICE3UpdateSchema() {
  var config = require('./domain/config');
  config.net = getNetConfig(3);
  return config;
};
var SERVICE3 = require('../service')({
  serviceName: 'SERVICE3',
  serviceId: 'SERVICE3',
  configFile: path.join(__dirname, './domain/config'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UudGVzdC5lczYiXSwibmFtZXMiOlsiZ2xvYmFsIiwiX2JhYmVsUG9seWZpbGwiLCJyZXF1aXJlIiwidCIsInBhdGgiLCJDT05TT0xFIiwiZ2V0Q29uc29sZSIsImRlYnVnIiwibG9nIiwiZXJyb3IiLCJ3YXJuIiwiZ2V0TmV0Q29uZmlnIiwibnVtYmVyIiwiY2hhbm5lbHMiLCJ1cmwiLCJTRVJWSUNFMVVwZGF0ZVNjaGVtYSIsImNvbmZpZyIsIm5ldCIsIlNFUlZJQ0UxIiwic2VydmljZU5hbWUiLCJzZXJ2aWNlSWQiLCJjb25maWdGaWxlIiwiam9pbiIsIl9fZGlybmFtZSIsIm1ldGhvZHNGaWxlIiwibmV0Q29uZmlnRmlsZSIsInNjaGVtYVBhdGgiLCJTRVJWSUNFMlVwZGF0ZVNjaGVtYSIsIlNFUlZJQ0UyIiwiU0VSVklDRTNVcGRhdGVTY2hlbWEiLCJTRVJWSUNFMyIsInRlc3QiLCJtYWluVGVzdCIsInBsYW4iLCJuZXRTZXJ2ZXIiLCJzdGFydCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm5ldENsaWVudCIsInJwYyIsInRlc3RzZWQiLCJ0ZXN0UnBjIiwic2FtZSIsImVtaXQiLCJ0ZXN0RW1pdCIsInRlc3RFbWl0TXVsdGkiLCJlbmQiLCJ0aGVuIiwicHJvY2VzcyIsImV4aXQiXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSSxDQUFDQSxPQUFPQyxjQUFaLEVBQTJCQyxRQUFRLGdCQUFSOztBQUUzQixJQUFJQyxJQUFJRCxRQUFRLEtBQVIsQ0FBUjtBQUNBLElBQUlFLE9BQU9GLFFBQVEsTUFBUixDQUFYO0FBQ0EsSUFBSUcsVUFBVUgsUUFBUSxVQUFSLEVBQW9CSSxVQUFwQixDQUErQixFQUFDQyxPQUFPLElBQVIsRUFBY0MsS0FBSyxJQUFuQixFQUF5QkMsT0FBTyxJQUFoQyxFQUFzQ0MsTUFBTSxJQUE1QyxFQUEvQixFQUFrRixXQUFsRixFQUErRixNQUEvRixFQUF1RyxPQUF2RyxDQUFkOztBQUVBLFNBQVNDLFlBQVQs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RUFBb0IsSUFBcEIsQ0FBYjtBQUFBLHFCQUFaLENBakJzQjs7QUFBQTs7QUFtQjVCaEMsNEJBQVFFLEtBQVIsQ0FBYyxvREFBZDtBQW5CNEI7QUFBQSxvREFvQkZXLFNBQVNxQixTQUFULENBQW1CSyxJQUFuQixDQUF3QixnQkFBeEIsRUFBMEMsRUFBQ0gsU0FBUyxVQUFWLEVBQTFDLENBcEJFOztBQUFBO0FBb0J4QkssaUNBcEJ3Qjs7QUFxQjVCM0Msc0JBQUV3QyxJQUFGLENBQU9HLGFBQVAsRUFBc0IsQ0FBQyxFQUFDTCxTQUFTLFVBQVYsRUFBRCxFQUF3QixFQUFDQSxTQUFTLFVBQVYsRUFBeEIsQ0FBdEIsRUFBc0UsK0JBQXRFOztBQUVBdEMsc0JBQUU0QyxHQUFGOztBQXZCNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBeEIsQ0FKTDs7QUFBQTtBQTZCRDVDLFlBQUU0QyxHQUFGOztBQTdCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUZILEVBZ0NHQyxJQWhDSCxDQWdDUTtBQUFBLFNBQU1DLFFBQVFDLElBQVIsRUFBTjtBQUFBLENBaENSIiwiZmlsZSI6ImJhc2UudGVzdC5lczYiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlmICghZ2xvYmFsLl9iYWJlbFBvbHlmaWxsKXJlcXVpcmUoJ2JhYmVsLXBvbHlmaWxsJylcblxudmFyIHQgPSByZXF1aXJlKCd0YXAnKVxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJylcbnZhciBDT05TT0xFID0gcmVxdWlyZSgnLi4vdXRpbHMnKS5nZXRDb25zb2xlKHtkZWJ1ZzogdHJ1ZSwgbG9nOiB0cnVlLCBlcnJvcjogdHJ1ZSwgd2FybjogdHJ1ZX0sICdCQVNFIFRFU1QnLCAnLS0tLScsICctLS0tLScpXG5cbmZ1bmN0aW9uIGdldE5ldENvbmZpZyAobnVtYmVyKSB7XG4gIHJldHVybiB7XG4gICAgY2hhbm5lbHM6IHtcbiAgICAgICd0ZXN0JzogeyB1cmw6ICdsb2NhbGhvc3Q6MScgKyBudW1iZXIgKyAnMDgwJyB9LFxuICAgICAgJ2h0dHBQdWJsaWMnOiB7IHVybDogJ2xvY2FsaG9zdDoxJyArIG51bWJlciArICcwODEnIH0sXG4gICAgICAnaHR0cCc6IHsgdXJsOiAnbG9jYWxob3N0OjEnICsgbnVtYmVyICsgJzA4MicgfVxuICAgIH1cbiAgfVxufVxudmFyIFNFUlZJQ0UxVXBkYXRlU2NoZW1hID0gKCkgPT4ge1xuICB2YXIgY29uZmlnID0gcmVxdWlyZSgnLi9kb21haW4vY29uZmlnJylcbiAgY29uZmlnLm5ldCA9IGdldE5ldENvbmZpZygxKVxuICByZXR1cm4gY29uZmlnXG59XG52YXIgU0VSVklDRTEgPSByZXF1aXJlKCcuLi9zZXJ2aWNlJykoe1xuICBzZXJ2aWNlTmFtZTogJ1NFUlZJQ0UxJyxcbiAgc2VydmljZUlkOiAnU0VSVklDRTEnLFxuICBjb25maWdGaWxlOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9kb21haW4vY29uZmlnJyksXG4gIG1ldGhvZHNGaWxlOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9kb21haW4vbWV0aG9kcycpLFxuICBuZXRDb25maWdGaWxlOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9kb21haW4vbmV0Lmpzb24nKSxcbiAgc2NoZW1hUGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc2NoZW1hJylcbn0sIFNFUlZJQ0UxVXBkYXRlU2NoZW1hKVxuXG52YXIgU0VSVklDRTJVcGRhdGVTY2hlbWEgPSAoKSA9PiB7XG4gIHZhciBjb25maWcgPSByZXF1aXJlKCcuL2RvbWFpbi9jb25maWcnKVxuICBjb25maWcubmV0ID0gZ2V0TmV0Q29uZmlnKDIpXG4gIHJldHVybiBjb25maWdcbn1cbnZhciBTRVJWSUNFMiA9IHJlcXVpcmUoJy4uL3NlcnZpY2UnKSh7XG4gIHNlcnZpY2VOYW1lOiAnU0VSVklDRTInLFxuICBzZXJ2aWNlSWQ6ICdTRVJWSUNFMicsXG4gIGNvbmZpZ0ZpbGU6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2RvbWFpbi9jb25maWcnKSxcbiAgbWV0aG9kc0ZpbGU6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2RvbWFpbi9tZXRob2RzJyksXG4gIG5ldENvbmZpZ0ZpbGU6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2RvbWFpbi9uZXQuanNvbicpLFxuICBzY2hlbWFQYXRoOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zY2hlbWEnKVxufSwgU0VSVklDRTJVcGRhdGVTY2hlbWEpXG5cbnZhciBTRVJWSUNFM1VwZGF0ZVNjaGVtYSA9ICgpID0+IHtcbiAgdmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4vZG9tYWluL2NvbmZpZycpXG4gIGNvbmZpZy5uZXQgPSBnZXROZXRDb25maWcoMylcbiAgcmV0dXJuIGNvbmZpZ1xufVxudmFyIFNFUlZJQ0UzID0gcmVxdWlyZSgnLi4vc2VydmljZScpKHtcbiAgc2VydmljZU5hbWU6ICdTRVJWSUNFMycsXG4gIHNlcnZpY2VJZDogJ1NFUlZJQ0UzJyxcbiAgY29uZmlnRmlsZTogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vZG9tYWluL2NvbmZpZycpLFxuICBtZXRob2RzRmlsZTogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vZG9tYWluL21ldGhvZHMnKSxcbiAgbmV0Q29uZmlnRmlsZTogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vZG9tYWluL25ldC5qc29uJyksXG4gIHNjaGVtYVBhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL3NjaGVtYScpXG59LCBTRVJWSUNFM1VwZGF0ZVNjaGVtYSlcblxudC50ZXN0KCcqKiogU0VSVklDRTFTIE5FVCAqKionLCB7XG4vLyAgYXV0b2VuZDogdHJ1ZVxufSwgYXN5bmMgZnVuY3Rpb24gbWFpblRlc3QgKHQpIHtcbiAgdC5wbGFuKDEpXG5cbiAgQ09OU09MRS5kZWJ1ZygnLS0tLS0tLS0tLS0tLS0tLS0gVEVTVCAxIC0gU1RBUlQgU0VSVkVSUyAtLS0tLS0tLS0tLS0tLS0tLScpXG4gIGF3YWl0IHQudGVzdCgnU1RBUlQgU0VSVkVSUycsIGFzeW5jIGZ1bmN0aW9uICh0KSB7XG4gICAgYXdhaXQgU0VSVklDRTEubmV0U2VydmVyLnN0YXJ0KClcbiAgICBhd2FpdCBTRVJWSUNFMi5uZXRTZXJ2ZXIuc3RhcnQoKVxuICAgIGF3YWl0IFNFUlZJQ0UzLm5ldFNlcnZlci5zdGFydCgpXG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcblxuICAgIENPTlNPTEUuZGVidWcoJy0tLS0tLS0tLS0tLS0tLS0tIHRlc3RScGMgLS0tLS0tLS0tLS0tLS0tLS0nKVxuICAgIHZhciB0ZXN0UnBjID0gYXdhaXQgU0VSVklDRTEubmV0Q2xpZW50LnJwYygndGVzdFJwYycsIHt0ZXN0c2VkOiAndGVzdHNlbmQnfSlcbiAgICB0LnNhbWUodGVzdFJwYywge3Rlc3RzZWQ6ICd0ZXN0c2VuZCd9LCAncnBjIHRlc3RScGMgZWNobyB0ZXN0JylcblxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKVxuXG4gICAgQ09OU09MRS5kZWJ1ZygnLS0tLS0tLS0tLS0tLS0tLS0gdGVzdEV2ZW50IC0tLS0tLS0tLS0tLS0tLS0tJylcbiAgICB2YXIgdGVzdEVtaXQgPSBhd2FpdCBTRVJWSUNFMS5uZXRDbGllbnQuZW1pdCgndGVzdEV2ZW50Jywge3Rlc3RzZWQ6ICd0ZXN0c2VuZCd9KVxuICAgIHQuc2FtZSh0ZXN0RW1pdCwge3Rlc3RzZWQ6ICd0ZXN0c2VuZCd9LCAnZW1pdCB0ZXN0RXZlbnQgZWNobyB0ZXN0JylcblxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKVxuXG4gICAgQ09OU09MRS5kZWJ1ZygnLS0tLS0tLS0tLS0tLS0tLS0gdGVzdEV2ZW50TXVsdGkgLS0tLS0tLS0tLS0tLS0tLS0nKVxuICAgIHZhciB0ZXN0RW1pdE11bHRpID0gYXdhaXQgU0VSVklDRTEubmV0Q2xpZW50LmVtaXQoJ3Rlc3RFdmVudE11bHRpJywge3Rlc3RzZWQ6ICd0ZXN0c2VuZCd9KVxuICAgIHQuc2FtZSh0ZXN0RW1pdE11bHRpLCBbe3Rlc3RzZWQ6ICd0ZXN0c2VuZCd9LCB7dGVzdHNlZDogJ3Rlc3RzZW5kJ31dLCAnZW1pdCB0ZXN0RXZlbnRNdWx0aSBlY2hvIHRlc3QnKVxuXG4gICAgdC5lbmQoKVxuICB9KVxuICB0LmVuZCgpXG59KS50aGVuKCgpID0+IHByb2Nlc3MuZXhpdCgpKVxuIl19