import React from "react";
import { AppRegistry, ScrollView, StyleSheet, Text, View } from "react-native";
import { Editor } from "./editor";
import { List } from "./list";
import { ListHeader } from "./list_header";
import { Nopartner } from "./nopartner";
import { PartnerList } from "./partner_list";

export const MainView = ({
  user1,
  user2,
  handleDelete,
  handleAdd,
  turn1,
  turn2,
  partner,
  left,
  partnerLeft,
  uid,
}) => {
  return (
    <View style={styles.slide1}>
      <View style={styles.listContainer}>
        <ListHeader
          turn1={turn1}
          turn2={turn2}
          left={left}
          partnerLeft={partnerLeft}
        />
        <View style={styles.line} />
        <View style={styles.listFlexContainer}>
          <ScrollView style={styles.userList}>
            {user1.map((item) => (
              <List key={item.key} item={item} handleDelete={handleDelete} />
            ))}
          </ScrollView>
          <View style={styles.wall} />
          {partner && (
            <ScrollView style={styles.userList}>
              {user2.map((item) => (
                <PartnerList key={item.key} item={item} />
              ))}
            </ScrollView>
          )}
          {!partner && <Nopartner uid={uid} />}
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
    backgroundColor: "white",
  },
  listContainer: {
    flex: 1,
    borderColor: "black",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  listFlexContainer: {
    flex: 1,
    flexDirection: "row",
  },
  userList: {
    width: "100%",
  },
  wall: {
    height: "90%",
    marginTop: "6%",
    width: 1,
    backgroundColor: "grey",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
});
