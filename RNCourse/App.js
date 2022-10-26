import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState("")
  const [goals, setGoals] = useState([])

  const inputHandle = (text) => {setText(text)}

  const addGoal = () => {
    
    setGoals(currentGoals => [...currentGoals, text])
  }
  return (
    <View style={styles.addContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course Goal' style={styles.textInput} onChangeText={inputHandle}/>
        <Button title='Add Goal' onPress={addGoal}/>
        </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
        {goals.map((item) => (<Text key={item}>{item}</Text>))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 6
  }
});
