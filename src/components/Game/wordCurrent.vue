<template>
  <h1 v-if="round.currentWord" class="ui center aligned header">{{ wordToGuess }}</h1>
</template>

<script>
export default {
  props: ['round'],
  computed: {
    wordToGuess () {
      if (this.round.mode === 'guessFromTranslation') {
        return this.round.currentWord.translation
      }
      return this.round.currentWord.content
    }
  }
}
</script>

<style scoped>
h1.ui.center.header {
  padding: 2em 3em;
  color: #fff;
}
</style>
