import React from "react";
import firebase from "firebase";
import "firebase/firestore";

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
        const i = doc.data().moneyList.length + 1;
      }
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });
};
