import Expense from "./Expense";

const ExpenseItems = (props) => {
  return (
    <div className="container">
      {props.displayExpenses.map((expense) => (
        <Expense
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default ExpenseItems;
