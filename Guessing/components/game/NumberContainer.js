import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 24,
    margin: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: Colors.accent,
    fontSize: 36,
  },
});

export default NumberContainer;
