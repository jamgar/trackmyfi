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
        class="f6 link dim ba bw1 ph3 pv2 mb2 dib dark-green"
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
import Alert from '@/components/Alert'

export default {
  components: {
    Datepicker,
    Alert
  },
  props: ['expense'],
  data() {
    return {
      errors: []
    }
  },
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
        return this.expense.amount !== 0 ? this.expense.amount : ''
      },
      set(amount) {
        // if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.$store.commit('expenses/updateAmount', amount)
        // }
      }
    },
    createdAt: {
      get() {
        return this.expense.createdAt !== 0
          ? this.expense.createdAt
          : new Date()
      },
      set(createdAt) {
        this.$store.commit('expenses/updateCreatedAt', Date.parse(createdAt))
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
    if (this.$route.params.id) {
      this.$store.commit('expenses/setId', this.expense.id)
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
      if (!this.amount || !this.amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.errors.push('Amount requires a valid number')
      }
      return !this.errors.length
    }
  }
}
</script>

<style lang="scss" scoped></style>
