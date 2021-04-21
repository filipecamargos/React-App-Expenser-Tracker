import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //State inputs
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //Change the title on change
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  //Change the amount on change
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  //Change the date on change
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  //Handle the form submit
  const submitHandler = (event) => {
    event.preventDefault();

    //set a object with the entered data
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    //passed the data to the parent
    props.onSaveExpenseData(expenseData);

    //Set the values in the input to empty
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
