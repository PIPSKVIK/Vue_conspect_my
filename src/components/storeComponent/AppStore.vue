<template>
  <div>
    <LoginPage v-if="!isAuthenticated" />
    <div v-else>
      <fieldset class="user-data">
        <legend>Api</legend>
        <div>{{ user.fullname }}</div>
        <div> {{ user.email }} </div>
        <img width="50" height="50" src="https://www.gravatar.com/avatar/e2a3ce530515ad5da2f3a75e8b601506?s=28&d=identicon" />
      </fieldset>
    </div>
  </div>
</template>

<script>
import LoginPage from './LoginPage'
export default {
  name: 'AppStore',
  components: { LoginPage },
  computed: {
    user () {
      return this.$root.user
    },
    isAuthenticated () {
      return !!this.$root.user
    }
  }
}
</script>

<style scoped>
.user-data {
  max-width: 300px;
  margin: 0 auto;
}
</style>
