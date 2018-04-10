<template>
  <div>
    <h2>Let start by adding 4 words you want to learn</h2>
    <div class="ui form">
      <div v-for="(newWord, index) in newWords" :key="index" class="two fields" v-show="lineAndPreviousEmpty(index)">
        <div class="field">
          <input placeholder="Word (i.e. Hello)" type="text" v-model="newWord.content">
        </div>
        <div class="field">
          <input placeholder="Translation (i.e. Bonjour, Hallo, Hola...)" type="text" v-model="newWord.translation">
        </div>
      </div>
    </div>
    <div class="ui button" @click="addWords" :class="{ positive: canContinue, disabled: !canContinue }">Save</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newWords: [
        { content: '', translation: '' },
        { content: '', translation: '' },
        { content: '', translation: '' },
        { content: '', translation: '' }
      ]
    }
  },
  computed: {
    canContinue () {
      return this.newWords.every(word => word.content !== '' && word.translation !== '')
    }
  },
  methods: {
    lineAndPreviousEmpty (index) {
      if (index === 0) {
        return true
      }
      if (this.newWords[index].content !== '' || this.newWords[index].translation !== '') {
        return true
      }
      const previousWord = this.newWords[index - 1]
      if (previousWord.content !== '' || previousWord.translation !== '') {
        return true
      }
      return false
    },
    addWords () {
      const wordsToAdd = this.newWords.map(word => {
        return {
          ...word,
          enabled: true
        }
      })
      console.log(wordsToAdd)
    }
  }
}
</script>
