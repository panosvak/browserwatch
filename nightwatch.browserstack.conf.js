const baseConfig = require('./nightwatch.conf.js');

const config = {
    ...baseConfig,
    webdriver: {
        'start_process': false,
        'host': 'hub-cloud.browserstack.com',
        'port': 80
    },
    common_capabilities: {
        build: "nightwatch-browserstack",
        "browserstack.user": process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
        "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",
        "browserstack.debug": true,
        "browserstack.local": true
    },
};

config.test_settings.default.desiredCapabilities['browserstack.user'] = process.env.BROWSERSTACK_USER;
config.test_settings.default.desiredCapabilities['browserstack.key'] = process.env.BROWSERSTACK_KEY;
config.test_settings.default.desiredCapabilities.chromeOptions.args = [];

config.test_settings.firefox = {
    desiredCapabilities: {
        os: 'Windows',
        os_version: 'XP',
        browserName: 'Firefox',
        browser_version: '47.0',
        ['browserstack.local']: false
    }
};

// Code to copy seleniumhost/port into test settings
for (var i in config.test_settings) {
    var test_setting = config.test_settings[i];
    test_setting['selenium_host'] = config.webdriver.host;
    test_setting['selenium_port'] = config.webdriver.port;
    for (var j in config.common_capabilities) {
        test_setting["desiredCapabilities"][j] = test_setting["desiredCapabilities"][j] || config.common_capabilities[j];
    }
}

module.exports = config;