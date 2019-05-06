export const totals = items =>
  items.map(item => item.amount).reduce((total, amount) => total + amount, 0)
