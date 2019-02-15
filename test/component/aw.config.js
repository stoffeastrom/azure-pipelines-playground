const path = require("path");

module.exports = {
  capabilities: {
    name: "desktop-chrome",
    browserName: "internet explorer",
    platform: "ANY",
    version: "11"
  },
  specs: [path.resolve(__dirname, "test/hello.spec.js")],
  artifactsPath: "test/component/__artifacts__",
  seleniumArgs: [`-Dwebdriver.ie.driver=${process.env.IEWebDriver}`],
  directConnect: false
};
