import { useState } from "react";
import FilterYear from "../filter_component/FilterYear";
import Expense from "./Expense";

const ExpenseItems = (props) => {
  const [currentYear, setCurrentYear] = useState("All");
  const getFilteredYear = (f_year) => {
    setCurrentYear(f_year);
  };

  let filteredExpenses = [...props.displayExpenses];

  if (currentYear !== "All") {
    filteredExpenses = props.displayExpenses.filter((expense) => {
      return expense.date.getFullYear().toString() === currentYear;
    });
  }

  const noExpenseFound = <h1>No expenses found!</h1>;

  return (
    <div className="container">
      <FilterYear
        selectedYear={currentYear}
        getFilteredYear={getFilteredYear}
      ></FilterYear>
      <div>
        {filteredExpenses.length === 0 && noExpenseFound}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <Expense
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </div>
    </div>
  );
};

export default ExpenseItems;
