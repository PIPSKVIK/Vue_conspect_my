<template>
  <div class="example2">
    <Examle4MeetupForm :meetup.sync="meetup" />
    <hr>
    <pre><code>{{meetup}}</code></pre>
  </div>
</template>

<script>

import Examle4MeetupForm from './Examle4MeetupForm'
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
  name: 'Example4FormComponent',
  components: { Examle4MeetupForm },
  data () {
    return {
      meetup: createMeetup()
    }
  }
}
</script>

<style scoped>

</style>
