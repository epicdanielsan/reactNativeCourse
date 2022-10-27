import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { useFonts } from 'expo-font'
import AppLoading from "expo-app-loading";


export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    "open-sans" : require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold" : require("./assets/fonts/OpenSans-Bold.ttf")
  })

  if(!fontsLoaded){
    <AppLoading/>
  }


  const pickedNumberHandler = (pickedNumber) => {
    setPickedNumber(pickedNumber);
    setIsGameOver(false)
  };

  const gameOverHandler = (numberOfRounds) => {
    setIsGameOver(true)
    setGuessRounds(numberOfRounds)
  }

  const startNewGameHandler = () => {
    setPickedNumber(null)
    setGuessRounds(0)
  }


  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if(pickedNumber){
    screen = <GameScreen userNumber={pickedNumber} gameOver={gameOverHandle} onGameOver={gameOverHandler}/>
  }

  if(isGameOver && pickedNumber){
    screen = <GameOverScreen userNumber={pickedNumber} onNewGame={startNewGameHandler} roundsNumber={guessRounds}/>
  }

  const gameOverHandle = (value) => {
    setIsGameOver(value)
  }

  
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
