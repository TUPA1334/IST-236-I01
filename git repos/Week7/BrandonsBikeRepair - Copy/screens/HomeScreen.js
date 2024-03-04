import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";

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
      <View style={styles.titleContainer}>
        <Title>Brandons Bikes</Title>
      </View>
      <ScrollView>
        <View>
          <Text></Text>
          <RadioGroup
            radioButtons={props.RadioButtons}
            onPress={props.onSetId}
            selectedId={props.Id}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabel}
          />
        </View>
        <View>
          <Text></Text>
          <RadioGroup
            radioButtons={props.RadioButtons}
            onPress={props.onSetId}
            selectedId={props.Id}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabel}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}></Text>
            <View style={styles.checkBoxSubContainer}>
              {props..map((item) => {
                return (
                  <BouncyCheckbox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSet.bind(this, item.id)}
                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primary500,
                    }}
                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primary500,
                    }}
                    iconStyle={{
                      borderRadius: 0,
                    }}
                    fillColor={Colors.primary500}
                    style={{
                      padding: 2,
                    }}
                  />
                );
              })}
            </View>
          </View>
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}></Text>
            <View style={styles.checkBoxSubContainer}>
              {props..map((item) => {
                return (
                  <BouncyCheckbox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSet.bind(this, item.id)}
                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primary500,
                    }}
                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primary500,
                    }}
                    iconStyle={{
                      borderRadius: 0,
                    }}
                    fillColor={Colors.primary500}
                    style={{
                      padding: 2,
                    }}
                  />
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}></Text>
            <View style={styles.checkBoxSubContainer}>
              {props..map((item) => {
                return (
                  <BouncyCheckbox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSet.bind(this, item.id)}
                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primary500,
                    }}
                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primary500,
                    }}
                    iconStyle={{
                      borderRadius: 0,
                    }}
                    fillColor={Colors.primary500}
                    style={{
                      padding: 2,
                    }}
                  />
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.Container}>
          <Text style={styles.checkBoxHeader}></Text>
          <RadioGroup
            radioButtons={props.RadioButtons}
            onPress={props.onSet}
            selectedId={props.}
            layout="column"
            containerStyle={[styles.radioGroup, { alignItems: "flex-start" }]}
            labelStyle={styles.radioGroupLabels}
          />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.addOnsContainer}>
            <View>
              <Text style={styles.addOnsLabel}></Text>
              <View style={styles.checkBoxSubContainer}>
                <Switch
                  onValueChange={props.}
                  value={props.}
                  thumbColor={
                    props.doubleMeat ? Colors.primary500 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>
            </View>
            <View style={styles.addOnsContainer}>
              <Text style={styles.addOnsLabel}></Text>
              <Switch
                onValueChange={props.onSetDoubleCheese}
                value={props.}
                thumbColor={
                  props. ? Colors.primary500 : Colors.primary800
                }
                trackColor={{
                  false: Colors.primary500,
                  true: Colors.primary800,
                }}
              />
            </View>
          </View>

          <View style={styles.addOnsContainer}>
            <View>
              <Text style={styles.addOnsLabel}></Text>
              <Switch
                onValueChange={props.onSet}
                value={props.}
                thumbColor={
                  props. ? Colors.primary500 : Colors.primary800
                }
                trackColor={{
                  false: Colors.primary500,
                  true: Colors.primary800,
                }}
              />
            </View>
            <View style={styles.addOnsContainer}>
              <Text style={styles.addOnsLabel}></Text>
              <Switch
                onValueChange={props.Combo}
                value={props.Combo}
                thumbColor={
                  props.Combo ? Colors.primary500 : Colors.primary800
                }
                trackColor={{
                  false: Colors.primary500,
                  true: Colors.primary800,
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Submit Order</NavButton>
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
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary500,
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 15,
    color: Colors.primary500,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {},
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary500,
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  cheeseContainer: {
    alignItems: "center",
  },
  addOnsContainer: {
    justifyContent: "space-between",
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
});
