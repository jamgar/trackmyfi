<template>
  <div id="expense-list">
    <div class="f4 mid-gray ba b--moon-gray bg-light-gray mv0 pa3 dt w-100">
      <div class="dtc">Expense</div>
      <div class="dtc tr">Amount</div>
    </div>
    <div>
      <ExpenseListItem />
    </div>
  </div>
</template>

<script>
import ExpenseListItem from '@/components/ExpenseListItem.vue'

export default {
  components: {
    ExpenseListItem
  }
}
</script>

<style lang="scss" scoped></style>
