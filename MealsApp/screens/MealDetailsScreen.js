import { useLayoutEffect } from "react"
import { Text, View } from "react-native"
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/dummy-data"



const MealDetailsScreen = ({route, navigation}) => {
    const catId = route.params.itemId
    const displayedMeal = MEALS.find((item) => item.id === catId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: displayedMeal.title
        })
    }, [])

    const renderMealSteps = (itemData) => {
        return(
            <Text>- {itemData.item}</Text>
        )
    }

    return(
        <MealDetails 
            title={displayedMeal.title} 
            imageUrl={displayedMeal.imageUrl}
            data={displayedMeal.steps}
            render={renderMealSteps}
        />
    )
}

export default MealDetailsScreen