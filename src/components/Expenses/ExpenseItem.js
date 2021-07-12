import { useState } from 'react'

import ExpnDate from './ExpnDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  // const expnTitle = props.title
  const expAmount = props.amount

  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Update!')
    console.log(title)
  }

  return (
    <Card className="expense-item">
      <ExpnDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
