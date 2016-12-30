# Dictionary Game 🇫🇷 / 🇬🇧

Just a small web app to improve my english vocabulary.

It uses: 

* [VueJs 2](https://vuejs.org/): an awesome JS Framework ❤️
  * [vue-resource](https://github.com/pagekit/vue-resource): Vuejs extension for XMLHttpRequest
* [Firebase](https://console.firebase.google.com/): kinda database with REST endpoint
* [SemanticUI](http://semantic-ui.com/): CSS Framework.

And also ES6/7 features:

* [Promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)
* [Async/await functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Bypass Firebase

If you don't want Firebase, you can use a JSON file instead. See `words.json` and adapt the first line of `app.js`:

```js
var dataUrl = 'words.json'
```

## Admin & Firebase

Why I don't use array: https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html
Get a firebase token, see the official doc: https://firebase.google.com/docs/reference/rest/database/user-auth

## Dev tools

If you don't want to install NPM on your machine, you can use Docker :whale::

```bash
docker build -t dico --rm .
docker run -it -v $PWD:/src -p 127.0.0.1:8080:8080 dico bash
npm install
```

Available command:

* `npm start`: start a mini HTTP server, then go to: 
  * [127.0.0.1:8080](http://127.0.0.1:8080)
  * [127.0.0.1:8080/admin/?auth=<auhToken>](http://127.0.0.1:8080/admin/?auth=<auhToken>)
* `npm run lint`: lint app.js and admin.js
