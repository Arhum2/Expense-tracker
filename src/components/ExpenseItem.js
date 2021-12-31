import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>November 3rd 2021</div>
      <div className="expense-item__description">
        <h2>Netflex subscription</h2>
        <div className="expense-item__price">$16.99</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
