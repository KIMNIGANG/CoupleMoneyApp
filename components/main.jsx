import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import uuid from "react-native-uuid";
import { getMoneyList } from "../service/get_moneyList";
import { getPartnerList } from "../service/get_partnerList";
import { Slider } from "./slider";
import { removeFromList } from "../service/removeFromList";

export const Main = () => {
  const [turn1, setTurn1] = useState(0);
  const [sum, setSum] = useState(0);
  const [user1, setUser1] = useState([]);
  const [user2, setUser2] = useState([]);
  const [partner, setPartner] = useState(false);

  useEffect(() => {
    getMoneyList(user1, setUser1);
    getPartnerList(user2, setUser2, setPartner);
  }, [getMoneyList]);

  const turnChange = () => {
    let turn = sum / 10000;
    turn = turn.toFixed(1);
    setTurn1(turn);
  };

  const sumChange = (money) => {
    const whole = sum + money;
    setSum(whole);
  };

  const handleAdd = (money, category) => {
    setUser1([...user1, { money, category, key: uuid.v4() }]);
    sumChange(Number(money));
    turnChange();
  };

  const handleDelete = (toDelete) => {
    const moneyList = user1.filter((item) => item.key !== toDelete.key);
    setUser1(moneyList);
    removeFromList(toDelete.money, toDelete.key);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Slider
          partner={partner}
          user1={user1}
          user2={user2}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
          turn1={turn1}
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
});
