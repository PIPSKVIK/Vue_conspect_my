<template>
  <div class="example2">
    <Example3MeetupForm :meetup.sync="meetup" />
    <hr>
    <pre><code>{{meetup}}</code></pre>
  </div>
</template>

<script>

import Example3MeetupForm from './Example3MeetupForm'
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
  name: 'Example3FormComponent',
  components: { Example3MeetupForm },
  data () {
    return {
      meetup: createMeetup()
    }
  }
}
</script>

<style scoped>

</style>
