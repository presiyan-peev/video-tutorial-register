<template>
  <div class="lectureVideo mb-2 display-1 d-flex justify-center">
    <iframe width="560" height="315" 
        :src="videoSrc" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from 'vuex'

export default {
  name: 'PlayVideo',
  components: {

  },

  computed: {
    ...mapGetters([
        'getLecturesByTitle'
    ])
  },

  data: () => {
      return {
          videoSrc: "https://www.youtube.com/embed/0eWrpsCLMJQ"
      }
  }
}
</script>
