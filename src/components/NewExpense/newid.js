let lastID = 5

export default (prefix = 'id') => {
  lastID++
  return lastID
}
