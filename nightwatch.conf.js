require('dotenv').config();

module.exports = {
    src_folders: ['test/e2e/specs'],
    page_objects_path: ['test/e2e/pageObjects'],

    webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        port: 9515
    },
    globals_path: 'nightwatch_globals.js',
    test_settings: {
        default: {
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: 'tests_output/screenshots'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {}
            }
        }
    },
    connection_settings: {
        local: true
    }
};