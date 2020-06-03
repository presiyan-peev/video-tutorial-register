<template>
  <div class="lectureVideo mb-2 display-1 d-flex justify-center">
    <iframe
      width="560"
      height="315"
      :src="videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from "vuex"

export default {
  name: "PlayVideo",

  props: ["lectureTitle", "courseTitle"],

  computed: {
    ...mapGetters(["getSingleLectureByTitle"])
  },

  methods: {
    setVideoUrl() {
      this.videoUrl = this.getSingleLectureByTitle({
        lecture: this.lectureTitle,
        course: this.courseTitle
      }).videoUrl
    }
  },

  mounted() {
    this.setVideoUrl()
  },

  data: () => {
    return {
      videoUrl: "https://www.youtube.com/embed/0eWrpsCLMJQ"
    };
  }
};
</script>
