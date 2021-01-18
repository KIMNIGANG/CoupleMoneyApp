import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        <Text style={styles.subText}>Sign in with your account</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
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
    backgroundColor: "#fceeff",
  },
  header: {
    flex: 0.5,
    backgroundColor: "#fceeff",
    alignItems: "center",
    justifyContent: "center",
  },
  headText: {
    position: "absolute",
    top: "9%",
    left: "10%",
    fontSize: 20,
    fontFamily: "Georgia",
  },
  headAuthor: {
    position: "absolute",
    top: "25%",
    right: "18%",
    fontFamily: "Georgia",
    fontSize: 15,
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
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: "#3cd579",
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
    marginTop: "10%",
  },
  signupText: {
    fontSize: 15,
    color: "orange",
  },
  icon: {
    marginTop: "20%",
    width: 450,
    height: 450,
  },
});
