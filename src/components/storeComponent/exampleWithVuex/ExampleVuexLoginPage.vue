<template>
  <form @submit.prevent="handleSubmit" class="form-group">
    <p>
      <input class="input-field" type="text" placeholder="email" v-model="email" />
    </p>
    <p>
      <input class="input-field" type="password" placeholder="password" v-model="password">
    </p>
    <button class="button" type="submit">Submit</button>
  </form>
</template>

<script>

export default {
  name: 'ExampleVuexLoginPage',
  data () {
    return {
      email: 'demo@email',
      password: 'password'
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch('LOGIN', {
        email: this.email,
        password: this.password
      }).catch((error) => {
        alert(error.message)
      })
    }
  }
}
</script>

<style scoped>
.input-field {
  border: none;
  outline: none;
  border-bottom: 2px solid #000ede;
  padding: 5px 10px;
  font-size: 16px;
  color: #000ede;
  font-weight: bold;
}

.input-field:focus {
  border-color: red;
  color: red;
}

.form-group {
  display: inline-block;
  border: 2px solid #0a0e4d;
  padding: 8px 25px 15px 25px;
  border-radius: 10px;
}

.button {
  outline: none;
  border: none;
  background-color: #000ede;
  color: #ffffff;
  width: 100%;
  padding: 10px 0;
  border-radius: 8px;
  cursor: pointer;
}
.button:hover {
  background-color: #010198;
}
.button:active {
  color: red;
}
</style>
