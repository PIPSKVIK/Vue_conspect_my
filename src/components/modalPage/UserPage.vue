<template>
  <div class="user-page">
    <button
      type="button"
      class="btn btn-send"
      @click="openModal"
    >
      Подробонее
    </button>
    <Modal
      v-if="isModalOpen"
      title="Очень важная информация"
      @close="isModalOpen = false"
    >
      <div>
        <p class="modal-lorem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur doloremque eveniet explicabo harum iste laboriosam modi necessitatibus neque, nisi odio quam reiciendis sunt, ullam ut, vel velit vero!
        </p>
        <p class="modal-lorem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur doloremque eveniet explicabo harum iste laboriosam modi necessitatibus neque, nisi odio quam reiciendis sunt, ullam ut, vel velit vero!
        </p>
        <p class="modal-lorem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur doloremque eveniet explicabo harum iste laboriosam modi necessitatibus neque, nisi odio quam reiciendis sunt, ullam ut, vel velit vero!
        </p>
        <p class="modal-lorem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur doloremque eveniet explicabo harum iste laboriosam modi necessitatibus neque, nisi odio quam reiciendis sunt, ullam ut, vel velit vero!
        </p>
        <p class="modal-lorem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur doloremque eveniet explicabo harum iste laboriosam modi necessitatibus neque, nisi odio quam reiciendis sunt, ullam ut, vel velit vero!
        </p>
        <p class="modal-lorem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur doloremque eveniet explicabo harum iste laboriosam modi necessitatibus neque, nisi odio quam reiciendis sunt, ullam ut, vel velit vero!
        </p>
        <p class="modal-lorem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aspernatur doloremque eveniet explicabo harum iste laboriosam modi necessitatibus neque, nisi odio quam reiciendis sunt, ullam ut, vel velit vero!
        </p>
      </div>
      <template #footer>
      </template>
    </Modal>
    <div>
      <h3>
        О Хуках Жизненных циклах Экземпляра Vue...
        Можно прочитать в ReadMe
      </h3>
    </div>
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  name: 'UserPage',
  components: { Modal },

  data () {
    return {
      isModalOpen: false
    }
  },

  methods: {
    openModal () {
      this.isModalOpen = true
    }
  }
}
</script>

<style lang="scss" scoped>

.btn {
  outline: none;
  border: none;
  padding: 10px 10px;
  border-radius: 8px;
  font-size: 15px;
  background-color: #000ede;
  color: #ffffff;
  cursor: pointer;
  box-sizing: border-box;
    &:hover {
      background-color: #000ba9;
    }
    &:active {
      background-color: #00135b;
    }
  &.btn-send {
    margin-right: 40px;
  }
}

.modal-lorem {
  text-align: start;
}
</style>
