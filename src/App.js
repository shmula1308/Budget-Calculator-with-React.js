import React, { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/UI/Card";
import BudgetForm from "./components/BudgetForm/BudgetForm";
import ExpenseList from "./components/Expenses/ExpensesList";
import Button from "./components/BudgetForm/Button";
import Total from "./components/TotalSpending/Total";
import Alert from "./components/UserAlert/Alert";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  // const [itemToEdit, setItemToEdit] = useState("");
  const [alert, setAlert] = useState("");

  const newExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  const onClearExpensesHandler = (event) => {
    setExpenses([]);
  };

  // const onEditExpenseHandler = (itemsId) => {
  //   const expenseToEdit = expenses.filter((expense) => expense.id === itemsId);
  //   console.log("app.js", expenseToEdit);
  //   setItemToEdit(expenseToEdit);
  // };

  const onDeleteExpenseHandler = (itemId) => {
    setAlert({ message: "Item deleted", success: true });
    setTimeout(() => {
      setAlert("");
    }, 3000);
    return setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== itemId);
    });
  };

  return (
    <Card className={styles.App}>
      {alert && <Alert error={alert.success}>{alert.message}</Alert>}
      <h1 className="app-title">Budget Calculator</h1>
      <BudgetForm onNewExpenseAdded={newExpenseHandler} />
      <ExpenseList items={expenses} onDeleteExpense={onDeleteExpenseHandler} />
      <Button onClick={onClearExpensesHandler}>Clear Expenses</Button>
      <Total items={expenses} />
    </Card>
  );
};

export default App;
