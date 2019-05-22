<template>
  <div id="expense-list">
    <div class="f4 mid-gray ba b--moon-gray bg-light-gray mv0 pa3 dt w-100">
      <div class="dtc">Expense</div>
      <div class="dtc tr">Amount</div>
    </div>
    <div v-if="filteredExpenses.length > 0">
      <div v-for="(expense, idx) in filteredExpenses" :key="idx">
        <ExpenseListItem :expense="expense" />
      </div>
    </div>
    <div v-else>No Expenses</div>
  </div>
</template>

<script>
import { filterLists } from '@/utils'
import ExpenseListItem from '@/components/Expenses/ExpenseListItem.vue'

export default {
  components: {
    ExpenseListItem
  },
  computed: {
    filteredExpenses() {
      const expenses = this.$store.state.expenses.expenses
      const filters = this.$store.state.listFilters
      return filterLists(expenses, filters)
    }
  }
}
</script>

<style lang="scss" scoped></style>
