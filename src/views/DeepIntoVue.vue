<template>
  <div class="deep">
    <div class="deep_link">
      <router-link class="link" :to="{ name: 'reactivity' }">Reactivity</router-link>|
      <router-link class="link" :to="{ name: 'keyAndVirtualDom' }">Key</router-link>|
      <router-link class="link" :to="{ name: 'IfNotHaveIdForList' }">Not Have Id</router-link>
      <router-link class="link" :to="{ name: 'renderComponent' }">Render Component</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'DeepIntoVue'
}
</script>

<style lang="scss" scoped>
.deep {
  width: 800px;
  margin: 0 auto;
    &_link {
      margin-bottom: 20px;
      margin-top: 20px;
    }
}

.link {
  margin-right: 10px;
}
</style>
