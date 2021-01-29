<template>
  <div class="testing">
    <h2 class="testing_title">Testing Proggram</h2>
    <p class="testing_subtitle">With Jast and Vue.js</p>
    <div class="testing_components">
      <AppInput />
    </div>
  </div>
</template>

<script>

import AppInput from '@/components/AppComponents/AppInput'
export default {
  name: 'TestingProggram',
  components: {
    AppInput
  }
}
</script>

<style lang="scss" scoped>
.testing {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 800px;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(133, 133, 133);
  color: #ffffff;
  padding: 50px 0;
    &_title {
      margin: 0 0 20px 0;
      font-size: 35px;
      line-height: 1.2;
    }
    &_subtitle {
      margin: 0;
      font-size: 20px;
      text-decoration: underline;
      font-style: italic;
    }
    &_components {
      margin-top: 40px;
    }
}

@media all and (max-width: 799px) {
  .testing {
    width: 80%;
    background-color: #3d2727;
      &_title {
        font-size: 25px;
      }
      &_subtitle{
        font-size: 18px;
      }
  }
}

@media all and (max-width: 350px) {
  .testing {
    &_title {
      font-size: 18px;
    }
    &_subtitle {
      font-size: 12px;
    }
  }
}

</style>
