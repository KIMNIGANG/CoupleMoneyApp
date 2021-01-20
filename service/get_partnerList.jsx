import React from "react";
import firebase from "firebase";
import uuid from "react-native-uuid";
import "firebase/firestore";

export const getPartnerList = (moneyList, setMoneyList, setPartner) => {
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
          setPartner(false);
          return;
        } else {
          setPartner(true);
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
                for (let i = 0; i < doc.data().moneyList.length; i++) {
                  console.log(doc.data().moneyList);
                  list[i] = {
                    money: doc.data().moneyList[i].money,
                    key: doc.data().moneyList[i].key,
                    category: doc.data().moneyList[i].category,
                  };
                  if (i == doc.data().moneyList.length - 1) {
                    setMoneyList(list);
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
