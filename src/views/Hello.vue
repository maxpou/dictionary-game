<template>
  <div class="ui container">
    <h1 id="appTitle">Dictionary Game</h1>
    <router-link to="/game" tag="button" class="massive ui positive fluid button">🎮 Play!</router-link>
    <router-link to="/admin" tag="button" class="massive ui positive fluid button">⚙️ Manage words</router-link>
    <router-link to="/login" tag="button" class="massive ui positive fluid button">Login</router-link>
    <button class="massive ui positive fluid button" @click="logout()">logout</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  },
  methods: {
    ...mapActions([
      'logout'
    ])
  }
}
</script>

<style scoped>
h1#appTitle {
  font-weight: normal;
  margin-top: 60px;
  margin-bottom: 50px;
}

.button {
  margin-top: 20px;
}
</style>
