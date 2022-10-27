import { StyleSheet, View } from "react-native"
import Colors from "../../constants/colors"

const Card = ({children}) => {
    return (
        <View style={styles.inputContainer}>{children}</View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})

export default Card