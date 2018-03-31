<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('loadLoggedInUser')
  }
}
</script>

<style>
#app {
  text-align: center;
  height: 100%;
}
</style>
