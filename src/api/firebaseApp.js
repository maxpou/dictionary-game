import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export default firebase.initializeApp({
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL
})
