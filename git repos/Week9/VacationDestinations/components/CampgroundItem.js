import { useState } from "react";
import { Pressable, View, StyleSheet, Image, Text } from "react-native";
import Colors from "../constants/colors";
import ImageViewModal from "../modals/ImageViewModal";

function CampgroundItem(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function viewImageHandler() {
    setModalIsVisible(true);
  }

  function closeImageHandler() {
    setModalIsVisible(false);
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={viewImageHandler}
      >
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.innerRowContainer}>
              <Text style={styles.sites}>Cost: ${props.numSites}</Text>
              <Text style={styles.year}>Year Founded: {props.foundedYear}</Text>
            </View>
            <Text style={styles.rating}>Rating: {props.rating} / 5</Text>
          </View>
        </View>
      </Pressable>
      <ImageViewModal
        isVisible={modalIsVisible}
        imageUrl={props.imageUrl}
        onClose={closeImageHandler}
      />
    </View>
  );
}

export default CampgroundItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ccc",
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 5,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  rowContainer: {
    height: 150,
    flexDirection: "contain",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "25%",
    height: "50%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  infoContainer: {
    width: "25%",
    height: "100%",
    resizeMode: "contain",
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  sites: {
    width: "85%",
    fontSize: 14,
  },
  year: {
    fontSize: 14,
    fontWeight: "bold",
  },
  innerRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    fontSize: 13,
    fontStyle: "italic",
  },
});
