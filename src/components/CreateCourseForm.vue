<template>
  <div class="createCourseForm">
    xyu
    
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  name: 'CreateCourseForm',
  computed: {
    ...mapGetters([
        'isAdmin'
    ])
  }
}
</script>
