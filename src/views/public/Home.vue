<template>
  <div class="home">
    <HomeGuest v-if="!isUserIn && !isAdmin" />
    <HomeUser v-if="isUserIn && !isAdmin" />
    <HomeAdmin v-if="isAdmin" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGuest from '@/components/homepage_components/HomeGuest.vue'
import HomeUser from '@/components/homepage_components/HomeUser.vue'
import HomeAdmin from '@/components/homepage_components/HomeAdmin.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeAdmin,
    HomeGuest,
    HomeUser
  },

  computed: {
    ...mapGetters([
        'isUserIn',
        'isAdmin'
    ])
  }
}
</script>
