<template>
  <div id="edit-expense">
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">Edit Expense</h1>
    </div>
    <div class="ph4 ph5-m ph7-l">
      <ExpenseForm :expense="expense" @saveExpense="saveExpense" />
    </div>
  </div>
</template>

<script>
import ExpenseForm from '@/components/Expenses/ExpenseForm.vue'

export default {
  components: {
    ExpenseForm
  },
  computed: {
    expense() {
      return this.$store.state.expenses.expense
    },
    path() {
      return `/expenses/edit/${this.$route.params.id}`
    }
  },
  fetch({ params, store }) {
    store.dispatch('expenses/setExpense', params.id)
  },
  methods: {
    saveExpense() {
      this.$store
        .dispatch('expenses/updateExpense', this.$store.state.expenses.expense)
        .then(() => {
          this.$store.dispatch('expenses/resetExpense')
        })
      this.$router.push('/expenses')
    }
  }
}
</script>

<style lang="scss" scoped></style>
