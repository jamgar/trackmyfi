import { totals } from './calculateTotal'

export const balance = (expenses, deposits) => {
  const expensesTotal = totals(expenses)
  const depositsTotal = totals(deposits)
  return depositsTotal - expensesTotal
}
