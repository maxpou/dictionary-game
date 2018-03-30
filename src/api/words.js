import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID
})

const database = firebaseApp.database()

export async function findAll (userUid) {
  const databaseWordsRef = database.ref(`/users/${userUid}/words`)
  const snapshot = await databaseWordsRef.once('value')
  return snapshot.toJSON()
}

export async function add (userUid, newword) {
  const databaseWordsRef = database.ref(`/users/${userUid}/words`)
  const newWordRef = databaseWordsRef.push()
  await newWordRef.set(newword)
  return newWordRef.key
}

export function remove (userUid, index) {
  return database.ref(`/users/${userUid}/words/${index}`).remove()
}

export function update (userUid, index, updatedWord) {
  return database.ref(`/users/${userUid}/words/${index}`).update(updatedWord)
}
