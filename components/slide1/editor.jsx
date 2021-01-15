import React, { useState } from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import firebase from "firebase";

export const Editor = ({ handleAdd }) => {
  const [money, setMoney] = useState();

  const submit = (value) => {
    const data = value;
    if (data <= 0) {
      return;
    }
    handleAdd(data);
  };

  const onChanged = () => {
    let newText = "";
    let numbers = "0123456789.";

    for (var i = 0; i < money.length; i++) {
      if (numbers.indexOf(money[i]) > -1) {
        newText = newText + money[i];
      } else {
        alert("please enter numbers only");
        break;
      }
    }
    submit(newText);

    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .set({
        newText,
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wall} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Hello</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Money"
          placeholderTextColor="#6168DB"
          keyboardType="numeric"
          maxLength={10}
          onSubmitEditing={onChanged}
          onChangeText={(value) => {
            setMoney(value);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Plus" onPress={onChanged} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "skyblue",
  },
  wall: {
    width: "100%",
    height: 5,
    backgroundColor: "white",
  },
  inputContainer: {
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#6168DB",
    paddingHorizontal: 10,
  },
  textContainer: {
    width: "80%",
  },
  text: {
    textAlign: "center",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#6168DB",
    borderRadius: 10,
    padding: 10,
  },
  buttonContainer: {
    margin: 10,
    marginBottom: "16%",
    ...Platform.select({
      ios: {
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "lightblue",
      },
      android: {},
      default: {},
    }),
  },
  button: {
    width: "100%",
  },
});
