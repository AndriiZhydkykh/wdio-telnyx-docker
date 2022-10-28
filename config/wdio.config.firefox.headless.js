const { config } = require("./wdio.conf");
require("path");
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
    path: "/wd/hub",
};

exports.config = firefoxHeadlessConfig;