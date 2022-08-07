import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/data/orders.json";

const OrdersScreen = () => {
    return (
      <View style={styles.container}>
        {/* <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Your Orders</Text>
        </View> */}
        <FlatList
          data={orders}
          renderItem={({ item }) => <OrderListItem order={item} />}
        />
      </View>
    );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
  }
});
