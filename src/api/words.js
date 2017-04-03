import Vue from 'vue'
import VueResource from 'vue-resource'
import queryString from '../lib/querystring'

const auth = queryString('auth')
const apiUrl = auth
  ? process.env.DB_URL + '{/id}' + '.json?auth=' + auth
  : process.env.DB_URL + '{/id}' + '.json'

Vue.use(VueResource)

const wordResource = Vue.resource(apiUrl)

export function findAll () {
  return wordResource.get().then((response) => {
    return response.json()
  })
}

export function add (newword) {
  return wordResource.save(newword).then((response) => {
    return response.json()
  })
}

export function remove (index) {
  return wordResource.delete({id: index}).then((response) => {
    return response.json()
  })
}

export function update (index, updatedWord) {
  wordResource.update({id: index}, updatedWord).then((response) => {
    return response.json()
  })
}
