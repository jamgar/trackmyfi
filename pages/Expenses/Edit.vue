<template>
  <div id="edit-expense">
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">Edit Expense</h1>
    </div>
    <div class="ph4 ph5-m ph7-l">
      <ExpenseForm @saveExpense="updateExpense" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ExpenseForm from '@/components/ExpenseForm.vue'

export default {
  components: {
    ExpenseForm
  },
  methods: {
    ...mapActions({
      updateExpense: 'expenses/updateExpense'
    })
  }
}
</script>

<style lang="scss" scoped></style>
