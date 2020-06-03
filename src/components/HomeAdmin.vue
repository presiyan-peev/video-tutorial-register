<template>
  <div class="homeAdmin">
      
    <div class="createCoursesButtonContainer mt-4">
        <v-btn color="primary darken-1" class="d-flex mx-auto" @click="navigateToCreatingCourse()">Create Courses</v-btn>
    </div>

    <div class="coursesList" v-if="getAllCourses.length>0">
        <Title>
            Choose course
        </Title>
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
                            <v-btn block depressed color="yellow darken-1" @click="navigateToEditingCourse(course.title)">Edit Course</v-btn>
                        </v-col>
                        <v-col cols="4" class="px-0">
                            <v-btn block depressed color="success" @click="navigateAddingLectures(course.title)">Add Lectures</v-btn>
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
        <Title>
            No courses in database. Please create one!
        </Title>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/helpers/Title.vue'

import { mapGetters } from 'vuex'
import CreateCourse from '../views/admins/CreateCourse.vue'
//import EditCourse from '../views/admins/EditCourse.vue'

export default {
    name: 'HomeAdmin',

    components: {
        Title,
    },

    computed: {
        ...mapGetters([
            'getAllCourses'
        ]),
    },

    methods: {
        navigateToCreatingCourse() {
            this.$router.push(CreateCourse)
        },
        navigateToEditingCourse(title) {
            this.$router.push('/edit-course/'+title)
        },
        navigateAddingLectures(title) {
            this.$router.push('/lecture-panel/'+title)
        }
    }
}
</script>
