import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const List = ({ item, handleDelete }) => {
  const onDelete = () => {
    console.log(item.category);
    handleDelete(item);
  };

  const getLink = () => {
    switch (item.category) {
      case "food":
        return require("../../img/food.png");
      case "play":
        return require("../../img/play.png");
      case "house":
        return require("../../img/house.png");
      case "restaruant":
        return require("../../img/restaruant.png");
      case "transportation":
        return require("../../img/transportation.png");
      case "etc":
        return require("../../img/etc.png");
    }
  };

  return (
    <View style={styles.list}>
      <View style={styles.itemContainer}>
        <View style={styles.upContainer}>
          <View style={styles.moneyContainer}>
            <Text style={styles.money}>{item.money}</Text>
            <Image style={styles.logo} source={getLink()} />
          </View>

          <View style={styles.wall} />
        </View>
        <View style={styles.downContainer}>
          <Text style={styles.date}>{item.date}</Text>
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
    paddingLeft: "4%",
    fontSize: 16,
    paddingBottom: 15,
    textAlign: "center",
  },
  line: {
    position: "absolute",
    left: "51%",
    height: "100%",
    width: 1,
    backgroundColor: "darkgrey",
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    borderRadius: 2,
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
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 5,
  },
  wall: {
    height: 1,
    width: "113%",
    backgroundColor: "grey",
  },
  deletebutton: {
    marginRight: "5%",
  },
  date: {
    marginLeft: "6%",
    fontSize: 16,
  },
  logo: {
    resizeMode: "cover",
    marginRight: "6%",
    width: 27,
    height: 27,
  },
});
