const path = require("path");
console.error("IE WebDriver:", process.env.IEWebDriver);
module.exports = {
  capabilities: {
    name: "desktop-chrome",
    browserName: "internet explorer",
    platform: "ANY",
    version: "11"
  },
  specs: [path.resolve(__dirname, "test/hello.spec.js")],
  artifactsPath: "test/component/__artifacts__",
  localSeleniumStandaloneOpts: {
    jvmArgs: [
      `-Dwebdriver.ie.driver=${process.env.IEWebDriver}\IEDriverServer.exe`
    ]
  },
  directConnect: false
};
