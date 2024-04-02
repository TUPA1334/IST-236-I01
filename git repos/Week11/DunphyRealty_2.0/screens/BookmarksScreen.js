import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { LISTINGS } from "../data/dummy_data";
import List from "../components/List/List";
import Colors from "../constants/colors";

function BookmarksScreen() {
  const bookmarkedListingCtx = useContext(BookmarksContext);
  const bookmarkedListings = LISTINGS.filter((listingItem) => {
    return bookmarkedListingCtx.ids.includes(listingItem.id);
  });

  if (bookmarkedListings.length === 0 || !bookmarkedListings) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved listings yet!</Text>
      </View>
    );
  }
  return <List items={bookmarkedListings} />;
}

export default BookmarksScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "playfairBold",
    color: Colors.primary300,
    opacity: 0.6,
  },
});
