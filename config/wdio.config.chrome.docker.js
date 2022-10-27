const {config} = require("./wdio.conf");
const dockerChrome = {
    ...config,
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: [ '--window-size=1920,1280', ]
        },
    }],
};
exports.config = dockerChrome;