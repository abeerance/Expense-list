import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    // useState for isEditing and function setIsEditing. Initial state of setIsEditing = false
    const [isEditing, setIsEditing] = useState(false);

    // Handler when save and adding new expense
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    // Handler if user is adding a new expense
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    // Handler if user cancels adding a new expense
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {/* Check isEdditing is false */}
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {/* Check isEditing is true | Custom prop "function" to forward data to App.js -> pointer */}
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
