<template>
  <tr>
    <td>
      <input type="text" name="content" placeholder="new word" v-model="newword.content">
    </td>
    <td>
      <input type="text" name="translation" placeholder="translation" v-model="newword.translation">
    </td>
    <td>
      <input type="checkbox" name="enabled" v-model="newword.enabled">
    </td>
    <td>
      <button class="ui primary button" @click="addWord">
        Save
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  data () {
    return {
      newword: {
        enabled: true
      }
    }
  },
  methods: {
    addWord () {
      this.$emit('add', this.newword)
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

