<template>
  <form @submit.prevent="handleSubmit" >
    <p>
      <input v-model="email" type="text" placeholder="email">
    </p>
    <p>
      <input v-model="password" type="password" placeholder="password">
    </p>
    <p>
      <button>Submit</button>
    </p>
  </form>
</template>

<script>
import { loginWidthApi } from './api.js'

export default {
  name: 'LoginPage',

  data () {
    return {
      email: 'demo@email',
      password: 'password'
    }
  },

  methods: {
    handleSubmit () {
      loginWidthApi(this.email, this.password).then((user) => {
        this.$root.user = user
      }).catch((error) => {
        alert(error.message)
      })
    }
  }
}
</script>

<style scoped>

</style>
