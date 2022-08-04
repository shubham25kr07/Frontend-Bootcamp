import React, { useState } from "react";
import AddExpense from "./AddExpense";
import Expense from "./Expense";
const ExpenseList = (props) => {
  const { remainingBudget, setRemainingBudget, setTotalExpense } = props;
  const [expenseList, setExpenseList] = useState([]);

  return (
    <div className="expenseView">
      <div className="expenseList">
        {expenseList &&
          expenseList.map((expense, index) => (
            <Expense
              name={expense.name}
              cost={expense.cost}
              setExpenseList={setExpenseList}
              id={index}
              setRemainingBudget={setRemainingBudget}
              setTotalExpense={setTotalExpense}
            />
          ))}
      </div>
      <AddExpense
        setExpenseList={setExpenseList}
        remainingBudget={remainingBudget}
        setRemainingBudget={setRemainingBudget}
        setTotalExpense={setTotalExpense}
      />
    </div>
  );
};
export default ExpenseList;
