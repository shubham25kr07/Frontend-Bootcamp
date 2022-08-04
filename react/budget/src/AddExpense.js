import { useState } from "react";
import TotalBudget from "./TotalBudget";

const AddExpense = (props) => {
  const {
    setExpenseList,
    remainingBudget,
    setRemainingBudget,
    setTotalExpense,
  } = props;
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);

  const addExpense = (e) => {
    e.preventDefault();
    if (cost > remainingBudget) {
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
    // cost = Number(cost);
    // }
    console.log(typeof cost);
    console.log(typeof remainingBudget);

    setExpenseList((prevExpeneseList) => {
      const expense = [{ name: name, cost: cost }];

      return [...prevExpeneseList, ...expense];
    });

    setRemainingBudget((prevRemainingBudget) => {
      return prevRemainingBudget - cost;
    });

    setTotalExpense((prevTotalExpense) => {
      return prevTotalExpense + cost;
    });
  };

  return (
    <div class="addexpense">
      <form className="addExpense" onSubmit={addExpense}>
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
          type="number"
          onChange={(e) => setCost(Number(e.target.value))}
          required
        />
        <br />
        <br />
        {/* <input type="submit" value="clickMe"></input> */}
        <button>Create Contact</button>
        {/* <button type="button">Dummy button</button> */}
      </form>
    </div>
  );
};

export default AddExpense;
