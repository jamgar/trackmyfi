<template>
  <div>
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">Expenses</h1>
    </div>
    <div class="ph4 ph5-m ph6-l">
      <nuxt-link
        class="f6 link dim ba bw1 ph3 pv2 mb3 dib blue"
        to="/expenses/new"
        >Add Expense</nuxt-link
      >
      <ListFilters placeholder="Search Expenses" />
      <ExpenseList />
    </div>
  </div>
</template>

<script>
import ListFilters from '@/components/Shared/ListFilters'
import ExpenseList from '@/components/Expenses/ExpenseList.vue'

export default {
  layout: 'protected',
  components: {
    ListFilters,
    ExpenseList
  }
}
</script>

<style lang="scss" scoped></style>
