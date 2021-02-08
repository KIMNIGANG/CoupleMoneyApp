import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import uuid from "react-native-uuid";
import { getMoneyList } from "../service/get_moneyList";
import { getPartnerList } from "../service/get_partnerList";
import { Slider } from "./slider";
import { removeFromList } from "../service/removeFromList";

import { AdMobBanner } from "expo-ads-admob";

const adUnitID = Platform.select({
  ios: "ca-app-pub-3940256099942544/2934735716",
  android: "ca-app-pub-3940256099942544/6300978111",
});

export const Main = () => {
  const [turn1, setTurn1] = useState(0);
  const [turn2, setTurn2] = useState(0);
  const [sum1, setSum1] = useState(0);
  const [user2Sum, setUser2Sum] = useState(0); //파트너의 썸
  const [user1, setUser1] = useState([]);
  const [user2, setUser2] = useState([]);
  const [left, setLeft] = useState(0);
  const [partnerLeft, setPartnerLeft] = useState(0);
  const [partner, setPartner] = useState(true); //파트너의 유무

  useEffect(() => {
    getMoneyList(setUser1, setSum1, setTurn1, setLeft);
    getPartnerList(setUser2, setPartner, setUser2Sum, setTurn2, setPartnerLeft);
  }, []);

  function handleAdd(money, category, date) {
    setUser1([...user1, { money, category, date, key: uuid.v4() }]);
    const newSum = sum1 + Number(money);
    setSum1(newSum);
    if (Math.floor(newSum / 10000) != turn1) {
      setTurn1(Math.floor(newSum / 10000));
    }
    const newLeft = newSum % 10000;
    setLeft(newLeft);
  }

  function handleDelete(toDelete) {
    const moneyList = user1.filter((item) => item.key !== toDelete.key);
    setUser1(moneyList);
    const newSum = sum1 - Number(toDelete.money);
    setSum1(newSum);
    if (Math.floor(newSum / 10000) != turn1) {
      setTurn1(Math.floor(newSum / 10000));
    }
    removeFromList(
      toDelete.money,
      toDelete.key,
      toDelete.category,
      toDelete.date
    );
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
          partnerLeft={partnerLeft}
          left={left}
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
    backgroundColor: "#565656",
    alignItems: "center",
    justifyContent: "center",
  },
  admob: {
    marginTop: "30%",
  },
});
