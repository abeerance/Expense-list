import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    /*
    * Multiple useState in a single useState
    & const [userInput, setUserInput] = useState({
    &   enteredTitle: "",
    &   enteredAmount: "",
    &   enteredDate: "",
    & });
    */

    // Function definitions
    // addEventListener is not needed anymore, since React creates an "event" object when an event occurs

    // Variable for title change
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        /*
        * Multiple useState in a single useState
        & setUserInput((prevState) => {
        ^    If the future state is dependant on the previous state, use this function form
        ^   Spread-operator so that the previous value from other objects are not lost with the help of an additional function
        &   return { ...prevState, enteredTitle: event.target.value };
        });
        */
    };

    // Variable for amount change
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        
        /* 
        * Multiple useState in a single useState
        & setUserInput((prevState) => {
        ^    Spread-operator so that the past value from other objects are not lost
        &    return { ...prevState, enteredAmount: event.target.value };
        & });
        */
    };

    // Variable for date change
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        
        /* 
        * Multiple useState in a single useState
        & setUserInput((prevState) => {
        ^    Spread-operator so that the past value from other objects are not lost
        &    return { ...prevState, enteredDate: event.target.value };
        & });
        */
    };

    // submitHandler function
    const submitHandler = (event) => {
        // prevent new loading of function
        event.preventDefault();

        // to updated values in an object
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        // Execute onSaveExpenseData from NewExpense.js with help of props to pass data to the parent (NewExpense.js)
        props.onSaveExpenseData(expenseData);
        // Resets the enterd value on a submit or refresh - VERY IMPORTANT when using forms
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
