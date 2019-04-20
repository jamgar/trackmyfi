<template>
  <div id="add-expense">
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">Add Expense</h1>
    </div>
    <div class="ph4 ph5-m ph7-l">
      <ExpenseForm />
    </div>
  </div>
</template>

<script>
import ExpenseForm from '@/components/ExpenseForm.vue'

export default {
  components: {
    ExpenseForm
  }
}
</script>

<style lang="scss" scoped></style>
