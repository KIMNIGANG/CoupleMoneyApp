import React from "react";
import firebase from "firebase";
import "firebase/firestore";

export const addPartnerUid = (uid) => {
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .update({
            partnerUid: uid,
          });
      }
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });
};
