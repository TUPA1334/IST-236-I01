import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { useState } from "react";

function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  function onChangeCheckin(event, selectedDate) {
    const currentDate = selectedDate;
    // ???
    setCheckIn(currentDate);
  }

  return (
    <ImageBackground
      source={require("../assets/images/italy.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
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
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Title>Riviera Retreat</Title>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateLabel}>Check In:</Text>
              <Pressable onPress={showCheckInPicker}>
                <Text style={styles.dateText}>{checkIn.toDateString()}</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.3,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
  },
  scrollContainer: {
    flex: 1,
    width: 30000,
    maxWidth: "100%",
  },
});
