import React, { useState, useEffect, useRef } from "react";
import styles from "./BudgetForm.module.css";
import Button from "./Button";
import Alert from "../UserAlert/Alert";

const BudgetForm = (props) => {
  const [enteredExpense, setEnteredExpense] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [alert, setAlert] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (props.itemToEdit) {
      setEnteredExpense(props.itemToEdit[0].title);
      setEnteredAmount(props.itemToEdit[0].amount);
      setIsEdit(true);
    }
  }, [props.itemToEdit]);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredExpense.trim().length === 0) {
      alertHandler({
        message: "Item was not added. Non-empty values",
        success: false,
      });
      return;
    }

    if (+enteredAmount < 1) {
      alertHandler({
        message: "Item was not added. Non-empty values",
        success: false,
      });
      return;
    }

    if (isEdit) {
      const expenseItem = {
        title: enteredExpense,
        amount: enteredAmount,
        id: props.itemToEdit[0].id,
      };
      props.onNewExpenseAdded(expenseItem);
      alertHandler({ message: "Item edited", success: true });

      setEnteredExpense("");
      setEnteredAmount("");
      return;
    }

    const expenseItem = {
      title: enteredExpense,
      amount: enteredAmount,
      id: Date.now().toString(),
    };

    props.onNewExpenseAdded(expenseItem);

    alertHandler({ message: "Item added", success: true });

    setEnteredExpense("");
    setEnteredAmount("");
  };

  const alertHandler = ({ message, success }) => {
    setAlert({ message, success });
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  const onChangeExpenseHandler = (event) => {
    setEnteredExpense(event.target.value);
  };
  const onChangeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  return (
    <React.Fragment>
      {alert && <Alert error={alert.success}>{alert.message}</Alert>}
      <form onSubmit={onSubmitHandler}>
        <div className={`${styles["form-controls"]}`}>
          <div className={`${styles["form-control"]}`}>
            <label htmlFor="expense">Expense</label>
            <input
              type="text"
              id="expense"
              placeholder="e.g rent"
              onChange={onChangeExpenseHandler}
              value={enteredExpense}
            />
          </div>
          <div className={`${styles["form-control"]}`}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              placeholder="e.g 100"
              onChange={onChangeAmountHandler}
              value={enteredAmount}
            />
          </div>
        </div>
        <Button type="submit">{isEdit ? "Edit item" : "Submit"}</Button>
      </form>
    </React.Fragment>
  );
};

export default BudgetForm;
