if (!global._babelPolyfill)require('babel-polyfill')


module.exports = (CONSOLE, netClient) => {
  return {
    testNoResponse: async(data, meta) => { CONSOLE.debug('testNoResponse', {data, meta}) },
    testAknowlegment: async(data, meta) => { CONSOLE.debug('testAknowlegment', {data, meta}) },
    testResponse: async(data, meta) => { CONSOLE.debug('testResponse', {data, meta}); return data },
    testStream: (data, meta, getStream) => {
      CONSOLE.debug('testStream', {data, meta, getStream})
      var onClose = () => { CONSOLE.log('stream closed') }
      var stream = getStream(onClose, 120000)
      stream.write({testStreamConnnected: 1})
      setTimeout(() => stream.write({testStreamData: 1}), 500)
      setTimeout(() => stream.end(), 1000)
    }}
}
