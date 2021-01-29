<template>
  <div class="form">
    <div class="meetup-form">
      <h4>Example 1 - simple form</h4>
      <fieldset class="wrapper">
        <div class="form-group">
          <label>Название</label>
          <base-input type="text" v-model="meetup.title" />
        </div>
        <div class="form-group">
          <label>Место проведения</label>
          <base-input type="text" v-model="meetup.place" />
        </div>
      </fieldset>

      <h3>Программа</h3>
      <MeetupAgendaItemForm
        v-for="(agendaItem, index) in meetup.agenda"
        :key="agendaItem.id"
        :agenda-item="agendaItem"
        @remove="removeAgendaItem(index)"
      />

      <div>
        <button type="button" @click="addAgendaItem">+ Добавить пункут программы</button>
      </div>
    </div>

    <div class="meetup-form__aside">
      <div class="meetup-form__aside-wrapper">
        <button>Cancel</button>
        <button>Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import MeetupAgendaItemForm from './MeetupAgendaItemForm'
import BaseInput from './BaseInput'

function createAgendaItem () {
  return {
    id: Math.random(),
    startsAt: '00:00',
    endsAt: '00:00',
    type: 'other',
    title: null,
    description: null,
    speaker: null,
    language: null
  }
}
export default {
  name: 'MeetapForm',
  components: {
    MeetupAgendaItemForm,
    BaseInput
  },

  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  methods: {
    addAgendaItem () {
      this.meetup.agenda.push(createAgendaItem())
    },
    removeAgendaItem (index) {
      // Это нам поможет удальть элемент из массива.
      // Первый аргумент это index.
      // Второй, сколько элементов удалить.
      // Третий, что в место него вставить, мы тут ничего не будем вставлять.
      this.meetup.agenda.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 500px;
  border-radius: 10px;
}
</style>
