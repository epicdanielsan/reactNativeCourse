import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const IconButton = ({ onPress, name, size, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.25,
  },
});

export default IconButton;
