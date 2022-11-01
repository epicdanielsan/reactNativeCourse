import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route, navigation }) => {
  const catId = route.params.itemId;
  const displayedMeal = MEALS.find((item) => item.id === catId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: displayedMeal.title,
    });
  }, []);

  const favoriteHandler = () => {
    console.log("Added to Favorite!!!!");
  };

  return (
    <MealDetails
      title={displayedMeal.title}
      imageUrl={displayedMeal.imageUrl}
      ingredients={displayedMeal.ingredients}
      steps={displayedMeal.steps}
      affordability={displayedMeal.affordability}
      complexity={displayedMeal.complexity}
      duration={displayedMeal.duration}
      favoriteHandler={favoriteHandler}
    />
  );
};

export default MealDetailsScreen;
