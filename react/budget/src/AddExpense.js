import { useState } from "react";

const AddExpense = (props) => {
  const {
    setExpenseList,
    RemainingBudget,
    setRemainingBudget,
    setBudget,
    setTotalExpense,
  } = props;
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);

  const addExpense = (e) => {
    e.preventDefault();
    if (cost > RemainingBudget) {
      alert("Cost is more than RemainingBudget");
      return;
    }
    console.log(cost);
    if (name === "" || !cost) {
      alert("Name or Cost field is empty");
      return;
    }
    if (typeof name != "string") {
      console.log(typeof name, typeof cost);
      alert("Enter Correct Types");
      return;
    }

    setExpenseList((prevExpeneseList) => {
      const expense = [{ name: name, cost: cost }];

      return [...prevExpeneseList, ...expense];
    });
    setRemainingBudget((prevRemainingBudget) => {
      return prevRemainingBudget - cost;
    });
    setBudget((prevBudget) => {
      return prevBudget - cost;
    });
    setTotalExpense((prevTotalExpense) => {
      return prevTotalExpense + cost;
    });
  };

  return (
    <div>
      <form className="addExpense">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label for="cost">Cost:</label>
        <input
          id="cost"
          name="cost"
          onChange={(e) => setCost(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit" onClick={addExpense}>
          Create Contact
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
