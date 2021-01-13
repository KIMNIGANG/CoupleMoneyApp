import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const List = ({ item, handleDelete }) => {
  const onDelete = () => {
    handleDelete(item);
  };

  return (
    <View style={styles.list}>
      <View style={styles.itemContainer}>
        <View style={styles.moneyContainer}>
          <Text style={styles.money}>{item.money} $</Text>
        </View>
        <TouchableOpacity //
          style={styles.deletebutton}
          onPress={onDelete}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wall} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  moneyContainer: {
    flex: 1,
    textAlign: "center",
  },
  money: {
    fontSize: 16,
    textAlign: "center",
  },
  turn: {
    fontSize: 25,
    color: "blue",
    marginRight: 15,
  },
  itemContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    width: "70%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wall: {
    height: 2,
    width: "70%",
    backgroundColor: "green",
  },
  deletebutton: {
    borderWidth: 1,
    borderColor: "#0795ff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  deleteText: {
    padding: 5,
    fontSize: 16,
    color: "#0795ff",
  },
});
