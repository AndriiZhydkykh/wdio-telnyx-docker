const { config } = require("./wdio.conf");

const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', { firefox: 'latest' }]],
    capabilities: [
        {
            maxInstances: 2,
            browserName: "firefox",
        },
    ],

};

exports.config = firefoxConfig;