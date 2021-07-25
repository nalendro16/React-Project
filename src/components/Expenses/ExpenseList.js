import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = (props) => {
  if (props.sendProps.length === 0) {
    return <h2 className="expenses-list__fallback">Not found</h2>
  }
  return (
    <ul className="expenses-list">
      {props.sendProps.map((extract) => (
        <ExpenseItem
          key={extract.id}
          title={extract.title}
          amount={extract.amount}
          date={extract.date}
        />
      ))}
    </ul>
  )
}

export default ExpenseList
