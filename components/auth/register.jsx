import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import firebase from "firebase";
import "firebase/firestore";

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const moneyList = [];

  const onSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
            moneyList,
          });
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.blockContainer}>
        <View style={styles.inputContainer}>
          <Image source={require("../../img/name.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="name"
            onChangeText={(name) => {
              setName(name);
            }}
          />
        </View>
        <View style={styles.wall} />
      </View>
      <View style={styles.blockContainer}>
        <View style={styles.inputContainer}>
          <Image source={require("../../img/email.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
        </View>
        <View style={styles.wall} />
      </View>
      <View style={styles.blockContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../../img/password.png")}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(password) => {
              setPassword(password);
            }}
          />
        </View>
        <View style={styles.wall} />
      </View>

      <View style={styles.button}>
        <Button
          onPress={() => {
            onSignUp();
          }}
          title="Sign Up"
        />
      </View>
      <View style={styles.regText}>
        <Text>Already have a account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signupText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blockContainer: {
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    width: "83%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    fontSize: 18,
  },
  icon: {
    width: 27,
    height: 27,
    marginRight: 4,
  },
  wall: {
    marginTop: 12,
    width: "80%",
    height: 1,
    backgroundColor: "lightgrey",
  },
  regText: {
    position: "absolute",
    bottom: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    marginTop: "10%",
  },
  signupText: {
    fontSize: 15,
    color: "orange",
  },
});
