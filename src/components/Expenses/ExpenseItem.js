// Different imports, useState for changing states
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Cards";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    // useState() REACT Hook
    // "title" is a pointer to the current state value of useState(props.title) and "setTitle" is a function
    const [title, setTitle] = useState(props.title);

    const clickHander = () => {
        setTitle("Updated");
    };

    // HTML Boilerplate for the design / multiple components example!
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount} CHF</div>
            </div>
            <button onClick={clickHander}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
