import "./Expense.css";

const Expense = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-title">{props.title}</div>

      <div className="expense-amount">$ {props.amount}</div>
    </div>
  );
};

export default Expense;
