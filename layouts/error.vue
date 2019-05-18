<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404" class="error__title">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link class="error__link" to="/">Home page</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style lang="scss" scoped>
.error {
  max-width: 780px;
  margin: 100px auto;
  text-align: center;

  &__title {
    font-size: 3rem;
  }
  &__link {
    text-decoration: none;
    color: darkslategrey;
  }
}
</style>
