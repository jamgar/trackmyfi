import moment from 'moment'
import { totals } from './calculateTotal'

export const monthlyTotal = (data, month, year) => {
  const date = new Date(`${year}-${month}-01`)
  const filteredMonth = data.filter(item => {
    return moment(item.createdAt).isSame(date, 'month')
  })
  return totals(filteredMonth)
}
