<template>
  <div class="courseDetailsComponent">
    <v-row class="courseDetailsContent" style="max-height:30vh">
        <v-col cols="8">
            <v-img :src="imageUrl" contain style="height:30vh"></v-img>
        </v-col>
        <v-col cols="2" class="d-flex flex-column align-center justify-center">
            <Subtitle>Course Description</Subtitle>
            <div>{{description}}</div>
            <v-card class="rounded-card mt-2 px-2" color="success white--text" v-if="isEnrolled">enrolled</v-card>
            <v-btn class="mt-2" color="red accent-1" large v-else>Enroll</v-btn>
        </v-col>
    </v-row>
    <LecturesListUser :courseTitle="title" v-if="isEnrolled" />
    <Subtitle v-else>To get full access, please enroll the course</Subtitle>
  </div>
</template>

<script>
// @ is an alias to /src

import LecturesListUser from '@/components/LecturesListUser.vue'
import Subtitle from "@/components/helpers/Subtitle.vue"

import { mapGetters } from 'vuex'

export default {
  name: 'CourseDetailsComponent',

  props:['courseTitle'],
  components: {
    Subtitle,
    LecturesListUser
  },

  computed: {
    ...mapGetters([
        'getCourseByTitle',
    ]),
  },
  methods: {
      setCourseData() {
          this.title = this.getCourseByTitle(this.courseTitle).title
          this.description = this.getCourseByTitle(this.courseTitle).description
          this.imageUrl = this.getCourseByTitle(this.courseTitle).imageUrl
      }
  },
  mounted() {
      this.setCourseData()
  },
  data: () => {
      return {
          title: '',
          description: '',
          imageUrl: '',
          isEnrolled: false
      }
  }
}
</script>

<style lang="stylus">
.rounded-card  
    border-radius 50px !important
</style>