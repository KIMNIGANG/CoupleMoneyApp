import React from "react";
import firebase from "firebase";
import uuid from "react-native-uuid";
import "firebase/firestore";
import { setTurn } from "./set_turn";

export const getPartnerList = (
  setMoneyList,
  setPartner,
  setSum,
  setTurn2,
  setPartnerLeft
) => {
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        console.log(doc.data().partnerUid);
        const partnerUid = doc.data().partnerUid;
        if (partnerUid == null) {
          setPartner(false); //파트너가 없다면 false설정
          return;
        } else {
          setPartner(true); //있다면 true
          firebase
            .firestore()
            .collection("users")
            .doc(partnerUid)
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
                    category: doc.data().moneyList[i].category,
                    date: doc.data().moneyList[i].date,
                  };
                  sum += Number(doc.data().moneyList[i].money);
                  if (i == doc.data().moneyList.length - 1) {
                    setMoneyList(list);
                    setSum(sum);
                    setTurn(setTurn2, sum, setPartnerLeft);
                  }
                }
              }
            });
        }
      }
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });
};
