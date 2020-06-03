<template>
  <div class="homeUser">
    <Title>Courses</Title>
    <v-row class="searchCourses">
      <v-col cols="2"></v-col>
      <v-col cols="2" class="d-flex align-center">
        <v-text-field label="Search" v-model="search"></v-text-field>
      </v-col>
      <v-col cols="1" class="d-flex align-center">
        <v-btn>Search</v-btn>
      </v-col>
    </v-row>
    <div class="homeUserCoursesList">
      <v-responsive>
        <v-container>
          <v-row>
            <v-col cols="4" v-for="course in coursesList" :key="course.title">
              <v-card class="mx-auto" max-width="344px">
                <v-img :aspect-ratio="1/1" contain :src="course.imageUrl"></v-img>

                <v-card-title>{{course.title}}</v-card-title>

                <v-card-subtitle>{{course.description}}</v-card-subtitle>

                <div class="primary lighten-4 pa-2">
                  <v-btn color="primary lighten-2" dark small>Details</v-btn>
                  <v-spacer></v-spacer>
                </div>

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
import Title from "@/components/helpers/Title.vue";

import { mapGetters } from "vuex";

export default {
  name: "HomeUser",
  components: {
    Title
  },
  computed: {
    ...mapGetters(["getAllPublicCourses"]),

    // filters the courses by title based on the search
    coursesList() {
      return this.getAllPublicCourses.filter(course => course.title.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  data: () => {
    return {
      search: '',
    }
  }
};
</script>
