import './NewExpense.css'
import Form from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expnseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    }
    props.onAddExpense(expnseData)
  }
  return (
    <div className="new-expense">
      <Form onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
