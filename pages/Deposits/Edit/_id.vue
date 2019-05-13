<template>
  <div id="edit-deposit">
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">Edit Deposit</h1>
    </div>
    <div class="ph4 ph5-m ph7-l">
      <DepositForm :deposit="deposit" @saveDeposit="saveDeposit" />
    </div>
  </div>
</template>

<script>
import DepositForm from '@/components/Deposits/DepositForm'

export default {
  components: {
    DepositForm
  },
  computed: {
    deposit() {
      return this.$store.state.deposits.deposit
    },
    path() {
      return `/deposits/edit/${this.$route.params.id}`
    }
  },
  fetch({ params, store }) {
    store.dispatch('deposits/setDeposit', params.id)
  },
  methods: {
    saveDeposit() {
      this.$store
        .dispatch('deposits/updateDeposit', this.$store.state.deposits.deposit)
        .then(() => {
          this.$store.dispatch('deposits/resetDeposit')
        })
      this.$router.push('/deposits')
    }
  }
}
</script>

<style lang="scss" scoped></style>
