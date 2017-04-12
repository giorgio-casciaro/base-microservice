'use strict';

if (!global._babelPolyfill) require('babel-polyfill');

module.exports = function (CONSOLE, netClient) {
  return {
    testNoResponse: function testNoResponse(data, meta) {
      return regeneratorRuntime.async(function testNoResponse$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              CONSOLE.debug('testNoResponse', { data: data, meta: meta });
            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, null, undefined);
    },
    testAknowlegment: function testAknowlegment(data, meta) {
      return regeneratorRuntime.async(function testAknowlegment$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              CONSOLE.debug('testAknowlegment', { data: data, meta: meta });
            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, null, undefined);
    },
    testResponse: function testResponse(data, meta) {
      return regeneratorRuntime.async(function testResponse$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              CONSOLE.debug('testResponse', { data: data, meta: meta });return _context3.abrupt('return', data);

            case 2:
            case 'end':
              return _context3.stop();
          }
        }
      }, null, undefined);
    },
    testStream: function testStream(data, meta, getStream) {
      CONSOLE.debug('testStream', { data: data, meta: meta, getStream: getStream });
      var onClose = function onClose() {
        CONSOLE.log('stream closed');
      };
      var stream = getStream(onClose, 120000);
      stream.write({ testStreamConnnected: 1 });
      setTimeout(function () {
        return stream.write({ testStreamData: 1 });
      }, 500);
      setTimeout(function () {
        return stream.end();
      }, 1000);
    } };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGhvZHMuZXM2Il0sIm5hbWVzIjpbImdsb2JhbCIsIl9iYWJlbFBvbHlmaWxsIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJDT05TT0xFIiwibmV0Q2xpZW50IiwidGVzdE5vUmVzcG9uc2UiLCJkYXRhIiwibWV0YSIsImRlYnVnIiwidGVzdEFrbm93bGVnbWVudCIsInRlc3RSZXNwb25zZSIsInRlc3RTdHJlYW0iLCJnZXRTdHJlYW0iLCJvbkNsb3NlIiwibG9nIiwic3RyZWFtIiwid3JpdGUiLCJ0ZXN0U3RyZWFtQ29ubm5lY3RlZCIsInNldFRpbWVvdXQiLCJ0ZXN0U3RyZWFtRGF0YSIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLENBQUNBLE9BQU9DLGNBQVosRUFBMkJDLFFBQVEsZ0JBQVI7O0FBRzNCQyxPQUFPQyxPQUFQLEdBQWlCLFVBQUNDLE9BQUQsRUFBVUMsU0FBVixFQUF3QjtBQUN2QyxTQUFPO0FBQ0xDLG9CQUFnQix3QkFBTUMsSUFBTixFQUFZQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUJKLHNCQUFRSyxLQUFSLENBQWMsZ0JBQWQsRUFBZ0MsRUFBQ0YsVUFBRCxFQUFPQyxVQUFQLEVBQWhDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRFg7QUFFTEUsc0JBQWtCLDBCQUFNSCxJQUFOLEVBQVlDLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1Qkosc0JBQVFLLEtBQVIsQ0FBYyxrQkFBZCxFQUFrQyxFQUFDRixVQUFELEVBQU9DLFVBQVAsRUFBbEM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGYjtBQUdMRyxrQkFBYyxzQkFBTUosSUFBTixFQUFZQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUJKLHNCQUFRSyxLQUFSLENBQWMsY0FBZCxFQUE4QixFQUFDRixVQUFELEVBQU9DLFVBQVAsRUFBOUIsRUFBdkIsa0NBQTJFRCxJQUEzRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhUO0FBSUxLLGdCQUFZLG9CQUFDTCxJQUFELEVBQU9DLElBQVAsRUFBYUssU0FBYixFQUEyQjtBQUNyQ1QsY0FBUUssS0FBUixDQUFjLFlBQWQsRUFBNEIsRUFBQ0YsVUFBRCxFQUFPQyxVQUFQLEVBQWFLLG9CQUFiLEVBQTVCO0FBQ0EsVUFBSUMsVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFBRVYsZ0JBQVFXLEdBQVIsQ0FBWSxlQUFaO0FBQThCLE9BQXBEO0FBQ0EsVUFBSUMsU0FBU0gsVUFBVUMsT0FBVixFQUFtQixNQUFuQixDQUFiO0FBQ0FFLGFBQU9DLEtBQVAsQ0FBYSxFQUFDQyxzQkFBc0IsQ0FBdkIsRUFBYjtBQUNBQyxpQkFBVztBQUFBLGVBQU1ILE9BQU9DLEtBQVAsQ0FBYSxFQUFDRyxnQkFBZ0IsQ0FBakIsRUFBYixDQUFOO0FBQUEsT0FBWCxFQUFvRCxHQUFwRDtBQUNBRCxpQkFBVztBQUFBLGVBQU1ILE9BQU9LLEdBQVAsRUFBTjtBQUFBLE9BQVgsRUFBK0IsSUFBL0I7QUFDRCxLQVhJLEVBQVA7QUFZRCxDQWJEIiwiZmlsZSI6Im1ldGhvZHMuZXM2Iiwic291cmNlc0NvbnRlbnQiOlsiaWYgKCFnbG9iYWwuX2JhYmVsUG9seWZpbGwpcmVxdWlyZSgnYmFiZWwtcG9seWZpbGwnKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gKENPTlNPTEUsIG5ldENsaWVudCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlc3ROb1Jlc3BvbnNlOiBhc3luYyhkYXRhLCBtZXRhKSA9PiB7IENPTlNPTEUuZGVidWcoJ3Rlc3ROb1Jlc3BvbnNlJywge2RhdGEsIG1ldGF9KSB9LFxuICAgIHRlc3RBa25vd2xlZ21lbnQ6IGFzeW5jKGRhdGEsIG1ldGEpID0+IHsgQ09OU09MRS5kZWJ1ZygndGVzdEFrbm93bGVnbWVudCcsIHtkYXRhLCBtZXRhfSkgfSxcbiAgICB0ZXN0UmVzcG9uc2U6IGFzeW5jKGRhdGEsIG1ldGEpID0+IHsgQ09OU09MRS5kZWJ1ZygndGVzdFJlc3BvbnNlJywge2RhdGEsIG1ldGF9KTsgcmV0dXJuIGRhdGEgfSxcbiAgICB0ZXN0U3RyZWFtOiAoZGF0YSwgbWV0YSwgZ2V0U3RyZWFtKSA9PiB7XG4gICAgICBDT05TT0xFLmRlYnVnKCd0ZXN0U3RyZWFtJywge2RhdGEsIG1ldGEsIGdldFN0cmVhbX0pXG4gICAgICB2YXIgb25DbG9zZSA9ICgpID0+IHsgQ09OU09MRS5sb2coJ3N0cmVhbSBjbG9zZWQnKSB9XG4gICAgICB2YXIgc3RyZWFtID0gZ2V0U3RyZWFtKG9uQ2xvc2UsIDEyMDAwMClcbiAgICAgIHN0cmVhbS53cml0ZSh7dGVzdFN0cmVhbUNvbm5uZWN0ZWQ6IDF9KVxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzdHJlYW0ud3JpdGUoe3Rlc3RTdHJlYW1EYXRhOiAxfSksIDUwMClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyZWFtLmVuZCgpLCAxMDAwKVxuICAgIH19XG59XG4iXX0=