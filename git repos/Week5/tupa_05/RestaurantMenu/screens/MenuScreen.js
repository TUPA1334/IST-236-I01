import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import MenuItems from "../components/MenuItems";

function MenuScreen(props) {
  // Set the safe area screen boundaries
  const insets = useSafeAreaInsets();

  const [menuItems, setMenuItems] = useState([
    {
      name: "The Clucked Up - A BBQ Chicken Pizza",
      image: require("../assets/images/CLUCKED-UP.jpg"),
      date: "$14.95",
      id: 1,
    },
    {
      name: "A Real Brie Slapper - A Brie Cheese Pizza",
      image: require("../assets/images/Brie.jpg"),
      date: "$14.95",
      id: 2,
    },
    {
      name: "Brushetta - A Tomato and Basil on a Toasted Baguette",
      image: require("../assets/images/Bruschetta.jpg"),
      date: "$8.95",
      id: 3,
    },
    {
      name: "Roasted Olives - A Mix of Olives Roasted in Olive Oil and Herbs",
      image: require("../assets/images/Olives.jpg"),
      date: "$9.95",
      id: 4,
    },
    {
      name: "Wild Fired Wings 10Ct",
      image: require("../assets/images/WingsAndBeer.jpg"),
      date: "$14.95",
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
        <Title>Menu</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <MenuItems
                name={itemData.item.name}
                image={itemData.item.image}
                date={itemData.item.date}
              />
            );
          }}
        >
          Menu
        </FlatList>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Home Page</NavButton>
      </View>
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 400,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    fontFamily: "urbanHero"
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
