<template>
  <ul>
    <li
      v-for="(item, id) in items_"
      :key="id"
    >
      <slot :item="item" :remove="remove">
        <span>{{ item }}</span>
        <button @click="remove(id)">X</button>
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListView',
  // компонент принимает на вход массив.
  props: {
    items: {
      type: Array
    }
  },

  // создаем локальную копию, простую не глубокую.
  data () {
    return {
      items_: [...this.items]
    }
  },
  // По нажатию на кнопку, удаляется элемент списска методом splice.
  // Порождается событие и куда мы передаем наш обновленный эдемент списска.
  methods: {
    remove (id) {
      this.items_.splice(id, 1)
      this.$emit('update:items', [...this.items_])
    }
  }
}
</script>

<style scoped>
</style>
