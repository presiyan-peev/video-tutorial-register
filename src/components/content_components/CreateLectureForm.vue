<template>
  <div class="createLectureForm">
    <Title>Add a Lecture to course: {{course}}</Title>

    <v-card class="px-4">
      <v-card-text>
        <v-form ref="lectureCreation" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="lectureTitle"
                :rules="[rules.required]"
                label="Lecture Title"
                maxlength="20"
                :hint="titleHint"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="lectureVideoUrl"
                :rules="[rules.required]"
                label="Video url"
                maxlength="100"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex ml-auto" cols="6" sm="3" xsm="3">
              <v-btn
                x-large
                block
                depressed
                :disabled="!valid"
                color="primary lighten-1"
                @click="validate"
              >Submit</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/.helpers/Title.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "CreateLectureForm",
  props: ['course'],
  components: {
    Title
  },
  computed: {
    ...mapGetters(['isAdmin', 'getAllLecturesTitles']),
  },

  methods: {
    ...mapActions(['createLecture']),
    validate() {
      if(this.isNotUnique()){
        this.titleHint = 'Lecture with this title already exists'
        alert('Lecture with this title already exists')
        return
      }
      if (this.$refs.lectureCreation.validate()) {
        // submit form to server/API here...
        this.createLecture({
          id: Date.now(),
          title: this.lectureTitle,
          videoUrl: this.lectureVideoUrl,
          course: this.course,
        })
      }
    },
    isNotUnique() {
      return this.getAllLecturesTitles.includes(this.lectureTitle)
    },
  },

  watch: {
    getAllLecturesTitles() {
      this.$router.push('/')
    }
  },

  data: () => ({
    valid: true,

    lectureTitle: "",
    lectureVideoUrl: "",
    verify: "",
    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    },
    titleHint: ''
  })
};
</script>
