import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'New T-shirt',
    amount: 40,
    date: new Date(2019, 5, 12),
  },
]
const App = () => {
  const [expenses, setExpenses] = useState(DUMY_DATA)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  )
}

export default App
