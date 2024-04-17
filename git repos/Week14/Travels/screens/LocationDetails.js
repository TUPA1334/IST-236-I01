import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/colors";

function LocationDetails(props) {
  function showOnMapHandler() {
    props.navigation.navigate("Map", {
      initialLat: props.route.params.location.location.lat,
      initialLng: props.route.params.location.location.lng,
    });
  }

  console.log(props.route.params.location.imageUri);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: props.route.params.location.imageUri }}
      />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>
            {props.route.params.location.address}
          </Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default LocationDetails;

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
