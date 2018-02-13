<template>
  <div class="ui container">
    <h1 id="appTitle">Dictionary Game</h1>
    <router-link to="/game" tag="button" class="massive ui positive fluid button">Start!</router-link>
    <router-link to="/admin" tag="button" class="massive ui positive fluid button">Manage words</router-link>
  </div>
</template>

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
