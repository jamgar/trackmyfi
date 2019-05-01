<template>
  <nuxt-link
    class="link f4 fw6 bb bl br b--moon-gray mv0 pa3 dt w-100 bg-animate hover-bg-light-gray dark-gray"
    :to="path"
  >
    <div class="dtc">
      <div>{{ expense.description }}</div>
      <span class="f6 fw4 gray">{{ expense.createdAt }}</span>
    </div>
    <div class="dtc tr v-mid">${{ expense.amount }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['expense'],
  computed: {
    path() {
      return `/expenses/${this.expense.id}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
