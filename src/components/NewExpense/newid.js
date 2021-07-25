let lastID = 5

const newid = (prefix = 'e') => {
  lastID++
  return `${lastID}${prefix}`
}
export default newid
