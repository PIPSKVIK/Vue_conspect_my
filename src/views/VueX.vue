<template>
  <div class="store">
    <button @click="showFirstExample = !showFirstExample">Show First Example</button>
    <hr />
    <div v-if="showFirstExample">
      <h2>Не совсем Vuex</h2>
      <AppStore />
    </div>
    <hr />
    <button @click="showSecondExample = !showSecondExample">Shoe Second Example</button>
    <div v-if="showSecondExample">
      <h2>Vuex - Real - Example</h2>
      <ExampleVuexAppStore />
    </div>
  </div>
</template>

<script>
import AppStore from '../components/storeComponent/AppStore'
import ExampleVuexAppStore from '../components/storeComponent/exampleWithVuex/ExampleVuexAppStore'
export default {
  name: 'VueX',
  components: { ExampleVuexAppStore, AppStore },
  data () {
    return {
      showFirstExample: false,
      showSecondExample: true
    }
  }
}
</script>

<style scoped>
.store {
  width: 800px;
  margin: 0 auto;
  text-align: center;
}
</style>
