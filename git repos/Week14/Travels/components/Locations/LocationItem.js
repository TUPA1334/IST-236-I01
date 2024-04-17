import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

function LocationItem(props) {
  const navigation = useNavigation();

  function locationDetailsHandler() {
    navigation.navigate("LocationDetails", { location: props.location });
  }
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={locationDetailsHandler}
    >
      <Image style={styles.image} source={{ uri: props.location.imageUri }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.location.title}</Text>
        <Text style={styles.address}>{props.location.address}</Text>
      </View>
    </Pressable>
  );
}

export default LocationItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 115,
  },
  infoContainer: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 18,
    color: Colors.gray700,
  },
});
