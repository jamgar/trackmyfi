<template>
  <div>
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">Deposits</h1>
    </div>
    <div class="ph4 ph5-m ph6-l">
      <nuxt-link
        class="f6 link dim ba bw1 ph3 pv2 mb3 dib blue"
        to="/deposits/new"
        >Add Deposit</nuxt-link
      >
      <DepositList />
    </div>
  </div>
</template>

<script>
import DepositList from '@/components/Deposits/DepositList.vue'

export default {
  components: {
    DepositList
  }
}
</script>

<style lang="scss" scoped></style>
