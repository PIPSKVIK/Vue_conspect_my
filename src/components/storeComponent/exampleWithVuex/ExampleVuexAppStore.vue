<template>
  <div>
    <ExampleVuexLoginPage v-if="!isAuthenticated" />
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
import ExampleVuexLoginPage from './ExampleVuexLoginPage'
export default {
  name: 'ExampleVuexAppStore',
  components: { ExampleVuexLoginPage },
  computed: {
    user () {
      return this.$store.state.user
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>

<style scoped></style>
