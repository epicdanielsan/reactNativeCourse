import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor: "#5d4037"}, 
          headerTintColor: "#fff",
          contentStyle: {backgroundColor: "#8d6e63"}
        }}>
          <Stack.Screen 
          name='MealsCategories' 
          component={CategoriesScreen} 
          options={{
            title: "Categories", 
          }}
          />
          <Stack.Screen 
          name='MealsOverview' 
          component={MealsOverviewScreen}
          // options={({route, navigation}) => {
          //   const catId = route.params.categoryId

          //   return {
          //     title: catId
          //   }
          // }}
          />
          <Stack.Screen
            name='MealDetails'
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
