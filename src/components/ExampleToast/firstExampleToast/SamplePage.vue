<template>
  <div class="sample">
    <AppToast ref="localToaster" />
    <button @click="localToast">Local Toast</button>
  </div>
</template>

<script>
import AppToast from './AppToast'
export default {
  name: 'SamplePage',

  components: { AppToast },

  methods: {
    localToast () {
      this.$refs.localToaster.success('Toaster')
    }
  }
}
</script>

<style lang="scss" scoped>
.sample {
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  background-color: #a9a9a9;
}
</style>
