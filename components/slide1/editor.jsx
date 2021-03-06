import React, { useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
import { addToList } from "../../service/addToList";

export const Editor = ({ handleAdd }) => {
  const [money, setMoney] = useState();
  const [category, setCategory] = useState("etc");
  const rightNow = new Date();
  const date = rightNow.toISOString().slice(5, 10).replace(/-/g, "/");

  const submit = (value) => {
    if (value <= 0) {
      return;
    }
    if (category == null) {
      setCategory("etc");
      handleAdd(value, category, date);
      addToList(value, category, date);
    } else {
      handleAdd(value, category, date);
      addToList(value, category, date);
    }
    setMoney("");
  };

  const onChanged = () => {
    if (money == undefined) {
      return;
    }
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
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Money"
          placeholderTextColor="grey"
          keyboardType="numeric"
          maxLength={10}
          onSubmitEditing={onChanged}
          value={money}
          onChangeText={(value) => {
            setMoney(value);
          }}
        />
      </View>
      <TouchableOpacity onPress={onChanged} style={styles.loginButton}>
        <Text style={styles.loginText}>Add</Text>
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
    height: 1,
    backgroundColor: "#b8b6b6",
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
    borderWidth: 1,
    borderColor: "#595959",
    fontSize: 17,
    paddingHorizontal: 10,
  },
  selector: {
    width: "79%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  listSelector: {
    width: "100%",
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
  datepicker: {
    width: "40%",
    marginLeft: 10,
  },
  datePickerContainer: {
    height: 30,
    width: 30,
    backgroundColor: "yellow",
  },
});
