<template>
  <div id="add-expense">
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">Add Expense</h1>
    </div>
    <div class="ph4 ph5-m ph7-l">
      <ExpenseForm @saveExpense="saveExpense" />
    </div>
  </div>
</template>

<script>
import ExpenseForm from '@/components/Expenses/ExpenseForm.vue'

export default {
  layout: 'protected',
  components: {
    ExpenseForm
  },
  mounted() {
    this.$store.dispatch('expenses/resetExpense')
  },
  methods: {
    saveExpense() {
      this.$store
        .dispatch('expenses/addExpense', this.$store.state.expenses.expense)
        .then(() => {
          this.$store.dispatch('expenses/resetExpense')
        })
      this.$router.push('/expenses')
    }
  }
}
</script>

<style lang="scss" scoped></style>
