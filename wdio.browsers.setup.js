module.exports = {
    baseURL: 'https://selenium-release.storage.googleapis.com',
    version: '3.3.1',
    drivers: {
        // chrome: {
        //     version: '2.29',
        //     arch: process.arch,
        //     // - Recent versions of the driver: https://sites.google.com/a/chromium.org/chromedriver/
        //     baseURL: 'https://chromedriver.storage.googleapis.com'
        // },
        ie: {
            version: '3.14.0',
            arch: 'ia32',
            // - Recent versions of the driver: http://selenium-release.storage.googleapis.com/index.html
            baseURL: 'https://selenium-release.storage.googleapis.com'
        },
        // firefox: {
        //     version: '0.15.0',
        //     arch: process.arch,
        //     baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
        // }
    }
};