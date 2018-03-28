import firebase from 'firebase'

const getCurentUser = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user)
      } else {
        reject(Error('no user'))
      }
    })
  })
}
const logout = () => firebase.auth().signOut()

export {
  getCurentUser,
  logout
}
