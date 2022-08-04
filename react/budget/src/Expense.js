const Expense = (props) => {
  const { name, cost, setExpenseList, id } = props;
  const deleteExpense = () => {
    console.log(id);
    setExpenseList((prevExpenseList) => {
      return prevExpenseList.filter((expense) => expense.index != id);
    });
  };
  return (
    <div>
      <h3>name : {name}</h3>
      <h3>cost : {cost}</h3>
      <button onClick={deleteExpense}>delete</button>
    </div>
  );
};
export default Expense;
