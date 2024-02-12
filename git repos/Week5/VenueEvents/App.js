import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useState} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  
  // Set the state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("Home");

  // Determine which screen to be on
  let screen = < />;
  
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
