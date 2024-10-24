import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Listing from "./Listing";
import Header from "./Header";
import { colors } from "./styles";

const App = () => {
  const apiUrl = "https://jsonmock.hackerrank.com/api/food_outlets";
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setIsLoading(false);
      })
      .catch((error) => console.log("Error", error));
  };

  if (error) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Header count={data.length} />
        <Listing restaurants={data} />
      </View>
      {isLoading && (
        <View style={styles.progressContainer}>
          <ActivityIndicator
            testID="progress"
            size="large"
            color={colors.brandColor}
          />
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  progressContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
