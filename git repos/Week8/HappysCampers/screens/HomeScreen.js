import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  Pressable,
  Platform,
  Modal,
  Button,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";
import NavButton from "../components/NavButton";

function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckInPicker(true);
    }
    setCheckIn(currentDate);
  }

  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckOutPicker(true);
    }
    setCheckOut(currentDate);
  }

  const camperCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [numCampers, setNumCampers] = useState(0);
  const [showNumCampers, setShowNumCampers] = useState(false);

  function showNumCampersPicker() {
    setShowNumCampers(true);
  }
  function hideNumCampersPicker() {
    setShowNumCampers(false);
  }
  function onChangeNumCampers(index) {
    setNumCampers(index);
  }

  const tentCounts = [1, 2, 3, 4, 5];
  const [numTents, setNumTents] = useState(0);
  const [showNumTents, setShowNumTents] = useState(false);

  function showNumTentsPicker() {
    setShowNumTents(true);
  }
  function hideNumTentsPicker() {
    setShowNumTents(false);
  }
  function onChangeNumTents(index) {
    setNumTents(index);
  }

  const [results, setResults] = useState("");

  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkIn.toDateString()}\n`;
    res = res + `Number of Campers:\t\t${camperCounts[numCampers]}\n`;
    res = res + `Number of Tents:\t\t${tentCounts[numTents]}\n`;
    setResults(res);
  }

  const { width, height } = useWindowDimensions();

  const dateLabelFlex = {
    fontSize: width * 0.1,
  };

  const dateTextFlex = {
    fontSize: width * 0.05,
  };

  return (
    <ImageBackground
      source={require("../assets/images/Khabib2.0.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
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
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Title>Happys' Campers</Title>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>

          <View>
            {showCheckIn && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckInAndroid"
                value={checkIn}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckIn}
              />
            )}
            {showCheckIn && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckInAndroid"
                      value={checkIn}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckIn}
                    />
                    <NavButton title="Confirm" onPress={hideCheckInPicker} />
                  </View>
                </View>
              </Modal>
            )}
            {showCheckOut && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckOutAndroid"
                value={checkOut}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckOut}
              />
            )}
            {showCheckOut && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckOutAndroid"
                      value={checkOut}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckOut}
                    />
                    <Button title="Confirm" onPress={hideCheckOutPicker} />
                  </View>
                </View>
              </Modal>
            )}
          </View>

          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Campers:
            </Text>
            <Pressable onPress={showNumCampersPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {camperCounts[numCampers]}
                </Text>
              </View>
            </Pressable>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumCampers}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Campers:
                  </Text>
                  <WheelPicker
                    selectedIndex={numCampers}
                    options={camperCounts}
                    onChange={onChangeNumCampers}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumCampersPicker} />
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Tents:
            </Text>
            <Pressable onPress={showNumTentsPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {tentCounts[numTents]}
                </Text>
              </View>
            </Pressable>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumTents}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Tents:
                  </Text>
                  <WheelPicker
                    selectedIndex={numTents}
                    options={tentCounts}
                    onChange={onChangeNumTents}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumTentsPicker} />
                </View>
              </View>
            </Modal>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>

          <View style={styles.resultsContainer}>
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.3,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "100%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
  },
  dateLabel: {
    fontSize: 100,
    color: Colors.primary500,
    fontFamily: "hotel",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateText: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width: 1000,
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  results: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "hotel",
    textShadowColor: "black", //outline color
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});
