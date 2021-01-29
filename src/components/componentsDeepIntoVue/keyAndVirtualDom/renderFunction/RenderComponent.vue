<template>
  <div class="container">
    <FormGroup v-for="input in inputs" :key="input.id" :code="input.id">
      <template #default>
        <AppInput v-model="input.value" :code="input.id" />
      </template>
    </FormGroup>
  </div>
</template>

<script>

import FormGroup from '../renderFunction/renderFunctionComponents/FormGroup'
import AppInput from '../renderFunction/renderFunctionComponents/AppInput'

let lastId = 0
const genId = () => ++lastId

export default {
  name: 'RenderComponent',

  components: {
    FormGroup,
    AppInput
  },
  // если поставить 6000 инпутов, то будет рендеоить с задеркой, когда мы будем вводить значение в инпут
  // а если обвязать все в defaul slot То будет норм.
  data () {
    return {
      inputs: Array.from(Array(3), () => ({
        value: '',
        id: genId()
      }))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
