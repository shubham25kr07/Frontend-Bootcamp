import React, { useEffect, useState } from "react";
import TotalBudget from "./TotalBudget";
import RemainingBudgets from "./RemainingBudgets";
import TotalExpenses from "./TotalExpense";
import ExpenseList from "./ExpenseList";

const Budget = () => {
  const [budget, setBudget] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [RemainingBudget, setRemainingBudget] = useState(0);

  useEffect(() => {
    setBudget(1000);
    setRemainingBudget(1000);
  }, []);
  return (
    <div className="budgetContainer">
      <div className="budgetview">
        <TotalBudget
          totalBudget={budget}
          setBudget={setBudget}
          setRemainingBudget={setRemainingBudget}
        />
        <RemainingBudgets remaining={RemainingBudget} />
        <TotalExpenses expense={totalExpense} />
      </div>
      <div className="expenseview">
        <ExpenseList
          remainingBudget={RemainingBudget}
          setRemainingBudget={setRemainingBudget}
          setTotalExpense={setTotalExpense}
        />
      </div>
    </div>
  );
};

export default Budget;
