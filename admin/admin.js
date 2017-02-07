const apiUrl = 'https://translate-2f28d.firebaseio.com/'
const auth = QueryString.auth

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
  data: function () {
    return {
      mode: 'read'
    }
  },
  template: `
    <tr>
      <td>
        <span v-if="mode === 'read'">{{ word.content }}</span>
        <input v-if="mode === 'edit'" type="text" name="content" placeholder="the new word" v-model="word.content">
      </td>
      <td>
        <span v-if="mode === 'read'">{{ word.translation }}</span>
        <input v-if="mode === 'edit'" type="text" name="translation" placeholder="French translation" v-model="word.translation">
      </td>
      <td>
        <div v-if="mode === 'read'" class="ui buttons">
          <button class="ui yellow button" v-on:click="setMode('edit')">Edit</button>
          <div class="or"></div>
          <button class="ui red button" v-on:click="remove">Delete</button>
        </div>
        <div v-if="mode === 'edit'" class="ui buttons">
          <button class="ui button" v-on:click="setMode('read')">cancel</button>
          <div class="or"></div>
          <button class="ui primary button" v-on:click="edit">Edit</button>
        </div>
      </td>
    </tr>
  `,
  methods: {
    remove: function () {
      this.$emit('remove')
    },
    edit: function () {
      this.mode = 'read'
      this.$emit('edit')
    },
    setMode: function (mode) {
      this.mode = mode
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
    edit: function (index, updatedWord) {
      this.$http.patch(apiUrl + index + '.json?auth=' + auth, updatedWord)
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
