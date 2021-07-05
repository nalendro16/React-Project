import './ExpenseItem.css'

function ExpenseItem(props) {
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const year = props.date.getFullYear()

  const expnTitle = props.title
  const expAmount = props.amount

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expnTitle}</h2>
        <div className="expense-item__price">{expAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
