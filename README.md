# Dictionary Game 🇫🇷 / 🇬🇧

Just a small web app to improve my english vocabulary.

It uses: 

* [VueJs 2](https://vuejs.org/): an awesome JS Framework ❤️
  * [vue-resource](https://github.com/pagekit/vue-resource) for XMLHttpRequest
* [SemanticUI](http://semantic-ui.com/) CSS Framework.

And also ES6/7 features:

* [Promises](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)
* [Async/await functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


## Dev tools

If you don't want to install NPM on your machine, you can use Docker :whale::

```bash
docker build -t dico --rm .
docker run -it -v $PWD:/src -p 127.0.0.1:8080:8080 dico bash
npm install
```

Available command:

  * `npm run start`: start a mini HTTP server, then go to: [127.0.0.1:8080](http://127.0.0.1:8080)
  * `npm run lint`: lint app.js
