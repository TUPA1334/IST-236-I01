import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button(props) {
  return (
    <View style={props.style}>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, props.mode === "flat" && styles.flat]}>
          <Text
            style={[
              styles.buttonText,
              props.mode === "flat" && styles.flatText,
            ]}
          >
            {props.children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
