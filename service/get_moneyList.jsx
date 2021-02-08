import React from "react";
import firebase from "firebase";
import uuid from "react-native-uuid";
import "firebase/firestore";
import { setTurn } from "./set_turn";

export const getMoneyList = (setMoneyList, setSum, setTurn1, setLeft) => {
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        const list = [];
        let sum = 0;
        for (let i = 0; i < doc.data().moneyList.length; i++) {
          list[i] = {
            money: doc.data().moneyList[i].money,
            key: doc.data().moneyList[i].key,
            date: doc.data().moneyList[i].date,
            category: doc.data().moneyList[i].category,
          };
          sum += Number(doc.data().moneyList[i].money);
          if (i == doc.data().moneyList.length - 1) {
            setMoneyList(list);
            setSum(sum);
            setTurn(setTurn1, sum, setLeft);
          }
        }
      }
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });
};
