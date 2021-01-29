<template>
  <div class="container">
    <section class="scoped-slot">
      <button @click="showScopedSlot = !showScopedSlot">Scoped Slot</button>
      <br>
      <div class="reusability" v-if="showScopedSlot">
        <h2>Scoped Slot</h2>
        <!--      тут у нас работает двусторонее связывание через sync модификатор параметра-->
        <ListView :items.sync="list">
          <template #default="{item, remove}">
            <a href="#">{{ item }}</a>
            <a @click="remove" style="margin-left: 10px; cursor: pointer;">Удалить</a>
            <div></div>
          </template>
        </ListView>
      </div>
      <span v-else>Нажми кнопку => Scoped Slot</span>
    </section>
    <section class="mixins">
      <h3>Mixins</h3>
      <resize-window />
    </section>
    <hr>
    <section>
      <h2>Просто интересный пример</h2>
      <div>
        <input type="text" value="Text value" @focus="handleFocus"  />
      </div>
      <p>И конда наводим фокус, то сразу выделяется весь текст.</p>
    </section>
  </div>
</template>

<script>
import ListView from '../components/reusability/scoped-slot/ListView'
import ResizeWindow from '../components/reusability/mixins/ResizeWindow'
export default {
  name: 'Reusability',

  components: { ResizeWindow, ListView },

  data () {
    return {
      list: [1, 2, 3, 4, 5],
      showScopedSlot: false
    }
  },

  methods: {
    handleFocus ($event) {
      $event.target.setSelectionRange(0, -1)
    }
  }
}
</script>

<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
}

h2 {
  margin: 0;
}

.scoped-slot {
  background-color: rgba(31, 30, 30, 0.2);
  padding: 20px;
  margin-top: 20px;
}

.mixins {
  background-color: rgba(31, 30, 30, 0.2);
  padding: 20px;
  margin-top: 20px;
}
</style>
