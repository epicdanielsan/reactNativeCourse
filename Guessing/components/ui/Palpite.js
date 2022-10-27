import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Palpite = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 12,
  },
});

export default Palpite;
