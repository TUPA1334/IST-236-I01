import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props) {
  // Set the safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title style={styles.titleContainer}>House of Blues</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/venue.jpg")}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:8432723000")}
        >
          843-272-3000
        </Text>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/rnxEScwJyYbFaM5G7")
          }
        >
          4640 Hwy 17 S{"\n"}North Myrtle Beach{"\n"}SC 29582
        </Text>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://www.houseofblues.com/myrtlebeach")
          }
        >
          www.houseofblues.com
        </Text>
        <View style={styles.infoContainer}>
          <NavButton onPress={() => props.onNext("Events")}>
            View Events
          </NavButton>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380,
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center",
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    color: Colors.primary500,
    fontFamily: "squealer",
  },
  buttonContainer: {
    flex: 1,
  },
});
