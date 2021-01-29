<template>
  <div class="container">
    <input
      :value="value"
      type="text"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: ['value', 'code'],

  model: {
    prop: 'value',
    event: 'input'
  }
}
</script>

<style lang="scss" scoped>

</style>
