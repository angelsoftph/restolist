import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Listings = ({ restaurants }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer} testID="restaurant-item">
      <View style={styles.row}>
        <Text style={styles.name} testID="name">
          {item.name}
        </Text>
        <Text style={styles.rating} testID="average-rating">
          <Icon name="star" size={12} color="#000000" />
          {item.user_rating.average_rating}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.city} testID="city">
          {item.city}
        </Text>
        <Text style={styles.votes} testID="votes-count">
          {item.user_rating.votes}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  row: {
    flexDirection: "row",
  },
  name: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  city: {
    flex: 1,
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    flex: 1,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "right",
  },
  votes: {
    flex: 1,
    fontSize: 12,
    textAlign: "right",
  },
});
