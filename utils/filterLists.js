// import moment from 'moment'

export const filterLists = (items, { text }) => {
  return items.filter(item => {
    const textMatch = item.description
      .toLowerCase()
      .includes(text.toLowerCase())

    return textMatch
  })
}
