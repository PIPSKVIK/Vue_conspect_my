<template>
  <div>
    <p>Window size: {{ windowWidth }} : {{ windowHeight }}</p>
  </div>
</template>

<script>
import { windowSizeMixin } from './example-mixins/window-size-mixin'

export default {
  name: 'ResizeWindow',
  mixins: [windowSizeMixin]
}
</script>

<style scoped></style>
