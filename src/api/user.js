import firebaseApp from './firebaseApp'

const getCurentUser = () => {
  return new Promise((resolve, reject) => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user)
      } else {
        reject(Error('no user'))
      }
    })
  })
}
const logout = () => firebaseApp.auth().signOut()

export {
  getCurentUser,
  logout
}
