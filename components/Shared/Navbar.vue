<template>
  <div id="nav-bar">
    <div class="ph4 pv3 bg-dark-gray flex justify-between">
      <nuxt-link class="b f2 link near-white hover-moon-gray" to="/"
        >Track My Fi</nuxt-link
      >
      <span class="white" style="font-size:30px;cursor:pointer" @click="openNav"
        >&#9776;</span
      >
      <SideNav />
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/Shared/SideNav.vue'

export default {
  components: {
    SideNav
  },
  methods: {
    openNav() {
      document.getElementById('tmf-sidenav').style.width = '250px'
    }
  }
}
</script>

<style lang="css" scoped></style>
