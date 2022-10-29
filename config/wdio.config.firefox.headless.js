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
                args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1280,800', '--allow-insecure-localhost']
            },
        },
    ],
    path: "/wd/hub",
};

exports.config = firefoxHeadlessConfig;