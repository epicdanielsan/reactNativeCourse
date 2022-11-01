import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const MealItem = ({ title, imageUrl, affordability, complexity, duration, onPress }) => {
  return (
    <View style={styles.boxContainer}>
      <Pressable android_ripple={{ color: "#cccc" }}  style={({pressed}) => pressed ? styles.buttomPressed : null} onPress={onPress}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoItem}>{affordability.toUpperCase()}</Text>
            <Text style={styles.infoItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.infoItem}>{duration} min.</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    margin: 10,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    flex: 1,
    height: 200,
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold"
  },
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
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttomPressed: {
    opacity: 0.5
},
});

export default MealItem;
