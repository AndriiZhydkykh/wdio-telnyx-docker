const {config} = require("./wdio.conf");
const dockerEdge = {

    capabilities: [{
        maxInstances: 5,
        browserName: "MicrosoftEdge",
        'ms:edgeOptions': {
            args: [ '--window-size=1920,1280']
        },
    }],
};
exports.config = dockerEdge;