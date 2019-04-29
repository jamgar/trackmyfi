<template>
  <div id="expense-list">
    <div class="f4 mid-gray ba b--moon-gray bg-light-gray mv0 pa3 dt w-100">
      <div class="dtc">Expense</div>
      <div class="dtc tr">Amount</div>
    </div>
    <div v-if="expenses.length > 0">
      <div v-for="(expense, idx) in expenses" :key="idx">
        <ExpenseListItem :expense="expense" />
      </div>
    </div>
    <div v-else>
      <h3>No Expenses</h3>
    </div>
  </div>
</template>

<script>
import ExpenseListItem from '@/components/ExpenseListItem.vue'

export default {
  components: {
    ExpenseListItem
  },
  computed: {
    expenses() {
      return this.$store.state.expenses.expenses
    }
  }
}
</script>

<style lang="scss" scoped></style>
