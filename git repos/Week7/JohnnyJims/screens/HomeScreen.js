// Purpose: HomeScreen component file for Johnny Jims app.
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import { Colors } from "react-native/Libraries/NewAppScreen";

function HomeScreen(props) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View>
        <Title>Johnny Jims</Title>
      </View>

      <ScrollView>
        <View>
          <Text>Sandwich Size:</Text>
          <RadioGroup
            radioButtons={props.sizeRadioButtons}
            onPress={props.onSetSizeId}
            selectedId={props.sizeId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabel}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    margin: 10,
  },
  radioHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioGroupLabel: {
    fontSize: 20,
  },
});
