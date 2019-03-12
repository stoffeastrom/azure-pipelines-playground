const path = require('path');
const IEWebDriver = `${process.env.IEWebDriver}\\IEDriverServer.exe`;
// console.error('IE WebDriver:', IEWebDriver);
console.error('PTOR', require.resolve('@after-work.js/protractor/src/plugins/reporter/aggregate'))
module.exports = {
  capabilities: {
    name: 'desktop-ie',
    browserName: 'internet explorer',
    platform: 'WINDOWS',
    version: '11'
  },
  specs: [path.resolve(__dirname, 'hello.spec.js')],
  artifactsPath: 'test/component/__artifacts__',
  localSeleniumStandaloneOpts: {
    jvmArgs: [`-Dwebdriver.ie.driver=${IEWebDriver}`]
  },
  directConnect: false,
  nyc: {
    include: ['src/**/*.js']
  }
};
