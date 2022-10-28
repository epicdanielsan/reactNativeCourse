import { FlatList } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'




const CategoriesScreen = ({navigation}) => {
    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate("MealsOverview")
        }
        
            return (
                <CategoryGridTile title={itemData.item.title} itemColor={itemData.item.color} onPress={pressHandler}/>
            )
        }

    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2}/>
    )
}

export default CategoriesScreen