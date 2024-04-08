import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function OrdersSummary(props) {
    // Calculate result
    const orderSum = props.orders.reduce((sum, item) => {
        return sum + item.total
    }, 0); 
    
return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.summaryName}</Text>
      <Text style={styles.sum}>${orderSum.toFixed(2)}</Text>
    </View>
  );
}

export default OrdersSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6, 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400
    },
    sum: {
        fontSize: 16,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary500
    }
})