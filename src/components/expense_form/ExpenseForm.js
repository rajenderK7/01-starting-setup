import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const changeEnteredTtileHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const changeEnteredAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const changeEnteredDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const expenseSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle === "" || enteredDate === "" || enteredAmount === "") {
      return;
    }

    let expenseToAdd = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
      id: Math.random.toString(),
    };

    props.getNewExpense(expenseToAdd);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <div
      style={{ borderRadius: "18px", backgroundColor: "blueviolet" }}
      className="expense-form p-3 mb-3 rounded-25"
    >
      <div className="container">
        <h4 className="text-warning fw-bold text-left">Add Expense</h4>
      </div>
      <form className="container" onSubmit={expenseSubmitHandler}>
        <div className=" form-group">
          <label className="col-form-label text-white">Title</label>
          <div className="border border-0 rounded">
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              value={enteredTitle}
              onChange={changeEnteredTtileHandler}
              id="inputTitle"
            />
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <label className="col-form-label text-white">Date</label>
              <div>
                <input
                  className="rounded border-0 p-1"
                  type="date"
                  value={enteredDate}
                  onChange={changeEnteredDateHandler}
                  min="01-01-2000"
                ></input>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <label className="col-form-label text-white">Amount</label>
              <div>
                <input
                  className="rounded border-0 p-1"
                  type="number"
                  onChange={changeEnteredAmountHandler}
                  value={enteredAmount}
                  min="0.1"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3 text-center">
          <button
            type="submit"
            className="btn btn-info"
            onClick={expenseSubmitHandler}
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
