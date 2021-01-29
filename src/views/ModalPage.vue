<template>
  <div class="modal">
    <h3>Modal Page</h3>
    <UserPage />
  </div>
</template>

<script>

import UserPage from '../components/modalPage/UserPage'
export default {
  name: 'ModalPage',
  components: { UserPage }
}
</script>

<style lang="scss" scoped>
.modal {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 800px;
  margin: 0 auto;
}
</style>
