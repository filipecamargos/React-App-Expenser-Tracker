import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredDate, setFilteredDate] = useState();

  //Update the filtered state
  const filterHandler = (enteredDate) => {
    setFilteredDate(enteredDate);
    console.log(enteredDate);
  };

  return (
    <div>
      <ExpensesFilter onFilterDateSelected={filterHandler} />
      {props.items.map((expense) => (
        <Card className="expenses">
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        </Card>
      ))}
    </div>
  );
};

export default Expenses;
