import { Text, View, FlatList, Image} from "react-native";
import React from "react";
import orders from "../../../assets/data/orders.json";
import restaurant from "../../../assets/data/restaurants.json";
import styles from "./styles";
import BasketDishItem from "../../components/BasketDishItem";

const order = orders[0];

const OrderDetailHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image
          source={{
            uri: order.Restaurant.image,
          }}
          style={styles.image}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>
            {orders.status} &#8226; 2 days ago{" "}
          </Text>

          <Text style={styles.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetailScreen = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailHeader}
      data={restaurant[0].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};
export default OrderDetailScreen;
