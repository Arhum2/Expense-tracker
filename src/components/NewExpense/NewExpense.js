import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const starteditingHandler = () => {
     setIsEditing(true); 
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={starteditingHandler}>Add new expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />}      
    </div>
  );
};

export default NewExpense;
