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
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      />
    </Card>
  )
}
export default Expenses
