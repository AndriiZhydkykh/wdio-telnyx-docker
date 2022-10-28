const { config } = require("./wdio.conf");
require("path");
const edgeConfig = {
    ...config,
    services: [['selenium-standalone', { chromiumedge:'latest' }]], 
    capabilities: [{
        maxInstances: 2,
        browserName: "MicrosoftEdge",
    }],
    path: "/wd/hub",
};

exports.config = edgeConfig;