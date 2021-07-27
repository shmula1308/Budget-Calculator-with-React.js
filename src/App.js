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
  const [item, setItem] = useState("");
  const [alert, setAlert] = useState("");

  const newExpenseHandler = (newExpense) => {
    let idx = expenses.findIndex((expense) => expense.id === newExpense.id);
    if (idx > -1) {
      setExpenses((prevExpenses) => {
        // let editedExpenses = [...prevExpenses];
        // editedExpenses[idx] = newExpense;
        // console.log(editedExpenses);
        // return editedExpenses;
        return [...prevExpenses].map((expense, i) =>
          i === idx
            ? { ...expense, amount: newExpense.amount, title: newExpense.title }
            : expense
        );
      });
      return;
    } else {
      console.log("hello");
      setExpenses((prevExpenses) => {
        return [newExpense, ...prevExpenses];
      });
    }
  };

  const onClearExpensesHandler = () => {
    setExpenses([]);
    setAlert({ message: "Expenses cleared ", success: true });

    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  const onEditExpenseHandler = (itemId) => {
    const expense = expenses.filter((expense) => expense.id === itemId);
    setItem(expense);
  };

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
      <BudgetForm onNewExpenseAdded={newExpenseHandler} itemToEdit={item} />
      <ExpenseList
        items={expenses}
        onDeleteExpense={onDeleteExpenseHandler}
        onEditExpense={onEditExpenseHandler}
      />
      <Button onClick={onClearExpensesHandler}>Clear Expenses</Button>
      <Total items={expenses} />
    </Card>
  );
};

export default App;
