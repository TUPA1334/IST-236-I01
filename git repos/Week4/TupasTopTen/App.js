import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import MovieItem from "./components/MovieItem";

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "Beetlejuice",
      image: require("./assets/images/BeetlejuicePoster.jpg"),
      rating: "Favorite Campy Horror",
    },
    {
      name: "The Warriors",
      image: require("./assets/images/TheWarriorsPoster.jpg"),
      rating: "Underrated Classic",
    },
    {
      name: "The Patriot",
      image: require("./assets/images/ThePatriotPoster.jpg"),
      rating: "Were going to Charlestown?!?",
    },
    {
      name: "Braveheart",
      image: require("./assets/images/BraveheartPoster.jpeg"),
      rating: "A Masculine Love Story",
    },
    {
      name: "The Last Samurai",
      image: require("./assets/images/TheLastSamuraiPoster.jpg"),
      rating: "Who Doesnt Love Samurai?",
    },
    {
      name: "Avengers: Infinity War",
      image: require("./assets/images/AvengersInfinityWarPoster.jpeg"),
      rating: "Best Superhero Movie Ever! 1 of 2",
    },
    {
      name: "Avengers: Endgame",
      image: require("./assets/images/AvengersEndgamePoster.jpeg"),
      rating: "Best Superhero Movie Ever! 2 of 2",
    },
    {
      name: "Warrior",
      image: require("./assets/images/WarriorPoster.jpg"),
      rating: "Perfectly Casted MMA Movie",
    },
    {
      name: "Lonesome Dove",
      image: require("./assets/images/LonesomeDovePoster.jpg"),
      rating: "The Book is Better, but still great!",
    },
    {
      name: "The Martian",
      image: require("./assets/images/TheMartianPoster.jpg"),
      rating: "If you like this, read Project Hail Mary!",
    },
  ]);
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tupa's Top Ten Movies</Text>
        </View>

        <View style={styles.listContainer}>
          <ScrollView>
            {movieItems.map((itemData) => (
              <MovieItem
                name={itemData.name}
                image={itemData.image}
                rating={itemData.rating}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#f38507",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
    marginBottom: 20,
    borderWidth: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "90%",
  },
});
