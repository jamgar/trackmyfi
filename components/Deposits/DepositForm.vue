<template>
  <div id="deposit-form">
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
        class="f6 dim ba bw1 ph3 pv2 mb2 dib dark-green"
        @click.prevent="handleSubmit"
      >
        Save Deposit
      </button>
      <nuxt-link
        class="f6 link dim ba bw1 ph3 pv2 mb2 dib mid-gray"
        to="/deposits"
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
  props: {
    deposit: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      errors: []
    }
  },
  computed: {
    description: {
      get() {
        return this.deposit.description
      },
      set(description) {
        this.$store.commit('deposits/updateDescription', description)
      }
    },
    amount: {
      get() {
        return this.deposit.amount ? (this.deposit.amount / 100).toString() : ''
      },
      set(amount) {
        this.$store.commit('deposits/updateAmount', parseFloat(amount) * 100)
      }
    },
    createdAt: {
      get() {
        return this.deposit.createdAt
      },
      set(createdAt) {
        const depositDate = createdAt !== 0 ? Date.parse(createdAt) : Date.now()
        this.$store.commit('deposits/updateCreatedAt', depositDate)
      }
    },
    note: {
      get() {
        return this.deposit.note
      },
      set(note) {
        this.$store.commit('deposits/updateNote', note)
      }
    }
  },
  created() {
    if (this.$route.params.id) {
      this.$store.commit('deposits/setId', this.deposit.id)
    } else {
      this.$store.commit('deposits/resetDeposit')
    }
  },
  methods: {
    handleSubmit() {
      this.errors = []
      if (this.validateInputs()) {
        this.$emit('saveDeposit')
      }
    },
    validateInputs() {
      if (!this.description) {
        this.errors.push('Description is required.')
      }
      if (!this.amount || !this.amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.errors.push('Amount requires a valid number.')
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
