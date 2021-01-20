import React from "react";
import { AppRegistry, ScrollView, StyleSheet, Text, View } from "react-native";
import { Editor } from "./editor";
import { List } from "./list";
import { ListHeader } from "./list_header";

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
import { Nopartner } from "./nopartner";

const adUnitID = Platform.select({
  ios: "ca-app-pub-3940256099942544/2934735716",
  android: "ca-app-pub-3940256099942544/6300978111",
});

export const MainView = ({
  user1,
  user2,
  handleDelete,
  handleAdd,
  turn1,
  partner,
}) => {
  return (
    <View style={styles.slide1}>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={adUnitID}
        servePersonalizedAds="true"
      />
      <View style={styles.listContainer}>
        <ListHeader turn1={turn1} />
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
                <List key={item.key} item={item} handleDelete={handleDelete} />
              ))}
            </ScrollView>
          )}
          {!partner && <Nopartner />}
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
    height: "100%",
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
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
});
