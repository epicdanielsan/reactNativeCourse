import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return <MapView initialRegion={region} style={styles.map}></MapView>;
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
