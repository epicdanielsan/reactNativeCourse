import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [warning, setWarning] = useState(false)

  const addGoal = (typedText, value) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: typedText, id: Math.random().toString() },
    ]);
    setWarning(true)
    setTimeout(() => {
      setWarning(false)
    }, 2000);
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.addContainer}>
      <View style={{margin: 20, width: "90%"}}>
      <Button title="Add New Goal" color="#a065ec" onPress={() => {setModalIsVisible(true)}}/>
      </View>
      <GoalInput placeholder="Type your goal" addGoal={addGoal} closeModal={() => {setModalIsVisible(false)}} visible={modalIsVisible} warning={warning}/>
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item, index) => {
            return item.id;
          }}
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
        ></FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a"
  },
  goalsContainer: {
    flex: 6,
  },
});
