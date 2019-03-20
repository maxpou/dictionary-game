<template>
  <div class="column">
    <div class="ui segment"
      v-bind:class="[ isCorrect ? 'correct' : 'incorrect', { clicked: isClicked } ]"
      v-on:click='submitAnswer'
      role="button">
      {{ printedProposition }}
      <span v-if="isClicked && !isCorrect"> ({{ printedSolution }})</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['proposition', 'round'],
  data () {
    return {
      isClicked: false
    }
  },
  computed: {
    isCorrect () {
      return this.proposition === this.round.currentWord
    },
    printedProposition () {
      if (this.round.mode !== 'guessFromTranslation') {
        return this.proposition.translation
      }
      return this.proposition.content
    },
    printedSolution () {
      if (this.round.mode !== 'guessFromTranslation') {
        return this.proposition.content
      }
      return this.proposition.translation
    }
  },
  methods: {
    submitAnswer () {
      if (!this.isClicked) {
        this.isClicked = true
        this.$emit('submitanswer')
      }
    }
  },
  watch: {
    currentWord () {
      this.isClicked = false
    }
  }
}
</script>

<style scoped>
.ui.segment {
  font-size: 1.8em;
  cursor: pointer;
}

.ui.segment:hover {
  background-color: #f3f3f3;
  box-shadow: 0px 0px 10px 0px #4E5BD3;
  color: #484848;
}

.ui.segment.clicked.incorrect {
  background-color: red;
  color: #fff;
}

.ui.segment.clicked.correct {
  background-color: green;
  color: #fff;
}
</style>
