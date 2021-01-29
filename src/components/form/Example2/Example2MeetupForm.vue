<template>
  <div class="form">
    <form @submit.prevent="handleSubmit">
      <div class="meetup-form">
        <h4>Example2 Prop-submit-shange</h4>
        <fieldset class="wrapper">
          <div class="form-group">
            <label>Название</label>
            <base-input type="text" v-model="localMeetup.title" />
          </div>
          <div class="form-group">
            <label>Место проведения</label>
            <base-input type="text" v-model="localMeetup.place" />
          </div>
        </fieldset>

        <h3>Программа</h3>
        <Example2MeetupAgendaItemForm
          v-for="(agendaItem, index) in localMeetup.agenda"
          :key="agendaItem.id"
          :agendaItem="agendaItem"
          @remove="removeAgendaItem(index)"
          @change="updateAgendaItem(index, $event)"
        />

        <div>
          <button type="button" @click="addAgendaItem">+ Добавить пункут программы</button>
        </div>
      </div>

      <div class="meetup-form__aside">
        <div class="meetup-form__aside-wrapper">
          <button>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Example2MeetupAgendaItemForm from './Example2MeetupAgendaItemForm'
import BaseInput from '../BaseInput'
import { deepClone } from './utils'

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
  name: 'Example2MeetopForm',
  components: {
    Example2MeetupAgendaItemForm,
    BaseInput
  },

  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      localMeetup: deepClone(this.meetup)
    }
  },

  methods: {
    addAgendaItem () {
      this.localMeetup.agenda.push(createAgendaItem())
    },
    removeAgendaItem (index) {
      this.localMeetup.agenda.splice(index, 1)
    },
    handleSubmit () {
      this.$emit('submit', deepClone(this.localMeetup))
    },
    updateAgendaItem (index, newItem) {
      this.localMeetup.agenda.splice(index, 1, newItem)
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
