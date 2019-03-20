<template>
  <div class="dashboard">
    <LogoutBar :logout="logout" :isLoggedIn="isLoggedIn" :deny-login="true" />
    <div class="cards-container">
      <div class="cards">
        <router-link to="/game" class="card">🎮 Play!</router-link>
        <router-link to="/admin" class="card">⚙️ Add new words</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import LogoutBar from '../components/LogoutBar.vue'

export default {
  components: {
    LogoutBar
  },
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
.dashboard {
  height: 100%;
  background-color: #6293ea;
}

.cards-container {
  position: absolute;
  text-align: center;
  top: calc(40% - 50px);
  width: 100%;
}

.cards {
  text-align: center;
}

.card {
  background-color: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  display: inline-block;
  width: 300px;
  height: 100px;
  line-height: 100px;
  font-size: 2em;
  color: #484848;
}

.card:hover {
  background-color: #f3f3f3;
  box-shadow: 0px 0px 10px 0px #4E5BD3
}

.card + .card {
  margin-left: 2%;
}

@media only screen and (max-width: 550px) {
  .card + .card {
    margin-left: 0;
    margin-top: 2%;
  }
}
</style>
