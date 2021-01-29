<template>
  <div id="app">
    <nav class="nav">
      <router-link class="nav-link" :to="{ name: 'Home' }" exact>Home</router-link>
      <router-link class="nav-link" :to="{ name: 'DeepVue' }">Deep Vue</router-link>
      <router-link class="nav-link" :to="{ name: 'ModalPage' }">Modal Page</router-link>
      <router-link class="nav-link" :to="{ name: 'Transition' }">Transition</router-link>
      <router-link class="nav-link" :to="{ name: 'Form' }">Form</router-link>
      <router-link class="nav-link" :to="{ name: 'Toast' }">Toast</router-link>
      <router-link class="nav-link" :to="{ name: 'Reusability' }">Reusability</router-link>
      <router-link class="nav-link" :to="{ name: 'Store' }">Store</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 0;
  box-sizing: border-box;
}

.nav {
  width: 800px;
  margin: 0 auto;
  background: linear-gradient(45deg, #0a0e4d, rgba(3, 4, 21, .5));
  padding: 10px 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 10px 0 10px;
}

.router-link-active {
  color: red;
}
</style>
