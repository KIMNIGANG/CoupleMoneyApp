import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const List = ({ item, handleDelete }) => {
  const onDelete = () => {
    handleDelete(item);
  };

  return (
    <View style={styles.list}>
      <View style={styles.itemContainer}>
        <View style={styles.upContainer}>
          <View style={styles.moneyContainer}>
            <Text style={styles.money}>{item.money}</Text>
            <View style={styles.line} />
            <Image style={styles.logo} source={require("../../img/food.png")} />
          </View>

          <View style={styles.wall} />
        </View>
        <View style={styles.downContainer}>
          <Text style={styles.date}>11/23</Text>
          <TouchableOpacity //
            style={styles.deletebutton}
            onPress={onDelete}
          >
            <Image
              style={styles.logo}
              source={require("../../img/delete.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
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
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
    textAlign: "center",
  },
  money: {
    paddingLeft: 10,
    fontSize: 16,
    paddingBottom: 15,
    textAlign: "center",
  },
  line: {
    position: "absolute",
    left: "51%",
    height: "70%",
    width: 1,
    backgroundColor: "darkgrey",
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 13,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    flexDirection: "column",
    width: "90%",
  },
  upContainer: {
    height: "50%",
    paddingBottom: 3,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  downContainer: {
    height: "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingTop: 5,
  },
  wall: {
    height: 1,
    width: "100%",
    backgroundColor: "grey",
  },
  date: {
    fontSize: 16,
  },
  logo: {
    resizeMode: "cover",
    marginRight: 15,
    width: 27,
    height: 27,
  },
});
