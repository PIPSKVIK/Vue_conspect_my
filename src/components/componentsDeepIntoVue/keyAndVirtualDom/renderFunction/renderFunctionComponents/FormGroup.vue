<template>
  <div class="container">
    <label>Form Group:</label>
    <br>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormGroup',

  props: ['code']
}
</script>

<style lang="scss" scoped>

</style>
