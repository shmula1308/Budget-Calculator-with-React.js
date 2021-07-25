import React from "react";
import styles from "./Total.module.css";

const Total = (props) => {
  const totalExpenses = props.items.reduce((a, b) => a + Number(b.amount), 0);
  return (
    <div className={styles.total}>
      <div className={`${styles["total-label"]}`}>Total Spending :</div>
      <div className={`${styles["total-amount"]}`}>{"$ " + totalExpenses}</div>
    </div>
  );
};

export default Total;
