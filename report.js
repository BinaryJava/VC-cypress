const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./cucumber-reports",
    reportPath: "./reports",
    metadata: {
        browser: {
            name: 'chrome',
            version: 'X'
        },
        device: 'Local test machine',
        platform: {
            name: 'XXXX',
            version: 'X'
        }
    }
})
