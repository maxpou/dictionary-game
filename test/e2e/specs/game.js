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
      .assert.elementCount('div.segment.clicked', 0)
      .assert.elementNotPresent('div.indicating.progress')

    browser
      .click('div.segment.correct')
      .assert.elementNotPresent('div.indicating.progress')
      .assert.elementCount('div.segment.incorrect.clicked', 0)
      .assert.elementCount('div.segment.correct.clicked', 1)
      .pause(700)
      .assert.containsText('div.indicating.progress div div', '1 / 1 (100%)')

    browser
      .click('div.segment.incorrect')
      .assert.elementCount('div.segment.incorrect.clicked', 1)
      .assert.elementCount('div.segment.correct.clicked', 0)
      .assert.containsText('div.indicating.progress div div', '1 / 2 (50%)')
      .click('div.segment.correct')
      .assert.elementCount('div.segment.incorrect.clicked', 1)
      .assert.elementCount('div.segment.correct.clicked', 1)
      .pause(700)
      .assert.containsText('div.indicating.progress div div', '2 / 3 (66%)')

    browser
      .end()
  }
}
