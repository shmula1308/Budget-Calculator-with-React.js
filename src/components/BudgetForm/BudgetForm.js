import React, { useState } from "react";
import styles from "./BudgetForm.module.css";
import Button from "./Button";
import Alert from "../UserAlert/Alert";

const BudgetForm = (props) => {
  const [enteredExpense, setEnteredExpense] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [alert, setAlert] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredExpense.trim().length === 0) {
      setAlert({ message: "Item not added", success: false });

      setTimeout(() => {
        setAlert("");
      }, 3000);
      return;
    }

    if (+enteredAmount < 1) {
      setAlert({ message: "Item not added", success: false });

      setTimeout(() => {
        setAlert("");
      }, 3000);

      return;
    }

    const expenseItem = {
      title: enteredExpense,
      amount: enteredAmount,
      id: Date.now().toString(),
    };
    props.onNewExpenseAdded(expenseItem);
    setAlert({ message: "Item added", success: true });

    setTimeout(() => {
      setAlert("");
    }, 3000);

    setEnteredExpense("");
    setEnteredAmount("");
  };

  const onChangeExpenseHandler = (event) => {
    setEnteredExpense(event.target.value);
  };
  const onChangeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  return (
    <div>
      {alert && <Alert error={alert.success}>{alert.message}</Alert>}
      <form onSubmit={onSubmitHandler}>
        <div className={`${styles["form-controls"]}`}>
          <div className={`${styles["form-control"]}`}>
            <label htmlFor="expense">Expense</label>
            <input
              type="text"
              id="expense"
              placeholder="e.g rent"
              value={enteredExpense}
              onChange={onChangeExpenseHandler}
            />
          </div>
          <div className={`${styles["form-control"]}`}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              placeholder="e.g 100"
              value={enteredAmount}
              onChange={onChangeAmountHandler}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default BudgetForm;
