import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    //State inputs
    const [input, setInput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    //Change the title on change
    const titleChangeHandler = (event) => {
        setInput((prevState) => {
            return {...prevState, title: event.target.value}
        });
    };

    //Change the amount on change
    const amountChangeHandler = (event) => {
        setInput((prevState) => {
            return {...prevState, amount: event.target.value}
        });
    };

    //Change the date on change
    const dateChangeHandler = (event) => {
        setInput((prevState) => {
            return {...prevState, date: event.target.value}
        });
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={input.title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" min="0.01" step="0.01" onChange={amountChangeHandler} value={input.amount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler} value={input.date} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;