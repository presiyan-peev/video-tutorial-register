<template>
  <div class="lecturesList">
    <div class="lecturesList" v-if="getLecturesByTitle($route.params.courseTitle).length>0">
      <Title>There are several lectures here</Title>
      <v-card class="lectureListContent mx-12" tile>
        <div
          v-for="lecture in getLecturesByTitle($route.params.courseTitle)"
          :key="lecture.title"
          class="lectureListItem"
        >
          <v-divider></v-divider>
          <v-row class="pl-9 pr-3 d-flex align-center">
            <v-col cols="3">{{lecture.title}}</v-col>
            <v-spacer></v-spacer>
            <v-col cols="2">
              <v-btn
                
                depressed
                small
                color="red"
                @click="deleteLecture(lecture.id)"
              >Delete</v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-card>
    </div>
    <div class="emptyLecturesList" v-else>
      <Title>No lectures for this course. Please create one!</Title>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/.helpers/Title.vue";

import { mapActions, mapGetters } from "vuex";
//import EditLecture from '../views/admins/EditLecture.vue'

export default {
  name: "LecturesListAdmin",

  components: {
    Title
  },

  computed: {
    ...mapGetters(["getLecturesByTitle"])
  },

  methods: {
    ...mapActions(['removeLecture']),
    setLectureData() {
      this.lectures = this.getLecturesByTitle(this.$route.params.courseTitle);
    },
    deleteLecture(id) {
      this.removeLecture({
        lectureId: id,
        course: this.lectures.find(x => x.id === id).course
      })
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
