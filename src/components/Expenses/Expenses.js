import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import { useState } from 'react'
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021')
  const selectYear = (saveSelectYear) => {
    console.log('updated year ' + saveSelectYear)
    setFilteredYear(saveSelectYear)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={selectYear} onSelectedYear={filteredYear} />
      {props.item.map((extract) => (
        <ExpenseItem
          key={extract.id}
          title={extract.title}
          amount={extract.amount}
          date={extract.date}
        />
      ))}
    </Card>
  )
}
export default Expenses
