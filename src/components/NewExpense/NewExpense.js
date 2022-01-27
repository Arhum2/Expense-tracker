import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const handleClick = () => {
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      </div>
  };

  return (
    <div className="new-expense">
      <button onClick={handleClick}>Add new expense</button>
      
    </div>
  );
};

export default NewExpense;
