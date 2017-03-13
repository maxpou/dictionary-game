# Dictionary Game 🇫🇷 / 🇬🇧

[![Build Status](https://travis-ci.org/maxpou/dictionary-game.svg?branch=master)](https://travis-ci.org/maxpou/dictionary-game)

Just a small web app to improve my english vocabulary.

## What's Included: 

* [VueJs 2](https://vuejs.org/): an awesome JS Framework ❤️
  * [vue-resource](https://github.com/pagekit/vue-resource): Vuejs extension for XMLHttpRequest
  * [vue-router](https://router.vuejs.org/en/)
  * Unit Tests (run in PhantomJS with Karma + Mocha + karma-webpack)
  * End-to-end tests (with Nightwatch)
* [Firebase](https://console.firebase.google.com/): database with an API endpoint
* [SemanticUI](http://semantic-ui.com/): CSS Framework.

And also ES6/next features ([Promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise), [Async/await functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions))

The file architecture is based on [Vuejs webpack template](http://vuejs-templates.github.io/webpack/).


## Bypass Firebase

If you don't want Firebase, you can use a JSON file instead. See `words.json` and adapt the first line of `app.js`:

  ```js
  var dataUrl = 'words.json'
  ```


## Admin & Firebase

An admin UI is available on `/#/admin/`. You must provide the Firebase auth token in the URL if write operation require authentification (rule tab).

  ```
  http://your-app-domain.com/#/admin?auth=your-auth-id
  ```

**Notes:**

* [Why I don't use array with Firebase](https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html)
* [How to get a Firebase token (official doc)](https://firebase.google.com/docs/reference/rest/database/user-auth)

## Dev tools

If you don't want to install NPM on your machine, you can use Docker :whale::

```bash
docker build -t dico --rm .
docker run -it -v $PWD:/src -p 127.0.0.1:8080:8080 dico bash
npm install
```

Available command:

* `npm run dev`: start a mini HTTP server (localhost:8080)
* `npm run lint`: lint code
* `npm run build` build for production with minification
* `npm run build --report` build for production and view the bundle analyzer report
* `npm run unit`: run unit tests
* `npm run e2e`: run e2e tests
* `npm test`: run all tests
