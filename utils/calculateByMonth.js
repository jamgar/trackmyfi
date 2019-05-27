import moment from 'moment'
import { totals } from './calculateTotal'

export const monthlyTotal = (data, month, year) => {
  const filteredMonth = filterDataByMonth(data, month, year)
  return totals(filteredMonth)
}

// may want to move a filters.js file
export const filterDataByMonth = (data, month, year) => {
  const date = new Date(`${year}-${month}-01`)
  return data.filter(item => {
    return moment(item.createdAt).isSame(date, 'month')
  })
}
