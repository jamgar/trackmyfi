<template>
  <div id="expense-form">
    <form>
      <input
        id="description"
        v-model="description"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        type="text"
        placeholder="Description"
      />
      <input
        id="amount"
        v-model="amount"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        type="text"
        placeholder="Amount"
      />
      <input
        id="date"
        v-model="createdAt"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        type="text"
        placeholder="Date"
      />
      <textarea
        id="note"
        v-model="note"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        placeholder="Add a note (optional)"
        cols="30"
        rows="10"
      ></textarea>
      <button
        class="f6 link dim ba bw1 ph3 pv2 mb2 dib dark-green"
        @click="handleSubmit"
      >
        Save Expense
      </button>
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
  props: ['expense'],
  computed: {
    description: {
      get() {
        return this.expense.description
      },
      set(description) {
        this.$store.commit('expenses/updateDescription', description)
      }
    },
    amount: {
      get() {
        return this.expense.amount
      },
      set(amount) {
        this.$store.commit('expenses/updateAmount', parseInt(amount))
      }
    },
    createdAt: {
      get() {
        return this.expense.createdAt
      },
      set(createdAt) {
        this.$store.commit('expenses/updateCreatedAt', parseInt(createdAt))
      }
    },
    note: {
      get() {
        return this.expense.note
      },
      set(note) {
        this.$store.commit('expenses/updateNote', note)
      }
    }
  },
  created() {
    this.$store.commit('expenses/setId', this.expense.id)
  },
  methods: {
    handleSubmit() {
      this.$emit('saveExpense')
    }
  }
}
</script>

<style lang="scss" scoped></style>
