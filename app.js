// 'words.json'
var dataUrl = 'https://translate-2f28d.firebaseio.com/.json'

Vue.component('word-current', {
  props: ['round'],
  template: `
    <h1 v-if="round.currentWord" class="ui center aligned header">{{ wordToGuess }}</h1>
  `,
  computed: {
    wordToGuess: function () {
      if (this.round.mode === 'guessFromEn') {
        return this.round.currentWord.content
      } else {
        return this.round.currentWord.translation
      }
    }
  }
})

Vue.component('word-proposition', {
  template: `
    <div class="column">
        <div class="ui segment"
          v-bind:class="[ isCorrect ? 'correct' : 'incorrect', { clicked: isClicked } ]"
          v-on:click='submitAnswer'>
          {{ printedProposition }}
          <span v-if="isClicked && !isCorrect"> ({{ printedSolution }})</span>
        </div>
      </a>
    </div>`,
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
      } else {
        return this.proposition.content
      }
    },
    printedSolution: function () {
      if (this.round.mode === 'guessFromEn') {
        return this.proposition.content
      } else {
        return this.proposition.translation
      }
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
})

Vue.component('score', {
  template: `
    <div v-if="totalScorePercentage" class="ui indicating progress">
      <div class="bar" v-bind:style="{ width: totalScorePercentage + '%' }">
        <div class="progress">{{ score.success }} / {{ this.score.success + this.score.errors }} ({{ totalScorePercentage }}% )</div>
      </div>
    </div>`,
  props: ['score'],
  computed: {
    totalScorePercentage: function () {
      return Math.floor(100 * this.score.success / (this.score.success + this.score.errors))
    }
  }
})

new Vue({
  el: '#app',
  data: {
    words: [],
    round: {
      mode: null,
      currentWord: {},
      propositions: []
    },
    stats: {
      success: 0,
      errors: 0
    }
  },
  methods: {
    pickNewWords: function () {
      this.round.mode = this.getRandomMode()
      this.round.propositions = this.shuffleArray(this.words).slice(0, 4)
      this.round.currentWord = this.round.propositions[Math.floor(Math.random() * 4)]
    },
    verify: async function (userproposition) {
      if (userproposition === this.round.currentWord) {
        await this.sleep(500)
        await this.reinitialize()
        await this.success()
      } else {
        this.stats.errors++
      }
    },
    success: function () {
      return new Promise(resolve => {
        this.stats.success++
        this.pickNewWords()
        resolve()
      })
    },
    reinitialize: function () {
      return new Promise(resolve => {
        this.round.propositions = []
        this.round.currentWord = {}
        resolve()
      })
    },
    sleep: function (ms) {
      return new Promise(r => setTimeout(r, ms))
    },
    shuffleArray: function (array) {
      var currentIndex = array.length
      var temporaryValue
      var randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
    getRandomMode: function () {
      return (Math.floor(Math.random() * 2)) === 0 ? 'guessFromEn' : 'guessFromFr'
    }
  },
  created: function () {
    this.$http.get(dataUrl).then((response) => {
      response.json().then((data) => {
        this.words = Object.values(data)
      }).then(() => {
        this.pickNewWords()
      })
    })
  }
})
