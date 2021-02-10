import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ListHeader = ({ turn1, turn2, left, partnerLeft }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{turn1}</Text>
      <View style={styles.subline} />
      <Text>{left}</Text>
      <View style={styles.line} />
      <Text style={styles.text2}>{turn2}</Text>
      <View style={styles.subline} />
      <Text>{partnerLeft}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderTopWidth: 1,
    borderTopColor: "black",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 25,
  },
  text2: {
    paddingLeft: "16%",
    fontSize: 25,
  },
  line: {
    position: "absolute",
    left: "50%",
    height: "100%",
    width: 0.5,
    backgroundColor: "black",
  },
  subline: {
    height: "50%",
    width: 1,
    backgroundColor: "#b8b6b6",
  },
});
