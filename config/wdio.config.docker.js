const {config} = require("./wdio.conf");
const dockerAllBrowsers = {
    ...config,
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: [ '--window-size=1920,1280', ]
        },
    }],
    capabilities: [{
        maxInstances: 5,
        browserName: "firefox",
        'moz:firefoxOptions': {
            args: [ '--window-size=1920,1280', ]
        },
    }],
    capabilities: [{
        maxInstances: 5,
        browserName: "MicrosoftEdge",
        'ms:edgeOptions': {
            args: [ '--window-size=1920,1280', ]
        },
    }],
};
exports.config = dockerAllBrowsers;