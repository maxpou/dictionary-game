<template>
  <tr>
    <td>
      <span v-if="mode === 'read'">{{ word.content }}</span>
      <input v-if="mode === 'edit'" type="text" name="content" placeholder="the new word" v-model="word.content">
    </td>
    <td>
      <span v-if="mode === 'read'">{{ word.translation }}</span>
      <input v-if="mode === 'edit'" type="text" name="translation" placeholder="French translation" v-model="word.translation">
    </td>
    <td>
      <input type="checkbox" name="enabled" v-model="word.enabled" v-bind:disabled="mode === 'read'">
    </td>
    <td>
      <div v-if="mode === 'read'" class="ui buttons">
        <button class="ui yellow button" v-on:click="setMode('edit')">Edit</button>
        <div class="or"></div>
        <button class="ui red button" v-on:click="remove">Delete</button>
      </div>
      <div v-if="mode === 'edit'" class="ui buttons">
        <button class="ui button" v-on:click="setMode('read')">cancel</button>
        <div class="or"></div>
        <button class="ui primary button" v-on:click="edit">Edit</button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'wordItem',
  props: ['word', 'index'],
  data: function () {
    return {
      mode: 'read'
    }
  },
  methods: {
    remove: function () {
      this.$emit('remove')
    },
    edit: function () {
      this.mode = 'read'
      this.$emit('edit')
    },
    setMode: function (mode) {
      this.mode = mode
    }
  }
}
</script>
