//exports.config = {
//  seleniumAddress: 'http://localhost:4444/wd/hub',
//  specs: ['test.js'],
//  jasmineNodeOpts: {
//      onComplete: null,
//      isVerbose: false,
//      showColors: true,
//      includeStackTrace: false
//  }
//};


exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test.js'],

    mochaOpts: {
        enableTimeouts: false,
        slow: 5000,
        ui: 'bdd',
    }
};


