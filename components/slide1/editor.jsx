import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import RNPickerSelect from "react-native-picker-select";
import { addToList } from "../../service/addToList";

export const Editor = ({ handleAdd }) => {
  const [money, setMoney] = useState();
  const [category, setCategory] = useState("etc");

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
        <View style={styles.listSelector}>
          <RNPickerSelect
            style={{ inputAndroid: { color: "black" } }}
            placeholder={{
              label: "Select Category",
            }}
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
      <TouchableOpacity onPress={onChanged} style={styles.loginButton}>
        <Text style={styles.loginText}>Plus</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    width: "100%",
    height: "100%",
    ...Platform.select({
      ios: {
        marginBottom: "40%",
      },
      android: {
        marginBottom: "42%",
      },
      default: {
        marginBottom: "35%",
      },
    }),

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
    borderWidth: 2,
    fontSize: 17,
    paddingHorizontal: 10,
  },
  selector: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  listSelector: {
    width: "60%",
    height: "55%",
    padding: 5,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "grey",
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
