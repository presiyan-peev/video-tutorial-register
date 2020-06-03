<template>
  <div class="playVideo">
    <div v-if="isUserIn">
        <div v-if="isEnrolled">
            <Title>{{$route.params.courseTitle}}</Title>
            <Subtitle>Now playing: {{$route.params.lectureTitle}}</Subtitle>
            <LectureVideo />
            <LecturesListUser :courseTitle="$route.params.courseTitle" />
        </div>
        <div v-else>
            <Subtitle>Please, enrol for this course</Subtitle>
        </div>
    </div>
    <NotAuthorised v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/helpers/Title.vue";
import Subtitle from "@/components/helpers/Subtitle.vue";
import NotAuthorised from "@/components/helpers/NotAuthorised.vue";

import LectureVideo from "@/components/LectureVideo.vue";
import LecturesListUser from "@/components/LecturesListUser.vue";

import { mapGetters } from "vuex";

export default {
  name: "PlayVideo",
  components: {
    Title,
    Subtitle,
    NotAuthorised,
    LectureVideo,
    LecturesListUser
  },

  computed: {
    ...mapGetters(["isUserIn", "getUser", "getCourseByTitle"])
  },

  methods: {
    checkEnrollment() {
      this.isEnrolled = this.getCourseByTitle(
        this.$route.params.courseTitle
      ).usersEnrolled.includes(this.getUser.username);
    }
  },

  mounted() {
      this.checkEnrollment()
  },

  data: () => {
    return {
      isEnrolled: false
    };
  }
};
</script>
