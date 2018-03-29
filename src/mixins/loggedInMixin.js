import { mapGetters } from 'vuex'

const loggedInMixin = {
  data () {
    return {
      currentUser: {}
    }
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  }
}

export default loggedInMixin
