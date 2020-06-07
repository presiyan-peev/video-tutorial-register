<template>
  <div class="playVideo">
    <div v-if="isUserIn">
            <Title>{{$route.params.courseTitle}}</Title>
        <div v-if="isEnrolled">
            <Subtitle>Now playing: {{$route.params.lectureTitle}}</Subtitle>
            <LectureVideo 
              :courseTitle="$route.params.courseTitle" 
              :lectureTitle="$route.params.lectureTitle" 
              :key="toggleVideo" />
            <LecturesListUser 
              :courseTitle="$route.params.courseTitle" 
              @request-another-video="forceRerender" />
        </div>
        <div v-else>
            <Subtitle>You should enroll for the course, before you view the requested video</Subtitle>
        </div>
    </div>
    <NotAuthorised v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/.helpers/Title.vue";
import Subtitle from "@/components/.helpers/Subtitle.vue";
import NotAuthorised from "@/components/.helpers/NotAuthorised.vue";

import LectureVideo from "@/components/content_components/LectureVideo.vue";
import LecturesListUser from "@/components/content_components/LecturesListUser.vue";

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
    },

    // forcibly rerenders the video component after the player selects to play another video
    forceRerender() {
      console.log("toggleVideo")
      this.toggleVideo += 1;  
    }
  },

  mounted() {
      this.checkEnrollment()
  },

  data: () => {
    return {
      isEnrolled: false,
      toggleVideo: 0,
    };
  }
};
</script>
