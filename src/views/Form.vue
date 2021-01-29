<template>
  <div class="form">
    <h3>Пример инпута AppInput - для переиспользуемого компонента.</h3>
    <AppInput :value="value" placeholder="Пример" v-model="value" />
    <span>{{ value }}</span>
    <hr />
    <h4>Практика по работе с компонентами форм</h4>

    <button @click="meetupShow = !meetupShow">Toogle Meetup Form</button>
    <transition name="slide-fade">
      <div v-if="meetupShow">
        <MeetapForm :meetup="meetup" />
        <pre><code>{{meetup}}</code></pre>
      </div>
    </transition>
    <hr>
    <div>
      <router-link class="example-link" :to="{ name: 'Form' }" exact>Home</router-link>
      <router-link class="example-link" :to="{ name: 'Example2' }">Example2</router-link>
      <router-link class="example-link" :to="{ name: 'Example3' }">Example3</router-link>
      <router-link class="example-link" :to="{ name: 'Example4' }">Example4</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
import MeetapForm from '../components/form/MeetapForm'
import AppInput from '../components/form/AppInput'

function createMeetup () {
  return {
    id: null,
    title: null,
    description: null,
    imageId: null,
    date: new Date(),
    place: '',
    agenda: []
  }
}
export default {
  name: 'Form',
  components: {
    AppInput,
    MeetapForm
  },
  data () {
    return {
      value: '',
      meetup: createMeetup(),
      meetupShow: false
    }
  }
}
</script>

<style scoped>
.form {
  width: 800px;
  margin: 0 auto;
}

.example-link {
  margin-right: 10px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
