<template>
  <div class="input">
    <input
      :type="type"
      class="input-control"
      :class="{ 'input-control_radius': radius }"
      :value="value"
      @input="$emit('input', $event.target.value)"
      data-test="input"
    >
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    radius: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.input-control {
  outline: none;
  width: 300px;
  padding: 5px 10px;
  color: #5a0000;
  font-weight: bold;
  border: none;
    &_radius {
      border-radius: 10px;
    }
}

@media all and (max-width: 490px) {
  .input-control {
    width: 70%;
  }
}
</style>
