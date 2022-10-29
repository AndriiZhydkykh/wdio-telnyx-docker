const { config } = require("./wdio.conf");
require("path");
const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', { firefox: 'latest' }]],
    capabilities: [
        {
            maxInstances: 2,
            browserName: "firefox",
            'moz:firefoxOptions': {
                args: ['--start-maximized' ]
            },
        },
    ],
    path: "/wd/hub",
};

exports.config = firefoxConfig;