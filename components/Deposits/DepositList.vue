<template>
  <div id="deposit-list">
    <div class="f4 mid-gray ba b--moon-gray bg-light-gray mv0 pa3 dt w-100">
      <div class="dtc">Deposit</div>
      <div class="dtc tr">Amount</div>
    </div>
    <div v-if="deposits.length > 0">
      <div v-for="(deposit, idx) in deposits" :key="idx">
        <DepositListItem :deposit="deposit" />
      </div>
    </div>
    <div v-else>No Deposits</div>
  </div>
</template>

<script>
import DepositListItem from '@/components/Deposits/DepositListItem.vue'

export default {
  components: {
    DepositListItem
  },
  computed: {
    deposits() {
      return this.$store.state.deposits.deposits
    }
  }
}
</script>

<style lang="scss" scoped></style>
