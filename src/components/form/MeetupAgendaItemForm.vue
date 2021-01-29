<template>
  <div class="meetup">
    <fieldset class="meetup-wrapper">
      <button class="meetup-remove" @click="$emit('remove')">Удалить</button>
      <div class="form-group">
        <select title="Тип" v-model="agendaItem.type">
          <option value="other">Другое</option>
        </select>
      </div>

      <div class="from-row">
        <div>
          <label>Начало</label>
          <BaseInput type="text" placeholder="00:00" v-model="agendaItem.startsAt"/>
        </div>
        <div>
          <label>Окончание</label>
          <BaseInput type="text" placeholder="00:00" v-model="agendaItem.endsAt"/>
        </div>
      </div>

      <div class="form-group">
        <div>
          <label>Заголовок</label>
          <BaseInput v-model="agendaItem.title" />
        </div>
        <div class="text-aria">
          <label>Описание</label>
          <textarea v-model="agendaItem.description"></textarea>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>

import BaseInput from './BaseInput'
export default {
  name: 'MeetupAgendaItemForm',
  components: {
    BaseInput
  },

  props: {
    agendaItem: {
      type: [Object, Function],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.meetup-wrapper {
  width: 500px;
  border-radius: 10px;
}

.text-aria {
  display: flex;
  flex-direction: column;
}
</style>
