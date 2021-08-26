/* eslint-disable */

import ExpenseDate from './ExpenseDate';
import Expenses from './Expenses';
import Card from './Cards';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
    {/* HTML Boilerplate for the design / multiple components example! */}
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount} CHF</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
