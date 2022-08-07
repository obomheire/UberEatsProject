import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderListItem = ({ order }) => {
  return (
      <View style={styles.container}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </View>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 5,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
});
