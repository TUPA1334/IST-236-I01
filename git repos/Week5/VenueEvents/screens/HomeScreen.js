import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";



function HomeScreen(props) {
    // Set the safe area screen boundaries
    const insets = useSafeAreaInsets();

    return (
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top, 
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight insets.right,
            }
        ]}>
            
        </View>
    );
 
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center"
    }
});
