import React from "react";
import firebase from "firebase";
import uuid from "react-native-uuid";

export const getMoneyList = (moneyList, setMoneyList) => {
  firebase
    .firestore()
    .collection("users")
    .doc("test")
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        console.log(doc.data().moneyList);

        // for (let i = 0; i < doc.data().moneyList.length; i++) {
        //   console.log(doc.data().moneyList);
        //   //   setMoneyList([
        //   //     ...moneyList,
        //   //     { money: doc.data().moneyList.i, key: uuid.v4() },
        //   //   ]);
        // }
      }
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });
};