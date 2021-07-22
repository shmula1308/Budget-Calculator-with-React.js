import React from "react";
import styles from "./Total.module.css";

const Total = (props) => {
  return (
    <div className={styles.total}>
      <div className={`${styles["total-label"]}`}>Total Spending :</div>
      <div className={`${styles["total-amount"]}`}>$2000</div>
    </div>
  );
};

export default Total;
