let words = [{
  "content": "a",
  "translation": "aa translation"
}, {
  "content": "b",
  "translation": "bb translation"
}, {
  "content": "c",
  "translation": "cc translation"
}, {
  "content": "d",
  "translation": "dd translation"
}, {
  "content": "e",
  "translation": "ee translation"
}, {
  "content": "f",
  "translation": "ff translation"
}, {
  "content": "g",
  "translation": "gg translation"
}, {
  "content": "h",
  "translation": "hh translation"
}, {
  "content": "i",
  "translation": "ii translation"
}];


Vue.component('word-current', {
  props: ['currentword'],
  template: `
    <h1 v-if="currentword" class="ui center aligned header">{{currentword.content}}</h1>
  `
})

Vue.component('score', {
  template: `
    <div v-if="totalScore" class="ui indicating progress">
      <div class="bar" v-bind:style="{ width: totalScore + '%' }">
        <div class="progress">{{totalScore}}%</div>
      </div>
    </div>`,
  props: ['score'],
  computed: {
    totalScore: function () {
      return Math.floor(100 * this.score.success / (this.score.success + this.score.errors));
    }
  },
})

Vue.component('word-proposition', {
  template: `
    <div class="column">
      <div class="ui segment"
          v-bind:class="[isCorrect ? 'correct' : 'incorrect', { active: isClicked } ]"
          v-on:click='submitAnswer'>
        {{ proposition.translation }}
      </div>
    </div>`,
  props: ['proposition', 'correctword'],
  data: function() {
    return {
      isClicked: false
    }
  },
  computed: {
    isCorrect: function () {
      return this.proposition === this.correctword;
    }
  },
  methods: {
    submitAnswer: function () {
      this.isClicked = true;
      this.$emit('submitanswer');
    }
  },
  watch: {
    currentWord: function () {
      this.isClicked = false;
    }
  }
})

new Vue({
  el: '#app',
  data: {
    words: words,
    propositions: [],
    currentWord: {},
    game: {
      success: 0,
      errors: 0
    }
  },
  component: {
  },
  methods: {
    pickNewWords: function () {
      this.propositions = this.shuffle(this.words).slice(0, 4);
      this.currentWord = this.propositions[Math.floor(Math.random() * 4)]
    },
    verify: function (userproposition) {
      if(userproposition === this.currentWord) {
        this.propositions = []
        this.currentWord = {}
        setTimeout(() => {
            this.game.success++
            this.pickNewWords()
        }, 150);
      } else {
        this.game.errors++
      }
    },
    shuffle: function (array) {
      var currentIndex = array.length,
        temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  },
  created: function () {
    this.pickNewWords()
  }
})
