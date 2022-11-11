import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpenseScreen from "../screens/ManageExpenseScreen";
import BottomTabsConfig from "./BottomTabsConfig";

const Stack = createNativeStackNavigator();

const StackConfig = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExpensesOverview"
        component={BottomTabsConfig}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} />
    </Stack.Navigator>
  );
};

export default StackConfig;
