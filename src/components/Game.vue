<template>
  <div>
    <score v-bind:score="stats"></score>
    <word-current v-bind:round="round"></word-current>

    <div class="ui two column stackable grid">
      <word-proposition v-for="proposition in round.propositions"
       :key="proposition.id"
        v-bind:proposition="proposition"
        v-bind:round="round"
        v-on:submitanswer="verify(proposition)"
      ></word-proposition>
    </div>
  </div>
</template>

<script>
import wordCurrent from '../components/Game/wordCurrent'
import wordProposition from '../components/Game/wordProposition'
import score from '../components/Game/score'

const apiUrl = 'https://translate-2f28d.firebaseio.com/'

export default {
  components: { wordCurrent, wordProposition, score },
  data: function () {
    return {
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
        await this.sleep(700)
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
      return new Promise((resolve) => setTimeout(resolve, ms))
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
    this.$http.get(apiUrl + '.json').then((response) => {
      response.json().then((data) => {
        this.words = Object.values(data)
      }).then(() => {
        this.pickNewWords()
      })
    })
  }
}
</script>

