<template>
  <div>
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">Expenses</h1>
    </div>
    <div class="ph4 ph5-m ph6-l">
      <ExpenseList />
    </div>
  </div>
</template>

<script>
import ExpenseList from '@/components/ExpenseList.vue'

export default {
  components: {
    ExpenseList
  }
}
</script>

<style lang="scss" scoped></style>
