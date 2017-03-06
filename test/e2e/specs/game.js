// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'game e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer + '/#/game')
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('div.segment', 5000)
      .assert.elementCount('h1', 1)
      .assert.elementCount('div.segment', 4)
      .assert.elementCount('div.segment.correct', 1)
      .assert.elementCount('div.segment.incorrect', 3)
      .end()
  }
}
