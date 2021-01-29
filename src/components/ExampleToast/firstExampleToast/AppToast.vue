<template>
  <div class="toasts">
    <div class="toast" v-if="toast">
      <span>{{ toast }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppToast',

  data () {
    return {
      toast: null
    }
  },

  methods: {
    success (message) {
      this.toast = message
      setTimeout(() => {
        this.toast = null
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.toasts {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.toast {
  display: inline-block;
  border: 2px solid #008000;
  padding: 5px 20px;
  border-radius: 5px;
}
</style>
