<template>
  <div>
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">
        Current Balance:
        <span :class="colorText">{{ formattedBalance }}</span>
      </h1>
    </div>
    <div class="ph4 ph5-m ph6-l">
      <div class="center hidden br2 ba mv4 b--black-10 shadow-5">
        <h1 class="f4 bg-dark-gray near-white mv0 pv2 ph3 br2 br--top">
          Annual Overview
        </h1>
        <div class="pa3 bt">
          <BarChart
            class="f6 f5-ns lh-copy mv0"
            :chart-data="barDataCollection"
            :options="options"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dinero from 'dinero.js'
import { balance, monthlyTotal } from '@/utils'
import BarChart from '@/components/Charts/BarChart'

export default {
  layout: 'protected',
  components: {
    BarChart
  },
  data() {
    return {
      barDataCollection: null,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    formattedBalance() {
      return dinero({ amount: this.currentBalance }).toFormat()
    },
    colorText() {
      return {
        'light-red': this.currentBalance < 0
      }
    },
    currentBalance() {
      const expenses = this.$store.state.expenses.expenses
      const deposits = this.$store.state.deposits.deposits
      return balance(expenses, deposits)
    }
  },
  mounted() {
    this.$store.dispatch('expenses/getExpenses')
    this.$store.dispatch('deposits/getDeposits')
    this.fillData()
  },
  methods: {
    fillData() {
      const expenses = this.$store.state.expenses.expenses
      const deposits = this.$store.state.deposits.deposits
      const expenseTotals = this.getMonthlyTotals(expenses)
      const depositTotals = this.getMonthlyTotals(deposits)

      this.barDataCollection = {
        labels: [
          'JAN',
          'FEB',
          'MAR',
          'APR',
          'MAY',
          'JUN',
          'JUL',
          'AUG',
          'SEP',
          'OCT',
          'NOV',
          'DEC'
        ],
        datasets: [
          {
            label: 'Deposits',
            backgroundColor: '#A5CC82',
            data: depositTotals
          },
          {
            label: 'Expenses',
            backgroundColor: '#F87979',
            data: expenseTotals
          }
        ]
      }
    },
    getMonthlyTotals(data) {
      const months = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
      ]
      const year = new Date().getFullYear()

      return months.map(month => {
        return monthlyTotal(data, month, year) / 100
      })
    }
  }
}
</script>

<style></style>
