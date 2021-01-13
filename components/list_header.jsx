import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ListHeader = ({ turn1 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{turn1}</Text>
      <View style={styles.wall} />
      <Text style={styles.text2}>Turn:2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: 50,
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 25,
  },
  text2: {
    paddingLeft: "16%",
    fontSize: 25,
  },
  wall: {
    position: "absolute",
    left: "50%",
    height: "70%",
    width: 2,
    backgroundColor: "black",
  },
});
