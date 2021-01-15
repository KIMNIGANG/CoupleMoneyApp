import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button //
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});