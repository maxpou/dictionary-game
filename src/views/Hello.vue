<template>
  <div class="ui container">
    <h1 id="appTitle">Dictionary Game</h1>
    <router-link v-if="isLoggedIn" to="/game" tag="button" class="massive ui positive fluid button">🎮 Play!</router-link>
    <router-link v-if="isLoggedIn" to="/admin" tag="button" class="massive ui positive fluid button">⚙️ Manage words</router-link>
    <router-link v-if="!isLoggedIn" to="/login" tag="button" class="massive ui positive fluid button">Login</router-link>
    <button v-else class="massive ui positive fluid button" @click="logout()">Logout</button>
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
