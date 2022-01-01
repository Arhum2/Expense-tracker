import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: 'Care Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    { title: 'Care Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    { title: 'Care Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
