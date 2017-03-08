<template>
  <table class="ui definition table">
    <thead>
      <tr>
        <th></th>
        <th>🇫🇷 Traduction</th>
        <th>Enabled?</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr is="word-add"
        v-on:add="add($event)"
      ></tr>
      <tr is="word-item" v-for="(word, index) in words"
        v-bind:word="word"
        v-bind:index="index"
        v-on:remove="remove(index)"
        v-on:edit="edit(index, word)"
      ></tr>
    </tbody>
  </table>
</template>

<script>
import wordAdd from '../components/Admin/wordAdd.vue'
import wordItem from '../components/Admin/wordItem.vue'
import queryString from '../lib/querystring'

const apiUrl = 'https://translate-2f28d.firebaseio.com/'
const auth = queryString('auth')

export default {
  components: { wordAdd, wordItem },
  data: function () {
    return {
      words: {}
    }
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
}
</script>
