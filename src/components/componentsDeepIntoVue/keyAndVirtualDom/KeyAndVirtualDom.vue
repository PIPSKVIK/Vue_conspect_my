<template>
  <div class="key">
    <h2>Key</h2>
    <div class="key_wrapper">
      <fieldset>
        <legend>With index not correct</legend>
        <!-- Вот так не будет работать, и так нельзя использовать. -->
        <ListItem
          :item="item"
          v-for="(item, index) in list"
          :key="index"
        />
      </fieldset>
      <fieldset>
        <legend>With correct id</legend>
        <!-- Вот так нужно и можно использовать.
        Очень хороший пример. -->
        <ListItem
          :item="item"
          v-for="item in list"
          :key="item.id"
        />
      </fieldset>
    </div>
    <button class="first-button" type="button" @click="rotateList">Rotate List</button>
    <button type="button" @click="unshiftList">Unshift List</button>
  </div>
</template>

<script>
import ListItem from './ListItem'

let lastId = 0
const genId = () => ++lastId

export default {
  name: 'KeyAndVirtualDom',
  components: {
    ListItem
  },
  data () {
    return {
      list: [
        { id: genId(), value: 'a' },
        { id: genId(), value: 'b' },
        { id: genId(), value: 'c' }
      ]
    }
  },

  methods: {
    rotateList () {
      this.list = this.list.slice(1).concat(this.list[0])
    },

    unshiftList () {
      this.list.unshift({
        id: genId(),
        value: 'NEW'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.key {
  &_wrapper {
    display: flex;
    margin-bottom: 20px;
  }
}

.first-button {
  margin-right: 10px;
}
</style>
