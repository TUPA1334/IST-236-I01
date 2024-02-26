import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

function NotesScreen(props) {
  // Set safe area insets for the screen
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
        <Title>Notes Screen</Title>
      </View>

      <View>
        <FlatList
          data={props.currentNotes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            <NotesItem
              id={note.item.id}
              title={note.item.title}
              //onView={}
              onDelete={props.onDelete.bind(this, itemData.item.id)}
            />;
          }}
        />
      </View>

      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onNext={props.onNext}>Add New Note</NavButton>
        </View>
        <View style={styles.navButton}>
          <NavButton onNext={props.onHome}>Return Home</NavButton>
        </View>
      </View>
    </View>
  );
}

export default NotesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 55,
    borderColor: Colors.accent500,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    resizeMode: "stretch",
  },
  navButtonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
