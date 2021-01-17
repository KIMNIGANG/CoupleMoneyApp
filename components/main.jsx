import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import uuid from "react-native-uuid";
import { getMoneyList } from "../service/get_moneyList";
import { Slider } from "./slider";
import { removeFromList } from "../service/removeFromList";

export const Main = () => {
  const [turn1, setTurn1] = useState(0);
  const [sum, setSum] = useState(0);
  const [user1, setUser1] = useState([]);
  const [user2, setUser2] = useState([
    { money: 1000, key: uuid.v4(), category: "food" },
    { money: 120000, key: uuid.v4(), category: "etc" },
    { money: 1.3, key: uuid.v4(), category: "house" },
    { money: 1040, key: uuid.v4(), category: "restaruant" },
    { money: 1040, key: uuid.v4(), category: "play" },
    { money: 1040, key: uuid.v4(), category: "food" },
    { money: 1040, key: uuid.v4(), category: "food" },
    { money: 1040, key: uuid.v4(), category: "food" },
  ]);

  useEffect(() => {
    getMoneyList(user1, setUser1);
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
