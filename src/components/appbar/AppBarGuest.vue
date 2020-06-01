<template>
  <div class="appBarLeftButtons">
    <v-btn
        @click="navigateTo('Home')"
        text
      >
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn
        @click="navigateTo('Login')"
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-account-arrow-right-outline</v-icon>
    </v-btn>
    <v-btn
        @click="navigateTo('Register')"
        text
      >
        <span class="mr-2">Register</span>
        <v-icon>mdi-account-arrow-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
// import HomeGuest from '@/components/homepage/HomeGuest.vue'

export default {
  name: 'AppBarGuest',

  methods: {
    navigateTo(to) {
       this.$router.push(to)
    }
  }
}
</script>
