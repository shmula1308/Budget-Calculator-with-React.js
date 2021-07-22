import React from "react";
import styles from "./ExpenseItem.module.css";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ExpenseItem = (props) => {
  return (
    <li className={`${styles["expense-item"]}`}>
      <div className={`${styles["expense-title"]}`}>Rent</div>
      <div className={`${styles["expense-amount"]}`}>$1000</div>
      <div className={`${styles["expense-controls"]}`}>
        <span>
          <FaPencilAlt className={styles.icon} />
        </span>
        <span>
          <FaTrash className={styles.icon} />
        </span>
      </div>
    </li>
  );
};

export default ExpenseItem;
