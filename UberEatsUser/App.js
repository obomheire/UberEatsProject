import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Basket from "./src/screens/Basket";
import DishDetailSreen from "./src/screens/DishDetailScreen";
import HomeScreen from "./src/screens/HomeSreen";
import OrderScreen from "./src/screens/OrderScreen";
import RestaurantDetailScreen from "./src/screens/RestaurantDetailSreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailScreen /> */}
      {/* <DishDetailSreen /> */}
      {/* <Basket /> */}
      <OrderScreen />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
    // paddingVertical: 30, // Temporary fix for the status bar
  },
});
