import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  //Update the filtered state
  const filterHandler = (enteredDate) => {
    setFilteredYear(enteredDate);
  };

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilterDateSelected={filterHandler} />
      {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
      ))}
     </Card>
    </div>
  );
};

export default Expenses;
