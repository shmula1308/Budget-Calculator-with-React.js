import React, { useState, useEffect, useRef } from "react";
import styles from "./BudgetForm.module.css";
import Button from "./Button";
import Alert from "../UserAlert/Alert";

const BudgetForm = (props) => {
  const [enteredExpense, setEnteredExpense] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [alert, setAlert] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const expenseInput = useRef();
  const amountInput = useRef();

  useEffect(() => {
    if (props.itemToEdit) {
      expenseInput.current.value = props.itemToEdit[0].title;
      amountInput.current.value = props.itemToEdit[0].amount;
      setIsEdit(true);
    }
  }, [props.itemToEdit]);

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

    if (isEdit) {
      console.log(props.itemToEdit);
      const expenseItem = {
        title: expenseInput.current.value,
        amount: amountInput.current.value,
        id: props.itemToEdit[0].id,
      };
      props.onNewExpenseAdded(expenseItem);
      setAlert({ message: "Item Edited", success: true });
      setIsEdit(false);
      expenseInput.current.value = "";
      amountInput.current.value = "";
      return;
    }

    const expenseItem = {
      title: expenseInput.current.value,
      amount: amountInput.current.value,
      id: Date.now().toString(),
    };
    props.onNewExpenseAdded(expenseItem);
    setAlert({ message: "Item added", success: true });

    setTimeout(() => {
      setAlert("");
    }, 3000);
    expenseInput.current.value = "";
    amountInput.current.value = "";
    // setEnteredExpense("");
    // setEnteredAmount("");
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
              ref={expenseInput}
            />
          </div>
          <div className={`${styles["form-control"]}`}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              placeholder="e.g 100"
              onChange={onChangeAmountHandler}
              ref={amountInput}
            />
          </div>
        </div>
        <Button type="submit">{isEdit ? "Edit item" : "Submit"}</Button>
      </form>
    </React.Fragment>
  );
};

export default BudgetForm;
