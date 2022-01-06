import ExpenseItems from "./components/Expenses/ExpenseItems";
import ExpenseForm from "./expense_form/ExpenseForm";
import "./components/Expenses/ExpenseItems.css";
import { useState } from "react";

const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, updateExpenses] = useState(initialExpenses);

  const getNewExpense = (newExpense) => {
    updateExpenses((prev) => {
      return [newExpense, ...prev];
    });
  };

  return (
    <div className="expenses-box">
      <ExpenseForm getNewExpense={getNewExpense}></ExpenseForm>
      <ExpenseItems displayExpenses={expenses}></ExpenseItems>
    </div>
  );
};

export default App;
