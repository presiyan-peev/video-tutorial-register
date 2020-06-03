<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center justify-center">
        <div class="appTitle">Video Tutorials</div>
      </div>

      <v-spacer></v-spacer>

      <AppBarGuest />
      
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AppBarGuest from "@/components/.helpers/AppBarGuest"

export default {
  name: 'App',

  components: {
    AppBarGuest,
  },
  data: () => ({
    //
  }),
};
</script>
