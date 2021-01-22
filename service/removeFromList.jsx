import React from "react";
import firebase from "firebase";
import "firebase/firestore";
import uuid from "react-native-uuid";

export const removeFromList = (money, key, category) => {
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        console.log(key);
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .update({
            moneyList: firebase.firestore.FieldValue.arrayRemove({
              money: money,
              key: key,
              category: category,
            }),
          });
      }
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });
};
