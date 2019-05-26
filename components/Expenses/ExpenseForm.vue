<template>
  <div id="expense-form">
    <Alert v-if="errors.length" :messages="errors" :message-type="'danger'" />
    <form>
      <input
        id="description"
        v-model="description"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        type="text"
        placeholder="Description"
      />
      <select
        id="category"
        v-model="category"
        name="category"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
      >
        <option value disabled selected>Category</option>
        <option v-for="(item, idx) in categories" :key="item" :value="idx">{{
          item
        }}</option>
      </select>
      <input
        id="amount"
        v-model="amount"
        class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
        type="text"
        placeholder="Amount"
      />
      <Datepicker
        id="date"
        v-model="createdAt"
        wrapper-class="mb3"
        input-class="f4 pa2 input-reset ba w-100 b--moon-gray"
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
        class="f6 dim ba bw1 ph3 pv2 mb2 dib dark-green"
        @click.prevent="handleSubmit"
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
import Datepicker from 'vuejs-datepicker'
import Alert from '@/components/Shared/Alert'

export default {
  components: {
    Datepicker,
    Alert
  },
  data() {
    return {
      errors: []
    }
  },
  computed: {
    description: {
      get() {
        return this.$store.state.expenses.expense.description
      },
      set(description) {
        this.$store.commit('expenses/updateDescription', description)
      }
    },
    category: {
      get() {
        return this.$store.state.expenses.expense.category
      },
      set(category) {
        this.$store.commit('expenses/updateCategory', category)
      }
    },
    amount: {
      get() {
        return this.$store.state.expenses.expense.amount
          ? (this.$store.state.expenses.expense.amount / 100).toString()
          : ''
      },
      set(amount) {
        this.$store.commit('expenses/updateAmount', parseFloat(amount) * 100)
      }
    },
    createdAt: {
      get() {
        return this.$store.state.expenses.expense.createdAt
      },
      set(createdAt) {
        const expenseDate = createdAt !== 0 ? Date.parse(createdAt) : Date.now()
        this.$store.commit('expenses/updateCreatedAt', expenseDate)
      }
    },
    note: {
      get() {
        return this.$store.state.expenses.expense.note
      },
      set(note) {
        this.$store.commit('expenses/updateNote', note)
      }
    },
    categories() {
      return this.$store.state.expenses.categories
    }
  },
  created() {
    if (this.$route.params.id) {
      this.$store.commit('expenses/setId', this.$route.params.id)
    } else {
      this.$store.commit('expenses/resetExpense')
    }
  },
  methods: {
    handleSubmit() {
      this.errors = []
      if (this.validateInputs()) {
        this.$emit('saveExpense')
      }
    },
    validateInputs() {
      if (!this.description) {
        this.errors.push('Description is required.')
      }
      if (this.category < 0 || !this.category) {
        this.errors.push('Category is required')
      }
      if (!this.amount || !this.amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.errors.push('Amount requires a valid number')
      }
      if (this.createdAt === 0) {
        this.errors.push('Date is required.')
      }
      return !this.errors.length
    }
  }
}
</script>

<style lang="scss" scoped></style>
