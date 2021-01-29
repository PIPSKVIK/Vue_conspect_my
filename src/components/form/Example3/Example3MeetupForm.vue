<template>
  <div class="form">
    <form>
      <div class="meetup-form">
        <h4>Example3 one-way-watch-sync</h4>
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
        <Example3MeetupAgendaItemForm
          v-for="(agendaItem, index) in localMeetup.agenda"
          :key="agendaItem.id"
          :agendaItem="agendaItem"
          @remove="removeAgendaItem(index)"
          @update:agendaItem="updateAgendaItem(index, $event)"
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
import Example3MeetupAgendaItemForm from './Example3MeetupAgendaItemForm'
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
  name: 'Example3MeetupForm',
  components: {
    Example3MeetupAgendaItemForm,
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

  watch: {
    localMeetup: {
      deep: true,
      handler () {
        this.$emit('update:meetup', deepClone(this.localMeetup))
      }
    }
  },

  methods: {
    addAgendaItem () {
      this.localMeetup.agenda.push(createAgendaItem())
    },
    removeAgendaItem (index) {
      this.localMeetup.agenda.splice(index, 1)
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
