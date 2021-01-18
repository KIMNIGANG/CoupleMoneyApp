import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import firebase from "firebase";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSignUp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <View style={styles.container}>
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
      <Button
        onPress={() => {
          onSignUp();
        }}
        title="Sign Up"
      />
      <View style={styles.regText}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signupText}>SignUp</Text>
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
