<template>
  <tr>
    <td>
      <input type="text" name="content" placeholder="the new word" v-model="newword.content">
    </td>
    <td>
      <input type="text" name="translation" placeholder="French translation" v-model="newword.translation">
    </td>
    <td>
      <input type="checkbox" name="enabled" v-model="newword.enabled">
    </td>
    <td>
      <button class="ui primary button" v-on:click="addWord">
        Save
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'wordAdd',
  data: function () {
    return {
      newword: {
        enabled: true
      }
    }
  },
  methods: {
    addWord: function () {
      this.$emit('add', this.newword)
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

