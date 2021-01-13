import React from "react";
import {
  AppRegistry,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Actions } from "react-native-router-flux";

import Swiper from "react-native-swiper";
import { FormButton } from "./form_button";
import { List } from "./list";
import { MainView } from "./main_view";

export const Slider = ({ user1, user2, handleDelete, handleAdd, turn1 }) => {
  const logOut = () => {
    Actions.Login();
  };

  return (
    <Swiper showsButtons={true} showsButtons={false}>
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
        <Button
          title="login"
          onPress={() => {
            Actions.LoginScreen();
          }}
        />
        <FormButton buttonTitle="Logout" />
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
