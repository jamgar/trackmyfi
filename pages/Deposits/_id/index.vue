<template>
  <div id="deposit">
    <div class="ph4 ph5-m ph7-l mt4">
      <div
        class="f4 fw6 mid-gray ba b--moon-gray bg-light-gray mv0 pa3 dt w-100"
      >
        <div class="dtc">
          <div class="pb1">{{ deposit.description }}</div>
          <div class="f6 fw4 gray">Date: {{ formattedDate }}</div>
        </div>
        <div class="dtc">
          <div class="tr pb1">Amount {{ formattedAmount }}</div>
          <div class="tr f6 fw4 gray">
            Category: {{ categories[deposit.category].label }}
          </div>
        </div>
      </div>
      <div class="f4 bb bl br b--moon-gray mv0 pa3 dt w-100">
        <p>{{ deposit.note }}</p>
      </div>
      <nuxt-link class="f6 link dim ba bw1 ph3 pv2 mt2 dib blue" :to="path"
        >Edit</nuxt-link
      >
      <nuxt-link
        class="f6 link dim ba bw1 ph3 pv2 mb2 dib mid-gray"
        to="/deposits"
        >Cancel</nuxt-link
      >
      <button class="f6 dim ba bw1 ph3 pv2 mb2 dib red" @click="handleDelete">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import dinero from 'dinero.js'
import moment from 'moment'

export default {
  layout: 'protected',
  computed: {
    formattedDate() {
      return moment(this.deposit.createdAt).format('MMMM Do, YYYY')
    },
    formattedAmount() {
      const amount = this.deposit.amount ? this.deposit.amount : 0
      return dinero({ amount: parseInt(amount) }).toFormat('$0,0.00')
    },
    deposit() {
      return this.$store.state.deposits.deposit
    },
    path() {
      return `/deposits/edit/${this.$route.params.id}`
    },
    categories() {
      return this.$store.state.deposits.categories
    }
  },
  fetch({ params, store }) {
    store.dispatch('deposits/setDeposit', params.id)
  },
  methods: {
    handleDelete() {
      this.$store.dispatch('deposits/deleteDeposit', this.deposit.id)
      this.$router.push('/deposits')
    }
  }
}
</script>

<style lang="scss" scoped></style>
