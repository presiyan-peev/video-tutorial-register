<template>
  <div class="editCourseForm">
    <Title>
      {{ $route.params.title }}: Edit this course
    </Title>
    <v-row>
        <v-col cols="0" sm="3" md="3">
        </v-col>
        <v-col cols="12" sm="6" md="6">
            <v-card class="px-4">
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field :v-model="courseTitle" :rules="[rules.required]" label="Course Title" :value="editableCourse.title" maxlength="20" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea v-model="courseDesc" :rules="[rules.required]" label="Course Description" :value="editableCourse.description" maxlength="50" required rows="1" auto-grow></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="courseImg" :rules="[rules.required]" label="Image url" :value="editableCourse.imageUrl" maxlength="100" required></v-text-field>
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

import { mapGetters } from 'vuex'

export default {
  name: 'EditCourseForm',
  components: {
    Title
  },
  computed: {
    ...mapGetters([
        'isAdmin',
        'getCourseByTitle'
    ])
  },

  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    setEditableCourse() {
      this.editableCourse = this.getCourseByTitle(this.$route.params.title)
      this.courseTitle = this.editableCourse.title
      this.courseDesc = this.editableCourse.description
      this.courseImg = this.editableCourse.imageUrl
      this.isPublic = this.editableCourse.isPublic
    }
  },

  mounted() {
    this.setEditableCourse()
  },

  data: () => ({
    valid: true,
    
    courseTitle: "",
    courseDesc: "",
    courseImg: "",
    isPublic: false,
    lectures: [],
    usersEnrolled: [],
    lecturesCount: 0,
    usersEnrolledCount: 0,
    verify: "",
    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    },

    editableCourse: {},
  })
}
</script>
