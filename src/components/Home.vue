<template>
    <div class="hello">

    <div class="ui inverted vertical masthead center aligned segment">
      <LogoutBar :logout="logout" :isLoggedIn="isLoggedIn" />

      <div class="ui text container">
        <h1 class="ui inverted header">
          Dictionary Game
        </h1>
        <h2>Learning new words has never been easier</h2>

        <div v-if="!isLoggedIn">
          <router-link to="/login" class="ui huge primary button">Sign up - It's Free!</router-link>
        </div>

        <div v-else>
          <router-link to="/game" class="massive ui positive fluid button">🎮 Play!</router-link>
          <br>
          <router-link to="/admin" class="massive ui positive fluid button">⚙️ Add new words</router-link>
        </div>

      </div>
    </div>

    <div class="ui vertical stripe segment app-presentation">
      <div class="ui middle aligned stackable grid container">
        <div class="row">
          <div class="eight wide column">
            <h3 class="ui header">Create your own dictionary and get challenged</h3>
            <p>Dictionary Game is a learning platform created to make learning new words easier.</p>
            <h3 class="ui header">See a bug? Want to leave a feedback?</h3>
            <p>You can contact me <a href="mailto:hello@maxpou.fr">here</a>, feedbacks are more than welcome.
              But remember, I'm a human! So please, be nice and I will fix your bug! :)</p>
          </div>
          <div class="six wide right floated column">
            <img src="../assets/screens/all-screens.png" alt="screenshots" class="ui large image">
          </div>
        </div>
      </div>
    </div>

    <div class="ui grid container center aligned segment vertical">
      <h2>Features</h2>
      <div class="ui four doubling cards">
        <div class="card">
          <div class="image">
            <img src="../assets/icons/brain.png">
          </div>
          <div class="extra center aligned">
            <h3>Create your own dictionary</h3>
            <p>This is your own dictionary. Feel free to add, edit or disable words.</p>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="../assets/icons/game-controller-2.png">
          </div>
          <div class="extra center aligned">
            <h3>Play!</h3>
            <p>Get challenged with the words you added. This game looks like a memory game.</p>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="../assets/icons/free.png">
          </div>
          <div class="extra center aligned">
            <h3>Free</h3>
            <p>You can enjoy this app for free and without limit!</p>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="../assets/icons/github-icon.png">
          </div>
          <div class="extra center aligned">
            <h3>Open Source</h3>
            <p>This app code source is accessible on <a class="link" href="https://github.com/maxpou/dictionary-game">GitHub (maxpou/dictionary-game)</a></p>.
          </div>
        </div>
      </div>
    </div>

    <p>Created by <a href="https://twitter.com/_maxpou">Maxence Poutord</a>.</p>
  </div>
</template>

<script>
import LogoutBar from './LogoutBar.vue'

export default {
  components: {
    LogoutBar
  },
  props: {
    logout: Function,
    isLoggedIn: Boolean
  }
}
</script>

<style scoped>
.masthead.segment {
  min-height: 700px;
  padding: 1em 0em;
}

.ui.vertical.segment {
  border-bottom: 0;
}

.masthead {
  background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),
    url(../assets/hero/background-mobile.jpg) no-repeat center center fixed !important;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;
}

@media (min-width: 768px) {
  .masthead {
    background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),
      url(../assets/hero/background-tablet.jpg) no-repeat center center fixed !important;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
  }
}
@media (min-width: 992px) {
  .masthead {
    background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),
      url(../assets/hero/background-desktop.jpg) no-repeat center center fixed !important;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
  }
}

.masthead h1.ui.header {
  margin-top: 2.5em;
  margin-bottom: 0em;
  font-size: 4em;
  font-weight: normal;
}

.app-presentation {
  border: 0 !important;
}

a.link {
  text-decoration: underline;
}

.ui.positive.button {
  background-color: #6293ea;
}
</style>
