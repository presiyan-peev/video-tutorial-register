<template>
  <div class="courseDetails">
    <div v-if="isUserIn">
      <Title>Course Title: {{$route.params.title}}</Title>
      <CourseDetailsComponent :courseTitle="$route.params.title" />
    </div>
    <NotAuthorised v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/helpers/Title.vue'
import CourseDetailsComponent from '@/components/CourseDetailsComponent.vue'
import NotAuthorised from '@/components/helpers/NotAuthorised.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'CourseDetails',
  components: {
    Title,
    CourseDetailsComponent,
    NotAuthorised,
  },

  computed: {
    ...mapGetters([
        'isUserIn'
    ])
  }
}
</script>
