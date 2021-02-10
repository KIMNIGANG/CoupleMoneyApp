import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Slide3 } from "./slide3";
import Swiper from "react-native-swiper";
import { MainView } from "./slide1/main_view";

export const Slider = ({
  user1,
  user2,
  handleDelete,
  handleAdd,
  turn1,
  turn2,
  partner,
  left,
  partnerLeft,
  uid,
  pUid,
}) => {
  return (
    <Swiper
      showsButtons={false}
      showsPagination={Platform.OS === "ios" ? true : false}
    >
      <View style={styles.slide1}>
        <MainView //
          partnerLeft={partnerLeft}
          left={left}
          turn1={turn1}
          turn2={turn2}
          user1={user1}
          user2={user2}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
          partner={partner}
          uid={uid}
        />
      </View>
      <View style={styles.slide3}>
        <Slide3 uid={uid} pUid={pUid} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
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
