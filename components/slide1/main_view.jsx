import React from "react";
import { AppRegistry, ScrollView, StyleSheet, Text, View } from "react-native";
import { Editor } from "./editor";
import { List } from "./list";
import { ListHeader } from "./list_header";

export const MainView = ({ user1, user2, handleDelete, handleAdd, turn1 }) => {
  return (
    <View style={styles.slide1}>
      <View style={styles.listContainer}>
        <ListHeader turn1={turn1} />
        <View style={styles.listFlexContainer}>
          <ScrollView style={styles.userList}>
            {user1.map((item) => (
              <List key={item.key} item={item} handleDelete={handleDelete} />
            ))}
          </ScrollView>
          <View style={styles.wall} />
          <ScrollView style={styles.userList}>
            {user2.map((item) => (
              <List key={item.key} item={item} handleDelete={handleDelete} />
            ))}
          </ScrollView>
        </View>
      </View>
      <Editor style={styles.editor} handleAdd={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#9DD6EB",
  },
  listContainer: {
    flex: 1,
    borderColor: "white",
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  listFlexContainer: {
    flex: 1,
    flexDirection: "row",
  },
  editor: {
    flex: 1,
  },
  userList: {
    width: "100%",
  },
  wall: {
    marginTop: "5%",
    height: "90%",
    width: 1,
    backgroundColor: "grey",
  },
});
