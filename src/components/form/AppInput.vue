<template>
  <div class="input">
    <slot name="left-icon"></slot>
    <input
      v-bind="$attrs"
      v-on="listeners"
      class="input-form"
      v-model="localValue"
    >
<!--    Но можно его кое как проксировать значения через v-model -->
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  inheritAttrs: false,
  props: {
    value: {}
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  computed: {
    // Вот таким способом можно делать любые события.
    // А чтонее передавать на верх.
    listeners () {
      return {
        ...this.$listeners,
        input: ($event) => {
          this.$emit('input', $event.target.value)
        }
      }
    },
    localValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped>
.input {
  margin-top: 20px;
}
</style>
