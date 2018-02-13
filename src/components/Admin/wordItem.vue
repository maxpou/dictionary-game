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
      <input type="checkbox" name="enabled" v-model="word.enabled" :disabled="mode === 'read'">
    </td>
    <td>
      <div v-if="mode === 'read'" class="ui buttons">
        <button class="ui yellow button" @click="setMode('edit')">Edit</button>
        <div class="or"></div>
        <button class="ui red button" @click="remove">Delete</button>
      </div>
      <div v-if="mode === 'edit'" class="ui buttons">
        <button class="ui button" @click="setMode('read')">cancel</button>
        <div class="or"></div>
        <button class="ui primary button" @click="edit">Edit</button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['word', 'index'],
  data () {
    return {
      mode: 'read'
    }
  },
  methods: {
    remove () {
      this.$emit('remove')
    },
    edit () {
      this.mode = 'read'
      this.$emit('edit')
    },
    setMode (mode) {
      this.mode = mode
    }
  }
}
</script>
