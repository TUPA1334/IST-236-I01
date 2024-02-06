import { Image, View, Text, StyleSheet } from "react-native";

function MovieItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.itemImage} source={props.image} />
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.itemRating}>{props.rating}</Text>
      </View>
    </View>
  );
}

export default MovieItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: "grey",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  ratingContainer: {
    backgroundColor: "grey",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemRating: {
    fontSize: 30,
    textAlign: "center",
  },
});
