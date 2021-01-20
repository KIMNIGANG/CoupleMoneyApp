import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { MainView } from "./slide1/main_view";

export const Slider = ({ user1, user2, handleDelete, handleAdd, turn1 }) => {
  return (
    <Swiper showsButtons={false}>
      <View style={styles.slide1}>
        <MainView //
          turn1={turn1}
          user1={user1}
          user2={user2}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
        <Button title="test" />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    paddingTop: "8%",
    flexDirection: "row",
    backgroundColor: "white",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  wall: {
    marginTop: "20%",
    height: "60%",
    width: 1,
    backgroundColor: "grey",
  },
});
