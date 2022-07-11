import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2>Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense, index) => {
        console.log(expense);

        return (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
