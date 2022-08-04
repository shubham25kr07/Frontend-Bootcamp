import React from "react";

const ToatlExpenses = (props) => {
  const { expense } = props;
  return (
    <div className="budgetcard">
      <h4>Spent so far:{expense}</h4>
    </div>
  );
};

export default ToatlExpenses;
