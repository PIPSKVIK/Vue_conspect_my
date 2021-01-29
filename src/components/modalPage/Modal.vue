<template>
  <div class="modal">
    <div class="modal-header">
      <h5>{{title}}</h5>
      <button
        type="button"
        class="close"
        @click="closeModal"
      >
        <span>&times;</span>
      </button>
    </div>
    <hr>
    <div class="modal-body"
         ref="modalBody"
         @scroll="onBodyScroll"
    >
      <slot />
    </div>
    <hr>
    <div class="modal_footer">
      <slot name="footer">
        <button
          type="button"
          @click="closeModal"
          class="btn"
        >
          Отмена
        </button>
        <button
          type="button"
          class="btn"
          :class="{ 'but-disabled': !isRulesReaded }"
          :disabled="!isRulesReaded"
          @click="applyRules"
        >
          Принять
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    title: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      isRulesReaded: false
    }
  },

  methods: {
    closeModal () {
      this.$emit('close')
    },

    onBodyScroll () {
      const modalBody = this.$refs.modalBody
      if (modalBody.clientHeight + modalBody.scrollTop >= modalBody.scrollHeight) {
        this.isRulesReaded = true
      }
    },

    applyRules () {
      console.log('С правилами ознакомлен.')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 500px;
  background-color: #ffffff;
  text-align: center;
  border: 2px solid #000000;
  border-radius: 8px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
    & h5 {
      margin: 0;
    }
}

.modal_footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
    & button {
      margin-right: 20px;
    }
}

.btn {
  outline: none;
  border: none;
  padding: 10px 10px;
  border-radius: 8px;
  font-size: 15px;
  background-color: #1b1b1f;
  color: #ffffff;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #000ba9;
  }
  &:active {
    background-color: #00135b;
  }
}

.modal-body {
  max-height: 200px;
  overflow-y: scroll;
}

.but-disabled {
  background-color: #ff0000;
    &:hover {
      background-color: #ff0000;
    }
    &:active {
      background-color: #ff0000;
    }
}
</style>
