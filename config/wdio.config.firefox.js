const { config } = require("./wdio.conf");
require("path");
const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', { firefox: 'latest' }]],
    capabilities: [
        {
            maxInstances: 2,
            browserName: "firefox",
        },
    ],
    path: "/wd/hub",
};

exports.config = firefoxConfig;