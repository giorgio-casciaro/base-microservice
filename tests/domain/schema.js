module.exports = {
  rpcOut: {
    'testRpc': {
      to: 'SERVICE2',
      method: 'testResponse',
      requestSchema: {'type': 'object'},
      responseSchema: {'type': 'object'}
    }
  },
  eventsIn: {
    'testEvent': {
      method: 'testResponse'
    },
    'testEventMulti': {
      method: 'testResponse'
    }
  },
  eventsOut: {
    'testEvent': {
      multipleResponse: false,
      requestSchema: {'type': 'object'},
      responseSchema: {'type': 'object'}
    },
    'testEventMulti': {
      multipleResponse: true,
      requestSchema: {'type': 'object'},
      responseSchema: {'type': 'object'}
    }
  },
  methods: {
    'testNoResponse': {
      public: true,
      responseType: 'noResponse',
      responseSchema: {'type': 'object'},
      requestSchema: {'type': 'object'}
    },
    'testAknowlegment': {
      public: true,
      responseType: 'aknowlegment',
      responseSchema: {'type': 'object'},
      requestSchema: {'type': 'object'}
    },
    'testResponse': {
      public: true,
      responseType: 'response',
      responseSchema: {'type': 'object'},
      requestSchema: {'type': 'object'}
    },
    'testStream': {
      public: true,
      responseType: 'stream',
      responseSchema: {'type': 'object'},
      requestSchema: {'type': 'object'}
    }
  }
}
