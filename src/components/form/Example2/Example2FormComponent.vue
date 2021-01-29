<template>
  <div class="example2">
    <Example2MeetupForm :meetup="meetup" @submit="meetup = $event" />
    <hr>
    <pre><code>{{meetup}}</code></pre>
  </div>
</template>

<script>

import Example2MeetupForm from './Example2MeetupForm'
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
  name: 'Example2FormComponent',
  components: { Example2MeetupForm },
  data () {
    return {
      meetup: createMeetup()
    }
  }
}
</script>

<style scoped>

</style>
