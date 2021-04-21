import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  //Update the filtered state
  const filterHandler = (enteredDate) => {
    setFilteredYear(enteredDate);
  };

  //Filter the data based on the year
  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  //handle the expense content based on the logic
  let expenseContent = <p>No Expenses Found!</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterDateSelected={filterHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
