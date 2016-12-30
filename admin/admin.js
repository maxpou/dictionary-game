var apiUrl = 'https://translate-2f28d.firebaseio.com/'
let auth = QueryString.auth

Vue.component('word-add', {
  data: function () {
    return {
      newword: {}
    }
  },
  template: `
    <tr>
      <td>
        <input type="text" name="content" placeholder="the new word" v-model="newword.content">
      </td>
      <td>
        <input type="text" name="translation" placeholder="French translation" v-model="newword.translation">
      </td>
      <td>
        <button class="ui primary button" v-on:click="addWord">
          Save
        </button>
      </td>
    </tr>
  `,
  methods: {
    addWord: function () {
      this.$emit('add', this.newword)
      this.newword = {}
    }
  }
})

Vue.component('word-item', {
  props: ['word', 'index'],
  template: `
    <tr>
      <td>{{ word.content }}</td>
      <td>{{ word.translation }}</td>
      <td>
        <div class="ui buttons">
          <button class="ui yellow button" v-on:click="$emit('edit')">Edit</button>
          <div class="or"></div>
          <button class="ui red button" v-on:click="remove">Delete</button>
        </div>
      </td>
    </tr>
  `,
  methods: {
    remove: function () {
      this.$emit('remove')
    }
  }
})

new Vue({
  el: '#app',
  data: {
    words: {}
  },
  methods: {
    add: function (newword) {
      this.$http.post(apiUrl + '.json?auth=' + auth, newword).then((response) => {
        response.json().then((data) => {
          this.$set(this.words, data.name, newword)
        })
      })
    },
    remove: function (index) {
      this.$http.delete(apiUrl + index + '.json?auth=' + auth).then(() => {
        this.$delete(this.words, index)
      })
    },
    edit: function () {
      window.alert('Todo !!!')
    }
  },
  created: function () {
    this.$http.get(apiUrl + '.json').then((response) => {
      response.json().then((data) => {
        this.words = data
      })
    })
  }
})
