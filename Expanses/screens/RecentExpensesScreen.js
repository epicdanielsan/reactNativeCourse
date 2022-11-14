import { useContext } from "react";
import { View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date > date7daysAgo && expense.date <= today;
  });

  return (
    <View>
      <ExpensesOutput
        expensesPeriod="Last 7 Days"
        expenses={recentExpenses}
        fallbackText="No Expenses registered in the last 7 days."
      />
    </View>
  );
};

export default RecentExpensesScreen;
