import { useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from "react-native";

function GoalInput(props) {
  const [text, setText] = useState("");

  const inputHandle = (text) => {
    setText(text);
  };

  const addGoalHandle = () => {
    if(text === "") return
    props.addGoal(text);
    setText("");
  };

  return (
    <Modal animationType="slide" visible={props.visible}>
    <View style={styles.inputContainer}>
      {props.warning && <Text style={styles.warning}>Goal Added!!!!!</Text>}
      <Image source={require("../assets/goal.png")} style={styles.image}/>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textInput}
        onChangeText={inputHandle}
        value={text}
      />
      <View style={{flexDirection: "row", marginTop: 16}}>
      <View style={styles.button}>
      <Button title="Close" onPress={props.closeModal} color="#f31282"/>
        </View>
        <View style={styles.button}>
      <Button title="Add Goal" onPress={addGoalHandle} color="#5e0acc"/>
        </View>
      </View>
      
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31166b"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    margin: 8,
    padding: 16,
    color: "#120438",
    borderRadius: 6
  },
  button: {
    width: "30%",
    marginHorizontal: 8
  },
  warning: {
    fontSize: 35,
    color: "#fff"
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});

export default GoalInput;
