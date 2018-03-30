import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDYAb6F__3GitGyJyYrfMuq3iSNNRj4OeY',
  authDomain: 'translate-test-aee8f.firebaseapp.com',
  databaseURL: 'https://translate-test-aee8f.firebaseio.com',
  projectId: 'translate-test-aee8f',
  storageBucket: 'translate-test-aee8f.appspot.com',
  messagingSenderId: '133853624179'
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
