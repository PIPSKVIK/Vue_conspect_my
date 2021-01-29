<template>
  <div class="toast">
    <sample-page />
  </div>
</template>

<script>

import SamplePage from '@/components/ExampleToast/firstExampleToast/SamplePage'
export default {
  name: 'Toast',
  components: { SamplePage }
}
</script>

<style scoped>
.toast {
  width: 800px;
  margin: 0 auto;
}
</style>
