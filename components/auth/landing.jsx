import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Login } from "./login";

export const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.icon} source={require("../../img/icon.png")} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.headText}>
          Life's greatest happiness is{"\n"}to be convinced we are loved.
        </Text>
        <Text style={styles.headAuthor}>Victor Hugo</Text>
        <Login />
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity> */}
        <View style={styles.regText}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signupText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    flex: 0.5,
    backgroundColor: "#ffd7d7",
    alignItems: "center",
    justifyContent: "center",
  },
  headText: {
    fontSize: 20,
    fontFamily: "Georgia",
    marginTop: "4.5%",
    marginRight: "8%",
  },
  headAuthor: {
    fontFamily: "Georgia",
    fontSize: 15,
    marginLeft: "25%",
  },
  subText: {
    marginBottom: 10,
    fontSize: 20,
    fontFamily: "Georgia",
    marginBottom: 25,
  },
  footer: {
    flex: 0.7,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: "#ffd7d7",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Georgia",
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  regText: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  signupText: {
    fontSize: 15,
    color: "#ffd7d7",
  },
  icon: {
    marginTop: "6%",
    width: 350,
    height: 350,
  },
});
