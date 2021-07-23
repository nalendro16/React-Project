import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import { useState } from 'react'
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const selectYear = (saveSelectYear) => {
    setFilteredYear(saveSelectYear)
    console.log(saveSelectYear)
  }

  const filterExpenses = props.item.filter((newData) => {
    return newData.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={selectYear} onSelectedYear={filteredYear} />
      {filterExpenses.length === 0 ? (
        <h2>Not found</h2>
      ) : (
        filterExpenses.map((extract) => (
          <ExpenseItem
            key={extract.id}
            title={extract.title}
            amount={extract.amount}
            date={extract.date}
          />
        ))
      )}
    </Card>
  )
}
export default Expenses
