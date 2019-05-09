<template>
  <div>
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">Current Balance: ${{ currentBalance }}</h1>
    </div>
    <div class="ph4 ph5-m ph6-l">Charts go here</div>
  </div>
</template>

<script>
import { totals } from '@/utils'
export default {
  layout: 'protected',
  computed: {
    currentBalance() {
      const expenses = this.$store.state.expenses.expenses
      return totals(expenses)
    }
  },
  mounted() {
    this.$store.dispatch('expenses/getExpenses')
  }
}
</script>

<style></style>
