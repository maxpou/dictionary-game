<template>
  <div class="ui container">
    <h1 id="appTitle">Dictionary Game</h1>
    <router-link to="/game" tag="button" class="massive ui positive fluid button">🎮 Play!</router-link>
    <router-link to="/admin" tag="button" class="massive ui positive fluid button">⚙️ Manage words</router-link>
    <router-link v-if="!currentUserUid" to="/login" tag="button" class="massive ui positive fluid button">Login</router-link>
    <button v-else class="massive ui positive fluid button" @click="logout()">logout</button>
  </div>
</template>

<script>
import {logout, getCurentUser} from '../api/user'

export default {
  data () {
    return {
      currentUserUid: ''
    }
  },
  methods: {
    logout () {
      logout()
    }
  },
  async created () {
    const user = await getCurentUser()
    this.currentUserUid = user.uid
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
