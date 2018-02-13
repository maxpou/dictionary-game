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
        @add="add($event)"
      ></tr>
      <tr is="word-item" v-for="(word, index) in words"
        :word="word"
        :index="index"
        @remove="remove(index)"
        @edit="edit(index, word)"
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
  data () {
    return {
      words: {}
    }
  },
  methods: {
    add (newword) {
      wordApi.add(newword).then((data) => {
        this.$set(this.words, data.name, newword)
      })
    },
    remove (index) {
      wordApi.remove(index).then(() => {
        this.$delete(this.words, index)
      })
    },
    edit (index, updatedWord) {
      wordApi.update(index, updatedWord)
    }
  },
  async created () {
    const data = await wordApi.findAll()
    this.words = data
  }
}
</script>
