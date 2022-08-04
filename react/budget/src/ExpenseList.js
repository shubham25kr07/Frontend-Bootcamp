import React, { useState } from "react";
import AddExpense from "./AddExpense";
import Expense from "./Expense";
const ExpenseList = (props) => {
  const { remainingBudget, setRemainingBudget, setTotalExpense } = props;
  const [expenseList, setExpenseList] = useState([]);

  return (
    <div>
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
