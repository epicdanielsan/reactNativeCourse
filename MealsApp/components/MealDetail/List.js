import { StyleSheet, Text, View } from "react-native";

const List = ({ itensList }) => {
  return itensList.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#bcaaa4",
  },
  itemText: {
    color: "#4E342E",
    textAlign: "center",
  },
});

export default List;
