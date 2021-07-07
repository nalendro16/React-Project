import ExpnDate from './ExpnDate'
import './ExpenseItem.css'
import Card from './Card'

function ExpenseItem(props) {
  const expnTitle = props.title
  const expAmount = props.amount
  return (
    <Card className="expense-item">
      <ExpnDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expnTitle}</h2>
        <div className="expense-item__price">{expAmount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
