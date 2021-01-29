<template>
  <div class="reactivity">
    <button class="button" @click="updateItemByKey">updateItemByKey</button>
    <button class="button" @click="updateItemWithSplise">updateItemWithSplise</button>
    <button class="button" @click="updateItemValueByArrayKey">updateItemValueByArrayKey</button>
    <button class="button" @click="updateItemWithSet">updateItemWithSet</button>
    <button class="button" @click="addNewKey">addNewKey</button>
    <button class="button" @click="addNewKeyWithReassingn">addNewKeyWithReassingn</button>
    <button class="button" @click="addNewKeyWithSet">addNewKeyWithSet</button>

    <hr>
    <p v-for="item in items" :key="item.id">{{ item }}</p>
    <hr>
    <p>{{ obj }}</p>
  </div>
</template>

<script>
export default {
  name: 'ReactivityLimitation',
  data () {
    return {
      items: [
        {
          id: Math.random(),
          value: 'a'
        },
        {
          id: Math.random(),
          value: 'b'
        }
      ],
      obj: {
        id: Math.random(),
        value: 'c'
      }
    }
  },

  methods: {
    updateItemByKey () {
      // так работать не будет! присвоение по индексу в моссив не будет работать.
      this.items[0] = {
        id: Math.random(),
        value: this.items[0].value + '!'
      }
    },

    updateItemWithSplise () {
      // с методом splice все будет работать!!!
      // лучше через него изменять массив
      this.items.splice(0, 1, {
        id: Math.random(),
        value: this.items[0].value + '!'
      })
    },

    updateItemValueByArrayKey () {
      // Это действие будет реактивным! - тут мы не изменяем сам моссим, а мы меняем объект.
      // Изменяем мы именно объект и не важно где он лежит, так что будет реактивность.
      const obj = this.items[0]
      obj.value += '!'
    },

    updateItemWithSet () {
      // Метод set он глобальный, спомошью этого метода мы можем обойти проблему реактивности в массивах.
      // Это такой спецовый метод
      // Но лучше использовать метод массива - splice
      // Vue.set === this.$set
      const newValue = {
        id: Math.random(),
        value: this.items[0].value + '!'
      }
      this.$set(this.items, 0, newValue)
    },

    addNewKey () {
      // Это действее не будер реактивно, так как оно было проделано не в процессе инициализации.
      // Vue не будет знать, что этот объект появился.
      this.obj.newKey = 'New Value'
    },

    addNewKeyWithReassingn () {
      // Проше всего использовать Диструктурицазию. И создать новый объект на основе старого.
      // Это давольнотаки униыерсальное решение.
      this.obj = {
        ...this.obj, // На основе старого.
        newKey: 'New Value' // Присвоить новый, с новыми значениями.
      }
    },

    addNewKeyWithSet () {
      // И другой вариант - это использовать метод set
      // первый аргементом говорим куда, потом какой ключ, потом какое значение.
      this.$set(this.obj, 'newKey', 'New Value 3')
      // так же есть еще такоей метод как и set - это delete
      // первым аргементом говорим где хотим удалить, а вторыс что?!!!
      // this.$delete(this.obj, 'id')

      // Вот такоей еще варик
      this.obj = Object.assign({}, this.obj, {
        newKey: 'New Value 3'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.reactivity {
  padding: 10px;
    & button {
      margin-right: 10px;
      margin-bottom: 10px;
    }
}

.button {
  outline: none;
  border: none;

  background-color: rgb(39, 39, 39);
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  border: 2px solid rgb(39, 39, 39);
  text-transform: uppercase;
    &:hover {
      color: #000000;
      background-color: #ffffff;
      border: 2px solid #000000;
    }
    &:active {
      background-color: #b5b5b5;
      color: #462424;
    }
}
</style>
