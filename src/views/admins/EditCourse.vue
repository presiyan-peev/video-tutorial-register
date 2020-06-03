<template>
  <div class="editCourse">
    <EditCourseForm v-if="isAdmin" />
    <NotAuthorised v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import EditCourseForm from '@/components/content_components/EditCourseForm.vue'
import NotAuthorised from '@/components/.helpers/NotAuthorised.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'EditCourse',
  components: {
    EditCourseForm,
    NotAuthorised
  },

  computed: {
    ...mapGetters([
        'isAdmin'
    ])
  }
}
</script>
