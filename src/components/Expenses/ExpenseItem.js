import React from "react";
import styles from "./ExpenseItem.module.css";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ExpenseItem = (props) => {
  // const onEditHandler = () => {
  //   props.onEditExpense(props.id);
  // };

  const onDeleteHandler = () => {
    props.onDeleteExpense(props.id);
  };
  return (
    <li className={`${styles["expense-item"]}`} id={props.id}>
      <div className={`${styles["expense-title"]}`}>{props.title}</div>
      <div className={`${styles["expense-amount"]}`}>{"$" + props.amount}</div>
      <div className={`${styles["expense-controls"]}`}>
        <span>
          <FaPencilAlt className={styles.icon} />
        </span>
        <span onClick={onDeleteHandler} id="delete">
          <FaTrash className={styles.icon} />
        </span>
      </div>
    </li>
  );
};

export default ExpenseItem;
