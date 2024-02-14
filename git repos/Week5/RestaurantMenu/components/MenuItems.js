import { StyleSheet, Text, Image } from "react-native";
import { View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function MenuItems(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.image} />
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </View>
  );
}

export default MenuItems;

styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: Colors.primary500,
    borderWidth: 3,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "urbanHero"
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "black",
  },
  image: {
    //resizeMode: "cover",
    height: 250,
    width: "100%",
  },
  dateContainer: {
    backgroundColor: Colors.primary500,
    borderWidth: 3,
    borderRadius: 5,
  },
  date: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "urbanHero",
  },
});
