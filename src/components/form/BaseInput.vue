<template>
  <div class="input">
    <input
      v-bind="$attrs"
      v-on="listeners"
      class="input_item"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: ($event) => {
          this.$emit('input', $event.target.value)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
