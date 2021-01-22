import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import uuid from "react-native-uuid";
import { getMoneyList } from "../service/get_moneyList";
import { getPartnerList } from "../service/get_partnerList";
import { Slider } from "./slider";
import { removeFromList } from "../service/removeFromList";

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

const adUnitID = Platform.select({
  ios: "ca-app-pub-3940256099942544/2934735716",
  android: "ca-app-pub-3940256099942544/6300978111",
});

export const Main = () => {
  const [turn1, setTurn1] = useState(0);
  const [turn2, setTurn2] = useState(0);
  const [sum1, setSum1] = useState(0);
  const [user2Sum, setUser2Sum] = useState(0);
  const [user1, setUser1] = useState([]);
  const [user2, setUser2] = useState([]);
  const [partner, setPartner] = useState(true);

  useEffect(() => {
    getMoneyList(user1, setUser1, setSum1, setTurn1);
    getPartnerList(user2, setUser2, setTurn2, setPartner, setUser2Sum);
  }, []);

  function handleAdd(money, category) {
    setUser1([...user1, { money, category, key: uuid.v4() }]);
    const sum = sum1 + Number(money);
    setSum1(sum);
    const turn = Math.floor(sum / 10000);
    setTurn1(turn);
  }

  function handleDelete(toDelete) {
    const moneyList = user1.filter((item) => item.key !== toDelete.key);
    setUser1(moneyList);
    removeFromList(toDelete.money, toDelete.key, toDelete.category);
  }

  return (
    <View style={styles.container}>
      <AdMobBanner
        style={styles.admob}
        bannerSize="fullBanner"
        adUnitID={adUnitID}
        servePersonalizedAds="true"
      />
      <View style={styles.sliderContainer}>
        <Slider
          partner={partner}
          user1={user1}
          user2={user2}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
          turn1={turn1}
          turn2={turn2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  admob: {
    marginTop: "30%",
  },
});
