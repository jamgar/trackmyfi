<template>
  <div id="expense">
    <div class="ph4 ph5-m ph7-l mt4">
      <div
        class="f4 fw6 mid-gray ba b--moon-gray bg-light-gray mv0 pa3 dt w-100"
      >
        <div class="dtc">
          <div>{{ expense.description }}</div>
          <span class="f6 fw4 gray">Date: {{ expense.createdAt }}</span>
        </div>
        <div class="dtc tr v-mid">Amount ${{ expense.amount }}</div>
      </div>
      <div class="f4 bb bl br b--moon-gray mv0 pa3 dt w-100">
        <p>{{ expense.note }}</p>
      </div>
      <nuxt-link class="f6 link dim ba bw1 ph3 pv2 mt2 dib blue" :to="path"
        >Edit</nuxt-link
      >
      <nuxt-link
        class="f6 link dim ba bw1 ph3 pv2 mb2 dib mid-gray"
        to="/expenses"
        >Cancel</nuxt-link
      >
      <button class="f6 dim ba bw1 ph3 pv2 mb2 dib red" @click="handleDelete">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    expense() {
      return this.$store.state.expenses.expense
    },
    path() {
      return `/expenses/edit/${this.$route.params.id}`
    }
  },
  fetch({ params, store }) {
    store.dispatch('expenses/setExpense', params.id)
  },
  methods: {
    handleDelete() {
      this.$store.dispatch('expenses/deleteExpense', this.expense.id)
      this.$router.push('/expenses')
    }
  }
}
</script>

<style lang="scss" scoped></style>
