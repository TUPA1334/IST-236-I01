import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import NavButton from "../components/NavButton";
import Title from "../components/Title";

function EventsScreen(props) {
  // Set the safe area screen boundaries
  const insets = useSafeAreaInsets();

  const [eventItems, setEventItems] = useState([
    {
      name: "American Floyd - The Ultimate Pink Floyd Tribute Experience",
      image: require("../assets/images/americanfloyd.jpg"),
      date: "01/13/2024",
      id: 1,
    },
    {
      name: "Badfish - A Tribute to Sublime",
      image: require("../assets/images/badfish.jpg"),
      date: "01/14/2024",
      id: 2,
    },
    {
      name: "Tell Me Lies - The Fleetwood Mac Experience",
      image: require("../assets/images/tellmelies.jpg"),
      date: "01/26/2024",
      id: 3,
    },
    {
      name: "Blackberry Smoke: Be Right There Tour",
      image: require("../assets/images/blackberry.jpg"),
      date: "02/17/2024",
      id: 4,
    },
    {
      name: "Electric Avenue - The 80s MTV Experience",
      image: require("../assets/images/electric.jpg"),
      date: "02/23/2024",
      id: 5,
    },
  ]);
   
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
      <View>
        <Title>Events</Title>
      </View>

      <View>
        <NavButton onPress={props.onNext}>View Events</NavButton>
    </View>
    </View>
  );
}

export default EventsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});
