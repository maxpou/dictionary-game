<template>
  <div id="app">
    <p v-if="currentUser.displayName">Hello {{ currentUser.displayName }}!</p>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  created () {
    this.$store.dispatch('loadLoggedInUser')
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
