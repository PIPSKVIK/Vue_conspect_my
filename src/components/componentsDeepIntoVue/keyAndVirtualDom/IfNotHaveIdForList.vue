<template>
  <div class="container">
    <!-- Это пример, когда у нас нет id и мы его можем создать самостоятельно через обычный счетчик. -->
    <!-- Ну и еще раз резюмируя - этот спсоб считается предподчтительным для создания id -->
    <fieldset class="item">
      <legend>Create ID for List</legend>
      <div
        v-for="item in list"
        :key="item.id"
      >
      {{ item.value }}
      </div>
    </fieldset>
    <button @click="rotateList">Rotate List</button>
    <button @click="unshiftList">Unshift List</button>
  </div>
</template>

<script>

let lastId = 0
const genId = () => ++lastId

export default {
  name: 'IfNotHaveIdForList',
  data () {
    return {
      list: [
        { id: 1, value: 'a' },
        { id: 2, value: 'b' },
        { id: 3, value: 'c' }
      ].map(item => ({
        ...item,
        id: genId()
      }))
    }
  },

  methods: {
    rotateList () {
      this.list = this.list.slice(1).concat(this.list[0])
    },

    unshiftList () {
      this.list.unshift({
        id: genId(),
        value: 'New Value'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 200px;
}
</style>
