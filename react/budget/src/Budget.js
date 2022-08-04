
import React, { useEffect, useState } from "react";
import ToatlBudget from "./TotalBudget";
import RemainingBudget from "./RemainingBudget";
import ToatlExpenses from "./TotalExpense";

const Budget = () => {
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    setBudget(1000);
  }, []);
  return (
    <div className="budgetContainer">
      <ToatlBudget totalbudget={budget} />
      <RemainingBudget remaining={remaining} />
      <ToatlExpenses expense={expense} />
    </div>
  );
};

export default Budget;
