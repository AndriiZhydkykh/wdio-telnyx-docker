const { config } = require("./wdio.conf");
require("path");
const edgeHeadlessConfig = {
    ...config,
    services: [['selenium-standalone', { chromiumedge: 'latest' }]], 
    capabilities: [{
        maxInstances: 2,
        browserName: "MicrosoftEdge",
        'ms:edgeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1280,800', '--allow-insecure-localhost']
        },
    }],
    path: "/wd/hub",

};

exports.config = edgeHeadlessConfig;