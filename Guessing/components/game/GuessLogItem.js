import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/colors"

const GuessLogItem = ({roundNumber, guess}) => {
    return (
        <View style={styles.guessCard}>
            <Text style={styles.normalText}>Palpite #{roundNumber}: </Text>
            <Text style={styles.guessResult}>{guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guessCard: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: Colors.accent,
        marginVertical: 8,
        flexDirection: "row",
        padding: 8,
        justifyContent: "space-between",
        width: "100%",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    guessResult: {
        fontWeight: "bold", 
        color: Colors.primary500, 
        fontSize: 17, 
        fontFamily: 'open-sans'
    },
    normalText: {
        fontSize: 17,
        fontFamily: 'open-sans'
    }
})

export default GuessLogItem