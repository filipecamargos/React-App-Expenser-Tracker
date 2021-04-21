import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";


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

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterDateSelected={filterHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
  );
};

export default Expenses;
