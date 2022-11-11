import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch(action.type) {
    case "Add":
      case: "Update"
      case: "Delete"
      default: return state
  }
}

const ExpensesContextProvider = ({ children }) => {
   const [expensesState, dispatch] = useReducer(expensesReducer)

   const addExpense = (expenseData) => {
    dispatch({type: "Add", payload: expenseData})
   }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
