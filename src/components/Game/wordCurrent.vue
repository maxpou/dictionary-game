<template>
  <h1 v-if="round.currentWord" class="ui center aligned header">{{ wordToGuess }}</h1>
</template>

<script>
export default {
  props: ['round'],
  computed: {
    wordToGuess: function () {
      if (this.round.mode === 'guessFromEn') {
        return this.round.currentWord.content
      }
      return this.round.currentWord.translation
    }
  }
}
</script>

<style scoped>
h1.ui.center.header {
  padding: 2em 3em;
}
</style>
