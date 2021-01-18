import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
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
      <TextInput
        style={styles.input}
        placeholder="name"
        onChangeText={(name) => {
          setName(name);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={(email) => {
          setEmail(email);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => {
          setPassword(password);
        }}
      />
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
  input: {
    width: "70%",
    height: 40,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    width: "50%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    marginBottom: 20,
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
