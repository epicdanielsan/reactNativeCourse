import { Image, StyleSheet, Text, View } from "react-native"
import Palpite from "../components/ui/Palpite"
import PrimaryButton from "../components/ui/PrimaryButton"
import Colors from "../constants/colors"


const GameOverScreen = ({roundsNumber, userNumber, onNewGame}) => {
    return (
        <View style={styles.rootContainer}>
            <Palpite>GAME OVER!!!!</Palpite>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/success.png")} style={styles.image}/>
            </View>
            <Text style={styles.summaryText}>Seu Telefone Precisou de <Text style={styles.highlight}>{roundsNumber}</Text> Tentativas para Adivinhar o Número <Text style={styles.highlight}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onNewGame}>Novo Jogo</PrimaryButton>            
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 300,
        height: 300,
        borderWidth: 3,
        borderRadius: 150,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: "100%",
        height: "100%"
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: Colors.primary500
    }
})

export default GameOverScreen