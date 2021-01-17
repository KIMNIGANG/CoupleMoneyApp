import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

import RNPickerSelect from "react-native-picker-select";
import { addToList } from "../../service/addToList";

export const Editor = ({ handleAdd }) => {
  const [money, setMoney] = useState();
  const [category, setCategory] = useState("");

  const submit = (value) => {
    if (value <= 0) {
      return;
    }
    handleAdd(value, category);
    addToList(value, category);
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
  };

  return (
    <View style={styles.container}>
      <View style={styles.wall} />
      <View style={styles.selector}>
        <Text>Select</Text>
        <View style={styles.listSelector}>
          <RNPickerSelect
            onValueChange={(value) => setCategory(value)}
            items={[
              { label: "Food", value: "food" },
              { label: "Play", value: "play" },
              { label: "Transportation", value: "transportation" },
              { label: "Restaruant", value: "restaruant" },
              { label: "House", value: "house" },
              { label: "Etc", value: "etc" },
            ]}
          />
        </View>
        <Image source={require("../../img/calendar.png")} />
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
    backgroundColor: "white",
  },
  wall: {
    width: "100%",
    height: 2,
    backgroundColor: "black",
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
  selector: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  listSelector: {
    width: "40%",
    height: 36,
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
        borderColor: "grey",
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
      },
      android: {},
      default: {},
    }),
  },
  button: {
    width: "100%",
  },
});
