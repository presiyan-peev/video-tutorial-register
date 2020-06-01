<template>
  <div class="home">
    <HomeGuest/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGuest from '@/components/homepage/HomeGuest.vue'

export default {
  name: 'Home',
  components: {
    HomeGuest
  }
}
</script>
