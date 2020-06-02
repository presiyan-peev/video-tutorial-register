<template>
  <div class="homeGuest">
    <div class="homeGuestTitle primary lighten-4 primary--text pl-10 d-flex align-center">
        <v-responsive>
            <div class="display-1">Video Tutorials</div>
            <div class="caption">Start Self-Study Today: it'll Change Your Life</div>
        </v-responsive>
    </div>
    <div class="homeGuestCoursesList">
        <v-responsive>
            <v-container>
                <v-row>
                    <v-col v-for="course in getTopThreeCourses" :key="course.title">
                        <v-card
                            class="mx-auto"
                            max-width="344px"
                        >
                            <v-img
                            :aspect-ratio="1/1"
                            contain
                            :src="course.imageUrl"
                            
                            ></v-img>

                            <v-card-title>
                            {{course.title}}
                            </v-card-title>

                            <v-card-subtitle>
                            {{course.description}}
                            </v-card-subtitle>

                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-responsive>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HomeGuest from '@/components/homepage/HomeGuest.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'AppBarGuest',

  computed: {
    ...mapGetters([
        'getTopThreeCourses'
    ])
  }
}
</script>

<style lang="stylus">
.homeGuestTitle 
    height 20vh
</style>