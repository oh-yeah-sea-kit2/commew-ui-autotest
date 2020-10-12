const { setHeadlessWhen } = require("@codeceptjs/configure");

require("dotenv").config();

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "https://commew.net/",
      show: true,
      windowSize: "1200x900",
      restart: false,
      keepBrowserState: true,
      keepCookies: true,
    },
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "commew-ui-autotest",
  translation: "ja-JP",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
      fullPageScreenshots: true,
    },
    stepByStepReport: {
      enabled: true, // step毎のスクリーンショットを取得する
      deleteSuccessful: false, // テスト成功時もスクリーンショットを残す
      fullPageScreenshots: true, // スクリーンショットはフルスクリーンで取得する
    },
  },
};
