const { config } = require("./wdio.conf");
const edgeConfig = {
    ...config,
    services: [['selenium-standalone', { chromiumedge: 'latest' }]], 
    capabilities: [{
        maxInstances: 2,
        browserName: "MicrosoftEdge",
    }],

};

exports.config = edgeConfig;