<template>
  <nuxt-link
    class="link f4 fw6 bb bl br b--moon-gray mv0 pa3 dt w-100 bg-animate hover-bg-light-gray dark-gray"
    :to="path"
  >
    <div class="dtc">
      <div>{{ expense.description }}</div>
      <span class="f6 fw4 gray">{{ formattedDate }}</span>
    </div>
    <div class="dtc tr v-mid light-red">{{ formattedAmount }}</div>
  </nuxt-link>
</template>

<script>
import moment from 'moment'
import dinero from 'dinero.js'

export default {
  props: ['expense'],
  computed: {
    formattedDate() {
      return moment(this.expense.createdAt).format('MMMM Do, YYYY')
    },
    formattedAmount() {
      const amount = this.expense.amount ? this.expense.amount : 0
      return '-' + dinero({ amount: parseInt(amount) }).toFormat('$0,0.00')
    },
    path() {
      return `/expenses/${this.expense.id}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
