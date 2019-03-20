<template>
  <div>
    <Home
      :isLoggedIn="isLoggedIn"
      :logout="logout"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Home from '../components/Home'

export default {
  components: {
    Home
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
