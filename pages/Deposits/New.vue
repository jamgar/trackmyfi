<template>
  <div id="add-deposit">
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">Add Deposit</h1>
    </div>
    <div class="ph4 ph5-m ph7-l">
      <DepositForm :deposit="deposit" @saveDeposit="saveDeposit" />
    </div>
  </div>
</template>

<script>
import DepositForm from '@/components/Deposits/DepositForm.vue'

export default {
  layout: 'protected',
  components: {
    DepositForm
  },
  computed: {
    deposit() {
      return this.$store.state.deposits.deposit
    }
  },
  methods: {
    saveDeposit() {
      this.$store
        .dispatch('deposits/addDeposit', this.$store.state.deposits.deposit)
        .then(() => {
          this.$store.dispatch('deposits/resetDeposit')
        })
      this.$router.push('/deposits')
    }
  }
}
</script>

<style lang="scss" scoped></style>
