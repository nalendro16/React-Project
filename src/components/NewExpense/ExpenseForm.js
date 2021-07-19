import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
  const [entTitle, setEntTitle] = useState('')
  const [entAmount, setEntAmount] = useState('')
  const [entDate, setEntDate] = useState('')

  const titleChange = (e) => {
    setEntTitle(e.target.value)
  }
  const amountChange = (e) => {
    setEntAmount(e.target.value)
  }
  const dateChange = (e) => {
    setEntDate(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault()
    const expenseData = {
      title: entTitle,
      amount: entAmount,
      date: new Date(entDate),
    }
    props.onSaveExpenseData(expenseData)
    setEntTitle('')
    setEntAmount('')
    setEntDate('')
  }

  return (
    <form onSubmit={submitHandle}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value={entTitle} onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entAmount}
            onChange={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entDate}
            onChange={dateChange}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
