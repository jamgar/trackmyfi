<template>
  <div id="add-expense">
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">Add Expense</h1>
    </div>
    <div class="ph4 ph5-m ph7-l">
      <ExpenseForm :expense="expense" @saveExpense="saveExpense" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ExpenseForm from '@/components/ExpenseForm.vue'

export default {
  components: {
    ExpenseForm
  },
  computed: {
    ...mapGetters({
      expense: 'expenses/getExpense'
    })
  },
  methods: {
    saveExpense() {
      if (!this.$store.state.expenses.isEditing) {
        console.log('new expense', this.$store.state.expenses.expense)
        this.$store
          .dispatch('expenses/addExpense', this.$store.state.expenses.expense)
          .then(() => {
            this.$store.state.dispatch('expenses/setExpense')
          })
      }
      this.$router.push('/expenses')
    }
  }
}
</script>

<style lang="scss" scoped></style>
