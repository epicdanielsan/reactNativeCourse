import { Platform, Pressable, StyleSheet, Text, View } from "react-native"


const CategoryGridTile = ({title, itemColor, onPress}) => {
    return (
        <View style={styles.gridItem}>
            <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttomPressed : null]} android_ripple={{color: "#ccc"}} onPress={onPress}>
                <View style={[styles.innerContainer, {backgroundColor: itemColor}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 140,
        borderRadius: 8,
        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    button: {
        flex: 1
    },
    buttomPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }
})

export default CategoryGridTile