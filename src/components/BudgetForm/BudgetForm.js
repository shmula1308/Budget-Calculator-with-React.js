import React from "react";
import styles from "./BudgetForm.module.css";
import Button from "./Button";

const BudgetForm = (props) => {
  return (
    <div>
      <form>
        <div className={`${styles["form-controls"]}`}>
          <div className={`${styles["form-control"]}`}>
            <label htmlFor="expense">Expense</label>
            <input type="text" id="expense" placeholder="e.g rent" />
          </div>
          <div className={`${styles["form-control"]}`}>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" placeholder="e.g 100" />
          </div>
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default BudgetForm;
