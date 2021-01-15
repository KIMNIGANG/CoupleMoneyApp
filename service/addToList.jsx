import React from "react";
import firebase from "firebase";
import "firebase/firestore";
import uuid from "react-native-uuid";

export const addToList = (money) => {
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        const array = doc.data().moneyList;

        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .update({
            moneyList: firebase.firestore.FieldValue.arrayUnion({
              money,
              key: uuid.v4(),
            }),
          });
      }
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });
};
