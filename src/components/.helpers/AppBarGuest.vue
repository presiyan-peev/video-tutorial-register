<template>
  <div class="appBarLeftButtons">
    <v-btn
        @click="navigateTo('/home')"
        text
      >
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
    </v-btn>
    <span v-if="isAdmin || isUserIn">
      <v-btn
          @click="handleLogOut()"
          text
        >
          <span class="mr-2">Logout</span>
          <v-icon>mdi-account-arrow-right</v-icon>
      </v-btn>
    </span>
    <span v-else>
      <v-btn
          @click="navigateTo({name: 'Login'})"
          text
        >
          <span class="mr-2">Login</span>
          <v-icon>mdi-account-arrow-left-outline</v-icon>
      </v-btn>
      <v-btn
          @click="navigateTo({name: 'Register'})"
          text
        >
          <span class="mr-2">Register</span>
          <v-icon>mdi-account-arrow-left</v-icon>
      </v-btn>
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppBarGuest',

  computed: {
    ...mapGetters([
        'isAdmin',
        'isUserIn'
    ])
  },

  methods: {
    ...mapActions(['logOut']),

    navigateTo(to) {
      this.$router.push(to)
    },
    handleLogOut() {
      this.logOut()  
    }
  }
}
</script>
