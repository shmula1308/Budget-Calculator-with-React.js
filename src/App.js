import React from "react";
import styles from "./App.module.css";
import Card from "./components/UI/Card";
import BudgetForm from "./components/BudgetForm/BudgetForm";
import ExpenseList from "./components/Expenses/ExpensesList";
import Button from "./components/BudgetForm/Button";
import Total from "./components/TotalSpending/Total";
import Alert from "./components/UserAlert/Alert";

function App() {
  return (
    <Card className={styles.App}>
      <h1 className="app-title">Budget Calculator</h1>
      <BudgetForm />
      <ExpenseList />
      <Button>Clear Expenses</Button>
      <Total />
      <Alert />
    </Card>
  );
}

export default App;
