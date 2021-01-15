import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import firebase from "firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSignUp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.warn(result);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="email"
        onChangeText={(email) => {
          setEmail(email);
        }}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => {
          setPassword(password);
        }}
      />
      <Button
        onPress={() => {
          onSignUp();
        }}
        title="Sign Up"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});