import { totals } from './calculateTotal'

export const balance = expenses => {
  const expensesTotal = totals(expenses)
  return expensesTotal
}
