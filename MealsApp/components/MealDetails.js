import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";
import List from "./MealDetail/List";
import Subtitle from "./MealDetail/Subtitle";
import MealShortInfo from "./MealShortInfo";

const MealDetails = (props) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={props.favoriteHandler}
          name="star"
          size={26}
          color="#fff"
        />
      ),
    });
  }, [navigation, props.favoriteHandler]);

  return (
    <ScrollView style={styles.boxContainer}>
      <Image source={{ uri: props.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{props.title}</Text>
      <MealShortInfo
        affordability={props.affordability}
        complexity={props.complexity}
        duration={props.duration}
        textStyle={styles.textStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List itensList={props.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List itensList={props.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    color: "#fff",
  },
  textStyle: {
    color: "#fff",
  },
  listContainer: {
    maxWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});

export default MealDetails;
