import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";

export const Slide3 = () => {
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const deleteAccount = () => {
    // const user = firebase.auth().currentUser;
    // user
    //   .delete()
    //   .then(function () {
    //     // User deleted.
    //   })
    //   .catch(function (error) {
    //     // An error happened.
    //   });
  };

  return (
    <View>
      <TouchableOpacity onPress={deleteAccount} style={styles.loginButton}>
        <Text style={styles.loginText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOut} style={styles.loginButton}>
        <Text style={styles.loginText}>SignOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    marginBottom: "16%",
    width: 250,
    height: 50,
    backgroundColor: "#CBE7F6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
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
});
