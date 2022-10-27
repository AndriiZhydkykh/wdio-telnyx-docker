const { config } = require("./wdio.conf");

const firefoxHeadlessConfig = {
    ...config,
    services: [['selenium-standalone', { firefox: 'latest' }]],
    capabilities: [
        {
            maxInstances: 2,
            browserName: "firefox",
            'moz:firefoxOptions': {
                args: ['-headless']
            },
        },
    ],

};

exports.config = firefoxHeadlessConfig;