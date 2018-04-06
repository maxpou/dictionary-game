<template>
  <div>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.css" />
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'

export default {
  mounted () {
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth())
    }

    const uiConfig = {
      callbacks: {
        signInSuccess (currentUser, credential, redirectUrl) {
          return true
        },
        uiShown () {
          document.getElementById('loader').style.display = 'none'
        }
      },
      signInFlow: 'popup',
      signInSuccessUrl: `${window.location.origin + window.location.pathname}`,
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      tosUrl: '<your-tos-url>'
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
