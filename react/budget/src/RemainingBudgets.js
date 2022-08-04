import React from "react";

const RemainingBudgets = (props) => {
  const { remaining } = props;
  return (
    <div className="budgetcard">
      <h4>Remaining:{remaining}</h4>
    </div>
  );
};

export default RemainingBudgets;
