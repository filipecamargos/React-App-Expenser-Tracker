import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //state to handle if the form should be shown
  const [isEditing, setIsEditing] = useState(false);

  //handles the to save the new expensed added by the user
  const saveExpenseDataHandler = (passedExpenseData) => {
    const expenseData = {
      ...passedExpenseData,
      id: Math.random().toString(),
    };

    //Call the add Expense to add to the list
    props.onAddExpense(expenseData);

    setIsEditing(false);
  };

  //Activate the editing mode
  const startEditngHandler = () => {
    setIsEditing(true);
  };

  //Deactivate the editing mode
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditngHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
