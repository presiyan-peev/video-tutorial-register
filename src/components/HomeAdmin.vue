<template>
  <div class="homeAdmin">
      
    <div class="createCoursesButtonContainer mt-4">
        <v-btn color="primary darken-1" class="d-flex mx-auto">Create Courses</v-btn>
    </div>

    <div class="coursesList" v-if="getAllCourses.length>0">
        <div class="coursesListTitle mt-12 mb-2 display-1 d-flex justify-center">
            Choose course
        </div>
        <v-card
            class="courseListContent mx-12"
            tile
        >
            <div v-for="course in getAllCourses" :key="course.title" class="courseListItem">
                <v-divider></v-divider>
                <v-row class="pl-9 d-flex align-center">
                    <v-col cols="7">
                        {{course.title}}
                    </v-col>
                    <v-col cols="5">
                        <v-row>
                        <v-col cols="4" class="px-0">
                            <v-btn block depressed color="yellow darken-1">Edit Course</v-btn>
                        </v-col>
                        <v-col cols="4" class="px-0">
                            <v-btn block depressed color="success">Add Lectures</v-btn>
                        </v-col>
                        <v-col cols="4">
                            Lectures in course: {{course.lecturesCount}}
                        </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </div>
        </v-card>
    </div>
    <div class="emptyCoursesList" v-else>
        <div class="coursesListTitle mt-12 mb-2 display-1 d-flex justify-center">
            No courses in database. Please create one!
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from 'vuex'

export default {
    name: 'HomeAdmin',

    computed: {
    ...mapGetters([
        'getAllCourses'
    ])
  }
}
</script>
