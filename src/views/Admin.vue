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
      <tr
        is="word-item"
        v-for="(word, index) in words"
        :key="index"
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
import { getCurentUser } from '../api/user'

export default {
  components: { wordAdd, wordItem },
  data () {
    return {
      words: {},
      currentUserUid: ''
    }
  },
  methods: {
    async add (newword) {
      const newKey = await wordApi.add(this.currentUserUid, newword)
      this.$set(this.words, newKey, newword)
    },
    async remove (index) {
      wordApi.remove(this.currentUserUid, index)
      this.$delete(this.words, index)
    },
    edit (index, updatedWord) {
      wordApi.update(this.currentUserUid, index, updatedWord)
    }
  },
  async created () {
    const user = await getCurentUser()
    this.currentUserUid = user.uid
    this.words = await wordApi.findAll(user.uid)
  }
}
</script>
