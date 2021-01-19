import React, { useState } from "react";
import { Keyboard, Image, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";
import { useEffect } from "react";

export const Login = ({ navigation }) => {
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

  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.warn(error);
      });
  };

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

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
          <Text style={styles.headText}>Welcome to Double Money Book</Text>
        </View>

        <View style={styles.inputs}>
          <View style={styles.blockContainer}>
            <View style={styles.inputContainer}>
              <Image
                source={require("../../img/email.png")}
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Login by email"
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
      </View>
      {show && (
        <View style={styles.regText}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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

  footer: {
    flex: 0.7,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom: "30%",
  },
  headMessage: {
    width: "100%",
  },
  headText: {
    fontSize: 20,
    marginTop: "10%",
    marginLeft: "5%",
    ...Platform.select({
      ios: {
        fontSize: 23,
        fontFamily: "Georgia",
      },
      android: {
        fontSize: 18,
        fontFamily: "serif",
      },
      default: {
        fontSize: 18,
        fontFamily: "serif",
      },
    }),
  },
  headAuthor: {
    fontSize: 15,
    marginTop: "3%",
    marginLeft: "70%",
    ...Platform.select({
      ios: {
        fontSize: 22,
        fontFamily: "Georgia",
      },
      android: {
        fontSize: 17,
        fontFamily: "serif",
      },
      default: {
        fontSize: 17,
        fontFamily: "serif",
      },
    }),
  },

  inputs: {
    width: "100%",
    marginTop: "15%",
    justifyContent: "center",
    alignItems: "center",
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
  loginButton: {
    width: 250,
    height: 50,
    backgroundColor: "#ffd7d7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7%",
  },
  loginText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    ...Platform.select({
      ios: {
        fontSize: 22,
        fontFamily: "Georgia",
      },
      android: {
        fontSize: 17,
        fontFamily: "serif",
      },
      default: {
        fontSize: 17,
        fontFamily: "serif",
      },
    }),
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
