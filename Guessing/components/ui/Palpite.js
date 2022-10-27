import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Palpite = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
  },
});

export default Palpite;
