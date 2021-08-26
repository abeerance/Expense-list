/* eslint-disable */

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Cards';
import App from '../App';

const Expenses = (props) => {
    {/* Expenses */}
    return(
        <Card className="expenses">
            {/* Epxense Items */}
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
    );
}

export default Expenses;