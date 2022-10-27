import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Palpite from "../components/ui/Palpite";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from '@expo/vector-icons'
import Colors from "../constants/colors";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess])
  
  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])
  
  useEffect(() => {
    if(currentGuess === userNumber){
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  const nextGuessHandler = (direction) => {
    if((direction === "lower" && currentGuess < userNumber) || (direction === "higher" && currentGuess > userNumber)){
      Alert.alert("Jogue limpo!!!", "Clicou errado ou quer me passar pra trás??", [{ text: "Ooops!", style: "cancel"}])
      return
    }

    if(direction === "lower"){
      maxBoundary = currentGuess
    }else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)

    setCurrentGuess(newRndNumber)
    setGuessRounds(currentRounds => [newRndNumber, ...currentRounds])
  }

  const guessRoundsList = guessRounds.length

  return (
    <View style={styles.screen}>
      <Palpite>Meu Palpite É...</Palpite>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
      <InstructionText style={styles.instructionText}>Maior ou Menor?</InstructionText>
      <View style={styles.buttonsContainer}>
        <View style={styles.optionsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}><Ionicons name="remove-sharp" size={30} color="#fff"/></PrimaryButton>
        </View>
        <View style={styles.optionsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}><Ionicons name="add-sharp" size={30} color="#fff"/></PrimaryButton>
        </View>
      </View>
      </Card>
      <View style={{flex: 1, padding: 16}}>
        <FlatList keyExtractor={item => item} data={guessRounds} renderItem={(itemData) => {
          return (
            <GuessLogItem guess={itemData.item} roundNumber={guessRoundsList - itemData.index}></GuessLogItem>
          )
        }}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
    marginTop: 30
  },
  instructionText: {
    marginBottom: 12
  },
  optionsContainer: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: "row"
  }
});

export default GameScreen;
