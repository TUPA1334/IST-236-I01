import { Pressable, StyleSheet, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
    borderWidth: 3,
    borderColor: Colors.primary500,
    backgroundColor: Colors.accent500,
    width: 300,
    marginTop: 10,
  },
  textContainer: {},
  text: {
    fontSize: 25,
    textAlign: "center",
    padding: 8,
  },
});
