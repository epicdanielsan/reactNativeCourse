import { StatusBar } from "expo-status-bar";
import MainNavigationConfig from "./navigation/MainNavigationConfig";
import ExpensesContextProvider from "./store/expenses-context";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <MainNavigationConfig />
      </ExpensesContextProvider>
    </>
  );
}
