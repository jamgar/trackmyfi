<template>
  <div>
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">
        Current Balance:
        <span :class="colorText">{{ formattedBalance }}</span>
      </h1>
    </div>
    <div class="ph4 ph5-m ph6-l">Charts go here</div>
  </div>
</template>

<script>
import dinero from 'dinero.js'
import { balance } from '@/utils'

export default {
  layout: 'protected',
  computed: {
    formattedBalance() {
      return dinero({ amount: this.currentBalance }).toFormat()
    },
    colorText() {
      return {
        'light-red': this.currentBalance < 0
      }
    },
    currentBalance() {
      const expenses = this.$store.state.expenses.expenses
      const deposits = this.$store.state.deposits.deposits
      return balance(expenses, deposits)
    }
  },
  mounted() {
    this.$store.dispatch('expenses/getExpenses')
    this.$store.dispatch('deposits/getDeposits')
  }
}
</script>

<style></style>
