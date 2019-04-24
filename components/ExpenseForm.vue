<template>
  <div id="expense-form">
    <form>
      <input
        id="description"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        type="text"
        placeholder="Description"
      />
      <input
        id="amount"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        type="text"
        placeholder="Amount"
      />
      <input
        id="date"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        type="text"
        placeholder="Date"
      />
      <textarea
        id="note"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        placeholder="Add a note (optional)"
        cols="30"
        rows="10"
      ></textarea>
      <button type="button" @click="handleSubmit">Save This</button>
      <a href="#" class="f6 link dim ba bw1 ph3 pv2 mb2 dib dark-green"
        >Save Expense</a
      >
      <nuxt-link
        class="f6 link dim ba bw1 ph3 pv2 mb2 dib mid-gray"
        to="/expenses"
        >Cancel</nuxt-link
      >
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      console.log('clicked')
      this.$emit('saveExpense')
    }
  }
}
</script>

<style lang="scss" scoped></style>
