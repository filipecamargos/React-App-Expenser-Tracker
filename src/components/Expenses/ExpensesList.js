import ExpenseItem from './ExpenseItem';

import "./ExpensesList.css";

const ExpensesList = (props) => {
  //handle the expense content based on logic
  let expenseContent = <p>No Expenses Found!</p>;


  return (
        <ul className="expenses-list">
        {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ))}
        </ul>
  );
};

export default ExpensesList;
