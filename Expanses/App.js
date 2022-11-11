import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import MainNavigationConfig from "./navigation/MainNavigationConfig";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <MainNavigationConfig />
    </>
  );
}
