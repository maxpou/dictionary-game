# Dictionary Game

[![Build Status](https://travis-ci.org/maxpou/dictionary-game.svg?branch=master)](https://travis-ci.org/maxpou/dictionary-game) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


Just a small web app to improve my english vocabulary.

## What's Included: 

* [VueJs 2](https://vuejs.org/): an awesome JS Framework ❤️
  * [vue-resource](https://github.com/pagekit/vue-resource): Vuejs extension for XMLHttpRequest
  * [vue-router](https://router.vuejs.org/en/)
  * Unit Tests (run in PhantomJS with Karma + Mocha + karma-webpack)
  * End-to-end tests (with Nightwatch)
* [Firebase](https://console.firebase.google.com/): database with an API endpoint
* [SemanticUI](http://semantic-ui.com/): CSS Framework.

And also ES6/7 features ([Promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise), [Async/await functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions))

The file architecture is based on [Vuejs webpack template](http://vuejs-templates.github.io/webpack/).

## Firebase API

This application use Firebase as Web API.  
To manage words&translations, an UI is available at `/#/admin/`. You must provide the Firebase auth token in the URL if write operation require authentification (rule tab).

  ```
  http://your-app-domain.com/#/admin?auth=your-auth-id
  ```

In this project there is 2 differents endpoints:

API ENDPOINTS                                  | Environment                   | Access
---------------------------------------------- | ----------------------------- | ----------
<https://translate-2f28d.firebaseio.com/>      | Read only (write needs token) | Production
<https://translate-test-aee8f.firebaseio.com/> | Read/Write                    | Dev / Test

**Notes:**

* [Why I don't use array with Firebase](https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html)
* [How to get a Firebase token (official doc)](https://firebase.google.com/docs/reference/rest/database/user-auth)

## Dev tools

Available command:

* `npm run dev`: start a mini HTTP server (localhost:8080)
* `npm run lint`: lint code
* `npm run build` build for production with minification
* `npm run build --report` build for production and view the bundle analyzer report
* `npm run unit`: run unit tests
* `npm run e2e`: run e2e tests
* `npm test`: run all tests

## Deployment

This app is hosted by [Github Pages](https://pages.github.com/) and the Deployment is fulfilled by [Travis CI](https://travis-ci.org/maxpou/dictionary-game) (lint+tests must be green).

