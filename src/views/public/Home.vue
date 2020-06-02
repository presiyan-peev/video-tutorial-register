<template>
  <div class="home">
    <HomeGuest v-if="!isUserIn && !isAdmin" />
    <HomeUser v-if="isUserIn" />
    <HomeAdmin v-if="isAdmin" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGuest from '@/components/HomeGuest.vue'
import HomeUser from '@/components/HomeUser.vue'
import HomeAdmin from '@/components/HomeAdmin.vue'

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
