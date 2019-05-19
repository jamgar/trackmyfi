<template>
  <div id="tmf-sidenav" class="sidenav bg-dark-gray" @click="closeNav">
    <a href="#" class="close-btn" @click="closeNav">&times;</a>
    <div v-if="isAuthenticated">
      <nuxt-link to="/dashboard">Dashboard</nuxt-link>
      <nuxt-link to="/expenses">Expenses</nuxt-link>
      <nuxt-link to="/deposits">Deposits</nuxt-link>
      <a href="#" @click="signout">Sign Out</a>
    </div>
    <div v-else>
      <nuxt-link to="/auth/signin">Sign In</nuxt-link>
      <a href="#">Sign Up</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated
    }
  },
  methods: {
    closeNav() {
      document.getElementById('tmf-sidenav').style.width = '0'
    },
    async signout() {
      await this.$store.dispatch('auth/signOut')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  /* background-color: #111; */
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.sidenav a:hover {
  color: #f1f1f1;
}
.sidenav .close-btn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
@media screen (max-heigth: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
