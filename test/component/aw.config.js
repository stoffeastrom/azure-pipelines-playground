const path = require("path");
const IEWebDriver = `${process.env.IEWebDriver}\\IEDriverServer.exe`;
console.error("IE WebDriver:", IEWebDriver);
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
    jvmArgs: [`-Dwebdriver.ie.driver=${IEWebDriver}`]
  },
  directConnect: false
};
