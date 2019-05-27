<template>
  <div>
    <div class="pa3 mb4 bg-light-gray">
      <h1 class="fw4 tc">
        Current Balance:
        <span :class="colorText">{{ formattedBalance }}</span>
      </h1>
    </div>
    <div class="flex">
      <div class="w-50 pa2">
        <div class="center hidden br2 ba mv4 b--black-10 shadow-5">
          <h1 class="f4 bg-dark-gray near-white mv0 pv2 ph3 br2 br--top">
            Month Deposits
          </h1>
          <div class="pa3 bt">
            <PieChart
              class="f6 f5-ns lh-copy mv0"
              :chart-data="depositPieDataCollection"
              :options="options"
            />
          </div>
        </div>
      </div>
      <div class="w-50 pa2">
        <div class="center hidden br2 ba mv4 b--black-10 shadow-5">
          <h1 class="f4 bg-dark-gray near-white mv0 pv2 ph3 br2 br--top">
            Month Expenses
          </h1>
          <div class="pa3 bt">
            <PieChart
              class="f6 f5-ns lh-copy mv0"
              :chart-data="expensePieDataCollection"
              :options="options"
            />
          </div>
        </div>
      </div>
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
import { balance, monthlyTotal, filterDataByMonth, totals } from '@/utils'
import BarChart from '@/components/Charts/BarChart'
import PieChart from '@/components/Charts/PieChart'

export default {
  layout: 'protected',
  components: {
    BarChart,
    PieChart
  },
  data() {
    return {
      barDataCollection: null,
      depositPieDataCollection: null,
      expensePieDataCollection: null,
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
  fetch({ store }) {
    store.dispatch('expenses/getExpenses')
    store.dispatch('deposits/getDeposits')
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      const { expenses, categories: expCategories } = this.$store.state.expenses
      const { deposits, categories: depCategories } = this.$store.state.deposits
      // BarChart
      const expenseTotals = this.getMonthlyTotals(expenses)
      const depositTotals = this.getMonthlyTotals(deposits)
      // PieChart
      const depositPieData = this.getPieData(deposits, depCategories)
      const expensePieData = this.getPieData(expenses, expCategories)

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
      this.depositPieDataCollection = {
        labels: depositPieData.labels,
        datasets: [
          {
            label: 'Current Month',
            data: depositPieData.data,
            backgroundColor: depositPieData.bgColors
          }
        ]
      }
      this.expensePieDataCollection = {
        labels: expensePieData.labels,
        datasets: [
          {
            label: 'Current Month',
            data: expensePieData.data,
            backgroundColor: expensePieData.bgColors
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
    },
    getPieData(items, categories) {
      const labels = []
      const data = []
      const bgColors = []
      const dateNow = new Date()
      const monthlyData = filterDataByMonth(
        items,
        dateNow.getMonth() + 1,
        dateNow.getFullYear()
      )
      categories.forEach(category => {
        const dataByCategory = monthlyData.filter(item => {
          return item.category === categories.indexOf(category)
        })
        if (dataByCategory.length > 0) {
          labels.push(category.label)
          data.push(totals(dataByCategory) / 100)
          bgColors.push(category.color)
        }
      })

      return {
        labels,
        data,
        bgColors
      }
    }
  }
}
</script>
