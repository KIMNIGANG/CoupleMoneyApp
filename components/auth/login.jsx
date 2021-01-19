import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import firebase from "firebase";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in with your account</Text>
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
      <TouchableOpacity
        onPress={() => {
          onLogin();
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
  loginButton: {
    width: 250,
    height: 50,
    backgroundColor: "#ffd7d7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7%",
  },
  loginText: {
    fontFamily: "Georgia",
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  blockContainer: {
    marginTop: "3%",
    width: "100%",
    justifyContent: "center",
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
});
