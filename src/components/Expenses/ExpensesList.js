import React from "react";
import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <ul className={`${styles["expenses-list"]}`}>
      <ExpenseItem />
    </ul>
  );
};

export default ExpensesList;
