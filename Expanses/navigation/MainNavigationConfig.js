import { NavigationContainer } from "@react-navigation/native";
import StackConfig from "./StackConfig";

const MainNavigationConfig = () => {
  return (
    <NavigationContainer>
      <StackConfig />
    </NavigationContainer>
  );
};

export default MainNavigationConfig;
