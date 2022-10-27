import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Palpite from "../components/ui/Palpite";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Palpite>Meu Palpite É...</Palpite>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Maior ou Menor?</Text>
        <View>
          <View style={{ flex: 1 }}>
            <PrimaryButton>+</PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton>-</PrimaryButton>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
});

export default GameScreen;
