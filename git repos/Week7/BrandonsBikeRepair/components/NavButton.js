import { Pressable, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
  return (
    <Pressable android_ripple={{ color: "gray" }} onPress={props.onPress}>
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textContainer: {},
  text: {
    fontSize: 25,
    textAlign: "center",
    padding: 8,
    color: Colors.accent500,
  },
});
