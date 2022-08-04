import React, { useState } from "react";
import AddExpense from "./AddExpense";
import Expense from "./Expense";
const ExpenseList = (props) => {
  const { RemainingBudget, setRemainingBudget, setBudget, setTotalExpense } =
    props;
  const [expenseList, setExpenseList] = useState([]);

  return (
    <div>
      <AddExpense
        setExpenseList={setExpenseList}
        RemainingBudget={RemainingBudget}
        setRemainingBudget={setRemainingBudget}
        setBudget={setBudget}
        setTotalExpense={setTotalExpense}
      />
      {expenseList &&
        expenseList.map((expense, index) => (
          <Expense
            name={expense.name}
            cost={expense.cost}
            setExpenseList={setExpenseList}
            id={index}
          />
        ))}
    </div>
  );
};
export default ExpenseList;
