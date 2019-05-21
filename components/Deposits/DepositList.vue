<template>
  <div id="deposit-list">
    <div class="f4 mid-gray ba b--moon-gray bg-light-gray mv0 pa3 dt w-100">
      <div class="dtc">Deposit</div>
      <div class="dtc tr">Amount</div>
    </div>
    <div v-if="filteredDeposits.length > 0">
      <div v-for="(deposit, idx) in filteredDeposits" :key="idx">
        <DepositListItem :deposit="deposit" />
      </div>
    </div>
    <div v-else>No Deposits</div>
  </div>
</template>

<script>
import { filterLists } from '@/utils'
import DepositListItem from '@/components/Deposits/DepositListItem.vue'

export default {
  components: {
    DepositListItem
  },
  computed: {
    filteredDeposits() {
      const deposits = this.$store.state.deposits.deposits
      const filters = this.$store.state.listFilters
      return filterLists(deposits, filters)
    }
  }
}
</script>

<style lang="scss" scoped></style>
