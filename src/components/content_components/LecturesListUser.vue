<template>
  <div class="lecturesList">
    <div class="lecturesList" v-if="getLecturesByTitle(courseTitle).length>0">
      <Subtitle>Lectures List</Subtitle>
      <v-card class="lectureListContent mx-12" tile>
        <div
          v-for="lecture in getLecturesByTitle(courseTitle)"
          :key="lecture.title"
          class="lectureListItem"
        >
          <v-divider></v-divider>
          <v-row class="pl-9 d-flex align-center">
            <v-col cols="11" lg="9" md="5" xs="2">{{lecture.title}}</v-col>
            <v-spacer />
            <v-col cols="1" class="mr-2">
              <v-btn
                block
                depressed
                color="grey darken-2"
                @click="navigatePlayingLecture(lecture.title)"
              >Play</v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Subtitle from "@/components/.helpers/Subtitle.vue";

import { mapGetters } from "vuex";
//import EditLecture from '../views/admins/EditLecture.vue'

export default {
  name: "LecturesListUser",

  props:['courseTitle'],

  components: {
    Subtitle
  },

  computed: {
    ...mapGetters(["getLecturesByTitle"])
  },

  methods: {
    setLectureData() {
      this.lectures = this.getLecturesByTitle(this.courseTitle);
    },
    navigatePlayingLecture(title) {
      /**
       * trqq zema i ID za da go polzvam da GET videoto v LectureVideo.vue
       */
      this.$router.push({ name: 'PlayVideo', params: { courseTitle: this.courseTitle, lectureTitle: title}})
    }
  },

  watch: {
    $route(to, from) {
      console.log(to)
      console.log(from)
      this.$emit('request-another-video')
    }
  },

  mounted() {
    this.setLectureData();
  },

  data: () => {
    return {
      lectures: []
    };
  }
};
</script>
