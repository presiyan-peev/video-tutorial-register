<template>
  <div class="createCourse">
    <CreateCourseForm  v-if="isAdmin" />
    <NotAuthorised v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateCourseForm from '@/components/content_components/CreateCourseForm.vue'
import NotAuthorised from '@/components/.helpers/NotAuthorised.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'CreateCourse',
  components: {
    CreateCourseForm,
    NotAuthorised
  },

  computed: {
    ...mapGetters([
        'isAdmin'
    ])
  }
}
</script>
