import { StyleSheet, Text, View } from "react-native";

const MealShortInfo = (props) => {
  return (
    <View style={[styles.infoContainer, props.style]}>
      <Text style={[styles.infoItem, props.textStyle]}>
        {props.affordability.toUpperCase()}
      </Text>
      <Text style={[styles.infoItem, props.textStyle]}>
        {props.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.infoItem, props.textStyle]}>
        {props.duration} min.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  infoItem: {
    fontWeight: "bold",
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealShortInfo;
