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


