import React from "react";
import firebase from "firebase";
import uuid from "react-native-uuid";
import "firebase/firestore";
import { setTurn } from "./set_turn";

export const getMoneyList = (moneyList, setMoneyList, setSum, setTurn1) => {
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
        for (let i = 0; i < doc.data().moneyList.length; i++) {
          list[i] = {
            money: doc.data().moneyList[i].money,
            key: doc.data().moneyList[i].key,
            category: doc.data().moneyList[i].category,
          };
          if (i == doc.data().moneyList.length - 1) {
            setMoneyList(list);
            setTurn(list, setSum, setTurn1);
          }
        }
      }
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });
};
