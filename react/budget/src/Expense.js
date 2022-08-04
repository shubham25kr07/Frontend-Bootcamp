import image from "./image.png";
const Expense = (props) => {
  const {
    name,
    cost,
    setExpenseList,
    setRemainingBudget,
    setTotalExpense,
    id,
  } = props;

  const deleteExpense = () => {
    console.log(id);
    setExpenseList((prevExpenseList) => {
      return prevExpenseList.filter((expense, index) => index != id);
    });

    setRemainingBudget((prevRemainingBudget) => {
      return prevRemainingBudget + cost;
    });

    setTotalExpense((prevTotalExpense) => {
      return prevTotalExpense - cost;
    });
  };

  return (
    <div className="card">
      <div>
        <h3>name : {name}</h3>
        <h3>cost : {cost}</h3>
      </div>
      <div className="image-button">
        <img src={image} />
        <button className="button" onClick={deleteExpense}>
          delete
        </button>
      </div>
    </div>
  );
};
export default Expense;
