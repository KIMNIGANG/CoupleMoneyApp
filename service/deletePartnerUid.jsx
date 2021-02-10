import React from "react";
import firebase from "firebase";
import "firebase/firestore";

export const deletePartnerUid = (pUid) => {
  firebase
    .firestore()
    .collection("users")
    .doc(pUid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        firebase.firestore().collection("users").doc(pUid).update({
          partnerUid: "",
        });
      }
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });
};
