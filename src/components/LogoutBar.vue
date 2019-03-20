<template>
  <div class="ui container">
    <div class="ui large secondary pointing menu">
      <div class="right item">
        <a v-if="isLoggedIn || denyLogin" class="ui inverted button" @click="logout()">Logout</a>
        <router-link v-else to="/login" class="ui inverted button">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logout: Function,
    isLoggedIn: Boolean,
    denyLogin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.ui.secondary.pointing.menu {
  border-bottom: 0px;
  padding-top: 1em;
}
</style>
