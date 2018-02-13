<template>
  <div>
    <score :score="stats"/>
    <word-current :round="round"/>

    <div class="ui two column stackable grid">
      <word-proposition
        v-for="proposition in round.propositions"
        :key="proposition.id"
        :proposition="proposition"
        :round="round"
        @submitanswer="verify(proposition)"
      ></word-proposition>
    </div>
  </div>
</template>

<script>
import wordCurrent from '../components/Game/wordCurrent'
import wordProposition from '../components/Game/wordProposition'
import score from '../components/Game/score'
import * as wordApi from '../api/words'

export default {
  components: { wordCurrent, wordProposition, score },
  data () {
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
    pickNewWords () {
      this.round.mode = this.getRandomMode()
      this.round.propositions = this.shuffleArray(this.words).slice(0, 4)
      this.round.currentWord = this.round.propositions[Math.floor(Math.random() * 4)]
    },
    async verify (userproposition) {
      if (userproposition === this.round.currentWord) {
        await this.sleep(700)
        await this.reinitialize()
        await this.success()
      } else {
        this.stats.errors++
      }
    },
    success () {
      return new Promise(resolve => {
        this.stats.success++
        this.pickNewWords()
        resolve()
      })
    },
    reinitialize () {
      return new Promise(async resolve => {
        this.round.propositions = []
        this.round.currentWord = {}
        await this.$nextTick()
        resolve()
      })
    },
    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    shuffleArray (array) {
      let currentIndex = array.length
      let temporaryValue
      let randomIndex

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
    getRandomMode () {
      return (Math.floor(Math.random() * 2)) === 0 ? 'guessFromEn' : 'guessFromFr'
    }
  },
  async created () {
    const wordData = await wordApi.findAll()
    this.words = Object.values(wordData)
    this.pickNewWords()
  }
}
</script>

