import { View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpensesScreen = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod="Last 7 Days" />
    </View>
  );
};

export default RecentExpensesScreen;
