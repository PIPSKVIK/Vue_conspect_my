<template>
  <div class="list-item">
    <div> {{ value }} </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
      value: this.item.value
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
