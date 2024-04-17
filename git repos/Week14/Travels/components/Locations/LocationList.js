import { FlatList, StyleSheet, View, Text } from "react-native";
import LocationItem from "./LocationItem";
import { Colors } from "../../constants/colors";

function LocationList(props) {
  if (!props.locations || props.locations.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No Locations Added Yet!</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={props.locations}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <LocationItem location={itemData.item} />}
    />
  );
}

export default LocationList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
