<template>
  <div class="dark-gray sans-serif">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  middleware: 'authenticated',
  components: {
    Navbar
  }
}
</script>

<style></style>
