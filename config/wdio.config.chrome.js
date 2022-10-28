const {config} = require("./wdio.conf");
require("path");
const chromeConfig = {
    ...config,
    services: [['selenium-standalone', {chrome: 'latest'}]], 
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
    }],
    path: "/wd/hub",
};

exports.config = chromeConfig;