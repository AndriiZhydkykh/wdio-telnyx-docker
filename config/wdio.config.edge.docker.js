const {config} = require("./wdio.conf");
const dockerEdge = {
    ...config,
    capabilities: [{
        maxInstances: 5,
        browserName: "MicrosoftEdge",
        'ms:edgeOptions': {
            args: [ '--window-size=1920,1280']
        },
    }],
    hostname: 'localhost',
    port: 4444,
    path: '/',
};
exports.config = dockerEdge;