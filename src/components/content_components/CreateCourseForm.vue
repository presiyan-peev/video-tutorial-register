<template>
  <div class="createCourseForm">
    <Title>
      Create a Course
    </Title>
    <v-row>
        <v-col cols="0" sm="3" md="3">
        </v-col>
        <v-col cols="12" sm="6" md="6">
            <v-card class="px-4">
                <v-card-text>
                    <v-form ref="courseCreation" v-model="valid" lazy-validation>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="courseTitle" :rules="[rules.required]" label="Course Title" maxlength="20" :hint="titleHint" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea v-model="courseDesc" :rules="[rules.required]" label="Course Description" maxlength="50" required></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="courseImg" :rules="[rules.required]" label="Image url" maxlength="100" required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="d-flex mr-auto" cols="6" sm="3" xsm="3">
                                <v-checkbox
                                  v-model="isPublic"
                                  label="public"
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="d-flex ml-auto" cols="6" sm="3" xsm="3">
                                <v-btn x-large block depressed :disabled="!valid" color="primary lighten-1" @click="validate">Submit</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="0" sm="3" md="3">
        </v-col>
    </v-row>  
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/.helpers/Title.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CreateCourseForm',
  components: {
    Title
  },
  computed: {
    ...mapGetters([
        'isAdmin',
        'getAllCoursesTitles'
    ])
  },

  methods: {
    ...mapActions(['createCourse']),

    validate() {
      if(this.isNotUnique()){
        this.titleHint = 'Course with this title already exists'
        alert('Course with this title already exists')
        return
      }
      if (this.$refs.courseCreation.validate()) {
        // submit form to server/API here...
        this.createCourse({
          id: Date.now(),
          title: this.courseTitle,
          description: this.courseDesc,
          imageUrl: this.courseImg,
          isPublic: this.isPublic,
          lectures: [],
          usersEnrolled: [],
          lecturesCount: 0,
          usersEnrolledCount: 0,
        })
      }
    },

    // return true when the username is not unique
    isNotUnique() {
      return this.getAllCoursesTitles.includes(this.courseTitle)
    },
  },

  watch: {
    getAllCoursesTitles() {
      this.$router.push('/')
    }
  },

  data: () => ({
    valid: true,
    
    courseTitle: "",
    courseDesc: "",
    courseImg: "",
    isPublic: false,
    verify: "",
    titleHint: '',
    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  })
}
</script>
