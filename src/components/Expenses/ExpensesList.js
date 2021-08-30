import React from "react";

import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
    // Conditional query if filteredExpenses is NOT empty. Initial state = P-Tag. If NOT empty, then render ExpenseItem - Clean JSX tag
    if(props.items.length === 0){
        return(<h2 className="expenses-list__fallback">Found no expenses</h2>)
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
        </ul>
    )
}

export default ExpensesList