import './ExpenseItem.css'

function ExpenseItem(props) {
  const expnDate = props.date
  const expnTitle = props.title
  const expAmount = props.amount

  return (
    <div className="expense-item">
      <div>
        <div>{props.date.toLocaleString('en-US', { month: 'long' })}</div>
        <div>Year</div>
        <div>Date</div>
      </div>
      <div className="expense-item__description">
        <h2>{expnTitle}</h2>
        <div className="expense-item__price">{expAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
