<template>
  <table class="ui definition table">
    <thead>
      <tr>
        <th></th>
        <th>Translation</th>
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
import * as wordApi from '../api/words'

export default {
  components: { wordAdd, wordItem },
  data: function () {
    return {
      words: {}
    }
  },
  methods: {
    add: function (newword) {
      wordApi.add(newword).then((data) => {
        this.$set(this.words, data.name, newword)
      })
    },
    remove: function (index) {
      wordApi.remove(index).then(() => {
        this.$delete(this.words, index)
      })
    },
    edit: function (index, updatedWord) {
      wordApi.update(index, updatedWord)
    }
  },
  created: function () {
    wordApi.findAll().then((data) => {
      this.words = data
    })
  }
}
</script>
