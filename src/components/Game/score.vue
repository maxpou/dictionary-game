<template>
  <div v-if="totalScorePercentage" class="ui indicating progress">
    <div class="bar" v-bind:style="{ width: totalScorePercentage + '%' }">
      <div class="progress">{{ score.success }} / {{ this.score.success + this.score.errors }} ({{ totalScorePercentage }}%)</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['score'],
  computed: {
    totalScorePercentage () {
      return Math.floor(100 * this.score.success / (this.score.success + this.score.errors))
    }
  }
}
</script>

<style scoped>
.ui.progress .bar {
  background-color: #daa520;
}
</style>
