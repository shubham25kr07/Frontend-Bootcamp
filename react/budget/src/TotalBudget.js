import React from "react";

const ToatlBudget = (props) => {
  const { totalbudget } = props;
  return (
    <div className="budgetcard">
      <h4>Budget:{totalbudget}</h4>
    </div>
  );
};

export default ToatlBudget;
