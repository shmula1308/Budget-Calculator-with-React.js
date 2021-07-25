import React from "react";
import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <ul className={`${styles["expenses-list"]}`}>
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            id={expense.id}
            onEditExpense={props.onEditExpense}
            onDeleteExpense={props.onDeleteExpense}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
