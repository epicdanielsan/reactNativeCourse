import { FlatList, Image, Platform, StyleSheet, Text, View } from "react-native"


const MealDetails = (props) => {
    return(
        <View style={styles.boxContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: props.imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <FlatList data={props.data} renderItem={props.render}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    innerContainer: {
        flex: 1
    },
    imageContainer: {
        height: 300,
        marginBottom: 30
    },
    image: {
        flex: 1
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    infoContainer: {
        padding: 10
    }
})

export default MealDetails