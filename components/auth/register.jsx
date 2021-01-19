import React, { useState } from "react";
import { Keyboard, Button, Image, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import firebase from "firebase";
import "firebase/firestore";
import { useEffect } from "react";

export const Register = ({ navigation }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  });

  const _keyboardDidShow = () => {
    setShow(false);
  };

  const _keyboardDidHide = () => {
    setShow(true);
  };

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
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require("../../img/icon.png")}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.headMessage}>
          <Text style={styles.headText}>
            Life's greatest happiness is{"\n"}to be convinced we are loved.
          </Text>
          <Text style={styles.headAuthor}>Victor Hugo</Text>
        </View>
        <View style={styles.inputs}>
          <View style={styles.blockContainer}>
            <View style={styles.inputContainer}>
              <Image
                source={require("../../img/name.png")}
                style={styles.icon}
              />
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
              <Image
                source={require("../../img/email.png")}
                style={styles.icon}
              />
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
        </View>

        <View style={styles.button}>
          <Button
            onPress={() => {
              onSignUp();
            }}
            title="Sign Up"
          />
        </View>
      </View>
      {show && (
        <View style={styles.regText}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Landing")}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffd7d7",
  },
  header: {
    width: "100%",
    flex: 0.5,
    backgroundColor: "#ffd7d7",
    alignItems: "center",
    justifyContent: "center",
  },
  headerIcon: {
    marginTop: "6%",
    width: 350,
    height: 350,
  },
  headMessage: {
    width: "100%",
  },
  headText: {
    fontSize: 20,
    fontFamily: "Georgia",
    marginTop: "5%",
    marginLeft: "5%",
  },
  headAuthor: {
    fontFamily: "Georgia",
    fontSize: 15,
    marginTop: "3%",
    marginLeft: "70%",
  },

  footer: {
    flex: 0.7,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom: "30%",
  },
  inputs: {
    marginTop: "15%",
    width: "100%",
  },
  blockContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
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
