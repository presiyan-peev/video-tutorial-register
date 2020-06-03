<template>
  <div class="lecturePanel">
    <div class="lecturePanelContent" v-if="isAdmin">
      <v-row>
        <v-col cols="0" sm="3" md="3"></v-col>
        <v-col cols="12" sm="6" md="6">
          <CreateLecture />
          <LecturesList />
        </v-col>
        <v-col cols="0" sm="3" md="3"></v-col>
      </v-row>
    </div>
    <NotAuthorised v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateLecture from "@/components/CreateLecture.vue";
import LecturesList from "@/components/LecturesList.vue";
import NotAuthorised from "@/components/helpers/NotAuthorised.vue";

import { mapGetters } from "vuex";

export default {
  name: "LecturePanel",
  components: {
    CreateLecture,
    LecturesList,
    NotAuthorised
  },

  computed: {
    ...mapGetters(["isAdmin"])
  }
};
</script>
