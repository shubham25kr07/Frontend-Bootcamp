import React from "react";

const TotalExpenses = (props) => {
  const { expense } = props;
  return (
    <div className="totalexpense">
      <h4>Spent so far:{expense}</h4>
    </div>
  );
};

export default TotalExpenses;
