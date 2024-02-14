import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import EventItems from "../components/EventItems";

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
      <View style={styles.titleContainer}>
        <Title>Events</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={eventItems}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <EventItems
                name={itemData.item.name}
                image={itemData.item.image}
                date={itemData.item.date}
              />
            );
          }}
        >
          Events
        </FlatList>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Home Page</NavButton>
      </View>
    </View>
  );
}

export default EventsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 400,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
  },
});
