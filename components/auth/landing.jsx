import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Couple Money App</Text>
      <View style={styles.button}>
        <Button
          title="Are you first time?"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={styles.button}>
        <Button //
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
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
  text: {
    position: "absolute",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 26,
    top: 130,
  },
  button: {
    width: "70%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    marginBottom: 20,
  },
});
