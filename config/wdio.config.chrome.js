const {config} = require("./wdio.conf");
const chromeConfig = {
    ...config,
    services: [['selenium-standalone', {chrome: 'latest'}]], 
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
    }],
};

exports.config = chromeHeadlessConfig;