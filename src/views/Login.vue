<template>
  <div class="modal" @keydown.esc="exit">
    <span class="close" @click="exit">×</span>
    <div class="modal_container">
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  </div>
</template>

<script>
import firebaseApp from '../api/firebaseApp'
import firebase from 'firebase/app'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
  mounted () {
    this.setupFirebaseUI()
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.exit()
      }
    })
  },
  methods: {
    setupFirebaseUI () {
      let ui = firebaseui.auth.AuthUI.getInstance()
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebaseApp.auth())
      }
      const that = this
      ui.start('#firebaseui-auth-container', {
        callbacks: {
          signInSuccessWithAuthResult (authResult, redirectUrl) {
            that.$store.dispatch('loadLoggedInUser')
            that.$router.push({ name: 'home' })
          },
          uiShown () {
            document.getElementById('loader').style.display = 'none'
          }
        },
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      })
    },
    exit () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>
.close {
  font-size: 3em;
  top: .5em;
  line-height: .5;
  right: 1em;
  cursor: pointer;
  position: absolute;
  color: #fff;
}
.modal {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  width: 100%;
  background: rgba(0,0,0,.8);
}

.modal_container {
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
}
</style>
