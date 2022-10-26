import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
  const [text, setText] = useState("");

  const inputHandle = (text) => {
    setText(text);
  };

  const addGoalHandle = () => {
    props.addGoal(text);
    setText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textInput}
        onChangeText={inputHandle}
        value={text}
      />
      <Button title="Add Goal" onPress={addGoalHandle} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
