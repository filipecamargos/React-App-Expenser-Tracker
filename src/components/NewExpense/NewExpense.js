import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    const saveExpenseDataHandler = (passedExpenseData) => {
        const expenseData = {
            ...passedExpenseData,
            id: Math.random().toString()
        };
        console.loge(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm 
                onSaveExpenseData
            />
        </div>
    );
};

export default NewExpense;