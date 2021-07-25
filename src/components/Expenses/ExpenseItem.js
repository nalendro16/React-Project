import ExpnDate from './ExpnDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  const expAmount = props.amount

  return (
    <li>
      <Card className="expense-item">
        <ExpnDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{expAmount}</div>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem
