<template>
  <div class="column">
      <div class="ui segment"
        v-bind:class="[ isCorrect ? 'correct' : 'incorrect', { clicked: isClicked } ]"
        v-on:click='submitAnswer'>
        {{ printedProposition }}
        <span v-if="isClicked && !isCorrect"> ({{ printedSolution }})</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['proposition', 'round'],
  data: function () {
    return {
      isClicked: false
    }
  },
  computed: {
    isCorrect: function () {
      return this.proposition === this.round.currentWord
    },
    printedProposition: function () {
      if (this.round.mode === 'guessFromEn') {
        return this.proposition.translation
      }
      return this.proposition.content
    },
    printedSolution: function () {
      if (this.round.mode === 'guessFromEn') {
        return this.proposition.content
      }
      return this.proposition.translation
    }
  },
  methods: {
    submitAnswer: function () {
      if (!this.isClicked) {
        this.isClicked = true
        this.$emit('submitanswer')
      }
    }
  },
  watch: {
    currentWord: function () {
      this.isClicked = false
    }
  }
}
</script>

<style scoped>
.ui.segment.clicked.incorrect {
  background-color: red;
}

.ui.segment.clicked.correct {
  background-color: green;
}
</style>
