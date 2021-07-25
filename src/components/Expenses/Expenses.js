import ExpenseList from './ExpenseList'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import { useState } from 'react'
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const selectYear = (saveSelectYear) => {
    setFilteredYear(saveSelectYear)
  }

  const filterExpenses = props.item.filter((newData) => {
    return newData.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={selectYear} onSelectedYear={filteredYear} />
      <ExpenseList sendProps={filterExpenses} />
    </Card>
  )
}
export default Expenses
