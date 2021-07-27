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
  const [deleteAction, setDeleteAction] = useState(false);

  const newExpenseHandler = (newExpense) => {
    let idx = expenses.findIndex((expense) => expense.id === newExpense.id);
    if (idx > -1) {
      setExpenses((prevExpenses) => {
        return [...prevExpenses].map((expense, i) =>
          i === idx
            ? { ...expense, amount: newExpense.amount, title: newExpense.title }
            : expense
        );
      });
      return;
    } else {
      setExpenses((prevExpenses) => {
        return [newExpense, ...prevExpenses];
      });
    }
  };

  const onClearExpensesHandler = () => {
    setExpenses([]);
    alertHandler({ message: "Expenses cleared ", success: true });
  };

  const onEditExpenseHandler = (itemId) => {
    const expense = expenses.filter((expense) => expense.id === itemId);
    setItem(expense);
  };

  const onDeleteExpenseHandler = (itemId) => {
    alertHandler({ message: "Item deleted", success: false });
    setDeleteAction(true);
    return setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== itemId);
    });
  };

  const alertHandler = ({ message, success }) => {
    setAlert({ message, success });
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  return (
    <Card className={styles.App}>
      {alert && <Alert error={alert.success}>{alert.message}</Alert>}
      <h1 className="app-title">Budget Calculator</h1>
      <BudgetForm
        onNewExpenseAdded={newExpenseHandler}
        itemToEdit={item}
        alert={alertHandler}
        deleteAction={deleteAction}
        setDelete={setDeleteAction}
      />
      <ExpenseList
        items={expenses}
        onDeleteExpense={onDeleteExpenseHandler}
        onEditExpense={onEditExpenseHandler}
      />
      {expenses.length > 0 && (
        <Button onClick={onClearExpensesHandler}>Clear Expenses</Button>
      )}
      <Total items={expenses} />
    </Card>
  );
};

export default App;
