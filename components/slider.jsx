import React from "react";
import {
  AppRegistry,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import { MainView } from "./slide1/main_view";
import firebase from "firebase";
import { useEffect } from "react";
import { useState } from "react";

export const Slider = ({ user1, user2, handleDelete, handleAdd, turn1 }) => {
  const logOut = () => {
    Actions.Login();
  };

  const [name, setName] = useState("");

  const userName = firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        setName(doc.data().name);
      }
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });

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
        <Text style={styles.text}>{name} And simple</Text>
        <Button title="test" />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    paddingTop: "10%",
    flexDirection: "row",
    backgroundColor: "#9DD6EB",
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
