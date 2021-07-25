import './NewExpense.css'
import Form from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expnseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random.toString()),
    }
    console.log(expnseData.id)
    props.onAddExpense(expnseData)
  }
  const [isSetNew, setNew] = useState(false)

  const addNew = () => {
    setNew(true)
  }

  const cancelEdit = () => {
    setNew(false)
  }

  return (
    <div className="new-expense">
      {!isSetNew && <button onClick={addNew}>Add New Expense</button>}
      {isSetNew && (
        <Form
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEdit}
        />
      )}
    </div>
  )
}

export default NewExpense
