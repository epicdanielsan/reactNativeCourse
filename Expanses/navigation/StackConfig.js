import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from "../constants/styles";
import ManageExpenseScreen from "../screens/ManageExpenseScreen";
import BottomTabsConfig from "./BottomTabsConfig";

const Stack = createNativeStackNavigator();

const StackConfig = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="ExpensesOverview"
        component={BottomTabsConfig}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpenseScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default StackConfig;
