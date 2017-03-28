<template>
  <div class="hello">
    <h1 id="appTitle">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><router-link to="/admin">Admin</router-link></li>
      <li><router-link to="/game">Game</router-link></li>
      <br>
    </ul>
    <ul>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Dictionary Game'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1#appTitle {
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
