import React, { useState } from "react";

const TotalBudget = (props) => {
  const { totalBudget, setBudget, setRemainingBudget } = props;
  const [flag, setFlag] = useState(0);
  const [value, setValue] = useState(0);

  const updateBudget = (e) => {
    setFlag(0);
    setBudget(value);
    setRemainingBudget(value);
  };

  return (
    <div className="budgetcard">
      <h4>Budget:{totalBudget}</h4>
      <button
        className="button"
        onClick={() => {
          setFlag(1);
        }}
      >
        Edit
      </button>
      {flag ? (
        <div>
          <label for="budget">Enter Budget:</label>
          <input
            type="number"
            id="budget"
            name="budget"
            onChange={(e) => setValue(Number(e.target.value))}
            required
          />
          <button className="button" onClick={updateBudget}>
            Submit
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TotalBudget;
